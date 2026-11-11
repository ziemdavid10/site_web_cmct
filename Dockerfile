# syntax=docker/dockerfile:1

# Image de production du site CMCT (React + Vite), servie par Nginx.
#   Construire : docker build -t cmct-site .
#   Lancer     : docker run -d -p 8080:8080 --name cmct-site cmct-site
#   ou         : docker compose up -d --build

ARG NODE_VERSION=20.19
ARG NGINX_VERSION=1.27

# ───────────── Étape 1 : dépendances ─────────────
# Couche séparée : elle reste en cache tant que package*.json ne change pas.
FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

# ───────────── Étape 2 : construction du site ─────────────
FROM deps AS build

# Clés EmailJS du formulaire de contact (facultatives).
# Vite les intègre dans le code au moment du build : elles se passent donc avec
# --build-arg (ou via docker compose), jamais avec `docker run -e`.
# Ce sont des clés publiques côté navigateur, pas des secrets.
ARG VITE_EMAILJS_SERVICE_ID=""
ARG VITE_EMAILJS_TEMPLATE_ID=""
ARG VITE_EMAILJS_PUBLIC_KEY=""
ENV VITE_EMAILJS_SERVICE_ID=${VITE_EMAILJS_SERVICE_ID} \
    VITE_EMAILJS_TEMPLATE_ID=${VITE_EMAILJS_TEMPLATE_ID} \
    VITE_EMAILJS_PUBLIC_KEY=${VITE_EMAILJS_PUBLIC_KEY} \
    NODE_ENV=production

COPY . .
RUN npm run build

# ───────────── Étape 3 : serveur web ─────────────
# Nginx « unprivileged » : le serveur tourne sans droits root et écoute sur le port 8080.
# L'image finale ne contient que le site construit : ni Node, ni code source.
FROM nginxinc/nginx-unprivileged:${NGINX_VERSION}-alpine AS runtime

LABEL org.opencontainers.image.title="Site web CMCT" \
      org.opencontainers.image.description="Site institutionnel de Central Media Communication & Technologies" \
      org.opencontainers.image.vendor="CMCT"

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:8080/healthz || exit 1

# SIGQUIT : Nginx termine les requêtes en cours avant de s'arrêter
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]

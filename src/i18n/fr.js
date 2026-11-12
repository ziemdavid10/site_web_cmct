// Textes français du site — contenu issu du « Dossier de présentation CMCT 2026 ».
// Toute clé ajoutée ici doit aussi être ajoutée dans en.js (même structure).

const fr = {
  code: "fr",
  meta: {
    description:
      "CMCT – Central Media Communication & Technologies : médias, communication, production audiovisuelle, formation et technologies numériques à Yaoundé, Cameroun.",
  },
  common: {
    skip: "Aller au contenu",
    backToTop: "Revenir en haut de la page",
    toTop: "Retour en haut",
    close: "Fermer",
    langSwitch: "Choisir la langue",
    langNames: { fr: "Français", en: "English" },
  },
  nav: {
    label: "Navigation principale",
    home: "CMCT – retour à l'accueil",
    about: "Qui sommes-nous",
    organisation: "Organisation",
    expertises: "Expertises",
    projects: "Réalisations",
    homePage: "Accueil",
    news: "Actualités",
    gallery: "Galerie",
    contact: "Contact",
    cta: "Parlons de votre projet",
    open: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menuContact: "Nous joindre",
  },
  topbar: {
    linkedin: "CMCT sur LinkedIn",
    facebook: "CMCT sur Facebook",
    location: "Yaoundé • Cameroun",
  },

  // ───────── Couverture ─────────
  hero: {
    slidesLabel: "Photos d'arrière-plan",
    slideGoTo: (n) => `Afficher la photo ${n}`,
    eyebrow: "Central Media Communication & Technologies",
    domains: ["Médias", "Communication", "Production audiovisuelle", "Formation", "Technologies"],
    slogans: [
      { lead: "Des contenus qui", word: "informent." },
      { lead: "Des stratégies qui", word: "valorisent." },
      { lead: "Des solutions qui", word: "transforment." },
    ],
    vocationTitle: "Notre vocation",
    vocation:
      "Accompagner les entreprises, les institutions et les organisations dans leurs enjeux d'information, de communication, de création de contenus, de développement des compétences et de transformation numérique.",
    approachTitle: "Notre approche",
    approach:
      "Une organisation multisectorielle, des expertises complémentaires et des solutions adaptées aux réalités du marché camerounais.",
    ctaPrimary: "Découvrir nos expertises",
    ctaSecondary: "Parlons de votre projet",
    location: "Yaoundé • Cameroun",
    scroll: "Faire défiler vers la présentation",
    cardTitle: "5 domaines, une seule entreprise",
  },
  // ───────── En-têtes des pages ─────────
  pages: {
    breadcrumb: "Fil d'Ariane",
    notFound: { title: "Page introuvable", intro: "La page demandée n'existe pas ou a été déplacée.", cta: "Retour à l'accueil" },
    about: { title: "Qui sommes-nous", intro: "Une entreprise camerounaise qui réunit les médias, la communication, la production audiovisuelle, la formation et les technologies.", seo: "Découvrez CMCT, entreprise camerounaise basée à Yaoundé : son histoire, sa mission et ses principes au service de l'information, de la communication et des compétences." },
    organisation: { title: "Organisation", intro: "Une direction générale et quatre directions opérationnelles qui travaillent ensemble sur chaque projet.", seo: "L'organisation de CMCT : une direction générale et quatre directions (médias, communication et production, technologies, formation) qui collaborent sur chaque projet." },
    expertises: { title: "Nos expertises", intro: "Quatre directions, des structures spécialisées et des services pensés pour les entreprises, les institutions et les organisations.", seo: "Médias, communication, production audiovisuelle, formation et solutions numériques : les expertises de CMCT pour les entreprises, institutions et organisations au Cameroun." },
    projects: { title: "Nos réalisations", intro: "Productions audiovisuelles, sites web, presse et formations : un aperçu concret de notre travail.", seo: "Réalisations de CMCT : productions audiovisuelles, reportages, images par drone, sites web, titres de presse et formations menés au Cameroun." },
    gallery: { title: "Galerie", intro: "Nos équipes en images : rédactions, tournages, missions de terrain et rencontres.", seo: "Galerie photo de CMCT : rédactions, tournages CaMiGra, missions de terrain avec des partenaires internationaux, formations et rencontres institutionnelles." },
    news: { title: "Actualités", intro: "La vie de CMCT et de ses entités : projets, rencontres, parutions et nouveautés.", seo: "Le blog de CMCT : actualités internes de l'entreprise et de ses entités, dernières unes du Journal L'Étudiant et de Nouvelle Ère, projets et rencontres." },
    contact: { title: "Contact", intro: "Une demande de devis, une consultation ou un partenariat ? Écrivez-nous ou passez nous voir à Yaoundé.", seo: "Contactez CMCT à Yaoundé (Rue Felicia, Immeuble Dangote, Coron) : demande de devis, consultation, partenariat. Téléphone : +237 222 306 079." },
  },

  brands: {
    label: "Nos Entités",
    intro: "Les titres de presse, agences et programmes qui composent l'écosystème CMCT.",
  },

  // ───────── 01. Qui sommes-nous ? ─────────
  about: {
    label: "Qui sommes-nous ?",
    title: "Une entreprise camerounaise au service de l'information, de la communication et des compétences",
    intro:
      "Central Media Communication & Technologies (CMCT) est une entreprise camerounaise qui développe et coordonne des activités dans les médias, la communication, la production audiovisuelle, la formation et les technologies numériques. Elle met ces compétences au service des entreprises, des administrations publiques, des organisations internationales, des établissements d'enseignement et des porteurs de projets.",
    audiencesTitle: "Pour qui ?",
    audiences: [
      "Entreprises",
      "Administrations publiques",
      "Organisations internationales",
      "Établissements d'enseignement",
      "Porteurs de projets",
    ],
    stats: [
      { value: 2017, label: "Lancement de l'initiative", plain: true },
      { value: 4, label: "Directions opérationnelles" },
      { value: 9, label: "Marques et programmes" },
      { value: 5, label: "Domaines d'expertise" },
    ],
    journey: {
      title: "Un parcours construit autour des médias et des compétences",
      steps: [
        {
          year: "2017",
          name: "Groupe 237 Média",
          text: "CMCT s'inscrit dans la continuité d'une initiative entrepreneuriale lancée en 2017 sous l'appellation Groupe 237 Média.",
        },
        {
          year: "2019",
          name: "Cameroon Media Corporation",
          text: "En 2019, cette dynamique s'est structurée autour de Cameroon Media Corporation.",
        },
        {
          year: "Aujourd'hui",
          name: "Central Media Communication Technologies",
          text: "Adoption de la dénomination Central Media Communication Technologies (CMCT), à la suite d'un changement de nom.",
        },
      ],
      conclusion:
        "Cette évolution traduit une ambition : organiser plusieurs métiers complémentaires au sein d'une même entreprise et professionnaliser leur développement.",
    },
    purpose: {
      title: "Notre raison d'être",
      text: "Produire et diffuser une information utile, concevoir des dispositifs de communication pertinents, réaliser des contenus professionnels, transmettre des compétences et développer des outils numériques qui répondent à des besoins concrets.",
    },
    mission: {
      title: "Notre mission",
      items: [
        "Informer et valoriser les enjeux économiques, éducatifs, sociaux et institutionnels à travers des médias et des contenus adaptés.",
        "Accompagner les organisations dans la définition et la mise en œuvre de leurs actions de communication.",
        "Concevoir et produire des contenus audiovisuels, éditoriaux et visuels destinés à informer, expliquer, sensibiliser et promouvoir.",
        "Former et accompagner les talents dans les métiers des médias, de la communication et du numérique.",
        "Développer des solutions technologiques accessibles, utiles et adaptées aux besoins des organisations.",
      ],
    },
    principles: {
      title: "Nos principes d'intervention",
      items: [
        { title: "Écoute et compréhension du besoin", text: "Chaque mission commence par l'analyse du contexte, des publics et des objectifs." },
        { title: "Rigueur professionnelle", text: "Les livrables, les délais et les responsabilités sont définis en amont." },
        { title: "Adaptation au contexte", text: "Les propositions tiennent compte des réalités opérationnelles et budgétaires du Cameroun." },
        { title: "Complémentarité", text: "Les expertises internes peuvent être mobilisées séparément ou dans un dispositif intégré." },
      ],
    },
    quote:
      "CMCT ne se limite pas à juxtaposer des activités : l'entreprise organise des compétences complémentaires pour proposer des réponses cohérentes, du conseil à la réalisation et à la diffusion.",
    director: { name: "M. Boris Landry", role: "Directeur Général, CMCT", alt: "M. Boris Landry, Directeur Général de CMCT", logoAlt: "Logo CMCT" },
  },

  // ───────── 02. Organisation ─────────
  organisation: {
    label: "Une organisation, plusieurs expertises",
    title: "Une entreprise, quatre directions, neuf marques et programmes",
    intro:
      "L'organisation de CMCT repose sur des directions opérationnelles clairement identifiées. Les marques et programmes rattachés à chaque domaine permettent de rendre les expertises visibles auprès des publics et des clients.",
    hq: { name: "CMCT", text: "Direction générale et fonctions support" },
    directions: [
      { id: "media", name: "Direction des Médias et de l'Information", brands: ["etudiant", "nationalpost", "nouvelleere"] },
      { id: "comm", name: "Direction Communication & Production", brands: ["camigra"] },
      { id: "tech", name: "Direction Technologies & Innovation", brands: ["makemba"] },
      { id: "training", name: "Direction Formation & Compétences", brands: ["academy", "esstic", "iric", "prepas"] },
    ],
    transversal: {
      name: "Développement commercial, projets & partenariats",
      text: "Fonction transversale au service de l'ensemble des directions",
    },
    functions: {
      title: "Les fonctions transversales",
      items: [
        {
          title: "Direction générale & fonctions support",
          text: "La Direction générale assure le pilotage, l'orientation stratégique, la coordination des directions et la représentation de l'entreprise. Les fonctions administratives et financières, les ressources humaines, le suivi qualité et la gestion des opérations soutiennent l'ensemble des activités.",
        },
        {
          title: "Développement commercial & partenariats",
          text: "Le développement commercial et les partenariats identifient les opportunités, qualifient les besoins, préparent les propositions techniques et financières, coordonnent les réponses aux consultations et entretiennent la relation avec les clients et partenaires.",
        },
      ],
    },
    collaboration: {
      title: "Un modèle de collaboration souple",
      text: "Une institution peut solliciter une prestation unique — par exemple un film institutionnel, une formation ou un site web — ou confier à CMCT un dispositif plus large combinant stratégie de communication, production de contenus, diffusion médiatique et accompagnement numérique. La composition de l'équipe est définie selon le cahier des charges et les compétences nécessaires.",
      single: "Prestation unique",
      singleExamples: ["Film institutionnel", "Formation", "Site web"],
      integrated: "Dispositif intégré",
      integratedExamples: ["Stratégie de communication", "Production de contenus", "Diffusion médiatique", "Accompagnement numérique"],
    },
    note:
      "Précision organisationnelle : les appellations présentées ici décrivent l'architecture fonctionnelle proposée pour la présentation institutionnelle. Elles ne signifient pas que chaque marque ou programme constitue une personne morale distincte.",
  },

  // ───────── 03 → 06. Directions ─────────
  expertises: {
    label: "Nos expertises",
    title: "Quatre directions, des réponses complètes",
    intro: "Sélectionnez une direction pour découvrir ses structures, ses prestations et sa méthode.",
    tablist: "Directions de CMCT",
    contactCta: "Discuter d'un projet avec cette direction",
    directions: [
      {
        id: "media",
        number: "03",
        tab: "Médias & Information",
        title: "Direction des Médias et de l'Information",
        lead: "Informer, documenter et rendre les sujets accessibles. La direction des médias développe des supports éditoriaux qui traitent notamment de l'éducation, de la jeunesse, de l'actualité, de la société et des initiatives qui contribuent au développement du Cameroun.",
        structures: {
          title: "Nos médias",
          items: [
            { brand: "etudiant", name: "Journal L'Étudiant", text: "Média camerounais consacré à l'information éducative et à la promotion de la jeunesse. Son écosystème comprend le journal, des contenus audiovisuels à travers L'Étudiant TV et sa présence numérique." },
            { brand: "nationalpost", name: "The National Post", text: "Journal anglophone en ligne, présenté dans la plaquette comme trihebdomadaire, consacré à l'actualité nationale et internationale, à la société, à l'économie, à l'éducation, à la culture et aux enjeux publics." },
            { brand: "nouvelleere", name: "Nouvelle Ère", text: "Titre de presse généraliste de l'écosystème CMCT, destiné à contribuer au traitement et à la diffusion de l'actualité et des sujets d'intérêt public." },
          ],
        },
        lists: [
          {
            title: "Services proposés aux organisations",
            items: [
              { lead: "Rédaction et édition", text: "articles, dossiers, portraits, interviews, reportages, revues et contenus éditoriaux." },
              { lead: "Couverture médiatique", text: "préparation éditoriale, couverture d'activités, interviews et reportages, sous réserve d'accord et de cadrage." },
              { lead: "Contenus institutionnels", text: "articles de présentation, portraits d'organisations, valorisation de projets et de résultats." },
              { lead: "Diffusion et visibilité", text: "propositions de publication et de relais sur les supports éditoriaux et numériques de CMCT, selon la ligne éditoriale et les conditions commerciales applicables." },
              { lead: "Accompagnement éditorial", text: "conseil sur les angles, les messages, les formats et la lisibilité des contenus." },
            ],
          },
        ],
        texts: [
          {
            title: "Pour quels besoins ?",
            text: "Lancement d'un programme, valorisation d'une initiative, diffusion d'informations d'intérêt public, mise en lumière d'un projet éducatif ou économique, production d'un dossier spécial ou développement d'une présence médiatique auprès des publics camerounais.",
          },
        ],
        note: "La relation commerciale avec un média ne se confond pas avec le traitement journalistique. Les contenus sponsorisés, partenariats éditoriaux et espaces publicitaires doivent être identifiés et encadrés conformément aux règles professionnelles applicables.",
      },
      {
        id: "comm",
        number: "04",
        tab: "Communication & Production",
        title: "Direction de la Communication et de la Production",
        lead: "Cette direction accompagne les organisations dans la construction de leur image, la préparation de leurs messages et la réalisation de contenus capables de présenter, expliquer ou valoriser leurs activités. Elle s'appuie notamment sur CaMiGra Productions, structure de production et de création de l'écosystème CMCT.",
        structures: {
          title: "Notre structure de production",
          items: [
            { brand: "camigra", name: "CaMiGra Productions", text: "Structure de production et de création de l'écosystème CMCT." },
          ],
        },
        lists: [
          {
            title: "Conseil et communication",
            items: [
              { text: "Diagnostic des besoins de communication et clarification des objectifs." },
              { text: "Élaboration de plans et de calendriers de communication." },
              { text: "Conception de messages clés, éléments de langage et contenus institutionnels." },
              { lead: "Identité visuelle et supports", text: "logos, chartes graphiques, brochures, dépliants, affiches, présentations et visuels numériques." },
              { lead: "Communication digitale", text: "ligne éditoriale, planification de contenus et accompagnement des réseaux sociaux." },
              { text: "Relations médias et préparation des dispositifs de communication autour d'activités ou d'événements." },
            ],
          },
          {
            title: "Production audiovisuelle – CaMiGra Productions",
            items: [
              { text: "Films institutionnels et films d'entreprise." },
              { text: "Documentaires, reportages, portraits et témoignages." },
              { text: "Capsules vidéo, interviews, vidéos de sensibilisation et contenus pour les réseaux sociaux." },
              { text: "Couverture photo et vidéo d'événements, conférences, ateliers et cérémonies." },
              { text: "Montage, habillage graphique, sous-titrage, voix off et finalisation des contenus." },
              { text: "Conception de contenus pédagogiques et de supports audiovisuels de formation." },
            ],
          },
        ],
        cards: {
          title: "Exemples de livrables",
          items: [
            { title: "Film institutionnel", text: "Note de concept, synopsis, scénario, plan de tournage, interviews, montage et fichier final." },
            { title: "Couverture événementielle", text: "Reportage photo, séquences vidéo, interviews et aftermovie." },
            { title: "Campagne de sensibilisation", text: "Messages, visuels, capsules vidéo et déclinaisons adaptées aux canaux retenus." },
          ],
        },
        texts: [
          {
            title: "Expérience et références de production",
            text: "Les activités de production de CaMiGra ont notamment été mobilisées dans la réalisation de documentaires et de contenus pour des organisations telles que l'UNESCO, l'Union européenne, la République démocratique du Congo, Action contre la Faim (ACF) et l'Agence Universitaire de la Francophonie (AUF). CMCT a également été engagée dans la production du film institutionnel et de capsules du projet FORMPRO 237.",
          },
        ],
        note: "Chaque production fait l'objet d'un cadrage préalable : objectifs, publics, durée, formats, calendrier, lieux, langues, droits d'utilisation et modalités de validation.",
      },
      {
        id: "tech",
        number: "05",
        tab: "Technologies & Innovation",
        title: "Direction des Technologies et de l'Innovation",
        lead: "La direction accompagne les organisations dans la création et l'amélioration de leurs outils numériques. À travers Makemba Agency, CMCT propose des solutions digitales pensées pour répondre à des besoins opérationnels : présenter une activité, faciliter l'accès à l'information, structurer des services ou renforcer la visibilité en ligne.",
        structures: {
          title: "Notre agence digitale",
          items: [
            { brand: "makemba", name: "Makemba Agency", text: "Solutions digitales pensées pour répondre à des besoins opérationnels." },
          ],
        },
        lists: [
          {
            title: "Nos prestations numériques",
            items: [
              { lead: "Sites web institutionnels", text: "conception de l'arborescence, design, intégration, mise en ligne et accompagnement à la prise en main." },
              { lead: "Sites vitrines et plateformes de présentation", text: "présentation des services, formulaires de contact, actualités, pages projets et ressources." },
              { lead: "Sites médias et éditoriaux", text: "organisation des rubriques, publication de contenus et fonctionnalités adaptées aux besoins d'un média." },
              { lead: "Maintenance et assistance", text: "mises à jour, sauvegardes, résolution d'incidents et suivi technique, selon le périmètre contractuel." },
              { lead: "Outils numériques", text: "analyse du besoin et réalisation de fonctionnalités ou d'outils digitaux adaptés, après étude de faisabilité." },
              { lead: "Accompagnement à la présence numérique", text: "conseil sur l'architecture de l'information, l'expérience utilisateur et la cohérence des canaux digitaux." },
            ],
          },
        ],
        steps: {
          title: "Notre méthode de réalisation",
          items: [
            { title: "Cadrage", text: "Comprendre le besoin, les utilisateurs, les objectifs et les contraintes." },
            { title: "Conception", text: "Définir l'arborescence, les fonctionnalités et l'interface." },
            { title: "Développement", text: "Construire, intégrer et tester la solution." },
            { title: "Mise en service", text: "Déployer, transférer les accès et accompagner le client." },
          ],
        },
        texts: [
          {
            title: "Des engagements clairement définis",
            text: "Pour chaque projet, CMCT précise les fonctionnalités incluses, les contenus à fournir, les responsabilités du client et du prestataire, le calendrier, les conditions d'hébergement, les modalités de maintenance et les coûts récurrents éventuels. Les développements spécifiques, applications complexes, intégrations tierces et dispositifs de cybersécurité font l'objet d'une étude technique et d'un devis distincts.",
          },
        ],
        note: "Notre objectif : livrer des outils utiles, compréhensibles et maintenables, plutôt que multiplier les fonctionnalités sans rapport avec le besoin réel.",
      },
      {
        id: "training",
        number: "06",
        tab: "Formation & Compétences",
        title: "Direction de la Formation et du Développement des Compétences",
        lead: "CMCT développe des activités de formation et d'accompagnement destinées aux jeunes, aux étudiants, aux professionnels et aux organisations. L'ambition est de rendre les compétences accessibles, de préparer aux exigences de concours et de favoriser l'acquisition de savoir-faire directement mobilisables.",
        structures: {
          title: "Nos structures et programmes",
          items: [
            { brand: "academy", name: "CaMiGra Academy", text: "Formation pratique aux métiers de la création et de la production : infographie, design graphique, montage audio et vidéo, prise de vue et prise de son." },
            { brand: "esstic", name: "ESSTIC Plus", text: "Préparation et accompagnement des candidats aux concours et formations liés au journalisme, à la communication et à la publicité." },
            { brand: "iric", name: "IRIC Plus", text: "Préparation et accompagnement des candidats aux concours de l'Institut des Relations Internationales du Cameroun et aux disciplines associées aux relations internationales." },
            { brand: "prepas", name: "Prépas Plus", text: "Dispositif de préparation et d'accompagnement pédagogique destiné à répondre à des besoins de préparation aux concours et de renforcement des acquis, selon les programmes ouverts." },
          ],
        },
        lists: [
          {
            title: "Offres de formation pour les organisations",
            items: [
              { text: "Formations courtes et ateliers pratiques en communication, création de contenus et outils numériques." },
              { text: "Initiation ou perfectionnement en infographie, montage vidéo, photographie et production de contenus." },
              { text: "Renforcement des capacités des équipes en communication institutionnelle et communication digitale." },
              { text: "Conception de modules sur mesure après analyse des besoins, du niveau des participants et des objectifs professionnels." },
            ],
          },
        ],
        formats: ["Présentiel", "À distance", "Hybride"],
        texts: [
          {
            title: "Modalités pédagogiques",
            text: "Les parcours peuvent être organisés en présentiel, à distance ou en format hybride lorsque les conditions pédagogiques le permettent. Le programme, la durée, les prérequis, les supports, les modalités d'évaluation et les éventuelles attestations sont précisés avant le démarrage.",
          },
        ],
        note: "Une formation adaptée ne se résume pas à un catalogue de cours : elle part des compétences à acquérir et des situations professionnelles auxquelles les participants devront faire face.",
      },
    ],
  },

  // ───────── Références ─────────
  references: {
    label: "Expérience et références",
    title: "Ils nous ont confié des projets",
    intro:
      "L'écosystème CMCT a développé des activités éditoriales, pédagogiques, audiovisuelles et numériques. Les expériences de production comprennent notamment des travaux réalisés pour :",
    items: [
      { short: "UNESCO", name: "Organisation des Nations unies pour l'éducation, la science et la culture" },
      { short: "UE", name: "Union européenne" },
      { short: "RDC", name: "République démocratique du Congo" },
      { short: "ACF", name: "Action contre la Faim" },
      { short: "AUF", name: "Agence Universitaire de la Francophonie" },
      { short: "FORMPRO 237", name: "Film institutionnel et capsules du projet" },
    ],
    more: "L'ancienne plaquette institutionnelle présente également un ensemble de collaborations et de références dans les secteurs public, académique, associatif et privé. Les références détaillées et autorisées peuvent être communiquées selon la nature de la consultation.",
    sectors: ["Public", "Académique", "Associatif", "Privé"],
    cta: "Demander nos références",
    partnersTitle: "Partenaires et institutions",
    partnersIntro: "Organisations internationales, institutions académiques et acteurs économiques avec lesquels l'écosystème CMCT a collaboré ou qu'il a accompagnés.",
  },

  // ───────── Réalisations (démonstration) ─────────
  projects: {
    label: "Portfolio",
    title: "Des projets concrets, du tournage à la mise en ligne",
    intro: "Productions audiovisuelles, sites web, titres de presse et programmes de formation : quelques exemples de réalisations de l'écosystème CMCT.",
    filterLabel: "Filtrer les réalisations",
    categories: { all: "Toutes", video: "Productions audiovisuelles", web: "Sites web", press: "Presse & édition", training: "Formation" },
    openLabel: (title) => `Voir le détail : ${title}`,
    watch: "Voir la production",
    discover: "Découvrir le site",
    details: "Voir le détail",
    visit: "Visiter le site",
    newTab: "(s'ouvre dans un nouvel onglet)",
    similar: "Un projet similaire ? Parlons-en",
    close: "Fermer",
    prev: "Image précédente",
    next: "Image suivante",
    videoOnRequest: "Les extraits vidéo de cette production peuvent être présentés sur demande.",
    ctaText: "Vous avez un projet de film, de site web, de publication ou de formation ?",
    ctaButton: "Parlons de votre projet",
    items: {
      "couverture-ue": {
        title: "Couverture de visites de projets",
        client: "Partenaires de coopération et humanitaires (Union européenne, HCR)",
        summary: "Captation photo et vidéo de visites de terrain, au plus près des communautés.",
        description: "Les équipes de CaMiGra Productions accompagnent des visites de projets pour en documenter les étapes : rencontres avec les communautés, échanges avec les partenaires, interviews et images d'illustration destinées à la communication institutionnelle.",
        deliverables: ["Reportage vidéo", "Photographie", "Interviews", "Contenus pour les réseaux sociaux"],
        alt: "Visite de terrain réunissant l'Union européenne, le HCR et les populations locales.",
      },
      "site-etudiant": {
        title: "journaletudiant.com",
        client: "Journal L'Étudiant – entité CMCT",
        summary: "Site d'information sur l'éducation et la jeunesse, avec kiosque numérique et rubriques thématiques.",
        description: "Site média du journal L'Étudiant : rubriques (Round-up, Sur le campus, Focus, Opportunités, Culture, Tribune, My Business, 100 % Tech), mise en avant des articles, kiosque pour acheter l'édition PDF et espaces de visibilité pour les programmes de l'écosystème.",
        deliverables: ["Site média", "Organisation des rubriques", "Kiosque PDF", "Espaces publicitaires"],
        alt: "Page d'accueil du site journaletudiant.com.",
      },
      drone: {
        title: "Images aériennes par drone",
        client: "Institutions, projets et territoires",
        summary: "Tournages aériens pour valoriser des sites, des paysages et des réalisations.",
        description: "Prises de vue aériennes réalisées par des équipes formées au pilotage : plans d'ensemble, suivi de sites et images de mise en valeur, intégrés aux films institutionnels et aux reportages.",
        deliverables: ["Prises de vue aériennes", "Montage", "Habillage graphique"],
        alt: "Deux membres de l'équipe CMCT pilotant un drone au pied des montagnes.",
      },
      entretiens: {
        title: "Entretiens et films institutionnels",
        client: "Institutions et organisations",
        summary: "Tournage d'interviews et de témoignages, de la préparation au montage final.",
        description: "Préparation des questions, installation lumière et son, tournage et montage : CaMiGra Productions réalise des entretiens et des films qui présentent une organisation, un dirigeant ou un projet.",
        deliverables: ["Interview filmée", "Lumière et son", "Montage", "Sous-titrage"],
        alt: "Tournage d'un entretien institutionnel par les équipes de CaMiGra Productions.",
      },
      "site-cmct": {
        title: "Site institutionnel CMCT",
        client: "Central Media Communication & Technologies",
        summary: "Le site que vous consultez : bilingue, animé et adapté à tous les écrans.",
        description: "Conception et développement du site institutionnel de CMCT : présentation des entités et des expertises, galerie, réalisations, actualités et formulaire de contact, en français et en anglais.",
        deliverables: ["Design UX/UI", "Développement", "Bilinguisme FR/EN", "Responsive"],
        alt: "Page d'accueil du site institutionnel de CMCT.",
      },
      "journal-etudiant": {
        title: "Journal L'Étudiant",
        client: "Entité CMCT",
        summary: "Journal bilingue consacré à l'éducation et à la jeunesse, en quotidien et en numéros spéciaux.",
        description: "Conception éditoriale, rédaction, mise en page et diffusion d'un journal bilingue d'information sur l'éducation et la jeunesse, décliné en édition quotidienne et en numéros spéciaux.",
        deliverables: ["Ligne éditoriale", "Rédaction", "Mise en page", "Diffusion"],
        alt: "Une de l'édition spéciale n° 151 du journal L'Étudiant.",
      },
      "reportage-humanitaire": {
        title: "Reportages de terrain humanitaires",
        client: "Acteurs humanitaires (dont le Conseil danois pour les réfugiés – DRC)",
        summary: "Documenter l'action humanitaire et donner la parole aux communautés.",
        description: "Reportages audio, photo et vidéo réalisés sur des sites d'intervention humanitaire, pour rendre compte des projets, recueillir des témoignages et produire des supports de communication et de plaidoyer.",
        deliverables: ["Reportage", "Témoignages", "Photographie", "Supports de plaidoyer"],
        alt: "Équipes en mission de terrain aux côtés d'acteurs humanitaires.",
      },
      "nouvelle-ere": {
        title: "Nouvelle Ère",
        client: "Entité CMCT",
        summary: "Titre de presse généraliste consacré à l'actualité et aux sujets d'intérêt public.",
        description: "Lancement du titre généraliste Nouvelle Ère, dont le premier numéro est paru le lundi 20 octobre 2025 : ligne éditoriale, rédaction, mise en page et diffusion.",
        deliverables: ["Lancement du titre", "Rédaction", "Mise en page"],
        alt: "Une du premier numéro de Nouvelle Ère.",
      },
      formation: {
        title: "Formation e-entrepreneuses",
        client: "Programme PRICNAC, avec l'AUF",
        summary: "Former des femmes entrepreneures au e-commerce et aux outils numériques.",
        description: "Session de formation au e-commerce simplifié : réseaux sociaux pour vendre, boutiques en ligne, sécurité des comptes, prospection et paiements électroniques, avec la présentation des produits des participantes.",
        deliverables: ["Ingénierie pédagogique", "Animation", "Supports de formation"],
        alt: "Participantes de la formation e-entrepreneuses posant avec leurs produits.",
      },
    },
  },

  // ───────── 07. Pourquoi CMCT ? ─────────
  // ───────── Galerie ─────────
  gallery: {
    label: "Galerie",
    title: "Nos équipes en images",
    intro: "Rédactions, tournages, missions de terrain : un aperçu du travail quotidien de l'écosystème CMCT.",
    filterLabel: "Filtrer les photos",
    categories: { all: "Tout", media: "Médias & presse", production: "Production audiovisuelle", field: "Terrain", institution: "Institution & partenariats" },
    open: (title) => `Agrandir la photo : ${title}`,
    close: "Fermer",
    prev: "Photo précédente",
    next: "Photo suivante",
    counter: (i, n) => `${i} / ${n}`,
    dialog: "Visionneuse de photos",
    items: {
      "camigra-interview": { title: "Entretien filmé", caption: "Tournage d'un entretien institutionnel par les équipes de CaMiGra Productions." },
      "nouvelle-ere-une": { title: "Nouvelle Ère n° 001", caption: "La une du premier numéro de Nouvelle Ère, lundi 20 octobre 2025." },
      "mission-terrain": { title: "Mission de terrain", caption: "Déplacement des équipes aux côtés d'acteurs humanitaires, au plus près des communautés." },
      "tournage-camera": { title: "Prise de vue", caption: "Captation vidéo lors d'un reportage." },
      "camigra-terrain": { title: "CaMiGra en reportage", caption: "Reportage audio et vidéo sur le terrain avec un partenaire humanitaire." },
      "prise-de-parole": { title: "Face à la presse", caption: "Interview accordée aux médias lors d'un événement professionnel." },
      "etudiant-151": { title: "L'Étudiant n° 151", caption: "Édition spéciale du lundi 9 décembre 2024 du journal L'Étudiant." },
      "etudiant-389": { title: "L'Étudiant n° 389", caption: "La une du quotidien L'Étudiant du lundi 30 mars 2026." },
      "photographe": { title: "Regard de photographe", caption: "Prise de vue photo lors d'un reportage." },
      "drone-pilote": { title: "Pilotage de drone", caption: "Prise de vue aérienne par un membre de l'équipe CMCT." },
      "drone-equipe": { title: "Préparation d'un vol", caption: "Réglage du drone et cadrage depuis la radiocommande." },
      "drone-paysage": { title: "Images aériennes", caption: "Tournage aérien au pied des montagnes." },
      "camigra-ue-terrain": { title: "Visite de projet", caption: "L'équipe CaMiGra sur le terrain aux côtés de partenaires de l'Union européenne." },
      "visite-ue-hcr": { title: "Rencontre avec les communautés", caption: "Visite de terrain réunissant l'Union européenne, le HCR et les populations locales." },
      "echange-communaute": { title: "À l'écoute des bénéficiaires", caption: "Échange entre partenaires de projet et membres d'une communauté." },
      "enfants-eau": { title: "Scène de vie", caption: "Corvée d'eau dans une localité visitée pendant un reportage." },
      "siege-cmct": { title: "Notre siège à Yaoundé", caption: "Immeuble Dangote, rue Felicia, Cami-Toyota, Coron – Yaoundé." },
      "formation-e-entrepreneuses": { title: "Formation e-entrepreneuses", caption: "Session de formation au e-commerce pour des femmes entrepreneures, dans le cadre du PRICNAC avec l'AUF." },
      "pricnac-rencontre": { title: "Rencontre PRICNAC", caption: "Rassemblement des partenaires du programme PRICNAC : Union européenne, OEACP, AUF, CAMES, OBREAL, REIFAC." },
      "delegation-partenaires": { title: "Délégation de partenaires", caption: "Rencontre avec des partenaires internationaux." },
      "visite-entrepot": { title: "Visite d'entreprise", caption: "Visite d'une plateforme logistique lors d'une mission économique." },
      "mission-cece": { title: "Mission Cameroun-Éthiopie", caption: "Délégation de la Chambre économique Cameroun-Éthiopie (CECE)." },
    },
    showing: (n) => `${n} photos`,
    covers: "Nos unes",
    fieldTitle: "Sur le terrain",
    fieldText: "Nos équipes se déplacent au plus près des communautés pour documenter les projets de nos partenaires.",
    seeAll: "Voir la galerie",
  },

  why: {
    label: "Pourquoi travailler avec CMCT ?",
    title: "Des expertises complémentaires, une connaissance fine du terrain",
    reasons: [
      {
        title: "Une organisation qui réunit plusieurs métiers complémentaires",
        text: "CMCT peut coordonner, au sein d'un même dispositif, le conseil, la production de contenus, la diffusion médiatique, la formation et les outils numériques. Cette complémentarité facilite la cohérence des messages, le suivi des livrables et la coordination des intervenants.",
      },
      {
        title: "Une connaissance du contexte camerounais",
        text: "L'entreprise développe ses activités depuis Yaoundé et intervient dans des domaines directement liés aux enjeux des entreprises, des institutions, de l'éducation, de la jeunesse et de la communication au Cameroun. Les propositions sont construites en tenant compte des publics, des usages, des contraintes de terrain et des réalités budgétaires.",
      },
      {
        title: "Une expérience de projets et de collaborations",
        text: "L'écosystème CMCT a développé des activités éditoriales, pédagogiques, audiovisuelles et numériques, notamment pour l'UNESCO, l'Union européenne, la RDC, ACF et l'AUF. Les références détaillées et autorisées peuvent être communiquées selon la nature de la consultation.",
      },
    ],
    method: {
      title: "Notre méthode de collaboration",
      steps: [
        { title: "Écouter", text: "Comprendre le contexte, les objectifs et les publics concernés." },
        { title: "Proposer", text: "Soumettre une approche technique, un calendrier et un budget adaptés." },
        { title: "Réaliser", text: "Mobiliser les compétences nécessaires et assurer le suivi de la production." },
        { title: "Valider et livrer", text: "Organiser les retours, finaliser les livrables et transmettre les éléments convenus." },
      ],
    },
  },

  // ───────── Actualités ─────────
  news: {
    issuesTitle: "Nos dernières unes",
    issueNumber: (n) => `n° ${n}`,
    issueOpen: (name, n) => `Ouvrir la une de ${name} n° ${n}`,
    kicker: "Blog",
    title: "Blog des actualités internes de l'entreprise",
    all: "Tous les médias",
    filterLabel: "Filtrer par média",
    readMore: "Lire l'article",
    loadMore: "Voir plus d'articles",
    live: (shown, total) => `${shown} articles affichés sur ${total}`,
    langNote: null,
    categories: {
      POLITIQUE: "Politique", SOCIETE: "Société", CULTURE: "Culture", ECONOMIE: "Économie", TECH: "Tech",
      EDUCATION: "Éducation", SANTE: "Santé", SPORT: "Sport", ENVIRONNEMENT: "Environnement", SCIENCE: "Science",
    },
  },

  // ───────── Contact + informations institutionnelles ─────────
  contact: {
    kicker: "Parlons de votre projet",
    title: "Une demande ? Un projet ?",
    titleAccent: "Parlons-en.",
    intro:
      "Pour une demande de devis, une consultation, un partenariat ou une présentation de nos références, contactez la direction de CMCT. Chaque demande est étudiée afin de proposer une réponse adaptée au besoin exprimé.",
    infoTitle: "Informations institutionnelles",
    info: {
      name: "Dénomination",
      legal: "Forme juridique",
      legalValue: "Société à responsabilité limitée (SARL)",
      legalNote: "selon les informations figurant sur la plaquette institutionnelle",
      rccm: "RCCM",
      address: "Adresse",
      po: "Boîte postale",
      phone: "Téléphone",
      landline: "Téléphone fixe",
      website: "Site web",
      email: "E-mail",
    },
    socialTitle: "Réseaux sociaux",
    formTitle: "Écrivez-nous",
    fields: {
      name: "Nom complet",
      email: "E-mail",
      organisation: "Organisation (facultatif)",
      subject: "Objet de la demande",
      message: "Décrivez votre besoin…",
    },
    subjects: ["Demande de devis", "Consultation", "Partenariat", "Présentation de nos références", "Formation", "Autre"],
    errors: {
      name: "Indiquez votre nom.",
      email: "Adresse e-mail invalide.",
      message: "Votre message doit contenir au moins 10 caractères.",
    },
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    success: "Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.",
    mailtoSuccess: "Votre messagerie s'ouvre avec le message pré-rempli : il ne reste plus qu'à l'envoyer.",
    error: "Oups, l'envoi a échoué. Réessayez ou écrivez-nous directement à",
    mailSubject: "Demande de contact",
  },

  // ───────── Pied de page ─────────
  footer: {
    tagline: "CMCT — Des expertises complémentaires au service de vos projets.",
    navTitle: "Navigation",
    expertisesTitle: "Domaines",
    contactTitle: "Nous joindre",
    rights: "Tous droits réservés.",
    disclaimer:
      "Document institutionnel de présentation. Les prestations sont réalisées selon le périmètre convenu, les ressources mobilisées et les conditions définies dans le devis ou le contrat. Les références, chiffres d'audience et indicateurs de performance sont communiqués sur la base de données actualisées et vérifiables.",
    ariaNav: "Pied de page",
  },
};

export default fr;

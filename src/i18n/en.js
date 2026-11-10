// English texts — same structure as fr.js.

const en = {
  code: "en",
  meta: {
    description:
      "CMCT – Central Media Communication & Technologies: media, communication, audiovisual production, training and digital technologies in Yaoundé, Cameroon.",
  },
  common: {
    skip: "Skip to content",
    backToTop: "Back to top of the page",
    toTop: "Back to top",
    close: "Close",
    learnMore: "Learn more",
    langSwitch: "Choose language",
    langNames: { fr: "Français", en: "English" },
  },
  nav: {
    label: "Main navigation",
    home: "CMCT – back to home",
    about: "About us",
    organisation: "Organisation",
    expertises: "Expertise",
    projects: "Our work",
    homePage: "Home",
    news: "News",
    gallery: "Gallery",
    contact: "Contact",
    cta: "Let's talk about your project",
    open: "Open menu",
    closeMenu: "Close menu",
    menuContact: "Get in touch",
  },
  topbar: {
    linkedin: "CMCT on LinkedIn",
    facebook: "CMCT on Facebook",
    location: "Yaoundé • Cameroon",
  },

  hero: {
    slidesLabel: "Background photos",
    slideGoTo: (n) => `Show photo ${n}`,
    eyebrow: "Central Media Communication & Technologies",
    domains: ["Media", "Communication", "Audiovisual production", "Training", "Technologies"],
    slogans: [
      { lead: "Content that", word: "informs." },
      { lead: "Strategies that", word: "add value." },
      { lead: "Solutions that", word: "transform." },
    ],
    vocationTitle: "Our purpose",
    vocation:
      "Supporting companies, institutions and organisations with their information, communication, content creation, skills development and digital transformation challenges.",
    approachTitle: "Our approach",
    approach:
      "A multi-sector organisation, complementary areas of expertise and solutions tailored to the realities of the Cameroonian market.",
    ctaPrimary: "Discover our expertise",
    ctaSecondary: "Let's talk about your project",
    location: "Yaoundé • Cameroon",
    scroll: "Scroll to the presentation",
    cardTitle: "5 fields, one single company",
  },
  // ───────── Page headers ─────────
  pages: {
    breadcrumb: "Breadcrumb",
    notFound: { title: "Page not found", intro: "The page you are looking for does not exist or has been moved.", cta: "Back to home" },
    about: { title: "About us", intro: "A Cameroonian company bringing together media, communication, video production, training and technology." },
    organisation: { title: "Organisation", intro: "A general management and four operational directorates working together on every project." },
    expertises: { title: "Our expertise", intro: "Four directorates, specialised entities and services designed for companies, institutions and organisations." },
    projects: { title: "Our work", intro: "Video productions, websites, press and training: a concrete look at what we do." },
    gallery: { title: "Gallery", intro: "Our teams in pictures: newsrooms, shoots, field missions and meetings." },
    news: { title: "News", intro: "Life at CMCT and its entities: projects, meetings, publications and news." },
    contact: { title: "Contact", intro: "A quote, a consultation or a partnership? Write to us or visit us in Yaoundé." },
  },

  brands: {
    label: "Our Entities",
    intro: "The newspapers, agencies and programmes that make up the CMCT ecosystem.",
  },

  about: {
    number: "01",
    label: "Who are we?",
    title: "A Cameroonian company serving information, communication and skills",
    intro:
      "Central Media Communication & Technologies (CMCT) is a Cameroonian company that develops and coordinates activities in media, communication, audiovisual production, training and digital technologies. It puts these skills at the service of companies, public administrations, international organisations, educational institutions and project leaders.",
    audiencesTitle: "Who for?",
    audiences: [
      "Companies",
      "Public administrations",
      "International organisations",
      "Educational institutions",
      "Project leaders",
    ],
    stats: [
      { value: 2017, label: "Initiative launched", plain: true },
      { value: 4, label: "Operational divisions" },
      { value: 9, label: "Brands and programmes" },
      { value: 5, label: "Fields of expertise" },
    ],
    journey: {
      title: "A journey built around media and skills",
      steps: [
        {
          year: "2017",
          name: "Groupe 237 Média",
          text: "CMCT continues an entrepreneurial initiative launched in 2017 under the name Groupe 237 Média.",
        },
        {
          year: "2019",
          name: "Cameroon Media Corporation",
          text: "In 2019, this momentum was structured around Cameroon Media Corporation.",
        },
        {
          year: "Today",
          name: "Central Media Communication Technologies",
          text: "Adoption of the name Central Media Communication Technologies (CMCT), following a change of name.",
        },
      ],
      conclusion:
        "This evolution reflects an ambition: to organise several complementary professions within a single company and to professionalise their development.",
    },
    purpose: {
      title: "Our reason for being",
      text: "Producing and sharing useful information, designing relevant communication programmes, creating professional content, passing on skills and developing digital tools that meet concrete needs.",
    },
    mission: {
      title: "Our mission",
      items: [
        "Inform about and highlight economic, educational, social and institutional issues through suitable media and content.",
        "Support organisations in defining and implementing their communication actions.",
        "Design and produce audiovisual, editorial and visual content intended to inform, explain, raise awareness and promote.",
        "Train and support talent in the media, communication and digital professions.",
        "Develop accessible, useful technological solutions adapted to the needs of organisations.",
      ],
    },
    principles: {
      title: "Our working principles",
      items: [
        { title: "Listening and understanding the need", text: "Every assignment starts with an analysis of the context, audiences and objectives." },
        { title: "Professional rigour", text: "Deliverables, deadlines and responsibilities are defined upfront." },
        { title: "Adapting to the context", text: "Proposals take into account the operational and budgetary realities of Cameroon." },
        { title: "Complementarity", text: "In-house expertise can be called upon separately or within an integrated programme." },
      ],
    },
    quote:
      "CMCT does not simply juxtapose activities: the company organises complementary skills to provide coherent answers, from consulting to production and distribution.",
    director: { name: "Mr. Boris Landry", role: "Managing Director, CMCT", alt: "Mr. Boris Landry, Managing Director of CMCT", logoAlt: "CMCT logo" },
  },

  organisation: {
    number: "02",
    label: "One organisation, several areas of expertise",
    title: "One company, four divisions, nine brands and programmes",
    intro:
      "CMCT is organised around clearly identified operational divisions. The brands and programmes attached to each field make our expertise visible to audiences and clients.",
    hq: { name: "CMCT", text: "General management and support functions" },
    directions: [
      { id: "media", name: "Media & Information Division", brands: ["etudiant", "nationalpost", "nouvelleere"] },
      { id: "comm", name: "Communication & Production Division", brands: ["camigra"] },
      { id: "tech", name: "Technology & Innovation Division", brands: ["makemba"] },
      { id: "training", name: "Training & Skills Division", brands: ["academy", "esstic", "iric", "prepas"] },
    ],
    transversal: {
      name: "Business development, projects & partnerships",
      text: "A cross-cutting function serving all divisions",
    },
    functions: {
      title: "Cross-cutting functions",
      items: [
        {
          title: "General management & support functions",
          text: "General management provides leadership, strategic direction, coordination of the divisions and representation of the company. Administrative and financial functions, human resources, quality monitoring and operations management support all activities.",
        },
        {
          title: "Business development & partnerships",
          text: "Business development and partnerships identify opportunities, qualify needs, prepare technical and financial proposals, coordinate responses to tenders and maintain relationships with clients and partners.",
        },
      ],
    },
    collaboration: {
      title: "A flexible collaboration model",
      text: "An institution can request a single service — for example a corporate film, a training course or a website — or entrust CMCT with a broader programme combining communication strategy, content production, media distribution and digital support. The team is put together according to the specifications and the skills required.",
      single: "Single service",
      singleExamples: ["Corporate film", "Training", "Website"],
      integrated: "Integrated programme",
      integratedExamples: ["Communication strategy", "Content production", "Media distribution", "Digital support"],
    },
    note:
      "Organisational note: the names presented here describe the functional structure proposed for institutional presentation purposes. They do not mean that each brand or programme is a separate legal entity.",
  },

  expertises: {
    label: "Our expertise",
    title: "Four divisions, complete answers",
    intro: "Select a division to discover its structures, services and method.",
    tablist: "CMCT divisions",
    contactCta: "Discuss a project with this division",
    directions: [
      {
        id: "media",
        number: "03",
        tab: "Media & Information",
        title: "Media & Information Division",
        lead: "Informing, documenting and making issues accessible. The media division develops editorial outlets covering in particular education, youth, current affairs, society and initiatives contributing to the development of Cameroon.",
        structures: {
          title: "Our media",
          items: [
            { brand: "etudiant", name: "Journal L'Étudiant", text: "Cameroonian media outlet dedicated to educational information and the promotion of young people. Its ecosystem includes the newspaper, audiovisual content through L'Étudiant TV and its digital presence." },
            { brand: "nationalpost", name: "The National Post", text: "English-language online newspaper, presented in the brochure as published three times a week, covering national and international news, society, the economy, education, culture and public affairs." },
            { brand: "nouvelleere", name: "Nouvelle Ère", text: "General-interest title of the CMCT ecosystem, contributing to the coverage and dissemination of news and topics of public interest." },
          ],
        },
        lists: [
          {
            title: "Services for organisations",
            items: [
              { lead: "Writing and editing", text: "articles, special reports, profiles, interviews, features, magazines and editorial content." },
              { lead: "Media coverage", text: "editorial preparation, coverage of activities, interviews and reports, subject to agreement and scoping." },
              { lead: "Institutional content", text: "presentation articles, organisation profiles, showcasing projects and results." },
              { lead: "Distribution and visibility", text: "publication and relay proposals on CMCT's editorial and digital outlets, in line with the editorial policy and applicable commercial terms." },
              { lead: "Editorial support", text: "advice on angles, messages, formats and readability of content." },
            ],
          },
        ],
        texts: [
          {
            title: "For which needs?",
            text: "Launching a programme, showcasing an initiative, sharing information of public interest, highlighting an educational or economic project, producing a special report or developing a media presence with Cameroonian audiences.",
          },
        ],
        note: "A commercial relationship with a media outlet is not the same as journalistic coverage. Sponsored content, editorial partnerships and advertising space must be identified and governed in accordance with applicable professional rules.",
      },
      {
        id: "comm",
        number: "04",
        tab: "Communication & Production",
        title: "Communication & Production Division",
        lead: "This division helps organisations build their image, prepare their messages and create content that presents, explains or showcases their activities. It relies in particular on CaMiGra Productions, the production and creative structure of the CMCT ecosystem.",
        structures: {
          title: "Our production structure",
          items: [
            { brand: "camigra", name: "CaMiGra Productions", text: "Production and creative structure of the CMCT ecosystem." },
          ],
        },
        lists: [
          {
            title: "Consulting and communication",
            items: [
              { text: "Assessment of communication needs and clarification of objectives." },
              { text: "Development of communication plans and schedules." },
              { text: "Design of key messages, talking points and institutional content." },
              { lead: "Visual identity and materials", text: "logos, brand guidelines, brochures, leaflets, posters, presentations and digital visuals." },
              { lead: "Digital communication", text: "editorial line, content planning and social media support." },
              { text: "Media relations and preparation of communication plans around activities or events." },
            ],
          },
          {
            title: "Audiovisual production – CaMiGra Productions",
            items: [
              { text: "Institutional and corporate films." },
              { text: "Documentaries, reports, portraits and testimonials." },
              { text: "Video capsules, interviews, awareness videos and social media content." },
              { text: "Photo and video coverage of events, conferences, workshops and ceremonies." },
              { text: "Editing, motion graphics, subtitling, voice-over and content finishing." },
              { text: "Design of educational content and audiovisual training materials." },
            ],
          },
        ],
        cards: {
          title: "Sample deliverables",
          items: [
            { title: "Corporate film", text: "Concept note, synopsis, script, shooting plan, interviews, editing and final file." },
            { title: "Event coverage", text: "Photo report, video footage, interviews and aftermovie." },
            { title: "Awareness campaign", text: "Messages, visuals, video capsules and versions adapted to the chosen channels." },
          ],
        },
        texts: [
          {
            title: "Production experience and references",
            text: "CaMiGra's production teams have notably been involved in producing documentaries and content for organisations such as UNESCO, the European Union, the Democratic Republic of the Congo, Action Against Hunger (ACF) and the Agence Universitaire de la Francophonie (AUF). CMCT was also commissioned to produce the institutional film and video capsules for the FORMPRO 237 project.",
          },
        ],
        note: "Every production is scoped beforehand: objectives, audiences, length, formats, schedule, locations, languages, usage rights and approval process.",
      },
      {
        id: "tech",
        number: "05",
        tab: "Technology & Innovation",
        title: "Technology & Innovation Division",
        lead: "The division helps organisations create and improve their digital tools. Through Makemba Agency, CMCT offers digital solutions designed to meet operational needs: presenting an activity, facilitating access to information, structuring services or strengthening online visibility.",
        structures: {
          title: "Our digital agency",
          items: [
            { brand: "makemba", name: "Makemba Agency", text: "Digital solutions designed to meet operational needs." },
          ],
        },
        lists: [
          {
            title: "Our digital services",
            items: [
              { lead: "Institutional websites", text: "site structure design, UI design, development, launch and onboarding support." },
              { lead: "Showcase websites and presentation platforms", text: "presentation of services, contact forms, news, project pages and resources." },
              { lead: "Media and editorial websites", text: "organisation of sections, content publishing and features tailored to the needs of a media outlet." },
              { lead: "Maintenance and support", text: "updates, backups, incident resolution and technical follow-up, within the contractual scope." },
              { lead: "Digital tools", text: "needs analysis and development of suitable features or digital tools, after a feasibility study." },
              { lead: "Digital presence support", text: "advice on information architecture, user experience and consistency across digital channels." },
            ],
          },
        ],
        steps: {
          title: "Our delivery method",
          items: [
            { title: "Scoping", text: "Understand the need, users, objectives and constraints." },
            { title: "Design", text: "Define the site structure, features and interface." },
            { title: "Development", text: "Build, integrate and test the solution." },
            { title: "Go-live", text: "Deploy, hand over access and support the client." },
          ],
        },
        texts: [
          {
            title: "Clearly defined commitments",
            text: "For each project, CMCT specifies the features included, the content to be provided, the responsibilities of the client and the provider, the schedule, hosting conditions, maintenance terms and any recurring costs. Custom developments, complex applications, third-party integrations and cybersecurity measures are subject to a separate technical study and quote.",
          },
        ],
        note: "Our goal: deliver useful, understandable and maintainable tools, rather than piling up features unrelated to the real need.",
      },
      {
        id: "training",
        number: "06",
        tab: "Training & Skills",
        title: "Training & Skills Development Division",
        lead: "CMCT develops training and support activities for young people, students, professionals and organisations. The ambition is to make skills accessible, prepare candidates for competitive exams and foster the acquisition of immediately usable know-how.",
        structures: {
          title: "Our structures and programmes",
          items: [
            { brand: "academy", name: "CaMiGra Academy", text: "Hands-on training in creative and production professions: computer graphics, graphic design, audio and video editing, camera work and sound recording." },
            { brand: "esstic", name: "ESSTIC Plus", text: "Preparation and support for candidates sitting competitive exams and programmes in journalism, communication and advertising." },
            { brand: "iric", name: "IRIC Plus", text: "Preparation and support for candidates sitting the entrance exams of the International Relations Institute of Cameroon and related international relations disciplines." },
            { brand: "prepas", name: "Prépas Plus", text: "Preparation and educational support programme for exam preparation and knowledge consolidation, depending on the programmes on offer." },
          ],
        },
        lists: [
          {
            title: "Training offers for organisations",
            items: [
              { text: "Short courses and practical workshops in communication, content creation and digital tools." },
              { text: "Introductory or advanced courses in computer graphics, video editing, photography and content production." },
              { text: "Capacity building for teams in institutional and digital communication." },
              { text: "Tailor-made modules designed after analysing needs, participants' level and professional objectives." },
            ],
          },
        ],
        formats: ["On-site", "Remote", "Hybrid"],
        texts: [
          {
            title: "Teaching arrangements",
            text: "Courses can be delivered on-site, remotely or in a hybrid format when teaching conditions allow. The programme, duration, prerequisites, materials, assessment methods and any certificates are specified before the start.",
          },
        ],
        note: "Tailored training is more than a course catalogue: it starts from the skills to be acquired and the professional situations participants will have to face.",
      },
    ],
  },

  references: {
    label: "Experience and references",
    title: "They have entrusted us with projects",
    intro:
      "The CMCT ecosystem has developed editorial, educational, audiovisual and digital activities. Its production experience notably includes work carried out for:",
    items: [
      { short: "UNESCO", name: "United Nations Educational, Scientific and Cultural Organization" },
      { short: "EU", name: "European Union" },
      { short: "DRC", name: "Democratic Republic of the Congo" },
      { short: "ACF", name: "Action Against Hunger" },
      { short: "AUF", name: "Agence Universitaire de la Francophonie" },
      { short: "FORMPRO 237", name: "Institutional film and project capsules" },
    ],
    more: "The previous institutional brochure also presents a range of collaborations and references in the public, academic, non-profit and private sectors. Detailed, authorised references can be shared depending on the nature of the request.",
    sectors: ["Public", "Academic", "Non-profit", "Private"],
    cta: "Request our references",
    partnersTitle: "Partners and institutions",
    partnersIntro: "International organisations, academic institutions and economic players the CMCT ecosystem has worked with or supported.",
  },

  projects: {
    label: "Portfolio",
    title: "Real projects, from the shoot to going live",
    intro: "Video productions, websites, newspapers and training programmes: a few examples of work from the CMCT ecosystem.",
    filterLabel: "Filter our work",
    categories: { all: "All", video: "Video productions", web: "Websites", press: "Press & publishing", training: "Training" },
    openLabel: (title) => `View details: ${title}`,
    watch: "View the production",
    discover: "Discover the website",
    details: "View details",
    visit: "Visit the website",
    newTab: "(opens in a new tab)",
    similar: "A similar project? Let's talk",
    close: "Close",
    prev: "Previous image",
    next: "Next image",
    videoOnRequest: "Video excerpts from this production can be shown on request.",
    ctaText: "Planning a film, a website, a publication or a training programme?",
    ctaButton: "Let's talk about your project",
    items: {
      "couverture-ue": {
        title: "Coverage of project visits",
        client: "Cooperation and humanitarian partners (European Union, UNHCR)",
        summary: "Photo and video coverage of field visits, close to local communities.",
        description: "CaMiGra Productions crews follow project visits to document every step: meetings with communities, discussions with partners, interviews and b-roll for institutional communication.",
        deliverables: ["Video report", "Photography", "Interviews", "Social media content"],
        alt: "Field visit bringing together the European Union, UNHCR and local communities.",
      },
      "site-etudiant": {
        title: "journaletudiant.com",
        client: "L'Étudiant newspaper – CMCT entity",
        summary: "News website on education and youth, with a digital newsstand and themed sections.",
        description: "News website of L'Étudiant: sections (Round-up, On campus, Focus, Opportunities, Culture, Opinion, My Business, 100% Tech), featured articles, a newsstand to buy the PDF edition and visibility spaces for the ecosystem's programmes.",
        deliverables: ["News website", "Section structure", "PDF newsstand", "Ad spaces"],
        alt: "Home page of the journaletudiant.com website.",
      },
      drone: {
        title: "Drone aerial imagery",
        client: "Institutions, projects and regions",
        summary: "Aerial shoots to showcase sites, landscapes and achievements.",
        description: "Aerial footage captured by trained drone pilots: wide shots, site monitoring and showcase images, built into institutional films and reports.",
        deliverables: ["Aerial footage", "Editing", "Motion graphics"],
        alt: "Two CMCT team members flying a drone at the foot of the mountains.",
      },
      entretiens: {
        title: "Interviews and institutional films",
        client: "Institutions and organisations",
        summary: "Interviews and testimonials, from preparation to final edit.",
        description: "Question preparation, lighting and sound set-up, shooting and editing: CaMiGra Productions makes interviews and films presenting an organisation, a leader or a project.",
        deliverables: ["Filmed interview", "Lighting and sound", "Editing", "Subtitles"],
        alt: "CaMiGra Productions crew shooting an institutional interview.",
      },
      "site-cmct": {
        title: "CMCT corporate website",
        client: "Central Media Communication & Technologies",
        summary: "The website you are browsing: bilingual, animated and responsive.",
        description: "Design and development of CMCT's corporate website: entities and expertise, gallery, portfolio, news and contact form, in French and English.",
        deliverables: ["UX/UI design", "Development", "FR/EN bilingual", "Responsive"],
        alt: "Home page of the CMCT corporate website.",
      },
      "journal-etudiant": {
        title: "L'Étudiant newspaper",
        client: "CMCT entity",
        summary: "Bilingual newspaper on education and youth, as a daily and in special issues.",
        description: "Editorial design, writing, layout and distribution of a bilingual newspaper on education and youth, published daily and in special issues.",
        deliverables: ["Editorial line", "Writing", "Layout", "Distribution"],
        alt: "Front page of L'Étudiant special issue No. 151.",
      },
      "reportage-humanitaire": {
        title: "Humanitarian field reports",
        client: "Humanitarian actors (including the Danish Refugee Council – DRC)",
        summary: "Documenting humanitarian action and giving communities a voice.",
        description: "Audio, photo and video reports from humanitarian sites, to report on projects, gather testimonials and produce communication and advocacy materials.",
        deliverables: ["Reporting", "Testimonials", "Photography", "Advocacy materials"],
        alt: "Teams on a field mission alongside humanitarian actors.",
      },
      "nouvelle-ere": {
        title: "Nouvelle Ère",
        client: "CMCT entity",
        summary: "General-interest newspaper covering current affairs and public-interest topics.",
        description: "Launch of the general-interest newspaper Nouvelle Ère, whose first issue came out on Monday 20 October 2025: editorial line, writing, layout and distribution.",
        deliverables: ["Title launch", "Writing", "Layout"],
        alt: "Front page of the first issue of Nouvelle Ère.",
      },
      formation: {
        title: "Women e-entrepreneurs training",
        client: "PRICNAC programme, with AUF",
        summary: "Training women entrepreneurs in e-commerce and digital tools.",
        description: "Simplified e-commerce training: selling on social media, online shops, account security, prospecting and electronic payments, with a showcase of the participants' products.",
        deliverables: ["Course design", "Facilitation", "Training materials"],
        alt: "Participants of the e-entrepreneurs training posing with their products.",
      },
    },
  },

  // ───────── Gallery ─────────
  gallery: {
    label: "Gallery",
    title: "Our teams in pictures",
    intro: "Newsrooms, shoots, field missions: a glimpse of the day-to-day work of the CMCT ecosystem.",
    filterLabel: "Filter photos",
    categories: { all: "All", media: "Media & press", production: "Video production", field: "Field work", institution: "Company & partnerships" },
    open: (title) => `Enlarge photo: ${title}`,
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    counter: (i, n) => `${i} / ${n}`,
    dialog: "Photo viewer",
    items: {
      "camigra-interview": { title: "Filmed interview", caption: "CaMiGra Productions crew shooting an institutional interview." },
      "nouvelle-ere-une": { title: "Nouvelle Ère No. 001", caption: "Front page of the first issue of Nouvelle Ère, Monday 20 October 2025." },
      "mission-terrain": { title: "Field mission", caption: "Our teams travelling alongside humanitarian actors, close to local communities." },
      "tournage-camera": { title: "On camera", caption: "Video capture during a news report." },
      "camigra-terrain": { title: "CaMiGra on assignment", caption: "Audio and video reporting in the field with a humanitarian partner." },
      "prise-de-parole": { title: "Facing the press", caption: "Media interview during a professional event." },
      "etudiant-151": { title: "L'Étudiant No. 151", caption: "Special edition of L'Étudiant, Monday 9 December 2024." },
      "etudiant-389": { title: "L'Étudiant No. 389", caption: "Front page of the L'Étudiant daily, Monday 30 March 2026." },
      "photographe": { title: "Through the lens", caption: "Photo shoot during a news report." },
      "drone-pilote": { title: "Drone piloting", caption: "Aerial footage captured by a member of the CMCT team." },
      "drone-equipe": { title: "Pre-flight check", caption: "Setting up the drone and framing from the remote controller." },
      "drone-paysage": { title: "Aerial imagery", caption: "Aerial shoot at the foot of the mountains." },
      "camigra-ue-terrain": { title: "Project visit", caption: "The CaMiGra crew in the field alongside European Union partners." },
      "visite-ue-hcr": { title: "Meeting communities", caption: "Field visit bringing together the European Union, UNHCR and local communities." },
      "echange-communaute": { title: "Listening to beneficiaries", caption: "Project partners in discussion with community members." },
      "enfants-eau": { title: "Everyday life", caption: "Fetching water in a village visited during a report." },
      "siege-cmct": { title: "Our head office in Yaoundé", caption: "Dangote Building, Rue Felicia, Cami-Toyota, Coron – Yaoundé." },
      "formation-e-entrepreneuses": { title: "Women e-entrepreneurs training", caption: "E-commerce training session for women entrepreneurs, under the PRICNAC programme with AUF." },
      "pricnac-rencontre": { title: "PRICNAC meeting", caption: "Gathering of PRICNAC programme partners: European Union, OACPS, AUF, CAMES, OBREAL, REIFAC." },
      "delegation-partenaires": { title: "Partner delegation", caption: "Meeting with international partners." },
      "visite-entrepot": { title: "Company visit", caption: "Visit of a logistics facility during a business mission." },
      "mission-cece": { title: "Cameroon–Ethiopia mission", caption: "Delegation of the Cameroon-Ethiopia Economic Chamber (CEEC)." },
    },
    loadMore: "Show more photos",
    showing: (shown, total) => `${shown} of ${total} photos shown`,
    covers: "Our front pages",
    fieldTitle: "In the field",
    fieldText: "Our teams travel close to communities to document our partners' projects.",
    seeAll: "View the gallery",
  },

  why: {
    number: "07",
    label: "Why work with CMCT?",
    title: "Complementary expertise and in-depth knowledge of the field",
    reasons: [
      {
        title: "An organisation bringing together several complementary professions",
        text: "CMCT can coordinate consulting, content production, media distribution, training and digital tools within a single programme. This complementarity makes it easier to keep messages consistent, track deliverables and coordinate contributors.",
      },
      {
        title: "Knowledge of the Cameroonian context",
        text: "The company operates from Yaoundé and works in fields directly linked to the challenges of businesses, institutions, education, youth and communication in Cameroon. Proposals are built with audiences, usage, field constraints and budgetary realities in mind.",
      },
      {
        title: "Experience in projects and collaborations",
        text: "The CMCT ecosystem has developed editorial, educational, audiovisual and digital activities, notably for UNESCO, the European Union, the DRC, ACF and AUF. Detailed, authorised references can be shared depending on the nature of the request.",
      },
    ],
    method: {
      title: "Our collaboration method",
      steps: [
        { title: "Listen", text: "Understand the context, objectives and audiences involved." },
        { title: "Propose", text: "Submit a suitable technical approach, schedule and budget." },
        { title: "Deliver", text: "Mobilise the necessary skills and monitor production." },
        { title: "Validate and hand over", text: "Organise feedback, finalise deliverables and hand over the agreed items." },
      ],
    },
  },

  news: {
    issuesTitle: "Our latest front pages",
    issueNumber: (n) => `No. ${n}`,
    issueOpen: (name, n) => `Open the front page of ${name} No. ${n}`,
    kicker: "Blog",
    title: "Company news blog",
    all: "All media",
    filterLabel: "Filter by media",
    readMore: "Read the article",
    loadMore: "Show more articles",
    live: (shown, total) => `${shown} of ${total} articles shown`,
    langNote: "Articles are published in French by our newsrooms.",
    categories: {
      POLITIQUE: "Politics", SOCIETE: "Society", CULTURE: "Culture", ECONOMIE: "Economy", TECH: "Tech",
      EDUCATION: "Education", SANTE: "Health", SPORT: "Sport", ENVIRONNEMENT: "Environment", SCIENCE: "Science",
    },
  },

  contact: {
    kicker: "Let's talk about your project",
    title: "A request? A project?",
    titleAccent: "Let's talk.",
    intro:
      "For a quote, a consultation, a partnership or a presentation of our references, contact CMCT's management. Every request is carefully reviewed in order to offer a response tailored to the need expressed.",
    infoTitle: "Company information",
    info: {
      name: "Company name",
      legal: "Legal form",
      legalValue: "Limited liability company (SARL)",
      legalNote: "according to the information in the institutional brochure",
      rccm: "Trade register (RCCM)",
      address: "Address",
      po: "P.O. Box",
      phone: "Phone",
      landline: "Landline",
      website: "Website",
      email: "Email",
    },
    socialTitle: "Social media",
    formTitle: "Write to us",
    fields: {
      name: "Full name",
      email: "Email",
      organisation: "Organisation (optional)",
      subject: "Subject",
      message: "Describe your need…",
    },
    subjects: ["Quote request", "Consultation", "Partnership", "Presentation of our references", "Training", "Other"],
    errors: {
      name: "Please enter your name.",
      email: "Invalid email address.",
      message: "Your message must contain at least 10 characters.",
    },
    send: "Send message",
    sending: "Sending…",
    success: "Thank you! Your message has been sent. We will get back to you shortly.",
    mailtoSuccess: "Your email app is opening with the message pre-filled: all you have to do is send it.",
    error: "Oops, sending failed. Please try again or write to us directly at",
    mailSubject: "Contact request",
  },

  footer: {
    tagline: "CMCT — Complementary expertise serving your projects.",
    navTitle: "Navigation",
    expertisesTitle: "Fields",
    contactTitle: "Get in touch",
    rights: "All rights reserved.",
    disclaimer:
      "Institutional presentation. Services are delivered according to the agreed scope, the resources mobilised and the conditions set out in the quote or contract. References, audience figures and performance indicators are provided on the basis of up-to-date, verifiable data.",
    ariaNav: "Footer",
  },
};

export default en;

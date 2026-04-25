/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'RailYatri',
    position: 'Technology Specialist',
    url: 'https://www.railyatri.in/',
    startDate: '2025-05-01',
    summary: `Architecting and engineering backend systems for IntrCity SmartBus and RailYatri Ticketing platforms, focused on communication infrastructure, AI-powered tooling, and workflow automation at scale.`,
    highlights: [
      'Architected a centralized communication service processing 300K+ daily transactions across WhatsApp Business API, SMS, Email, and IVR — serving as the single messaging gateway for IntrCity SmartBus and RailYatri Ticketing, improving system reliability by 40%.',
      'Designed an event-driven API architecture using event IDs and standardized REST endpoints, enabling seamless multi-channel communication integration without direct vendor coupling.',
      'Deployed an on-premise AI call intelligence system using Whisper (ASR), Ollama (open-source LLM), and PyAnnote Audio on a dedicated leased-line server — automatically transcribing and analyzing customer call recordings with zero dependency on paid APIs.',
      'Built and deployed a production AI travel chatbot using LangGraph, OpenAI API, and a RAG pipeline, dynamically answering passenger queries using live internal API data.',
      'Built a real-time reporting and observability layer with delivery tracking, failure analysis, and automated error handling, reducing manual monitoring effort by 60%.',
      'Engineered workflow automation pipelines using n8n (Docker-based), integrating Slack with Google Sheets to automate internal communication and operational reporting.',
    ],
  },
  {
    name: 'Levantar Solutions',
    position: 'Software Developer (Part-Time)',
    url: 'https://levantarsolutions.in/',
    startDate: '2022-10-01',
    endDate: '2025-04-01',
    summary: `Led full-stack development of SiteManager and BoutiqueManager — construction and retail management platforms — owning the entire product lifecycle as primary developer on a small team.`,
    highlights: [
      'Led development of SiteManager, a construction management platform covering labour attendance, site progress tracking, material inventory, document management, and client billing.',
      'Built core system features including role-based access control (RBAC), automated PDF generation, email delivery pipelines, and real-time dashboards for operational reporting across SiteManager and BoutiqueManager.',
      'Modernized BoutiqueManager legacy inventory system using CodeIgniter, improving stock management workflows and reducing manual processing overhead for retail operations.',
    ],
  },
  {
    name: 'Ignosi Enterprises LLP',
    position: 'Software Developer',
    url: 'https://ignosi.in/',
    startDate: '2020-05-01',
    endDate: '2022-04-01',
    summary: `Contributed to Alchemy, a core banking platform, building PHP REST APIs, mobile apps, and payment integrations. Also developed offline-first field tools for banking agents operating in low-connectivity environments.`,
    highlights: [
      'Contributed to Alchemy, a core banking platform, developing PHP REST APIs for account management, KYC, loan origination, payment collections, and transaction ledger reporting.',
      'Built an offline-first field collection app for banking agents using Java and PHP REST APIs, leveraging SQLite for local storage and auto-sync on network restoration — ensuring zero data loss.',
      'Developed a bank management dashboard app using Flutter and Dart, enabling bank owners to monitor transactions, track collections, and approve loans in real time.',
      'Integrated Razorpay payment gateway with secure transaction handling, error management, and reconciliation logic to ensure financial accuracy across the platform.',
    ],
  },
];

export default work;

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
  // {
  //   name: "RailYatri",
  //   position: "Technology Specialist",
  //   url: "https://www.railyatri.in/",
  //   startDate: "2024-04-03",
  //   summary: `In my role as a PHP Developer, I collaborate with a dynamic team to drive backend development projects. My responsibilities include creating and maintaining APIs, ensuring high-quality code, and contributing to the overall success of our web applications. I actively participate in various stages of the development lifecycle, from planning and design to implementation and maintenance, ensuring that our projects meet the highest standards of performance and reliability.`,
  //   highlights: ["1", "2", "3"],
  // },
  {
    name: "Levantar Solutions PVT",
    position: "PHP Developer (Freelancer)",
    url: "https://levantarsolutions.in/",
    startDate: "2022-08-25",
    endDate: "2024-04-25",
    summary: `In my role at LEVANTAR SOLUTIONS, I oversee the entire development lifecycle of key web applications, managing both planning and execution phases. I have successfully enhanced website performance, resulting in increased user engagement and revenue.  My efforts in modernizing existing projects and optimizing processes have led to significant operational improvements and higher customer satisfaction.`,
    highlights: [
      `Orchestrated the complete development lifecycle of two web applications: "SiteManager" for builders and "BoutiqueManager" for boutique owners, overseeing all aspects of the projects.`,
      `Optimized website performance by implementing efficient code and responsive design, resulting in a 50% reduction in page load time and a 20% decrease in bounce rate. These improvements led to a significant increase
in conversions and revenue.`,
      " Engineered a feature for generating and delivering quotations through the software via email,accelerating communication with clients by 50% and contributing to a 15% rise in customer satisfaction.",
      ` Successfully transformed an outdated boutique project into a modernized software application while implementing
an optimized inventory management system. This resulted in a 30% reduction in operational inefficiencies and
20% faster inventory processing`,
    ],
  },
  {
    name: "Ignosi Enterprises LLP",
    position: "Software Developer",
    url: "https://ignosi.in/",
    startDate: "2020-04-06",
    endDate: "2022-04-08",
    summary: `As a Software Developer, I spearheaded the development of a pioneering collection app for bank software, enhancing data synchronization and transaction efficiency. I integrated payment solutions and optimized the app's performance, resulting in faster data retrieval and improved user experience. My contributions significantly streamlined operations and boosted user confidence in the software.

`,
    highlights: [
      ` Integrated the Razorpay gateway and orchestrated a comprehensive technology stack, incorporating Java, PHP,
and REST API to ensure robust functionality and secure transactions in the development of the innovative bank
software collection app.`,
      `Utilized Flutter, Dart, PHP, and REST API to construct a robust applicatio`,
      ` Pioneered a groundbreaking collection app for bank software, introducing an efficient offline-first approach that
achieved an impressive 95% data synchronization success rate across servers and executives’ devices, even in
offline scenarios.`,
      `Seamlessly integrated the Razorpay gateway, resulting in a 25% reduction in payment processing time, further
enhancing user experience with rapid transactions.`,
    ],
  },
];

export default work;

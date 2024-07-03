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
    startDate: '2024-04-03',
    summary: ``,
    highlights: [
      '1','2','3'
    ],
  },
  {
    name: 'Levantar Solutions PVT',
    position: 'PHP Developer (Freelancer)',
    url: 'https://levantarsolutions.in/',
    startDate: '2022-08-25',
    endDate:'2024-04-25',
    summary: ``,
    highlights: [
      '1','2','3'

    ],
  },
  {
    name: 'Ignosi Enterprises LLP',
    position: 'Software Developer',
    url: 'https://ignosi.in/',
    startDate: '2020-04-06',
    endDate: '2022-04-08',
    summary: ``,
    highlights: [
      '1','2','3'
    ],
  },
];

export default work;

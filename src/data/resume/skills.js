const skills = [
  // Languages
  { title: 'Python', competency: 5, category: ['Languages', 'ML Engineering'] },
  { title: 'PHP', competency: 4, category: ['Languages', 'Backend Frameworks'] },
  { title: 'Java', competency: 4, category: ['Languages'] },
  { title: 'JavaScript', competency: 4, category: ['Languages', 'Web Development'] },

  // Backend Frameworks
  { title: 'FastAPI', competency: 4, category: ['Backend Frameworks'] },
  { title: 'Django', competency: 3, category: ['Backend Frameworks'] },
  { title: 'Flask', competency: 3, category: ['Backend Frameworks'] },
  { title: 'Laravel', competency: 4, category: ['Backend Frameworks'] },
  { title: 'CodeIgniter', competency: 4, category: ['Backend Frameworks'] },

  // AI/ML & LLMs
  { title: 'OpenAI API', competency: 4, category: ['AI/ML'] },
  { title: 'HuggingFace', competency: 3, category: ['AI/ML', 'ML Engineering'] },
  { title: 'Whisper (ASR)', competency: 4, category: ['AI/ML'] },
  { title: 'Ollama', competency: 4, category: ['AI/ML'] },
  { title: 'LangGraph', competency: 3, category: ['AI/ML'] },
  { title: 'RAG Pipelines', competency: 4, category: ['AI/ML'] },
  { title: 'PyAnnote Audio', competency: 3, category: ['AI/ML', 'ML Engineering'] },

  // Cloud & DevOps
  { title: 'AWS', competency: 4, category: ['Cloud & DevOps'] },
  { title: 'GCP', competency: 3, category: ['Cloud & DevOps'] },
  { title: 'Docker', competency: 4, category: ['Cloud & DevOps'] },
  { title: 'RabbitMQ', competency: 3, category: ['Cloud & DevOps'] },

  // Databases
  { title: 'MySQL', competency: 4, category: ['Databases'] },
  { title: 'SQLite', competency: 3, category: ['Databases'] },

  // Observability
  { title: 'New Relic', competency: 3, category: ['Observability'] },
  { title: 'Looker Studio', competency: 3, category: ['Observability'] },
  { title: 'Metabase', competency: 3, category: ['Observability'] },

  // Tools
  { title: 'Git', competency: 4, category: ['Tools'] },
  { title: 'JWT Authentication', competency: 4, category: ['Tools'] },
  { title: 'n8n', competency: 3, category: ['Tools'] },

  // Mobile Development
  { title: 'Flutter', competency: 3, category: ['Mobile Development'] },
  { title: 'Android SDK', competency: 2, category: ['Mobile Development'] },

  // Web Development
  { title: 'React', competency: 2, category: ['Web Development'] },
  { title: 'HTML + CSS', competency: 3, category: ['Web Development'] },

  // ML Engineering
  { title: 'NumPy', competency: 3, category: ['ML Engineering'] },
  { title: 'Pandas', competency: 5, category: ['ML Engineering'] },
  { title: 'Scikit-Learn', competency: 4, category: ['ML Engineering'] },
  { title: 'TensorFlow + Keras', competency: 3, category: ['ML Engineering'] },
  { title: 'PyTorch', competency: 3, category: ['ML Engineering'] },
  { title: 'Matplotlib', competency: 3, category: ['ML Engineering'] },

  // Data Science
  { title: 'Jupyter', competency: 3, category: ['Data Science', 'ML Engineering'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// Colors mapped to categories (sorted alphabetically):
// AI/ML, Backend Frameworks, Cloud & DevOps, Data Science, Databases,
// Languages, ML Engineering, Mobile Development, Observability, Tools, Web Development
const colors = [
  '#e47272', // AI/ML
  '#37b1f5', // Backend Frameworks
  '#515dd4', // Cloud & DevOps
  '#64cb7b', // Data Science
  '#3896e2', // Databases
  '#6968b3', // Languages
  '#cc7b94', // ML Engineering
  '#40494e', // Mobile Development
  '#747fff', // Observability
  '#c3423f', // Tools
  '#d75858', // Web Development
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };

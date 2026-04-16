// Skills data with categories and proficiency levels
export const skillsData = {
  categories: [
    {
      id: 'backend',
      name: { fr: 'Backend', en: 'Backend' },
      skills: [
        { name: 'Java', icon: 'java.svg', level: 'advanced', years: 2 },
        { name: 'Spring', icon: 'spring.svg', level: 'advanced', years: 1 },
        { name: 'Python', icon: 'python.svg', level: 'advanced', years: 3 },
        { name: 'Django', icon: 'django.svg', level: 'advanced', years: 2 },
        { name: 'Node.js', icon: 'nextjs.svg', level: 'intermediate', years: 1 },
        { name: 'C#', icon: 'csharp.svg', level: 'intermediate', years: 1 },
        { name: '.NET', icon: 'dot-net.svg', level: 'intermediate', years: 1 },
      ]
    },
    {
      id: 'frontend',
      name: { fr: 'Frontend', en: 'Frontend' },
      skills: [
        { name: 'React', icon: 'react.svg', level: 'advanced', years: 3 },
        { name: 'Angular', icon: 'angular.svg', level: 'advanced', years: 1 },
        { name: 'Next.js', icon: 'nextjs.svg', level: 'intermediate', years: 2 },
        { name: 'JavaScript', icon: 'js.svg', level: 'expert', years: 4 },
        { name: 'HTML5', icon: 'html5.svg', level: 'expert', years: 5 },
        { name: 'CSS3', icon: 'css3.svg', level: 'expert', years: 5 },
        { name: 'Tailwind', icon: 'tailwindcss.svg', level: 'advanced', years: 2 },
        { name: 'Bootstrap', icon: 'bootstrap.svg', level: 'advanced', years: 3 },
      ]
    },
    {
      id: 'database',
      name: { fr: 'Base de données', en: 'Database' },
      skills: [
        { name: 'PostgreSQL', icon: 'postgresql.svg', level: 'advanced', years: 2 },
        { name: 'MySQL', icon: 'mysql.svg', level: 'intermediate', years: 2 },
        { name: 'Redis', icon: 'redis.svg', level: 'intermediate', years: 1 },
        { name: 'Firebase', icon: 'firebase.svg', level: 'intermediate', years: 1 },
      ]
    },
    {
      id: 'devops',
      name: { fr: 'DevOps', en: 'DevOps' },
      skills: [
        { name: 'Docker', icon: 'docker.svg', level: 'advanced', years: 2 },
        { name: 'Git', icon: 'git.svg', level: 'expert', years: 4 },
        { name: 'GitHub', icon: 'github.svg', level: 'expert', years: 4 },
        { name: 'Jenkins', icon: 'jenkins.svg', level: 'basic', years: 1 },
        { name: 'Maven', icon: 'maven.svg', level: 'intermediate', years: 1 },
      ]
    },
    {
      id: 'tools',
      name: { fr: 'Outils', en: 'Tools' },
      skills: [
        { name: 'Figma', icon: 'figma.svg', level: 'advanced', years: 2 },
        { name: 'Jira', icon: 'jira.svg', level: 'advanced', years: 2 },
        { name: 'Photoshop', icon: 'photoshop.svg', level: 'intermediate', years: 2 },
      ]
    }
  ]
};

// Proficiency level configurations
export const proficiencyLevels = {
  expert: {
    label: { fr: 'Expert', en: 'Expert' },
    width: '100%',
    color: '#f59e0b' // amber
  },
  advanced: {
    label: { fr: 'Avancé', en: 'Advanced' },
    width: '75%',
    color: '#3b82f6' // blue
  },
  intermediate: {
    label: { fr: 'Intermédiaire', en: 'Intermediate' },
    width: '50%',
    color: '#22c55e' // green
  },
  basic: {
    label: { fr: 'Basique', en: 'Basic' },
    width: '25%',
    color: '#9ca3af' // gray
  }
};

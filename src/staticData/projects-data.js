// Projects data with case study format
import homecook1 from '../../public/assets/images/portfolio/homecook-1.png';
import freshmeal1 from '../../public/assets/images/portfolio/freshmeals-1.webp';
import healthy1 from '../../public/assets/images/portfolio/healthy-food-1.webp';

export const projectsData = [
  {
    id: 'airsen',
    order: 1,
    featured: true,
    types: ['full_stack'],
    image: '/assets/images/portfolio/airsen-thumb.png',
    role: { fr: 'Lead Developer', en: 'Lead Developer' },
    teamSize: 3,
    duration: { fr: 'Août - Déc 2025', en: 'Aug - Dec 2025' },
    translations: {
      fr: {
        name: 'AIRSEN',
        tagline: 'Plateforme de surveillance de la qualité de l\'air',
        problem: 'Les citoyens français n\'ont pas d\'accès facile aux données de qualité de l\'air de leur commune avec des alertes personnalisées.',
        solution: 'Application full-stack avec carte interactive de 35k+ communes, système d\'alertes personnalisables, et forum communautaire.',
        results: [
          '90% de réduction des appels API via cache Redis',
          '82% de couverture de code (backend + frontend)',
          '611 tests (573 backend + 38 frontend)',
          'Hot reload < 2 secondes'
        ],
        description: 'Application full-stack avec carte interactive de 35k+ communes françaises, système d\'alertes personnalisables et forum communautaire.'
      },
      en: {
        name: 'AIRSEN',
        tagline: 'Air Quality Monitoring Platform',
        problem: 'French citizens lack easy access to their municipality\'s air quality data with personalized alerts.',
        solution: 'Full-stack application with interactive map of 35k+ municipalities, customizable alert system, and community forum.',
        results: [
          '90% API call reduction via Redis cache',
          '82% code coverage (backend + frontend)',
          '611 tests (573 backend + 38 frontend)',
          'Hot reload < 2 seconds'
        ],
        description: 'Full-stack application with interactive map of 35k+ French municipalities, customizable alert system and community forum.'
      }
    },
    tech: ['Java 21', 'Spring Boot', 'Angular', 'TypeScript', 'MariaDB', 'Redis', 'Docker'],
    metrics: {
      tests: 611,
      coverage: 82,
      cacheReduction: 90
    },
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: 'imin',
    order: 2,
    featured: false,
    types: ['design'],
    image: '/assets/images/portfolio/imin-thumb.png',
    role: { fr: 'Designer / Développeur', en: 'Designer / Developer' },
    teamSize: 1,
    duration: { fr: '2024', en: '2024' },
    translations: {
      fr: {
        name: 'IMIN',
        tagline: 'Application mobile de réseau social',
        problem: 'Besoin d\'une interface mobile moderne pour une application de réseau social.',
        solution: 'Conception d\'interfaces utilisateur intuitives avec Figma, incluant des flux de navigation et des composants réutilisables.',
        results: [
          'Design system complet',
          '20+ écrans conçus',
          'Mode sombre et clair',
          'Prototype interactif'
        ],
        description: 'Application mobile de réseau social avec design moderne et expérience utilisateur soignée.'
      },
      en: {
        name: 'IMIN',
        tagline: 'Social Network Mobile App',
        problem: 'Need for a modern mobile interface for a social networking application.',
        solution: 'Design of intuitive user interfaces with Figma, including navigation flows and reusable components.',
        results: [
          'Complete design system',
          '20+ screens designed',
          'Dark and light mode',
          'Interactive prototype'
        ],
        description: 'Social network mobile application with modern design and polished user experience.'
      }
    },
    tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Design System'],
    metrics: null,
    displayMode: 'figma_gallery',
    links: {
      github: null,
      demo: null,
      figma: 'https://www.figma.com/'
    }
  },
  {
    id: 'homecook',
    order: 3,
    featured: false,
    types: ['full_stack'],
    image: homecook1?.src,
    video: 'https://www.youtube.com/embed/15NvtxEiVOs?si=tpqCTK-69-AdkT0Y',
    role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
    teamSize: 1,
    duration: { fr: '2023', en: '2023' },
    translations: {
      fr: {
        name: 'HomeCook',
        tagline: 'Application de gestion de recettes',
        problem: 'Les utilisateurs ont besoin d\'un espace centralisé pour stocker et organiser leurs recettes préférées.',
        solution: 'Application web permettant la création, le stockage et la recherche de recettes par catégories et ingrédients.',
        results: [
          'Authentification utilisateur sécurisée',
          'Recherche par ingrédients',
          'Interface responsive',
          'Stockage cloud'
        ],
        description: 'Une application web de gestion de recettes permettant la création, le stockage et la recherche par catégories et ingrédients.'
      },
      en: {
        name: 'HomeCook',
        tagline: 'Recipe Management Application',
        problem: 'Users need a centralized space to store and organize their favorite recipes.',
        solution: 'Web application enabling recipe creation, storage, and search by categories and ingredients.',
        results: [
          'Secure user authentication',
          'Ingredient-based search',
          'Responsive interface',
          'Cloud storage'
        ],
        description: 'A recipe management web application enabling creation, storage, and search by categories and ingredients.'
      }
    },
    tech: ['Python', 'Django', 'React', 'Next.js', 'TailwindCSS', 'PostgreSQL'],
    metrics: null,
    links: {
      github: 'https://github.com/hagonin/Recipe-Django-NextJs',
      demo: 'https://homecook-iota.vercel.app/'
    }
  },
  {
    id: 'freshmeals',
    order: 4,
    featured: false,
    types: ['front_end'],
    image: freshmeal1?.src,
    video: 'https://www.youtube.com/embed/KTp0V3KcX2w?si=6pL3gDQtvIh6Yo5j',
    role: { fr: 'Développeur Frontend', en: 'Frontend Developer' },
    teamSize: 1,
    duration: { fr: '2022', en: '2022' },
    translations: {
      fr: {
        name: 'Freshmeals',
        tagline: 'Site e-commerce de produits bio',
        problem: 'Besoin d\'une plateforme e-commerce moderne pour la vente de produits biologiques.',
        solution: 'Site responsive avec panier, authentification et catalogue de produits.',
        results: [
          'Panier persistant',
          'Catalogue filtrable',
          'Design responsive',
          'Déployé sur Firebase'
        ],
        description: 'Un site e-commerce responsive permettant de parcourir des produits biologiques et de les ajouter au panier.'
      },
      en: {
        name: 'Freshmeals',
        tagline: 'Organic E-commerce Website',
        problem: 'Need for a modern e-commerce platform for selling organic products.',
        solution: 'Responsive website with cart, authentication, and product catalog.',
        results: [
          'Persistent cart',
          'Filterable catalog',
          'Responsive design',
          'Deployed on Firebase'
        ],
        description: 'A responsive e-commerce website for browsing organic products and adding them to cart.'
      }
    },
    tech: ['React', 'Redux', 'TailwindCSS', 'Firebase'],
    metrics: null,
    links: {
      github: 'https://github.com/fenewbie/freshmeals-app-reactjs',
      demo: 'https://freshmeals-reactjs.web.app/'
    }
  },
  {
    id: 'healthyfood',
    order: 5,
    featured: false,
    types: ['front_end'],
    image: healthy1?.src,
    role: { fr: 'Développeur Frontend', en: 'Frontend Developer' },
    teamSize: 1,
    duration: { fr: '2022', en: '2022' },
    compact: true,
    translations: {
      fr: {
        name: 'Healthy Food',
        tagline: 'Site vitrine responsive',
        problem: null,
        solution: null,
        results: null,
        description: 'Réplique du site Slimming World, projet d\'entraînement.'
      },
      en: {
        name: 'Healthy Food',
        tagline: 'Responsive Showcase Website',
        problem: null,
        solution: null,
        results: null,
        description: 'Slimming World website replica, training project.'
      }
    },
    tech: ['HTML5', 'Bootstrap', 'SASS/SCSS'],
    metrics: null,
    links: {
      github: 'https://github.com/hagonin/Healthy-food',
      demo: 'https://healthy-food-38.netlify.app/'
    }
  }
];

export const projectFilters = [
  { label: { fr: 'Tous', en: 'All' }, value: 'all' },
  { label: { fr: 'Full-Stack', en: 'Full-Stack' }, value: 'full_stack' },
  { label: { fr: 'Frontend', en: 'Frontend' }, value: 'front_end' },
  { label: { fr: 'Design', en: 'Design' }, value: 'design' }
];

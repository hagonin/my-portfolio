import Head from 'next/head';
import { useLanguage } from '@/context/LanguageContext';

const metaContent = {
  fr: {
    title: 'Sarah Gonin | Développeuse Full-Stack',
    description:
      'Portfolio de Sarah Gonin, développeuse Full-Stack spécialisée en Java, Spring Boot, React et Angular. Basée à Montpellier, France.',
    keywords:
      'développeuse full-stack, Java, Spring Boot, React, Angular, Montpellier, portfolio'
  },
  en: {
    title: 'Sarah Gonin | Full-Stack Developer',
    description:
      'Portfolio of Sarah Gonin, Full-Stack Developer specialized in Java, Spring Boot, React and Angular. Based in Montpellier, France.',
    keywords:
      'full-stack developer, Java, Spring Boot, React, Angular, Montpellier, portfolio'
  }
};

const NextHead = () => {
  const { locale } = useLanguage();
  const meta = metaContent[locale] || metaContent.fr;
  const url = 'https://hagonin.vercel.app';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sarah Gonin',
    jobTitle: locale === 'fr' ? 'Développeuse Full-Stack' : 'Full-Stack Developer',
    url: url,
    sameAs: [
      'https://github.com/hagonin',
      'https://www.linkedin.com/in/hagonin/'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montpellier',
      addressCountry: 'FR'
    },
    knowsAbout: [
      'Java',
      'Spring Boot',
      'React',
      'Angular',
      'Python',
      'Django',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'Git'
    ]
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content="Sarah Gonin" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={`${url}/og-image.png`} />
      <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:site_name" content="Sarah Gonin Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${url}/og-image.png`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon-dark.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="fr" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default NextHead;

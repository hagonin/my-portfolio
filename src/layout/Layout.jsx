import Footer from "@/layout/Footer";
import MainHeader from "@/layout/Header/MainHeader";
import NextHead from "@/components/shared/NextHead";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Layout = ({ className = "", children }) => {
  const rightContainerRef = useRef(null);
  const { locale } = useLanguage();

  return (
    <>
      <NextHead />
      <a href="#main-content" className="skip-link">
        {locale === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
      </a>
      <main>
        <MainHeader rightContainerRef={rightContainerRef} />
        <div id="main-content" className={`main ${className}`} ref={rightContainerRef}>
          {children}
        </div>
        <Footer />
      </main>

      <style jsx>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: #3b82f6;
          color: #fff;
          padding: 8px 16px;
          z-index: 10000;
          text-decoration: none;
          font-weight: 600;
          border-radius: 0 0 8px 0;
          transition: top 0.2s;
        }
        .skip-link:focus {
          top: 0;
        }
      `}</style>
    </>
  );
};

export default Layout;

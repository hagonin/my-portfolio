import { siteSettings } from "@/staticData/siteSettings";
import Link from "next/link";
import LanguageToggle from "@/components/i18n/LanguageToggle";

const MobileHeader = ({ toggleDrawer }) => {
  return (
    <div className="mob-header">
      <div className="d-flex align-items-center justify-content-between">
        <div className="nav-brand">
          <Link href="/">{siteSettings?.logo}</Link>
        </div>
        <LanguageToggle />
        <button
          onClick={toggleDrawer}
          className="toggler-menu me-2"
          title="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;

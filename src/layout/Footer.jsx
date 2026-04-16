import { siteSettings } from "@/staticData/siteSettings";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translations";

const tooltipKeys = {
  1: 'footer.githubTooltip',
  2: 'footer.linkedinTooltip'
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div
            className={`col-lg-6 text-center text-lg-end
            }`}
          >
            <p className="">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          <div className="col-lg-6">
            <ul
              className={`social-media text-center text-lg-start mt-lg-0
              }`}
            >
              {siteSettings?.footerItems?.map((item) => (
                <li key={item?.id} className="list-inline-item">
                  <Link
                    aria-label={"Visit social media"}
                    target="_blank"
                    title={tooltipKeys[item?.id] ? t(tooltipKeys[item?.id]) : item?.tooltip}
                    href={item?.url}
                  >
                    {item?.Icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

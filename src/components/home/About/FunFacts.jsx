import { funItems } from "@/staticData/home/home";
import FunFactItem from "./FunFactItem";
import { useTranslation } from "@/hooks/use-translations";

const FunFacts = () => {
  const { t } = useTranslation();
  const funFactTitles = t('funFacts');

  return (
    <div className="funfacts h-100">
      {funItems?.map((item, index) => (
        <FunFactItem
          key={item?.id}
          {...item}
          title={Array.isArray(funFactTitles) && funFactTitles[index]?.title || item.title}
        />
      ))}
    </div>
  );
};

export default FunFacts;

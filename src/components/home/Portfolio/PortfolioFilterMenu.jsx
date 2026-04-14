import { useLanguage } from '@/context/LanguageContext';

const FilterButton = ({ filter, isActive, onClick }) => {
	const { locale } = useLanguage();
	const label = filter.label[locale] || filter.label.fr;

	return (
		<li className={isActive ? 'active' : ''} onClick={onClick}>
			{label}
		</li>
	);
};

export default FilterButton;

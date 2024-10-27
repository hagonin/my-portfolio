const FilterButton = ({ label, isActive, onClick }) => (
	<li className={isActive ? 'active' : ''} onClick={onClick}>
		{label}
	</li>
);

export default FilterButton;

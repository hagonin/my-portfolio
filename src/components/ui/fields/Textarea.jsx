const Textarea = ({
	placeholder = 'Vous souhaitez travailler sur un projet ? Ou tout simplement parler de sujets relatifs au développement web ?',
	value = '',
	handleChange = () => console.log('Typing'),
	name = 'client_message',
	className = 'form-control bg-transparent rounded-0',
	rows = '6',
	label = '',
	required = true,
}) => {
	return (
		<>
			<textarea
				placeholder={placeholder}
				value={value}
				name={name}
				className={className}
				rows={rows}
				onChange={(e) => handleChange(e)}
				required={required}
			></textarea>
			{label && <label>{label}</label>}
		</>
	);
};

export default Textarea;

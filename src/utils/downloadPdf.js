// Locale-aware CV files live in /public as CV-Sarah-Gonin-<LOCALE>.pdf
const CV_FILES = {
	fr: 'CV-Sarah-Gonin-FR.pdf',
	en: 'CV-Sarah-Gonin-EN.pdf',
};

export const downloadPdf = (locale = 'fr') => {
	// Fall back to the French CV for any unexpected locale
	const fileName = CV_FILES[locale] || CV_FILES.fr;

	// Create a hidden anchor element to trigger the download
	const a = document.createElement('a');
	a.href = `/${fileName}`;
	a.download = fileName;

	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

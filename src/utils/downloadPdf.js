export const downloadPdf = ()=> {
	const pdfPath= '/cv-gonin.pdf'; 

	// Create a hidden anchor element
	const a = document.createElement('a');
	a.href = pdfPath;
	a.download = 'cv-gonin.pdf'; 

	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

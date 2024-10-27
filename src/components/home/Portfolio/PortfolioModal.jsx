import CustomModal from '../shared/CustomModal';
import Image from 'next/image';

const PortfolioModal = ({
	isOpen,
	onRequestClose,
	selectedImage,
	selectedPortfolio,
}) => {
	// Define the image extensions for Type A rendering
	const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'];

	// Determine if selected image is in the list of Type A image extensions
	const isTypeAImage = imageExtensions.some((ext) =>
		selectedImage?.endsWith(`.${ext}`)
	);

	return (
		<CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
			{selectedImage && isTypeAImage && (
				// Render for Type A images
				<div className="h-100 w-75 mx-auto position-relative">
					<div className="row bg-white p-4">
						<div className="col-md-6 col-12">
							<h4>Name: {selectedPortfolio.name}</h4>
							<p>Description of the project...</p>
						</div>
						<div className="col-md-6 col-12">
							<Image
								src={selectedImage}
								alt="Portfolio Modal Image"
								width={390}
								height={200}
								className="img-fluid"
							/>
						</div>
					</div>
					<button className="mfp-close" onClick={onRequestClose}>
						&times;
					</button>
				</div>
			)}

			{selectedImage && !isTypeAImage && (
				// Render for Type B (non-image) content, such as videos
				<div className="h-100 p-4">
					<div className="row">
						<div className="col-md-6 col-12">
							<h4>Name: {selectedPortfolio.name}</h4>
							<p>Description of the project...</p>
						</div>
						<div className="col-md-6 col-12">
							<iframe
								title="Portfolio Video"
								src={selectedImage}
								width="100%"
								height="300px"
								allowFullScreen
							></iframe>
						</div>
					</div>
					<button className="mfp-close" onClick={onRequestClose}>
						&times;
					</button>
				</div>
			)}
		</CustomModal>
	);
};

export default PortfolioModal;

import CustomModal from '@/components/shared/CustomModal';
import Image from 'next/image';

const PortfolioModal = ({
	isOpen,
	onRequestClose,
	selectedImage,
	selectedPortfolio,
}) => {
	// Define the image extensions 
	const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'];

	// Determine if selected image is in the list of image extensions
	const containsImageExtension = imageExtensions.some((ext) =>
		selectedImage?.endsWith(`.${ext}`)
	);

	return (
		<CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
			{selectedImage && containsImageExtension && (
				<div className="h-100 p-4 overflow-auto">
					<div className="row bg-white p-4">
						<div className="col-md-6 col-12">
							<h4>Name: {selectedPortfolio.name}</h4>
							<p>Description of the project...DemDeDee</p>
							<ul>
								<li>
									<p>Lorem ipsum dolor</p>
								</li>
								<li>
									<p>Lorem ipsum dolor</p>
								</li>
								<li>
									<p>Lorem ipsum dolor</p>
								</li>
								<li>
									<p>Lorem ipsum dolor</p>
								</li>
							</ul>
						</div>
						<div className="col-md-6 col-12">
							<Image
								src={selectedImage}
								alt="Portfolio Modal Image"
								width={390}
								height={200}
								className="img-fluid object-fit-contain"
							/>
						</div>
					</div>
					<button
						className="mfp-close"
						onClick={onRequestClose}
						style={{ position: 'absolute' }}
					>
						&times;
					</button>
				</div>
			)}

			{selectedImage && !containsImageExtension && (
				<div className="h-100 p-4 overflow-auto">
					<div className="row">
						<div className="col-md-6 col-12">
							<h4>Name: {selectedPortfolio.name}</h4>
							<p>Description of the project..Test.</p>
						</div>
						<div className="col-md-6 col-12">
							<iframe
								style={{ position: 'relative' }}
								title="Portfolio Video"
								src={selectedImage}
								width="100%"
								height="300px"
								allowFullScreen
							></iframe>
						</div>
					</div>
					<button
						className="mfp-close"
						onClick={onRequestClose}
						style={{ position: 'absolute' }}
					>
						&times;
					</button>
				</div>
			)}
		</CustomModal>
	);
};

export default PortfolioModal;

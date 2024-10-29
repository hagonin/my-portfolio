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
	console.log('Setting selectedImage:', selectedPortfolio);

	return (
		<CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
			{selectedImage && containsImageExtension && (
				<div className="h-100 p-4 overflow-auto">
					<div className="row bg-white p-4">
						<div className="col-md-6 col-12">
							<h4 className="mb-3 fw-bolder">{selectedPortfolio.name}</h4>
							<p>
								<span className="fw-bold">Description</span>:{' '}
								{selectedPortfolio.description}
							</p>
							<ul className="">
								{selectedPortfolio.feat &&
									selectedPortfolio.feat.map((feature, index) => (
										<li key={index} className="py-1 mt-2">
											- {feature}
										</li>
									))}
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
				<div
					className="h-100 p-4 overflow-auto m-3 "
					style={{ textAlign: 'justify' }}
				>
					<div className="row">
						<div className="col-md-6 col-12">
							<h4 className="mb-3 fw-bolder">{selectedPortfolio.name}</h4>
							<p>
								<span className="fw-bold">Description</span>:{' '}
								{selectedPortfolio.description}
							</p>
							<ul className="">
								{selectedPortfolio.feat &&
									selectedPortfolio.feat.map((feature, index) => (
										<li key={index} className="py-1 mt-2">
											- {feature}
										</li>
									))}
							</ul>
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

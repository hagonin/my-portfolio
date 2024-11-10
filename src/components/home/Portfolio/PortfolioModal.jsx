import CustomModal from '@/components/shared/CustomModal';
import SecondaryButton from '@/components/ui/SecondaryButton';
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
					<div className="row bg-white p-4 g-4">
						<div className="col-lg-6 col-12">
							<h4 className="mb-3 fw-bolder">{selectedPortfolio.name}</h4>
							<ul>
								{selectedPortfolio.tech &&
									selectedPortfolio.tech.map((item, id) => (
										<li className="list-inline-item" key={id}>
											<span className="btn-link-rounded rounded-5">{item}</span>
										</li>
									))}
							</ul>
							<p>
								<span className="fw-bold">
									Description
								</span>
								: {selectedPortfolio.description}
							</p>
							<div className="mt-4">
								<span className="mx-auto">
									<SecondaryButton text="Code source" url={selectedPortfolio.url1} />
								</span>
								<span className="me-5">
									{selectedPortfolio.url2 && (
										<SecondaryButton text="Vers le site" url={selectedPortfolio.url2} />
									)}
								</span>
							</div>
						</div>
						<div className="col-lg-6 col-12">
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
				<div className="h-100 p-4 overflow-auto m-3 ">
					<div className="row g-4">
						<div className="col-lg-6 col-12">
							<h4 className="mb-3 fw-bolder">{selectedPortfolio.name}</h4>
							<ul>
								{selectedPortfolio.tech &&
									selectedPortfolio.tech.map((item, id) => (
										<li className="list-inline-item" key={id}>
											<span className="btn-link-rounded rounded-5">{item}</span>
										</li>
									))}
							</ul>
							<p>
								<span className="fw-bold fs-6">Description</span>:{' '}
								{selectedPortfolio.description}
							</p>
							<div className="mt-4">
								<span className="">
									<SecondaryButton text="Code source" url={selectedPortfolio.url1} />
								</span>
								<span className="me-xl-5 my-sm-3">
									{selectedPortfolio.url2 && (
										<SecondaryButton text="Vers le site" url={selectedPortfolio.url2} />
									)}
								</span>
							</div>
						</div>
						<div className="col-lg-6 col-12">
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

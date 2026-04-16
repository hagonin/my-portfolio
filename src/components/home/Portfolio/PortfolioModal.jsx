import CustomModal from '@/components/shared/CustomModal';
import SecondaryButton from '@/components/ui/SecondaryButton';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translations';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaCompress } from 'react-icons/fa';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.4;

const ZoomableImage = ({ src, alt, onScaleChange }) => {
	const [scale, setScale] = useState(1);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const containerRef = useRef(null);

	const updateScale = useCallback((next) => {
		const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
		setScale(clamped);
		onScaleChange?.(clamped);
		if (clamped === MIN_SCALE) { x.set(0); y.set(0); }
		return clamped;
	}, [x, y, onScaleChange]);

	const handleWheel = useCallback((e) => {
		e.preventDefault();
		updateScale(scale - e.deltaY * 0.005);
	}, [scale, updateScale]);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		el.addEventListener('wheel', handleWheel, { passive: false });
		return () => el.removeEventListener('wheel', handleWheel);
	}, [handleWheel]);

	// Drag bounds proportional to zoom level
	const dragConstraints = scale > 1
		? { top: -150 * (scale - 1), bottom: 150 * (scale - 1), left: -200 * (scale - 1), right: 200 * (scale - 1) }
		: { top: 0, bottom: 0, left: 0, right: 0 };

	return (
		<div style={{ position: 'relative' }}>
			{/* Zoom controls */}
			<div style={{ position: 'absolute', top: 6, right: 6, zIndex: 10, display: 'flex', gap: '4px' }}>
				<button
					onClick={() => updateScale(MIN_SCALE)}
					className="btn btn-sm btn-dark d-flex align-items-center justify-content-center"
					style={{ width: 28, height: 28, padding: 0, opacity: 0.8, visibility: scale > 1 ? 'visible' : 'hidden' }}
					aria-label="Reset zoom"
				>
					<FaCompress size={11} />
				</button>
				<button
					onClick={() => updateScale(scale - ZOOM_STEP)}
					className="btn btn-sm btn-dark d-flex align-items-center justify-content-center"
					style={{ width: 28, height: 28, padding: 0, opacity: 0.8 }}
					aria-label="Zoom out"
				>
					<FaMinus size={11} />
				</button>
				<button
					onClick={() => updateScale(scale + ZOOM_STEP)}
					className="btn btn-sm btn-dark d-flex align-items-center justify-content-center"
					style={{ width: 28, height: 28, padding: 0, opacity: 0.8 }}
					aria-label="Zoom in"
				>
					<FaPlus size={11} />
				</button>
			</div>

			{/* Zoom level badge */}
			{scale > 1 && (
				<div style={{ position: 'absolute', bottom: 6, left: 6, zIndex: 10, background: 'rgba(0,0,0,0.55)', color: '#fff', borderRadius: 4, padding: '2px 7px', fontSize: 11 }}>
					{Math.round(scale * 100)}%
				</div>
			)}

			<div
				ref={containerRef}
				style={{ overflow: 'hidden', borderRadius: '4px', display: 'inline-block', cursor: scale > 1 ? 'grab' : 'default' }}
			>
				<motion.div
					drag={scale > 1}
					dragConstraints={dragConstraints}
					dragElastic={0.05}
					style={{ x, y, scale, display: 'inline-block' }}
					transition={{ type: 'spring', stiffness: 300, damping: 28 }}
					whileDrag={{ cursor: 'grabbing' }}
				>
					<Image
						src={src}
						alt={alt}
						width={800}
						height={600}
						className="img-fluid rounded shadow-sm"
						style={{ maxWidth: '100%', maxHeight: '38vh', height: 'auto', objectFit: 'contain', display: 'block', userSelect: 'none' }}
						draggable={false}
					/>
				</motion.div>
			</div>
		</div>
	);
};

const PortfolioModal = ({
	isOpen,
	onRequestClose,
	selectedImage,
	selectedPortfolio,
}) => {
	const { t } = useTranslation();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [currentScale, setCurrentScale] = useState(1);
	// key forces ZoomableImage remount on image change, resetting zoom state
	const [zoomKey, setZoomKey] = useState(0);

	const galleryImages = selectedPortfolio?.list_images?.map(img => img?.src || img) ||
		(selectedImage ? [selectedImage] : []);

	useEffect(() => {
		setCurrentImageIndex(0);
		setZoomKey((k) => k + 1);
	}, [selectedPortfolio?.id, isOpen]);

	const isVideo = selectedImage?.includes('youtube.com') || selectedImage?.includes('vimeo.com');
	const hasMultipleImages = galleryImages.length > 1;
	const currentImage = galleryImages[currentImageIndex] || selectedImage;

	const nextImage = () => {
		setZoomKey((k) => k + 1);
		setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
	};

	const prevImage = () => {
		setZoomKey((k) => k + 1);
		setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
	};

	if (!selectedPortfolio) return null;

	const ProjectInfo = ({ centered = false }) => (
		<div className="mb-3">
			<h4 className={`mb-3 fw-bolder ${centered ? 'text-center' : ''}`}>{selectedPortfolio.name}</h4>
			<ul className={`mb-3 ${centered ? 'text-center' : ''}`}>
				{selectedPortfolio.tech?.map((item, id) => (
					<li className="list-inline-item" key={id}>
						<span className="btn-link-rounded rounded-5">{item}</span>
					</li>
				))}
			</ul>
			<p className={`mb-3 ${centered ? 'text-center' : ''}`}>
				<span className="fw-bold">{t('portfolio.description')}</span>:{' '}
				{t(`portfolio.projects.${selectedPortfolio.translationKey}.description`)}
			</p>
			{(selectedPortfolio.url1 || selectedPortfolio.url2) && (
				<div className={`d-flex gap-2 flex-wrap ${centered ? 'justify-content-center' : ''}`}>
					{selectedPortfolio.url1 && <SecondaryButton text={t('portfolio.sourceCode')} url={selectedPortfolio.url1} />}
					{selectedPortfolio.url2 && <SecondaryButton text={t('portfolio.visitSite')} url={selectedPortfolio.url2} />}
				</div>
			)}
		</div>
	);

	return (
		<CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
			{selectedImage && !isVideo && (
				<div className="p-4 overflow-auto">
					<div className="bg-white p-4">
						<ProjectInfo />
						<div className="d-flex align-items-center justify-content-center gap-3">
							{hasMultipleImages && (
								<button
									onClick={prevImage}
									className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
									style={{ width: '44px', height: '44px' }}
									aria-label="Previous image"
											>
									<FaChevronLeft size={18} />
								</button>
							)}
							<div className="text-center flex-grow-1">
								<ZoomableImage
									key={zoomKey}
									src={currentImage}
									alt={`${selectedPortfolio.name} - Image ${currentImageIndex + 1}`}
									onScaleChange={setCurrentScale}
								/>
								{hasMultipleImages && (
									<div className="mt-2">
										<small className="text-muted">
											{currentImageIndex + 1} / {galleryImages.length}
											{currentScale > 1 && ' · drag to pan'}
										</small>
									</div>
								)}
							</div>
							{hasMultipleImages && (
								<button
									onClick={nextImage}
									className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
									style={{ width: '44px', height: '44px' }}
									aria-label="Next image"
											>
									<FaChevronRight size={18} />
								</button>
							)}
						</div>
					</div>
					<button className="mfp-close" onClick={onRequestClose} style={{ position: 'absolute' }}>
						&times;
					</button>
				</div>
			)}

			{selectedImage && isVideo && (
				<div className="bg-white p-4 pb-2 d-flex flex-column align-items-center">
					{/* Video top — padded, fixed 40vh */}
					<div style={{ width: '100%', height: '40vh', overflow: 'hidden' }}>
						<iframe
							title="Portfolio Video"
							src={selectedImage}
							allowFullScreen
							style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
						></iframe>
					</div>
					{/* Info below — centered */}
					<div className="pt-3 w-100">
						<ProjectInfo centered />
					</div>
					<button className="mfp-close" onClick={onRequestClose} style={{ position: 'absolute' }}>
						&times;
					</button>
				</div>
			)}
		</CustomModal>
	);
};

export default PortfolioModal;

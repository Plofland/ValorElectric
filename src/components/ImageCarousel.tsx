import { useState, useRef } from 'react';
import styled from 'styled-components';

const ImageCarousel = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const touchStartX = useRef(null);
	const touchEndX = useRef(null);
	const minSwipeDistance = 50;

	const goTo = (index) => {
		if (index < 0 || index >= images.length) return;
		setActiveIndex(index);
	};

	const onTouchStart = (e) => {
		touchStartX.current = e.targetTouches[0].clientX;
		touchEndX.current = null;
	};

	const onTouchMove = (e) => {
		touchEndX.current = e.targetTouches[0].clientX;
	};

	const onTouchEnd = () => {
		if (touchStartX.current === null || touchEndX.current === null) return;
		const distance = touchStartX.current - touchEndX.current;
		if (Math.abs(distance) >= minSwipeDistance) {
			distance > 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
		}
		touchStartX.current = null;
		touchEndX.current = null;
	};

	return (
		<CarouselWrapper>
			<Track
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				<TrackInner $activeIndex={activeIndex}>
					{images.map((img, i) => (
						<Slide key={i} $active={i === activeIndex}>
							<SlideImg
								src={img.src}
								alt={img.alt}
								draggable={false}
							/>
						</Slide>
					))}
				</TrackInner>
			</Track>
			<Dots>
				{images.map((_, i) => (
					<Dot
						key={i}
						$active={i === activeIndex}
						onClick={() => goTo(i)}
					/>
				))}
			</Dots>
		</CarouselWrapper>
	);
};

export default ImageCarousel;

const CarouselWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	overflow: hidden;
`;

const Track = styled.div`
	width: 100%;
	overflow: hidden;
	/* Peek: show 8% of adjacent slides on each side */
	padding: 0 8%;
	box-sizing: border-box;
`;

const TrackInner = styled.div`
	display: flex;
	gap: 1rem;
	transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	/* Each slide is 84% of Track width (100% - 8% peek on each side) */
	/* Offset: each step moves one full slide (84%) + one gap (1rem) */
	transform: ${({ $activeIndex }) =>
		`translateX(calc(8% + ${$activeIndex * -84}% - ${$activeIndex}rem))`};
`;

const Slide = styled.div`
	/* 84% = full track width minus the 8% peek on each side */
	flex: 0 0 84%;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
	transition: transform 0.4s ease, filter 0.4s ease;
	transform: ${({ $active }) => ($active ? 'scale(1)' : 'scale(0.95)')};
	filter: ${({ $active }) => ($active ? 'brightness(1)' : 'brightness(0.6)')};
`;

const SlideImg = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
	object-position: center;
	display: block;
	user-select: none;
`;

const Dots = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

const Dot = styled.button`
	width: ${({ $active }) => ($active ? '1.5rem' : '0.5rem')};
	height: 0.5rem;
	border-radius: 999px;
	border: none;
	background-color: #0038ff;
	cursor: pointer;
	padding: 0;
	opacity: ${({ $active }) => ($active ? '1' : '0.3')};
	transition: width 0.3s ease, opacity 0.3s ease;
`;
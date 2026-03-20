import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const Part2 = () => {
	return (
		<Part2Container>
			<CenteredFade direction="left" triggerOnce>
				<BeforeAfterContainer>
					<PhotoWrapper>
						<Photo
							src="/fuseBox.jpeg"
							alt="Before image of a fuse box containing fuses"
						/>
					</PhotoWrapper>

					<ArrowBadge>
						<i className="fa-solid fa-arrow-right" />
					</ArrowBadge>

					<PhotoWrapper>
						<Photo
							src="/fuseBoxAfter.jpeg"
							alt="After image of a modern circuit breaker panel"
						/>
					</PhotoWrapper>
				</BeforeAfterContainer>
			</CenteredFade>
		</Part2Container>
	);
};

export default Part2;

const Part2Container = styled.div`
	display: flex;
	width: 100%;
	min-height: 60vh;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const CenteredFade = styled(Fade)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

/* Holds both photos + the arrow in a row */
const BeforeAfterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	width: 100%;
`;

/* Gives each photo a subtle framing context */
const PhotoWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
`;

/* Circular badge with the arrow icon */
const ArrowBadge = styled.div`
	flex-shrink: 0;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background-color: #1a1a2e;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
	font-size: 1rem;

	/* Subtle pulse to draw the eye across the two photos */
	animation: pulse 2.4s ease-in-out infinite;

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
		}
		50% {
			transform: scale(1.12);
			box-shadow: 0 6px 14px rgba(0, 0, 0, 0.45);
		}
	}

	@media (max-width: 768px) {
		width: 2rem;
		height: 2rem;
		font-size: 0.8rem;
	}
`;

const Photo = styled.img`
	width: 100%;
	max-width: 280px;
	aspect-ratio: 4 / 3;
	object-fit: cover;
	border-radius: 12px;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
	transition:
		transform 0.35s ease,
		filter 0.35s ease;

	&:hover {
		transform: scale(1.03);
		filter: brightness(1.08);
	}

	@media (max-width: 768px) {
		max-width: 160px;
	}
`;

import styled, { css } from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const Part3 = () => {
	return (
		<Part3Container>
			<CenteredFade direction="up" triggerOnce>
				<MosaicGrid>
					<Fade direction="left" triggerOnce delay={300}>
						<TallPhoto
							src="/scissorLift.jpeg"
							alt="A fully extended scissor lift being used to access and repair a light in a warehouse"
						/>
					</Fade>
					<MiddleColumn>
						<SquareFade
							cascade
							damping={0.4}
							direction="up"
							triggerOnce
						>
							<SquarePhoto
								src="/ceilingFan.jpeg"
								alt="A ceiling fan installation"
							/>
							<SquarePhoto
								src="/litLivingRoom.jpeg"
								alt="A beautifully lit living room"
							/>
						</SquareFade>
					</MiddleColumn>
					<Fade direction="right" triggerOnce delay={300}>
						<TallPhoto
							src="/andrewFromBehind.jpeg"
							alt="Electrician working on site"
						/>
					</Fade>
				</MosaicGrid>
			</CenteredFade>
		</Part3Container>
	);
};
export default Part3;

const photoBase = css`
	border-radius: 10px;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
	object-fit: cover;
	transition:
		transform 0.35s ease,
		filter 0.35s ease;
	&:hover {
		transform: scale(1.03);
		filter: brightness(1.08);
	}
`;

const Part3Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding: 2rem;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

const CenteredFade = styled(Fade)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MosaicGrid = styled.div`
	display: flex;
	gap: 1.5rem;
	width: 100%;
	height: 500px;

	@media (max-width: 768px) {
		height: 300px;
	}
`;

const TallPhoto = styled.img`
	${photoBase}
	height: 100%;
	width: calc(500px * 5 / 7);
	object-position: center;
	flex-shrink: 0;

	@media (max-width: 768px) {
		width: calc(300px * 5 / 7);
	}
`;

const MiddleColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	height: 100%;
	flex: 1;
	min-height: 0;
`;

const SquareFade = styled(Fade)`
	flex: 1;
	min-height: 0;
	display: flex;
`;

const SquarePhoto = styled.img`
	${photoBase}
	width: 100%;
	min-height: 0;
	flex: 1;
`;

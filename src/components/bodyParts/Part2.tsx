import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const Part2 = () => {
	return (
		<Part2Container>
			<LeftSection>
				<CenteredFade
					cascade
					direction="right"
					damping={0.15}
					triggerOnce
				>
					<ServicesCopyContainer>
						<h3>Types of Services</h3>
						<ul>
							<Fade
								cascade
								damping={0.15}
								delay={600}
								triggerOnce
							>
								<li>
									Residential Electrical
									Services
								</li>
								<li>
									Commercial Electrical
									Services
								</li>
								<li>
									Installation and
									Upgrades
								</li>
								<li>
									Repair and Maintenance
								</li>
								<li>
									Inspection and Testing
								</li>
							</Fade>
						</ul>
					</ServicesCopyContainer>
				</CenteredFade>
			</LeftSection>
            <RightSection>
				<CenteredFade direction="left" triggerOnce>
					<Photo
						src="/fuseBox.jpeg"
						alt="Before image of a fuse box containing fuses"
					/>
				</CenteredFade>
			</RightSection>
		</Part2Container>
	);
};

export default Part2;

const Part2Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

// this could have the two images of the fuse box overlapping
const RightSection = styled.div`
	flex: 0 0 35%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	/* border: 1px solid #000000; */

	@media (max-width: 768px) {
		width: 100%;
		padding: 1rem 0;
	}
`;

const LeftSection = styled.div`
	flex: 0 0 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	/* border: 1px solid #000000; */

	@media (max-width: 768px) {
		width: 100%;
		padding: 1rem 0;
	}
`;

const CenteredFade = styled(Fade)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CopyContainer = styled.div`
	// Soft Neutral (Modern & Balanced)
	background-color: #f8fafc;

	border-radius: 12px;
	padding: 32px;
	max-width: 600px;
	width: 100%;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);

	h3,
	ul {
		margin: 0 0 15px 0;
		text-align: left;
	}

	ul {
		list-style-position: inside;
	}

	@media (max-width: 768px) {
		padding: 24px;
	}
`;

const ServicesCopyContainer = styled(CopyContainer)`
	@media (max-width: 768px) {
		margin-top: 1.5rem;
	}
`;

const Photo = styled.img`
	max-width: 80%;
	max-height: 80%;
	object-fit: contain;
	border-radius: 12px;
`;

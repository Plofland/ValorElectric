import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const Part1 = () => {
	return (
		<Part1Container>
			<LeftSection>
				<CenteredFade direction="left" triggerOnce>
					<Photo
						src="/andrewSideView.jpeg"
						alt="Side profile portrait of Andrew the electrician as he works on an electrical outlet"
					/>
				</CenteredFade>
			</LeftSection>
			<RightSection>
				<CenteredFade
					cascade
					direction="right"
					damping={0.15}
					triggerOnce
				>
					<MissionCopyContainer>
						<Fade cascade damping={0.15} delay={600} triggerOnce>
							<h3>Our Mission</h3>
							<p>
								We strive to provide safe and reliable
								electrical solutions for homes and businesses of
								all sizes. We promise to deliver quality
								workmanship, clear communication, and a
								dependable service you can trust.
							</p>
						</Fade>
					</MissionCopyContainer>
					<BottomCardsRow>
						<ServicesCopyContainer>
							<h3>Types of Services</h3>
							<ul>
								<Fade
									cascade
									damping={0.15}
									delay={600}
									triggerOnce
								>
									<li>Residential Electrical Services</li>
									<li>Commercial Electrical Services</li>
									<li>Installation and Upgrades</li>
									<li>Repair and Maintenance</li>
									<li>Inspection and Testing</li>
								</Fade>
							</ul>
						</ServicesCopyContainer>
						<RegionCopyContainer>
							<Fade
								cascade
								damping={0.15}
								delay={600}
								triggerOnce
							>
								<h3>Proud to Serve</h3>
								<ul>
									<li>Knightdale, NC</li>
									<li>Raleigh, NC</li>
									<li>Garner, NC</li>
									<li>and surrounding areas</li>
								</ul>
							</Fade>
						</RegionCopyContainer>
					</BottomCardsRow>
				</CenteredFade>
			</RightSection>
		</Part1Container>
	);
};

export default Part1;

const Part1Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	padding: 2rem;
	
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
	}
`;

const LeftSection = styled.div`
	display: flex;
	flex: 0 0 calc(50% - 1rem);
	justify-content: center;
	align-items: center;
	align-self: stretch;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const RightSection = styled.div`
	flex: 0 0 calc(50% - 1rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	gap: 2rem;
	padding: 0;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const CenteredFade = styled(Fade)`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const MissionCopyContainer = styled.div`
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
	p {
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		padding: 24px;
		p {
			line-height: 1;
		}
	}
`;

/* New wrapper that matches MissionCopyContainer's max-width */
const BottomCardsRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
	max-width: 600px;
	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Photo = styled.img`
	width: 100%;
	max-width: 420px;
	height: auto;
	max-height: 600px;
	object-fit: cover;
	object-position: center top;
	border-radius: 12px;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
`;

const CopyContainer = styled.div`
	background-color: #f8fafc;
	border-radius: 12px;
	padding: 24px 28px;
	flex: 1;
	width: 0;
	display: flex;
	flex-direction: column;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
	h3,
	ul {
		margin: 0 0 15px 0;
		text-align: left;
	}
	ul {
		list-style-position: inside;
	}
	p {
		line-height: 1.5;
	}
	@media (max-width: 768px) {
		padding: 24px;
		width: 100%;
		p {
			line-height: 1;
		}
	}
`;

const RegionCopyContainer = styled(CopyContainer)`
	justify-content: flex-start;

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		margin-bottom: 0;
		padding: 0.6em 0;
	}
`;

const ServicesCopyContainer = styled(CopyContainer)`
	li {
		font-size: 0.875em;
	}

	@media (max-width: 768px) {
		margin-top: 0;
	}
`;

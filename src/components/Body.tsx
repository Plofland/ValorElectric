import styled from 'styled-components';
import electricianPortrait from '/david-cain-TVPI5pHpNFw-unsplash.jpg';
import { Fade } from 'react-awesome-reveal';

const Body = () => {
	return (
		<BodyContainer>
			<LeftSection>
				<CenteredFade direction="left" triggerOnce>
					<Portrait
						src={electricianPortrait}
						alt="Portrait of an electrician"
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
					<CopyContainer>
						<Fade
							cascade
							damping={0.15}
							delay={600}
							triggerOnce
						>
							<h3>Our Mission</h3>
							<p>
								We strive to provide safe
								and reliable electrical
								solutions for homes and
								businesses of all sizes. We
								promise to deliver quality
								workmanship, clear
								communication, and a
								dependable service you can
								trust.
							</p>
						</Fade>
					</CopyContainer>
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
			</RightSection>
		</BodyContainer>
	);
};

export default Body;

const BodyContainer = styled.div`
	display: flex;
	width: 100%;
	min-height: 70vh;
	background-color: #ffffff;
	margin: 0;
	box-shadow: 0 0px 30px rgba(0, 0, 0, 0.65);
	/* border: 1px solid #000000; */

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 1rem;
	}
`;

const LeftSection = styled.div`
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

const RightSection = styled.div`
	flex: 0 0 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	border: 1px solid #000000;

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
	background-color: #faf7f5;
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
		padding-left: 20px;
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

const Portrait = styled.img`
	max-width: 80%;
	max-height: 80%;
	object-fit: contain;
	border-radius: 12px;
`;

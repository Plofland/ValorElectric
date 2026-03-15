import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const Part3 = () => {
	return (
		<Part3Container>
			<LeftSection>
				<CenteredFade direction="left" triggerOnce>
					<Photo
						src="/scissorLift.jpeg"
						alt="A fully extended scissor lift being used to access and repair a light in a warehouse"
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
				</CenteredFade>
			</RightSection>
		</Part3Container>
	);
};

export default Part3;

const Part3Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
	display: flex;
	flex: 0 0 50%;
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
	display: flex;
	flex: 0 0 50%;
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


const Photo = styled.img`
	max-width: 60%;
	max-height: 60%;
	object-fit: contain;
	border-radius: 12px;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
`;

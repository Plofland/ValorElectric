import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
	return (
		<>
			<ContactContainer>
				<Fade
					direction="up"
					cascade
					damping={0.15}
					triggerOnce
				>
					{/* Find Us (should NOT Clickable) */}
					<ContactCard
						href="https://maps.google.com/?q=123+Fake+Street"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconContainer>
							<FontAwesomeIcon
								icon={faLocationDot}
							/>
						</IconContainer>
						<ContactText>
							<h3>Proud to Serve</h3>
							<ul>
								<li>Knightdate, NC</li>
								<li>Raleigh, NC</li>
								<li>Garner, NC</li>
								<li>
									and surrounding areas
								</li>
							</ul>
						</ContactText>
					</ContactCard>

					{/* Phone Us (Clickable) */}
					<ContactCard href="tel:5555555555">
						<IconContainer>
							<FontAwesomeIcon
								icon={faPhone}
							/>
						</IconContainer>
						<ContactText>
							<h3>Call Us</h3>
							555-555-5555
						</ContactText>
					</ContactCard>

					{/* Mail Us (Clickable) */}
					<ContactCard href="mailto:valorElectric@gmail.com">
						<IconContainer>
							<FontAwesomeIcon
								icon={faEnvelope}
							/>
						</IconContainer>
						<ContactText>
							<h3>Mail Us</h3>
							valorElectric@gmail.com
						</ContactText>
					</ContactCard>
					{/* Facebook (Clickable) */}
					<ContactCard href="https://www.facebook.com/profile.php?id=61574838629616">
						<IconContainer>
							<FontAwesomeIcon
								icon={faSquareFacebook}
							/>
						</IconContainer>
						<ContactText>
							<h3>Facebook</h3>
						</ContactText>
					</ContactCard>
				</Fade>
			</ContactContainer>
		</>
	);
};

export default Footer;

const ContactContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 1rem 2rem;
	margin: 1rem 0;

	/* Check the border of the container */
	/* border: 1px solid #000000; */

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		/*  FORCE react-awesome-reveal's Fade wrapper divs to full width */
		& > div {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
`;

const ContactCard = styled.a`
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 100px;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	padding: 0 1rem;

	/* border: 1px solid #000000; */

	&:hover {
		background: rgba(0, 0, 0, 0.05);
	}

	@media (max-width: 768px) {
		width: 100%;
		max-width: 400px;
		background-color: #faf7f5;
		padding: 1rem;
		margin: 0.75rem 0;
		border-radius: 12px;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
	}
`;

const IconContainer = styled.div`
	display: flex;
	flex: 0 0 80px;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	color: #ff4c4c;
`;

const ContactText = styled.div`
	/* border: 1px solid #000000; */

	display: flex;
	flex: 1;
	min-width: 0;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	padding: 1rem;
`;

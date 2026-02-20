import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<>
			<ContactContainer>
				{/* Find Us (Clickable) */}
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
						<h3>Find us</h3>
						123 Fake Street
					</ContactText>
				</ContactCard>

				{/* Phone Us (NOT Clickable) */}
				<ContactCard as="div" className="static">
					<IconContainer>
						<FontAwesomeIcon icon={faPhone} />
					</IconContainer>
					<ContactText>
						<h3>Phone us</h3>
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
						<h3>Mail us</h3>
						valorElectric@gmail.com
					</ContactText>
				</ContactCard>
			</ContactContainer>
		</>
	);
};

export default Footer;

const ContactContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 1rem 2rem;
`;

const ContactCard = styled.a`
	display: flex;
	width: 100%;
	min-height: 100px;
	text-decoration: none;
	color: inherit;
	cursor: pointer;

	&:hover {
		background: rgba(0, 0, 0, 0.05);
	}

	&.static {
		cursor: default;
	}
`;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25%;
	font-size: 3rem;
	color: #ff4c4c;
`;

const ContactText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 75%;
	height: 100%;
	padding: 1rem;
`;

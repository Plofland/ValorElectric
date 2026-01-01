import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Plan for this footer:
// have a "mail us" button - it should also have a mail icon
// have a "phone us" button - it should also have a phone icon
// have a "location" button - it should also have a location icon
// should there be a social media section?
// if so, install the font-awesome package for social media icons with this -> npm i --save @fortawesome/free-brands-svg-icons

const Footer = () => {
	return (
		<>
			<ContactContainer>
				<ContactCard>
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
				<ContactCard>
					<IconContainer>
						<FontAwesomeIcon icon={faPhone} />
					</IconContainer>
					<ContactText>
						<h3>Phone us</h3>
						555-555-5555
					</ContactText>
				</ContactCard>
				<ContactCard>
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
`;
const ContactCard = styled.div`
	border: 1px solid black;
	display: flex;
	width: 100%;
	min-height: 100px;
`;
const IconContainer = styled.div`
	border: 1px solid green;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25%;
	font-size: 3rem;
	color: #ff0000;
`;
const ContactText = styled.div`
	border: 1px solid red;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 75%;
	height: 100%;
	padding: 1rem;
`;

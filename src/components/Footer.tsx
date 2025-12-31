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
					<FontAwesomeIcon icon={faLocationDot} />
					<h4>Find us</h4>
					<ContactText>
						123 Fake Street
					</ContactText>
				</ContactCard>
				<ContactCard>
					<FontAwesomeIcon icon={faPhone} />
					<h4>Phone us</h4>
					<ContactText>Address</ContactText>
				</ContactCard>
				<ContactCard>
					<FontAwesomeIcon icon={faEnvelope} />
					<h4>Mail us</h4>
					<ContactText>
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
	justify-content: space-between;
`;
const ContactCard = styled.div`
	border: 1px solid black;
`;
const ContactText = styled.div``;

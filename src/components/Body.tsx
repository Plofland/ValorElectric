import styled from 'styled-components';
import valorElectricLogo from '/valorElectricLogo.png';

const Body = () => {
	return (
		<BodyContainer>
			<img
				src={valorElectricLogo}
				className="logo"
				alt="Valor Electric logo"
			/>
			<a href="mailto:ploflan@gmail.com?subject=Your subject&body=Your Message">
				<button>Contact Us</button>
			</a>
		</BodyContainer>
	);
};

export default Body;

const BodyContainer = styled.div`
	border: 1px solid blue;
`;

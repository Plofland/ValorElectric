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
		</BodyContainer>
	);
};

export default Body;

const BodyContainer = styled.div`
	border: 1px solid blue;
`;

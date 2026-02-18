import styled from 'styled-components';
// import valorElectricLogo from '/valorElectricLogo.png';
import transparentValorElectricLogo from '/transparentValorElectricLogo.png';

//todo: download PS so I can edit the logo with a white lightning bolt in the middle

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<HeaderText>
					<h1>Valor Electric</h1>
				</HeaderText>
				<LogoContainer>
					<ValorElectricLogo
						src={transparentValorElectricLogo}
						alt="Valor Electric logo"
					/>
				</LogoContainer>
			</HeaderContainer>
		</>
	);
};

export default Header;

const HeaderContainer = styled.div`
	border: 1px solid black;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	h1 {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-style: italic;
		font-size: 5rem;
		margin: 0;
	}
`;

const LogoContainer = styled.div`
	width: 25%;
`;

const HeaderText = styled.div`
	font-size: 3rem;
`;

const ValorElectricLogo = styled.img`
	width: 100%;
	height: 100%;
`;

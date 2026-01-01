import styled from 'styled-components';
// import valorElectricLogo from '/valorElectricLogo.png';
import transparentValorElectricLogo from '/transparentValorElectricLogo.png';

//todo: download PS so I can edit the logo with a white lightning bolt

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<HeaderText>
					<h1>Valor Electric</h1>
				</HeaderText>
				<LogoContainer>
					{/* <ValorElectricLogo
					src={valorElectricLogo}
					alt="Valor Electric logo"
				/> */}
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

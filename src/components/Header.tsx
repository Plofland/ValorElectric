import styled from 'styled-components';
import transparentValorElectricLogo from '/transparentValorElectricLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<LogoContainer>
					<ValorElectricLogo
						src={transparentValorElectricLogo}
						alt="Valor Electric logo"
					/>
				</LogoContainer>
				<CompanyContainer>
					<FontAwesomeIcon icon={faLightbulb} />
					<TitleContainer>
						<h1>Valor Electric, LLC</h1>
						<p>Veteran Owned & Operated</p>
					</TitleContainer>
				</CompanyContainer>
			</HeaderContainer>
		</>
	);
};

export default Header;

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3rem;

	@media (max-width: 768px) {
		flex-direction: row;
		align-items: center;
		padding: 0.75rem 1rem;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	@media (max-width: 768px) {
		flex: 0 0 25%;
		justify-content: center;
		align-items: center;
	}
`;

const ValorElectricLogo = styled.img`
	width: 140px;
	height: 140px;
	object-fit: contain;

	@media (max-width: 768px) {
		width: 70px;
		height: 70px;
	}
`;

const CompanyContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	cursor: pointer;

	svg {
		font-size: 2.5rem;
		line-height: 1;
		color: #000000;
		padding: 0.25rem;

		@media (max-width: 768px) {
			display: none;
		}
	}

	&:hover h1 {
		animation: electric-flicker-pre 0.8s forwards;
		color: #fff8d1;
	}

	&:hover svg {
		animation: bulb-flicker 1.2s forwards;
	}

	&:hover h1::after {
		animation: underline-glow 1.2s forwards;
	}

	@media (max-width: 768px) {
		flex: 1;
		flex-direction: row;
		justify-content: flex-start;
		padding-left: 0.5rem;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		position: relative;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-style: italic;
		font-size: 3rem;
		margin: 0;
		cursor: pointer;
		color: #000000;

		@media (max-width: 768px) {
			font-size: 1.5rem;
			text-align: left;
		}

		&::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: -10px;
			transform: translateX(-50%) skewX(-45deg);
			width: 100%;
			height: 6px;
			border-radius: 3px;
			background: linear-gradient(
				90deg,
				#ff0000 0%,
				#0038ff 100%
			);
			filter: brightness(0.8);
		}
	}

	p {
		margin-top: 20px;
		margin-bottom: 0;
		font-size: 1.25rem;

		@media (max-width: 768px) {
			font-size: 0.55rem;
			margin-top: 10px;
			text-align: center;
		}
	}

	@media (max-width: 768px) {
		align-items: center;
	}

	/* All keyframes preserved unchanged below */
	@keyframes electric-flicker-pre {
		0% { color: #000000; text-shadow: none; }
		10% { text-shadow: 0 0 2px #ff0000, 0 0 4px #ff0000, 0 0 2px #fff8d1, 0 0 6px #0038ff, 0 0 8px #0038ff; }
		20% { text-shadow: none; }
		30% { text-shadow: 0 0 3px #ff0000, 0 0 6px #ff0000, 0 0 3px #fff8d1, 0 0 9px #0038ff, 0 0 12px #0038ff; }
		40% { text-shadow: none; }
		50% { text-shadow: 0 0 2px #ff0000, 0 0 4px #ff0000, 0 0 2px #fff8d1, 0 0 6px #0038ff, 0 0 8px #0038ff; }
		60% { text-shadow: none; }
		100% { text-shadow: 0 0 2px #ff0000, 0 0 4px #ff0000, 0 0 2px #fff8d1, 0 0 6px #0038ff, 0 0 8px #0038ff; color: #fff8d1; }
	}

	@keyframes bulb-flicker {
		0% { color: #000000; filter: none; }
		6.6% { color: #ffea00; filter: drop-shadow(0 0 4px #ffea00) drop-shadow(0 0 8px #ff0000) drop-shadow(0 0 10px #0038ff); }
		13.3% { color: #000000; filter: none; }
		20% { color: #ffea00; filter: drop-shadow(0 0 6px #ffea00) drop-shadow(0 0 10px #ff0000) drop-shadow(0 0 14px #0038ff); }
		26.6% { color: #000000; filter: none; }
		33.3% { color: #ffea00; filter: drop-shadow(0 0 4px #ffea00) drop-shadow(0 0 8px #ff0000) drop-shadow(0 0 10px #0038ff); }
		40% { color: #000000; filter: none; }
		66.6% { color: #ffea00; filter: drop-shadow(0 0 6px #ffea00) drop-shadow(0 0 10px #ff0000) drop-shadow(0 0 14px #0038ff); }
		75% { color: #000000; filter: none; }
		82% { color: #ffea00; filter: drop-shadow(0 0 6px #ffea00) drop-shadow(0 0 10px #ff0000) drop-shadow(0 0 14px #0038ff); }
		88% { color: #000000; filter: none; }
		94% { color: #ffea00; filter: drop-shadow(0 0 6px #ffea00) drop-shadow(0 0 10px #ff0000) drop-shadow(0 0 14px #0038ff); }
		100% { color: #ffea00; filter: drop-shadow(0 0 6px #ffea00) drop-shadow(0 0 10px #ff0000) drop-shadow(0 0 14px #0038ff); }
	}

	@keyframes underline-glow {
		0% { filter: brightness(0.8); }
		6.6% { filter: brightness(1.4) drop-shadow(0 0 4px #ff0000) drop-shadow(0 0 6px #0038ff); }
		13.3% { filter: brightness(0.8); }
		20% { filter: brightness(1.6) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 10px #0038ff); }
		26.6% { filter: brightness(0.8); }
		33.3% { filter: brightness(1.4) drop-shadow(0 0 4px #ff0000) drop-shadow(0 0 6px #0038ff); }
		40% { filter: brightness(0.8); }
		66.6% { filter: brightness(1.6) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 10px #0038ff); }
		85% { filter: brightness(0.8); }
		92% { filter: brightness(1.8) drop-shadow(0 0 8px #ff0000) drop-shadow(0 0 12px #0038ff); }
		100% { filter: brightness(1.6) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 10px #0038ff); }
	}
`;
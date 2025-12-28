import { GlobalStyles } from './GlobalStyles';
import valorElectricLogo from '/valorElectricLogo.png';

function App() {
	return (
		<>
			<GlobalStyles />
			<a href="https://vite.dev" target="_blank">
				<img
					src={valorElectricLogo}
					className="logo"
					alt="Valor Electric logo"
				/>
			</a>
			
		</>
	);
}

export default App;

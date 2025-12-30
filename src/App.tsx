import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyles } from './GlobalStyles';
import valorElectricLogo from '/valorElectricLogo.png';

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<img
				src={valorElectricLogo}
				className="logo"
				alt="Valor Electric logo"
			/>
			<a href="mailto:ploflan@gmail.com?subject=Your subject&body=Your Message">
				<button>Contact Us</button>
			</a>
			<Footer />
		</>
	);
}

export default App;

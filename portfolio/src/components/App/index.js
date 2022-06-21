import "./App.css";
import Navbar from "../Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<header className="App-header">
				<img
					src="/logos/portfol-logo-horiz-M.png"
					className="App-logo"
					alt="logo"
				/>
			</header>
			<main>
				<p>
					Portfolios you can <em>actually</em> create.
				</p>
			</main>
		</div>
	);
}

export default App;

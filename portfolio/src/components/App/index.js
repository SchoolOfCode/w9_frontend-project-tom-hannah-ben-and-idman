import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import FolioList from "../FolioList";
import Search from "../Search";

function App() {
	const [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		async function getData() {
			let res = await fetch("http://localhost:3001/portfolio");
			let data = await res.json();
			console.log(data);
			setPortfolio(data.payload);
		}
		getData();
	}, []);

	function searchByKeyword(e) {
		e.preventDefault();
		const input = e.target.searchInput.value;
		e.target.reset();

		let searchedPortfolios = [];

		for (let i = 0; i < portfolio.length; i++) {
			const keywords = portfolio[i].keywords;
			const result = keywords.includes(input);

			if (result) {
				searchedPortfolios = [...searchedPortfolios, portfolio[i]];
			}
		}
		console.log(searchedPortfolios);
		setPortfolio(searchedPortfolios);
	}

	return (
		<div className="App">
			<Navbar />
			<Header />
			<Search onSubmit={searchByKeyword} type="keyword" />
			<main>
				<p></p>
				<FolioList portfolio={portfolio} />
			</main>

			<Footer />
		</div>
	);
}

export default App;

/* PLAN:
- Structure of portfolio webpage: 
Navbar- 
Header - Header component: This will include brand name, slogan and background image
Main - Components:
1. Folio list component
2. Folio image,  like, link and designer name 
3. Sidebar component 
4. Login component 
5. Signup component 
6. Upload component
Footer - Footer component
Button component 

(Stretch goal components: Favourites section, User log in and log in upload) 
Create test file for all components


(Stretch goal components: Favourites section, User log in and log in upload)
- Create test file for all components*/

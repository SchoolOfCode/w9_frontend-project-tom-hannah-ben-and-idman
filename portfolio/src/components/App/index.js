import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import FolioList from "../FolioList";
import Search from "../Search";
import ExperienceSearch from "../ExperienceSearch";

function App() {
	const [portfolio, setPortfolio] = useState([]);

	async function getData() {
		let res = await fetch("http://localhost:3001/portfolio");
		let data = await res.json();
		console.log(data);
		setPortfolio(data.payload);
	}

	useEffect(() => {
		getData();
	}, []);

	const [resetClass, setResetClass] = useState("reset-button");

	async function searchByKeyword(e) {
		e.preventDefault();
		const input = e.target.searchInput.value;
		e.target.reset();

		let res = await fetch(
			`http://localhost:3001/portfolio/?keyword=${input}`
		);
		let data = await res.json();
		setPortfolio(data.payload);
		setResetClass("reset-button show");
	}

	async function searchByDesigner(e) {
		e.preventDefault();
		const input = e.target.searchInput.value;
		e.target.reset();

		let res = await fetch(
			`http://localhost:3001/portfolio/?designer=${input}`
		);
		let data = await res.json();
		setPortfolio(data.payload);
		setResetClass("reset-button show");
	}

	function searchByExperience(e) {
		e.preventDefault();
		const input = e.target.value;
		console.log(input);
		setResetClass("reset-button show");
	}

	function resetSearch(e) {
		e.preventDefault();
		setResetClass("reset-button");
		const help = document.querySelector(".experience-search");
		help.value = "initial";
		getData();
	}

	return (
		<div className="App">
			<Navbar />
			<Header />
			<div className="search-section">
				<Search onSubmit={searchByKeyword} type="keyword" />
				<Search onSubmit={searchByDesigner} type="Designer's Name" />
				<ExperienceSearch onChange={searchByExperience} />
				<button className={resetClass} onClick={resetSearch}>
					Press to remove filter
				</button>
			</div>
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

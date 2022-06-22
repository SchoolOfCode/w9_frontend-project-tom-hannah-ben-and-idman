import {useEffect, useState} from "react";
import "./App.css";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import FolioList from "../FolioList";
import Upload from "../Upload";


function App() {
	const [portfolio, setPortfolio] = useState([])

		useEffect(() => {
			async function getData() {
			  let res = await fetch("http://localhost:3001/portfolio");
			  let data = await res.json();
			  console.log(data);
			  setPortfolio(data.payload);
			   
			}
			getData();
		  }, []);
		
	




	return (
		<div className="App">
			<Navbar />
			<Header />
			<main>
				<p></p>
				<FolioList portfolio = {portfolio} />
			</main>
			<Upload/>

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

import "./App.css";
import Navbar from "../Navbar";
import FolioList from "../FolioList";

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
				<FolioList />
			</main>
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
- Create test file for all components*/

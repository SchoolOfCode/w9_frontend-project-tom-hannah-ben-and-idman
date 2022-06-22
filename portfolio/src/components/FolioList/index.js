import "./foliolist.css";
import { useState } from "react";

import Folio from "../Folio";

export default function FolioList({portfolio}) {
	// const initialise = [
	// 	{
	// 		id: 1,
	// 		creator: "Sally Summers",
	// 		img: "/logos/portfol-logo-stacked-blue-L.png",
	// 		link: "#",
	// 	},
	// 	{
	// 		id: 2,
	// 		creator: "Jessica Jones",
	// 		img: "/logos/portfol-logo-p-red-L.png",
	// 		link: "#",
	// 	},
	// 	{
	// 		id: 3,
	// 		creator: "Harry Hunter",
	// 		img: "/logos/portfol-logo-p-red-L.png",
	// 		link: "#",
	// 	},
	// ];
	// const [folios, setFolios] = useState(initialise);
 if (typeof portfolio !== "undefined"){
	return (
		<section className="FolioList">
			{/* <Folio /> */}

			{portfolio.map((f) => {
				return <Folio key={f.portfolio_id} folio={f} />;
			})}
		</section>
	);
		} else {
			return (
				<div> not working</div>
			)
		}
}

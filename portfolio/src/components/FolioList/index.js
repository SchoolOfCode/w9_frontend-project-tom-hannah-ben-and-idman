import "./foliolist.css";
import { useState } from "react";

import Folio from "../Folio";

export default function FolioList() {
	const initialise = [
		{
			id: 1,
			creator: "Sally Summers",
			img: "/logos/portfol-logo-stacked-blue-L.png",
			link: "#",
		},
		{
			id: 2,
			creator: "Jessica Jones",
			img: "/logos/portfol-logo-p-red-L.png",
			link: "#",
		},
		{
			id: 3,
			creator: "Harry Hunter",
			img: "/logos/portfol-logo-p-red-L.png",
			link: "#",
		},
	];
	const [folios, setFolios] = useState(initialise);

	return (
		<section className="FolioList">
			{/* <Folio /> */}

			{folios.map((f) => {
				return <Folio key={f.id} folio={f} />;
			})}
		</section>
	);
}

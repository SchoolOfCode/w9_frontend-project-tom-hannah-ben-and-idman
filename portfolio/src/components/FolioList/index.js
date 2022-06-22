import "./foliolist.css";
import { useState } from "react";

import Folio from "../Folio";

export default function FolioList({portfolio}) {

 if (typeof portfolio !== "undefined"){
	return (
		<section className="FolioList">

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

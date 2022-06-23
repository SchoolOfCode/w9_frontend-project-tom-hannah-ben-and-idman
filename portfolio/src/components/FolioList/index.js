import "./foliolist.css";
import { useState } from "react";

import Folio from "../Folio";

export default function FolioList({ portfolio }) {
	if (typeof portfolio !== "undefined") {
		if (portfolio.length === 0) {
			return (
				<p id="length-zero-msg">
					Sorry, no portfolios found with that search.
				</p>
			);
		}
		return (
			<section className="FolioList">
				{portfolio.map((f) => {
					return <Folio key={f.portfolio_id} folio={f} />;
				})}
			</section>
		);
	} else {
		return <div> not working</div>;
	}
}

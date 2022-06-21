import "./folio.css";

export default function Folio() {
	return (
		<article className="folio">
			<img
				className="folio-img"
				src="\logos\portfol-logo-p-red-L.png"
				alt="frontpage of portfolio"
			/>
			<div className="like-div">❤️</div>
			<div className="folio-desc">
				<p>Creator Name</p>
				<p>
					<a href="#">Link to site</a>
				</p>
			</div>
		</article>
	);
}

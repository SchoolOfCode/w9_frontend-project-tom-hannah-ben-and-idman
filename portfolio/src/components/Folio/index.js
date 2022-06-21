import "./folio.css";

export default function Folio({ folio }) {
	return (
		<article className="folio">
			<img
				className="folio-img"
				src={folio.img}
				alt={`Portfolio by ${folio.creator}`}
			/>
			<div className="like-div">❤️</div>
			<div className="folio-desc">
				<p>{folio.creator}</p>
				<p>
					<a href={folio.link}>Link to site</a>
				</p>
			</div>
		</article>
	);
}

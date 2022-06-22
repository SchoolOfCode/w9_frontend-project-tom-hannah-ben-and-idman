import "./folio.css";

export default function Folio({ folio }) {
	return (
		<article className="folio">
			<div className="folio-content">
				<div className="folio-img-container">
					<img
						className="folio-img"
						src={folio.img}
						alt={`Portfolio by ${folio.creator}`}
					/>
				</div>
				<div className="like-div">❤️</div>
				<div className="folio-desc">
					<p>{folio.creator}</p>
					<p>
						<a href={folio.link}>Link to site</a>
					</p>
				</div>
			</div>
		</article>
	);
}

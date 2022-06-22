import "./folio.css";

export default function Folio({ folio }) {
	return (
		<article className="folio">
			<img
				className="folio-img"
				src={folio.site_image}
				alt={`Portfolio by ${folio.designers_name}`}
			/>
			<div className="like-div">❤️</div>
			<div className="folio-desc">
				<p>{folio.designers_name}</p>
				<p>
					<a href={folio.site_url}>Link to site</a>
				</p>
			</div>
		</article>
	);
}

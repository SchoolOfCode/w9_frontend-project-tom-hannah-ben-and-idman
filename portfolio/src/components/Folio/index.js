import "./folio.css";

export default function Folio({ folio }) {
	const bkImg = {
		backgroundImage: `url(${folio.img})`,
	};
	const imgAlt = `Folio by ${folio.creator}`;

	return (
		<article className="folio">
			<div className="folio-content">
				<div className="folio-img-container" style={bkImg} alt={imgAlt}>
					{/* <img
						className="folio-img"
						src=""
						alt={`Portfolio by ${folio.creator}`}
					/> */}
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

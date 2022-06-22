import "./folio.css";

export default function Folio({ folio }) {
	const bkImg = {
		backgroundImage: `url(${folio.site_image})`,
	};
	const imgAlt = `Folio by ${folio.designers_name}`;

	return (
		<article className="folio">
			<div className="folio-content">
				<div className="folio-img-container" style={bkImg} alt={imgAlt}>
					{/* <img
						className="folio-img"
						src=""
						alt={`Portfolio by ${folio.designers_name}`}
					/> */}
				</div>
				<div className="like-div">❤️</div>
				<div className="folio-desc">
					<p>{folio.designers_name}</p>
					<p>
						<a
							href={folio.site_url}
							target="_blank"
							rel="noreferrer"
						>
							Link to site
						</a>
					</p>
				</div>
			</div>
		</article>
	);
}

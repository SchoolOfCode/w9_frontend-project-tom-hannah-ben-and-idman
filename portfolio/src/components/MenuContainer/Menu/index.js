import "./menu.css";
import Upload from "../../Upload";
import { FaRegWindowClose } from "react-icons/fa";

export default function Menu({ onClick, menuVis, closeMenu, upload }) {
	let visibility = "hide";

	if (menuVis) {
		visibility = "show";
	}
//console.log('menu ' + upload)
	return (
		<div id="sidebar" className={visibility}>
			<div className="menu-close">
				<span className="menu-close-span" onClick={closeMenu}>
					<FaRegWindowClose />
				</span>
			</div>
			<Upload upload = {upload}/>
		</div>
	);
}

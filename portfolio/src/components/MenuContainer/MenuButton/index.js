import "./menubutton.css";
import { FaUpload } from "react-icons/fa";

export default function MenuButton({ onClick, type }) {
	console.log("TYPE " + type)
	return (
		<span className="MenuButton" id={`${type}-link`} onClick={onClick}>
			{type[0].toUpperCase() + type.substring(1)}
			<span id="fa-upload">
				<FaUpload />
			</span>
		</span>
	);

	// <button id="upload-button" onClick={onClick}></button>;
}

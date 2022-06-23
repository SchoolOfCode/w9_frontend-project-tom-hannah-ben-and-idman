import "./menubutton.css";
// import { FaBars } from "react-icons/fa";

export default function MenuButton({ onClick }) {
	return (
		<span id="upload-link" onClick={onClick}>
			Upload
		</span>
	);

	// <button id="upload-button" onClick={onClick}></button>;
}

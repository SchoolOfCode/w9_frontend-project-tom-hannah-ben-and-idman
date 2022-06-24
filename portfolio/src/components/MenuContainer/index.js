// import { useState } from "react";
// import MenuButton from "./MenuButton";
import Menu from "./Menu";
// import "./menucontainer.css";

export default function MenuContainer({ menuVis, closeMenu, upload }) {
	// console.log(menuVis.visible);
	//console.log('menuC ' + upload)
	return (
		<div className="MenuContainer">
			{/* <MenuButton onClick={menuOnClick} /> */}
			{/* <Menu onClick={menuOnClick} menuVis={menuVis.visible} /> */}
			<Menu menuVis={menuVis.visible} closeMenu={closeMenu} upload = {upload}/>
		</div>
	);
}

//When 'Upload' in navbar is clicked
//Menu slides out
//Contains the 'Upload' component

// Toggle when 'Upload' is clicked on instead of button
// Change to be from RHS ✅
// Add X that closes it rather than clicking anywhere in menu

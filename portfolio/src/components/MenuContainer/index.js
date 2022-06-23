// import { useState } from "react";
// import MenuButton from "./MenuButton";
import Menu from "./Menu";

export default function MenuContainer({ menuVis, closeMenu }) {
	console.log(menuVis.visible);
	return (
		<div className="MenuContainer">
			{/* <MenuButton onClick={menuOnClick} /> */}
			{/* <Menu onClick={menuOnClick} menuVis={menuVis.visible} /> */}
			<Menu menuVis={menuVis.visible} closeMenu={closeMenu} />
		</div>
	);
}

//When 'Upload' in navbar is clicked
//Menu slides out
//Contains the 'Upload' component

// Toggle when 'Upload' is clicked on instead of button
// Change to be from RHS ✅
// Add X that closes it rather than clicking anywhere in menu

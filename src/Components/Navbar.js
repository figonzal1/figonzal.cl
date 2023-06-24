import React, { useState } from "react";


function NavBar() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);
  
	function scrollHandler() {
	  if (window.scrollY >= 20) {
		updateNavbar(true);
	  } else {
		updateNavbar(false);
	  }
	}

	window.addEventListener("scroll", scrollHandler);
}

export default NavBar;
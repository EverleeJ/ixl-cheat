// inject script src from github into DOM, run script
javascript: (() => {  // `javascript:` protocol for bookmarklet
	// inject script
	const script = document.createElement("script")  // create new script element
	script.src = "https://github.com/EverleeJ/ixl-cheat/remote_script.js"
	document.head.appendChild(script)  // insert element into DOM
	
	// when script executed, print message
	script.onload = function() {
		console.log("Script loaded and executed")
	}
})();


javascript: (() => { const script = document.createElement("script"); script.src = "https://github.com/EverleeJ/ixl-cheat/remote_script.js"; document.head.appendChild(script); script.onload = function() { console.log("Script loaded and executed") } })();



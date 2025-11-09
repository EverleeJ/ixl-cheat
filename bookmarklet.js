// NOTE:
// - inject remote script into DOM to get correct answer
// - possibly use nodebowl lib to run node js code

// inject remote script into DOM
function script_inject() {
	const remote_script = document.createElement("script")  // create new script element
	script.src = "https://github.com/EverleeJ/ixl-cheat/remote-script.js"
	document.head.appendChild(remote_script)

	// when script executed, print message
	script.onload = function() {
		console.log("Injected script loaded and executed")
	}
}

script_inject()

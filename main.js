// NOTE:
// - inject remote script into DOM to get correct answer
// - possibly use nodebowl lib to run node js code

// inject remote script into DOM
function script_inject() {
	const remote_script = document.createElement("script")
	script.src = "https://example.com/remote_script.js"
	document.head.appendChild(remote_script)

	// when script executed, print message
	script.onload = function() {
		console.log("Injected script loaded and executed")
	}
}




// extract text from website
// function create_query() {
// 	let scraped_text = document.body.innerText  // retrieve all text within body, excluding <script> and <style>	
// 	let question = "Please provide an answer to this question. It's been scraped from a webpage. Determine the main question, whether that's a math, english, science, or history problem.\n. Only provide the answer, no other comments or follow-up. Make no mistakes."
// 	
// 	return question + scraped_text
// }

// send query to gemini
// const api_key = "AIzaSyACZeVWxN5zEzgR9ceGTL3NaB70-jimutM"


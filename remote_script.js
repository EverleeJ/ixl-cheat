// extract text from website
function create_query() {
	let scraped_text = document.body.innerText  // retrieve all text within body, excluding <script> and <style>	
	let question = "Please provide an answer to this question. It's been scraped from a webpage. Determine the main question, whether that's a math, english, science, or history problem.\n. Only provide the answer, no other comments or follow-up. Make no mistakes."
	
	return question + scraped_text
}

console.log(create_query())

// // send query to gemini
// const api_key = "AIzaSyACZeVWxN5zEzgR9ceGTL3NaB70-jimutM"
// const endpoint = "https://gemini.googleapis.com/v1beta2/models/text-bison-001:generate"  // API endpoint for generating text
// 
// // request body, object specifies prompt generation params
// const body = {
// 	prompt: {
// 		text: create_query()  // function returns prompt
// 	},
// 	temperature: 0.0,  // determines creativity, higher = more creative
// 	maxOutputTokens: 200  // max amount of words (roughly)
// }
// 
// // send POST request to gemini API
// // NOTE: POST request - HTTP method commonly used for submitting data
// fetch(`{endpoint}?key=${api_key}`, {  // append API key as query param
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json"  // specify json data
// 	},
// 	body: JSON.stringify(body)  // convert body (JS object) to JSON string for request
// })
// 	.then(res => res.json())          // parse response as json
// 	.then(data => console.log(data))  // print response in console
// 	.catch(err => console.err(err))   // handle errors

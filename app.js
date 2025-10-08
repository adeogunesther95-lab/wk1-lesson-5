function showAnswer(response) {
  alert(response.data.answer);
  console.log(response.data);
}

let apiKey = "bf602aabco34t729377499af62121a7a";
let prompt = "Who is the first female president ever in the world";
let context =
  "We live in a world where male mostly dominate the political field";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log(apiUrl);

axios.get(apiUrl).then(showAnswer);

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((result) => console.log(result));
// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => console.log(response));
  
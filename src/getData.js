import { useEffect } from "react";

export let quizData = [];

export function getData() {
  return fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((json) => {
      const quizData = json.results;
      return quizData;
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// export async function getData() {
//   fetch("https://opentdb.com/api.php?amount=10")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log("json", json.results); //Array
//       return json.results;
//     })
//     .catch((e) => {
//       console.log(e.message);
//     });
// }

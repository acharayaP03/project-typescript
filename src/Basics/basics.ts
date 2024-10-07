// import axios from "axios";
// import { add } from "./functions.ts";
// import type { Post } from "./typings/index.ts";
// const url = "https://jsonplaceholder.typicode.com/posts/3";

// axios.get(url).then((response) => {
//   const { userId, id, title, body } = response.data as Post;
//   toString({ userId, id, title, body });
// });

// function toString(response: Post): void {
//   const cleanString = (responseStr: string) =>
//     responseStr.replace(/\s+/g, " ").trim();

//   console.log(`
//     UerId: ${response.userId}
//     Id: ${response.id}
//     Title: ${response.title}
//     Body: ${cleanString(response.body)}`);
// }

// const retrunString: (response: Post) => string = (response: Post) => {
//   return "";
// };

// retrunString({ userId: 1, id: 1, title: "title", body: "body" });

// // implicitly type json object
// const json =
//   '{ "userId": "1", "id": "1", "title": "Spme title", "body": "json body text" }';
// const userJson: Post = JSON.parse(json);

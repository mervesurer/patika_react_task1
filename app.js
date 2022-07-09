import getData from "./getUser.js";

getData(1).then(user => console.log(user.info, "posts: ", user.posts));
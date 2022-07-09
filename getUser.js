import axios from "axios";

async function getData(userId) {    
    const { data: userInfo } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const { data: userPosts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    
    const user = {"info": userInfo, "posts": userPosts}

    return user;
} 

export default getData;
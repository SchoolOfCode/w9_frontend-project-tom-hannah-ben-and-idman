import { useEffect } from "react";

/* 
Plan:
Funtion that takes in:
- Website URL 
-Description 
-Designers name
-Keyword
-Picture
-Beginner,Mid-career and Experienced porject?



Function for button:
-Post to the data 

*/
const NewPort = {
    designers_name: "Dave",
    site_url: "www.google.com",
    site_image: "/logos/portfol-logo-p-red-L.png",
    description: "second best one"

}
function Upload() {
    

useEffect(() => {
    async function postData() {
        const db_url = "http://localhost:3001/portfolio";
        const newPost = { method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(NewPort)}
         const res = await fetch(db_url, newPost)
         const data = await res.json()
         console.log(data)
    }
    postData();
  },[]);
}



// async function Upload(NewPort){
//  const db_url = "http://localhost:3001/portfolio";
//    const newPost = { method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(NewPort)}
//     const res = await fetch(db_url, newPost)
//     const data = await res.json()
//     console.log(data)

// }
// Upload(NewPort)
export default Upload;


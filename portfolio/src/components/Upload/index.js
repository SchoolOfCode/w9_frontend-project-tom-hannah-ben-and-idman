import {useState, useEffect} from "react";
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
// const NewPort = {
//     designers_name: "Dave",
//     site_url: "www.google.com",
//     site_image: "/logos/portfol-logo-p-red-L.png",
//     description: "second best one"

// }
function Upload() {
  const [portfolio, setPortfolio] = useState(
    {
  designers_name: "",
  site_url: "",
  site_image: "",
  description: ""
})
//const [sentData, setSentData] = useState()

function eventHandleName(e) {
  const name = e.target.value;
  setPortfolio({
    ...portfolio, designers_name: name
  });
  }
function eventHandleDescription(e) {
  const desc = e.target.value;
  setPortfolio({
    ...portfolio, description: desc
  });
  }
function eventHandleKeyword(e) {
  const keyword = e.target.value;
  setPortfolio({
    ...portfolio, keyword: keyword
  });
  }
function eventHandleSiteUrl(e) {
  const url = e.target.value;
  setPortfolio({
    ...portfolio, site_url: url
  })
  }
function eventHandleImageUrl(e) {
  const img = e.target.value;
  setPortfolio({
    ...portfolio, site_image: img
  });
  console.log(img)
}
console.log(portfolio)
function handleClick(e) {
  e.preventDefault()
  console.log('clicked')
  postData()
  e.target.reset();
}



    async function postData() {
        const db_url = "http://localhost:3001/portfolio";
        const newPost = { method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(portfolio)}
         const res = await fetch(db_url, newPost)
         const data = await res.json()
         console.log(data)
    }
  


return (
       
<div className= "Upload form">


<h2>Upload your portfolio here</h2>

<form onSubmit = {handleClick}>
  <label for="creator name">Creators name:</label><br/>
  <input type="text" id="creator name" onChange = {eventHandleName}/><br/><br/>
  <label for="description">Description:</label><br/>
  <input type="text" id="description" onChange = {eventHandleDescription}/><br/><br/>
  <label for="keyword">Keyword:</label><br/>
  <input type="text" id="keyword" onChange = {eventHandleKeyword}/><br/><br/>
  <label for="website">Website URL:</label><br/>
  <input type="text" id="website" onChange = {eventHandleSiteUrl}/><br/><br/>
  <label for="image">Image URL:</label><br/>
  <input type="text" id="image" onChange = {eventHandleImageUrl}/><br/><br/>


  <p>Please select the level of your project</p>
  <input type="radio" id="Beginners project" value="B"/>
  <label for="html">Beginners project</label><br/>
  <input type="radio" id="Mid-career project" value="M"/>
  <label for="css">Mid-career project</label><br/>
  <input type="radio" id="Experienced project" value="E"/>
  <label for="Experienced project">Experienced project</label><br/><br/>


  <input type="submit" value="Submit"/>
</form> 
</div>


    )

  
}

export default Upload;


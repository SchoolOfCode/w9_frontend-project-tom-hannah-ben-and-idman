
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
    return (
       
<div className= "Upload form">


<h2>Upload your porrtfolio here</h2>

<form action="/action_page.php">
  <label for="fname">Creators name:</label><br/>
  <input type="text" id="fname" name="fname" value=""/><br/>
  <label for="lname">Description:</label><br/>
  <input type="text" id="lname" name="lname" value=""/><br/><br/>
  <label for="lname">Keyword:</label><br/>
  <input type="text" id="lname" name="lname" value=""/><br/><br/>
  <label for="lname">Website URL:</label><br/>
  <input type="text" id="lname" name="lname" value=""/><br/><br/>


  <p>Please select the level of your project</p>
  <input type="radio" id="Beginners projec" name="project_level" value="Beginners projec"/>
  <label for="html">Beginners project</label><br/>
  <input type="radio" id="Mid-career project" name="project_level" value="Mid-career project"/>
  <label for="css">Mid-career project</label><br/>
  <input type="radio" id="Experienced project" name="project_level" value="Experienced project"/>
  <label for="Experienced project">Experienced project</label><br/><br/>


  <input type="submit" value="Submit"/>
</form> 
</div>


    )

}

export default Upload;


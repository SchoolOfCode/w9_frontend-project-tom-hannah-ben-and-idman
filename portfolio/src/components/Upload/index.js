import { useState } from "react";
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
  const [portfolio, setPortfolio] = useState({
    designers_name: "",
    site_url: "",
    site_image: "",
    description: "",
    experience_level: "",
  });
  //const [sentData, setSentData] = useState()

  function eventHandleName(e) {
    const name = e.target.value;
    setPortfolio({
      ...portfolio,
      designers_name: name,
    });
  }
  function eventHandleDescription(e) {
    const desc = e.target.value;
    setPortfolio({
      ...portfolio,
      description: desc,
    });
  }
  function eventHandleKeyword(e) {
    const keyword = e.target.value;
    setPortfolio({
      ...portfolio,
      keyword: keyword,
    });
  }
  function eventHandleSiteUrl(e) {
    const url = e.target.value;
    setPortfolio({
      ...portfolio,
      site_url: url,
    });
  }
  function eventHandleImageUrl(e) {
    const img = e.target.value;
    setPortfolio({
      ...portfolio,
      site_image: img,
    });
    console.log(img);
  }
  console.log(portfolio);
  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
    postData();
    e.target.reset();
  }

  function handleChangeExperience(e) {
    const level = e.target.value;
    setPortfolio({
      ...portfolio,
      experience_level: level,
    });
    console.log(e.target.value);
  }
  // function handleChange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value === “B” ? evt.target.checked : evt.target.value;
  //   setState({
  //     ...state,
  //     [name]: value
  //   })
  // }

  async function postData() {
    const db_url = "http://localhost:3001/portfolio";
    const newPost = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(portfolio),
    };
    const res = await fetch(db_url, newPost);
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="Upload form">
      <h2>Upload your portfolio here</h2>

      <form onSubmit={handleClick}>
        <label for="creator name">Creators name:</label>
        <br />
        <input type="text" id="creator name" onChange={eventHandleName} />
        <br />
        <br />
        <label for="description">Description:</label>
        <br />
        <input type="text" id="description" onChange={eventHandleDescription} />
        <br />
        <br />
        <label for="keyword">Keyword:</label>
        <br />
        <input type="text" id="keyword" onChange={eventHandleKeyword} />
        <br />
        <br />
        <label for="website">Website URL:</label>
        <br />
        <input type="text" id="website" onChange={eventHandleSiteUrl} />
        <br />
        <br />
        <label for="image">Image URL:</label>
        <br />
        <input type="text" id="image" onChange={eventHandleImageUrl} />
        <br />
        <br />
        <p>Please select the level of your project</p> {" "}
        <input
          type="radio"
          id="Beginners project"
          name="project"
          value="Beginner"
          onChange={handleChangeExperience}
        />
          <label for="Beginners project">Beginners project</label>
        <br /> {" "}
        <input
          type="radio"
          id="Mid-career project"
          name="project"
          value="Mid-level"
          onChange={handleChangeExperience}
        />
          <label for="Mid-career project">Mid-career project</label>
        <br /> {" "}
        <input
          type="radio"
          id="Experienced project"
          name="project"
          value="Experienced"
          onChange={handleChangeExperience}
        />
          <label for="Experienced project">Experienced project</label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Upload;

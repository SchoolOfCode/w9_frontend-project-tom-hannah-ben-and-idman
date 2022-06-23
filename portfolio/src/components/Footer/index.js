import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faFacebook } from '@fortawesome/free-brands-svg-icons'  
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faPinterest, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFacebook, faInstagram, faPinterest,faFontAwesome)








export default function Footer(){

    return (
        <div className="footer">
         <hr></hr>
         <div className= "socials"> 
         <h1> Follow us</h1>
         <span><FontAwesomeIcon icon="fa-brands fa-twitter" className= "twitter"/></span>
        <span><FontAwesomeIcon icon="fa-brands fa-facebook" className= "facebook"/></span>
        <span><FontAwesomeIcon icon="fa-brands fa-instagram" className= "instagram"/></span>
       <span><FontAwesomeIcon icon="fa-brands fa-pinterest" className= "pinterest"/></span>
  
         <div className= "Brand-logo">
         <img

						className="navbar-logo"
						src="logos/portfol-logo-horiz-xpnt-L.png"
						alt="Portfol.io logo"
					/>

         </div>
         <div className= "Text">
           <p>Portfol.io </p>
         </div>
        
   </div> 
    
  </div> 
	);
}


import "./Footer.css";




export default function Footer(){

    return (
        <div className="footer">
         <hr></hr>
         <div className= "socials"> 
         <h1> Follow us</h1>
         <a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" class="fa fa-facebook"></a>
         <a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" class="fa fa-twitter"></a>
         <a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" class="fa fa-instagram"></a>
         <a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" class="fa fa-pinterest"></a>    
         <div className= "Brand-logo">
         <img
						className="navbar-logo"
						src="logos/portfol-logo-horiz-xpnt-L.png"
						alt="Portfol.io logo"
					/>
         </div>
         <div className= "Text">
           <p>Portfol.io  is the world’s leading community for creatives to share, grow, and get hired.</p>
         </div>
        
   </div> 
    
  </div> 

);

}
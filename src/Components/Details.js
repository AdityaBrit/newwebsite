import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Details.css';

export default class Details extends React.Component {

  constructor(){
  super()
  this.state={
  name:"React"
  
  }
}
  render()
  {
   
  return (

    <div className="social">
           
        <a href="https://www.facebook.com/sharer.php?u=${postUrl">
       <FacebookIcon style={{color:"rgb(3, 51, 114)"}} />  
       </a> 
       <a href="https://twitter.com/?lang=en">
       <TwitterIcon style ={{color:"rgb(28, 124, 250)"}} />
       </a>
       <a href="https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}">
       <LinkedInIcon style={{color: "rgb(21, 51, 90)"}}/>
       </a>
    </div>
  )
  }
}




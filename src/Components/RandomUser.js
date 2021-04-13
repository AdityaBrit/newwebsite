import React from "react";
import {Link} from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
export default class RandomUser extends React.Component {
    constructor(){
        super ();
       this. state = {
       
        message:"this is the problem",
        loading: true,
        people: [],                                         
    };
}

    async componentDidMount() {
    
        const url = "https://dev.perfectprof.com/api/search";

        const response = await fetch(url);
        const data = await response.json();
       
        this.setState({ people: data.data, loading: false });
    }

    render()
    
    {
        if (this.state.loading) {
            return <div className="load"><h4>LOADING...</h4></div>;
        }

        if (!this.state.people.length) {
            return <div>didn't get a person</div>;
      
        }
        const { message } = this.state;

        return (
         
                 <div>                   
                 <div class="navbar">
                  <a class="logo" href="#"> Saffron</a>
                   <ul class="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                   </ul>
                </div>
           
                  {this.state.people.map(person => (              
                  <div class="card-container">
                  <div className="upper-container"> 
                  <div className="image-container">
                  <img src={person.professional.profile_pic} alt="image"/>
                  </div>
                  </div>
                              
                 <div className="lower-container">
                 <div>
                 <h3>  {person.professional.first_name}  {person.professional.last_name}</h3>
                 <h4>{person.professional.user_type}</h4>
                 </div>
                 <div>
                 <p><CallIcon id="ico"/>{person.professional.phone}</p>

                 <p>{person.professional.email}</p>
                 </div>
                 <div>

                <Link  to = "/details" className="btn"  >View Profile </Link> 
       
                 </div>
                 </div>

                 
                 </div>
                 

                ))}


          </div>

        );
    }
}












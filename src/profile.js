import React, { Component } from 'react';
import pic from './mine.jpg'

class Profile extends Component {
    constructor (){
        super();
        this.state = {
            isVisibile: true, seconds : 0, minutes: 0,hours : 0,
            fullName: "Aymen Ben Youssef",
            bio: "Addicted to web development",
            imgSrc:<img src={pic} alt='myPhoto' 
            style={{
            borderRadius: 50, 
            width:400, 
            height:300}}/>,
            profession: "Web devloper"};
      }
    componentDidMount = () => {
        setInterval( () => {    
          this.setState( prevState => ({
            seconds : prevState.seconds + 1,
             }));
      
             if (this.state.seconds === 60 ){ this.setState( prevState => ({
              minutes : prevState.minutes + 1,
              seconds : 0 }))}
      
              if (this.state.minutes === 60 ){ this.setState( prevState => ({
                hours : prevState.hours + 1,
                minutes : 0,
                seconds : 0 }))}
      
            }, 1000); 
      };



toggleVisibility = () =>{
    this.setState({
        isVisibile: !this.state.isVisibile
    })
}

  render () {
    return (
    <>
        <h2> Time spent looking at my profile : </h2>
        <h2> {this.state.hours}  :  {this.state.minutes}  :  {this.state.seconds} </h2>
        <button className="button button2" onClick={this.toggleVisibility} > {this.state.isVisibile ? "Hide profile" : "Show profile"} </button>
        {this.state.isVisibile ? (
            <>
            <h1> {this.state.imgSrc} </h1>
            <h1> {this.state.fullName} </h1>
            <h1> {this.state.bio} </h1>
            <h1> {this.state.profession} </h1>
            </>
        ) : (<h3>Click on the button to show my profile</h3>) }
            
    </>
    )
  }
}


export default Profile;
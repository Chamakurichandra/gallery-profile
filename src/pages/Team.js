import React from "react";
import axios from "axios";
import Profile from "./Profile";
export default class Team extends React.Component{
    constructor(){
        super();
        this.state={
          profile:[],
          user:""
        }
      }
      componentDidMount(){
        axios.get("https://panorbit.in/api/users.json")
        .then((posRes)=>{
          this.setState({
            profile:posRes.data.users
          })
        },(errRes)=>{
          console.log(errRes);
        })
      }
      fun=(activeUser)=>{
        this.setState({
            user:activeUser          
        })
      }
    render(){
      const{user,profile} =this.state
        return(
      <div>
        {this.state.user===""? <div className="team"><div className="head">Select an acount</div>
         {this.state.profile.map((element,index)=>(
          <div>
            <div className="row team-1 ">
            <div className="col-2">
              <div type="button" onClick={()=>this.fun(element)}> 
         <img className="pro" src={element.profilepicture} alt=""></img>
         </div>
         </div>
         <div className="col">
         <div type="button" onClick={()=>this.fun(element)}>  
            {element.name}
            <hr></hr>
            </div>
         </div>
         </div>
         </div>
        ))}</div>:<Profile user={user} profile={profile}/>}
      </div>            
        )
    }
}
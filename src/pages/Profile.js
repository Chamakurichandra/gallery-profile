import React from "react";
import { Redirect } from "react-router-dom";
export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            popUp:false,
            team:[],
            user:props.user
        }
    }
    showPopUp=()=>{
       var arg=[]
       while(arg.length<2){
           var x=this.props.profile[Math.floor(Math.random()*10)]
           if(arg.includes(x)===false&&(Object.is(x,this.state.user)===false)){
            arg.push(x)
           }
       }
        this.setState({
            popUp:true,
            team:arg
        })
    }
    Logic=(values)=>{
       this.setState({
           user:values
       }) 
    }
    click=()=>{
        return <Redirect to={this.state.redirect} />
    }
    render(){
        
        const {user}=this.state
        return(
            <div>
            <div className="card-deck">
                <div className="card">
                    <div className="card-body pro-1">
                        <dl>
                            <dd className="pro-2">Profile</dd>
                            <hr></hr>
                            <dd>Posts</dd>
                            <hr></hr>
                            <dd>Gallery</dd>
                            <hr></hr>
                            <dd className="pro-3">ToDo</dd>
                        </dl>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                <h2>Profile</h2>
                    </div>
                    <div className="card-title">
                        <img className="img" style={{width:"150px",height:"150px",margin:"1em"}} src={user.profilepicture} alt=""></img>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-5">
                        <dl>
                            <dd>Username </dd>
                            <dd>e-mail </dd>
                            <dd>Phone </dd>
                            <dd>Website </dd>
                        </dl>
                        </div>
                        <div className="col-1">
                        <dl>
                            <dd>:</dd>
                            <dd>:</dd>
                            <dd>:</dd>
                            <dd>:</dd>
                        </dl>
                        </div>
                        <div className="col-6">
                            <dl>
                                <dd>{user.username}</dd>
                                <dd>{user.email}</dd>
                                 <dd>{user.phone}</dd>
                                 <dd>{user.website}</dd>
                            </dl>
                        </div>
                        <div>
                            <h2> Company</h2>
                            <div className="row">
                            <div className="col-4">
                                <dl>
                                    <dd>Name</dd>
                                    <dd>catchphrase</dd>
                                    <dd style={{marginTop:"2em"}}>bs</dd>
                                </dl>
                            </div>
                            <div className="col-1">
                                <dl>
                                    <dd>:</dd>
                                    <dd>:</dd>
                                    <dd style={{marginTop:"2em"}}>:</dd>
                                </dl>
                            </div>
                            <div className="col">
                                <dl>
                                    <dd>{user.company.name}</dd>
                                    <dd>{user.company.catchPhrase}</dd>
                                    <dd>{user.company.bs}</dd>
                                </dl>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>    
                </div>
                <div className="card">
                <div className="card-title"> 
                <div className="dropdown" >
                    <div onClick={this.showPopUp}>
            <img className="img" data-toggle="dropdown" style={{width:"50px",height:"50px",margin:"1em",cursor:"pointer"}} src={user.profilepicture} alt=""></img> <span data-toggle="dropdown" style={{cursor:"pointer"}}>{user.name}</span> 
            <div className="dropdown-menu">
            <div className="dropdown-item">
                <div style={{textAlign:"center"}}>
            <img className="img" style={{width:"100px",height:"100px"}} src={user.profilepicture} alt=""></img>
              <div>{user.name}</div>
              <div>{user.email}</div>
              </div>
              <hr></hr>
            {this.state.popUp?this.state.team.map((element,index)=>(
                <div onClick={()=>this.Logic(element)}>
                    <div className="row">
                    <div className="col">
                <img className="img" style={{width:"50px",height:"50px",marginTop:"0.5em",cursor:"pointer"}} src={element.profilepicture} alt=""></img>
                </div>
                <div className="col">
                    <div style={{marginTop:"1.2em", cursor:"pointer"}}>
                {element.name}
                </div>
                </div>
                </div>
                </div>
            )):""}
            <hr></hr>
            <a href="/">
            <button onClick={()=>this.click} type="button" className="btn btn-danger btn-block">Signout</button>
            </a>
            </div>
            </div>
            </div>
            </div>
                    </div>
                    <div className="card-body">
                    <h2>Address :</h2>
                        <div className="row">
                        <div className="col">
                        <dl>
                            <dd>Street</dd>
                            <dd>Suite</dd>
                            <dd>City</dd>
                            <dd>Zipcode</dd>
                        </dl>
                        </div>
                        <div className="col-1">
                        <dl>
                            <dd>:</dd>
                            <dd>:</dd>
                            <dd>:</dd>
                            <dd>:</dd>
                        </dl>
                        </div>
                        <div className="col">
                            <dl>
                            <dd>{user.address.street}</dd>
                            <dd>{user.address.suite}</dd>
                            <dd>{user.address.city}</dd>
                            <dd>{user.address.zipcode}</dd>
                            </dl>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
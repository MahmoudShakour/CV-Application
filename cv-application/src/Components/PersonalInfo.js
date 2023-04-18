/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/PersonalInfo.css";

class PersonalInfo extends Component{

    constructor(props){
        super(props);
    }

    render(){
    
        return (
            <div className="personal-info">
                <input placeholder="first name" onChange={(e)=>this.props.handlePersonalInput(e,"first name")} />
                <input placeholder="last name" onChange={(e)=>this.props.handlePersonalInput(e,"last name")} />
                <input placeholder="title" onChange={(e)=>this.props.handlePersonalInput(e,"title")} />
                <input placeholder="address" onChange={(e)=>this.props.handlePersonalInput(e,"address")} />
                <input placeholder="number" onChange={(e)=>this.props.handlePersonalInput(e,"number")} />
                <input placeholder="Email" onChange={(e)=>this.props.handlePersonalInput(e,"email")} />
                <button onClick={this.props.handleUpdatePersonal} >Update personal Info</button>
            </div>
        );
    }
}

export default PersonalInfo;
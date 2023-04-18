/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/DisplayPersonalInfo.css";

class DisplayPersonalInfo extends Component{

    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className="display-personal-info">
                <div className="name">{this.props.data.personalInfo.firstName+" "+this.props.data.personalInfo.lastName}</div>
                <div className="title">{this.props.data.personalInfo.title}</div>
                <div className="email" >{this.props.data.personalInfo.email}</div>
                <div className="phone-number">{this.props.data.personalInfo.phoneNumber}</div>
                <div className="address">{this.props.data.personalInfo.address}</div>
            </div>
        );
    }

}


export default DisplayPersonalInfo;
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/DisplayPersonalInfo.css";
import homeIcon from "../assets/home.svg";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";

class DisplayPersonalInfo extends Component{

    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className="display-personal-info">
                <div className="name">{this.props.data.personalInfo.firstName+" "+this.props.data.personalInfo.lastName}</div>
                    <div className="title">{this.props.data.personalInfo.title}</div>
                <div className="item-container">
                    <img src={emailIcon} width="40px"/>
                    <div className="email" >{this.props.data.personalInfo.email}</div>
                </div>
                <div className="item-container">
                    <img src={phoneIcon} width="40px"/>
                <div className="phone-number">{this.props.data.personalInfo.phoneNumber}</div>
                </div>
                <div className="item-container">
                    <img src={homeIcon} width="40px"/>
                    <div className="address">{this.props.data.personalInfo.address}</div>
                </div>
            </div>
        );
    }

}


export default DisplayPersonalInfo;
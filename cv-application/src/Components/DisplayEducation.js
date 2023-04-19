/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/DisplayEducation.css";

class DisplayEducation extends Component{
    constructor(props){
        super(props);
    }

    render(){
        // console.log(typeof this.props.data.education);
        // console.log(typeof this.props.data.education);
        // console.log(this.props.data.education);
        let educations=this.props.data.education.map((education,index)=>{
            return(
                <div key={index} className="education-item">
                    <div className="education-item-headline" >
                        <div className="education-item-institute" >{education.institute}</div>
                        <div className="education-item-date">{"("+education.from+"-"+education.to+")"}</div>
                    </div>
                    <div className="education-item-grade" >{"grade: "+education.grade}</div>
                    <div className="education-item-details" >{"Details: "+education.details}</div>
                </div>
            );
        });
        return(
            <div className="display-education">
                <div className="title">Education</div>
                <div className="education-list">
                    {educations}
                </div>
            </div>
        );
    }
}

export default DisplayEducation;
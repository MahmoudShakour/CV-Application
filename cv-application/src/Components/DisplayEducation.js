/* eslint-disable no-useless-constructor */
import { Component } from "react";


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
                <div key={index}>
                    <div>{education.institute}</div>
                    <div>{education.grade}</div>
                    <div>{education.from}</div>
                    <div>{education.to}</div>
                    <div>{education.details}</div>
                </div>
            );
        });
        return(
            <div className="display-education">
                <div className="title">Education</div>
                <div>
                    {educations}
                </div>
            </div>
        );
    }
}

export default DisplayEducation;
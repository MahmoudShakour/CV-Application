/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/DisplayExperience.css";

class DisplayExperience extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let experiences=this.props.data.experience.map((experience,index)=>{
            return(
                <div key={index} className="experience-item" >
                    <div className="experience-item-headline">
                        <div className="experience-item-position" >{experience.position}</div>
                        <div className="experience-item-date" >{"("+experience.from+"-"+experience.to+")"}</div>
                    </div>
                    <div className="experience-item-description">{experience.description}</div> 
                </div>
            );
        });
        return(
            <div className="display-experience">
                <div className="title">Experience</div>
                <div className="experience-list" >
                    {experiences}
                </div>
            </div>
        );
    }
}

export default DisplayExperience;
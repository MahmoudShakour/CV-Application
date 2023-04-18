/* eslint-disable no-useless-constructor */
import { Component } from "react";


class DisplayExperience extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let experiences=this.props.data.experience.map((experience,index)=>{
            return(
                <div key={index}>
                    <div>{experience.position}</div>
                    <div>{experience.from}</div>
                    <div>{experience.to}</div>
                    <div>{experience.description}</div> 
                </div>
            );
        });
        return(
            <div className="display-experience">
                <div className="title">Experience</div>
                <div>
                    {experiences}
                </div>
            </div>
        );
    }
}

export default DisplayExperience;
/* eslint-disable no-useless-constructor */
import { Component } from "react";
import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayProjects from "./DisplayProjects";
import "../styles/DisplayContainer.css";

class DisplayContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="display-container">
                    <DisplayProjects data={this.props.data} />
                    <DisplayEducation data={this.props.data}/>
                    <DisplayExperience data={this.props.data} />
            </div>
        );
    }
}

export default DisplayContainer;
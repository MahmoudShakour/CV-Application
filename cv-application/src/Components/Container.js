/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/Container.css";
import DisplayCV from "./DisplayCV";
import InputCV from "./InputCV";


class Container extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <InputCV 
                    handlePersonalInput={this.props.handlePersonalInput} 
                    handleUpdatePersonal={this.props.handleUpdatePersonal}
                    handleEducationInput={this.props.handleEducationInput}
                    handleAddEducation={this.props.handleAddEducation}
                    handleExperienceInput={this.props.handleExperienceInput}
                    handleAddExperience={this.props.handleAddExperience} 
                    handleProjectInput={this.props.handleProjectInput}
                    handleAddProject={this.props.handleAddProject}
                    handleDeleteEducation={this.props.handleDeleteEducation}
                    handleDeleteExperience={this.props.handleDeleteExperience}
                    handleDeleteProject={this.props.handleDeleteProject}
                />
                <DisplayCV data={this.props.data} />
            </div>
        );
    }


}

export default Container;
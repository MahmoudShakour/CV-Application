/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/InputCV.css";
import EducationalInfo from "./EducationalInfo";
import ExperienceInfo from "./ExperienceInfo";
import PersonalInfo from "./PersonalInfo";
import ProjectInfo from "./ProjectInfo";

class InputCV extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="input-cv">
                <PersonalInfo 
                    handlePersonalInput={this.props.handlePersonalInput} 
                    handleUpdatePersonal={this.props.handleUpdatePersonal} 
                />
                <EducationalInfo
                    handleEducationInput={this.props.handleEducationInput}
                    handleAddEducation={this.props.handleAddEducation} 
                    handleDeleteEducation={this.props.handleDeleteEducation}
                />
                <ExperienceInfo
                    handleDeleteExperience={this.props.handleDeleteExperience}
                    handleExperienceInput={this.props.handleExperienceInput}
                    handleAddExperience={this.props.handleAddExperience} 
                />
                <ProjectInfo
                    handleProjectInput={this.props.handleProjectInput}
                    handleAddProject={this.props.handleAddProject}
                    handleDeleteProject={this.props.handleDeleteProject}
                />
            </div>
        );
    }
}

export default InputCV;
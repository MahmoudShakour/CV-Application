/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/ExperienceInfo.css";


class ExperienceInfo extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="experience-info">
                <input placeholder="position" onChange={ (e)=>  this.props.handleExperienceInput(e,"position")} />
                <input placeholder="From" onChange={ (e)=>this.props.handleExperienceInput(e,"from")} />
                <input placeholder="To" onChange={ (e)=>this.props.handleExperienceInput(e,"to")} />
                <textarea placeholder="Description" rows="3" onChange={ (e)=>this.props.handleExperienceInput(e,"description")} />
                <div className="buttons">
                    <button onClick={this.props.handleAddExperience} >ADD</button>
                    <button onClick={this.props.handleDeleteExperience} >Clear All</button>
                </div>
            </div>
        );
    }
}

export default ExperienceInfo;
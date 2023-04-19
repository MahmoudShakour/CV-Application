/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/EducationalInfo.css";

class EducationalInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="educational-info">
                <input placeholder="Institute" onChange={(e)=>this.props.handleEducationInput(e,"institute")} />
                <input placeholder="Grade" onChange={(e)=>this.props.handleEducationInput(e,"grade")} />
                <input placeholder="From" onChange={(e)=>this.props.handleEducationInput(e,"from")} />
                <input placeholder="To" onChange={(e)=>this.props.handleEducationInput(e,"to")} />
                <textarea placeholder="Details" rows="3" onChange={(e)=>this.props.handleEducationInput(e,"details")} />
                <div className="buttons">
                    <button onClick={this.props.handleAddEducation} >ADD</button>
                    <button onClick={this.props.handleDeleteEducation} >Clear All</button>
                </div>
            </div>
        );
    }
}

export default EducationalInfo;
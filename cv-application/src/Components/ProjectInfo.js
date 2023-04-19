/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/ProjectInfo.css";

class ProjectInfo extends Component{

    constructor(props){
        super(props);
    }

    render(){
        // console.log(this.props);
        return(
            <div className="project-info">
                <input placeholder="title" onChange={(e)=>this.props.handleProjectInput(e,"title")} />
                <textarea placeholder="Description" rows="3" onChange={(e)=>this.props.handleProjectInput(e,"description")} />
                <div className="buttons"> 
                    <button onClick={this.props.handleAddProject} >ADD</button>
                    <button onClick={this.props.handleDeleteProject}>Clear All</button>
                </div>
            </div>     
        );
    }
}

export default ProjectInfo;
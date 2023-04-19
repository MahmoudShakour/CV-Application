/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/DisplayProjects.css";

class DisplayProjects extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let projects=this.props.data.projects.map((project,index)=>{
            return(
                <div key={index} className="project-item-container"  >
                    <div className="project-title" >{project.title}</div>
                    <div className="project-description">{project.description}</div>
                </div>
            );
        });
        return(
            <div className="display-projects">
                <div className="title">Projects</div>
                <div className="projects-list" >
                    {projects}
                </div>
            </div>
        );
    }
}

export default DisplayProjects;
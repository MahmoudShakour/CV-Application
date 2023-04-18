/* eslint-disable no-useless-constructor */
import { Component } from "react";


class DisplayProjects extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let projects=this.props.data.projects.map((project,index)=>{
            return(
                <div key={index} >
                    <div>{project.title}</div>
                    <div>{project.description}</div>
                </div>
            );
        });
        return(
            <div className="display-projects">
                <div className="title">Projects</div>
                <div>
                    {projects}
                </div>
            </div>
        );
    }
}

export default DisplayProjects;
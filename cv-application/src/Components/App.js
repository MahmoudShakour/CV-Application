/* eslint-disable no-useless-constructor */
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import "../styles/App.css";
import { Component } from "react";


class App extends Component {
    constructor(props){
      super(props);

      this.state={
        personalInfo: {
          firstName:"Mahmoud",
          lastName:"Shakour",
          title: "sakaly",
          phoneNumber:"+201062591395",
          address:"elmarsah,mansoura,egypt",
          email:"mahmoud.ali1842001@gmail.com"
        },
        projects:[],
        education:[],
        experience:[]
      };

      this.newPersonalInfo=this.state.personalInfo;
      this.newEducation={};
      this.newExperience={};
      this.newProject={};


      this.handlePersonalInput=this.handlePersonalInput.bind(this);
      this.handleUpdatePersonal=this.handleUpdatePersonal.bind(this);
      this.handleEducationInput=this.handleEducationInput.bind(this);
      this.handleAddEducation=this.handleAddEducation.bind(this);
      this.handleExperienceInput=this.handleExperienceInput.bind(this);
      this.handleAddExperience=this.handleAddExperience.bind(this);
      this.handleProjectInput=this.handleProjectInput.bind(this);
      this.handleAddProject=this.handleAddProject.bind(this);
    }

    handlePersonalInput(e,type){
      if(type==="first name")
        this.newPersonalInfo.firstName=e.target.value;
      if(type==="last name")
        this.newPersonalInfo.lastName=e.target.value;
      if(type==="title")
        this.newPersonalInfo.title=e.target.value;
      if(type==="address")
        this.newPersonalInfo.address=e.target.value;
      if(type==="number")
        this.newPersonalInfo.phoneNumber=e.target.value;
      if(type==="email")
        this.newPersonalInfo.email=e.target.value;
    }

    
    handleUpdatePersonal(){
      this.setState({
        personalInfo: structuredClone(this.newPersonalInfo)
      });
    }
    
    handleEducationInput(e,type){
      if(type==="institute")
        this.newEducation.institute=e.target.value;
      if(type==="grade")
        this.newEducation.grade=e.target.value;
      if(type==="from")
        this.newEducation.from=e.target.value;
      if(type==="to")
        this.newEducation.to=e.target.value;
      if(type==="details")
        this.newEducation.details=e.target.value;
    }

    handleAddEducation(){

      let stateNewEducation=this.state.education;
      stateNewEducation.push(this.newEducation);

      this.setState({
        education: structuredClone(stateNewEducation)
      });
    }

    handleExperienceInput(e,type){
      if(type==="position")
        this.newExperience.position=e.target.value;
      if(type==="from")
        this.newExperience.from=e.target.value;
      if(type==="to")
        this.newExperience.to=e.target.value;
      if(type==="description")
        this.newExperience.description=e.target.value;
    }

    handleAddExperience(){
      let stateNewExperience=this.state.experience;
      stateNewExperience.push(this.newExperience);
      
      this.setState({
        experience:structuredClone(stateNewExperience)
      });

      console.log(this.state);
    }

    handleProjectInput(e,type){
      if(type==="title")
        this.newProject.title=e.target.value;
      if(type==="description")
        this.newProject.description=e.target.value;
    }

    handleAddProject(){
      let stateNewProject=this.state.projects;
      stateNewProject.push(this.newProject);
      
      this.setState({
        projects: structuredClone(stateNewProject)
      });
    }


    render(){
      
      return (
        <div className="app">
          <Header/>
          <Container 
            data={this.state} 
            handlePersonalInput={this.handlePersonalInput}
            handleUpdatePersonal={this.handleUpdatePersonal} 
            handleEducationInput={this.handleEducationInput}
            handleAddEducation={this.handleAddEducation}
            handleExperienceInput={this.handleExperienceInput}
            handleAddExperience={this.handleAddExperience}
            handleProjectInput={this.handleProjectInput}
            handleAddProject={this.handleAddProject}
          />
          <Footer/>
        </div>

      );
  }
}



export default App;

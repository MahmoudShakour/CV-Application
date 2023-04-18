/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/DisplayCV.css";
import DisplayContainer from "./DisplayContainer";
import DisplayPersonalInfo from "./DisplaypersonalInfo";


class DisplayCV extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="display-cv">
                <DisplayPersonalInfo data={this.props.data} />
                <DisplayContainer data={this.props.data}/>
            </div>
        );
    }
}

export default DisplayCV;
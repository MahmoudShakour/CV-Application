/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "../styles/Header.css";

class Header extends Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div className="header">
                CV Creator
            </div>
        );
    }
}

export default Header;
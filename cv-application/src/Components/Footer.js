/* eslint-disable no-useless-constructor */

import { Component } from "react";
import "../styles/Footer.css";

class Footer extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="footer">
                Copyright © 2023 MahmoudShakour
            </div>
        );
    }
}

export default Footer;
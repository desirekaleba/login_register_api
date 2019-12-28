import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <div className="navbar-fixed">
                <nav style={{height: "25vh", backgroundColor: "black"}} className="z-depth-0">
                    <div className="black">
                        <Link
                            to="/"
                            style={
                                {
                                    fontFamily: "verdana"
                                }
                            }
                            className="col s5 brand-logo center white-text"
                        >
                            <h3>MERN</h3> Register-Login
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
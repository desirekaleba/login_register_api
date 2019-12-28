import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component{

    render(){
        return (
            <div style={{
                //height: "75vh"
                marginLeft: "0",
                paddingLeft: "0"
                }}
                className="valign-wrapper" style={{
                    //height: "75vh"
                    marginLeft: "0",
                    paddingLeft: "0"
                    }}>
                    <div className="row" style={{
                //height: "75vh"
                marginLeft: "0",
                paddingLeft: "0"
                }}>
                        <div className="waves-effects waves-light"
                            style={{
                                width: "73%",
                                float: "left",
                                textAlign: "justify",
                                fontWeight: "100",
                                backgroundColor: "skyblue",
                                color: "black",
                                height: "100em",
                                padding: "8rem 1rem"

                                
                            }}
                        >
                            <h5 style={{marginTop: "30vh"}}>
                                A full-stack
                                <span style={{
                                    fontFamily: "monospace"
                                    }}
                                > <b>MERN</b></span> stack app with user authentication via 
                                passport and JWTs
                            </h5>

                        </div>
                        <div className=""
                        style={{
                            width: "25%",
                            float: "right",
                            textAlign: "justify",
                                fontWeight: "100",
                                margin: "50vh 0 0 0",
                                height: "75vh",
                            
                        }}>
                                    <Link
                                        to="/register"
                                        style={{
                                            width: "100%",
                                            borderRadius: "3rem",
                                            letterSpacing: "1.5px"
                                        }}
                                        className="btn btn-large waves-effects waves-light hoverable blue accent-3"
                                    >
                                        Register
                                    </Link>

                                    <Link
                                        to="/login"
                                        style={{
                                            width: "100%",
                                            borderRadius: "3rem",
                                            marginTop: "1em",
                                            letterSpacing: "1.5px",
                                            // display: "block"
                                        }}
                                    className="btn btn-large btn-flat waves-effects blue black-text"
                                    >
                                        Log In
                                    </Link>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Landing;
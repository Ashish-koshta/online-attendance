import React from "react";
import { Link } from "react-router-dom";
import "./Tlogin.css";

const Tlogin = () => {
    return (
        <>
        <div className="tstd">

            <nav class="heading">
                <h1>Welcome</h1>
            </nav>
            <nav class="bodi">
                <nav class="box">
                    <div class="tlogo">

                    </div>
                    <form action="">
                        <div>
                            <h1 class="login">Teacher Login</h1>
                        </div>
                        <div class="con">
                            <h3 class="require">* Required field</h3>

                            <h2>Email id* 
                                <input type="text" placeholder="Enter your roll no" class="input" />
                            </h2>
                            <h2>Password*
                                <input type="text" placeholder="Enter your password" class="input" />
                            </h2>
                            <br />
                            
                            <Link to="/teach" className="sbtn">
                                    Login
                                </Link>
                            {/* <button class="btn">login</button> */}
                            
                        </div>
                    </form>
                </nav>
            </nav>
        </div>
        </>
    );
}
export default Tlogin;
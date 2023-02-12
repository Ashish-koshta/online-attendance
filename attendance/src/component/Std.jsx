import React from "react";
import { Link } from "react-router-dom";
import "./Std.css";

const Std = () => {
    return (
        <>
            <div className="std">

                <nav class="heading">
                    <h1>Welcome For Yours Attendance</h1>
                </nav>
                <nav class="bodi">
                    <nav class="sbox">
                        <div class="logo">

                        </div>
                        <form action="">
                            <div>
                                <h1 class="login">Student Login</h1>
                            </div>
                            <div class="con">
                                <h3 class="require">* Required field</h3>

                                <h2>Roll no*
                                    <input type="text" placeholder="Enter your roll no" class="input" />
                                </h2>
                                <h2>Password*
                                    <input type="text" placeholder="Enter your password" class="input" />
                                </h2>
                                <br />
                                <Link to="/attend" className="sbtn">
                                    Login
                                </Link>
                                {/* <button class="btn"> <a href="">login</a> </button> */}
                            </div>
                        </form>
                    </nav>
                </nav>
            </div>
        </>
    );
}
export default Std;
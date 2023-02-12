import React from "react";
import { Link } from "react-router-dom";
import "./Teach.css"; 

const Teach = () => {
    return (<>
        <div class="tbg">
       
        <nav id="tnavbar">
            <ul class="tnav">
                <li>
                    <h2>Online Attendance System</h2>
                </li>
                <li class="thome">Home</li>
                <li class="tlogout">Logout</li>

            </ul>
        </nav>
        <div class="tbox">
            <div class="tbox0" id="tbox1">
                <h1>01</h1>
                <h2>Add</h2>
                <Link to="/register">
                <h3>Click Here To Register New Student</h3>
                </Link>
            </div>
            <div class="tbox0" id="tbox2">
                <h1>02</h1>
                <h2>Check Attendance</h2>
                <h3>Click Here TO Check Attendance</h3>

            </div>
            <div class="tbox0" id="tbox3">
                <h1>03</h1>
                <h2>Student Details</h2>
                <h3>Click Here To View Student Details</h3>

            </div>
            {/* <div class="tbox0" id="tbox4">
                <h1>04</h1>
                <h2>Search</h2>
                <h3>Click Here To Search Student <br/>
                    <input type="text" placeholder="Search.." name="search" id="tsearch"/>
                    <button type="submit" placeholder="submit" id="tbtn"> &#128269</button>
                </h3>

            </div> */}
        </div>
    </div>
    </>
    );
}
export default Teach;
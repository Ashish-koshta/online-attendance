import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (<>
        <div class="homebox">

        

            <h1>Online Attendance System</h1>
          

           

            <Link to="/student" className="hbtn">
                <div className="btnbox">
                    <h1>student</h1>
                </div>
            </Link>

            <Link to="/tlogin" className="hbtn">
                <div className="btnbox" id="tbox">
                    <h1>teacher</h1>
                </div>
            </Link>

        </div>
    </>
    );
}
export default Home;
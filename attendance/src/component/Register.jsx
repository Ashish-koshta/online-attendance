import React from "react";
import { useState } from "react";
import "./Register.css";
const Register = () => {
    const [user, setUser] = useState({
        name: "",
        classs: "",
        rollno: "",
        email: "",
        password: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(name, value);
        setUser({ ...user, [name]: value });
    }
    

    const PostData = async (e) => {
        e.preventDefault();
        const { name, classs, rollno, email, password } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, classs, rollno, email, password
            })
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            window.alert("Invalid credentials");
            console.log("Invalid credentials");
        } else {
            window.alert("Registration successfull");
            console.log("Registration successfull");

        }

    }

    console.log(user);
    return (
        <>
            <div className="rbody">
                <div className="rhead">
                    <h1>Register a new student</h1>
                </div>
                <div className="rbox">
                    <form action="POST"  >
                        <h3 className="rf">*required field</h3>
                        <h3>Name*
                        <input type="text" autoComplete="off" placeholder="Enter your name"
                                value={user.name}
                                onChange={handleInputs}
                                name="name" />
                        </h3>
                        <h3>Class*
                        <input type="text" autoComplete="off" placeholder="Enter your name"
                                value={user.classs}
                                onChange={handleInputs}
                                name="classs" />
                        </h3>
                        <h3>Rollno.*
                        <input type="number" autoComplete="off" placeholder="Enter your name"
                                value={user.rollno}
                                onChange={handleInputs}
                                name="rollno" />
                        </h3>
                        <h3>Email*
                        <input type="text" autoComplete="off" placeholder="Enter your name"
                                value={user.email}
                                onChange={handleInputs}
                                name="email" />
                        </h3>
                        <h3>Password*
                        <input type="text" autoComplete="off" placeholder="Enter your name"
                                value={user.password}
                                onChange={handleInputs}
                                name="password" />
                        </h3>

                        <button className="rbtn" type="submit" onClick={PostData} >Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register;
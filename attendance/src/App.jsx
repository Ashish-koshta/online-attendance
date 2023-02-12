import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attend from "./component/Attend";
import Home from "./component/Home";
import Register from "./component/Register";
import Std from "./component/Std";
import Teach from "./component/Teach";
import Tlogin from "./component/Tlogin";


const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/student" element={<Std/>} />
                <Route exact path="/tlogin" element={<Tlogin/>} />
                <Route exact path="/teach" element={<Teach/>} />
                <Route exact path="/attend" element={<Attend/>} />
                <Route exact path="/register" element={<Register/>} />
                

            </Routes>

        </BrowserRouter>
        </>
    );
}
export default App;
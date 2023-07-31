import { Route,Routes } from "react-router-dom";
import Login from "../pages/login"
import Signup from "../pages/signup";
import Home from "../pages/home";
export default function AllRouter(){
    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}
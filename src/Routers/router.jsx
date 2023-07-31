import { Route,Routes } from "react-router-dom";
import Login from "../pages/login"
export default function AllRouter(){
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
    )
}
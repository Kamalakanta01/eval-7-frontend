import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { store } from "../redux/store"
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigation = useNavigate()
    // console.log(store)
    function handleLogin(e){
        e.preventDefault()
        axios.post(`https://blogs-site-backend-unit7.onrender.com/login`,{
            email:email,
            password:password
        })
        .then(res=>{console.log(res.data);
            if(res.data.msg==="Successful"){
                store.dispatch({type:"logged",payload:res.data.token})
                navigation("/")
            }
        })
        .catch(err=>{console.log(err)})
    }

    return (
        <Box>
            <Stack w={"50%"} margin={"auto"}>
            <input type="email" value={email} className="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" value={password} className="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={()=>{navigation("/signup")}}>Signup</Button>
            </Stack>
        </Box>
    )
}
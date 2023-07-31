import { Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"
export default function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    function handleLogin(e){
        e.preventDefault()
        axios.get(`https://blogs-site-backend-unit7.onrender.com/login`,{
            email:email,
            password:password
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    }

    return (
        <Box>
            <form onSubmit={handleLogin}>
                <Stack w={"50%"} margin={"auto"}>
                <input type="email" value={email} className="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" value={password} className="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <input type="submit" className="button"/>
                </Stack>
            </form>
        </Box>
    )
}
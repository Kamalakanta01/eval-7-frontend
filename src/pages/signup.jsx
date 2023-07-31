import { Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigation = useNavigate()
    
    console.log(email,password)
    function handleSignup(e){
        e.preventDefault()
        axios.post(`https://blogs-site-backend-unit7.onrender.com/signup`,{
            name:name,
            email:email,
            password:password
        })
        .then(res=>{console.log(res.data)
            if(res.data==="User Created Successfully"){
                navigation("/login")
            }
        })
        .catch(err=>{console.log(err)})
    }

    return (
        <Box>
            <form onSubmit={handleSignup}>
                <Stack w={"50%"} margin={"auto"}>
                <input type="text" value={name} className="name" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
                <input type="email" value={email} className="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" value={password} className="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <input type="submit" className="button"/>
                </Stack>
            </form>
        </Box>
    )
}
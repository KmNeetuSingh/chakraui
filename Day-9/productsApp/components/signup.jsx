import { Box  , Input } from "@chakra-ui/react"
import {useRef} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Signup = ()=>{

    let URL = "https://crud-mk-i-default-rtdb.firebaseio.com/Users.json"
    let username = useRef(null)
    let password = useRef(null)
    let navigate = useNavigate()

    function HandleForm(e){
        e.preventDefault()

        let obj = {
            username : username.current.value , 
            password : password.current.value
        }

        axios.post(URL , obj)
        .then((res)=>{
            alert("user saved in db successfully")
            navigate("/login")
        })
    }
    return (
         <Box>
           <form onSubmit={HandleForm}>
           <Input ref={username} placeholder='Username' size='md' />
           <Input ref={password} placeholder="password" size="md"/>
           <Input type="submit" />
           </form>
         </Box>
    )
}
import { Box  , Input } from "@chakra-ui/react"
import {useContext, useRef} from "react"
import axios from "axios"
import { AuthContext } from "../context/authcontext"
import { useNavigate } from "react-router-dom"


export const Login = ()=>{

    let URL = "https://crud-mk-i-default-rtdb.firebaseio.com/Users.json"
    let username = useRef(null)
    let password = useRef(null)
    let {isLogged , setIsLogged} = useContext(AuthContext)
    let navigate = useNavigate()

    function HandleForm(e){
        e.preventDefault()

        let obj = {
            username : username.current.value , 
            password : password.current.value
        }

        // axios.get(URL) => data => data.filter=> obj.username && obj.password
        axios.get(URL)
        .then((res)=>{
            let products = res.data
            products = Object.entries(products)
           
            let filteredData = products.filter(([id , ele])=>{
                return ele.username == obj.username && ele.password==obj.password
            })


            if(filteredData.length == 0){
                alert("Wrong Credentials")
            }else{
                setIsLogged(
                    {
                        flag : true , 
                        user : filteredData[0][1].username
                    }
                )

                navigate("/")
               
            }
            //[{}]

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


// let data = [user1 , user2 , user3]

//let res = data.filter((ele)=>ele==user1)

// [{username , password}]

// res[0].username

// if (data.length == 0){

// }else{

// }
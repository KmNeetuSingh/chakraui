import { useContext } from "react"
import { AuthContext } from "../context/authcontext"
import { Button , Flex} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"

export const Navbar = ()=>{

    let {isLogged , setIsLogged} = useContext(AuthContext)
    let {flag , user} = isLogged
    let navigate = useNavigate()

    function HandleNavigate(path){
          navigate(path)
    }

    return (
        <Flex justify="space-between"
              bgGradient="linear(blue , teal)"
              p="2"
              align="center"
        >
            <Button onClick={()=>HandleNavigate("/")}>Home</Button>
            <Button onClick={()=>HandleNavigate("/cart")}>Cart</Button>
            <Flex>
                {
                    flag ? 
                    <>
                     <Button m="1">Hi , {user}</Button>
                     <Button m="1" onClick={()=>{
                          setIsLogged({
                            flag : false , 
                            user : ""
                          })

                          HandleNavigate("/login")
                     }}>Log out</Button>
                    </>
                   
                    :
                    <Flex >
                     <Button m="1" onClick={()=>HandleNavigate("/login")}>Login</Button>
                     <Button m="1" onClick={()=>HandleNavigate('/signup')}>Signup</Button>
                    </Flex>
                }
            </Flex>
        </Flex>
    )
}

// isLogged => false
// context => login successful => true
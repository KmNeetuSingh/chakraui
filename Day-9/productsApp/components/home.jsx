import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Box, Button, Card, CardBody, CardFooter , Image, Divider, Grid, Heading, Stack , Text} from '@chakra-ui/react'
import { AuthContext } from "../context/authcontext"
import { useNavigate } from "react-router-dom"

export const Home = ()=>{

    let URL = "https://crud-mk-i-default-rtdb.firebaseio.com/Products.json"

    let [data , setData] = useState({})

    let {isLogged} = useContext(AuthContext)

    let navigate = useNavigate()

    useEffect(()=>{

        axios.get(URL)
        .then((res)=>{
            setData(res.data)
        })

    },[])

    function HandleCartClick(){
          if(!isLogged.flag){
              navigate("/login")
          }
    }
    

    return(
       <Box>
        <h2>Home</h2>
        <Grid templateColumns="repeat(3 , 1fr)" gap="5">
            {
                Object.entries(data).map(([id , ele])=>{
                        return(

                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                    src={ele.image}
                                    alt='Image'
                                    borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{ele.title}</Heading>
                                    <Text color='blue.600' fontSize='2xl'>
                                        {ele.price}
                                    </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <Button onClick={HandleCartClick} variant='ghost' colorScheme='blue'>
                                        Add to cart
                                    </Button>
                                </CardFooter>
                                </Card>

                        )
                })
            }
        </Grid>
        
       </Box>
    )
}
import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxWidth={'container.xl'} height={'100vh'} p={'16'}>
       
    <form action="">
     <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
         <Heading alignSelf={'center'}>VIDEO HUB</Heading>
         <Avatar alignSelf={'center'} boxSize='32'/>

         <Input placeholder='Name'
          required type='text'
           focusBorderColor='purple.500'>
                
           </Input>

         <Input placeholder='Email'
          required type='email'
           focusBorderColor='purple.500'>
                
           </Input>


         <Input placeholder='Password'
          required 
          type='password'
           focusBorderColor='purple.500'>
                
           </Input>


          

           <Button colorScheme='purple' type='submit'>
             Sign Up
           </Button>

           
          
           <Button variant={'link'} colorScheme='purple'>
             <Link to={'/login'}>Log In</Link>
           </Button>

           
         
     </VStack> 
    </form>

 </Container>
  )
}

export default Signup
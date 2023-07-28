import React from 'react'

import { Box,Stack, Button,VStack,Heading, HStack, Input, Text } from '@chakra-ui/react'
import {AiOutlineSend,AiFillYoutube, AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>

     
        <Stack direction={['column','row']}>
       
           {/* section 1 */}
           <VStack alignItems={'stretch'}  w={'full'} px={'4'} textAlign={['center','left']}>
              <Heading size={'md'}  textTransform={'uppercase'} >
                Subscribe to get updates 
              </Heading>

               <HStack borderBottom={'2px solid white'} py='2' >
                   <Input placeholder='Enter Email Here...'
                    border={'none'}
                     borderRadius={'none'}
                     outline={'none'}
                     focusBorderColor='none'
                     >

                   </Input>
                  <Button colorScheme='purple' p={'0'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                     <AiOutlineSend/>
                  </Button>
               </HStack>
          </VStack>

          {/* section2 */}
          <VStack w={'full'}
                  borderLeft={['none','1px solid white']} 
                  borderRight={['none','1px solid white']}
                 
          >
             
             <Heading textAlign={'center'} textTransform={'uppercase'}>
                VIDEO HUB
             </Heading>
             <Text>
                @All rights Reserved
             </Text>
                    

            

          </VStack>

         {/* section 3 */}
          <VStack w={'full'}>
              <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
              </Heading>

              <HStack>
                
              <Button variant={'link'}  >
                <a target='blank' href="https://youtube.com/@akshaygill4692"><AiFillYoutube size={36} color="white" /></a>
              </Button>
              <Button variant={'link'}  >
                <a target='blank' href="https://www.linkedin.com/in/akshay-gill-2128771ba/"><AiFillLinkedin size={36} color="white" /></a>
              </Button>
              <Button variant={'link'}  >
                <a target='blank' href="https://github.com/akshaygill01"><AiFillGithub size={36} color="white" /></a>
              </Button>

              </HStack>
              
          </VStack>

        </Stack>
    </Box>
  )
}

export default Footer

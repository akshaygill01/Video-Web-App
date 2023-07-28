import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi";

const Header = () => {
 const {isOpen,onOpen,onClose}=useDisclosure()
  return (
  <>
    <Button pos={"fixed"}
            top={"4"} 
            zIndex={'overlay'}
            left={"4"}
            colorScheme='purple'
            p={"0"}
            w={"10"}
            onClick={onOpen}
            
             >
    <BiMenuAltLeft size={"20"}></BiMenuAltLeft>
      
    </Button>


    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
         <DrawerOverlay />
         <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={"flex-start"}>
              {/* align item by default center hote h or display flex+column */}
              
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link  to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link  to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link  to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link  to={'/upload'}>Upload Video</Link>
              </Button>

              </VStack>


              <HStack pos={'absolute'}
                      bottom={'10'}
                      w={"full"}
                      justifyContent={"space-evenly"}
                      left={"0"}
                                        >

                  <Button onClick={onClose} colorScheme='purple'>
                    <Link to={'/login'}>Log In</Link>
                  </Button>
                  <Button onClick={onClose} colorScheme='purple' variant={"outline"}>
                    <Link to={"/signup"}>Sign Up</Link>
                  </Button>
              </HStack>
            </DrawerBody>
         </DrawerContent>
          
    </Drawer>
  </>

   
  );
};

export default Header
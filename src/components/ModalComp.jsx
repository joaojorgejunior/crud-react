import{
 
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalFooter,
 ModalBody,
 ModalCloseButton,
 Button,
 FormControl,
 FormLabel,
 Input,
 Box,
} from "@chakra-ui/react;"
import { useState } from "react";

const ModalComp =({data,setdata,dataEdit,isOpen,onClose}) =>{
 const [name,setName]= useState(dataEdit.name || "");
 const [email,setEmail]= useState(dataEdit.email || "");
 
    return(
        <>
        <Modal isOpen={isOpen} onClose={onClose}> </Modal>
        </>
    );
}
export default ModalComp;
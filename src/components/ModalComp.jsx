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

 const handleSave =()=> {
    if (!name || !email) return;

    if (emailAlreadyExists()){
        return alert("E-mail já cadastrado!")
    }

    if (Object.keys(dataEdit).length){
        data[dataEdit.index]={name,email}
    }

    const newDataArray = !Object.keys(dataEdit).length
    ?[...(data ? data : []), {name,email}]
    :[...(data ? data:[])];
    localStorage.setItem("card_cliente",JSON.stringify(newDataArray));
    
    setData(newDataArray);
    onClose();
 };

 const emailAlreadyExists = () =>{
    if(dataEdit.mail !== email && data?.length){
        return data.find((item) => item.email === email)
    }
 }
 
    return(
     <>
        <Modal isOpen={isOpen} onClose={onClose}> 
         <ModalOverlay/>
         <ModalContent>
            <ModalHeader>Cadastro de Clientes</ModalHeader>
           <ModalCloseButton/> 
           <ModalBody>
            <FormControl display="flex" fledir="colum" gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                 <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
              </Box>  
              <Box>
                <FormLabel>Email</FormLabel>
                 <input type="email" value={email} onChange={(e)=> setName(e.target.value)} />
              </Box> 
            </FormControl>
           </ModalBody>
           <ModalFooter justifycontent="start">
            <button colorScheme="green" mr={3} onClick={handleSave}>Salvar</button>
            <button colorScheme="red" mr={3} onClick={onClose}>Cancelar</button>
           </ModalFooter>
         </ModalContent>
        </Modal>
     </>
    );
};
export default ModalComp;
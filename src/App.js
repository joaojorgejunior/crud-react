import { EditIon, DeleteIcon } from "@chakra-ui/icons"
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue
} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setdata] = useState([]);
  const [dataEdit, setDataEdit] = useState({})

  const isMobile = useBreakpointValue({
    base: true,
    lg:false,
  });

    useEffect(() =>{
      const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      :[];
      setData(db_costumer);
    },[setData]);

    const handleRemove = (email)=>{
      const newArray = data.filter((item) => item.email !== email);

      setData(newArray);

      localStorage.setItem("cad_cliente", JSON.stringify(newArray));
    };

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontzise="20px"
      fontfamily="poppins"
    >
      <Box maxW={800} w='100%' h="100vh" py={10} px={2}>
        <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]} >NOVO CADASTRO</Button>

        <Box overflowy="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th maxw={isMobile ? 5 : 100} fontSize={"20px"}>Nome
                </Th>
                <Th maxw={isMobile ? 5 : 100} fontSize={"20px"}>E-Mail
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({name,email},index)=>(
                <Tr key={index} cursor="pointer" haver={{bg:"gray.100"}} >
                <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                <Td maxW={isMobile ? 5 : 100}>{email}</Td>
                <Td p={0}>
                  <EditIon
                  fontSize={20}
                  onClick={()=>[
                    setDataEdit({name,email,index}),
                    onOpen(),
                  ]}
                  />
                </Td>
                <td p={0}>
                  <DeleteIcon
                    fontSize={20}
                    onClick={()=> handleRemove(email)}
                  />
                </td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen &&(
        <ModalComp
         isOpen={isOpen}
         onOpen={onClose}
         data={data}
         setData={setData}
         dataEdit={dataEdit}
         setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
}

export default App;

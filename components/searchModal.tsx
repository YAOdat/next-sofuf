import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { SearchIcon } from "@/components/icons";

export default function SearchModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <CiSearch className="bg-transparent rounded-md flex inline-flex items-center" onClick={onOpen} cursor={'pointer'} size={'28'}/>
      <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}  
        style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            margin: "0",
            borderRadius: "0",
            border: "none",
            boxShadow: "none",
            background: "transparent",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Search</ModalHeader>
              <ModalBody>
              <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
           
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-cyan-600 shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  Search
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

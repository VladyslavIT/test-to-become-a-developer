import React, { useState } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import {
  Section,
  Title,
  SubTitle,
  TextArea,
  Button,
  BtnInner,
} from './Production.styled';
import Modal from 'components/Modal/Modal';

const Production = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  }
  
  return (
    <>
      <Section>
        <Title>LetterTracker</Title>
        <Modal isOpen={isOpen} onClose={closeModal}/>
        <SubTitle>Enter text here</SubTitle>
        <TextArea></TextArea>
       
        <Button onClick={openModal}>
          <BtnInner>
            Search <TfiSearch />
          </BtnInner>
        </Button>
      </Section>
    </>
  );
};

export default Production;

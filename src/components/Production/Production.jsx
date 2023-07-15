import React, { useEffect, useState } from 'react';
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
  const [text, setText] = useState('');
  const [letter, setLetter] = useState([]);

  useEffect(() => {
    const findUniqueLetter = () => {
      const arr = text.toLowerCase().split(/\s+/);
      const uniqueLetters = [];

      for (const item of arr) {
        let uniqueChar = item[0];
        let isDuplicate = false;

        for (let i = 1; i < item.length; i += 1) {
          if (item[i] === uniqueChar) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          uniqueLetters.push(uniqueChar);
        }
      }
      return uniqueLetters;
    };
    setLetter(findUniqueLetter());
  }, [text]);

  console.log(letter);

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Section>
        <Title>LetterTracker</Title>
        <Modal isOpen={isOpen} onClose={closeModal} />
        <SubTitle>Enter text here</SubTitle>
        <TextArea onChange={handleChange}></TextArea>

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

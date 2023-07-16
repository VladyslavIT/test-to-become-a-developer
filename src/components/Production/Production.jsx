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

  const uniqueLetter = array => {
    const counts = {};

    for (const item of array) {
      counts[item] = (counts[item] || 0) + 1;
    }
    for (const item of array) {
      if (counts[item] === 1) {
        return item;
      }
    }
    return 'no unique letter';
  };

  useEffect(() => {
    const uniqueArray = () => {
      const array = text.toLowerCase().split(/\s+/);
      const setArray = new Set();
      const uniqueLetters = [];

      array.forEach(word => {
        setArray.add(word);
      });

      for (const item of setArray) {
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
    setLetter(uniqueLetter(uniqueArray()));
  }, [text]);

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
        <Modal letter={letter} isOpen={isOpen} onClose={closeModal} />
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

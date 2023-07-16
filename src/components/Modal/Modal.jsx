import React, { useEffect } from 'react';
import { SlClose } from 'react-icons/sl';

import {
  ModalWrapper,
  ModalContent,
  ModalClose,
  ModalTitle,
  Letter,
} from './Modal.styled';

const Modal = ({ letter, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const closeOverlay = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalWrapper onClick={closeOverlay}>
      <ModalContent>
        <ModalClose onClick={onClose}>
          <SlClose style={{ fontSize: '30px' }} />
        </ModalClose>
        <ModalTitle>The Letter :</ModalTitle>
        <Letter>{!letter ? 'no unique letter' : letter}</Letter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 25%;
  height: 200px;
`;

export const ModalClose = styled.span`
  position: absolute;
  top: -5px;
  right: 5px;
  cursor: pointer;
`;

export const ModalTitle = styled.p`
  margin-bottom: 24px;
  font-size: smaller;
`;

export const Letter = styled.div`
  font-size: 60px;
  font-style: normal;
`;

import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  width: 700px;
  padding: 100px 0 100px 0;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 56px;
`;

export const SubTitle = styled.p`
  margin-bottom: 24px;
`;

const pulsate = keyframes`
  0% {
    border-color: #000;
  }
  50% {
    border-color: azure;
  }
  100% {
    border-color: #000;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  margin-bottom: 24px;
  box-sizing: border-box;
  font-size: large;
  font-family: system-ui;
  resize: none;
  border-color: aqua;
  border-width: 1.5px;
  animation: ${pulsate} 2s infinite;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: lightblue;
  transition: transform 0.4s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const BtnInner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  gap: 5px;
`;

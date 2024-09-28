import styled, { keyframes } from "styled-components";

// Animação de fadeIn
const fadeIn = keyframes`
  0% {
    opacity: 0.2;  // Começa com uma leve opacidade
  }
  100% {
    opacity: 1;
  }
`;

// Other existing styled components...

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0; // Optional margin for spacing

  & > input {
    flex: 1; // Make inputs grow equally
    margin-right: 10px; // Space between inputs
  }

  & > input:last-child {
    margin-right: 0; // No margin for the last input
  }
`;

// Animação de slideInUp
const slideInUp = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Animação para "pulsar" o botão ao passar o mouse
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Animação de zoom para a logo
const zoomIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Container principal com animação de fadeIn
export const FormContainer = styled.div`
  background-color: #3ba8e7;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: #000;
  position: relative;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;

  /* Responsividade */
  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

// Caixa de formulário com animação de slideInUp
export const Box = styled.div`
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${slideInUp} 1s ease forwards;
  animation-delay: 1s;

  display: flex;
  flex-direction: column;
  align-items: center; /* Garante centralização dos filhos */
  justify-content: center;

  @media (max-width: 700px) {
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.5s ease;
  }
`;

// Título com estilo e animação de fadeIn
export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 1rem;
  margin-top: 150px;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 1.2s;

  @media (max-width: 700px) {
    margin-top: 4rem;
    font-size: 2rem;
  }
`;

// Informações de contato com estilo
export const ContactInfo = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: "Gayathri", sans-serif;
  font-weight: 200;
  color: #fff;
  animation: ${fadeIn} 1.2s ease forwards;
  animation-delay: 1.4s;

  span {
    color: #2e0deb;
    cursor: pointer;
  }
`;

// Formulário com estilo e animação
export const Form = styled.form`
  max-width: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
  animation: ${slideInUp} 1.5s ease forwards;

  /* Animação de pulso ao passar o mouse no botão */
  &:hover button {
    animation: ${pulse} 0.5s infinite;
  }
`;

// Input estilizado com animações de hover e focus
export const StyledInput = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: #3ba8e7;
  }

  &:focus {
    transform: scale(1.1);
    border-color: #3ba8e7;
    outline: none;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px 25px;
  border: 2px solid black;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  margin: 50px auto 0; /* Aumentado o margin-top para 50px */
  display: block;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  animation: ${fadeIn} 2s ease forwards;
  animation-delay: 1.8s;

  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
    transform: scale(1.05);
    animation: ${pulse} 0.6s infinite;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

// Texto de "Esqueceu a Senha?" com animação
export const ForeignKey = styled.p`
  margin-block: 3rem;
  text-align: center;
  font-size: 1.5rem;
  animation: ${fadeIn} 2s ease forwards;
  animation-delay: 2s;
`;

// Logo com animação de zoomIn
export const LogoMarca = styled.img`
  width: 200px;
  margin: auto;
  opacity: 0;
  animation: ${zoomIn} 2.5s ease forwards;
  animation-delay: 2.2s;

  @media (max-width: 700px) {
    width: 150px;
  }
`;

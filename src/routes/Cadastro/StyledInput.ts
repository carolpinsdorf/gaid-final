import styled from "styled-components";

const StyledInput = styled.input`
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-left: 35px;

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
    margin-left: 0;
  }
`;
export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; // Espaçamento entre os campos

  @media (max-width: 700px) {
    flex-direction: column; // Para telas pequenas, os campos ficam empilhados
    gap: 0;
  }
`;
export default StyledInput;

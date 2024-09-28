// InputStyled.ts
import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid #3ba8e7;
    box-shadow: 0 0 10px rgba(59, 168, 231, 0.5);
    outline: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

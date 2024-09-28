import { useState } from "react";
import logoMarca from "./../../assets/logoMarcaPorto copy.png";
import imgbg from "./../../assets/imgSignIn copy.png";
import { Header } from "../../components/molecules/header";
import { Link, useNavigate } from "react-router-dom";
import porto from "./../Cadastro/LogoMarca.module.css";
import {
  FormContainer,
  BackgroundImage,
  Box,
  Title,
  ContactInfo,
  Form,
  Row,
  SubmitButton,
  ForeignKey,
} from "./LoginStyled";
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
  }
`;

const RealizarLogin = () => {
  const stateInitialForm = {
    nome: "",
    senha: "",
  };

  const [dataForm, setDataForm] = useState(stateInitialForm);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!dataForm.nome || !dataForm.senha) {
      alert("Todos os campos devem estar preenchidos");
      return;
    }

    const storedUser = localStorage.getItem("userCadastro");
    if (storedUser) {
      const { nome, senha } = JSON.parse(storedUser);
      if (dataForm.nome === nome && dataForm.senha === senha) {
        console.log("Login bem-sucedido:", dataForm);
        navigate("/area-cliente");
      } else {
        alert("Nome ou senha incorretos.");
      }
    } else {
      alert("Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  return (
    <FormContainer>
      <Header />
      <BackgroundImage src={imgbg} alt="Imagem de Fundo" />
      <Box>
        <Title>REALIZAR LOGIN</Title>
        <ContactInfo>
          Não tem uma conta? <br />
          <Link to="/cadastro">Cadastre-se</Link>
        </ContactInfo>
        <Form onSubmit={handleSubmit}>
          <Row>
            <StyledInput
              type="text"
              placeholder="Nome"
              name="nome"
              onChange={handleChange}
            />
            <StyledInput
              type="password"
              placeholder="Senha"
              name="senha"
              onChange={handleChange}
            />
          </Row>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
        <ForeignKey>Esqueceu a Senha?</ForeignKey>
        <img className={porto.logo} src={logoMarca} alt="Logo Marca" />
        {/* Usando a classe do CSS module */}
      </Box>
    </FormContainer>
  );
};

export default RealizarLogin;

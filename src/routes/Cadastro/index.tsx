import React, { useRef } from "react";
import { Header } from "../../components/molecules/header";
import { useNavigate } from "react-router-dom";
import StyledInput from "./StyledInput"; // Importando o StyledInput
import logoMarca from "./../../assets/logoMarcaPorto copy.png";
import styles from "./LogoMarca.module.css";

import {
  FormContainer,
  Box,
  Title,
  ContactInfo,
  Form,
  SubmitButton,
  ForeignKey,
  InputGroup, // New InputGroup component for layout
} from "./Cadastro.Styled";

const RealizarCadastro = () => {
  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const senhaRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const nomeRegex = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nome = nomeRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const senha = senhaRef.current?.value || "";
    const cpf = cpfRef.current?.value || ""; // Capturando o valor do CPF

    if (!nome || !email || !senha || !cpf) {
      alert("Todos os campos são obrigatórios");
      return;
    }

    if (!nomeRegex.test(nome)) {
      alert("O nome deve ter pelo menos 3 caracteres e conter apenas letras.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (!senhaRegex.test(senha)) {
      alert(
        "A senha deve ter pelo menos 8 caracteres, com uma letra maiúscula, uma letra minúscula, um número e um símbolo."
      );
      return;
    }

    if (!cpfRegex.test(cpf)) {
      alert("Por favor, insira um CPF válido (formato: 000.000.000-00).");
      return;
    }

    const userCadastro = { nome, email, senha, cpf };
    localStorage.setItem("userCadastro", JSON.stringify(userCadastro));

    console.log("Cadastro enviado:", userCadastro);
    navigate("/login");
  };

  return (
    <FormContainer>
      <Header />
      <Box>
        <Title>REALIZAR CADASTRO</Title>
        <ContactInfo>
          Ao se cadastrar, você <br />
          concorda com nossos Termos, <br />
          <span>
            Política de Privacidade e <br /> Política de Cookies.
          </span>
        </ContactInfo>
        <Form className="formContainer" onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Nome Completo"
            name="nome"
            ref={nomeRef}
          />
          <StyledInput
            type="email"
            placeholder="E-mail"
            name="email"
            ref={emailRef}
          />
          <InputGroup>
            <StyledInput
              type="password"
              placeholder="Senha"
              name="senha"
              ref={senhaRef}
            />
            <StyledInput
              type="text"
              placeholder="CPF"
              name="cpf"
              ref={cpfRef}
            />
          </InputGroup>
          <SubmitButton type="submit">Cadastre-se</SubmitButton>
        </Form>
        <ForeignKey>Tem uma conta? Conecte-se</ForeignKey>
        <img className={styles.logo} src={logoMarca} alt="Logo Marca" />
      </Box>
    </FormContainer>
  );
};

export default RealizarCadastro;

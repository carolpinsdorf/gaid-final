import React, { useRef } from "react";
import styles from "./Cadastro.module.css";
import { Header } from "../../components/molecules/header";
import { useNavigate } from "react-router-dom";
import Input from "../../components/molecules/input";
import logoMarca from "./../../assets/logoMarcaPorto copy.png";

const RealizarCadastro = () => {
  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const senhaRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const nomeRegex = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const cpfRegex = /^\d{11}$/; // Regex para validar CPF (11 dígitos)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nome = nomeRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const senha = senhaRef.current?.value || "";
    const cpf = cpfRef.current?.value || ""; // Obtendo o valor do CPF

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
      alert("O CPF deve ter exatamente 11 dígitos.");
      return;
    }

    const userCadastro = { nome, email, senha, cpf }; // Incluindo CPF no objeto
    localStorage.setItem("userCadastro", JSON.stringify(userCadastro));

    console.log("Cadastro enviado:", userCadastro);
    navigate("/login");
  };

  return (
    <div className={styles.formContainer}>
      <Header />
      <div className={styles.box}>
        <h2 className={styles.title}>REALIZAR CADASTRO</h2>
        <p className={styles.contactInfo}>
          Ao se cadastrar, você <br />
          concorda com nossos Termos, <br />
          <span>
            Política de Privacidade e <br /> Política de Cookies.
          </span>
        </p>
        <form onSubmit={handleSubmit} className={styles.container}>
          <div className={styles.row}>
            <Input
              type="text"
              label="Nome Completo"
              name="nome"
              ref={nomeRef}
            />
            <Input type="email" label="E-mail" name="email" ref={emailRef} />
          </div>
          <div className={styles.row}>
            <Input type="password" label="Senha" name="senha" ref={senhaRef} />
            <Input type="text" label="CPF" name="cpf" ref={cpfRef} />
          </div>
          <button type="submit" className={styles.submitButton}>
            Cadastre-se
          </button>
        </form>
        <p className={styles.foreignKey}>Tem uma conta? Conecte-se</p>
        <a
          href="https://www.portoseguro.com.br/centros-automotivos-porto-seguro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoMarca} alt="Logo Marca" />
        </a>
      </div>
    </div>
  );
};

export default RealizarCadastro;

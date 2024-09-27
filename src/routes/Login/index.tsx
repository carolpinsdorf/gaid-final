import { useState } from "react";
import styles from "./Login.module.css";
import logoMarca from "./../../assets/logoMarcaPorto copy.png";
import imgbg from "./../../assets/imgSignIn copy.png";
import { Header } from "../../components/molecules/header";
import Input from "../../components/molecules/input";
import { Link, useNavigate } from "react-router-dom";

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
    <div className={styles.formContainer}>
      <Header />
      <img className={styles.imgbg} src={imgbg} alt="Imagem de Fundo" />
      <div className={styles.box}>
        <h2 className={styles.title}>REALIZAR LOGIN</h2>
        <p className={styles.contactInfo}>
          Não tem uma conta? <br />
          <Link to="/cadastro"> Cadastre-se</Link>
        </p>
        <form onSubmit={handleSubmit} className={styles.container}>
          <div className={styles.row}>
            <Input
              type="text"
              label="Nome"
              name="nome"
              onChange={handleChange}
            />
            <Input
              type="password"
              label="Senha"
              name="senha"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
        <p className={styles.foreignKey}>Esqueceu a Senha?</p>
        <img className={styles.logoMarca} src={logoMarca} alt="Logo Marca" />
      </div>
    </div>
  );
};

export default RealizarLogin;

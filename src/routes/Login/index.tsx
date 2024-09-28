import { useState, useEffect } from "react";
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
  const [animationActive, setAnimationActive] = useState(false);
  const [buttonAnimation, setButtonAnimation] = useState(false); // Estado para a animação do botão
  const navigate = useNavigate();

  useEffect(() => {
    setAnimationActive(true);
  }, []);

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
        setButtonAnimation(true); // Ativa a animação do botão
        setTimeout(() => {
          navigate("/area-cliente");
        }, 500); // Espera a animação terminar antes de navegar
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

  const redirectToPortoSeguro = () => {
    window.location.href =
      "https://www.portoseguro.com.br/centros-automotivos-porto-seguro";
  };

  return (
    <div
      className={`${styles.formContainer} ${
        animationActive ? styles.fadeIn : styles.hidden
      }`}
    >
      <Header />
      <img
        className={`${styles.imgbg} ${
          animationActive ? styles.fadeIn : styles.hidden
        }`}
        src={imgbg}
        alt="Imagem de Fundo"
      />
      <div
        className={`${styles.box} ${
          animationActive ? styles.fadeIn : styles.hidden
        }`}
      >
        <h2
          className={`${styles.title} ${
            animationActive ? styles.fadeIn : styles.hidden
          }`}
        >
          REALIZAR LOGIN
        </h2>
        <p
          className={`${styles.contactInfo} ${
            animationActive ? styles.fadeIn : styles.hidden
          }`}
        >
          Não tem uma conta? <br />
          <Link to="/cadastro"> Cadastre-se</Link>
        </p>
        <form
          onSubmit={handleSubmit}
          className={`${styles.container} ${
            animationActive ? styles.fadeIn : styles.hidden
          }`}
        >
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
          <button
            type="submit"
            className={`${styles.submitButton} ${
              buttonAnimation ? styles.pulse : ""
            }`}
          >
            Enviar
          </button>
        </form>
        <p
          className={`${styles.foreignKey} ${
            animationActive ? styles.fadeIn : styles.hidden
          }`}
        >
          Esqueceu a Senha?
        </p>
        <img
          className={`${styles.logoMarca} ${
            animationActive ? styles.fadeIn : styles.hidden
          }`}
          src={logoMarca}
          alt="Logo Marca"
          onClick={redirectToPortoSeguro}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default RealizarLogin;

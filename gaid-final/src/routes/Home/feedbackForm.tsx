import { useState } from "react";
import styles from "./FeedbackForm.module.css";
import Input from "../../components/input";

// Definição da interface para o estado do formulário
interface FormData {
  experiencia: string;
  nome: string;
  email: string;
}

const FeedbackForm = () => {
  // Estado inicial do formulário com tipagem
  const stateInitialForm: FormData = {
    experiencia: "",
    nome: "",
    email: "",
  };

  // Hook de estado para armazenar os dados do formulário
  const [dataForm, setDataform] = useState<FormData>(stateInitialForm);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Estado para a mensagem de sucesso

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Feedback enviado:", dataForm);
    
    // Exibir a mensagem de sucesso
    setSuccessMessage("Feedback enviado com sucesso!");

    // Resetar o formulário
    setDataform(stateInitialForm);

    // Remover a mensagem após 2 segundos
    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);
  };

  // Função para lidar com mudanças nos inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataform({ ...dataForm, [name]: value });
  };

  return (
    <div className={styles.formContainer}>
      <div>
        <h2 className={styles.title}>Queremos seu feedback</h2>
        <p className={styles.contactInfo}>
          Suporte via e-mail: <br />
          <a href="mailto:suporte@gaid.com" className={styles.emailLink}>suporte@gaid.com</a>
          <br />
          SAC: <br />
          (11) 5551-30
        </p>
        <div className={styles.container}>
          <Input
            type="text"
            label="DESCREVA SUA EXPERIENCIA:"
            name="experiencia"
            value={dataForm.experiencia} // Passar valor do estado
            onChange={handleChange}
          />
          <div className={styles.row}>
            <Input
              type="text"
              label="Nome"
              name="nome"
              value={dataForm.nome} // Passar valor do estado
              onChange={handleChange}
            />
            <Input
              type="email"
              label="Email"
              name="email"
              value={dataForm.email} // Passar valor do estado
              onChange={handleChange}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <button type="submit" className={styles.submitButton}>Enviar</button>
          </form>
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>} {/* Exibir mensagem de sucesso abaixo do botão */}
        </div>
      </div>
      <div className={styles.address}>
        <p>Av. Paulista, 106 7º andar - Bela Vista, São Paulo-SP, 0131-000</p>
        <div>
          <span><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Fb.</a></span>
          <span><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Tw.</a></span>
          <span><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">In.</a></span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;

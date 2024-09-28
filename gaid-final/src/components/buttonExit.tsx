import { useNavigate } from 'react-router-dom';
import styles from './buttonExit.module.css'; // Ajuste o caminho conforme necessário
import imgSair from "../assets/iconSair copy.png"

const ButtonExit = () => {
  const navigate = useNavigate(); // Cria uma instância do navigate

  // Função para voltar à página anterior
  const handleGoBack = () => {
    navigate(-1); // Navega para a página anterior
  };

  return (
    <div className='divBotao'>
      <img
        src={imgSair} // Fonte da imagem
        alt="Voltar"
        className={styles.buttonExit}
        onClick={handleGoBack} // Função para voltar
      />
    </div>  
  );
};

export default ButtonExit;

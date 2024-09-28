import { useEffect } from 'react';
import styles from "./areaDoCliente.module.css";
import { Header } from "../../components/header";
import img from "../../assets/iconAreaDoCliente copy.png";
import img1 from "../../assets/iconAreaDoCliente1 copy.png";
import img2 from "../../assets/iconAreaDoCliente2 copy.png";
import { Link } from "react-router-dom";
import ButtonExit from "../../components/buttonExit";

const AreaDoCliente = () => {
  useEffect(() => {
    // Carregar o script do Watson Assistant quando o componente for montado
    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Configurações do Watson Assistant
      window.watsonAssistantChatOptions = {
        integrationID: 'YOUR_INTEGRATION_ID', // Substitua pelo seu ID de integração
        region: 'YOUR_REGION', // Substitua pela sua região
        serviceInstanceID: 'YOUR_SERVICE_INSTANCE_ID', // Substitua pelo seu ID de instância de serviço
        onLoad: (instance: any) => {
          instance.render();
        },
      };
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleButtonClick = () => {
    if (window.watsonAssistantChatOptions) {
      // A instância do Watson Assistant deve ser aberta
      const chatInstance = window.watsonAssistantChatOptions;
      if (chatInstance.onLoad) {
        chatInstance.onLoad({
          render: () => {
            // Abre a janela de chat
            const instance = window.watsonAssistantChatOptions.instance;
            if (instance) {
              instance.open();
            }
          },
        });
      }
    } else {
      console.error("Chat instance not available");
    }
  };

  return (
    <div className={styles.formContainer}>
      <Header title="Área Do Cliente" />
      <div className={styles.container}>
        <div className={styles.box} onClick={handleButtonClick}>
          <div className={styles.boxImage}>
            <img className={styles.img} src={img} alt="Converse com Galdí" />
          </div>
          <div className={styles.descricao}>
            <p>CONVERSAR COM GALDÍ</p>
          </div>
        </div>
        <Link to={'/agendamento'}>
          <div className={styles.box}>
            <div className={styles.boxImage}>
              <img className={styles.img} src={img1} alt="Agendamentos" />
            </div>
            <div className={styles.descricao}>
              <p>AGENDAMENTOS</p>
            </div>
          </div>
        </Link>
        <Link to={'/cadastro-veiculo'}>
          <div className={styles.box}>
            <div className={styles.boxImage}>
              <img className={styles.img} src={img2} alt="Visualizar E-Garagem" />
            </div>
            <div className={styles.descricao}>
              <p>VISUALIZAR E-GARAGEM</p>
            </div>
          </div>
        </Link>
      </div>
      <ButtonExit />
      <p className={styles.exitMessage}>.</p> {/* Mensagem de saída */}
    </div>
  );
};

export default AreaDoCliente;

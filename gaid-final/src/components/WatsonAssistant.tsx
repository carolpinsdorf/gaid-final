import React, { useEffect } from 'react';
import styled from 'styled-components';

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const WatsonAssistant: React.FC = () => {
  useEffect(() => {
    const loadWatsonScript = () => {
      // Check if the Watson script is already loaded
      if (document.getElementById('watson-script')) return;

      // Set up Watson Assistant options
      window.watsonAssistantChatOptions = {
        integrationID: "470f997b-7122-45aa-b4d9-f6068ad86db8",
        region: "au-syd",
        serviceInstanceID: "24f1b7e2-df1b-4180-8230-180b23979402",
        onLoad: async (instance: any) => { await instance.render(); }
      };

      // Create script element and append it to the document head
      const script = document.createElement('script');
      script.id = 'watson-script';
      script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
      script.async = true;
      document.head.appendChild(script);
    };

    loadWatsonScript();

    return () => {
      const script = document.getElementById('watson-script');
      if (script) document.head.removeChild(script);
    };
  }, []);

  const handleChatButtonClick = () => {
    if (window.watsonAssistantChatOptions) {
      const instance = (window as any).WatsonAssistantChat;
      if (instance) {
        instance.render();
      }
    }
  };

  return (
    <ChatButton onClick={handleChatButtonClick}>Conversar com Galdí</ChatButton>
  );
};

export default WatsonAssistant;
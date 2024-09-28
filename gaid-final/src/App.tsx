import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AreaDoCliente from "./routes/AreaCliente/areaDoCliente"; // Certifique-se de que este componente é exportado corretamente
import Navbar from "./components/navbar";




// Importando todos os componentes da Home
import { Hero, Hero2, Hero3, Hero4, FeedbackForm } from "./routes/Home"; // Supondo que você tenha index.tsx

declare global {
  interface Window {
    watsonAssistantChatOptions: any;
  }
}

window.watsonAssistantChatOptions = {
  integrationID: "470f997b-7122-45aa-b4d9-f6068ad86db8",
  region: "au-syd",
  serviceInstanceID: "24f1b7e2-df1b-4180-8230-180b23979402",
  onLoad: async (instance: any) => { await instance.render(); }
};

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/cadastro", "/area-cliente", "/agendamento", "/cadastro-veiculo"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <section id="hero">
              <Hero />
            </section>
            <section id="cardiag">
              <Hero2 />
            </section>
            <section id="cdscanner">
              <Hero3 />
            </section>
            <section id="empresa">
              <Hero4 />
            </section>
            <section id="suporte">
              <FeedbackForm />
            </section>
          </>
        } />

        
        
        {/* Roteamento da Área do Cliente */}
        <Route path="/area-cliente/*" element={<AreaDoCliente />} /> {/* Roteamento filho para a área do cliente */}
        
        
      </Routes>
    </>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;

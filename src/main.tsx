import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home/index.tsx";
import Login from "./routes/Login/index.tsx";
import Cadastro from "./routes/Cadastro/index.tsx";
import AreaCliente from "./routes/AreaCliente/index.tsx";
import Garagem from "./routes/Garagem/index.tsx";
import Agendamento from "./routes/Agendamento/index.tsx";

import GlobalStyle from "./global-style.ts";

// rotas das páginas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/areacliente",
        element: <AreaCliente />,
      },
      {
        path: "/areacliente/garagem",
        element: <Garagem />,
      },
      {
        path: "areacliente/agendamento",
        element: <Agendamento />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>
);

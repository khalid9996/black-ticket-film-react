import { useRoutes } from "react-router-dom";
import Btf from "./pages/Btf";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Awards from "./pages/Awards/Awards";
import Team from "./pages/Team/Team";
import Milestones from "./pages/Milestones/Milestones";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Btf />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/awards", element: <Awards /> },
        { path: "/team", element: <Team /> },
        { path: "/milestones", element: <Milestones /> },
        { path: "/clients", element: <Clients /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    {
      path: "*",
      element: <h1>error</h1>,
    },
  ]);

  return elements;
};

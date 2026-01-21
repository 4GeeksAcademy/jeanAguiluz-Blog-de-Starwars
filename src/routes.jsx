// Importar los componentes y funciones necesarias de react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // La función createRoutesFromElements permite construir elementos de ruta de manera declarativa.
    // Crea tus rutas aquí; si quieres mantener la Navbar y el Footer en todas las vistas, agrega tus nuevas rutas dentro de la Route contenedora.
    // Root, en cambio, crea una Route hermana; si tienes dudas, ¡pruébalo!
    // Nota: ten en cuenta que errorElement será la página por defecto cuando no encuentres una ruta, personaliza esa página para hacer tu proyecto más atractivo.
    // Nota: Las rutas hijas del elemento Layout reemplazan el componente Outlet con los elementos contenidos en el atributo "element" de estas rutas hijas.

    // Ruta raíz: toda la navegación comenzará desde aquí.
    <Route path="/" element={<Layout />} errorElement={<h1>¡No encontrado!</h1>} >

      {/* Rutas anidadas: Define sub-rutas dentro del componente BaseHome. */}
      <Route path="/" element={<Home />} />
      <Route path="/:type/:id" element={<Single />} /> {/* Ruta dinámica para elementos individuales */}
      <Route path="/demo" element={<Demo />} />
    </Route>
  )
);
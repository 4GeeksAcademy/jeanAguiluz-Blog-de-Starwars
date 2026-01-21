import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Estilos globales para tu aplicación
import { RouterProvider } from "react-router-dom";  // Importar RouterProvider para usar el router
import { router } from "./routes";  // Importar la configuración del router
import { StoreProvider } from './hooks/useGlobalReducer';  // Importar el StoreProvider para la gestión del estado global

const Main = () => {
    return (
        <React.StrictMode>
            {/* Proporcionar el estado global a todos los componentes */}
            <StoreProvider>
                {/* Configurar el enrutamiento para la aplicación */}
                <RouterProvider router={router}>
                </RouterProvider>
            </StoreProvider>
        </React.StrictMode>
    );
}

// Renderizar el componente Main en el elemento raíz del DOM.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
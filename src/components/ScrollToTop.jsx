import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Este componente permite que el scroll vaya al inicio al cambiar de vista,
// de lo contrario permanecería en la posición de la vista anterior.
// Investiga más sobre este comportamiento de React :D

const ScrollToTop = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
};

export default ScrollToTop;
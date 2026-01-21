// Importar los componentes necesarios de react-router-dom y de otras partes de la aplicación.
import { Link } from "react-router-dom";
import { useGlobalReducer } from "../hooks/useGlobalReducer";  // Hook personalizado para acceder al estado global.

export const Demo = () => {
    // Acceder al estado global y a la función dispatch usando el hook useGlobalReducer.
    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container">
            <ul className="list-group">
                {/* Recorrer el arreglo 'todos' del store y renderizar cada elemento como un elemento de lista */}
                {store && store.todos?.map((item) => {
                    return (
                        <li
                            key={item.id}  // Key de React para los elementos de la lista.
                            className="list-group-item d-flex justify-content-between"
                            style={{ background: item.background }}>

                            {/* Enlace a la página de detalle de este todo. */}
                            <Link to={"/single/" + item.id}>Link to: {item.title} </Link>

                            <p>Abre el archivo ./store.js para ver el store global que contiene y actualiza la lista de colores</p>

                            <button className="btn btn-success"
                                onClick={() => dispatch({
                                    type: "add_task",
                                    payload: { id: item.id, color: '#ffa500' }
                                })}>
                                Change Color
                            </button>
                        </li>
                    );
                })}
            </ul>
            <br />

            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
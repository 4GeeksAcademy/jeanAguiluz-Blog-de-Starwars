// Importar los hooks y componentes necesarios de react-router-dom y otras librerías.
import { useParams } from "react-router-dom";  // Para usar Link para la navegación y useParams para obtener parámetros de la URL
import { useGlobalReducer } from "../hooks/useGlobalReducer";  // Importar un hook personalizado para acceder al estado global
import { useEffect, useState } from "react";


// Definir y exportar el componente Single que muestra los detalles de un elemento individual.
export const Single = () => {
    const { type, id } = useParams()
    const { store } = useGlobalReducer()
    const [detail, setDetail] = useState(null)

    useEffect(() => {

        //fetch detalles Learn more

        const getDetail = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`);

                if (!res.ok) {
                    console.log("Error en fetch details", res.status);
                    return;
                }

                const data = await res.json();
                setDetail(data.result);

            } catch (error) {
                console.log("Error en fetch", error);
            }
        };

        getDetail();

    }, [type, id]);


    return (
        <div className="container mt-5">
            {detail === null ? (<p className="text-center text-white">Loading...</p>
            ) : (
                <>

                    <h1 className="text-center text-warning mb-4">{detail.properties?.name || "Unknown"}</h1>

                    <div className="row">


                        <div className="col-md-12 text-white">

                            {type === "people" && (
                                <>
                                    <img
                                        src="https://hips.hearstapps.com/hmg-prod/images/baby-yoda-nombre-1606753349.jpg?crop=1.00xw:1.00xh;0,0"
                                        alt="#"
                                        className="img-fluid mb-3"
                                        style={{ width: "300px", borderRadius: "10px" }}
                                    />
                                    <h4>Descripción</h4>
                                    <hr />
                                    <p>Gender: {detail.properties.gender}</p>
                                    <p>Birthday: {detail.properties.birth_year}</p>
                                    <p>Hair color: {detail.properties.hair_color}</p>
                                    <p>Eye colors: {detail.properties.eye_color}</p>
                                    <p>Height: {detail.properties.height}</p>
                                </>
                            )}
                            {type === "planets" && (
                                <>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Coruscant.jpg"
                                        alt="#"
                                        className="img-fluid mb-3"
                                        style={{ width: "300px", borderRadius: "10px" }}
                                    />
                                    <h4>Descripción</h4>
                                    <hr />
                                    <p>Climate: {detail.properties.climate}</p>
                                    <p>Terrain: {detail.properties.terrain}</p>
                                    <p>Population: {detail.properties.population}</p>
                                    <p>Gravity: {detail.properties.gravity}</p>
                                </>
                            )}
                            {type === "vehicles" && (
                                <>
                                    <img
                                        src="https://i.ytimg.com/vi/UIHOqUxaK4o/sddefault.jpg"
                                        alt="#"
                                        className="img-fluid mb-3"
                                        style={{ width: "300px", borderRadius: "10px" }}
                                    />
                                    <h4>Descripción</h4>
                                    <hr />
                                    <p>Model: {detail.properties.model}</p>
                                    <p>Created: {detail.properties.created}</p>
                                    <p>Vehicle class: {detail.properties.vehicle_class}</p>
                                    <p>Manufacturer: {detail.properties.manufacturer}</p>
                                    <p>Credit: {detail.properties.credit}</p>
                                </>
                            )}

                        </div>
                    </div>
                </>
            )}


        </div>
    )
};
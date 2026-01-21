import React from 'react';
import { FaHeart, FaPeopleCarry } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalReducer } from '../hooks/useGlobalReducer';

const useFavorite = (item, itemType) => {
    const { store, dispatch } = useGlobalReducer();
    const isFav = store.favorites.some(fav => fav.uid === item.uid && fav.type === itemType);

    const favorite = () => {
        if (isFav) {
            dispatch({
                type: "REMOVE_FAVORITE",
                payload: item.uid
            });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: {
                    uid: item.uid,
                    name: item.properties.name,
                    type: itemType
                }
            });
        }
    };

    return { isFav, favorite };
};

export const CardsCharacter = ({ character }) => {
    const { isFav, favorite } = useFavorite(character, "people");


    return (
        <div className='card-character mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-white rounded'>
            <img
                src="https://hips.hearstapps.com/hmg-prod/images/baby-yoda-nombre-1606753349.jpg?crop=1.00xw:1.00xh;0,0"
                alt="#"
                className="img-fluid mb-3"
                style={{ width: "300px", borderRadius: "10px" }}
            />

            <div className='card-body ms-3 mt-3'>
                <h5 className="card-title text-danger">{character.properties.name}</h5>
                <br />
                <p className="card-text text-light">Gender: {character.properties.gender}</p>
                <p className="card-text text-light">Hair Color: {character.properties.hair_color}</p>
                <p className="card-text text-light">Eyes Color: {character.properties.eye_color}</p>
            </div>

            <div className="card-footer ms-3 mt-5 d-flex justify-content-between ">
                <Link to={`/people/${character.uid}`} className="btn btn-dark border border-warning text-warning">Learn More</Link>
                <button className='button-heart' onClick={favorite}><FaHeart className="heart-icon" style={{ color: isFav ? "yellow" : "white" }} /></button>
            </div>
        </div>

    );
};

export const CardsPlanet = ({ planet }) => {
    const { isFav, favorite } = useFavorite(planet, "planets");

    return (
        <div className='card-planet mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-white rounded'>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Coruscant.jpg"
                alt="#"
                className="img-fluid mb-3"
                style={{ width: "300px", borderRadius: "10px" }}
            />
            <div className='card-body ms-3 mt-5'>
                <h5 className="card-title mt-4 text-danger fw-bold">{planet.properties.name}</h5>
                <br />
                <p className="card-text">Climate: {planet.properties.climate}</p>
                <p className="card-text">Terrain: {planet.properties.terrain}</p>
            </div>
            <div className="card-footer s-3 mt-5 d-flex justify-content-between">
                <Link to={`/planets/${planet.uid}`} className="btn btn-dark border border-success text-warning">Learn More</Link>
                <button className='button-heart' onClick={favorite}><FaHeart className="heart-icon" style={{ color: isFav ? "yellow" : "white" }} /></button>
            </div>
        </div>
    )
}

export const CardsVehicle = ({ vehicle }) => {
    const { isFav, favorite } = useFavorite(vehicle, "vehicles");
    return (
        <div className='card-vehicle mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-light rounded'>
            <img
                src="https://i.ytimg.com/vi/UIHOqUxaK4o/sddefault.jpg"
                alt="#"
                className="img-fluid mb-3"
                style={{ width: "300px", borderRadius: "10px" }}
            />
            <div className='card-body ms-3 mt-4'>
                <h5 className="card-title text-danger">{vehicle.properties.name}</h5>
                <br />
                <p className="card-text">Model: {vehicle.properties.model}</p>
                <p className="card-text">Crew: {vehicle.properties.crew}</p>
                <p className="card-text">Passengers: {vehicle.properties.passengers}</p>
            </div>
            <div className="card-footer s-3 mt-5 d-flex justify-content-between">
                <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-dark border border-success text-warning">Learn More</Link>
                <button className='button-heart' onClick={favorite}><FaHeart className="heart-icon" style={{ color: isFav ? "yellow" : "white" }} /></button>
            </div>

        </div>
    );
};
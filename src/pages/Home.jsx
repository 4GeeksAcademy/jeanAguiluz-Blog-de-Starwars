import React, { useState, useEffect } from 'react';
import { CharacterList } from '../components/CharacterList';
import { PlanetList } from '../components/PlanetList';
import { VehicleList } from '../components/VehiculeList';


const Home = () => {

	//estados

	const [characterList, setCharacterList] = useState([]);
	const [planetList, setPlanetList] = useState([]);
	const [vehicleList, setVehicleList] = useState([]);


	useEffect(() => {

		//fetch characters

		const getCharacterList = async () => {
			const res = await fetch("https://www.swapi.tech/api/people/?expanded=true");
			const data = await res.json();

			if (!res.ok) {
				console.log("Error en fetch characters", res.status);
			}
			else {
				setCharacterList(data.results);
			}
		};

		//fetch planets

		const getPlanetList = async () => {
			const res = await fetch("https://www.swapi.tech/api/planets/?expanded=true");
			const data = await res.json();

			if (!res.ok) {
				console.log("Error en fetch planets", res.status);
			}
			else {
				setPlanetList(data.results);
			}
		};

		//fetch vehicles

		const getVehicleList = async () => {
			const res = await fetch("https://www.swapi.tech/api/vehicles/?expanded=true");
			const data = await res.json();

			if (!res.ok) {
				console.log("Error en fetch vehicles", res.status);
			}
			else {
				setVehicleList(data.results);
			}
		};

		//funciones para traer los datos

		getCharacterList();
		getPlanetList();
		getVehicleList();

	}, []);

	//renderizo
	return (
		<div className="">
			<h1 className='character-title text-light-emphasis border-bottom border-dark border-3 mt-5'>Characters</h1>
			<br></br>
			<CharacterList characters={characterList} />

			<h1 className='planet-title text-dark-emphasis border-bottom border-dark border-3 mt-5 '>Planets</h1>
			<br></br>
			<PlanetList planets={planetList} />

			<h1 className='vehicle-title text-dark-emphasis border-bottom border-dark border-3 mt-5 '>Vehicles</h1>
			<br></br>
			<VehicleList vehicles={vehicleList} />
		</div>
	);
};

export default Home;
import React from 'react';
import { CardsPlanet } from "../components/Cards";

export const PlanetList = ({ planets }) => {
    return (
        <div className="d-flex text-wrap gap-3 w-100 overflow-auto" style={{ whiteSpace: 'nowrap' }}>
            {planets.map((planet) => (
                <div key={planet.uid} className="col-md-2 col-sm-6 mb-4">
                    <CardsPlanet planet={planet} />
                </div>
            ))}
        </div>
    );
};
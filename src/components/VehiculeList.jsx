import React from "react";
import { CardsVehicle } from "../components/Cards";

export const VehicleList = ({ vehicles }) => {
    return (
        <div className="d-flex text-wrap gap-3 w-100 overflow-auto" style={{ whiteSpace: 'nowrap' }}>
            {vehicles.map((vehicle) => (
                <div key={vehicle.uid} className="col-md-2 col-sm-6 mb-4">
                    <CardsVehicle vehicle={vehicle} />
                </div>
            ))}
        </div>
    );
};
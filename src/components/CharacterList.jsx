import React from 'react';
import { CardsCharacter } from "../components/Cards";

export const CharacterList = ({ characters }) => {
    return (
        <div className="d-flex text-wrap gap-3 w-100 overflow-auto" style={{ whiteSpace: 'nowrap' }}>
            {characters.map((character) => (
                <div key={character.uid} className="col-md-2 col-sm-6 mb-4">
                    <CardsCharacter character={character} />
                </div>
            ))}
        </div>
    );
};
import React, { useState } from 'react';
import useDropdown from './useDropdown';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Choose a location" />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;
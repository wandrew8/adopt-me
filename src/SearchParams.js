import React, { useState, useEffect } from 'react';
import useDropdown from './useDropdown';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    async function requestPets() {
        console.log('This is working')
        const { animals } = await pet.animals({
          location,
          breed,
          type: animal
        });
    
        console.log("animals", animals);
    
        setPets(animals || []);
      }

    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name)
            setBreeds(breedStrings);
        }, console.error)
    }, [animal, setBreeds])

    return (
        <div className="search-params">
             <form
                onSubmit={e => {
                e.preventDefault();
                requestPets();
                }}>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        onChange={e => setLocation(e.target.value)} 
                        placeholder="Choose a location" />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams;
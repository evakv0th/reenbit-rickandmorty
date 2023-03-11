
import './index.css' 
import { useState, useEffect } from 'react';

import React from 'react'

const Cards = () => {
  let api = `https://rickandmortyapi.com/api/character/`;
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api)
        const data = await response.json();
        setCharacters(data.results);
      } catch (e) {
        console.log('error', e);
      }
    }
    fetchData();
    }, []);
    // setCharacters(characters.name.sort((a,b) => a-b))

  return (
    <div className='card'>
      {characters.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }).map((character) => {
        return (
          <div key={character.id}>
          <section className='box'>
            <img alt={character.name} src={character.image}></img>
            <h2>{character.name}</h2>
            <p>{character.species}</p>
            </section>
          </div>
        )
      })}
    
    </div>
  );
}

export default Cards

import './index.css' 
import { useState, useEffect } from 'react';

import React from 'react'

const Cards = () => {
  const [searchVal, setSearchVal] = useState('');
  const [characters, setCharacters] = useState([]);
  const [hasResults, setHasResults] = useState(true);
  
   async function fetchData() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchVal}`)
        const data = await response.json();
        setCharacters(data.results);
        setHasResults(data.length > 0)
      } catch (e) {
        console.log('error', e);
      }
    }
  

    useEffect(() => {
      fetchData();
    }, [searchVal])

 
    const searchItems = (searchItem) => {
      setSearchVal(searchItem)
      
    }

  return (
    <div>
    <input icon='search' type='text' onChange={(e) => searchItems(e.target.value)} className='user-input' placeholder='Filter by name...'></input>
    <div  className='card'>
      {(!hasResults) ? (
        characters.sort(function(a, b) {
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
      })
      ) : (<p>No results found, please reload the page</p>)
      }
      </div>
    </div>
  );
}

export default Cards
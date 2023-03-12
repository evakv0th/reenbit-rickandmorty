
import './index.css' 
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import React from 'react'
import { Link } from "react-router-dom";


const Cards = () => {
  const [searchVal, setSearchVal] = useState(localStorage.getItem('searchVal') || '');
  const [characters, setCharacters] = useState([]);
  
  async function fetchData() {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchVal}`)
      const data = await response.json();
      setCharacters(data.results);
    } catch (e) {
      console.log('error', e);
    }
  }
  
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal]);

  const searchItems = (searchItem) => {
    setSearchVal(searchItem);
    localStorage.setItem('searchVal', searchItem);
  }

  return (
    <div>
      <img src={logo} alt='rick and morty' className='header'></img>
      <input icon='search' type='text' value={searchVal} onChange={(e) => searchItems(e.target.value)} className='user-input' placeholder='Filter by name...'></input>
      <div className='card'>
        {characters && characters.length > 0 ? 
          characters.sort(function(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          }).map((character) => {
            return (
              <div key={character.id}>
                <Link to={`/character/${character.id}`}>
                  <section className='box'>
                    <img alt={character.name} src={character.image}></img>
                    <h2>{character.name}</h2>
                    <p>{character.species}</p>
                  </section>
                </Link>
              </div>
            )
          })
          : <p>No characters found. Please check your search term.</p>
        }
      </div>
    </div>
  );
}

export default Cards
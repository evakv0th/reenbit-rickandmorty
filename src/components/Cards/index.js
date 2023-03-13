
import './index.css' 
import { useState, useEffect} from 'react';
import logo from '../assets/logo.png'
import React from 'react'
import { Link } from "react-router-dom";


const Cards = () => {
  

  // creating consts for "search" in input. localStorage.getItem is for search to stay on input when refreshing page
  const [searchVal, setSearchVal] = useState(localStorage.getItem('searchVal') || '');


  // consts for characters and debouncedValue using useState
  const [characters, setCharacters] = useState([]);
  const [debouncedValue, setDebouncedValue] = useState('')
  


// Calling API with useEffect, debouncedValue is added so when user types something in input it won't call API with every symbol being typed. 
// I'm using API params query filtering, searchVal variable is what user types in input and so we are filtering API results and setting characters to match the filter.
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedValue(async function fetchData() {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchVal}`)
          const data = await response.json();
          setCharacters(data.results);
        } catch (e) {
          console.log('error', e);
        }
      })
    }, 400)

  return () => clearTimeout(delayDebounce) 
}, [searchVal, debouncedValue]);
 


// function for searching items, localStorage.getItem is for search to stay on input when refreshing page
  const searchItems = (searchItem) => {
    setSearchVal(searchItem);
    localStorage.setItem('searchVal', searchItem);
  }


  return (
    <div>
    {/*  img Rick and Morty and input */}
      <img src={logo} alt='rick and morty' className='header'></img>
      <input icon='search' type='text' value={searchVal} onChange={(e) => searchItems(e.target.value)} className='user-input' placeholder='Filter by name...'></input>

      {/* div with list of cards */}
      <div className='card'>

      {/* checking if characters is not empty and not null - then sorting in alphabetical order and mapping through array to return cards of characters */}
        {characters && characters.length > 0 ? 
          characters.sort(function(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          }).map((character) => {
            return (
              <div key={character.id} className='single-card'>

              {/* Used Link from react to redirect to card page of exact character that was clicked by user */}
                <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }} className='linker'>
                  <div className='box'>
                    <img alt={character.name} src={character.image}></img>
                    <h2>{character.name}</h2>
                    <p>{character.species}</p>
                  </div>
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
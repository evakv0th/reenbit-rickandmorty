

import './index.css' 
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Characters = (props) => {
    const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  return (
            <div>
             <Link to="/">Go back to list</Link>
            <img src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
            <p className='info-char'>Information</p>
            <div className='info-box'>
            <h2>Gender</h2>
            <p>{character.gender}</p>
            <h2>Status</h2>
            <p>{character.status}</p>
            <h2>Specie</h2>
            <p>{character.species}</p>
            <h2>Origin</h2>
            <p>{character.origin ? character.origin.name : 'unknown'}</p>
            <h2>type</h2>
            <p>{character.type ? character.type : 'unknown'}</p>
            </div>
         </div> 
         )
 };

export default Characters

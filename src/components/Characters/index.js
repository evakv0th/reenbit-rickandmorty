

import './index.css' 
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Characters = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});


  // useEffect to call API of exact character with exact id
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  return (
            <div>

            {/* Link from react to GO BACK button */}
             <Link to="/" className='link'> &#8592; GO BACK</Link>
             {/* main div which contains info about character  */}
             <div className='main'>
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
                 <h2>Type</h2>
                  <p>{character.type ? character.type : 'unknown'}</p>
              </div>
            </div>
         </div> 
         )
 };

export default Characters



import './index.css' 
import logo from '../assets/logo.png'
import React from 'react'
import { useState, useEffect } from 'react';
import characters from '../Cards/index'


const Characters = () => {
    const [searchVal, setSearchVal] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const searchItems = (searchItem) => {
        setSearchVal(searchItem)
        if (searchVal !== '') {
            const filteredData = characters.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchVal.toLowerCase())
                })   
                setFilteredResults(filteredData)
        }   else {
            setFilteredResults(characters)
        }
        
    }
    return (
        <>
            <div className='header'>
                <img src={logo} alt='rick and morty'></img>
                <input icon='search' type='text' onChange={(e) => searchItems(e.target.value)} className='user-input' placeholder='Filter by name...'></input>
            </div>
        </>
    )
 };

export default Characters
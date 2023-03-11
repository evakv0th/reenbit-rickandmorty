
import { useState, useEffect } from 'react';
import './index.css' 
import logo from './assets/logo.png'
import React from 'react'
import characters from '../../App.js'

const Characters = () => {
    return (
        <>
            <div className='header'>
                <img src={logo} alt='rick and morty'></img>
                <input type='text' className='user-input' placeholder='Filter by name...'></input>
            </div>
        </>
    )
 };

export default Characters
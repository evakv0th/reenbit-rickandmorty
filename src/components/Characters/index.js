

import './index.css' 
import logo from '../assets/logo.png'
import React from 'react'
import { useState, useEffect } from 'react';
import characters from '../Cards/index'


const Characters = () => {
    return (
        <>
            <div className='header'>
                <img src={logo} alt='rick and morty'></img>
            </div>
        </>
    )
 };

export default Characters
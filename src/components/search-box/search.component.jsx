import React from 'react';

import './search.css';


export const SearchBox = ({placeholder, handleChange}) => (
    <div className='search-box'>
        <input
            className={'search'}
            type="search"
            placeholder={placeholder || 'enter some exiting'}
            onChange={handleChange}/>
    </div>

)

import React from 'react';
import './search-box.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    // const  = { props };
    return (
        <input
            className='search'
            type="search"
            onChange={handleChange}
            placeholder={placeholder}
        // placeholder={props.placeholder}
        // onChange={props.handleChange}
        />);
};
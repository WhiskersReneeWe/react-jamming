import React, { useState } from 'react';
import "../SearchBar/SearchBar.css";

function SearchBar(props) {
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(`Debugging Search Term Change ${searchTerm}`)

    };

    const search = () => {
        console.log("debugging from SearchBar search method");
        props.onSearch(searchTerm);
    };

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleSearchTermChange}/>
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    )
}

// how to pass the search term to the search method in the App component to pass it to searchResults component


export default SearchBar;
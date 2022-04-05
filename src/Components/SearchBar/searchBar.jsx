// import SongTable from "../SongTable/songTable";
import "./searchBar.css";
import React, { useState } from 'react';

// import Songs from "../../App";


function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === ''){
            setFilteredData([])
        } else {
        setFilteredData(newFilter);}
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className="searchIcon">
                    {filteredData.length === 0 ? <i class="bi bi-search"></i> : <i class="bi bi-x"></i>}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResults">
                    {filteredData.map((value, key) => {
                        return (
                        <div className="dataItem"> {value.title} </div>
                    );
                    })}
                </div>
            )}
        </div>
        
    );
                }
export default SearchBar;
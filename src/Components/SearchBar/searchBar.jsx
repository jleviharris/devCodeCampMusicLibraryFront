// import SongTable from "../SongTable/songTable";
import "./searchBar.css";
import React, { useState } from 'react';

// import Songs from "../../App";


function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);

   

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((element) => {
            if (element.title.toLowerCase().includes(searchWord.toLowerCase())){
                return true
            } else if(element.artist.toLowerCase().includes(searchWord.toLowerCase())){
                return true
            } else if (element.album.toLowerCase().includes(searchWord.toLowerCase())){
                return true
            }
             
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
                    {filteredData.length === 0 ? <i className="bi bi-search"></i> : <i className="bi bi-x"></i>}
                </div>
            </div>
            {filteredData.length !== 0 && (
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
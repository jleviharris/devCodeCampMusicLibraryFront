import SongTable from "../SongTable/songTable";
import React, { useState } from 'react';



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
                </div>
            </div>
            
            {filteredData.length !== 0 ? (
                <div className="container-fluid">
                <div id="dataResults">
                     <SongTable Songs={data} filteredData={filteredData}/>      
                </div>
                </div>
            ) : (
                <div className="container-fluid">
                <div id="dataResults">
                <SongTable Songs={data} filteredData={data}/>      
           </div>
           </div>
            )
            }
        </div>
        
    );
                }
export default SearchBar;
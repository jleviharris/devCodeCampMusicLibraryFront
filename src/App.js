import React, { useState, useEffect } from 'react';
import "./index.css";
import SearchBar from './Components/SearchBar/searchBar';
import NavBar from './Components/NavBar/navBar';
import axios from 'axios';

function App() {
  
  const [Songs, setSongs] = useState([]);
  
  const getData = async () => {
    try{
      let response = await axios.get('http://localHost:5005/api/songs');
      function placeSongs(){
        let tempSongs = [...response.data];
        setSongs(tempSongs);
      }
    placeSongs();
    }
    catch (ex) {
      console.log('Error in API call');
    }
  } 
    useEffect(() => {
      getData()
    }, []);
    console.log(Songs);
  return (
    <div className='container'>
      <NavBar className='navbar'/>
      <SearchBar placeholder='Search' data={Songs}/>
    </div>
  );
}
export default App;





















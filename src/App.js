import React, { useState, useEffect } from 'react';
import "./index.css";
import SongTable from './Components/SongTable/songTable';
// import SearchBar from './Components/SearchBar/searchBar';
// import NavBar from './Components/NavBar/navBar';
// import { render } from '@testing-library/react';
import axios from 'axios';
  

function App() {

  const [Songs, setSongs] = useState([]);

  const getData = async () => {
    try{
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
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
    },[]);

  return (
    <div className='container'>
      {/* <NavBar/> */}
      <SongTable Songs={Songs}/>
      {/* <SearchBar/> */}
      
    </div>
  );
}
export default App;





















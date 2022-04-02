import React, { useState } from 'react';
import "./index.css";
import SongTable from './Components/SongTable/songTable';
import SearchBar from './Components/SearchBar/searchBar';
import NavBar from './Components/NavBar/navBar';




function App() {

  const [Post, setPost] = useState([]);

  function addNewPost(post){
    let tempPost = [post, ...Post];

    setPost(tempPost);
  }
  return (
    <div className='container'>
      <NavBar/>
      <SongTable/>
      <SearchBar/>
    
    </div>
  );
}

export default App;

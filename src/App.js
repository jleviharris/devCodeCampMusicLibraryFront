import React, { useState, useEffect } from 'react';
import "./index.css";
import SongTable from './Components/SongTable/songTable';
// import SearchBar from './Components/SearchBar/searchBar';
// import NavBar from './Components/NavBar/navBar';
// import { render } from '@testing-library/react';
import axios from 'axios';
  
  // componentDidMount(){ //useEffect 
  //   this.makeGetRequest();
  // }
  
  // render(){
  //   return (
  //     <React.Fragment>
  //       <button onClick={this.makeGetRequest}>Remake Call</button>
  //     </React.Fragment>
  //   )
  // }}



function App() {

  const [Songs, setSongs] = useState([]);
  
  const getData = async () => {
    try{
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
      console.log(response.data)
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

useEffect(() => {












  // async function makeGetRequest() {
  //   try{
  //     let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
  //     console.log(response.data)
  //   }
  //   catch (ex) {
  //     console.log('Error in API call');
  //   }
  // }
  //   useEffect (() => {
    // let tempSong = [Song, ...Song];

    // setSong(tempSong);
  
  // return (
  //   <div className='container'>
  //     {/* <NavBar/> */}
  //     <SongTable/>
  //     {/* <SearchBar/> */}
      
  //   </div>
  // );




export default App;





import { useEffect, useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';

import {fetchTopAlbums,fetchNewAlbums} from './Api/api'
import Section from './components/Section/Section';


// import Card from './components/Card/Card';
// import CardSection from './components/CardSection/CardSection'


function App() {

  const [topAlbumsData,setTopAlbumsData]=useState([]);
  const [newAlbumsData,setNewAlbumsData]=useState([]);

  useEffect(()=>{
    generateTopAlbumsData();
  },[])

  const generateTopAlbumsData=async()=>{
    const Topdata=await fetchTopAlbums();
    const newData=await fetchNewAlbums();
    setTopAlbumsData(Topdata);
    setNewAlbumsData(newData);
  }


  


  return (
    <div className="App">
        <Navbar/>
        <HeroSection/>
   
        {/* <CardSection/> */}
        {/* {
          topAlbumsData.map((item)=>{
            return (
              <Card data={item} type="album" key={item.id}/>
            )
          })
        } */}

        <div className='albums'>
          <Section data={topAlbumsData} type="album" title="Top Albums"/>
          <Section data={newAlbumsData} type="album" title="New Albums"/>
        </div>
    </div>
  );
}

export default App;

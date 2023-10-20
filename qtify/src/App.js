import { useEffect, useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';

import {fetchTopAlbums,fetchNewAlbums ,fetchSongs,fetchGenres,fetchFaqs} from './Api/api'
import Section from './components/Section/Section';
import FaqSection from './components/FAQ-Section/FaqSection';


// import Card from './components/Card/Card';
// import CardSection from './components/CardSection/CardSection'


function App() {

  const [topAlbumsData,setTopAlbumsData]=useState([]);
  const [newAlbumsData,setNewAlbumsData]=useState([]);
  const [songData,setSongData]=useState([]);
  const [entireData,setEntireData]=useState([]);
  const [genresData,setGenresData]=useState([]);
  const [faqs,setFaqs]=useState([]);
  useEffect(()=>{
    generateDatas();
  },[])

  const generateDatas=async()=>{
    const TopData=await fetchTopAlbums();
    const NewData=await fetchNewAlbums();
    const SongData=await fetchSongs();
    const GenresData=await fetchGenres();
    const fetchFaq=fetchFaqs();



    const newGenre = { key: "all", label: "All" };
    setTopAlbumsData(TopData);
    setNewAlbumsData(NewData);
    setSongData(SongData);
    GenresData.unshift(newGenre);
    setGenresData(GenresData);
    setFaqs(fetchFaq);

    setEntireData([...TopData,...NewData,...SongData]);
  }


  
console.log("entire ",entireData);

  return (
    <div className="App">
        <Navbar data={entireData}/>
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
          <Section data={songData} type="song" title="Songs" genres={genresData}/>
          <FaqSection data={faqs}/>
        </div>
    </div>
  );
}

export default App;
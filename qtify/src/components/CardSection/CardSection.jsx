import React, { useEffect, useState } from 'react'
import styles from './CardSection.module.css';
import Cards from '../Cards/Cards';
import axios from 'axios'

const CardSection = () => {
    const [topAlbum,setTopAlbum]=useState([]);
    const [newAlbum,setNewAlbum]=useState([]);
    useEffect(()=>{
        getTopAlbumApiCall();
    },[])

    const getTopAlbumApiCall=async()=>{
        const responseTop=await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        const responseNew=await axios.get("https://qtify-backend-labs.crio.do/albums/new");
        setTopAlbum(responseTop.data)
        setNewAlbum(responseNew.data)
    }
  return (
    <div className={styles.cardPart}>
        <Cards Albums={topAlbum} title="Top Albums"/>
        <Cards Albums={newAlbum} title="New Albums"/>
    </div>
  )
}

export default CardSection
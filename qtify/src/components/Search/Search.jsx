import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import AutoCompleteSearch from "../AutoCompleteSearch/AutoCompleteSearch";

const Search = ({placeholder,data}) => {

  const [val,setVal]=useState(null);

  const [resultData,setResultData]=useState([]);

  const[isAutoCompleteVisible,setIsAutoCompleteVisible]=useState(false);
  
  
  const onSubmit=(e)=>{
    // e.preventDefault();
    console.log(e);
    setVal(e);
    setIsAutoCompleteVisible(false);
  }

  const handleInput=(e)=>{
    console.log(e.target.value);
    setIsAutoCompleteVisible(true)
    setVal(e.target.value);
    const res=data.filter(item=>item.title.includes(e.target.value));
    // console.log(res);
    setResultData(res);
    if(e.target.value === ""){
      setIsAutoCompleteVisible(false);
    }
  }



  return (
    <>
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} onChange={(e)=>handleInput(e)} value={val}/>
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </form>
    <div className={styles.autoComplete}>
    {isAutoCompleteVisible? resultData.length>1?<AutoCompleteSearch data={resultData} selected={onSubmit}/>:null:null}
    </div>
    </>
  );
};

export default Search;

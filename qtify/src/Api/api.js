import axios from 'axios';



export const BACKEND_ENDPOINT='https://qtify-backend-labs.crio.do';


export const fetchTopAlbums=async()=>{
    try{
        const res=await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}



export const fetchNewAlbums=async()=>{
    try{
        const res=await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}
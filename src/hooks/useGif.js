import { useState, useEffect } from'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
    const[loading,setLoading] =useState(false)
    const[gif,setGif] =useState('');
    
    async function fetchData(tag){
        try{
            setLoading(true);
            const {data} = await axios.get(tag?`${url}&tag=${tag}`:url);
            const source=data.data.images.downsized.url
            setGif(source);     
            setLoading(false);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() =>{
        fetchData(tag);
    },[tag]);
    return {loading, gif,fetchData}
}

export default useGif

import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Random = () => {
    // const[loading,setLoading] =useState(false)
    // const[gif,setGif] =useState('');
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    // const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // async function fetchData(){
    //     try{
    //         setLoading(true);
    //         const {data} = await axios.get(url);
    //         const source=data.data.images.downsized.url
    //         setGif(source);     
    //         setLoading(false);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }
    // useEffect(() =>{
    //   fetchData();
    // },[]);
    const{loading,gif,fetchData} = useGif();
    function clickHandler(){
        fetchData(); 
    } 
  return (
    <div className='bg-red-300 w-3/5 border-2 border-purple-700 rounded-md flex flex-col items-center gap-3 py-3'>
      <h2 className='font-bold text-lg bold underline'>A RANDOM GIF</h2>
      {loading?<Spinner/>:<img src={gif} alt="" className='w-4/12'/>}
      <button onClick={clickHandler} className='bg-pink-500 py-2 rounded-md w-4/5 font-semibold'>Generate Gif</button>
    </div>
  )
}

export default Random

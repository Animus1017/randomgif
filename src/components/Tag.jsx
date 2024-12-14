import React,{ useState } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';
const Tag = () => {
    // const[loading,setLoading] =useState(false)
    // const[gif,setGif] =useState('');
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    // const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
    //     fetchData();
    // },[]);
    const[tag, setTag] = useState('car');
    const{loading,gif,fetchData} = useGif(tag);
    function changeHandler(e){
        setTag(e.target.value);
    }
    function clickHandler(){
        fetchData(tag); 
    } 
  return (
    <div className='bg-pink-500 w-3/5 border-2 border-violet-700 rounded-md flex flex-col items-center gap-3 py-3'>
      <h2 className='font-bold text-lg bold underline uppercase'>RANDOM {tag} GIF</h2>
      {loading?<Spinner/>:<img src={gif} alt="" className='w-4/12'/>}
      <input type="text" className='bg-red-300 p-2 rounded-md w-4/5 outline-none font-semibold text-center' onChange={changeHandler} value={tag}/>
      <button onClick={clickHandler} className='bg-red-300 py-2 rounded-md w-4/5 font-semibold'>Generate Gif</button>
    </div>
  )
}

export default Tag
import {useState,useEffect} from 'react';
import './App.css';
import MovieCard from './movieCard';
// 315645a2
const API_URL='https://www.omdbapi.com?apikey=315645a2';

const App=()=>
{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
    setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('spiderman');
    },[]);
  return(
    <div className='App'>
        <h1>omdb</h1>
        <div className="search">
            <input placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}></input>
            <img className="icon" src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
            alt="search" 
             onClick={() =>searchMovies(searchTerm)}/>
        </div>
        {
            movies?.length>0?(
                <div className="container">
          
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))}
            </div>
            ):(
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }
        
    </div>
  );

}
export default App;
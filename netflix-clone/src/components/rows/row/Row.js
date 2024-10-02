import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './Row.css'
import axios from '../../../utils/Axios'


const Row = ({title, fetchUrl, isLargeRow}) => {
    
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const baseUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() =>{
        (async () =>{
            try{
                const request = await axios.get(fetchUrl);
                setMovie(request.data.results);
            }catch(e){
                console.log('error', e);
            }
        })()
    }, [fetchUrl]);


    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.log('Trailer not found', error));
        }
    }

    const opts = {
        heigth: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }


  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row__posters'>
            {movie?.map((movie, index) => (
                <img
                    onClick={() => handleClick(movie)}
                    key={index}
                    src= {`${baseUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
                    alt={movie?.name}
                    className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                />

            ))}
        </div>
        <div style={{padding: "40px"}}>
            {trailerUrl && <Youtube videoId = {trailerUrl} opts = {opts}/>}
        </div>

    </div>

  )
}

export default Row
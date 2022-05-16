import React from 'react'
import { useState, useEffect } from "react";
import Movie from '../components/Movie';
import './Home.css'


//npm i react-router-dom@5.3.0

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
      ).json();
      //렌더
      setMovies(json.data.movies);
      //렌더 -> 그래서 consol이 두번 찍힌다
      setLoading(false);
    };
  
    useEffect(() => {
      getMovies();
    },[]);
  
    console.log(movies); //빈배열[]->다시 data든 배열나옴
  
    return (
      <>
        <div className='container'>
          {loading ? (
            <span className='loader'>Loading...</span>
          ) : (
            <div className='movies'>
              {movies.map((movie) => (
                <Movie movie={movie}/>
              ))}
            </div>
          )}
        </div>
      </>
    );
}

export default Home
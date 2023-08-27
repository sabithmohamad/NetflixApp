import React from 'react'
import {API_KEY,imageurl} from '../Constants/Constant'
import "./Banner.css"
import {useEffect} from "react"
import { useState } from 'react'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log(response.data.results[0])
        setMovie(response.data.results[0])
      })
        return () => {
          
        }
      }, [])
  return (
    <div style={{backgroundImage:`url(${movie ? imageurl+movie.backdrop_path: ""})`}} className='banner'>
        <div className='content'>
             <h1 className='title'>
                {movie ? movie.title: ""}
            </h1>
            <div className='banner_buttons'>
                 <button className='button'>Play</button>
                 <button className='button'>My List</button>
                 
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner

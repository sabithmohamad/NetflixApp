import React from 'react'
import { useEffect,useState } from 'react'
import "./Card.css"
import axios from '../../axios'
import Youtube from 'react-youtube'
import {API_KEY,imageurl} from '../Constants/Constant'

function Card(props) {
    const [urlid,setUrlId] = useState ('')
    const [movies, setMovies] = useState([])
    useEffect(() => {
      axios.get(props.url).then((response) => {
        console.log(response.data)
        setMovies(response.data.results)
      })
      
      return () => {
        
      }
    },[props.url])

    const opts = {
        height:'390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleMovieTrailer = (id) => {
        console.log(id)
        axios.get(`movie/460465/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data)
            if(response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }else{
                console.log('Trailer Not Available')
            }
        } )
    }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
            movies.map((obj) => 
                <img onClick={() => handleMovieTrailer(obj.id) } className={props.isSmall ? 'smallposter' : 'card'} src={`${imageurl+obj.backdrop_path}`} alt="Cards" />
            )
        }
      </div>
      {urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default Card

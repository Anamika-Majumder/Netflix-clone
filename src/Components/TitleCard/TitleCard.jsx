
import './TitleCard.css'
import Cards_data from '../../assets/cards/Cards_data'
import { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';





const TitleCard = ({title, category}) => {


const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWI3YTFhNzc3ZmJiMDI1YWMyZjBjZDc0YjVkOGRiNSIsIm5iZiI6MTc0MDIwMTI2Ni40NjgsInN1YiI6IjY3Yjk1ZDMyMDZiNTUzNmJkYzBhNjhmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IAGSx-W1sQ3WUUU26qWfa_mYH70FyYKW8DqPoJ9GNjY'
    }
  };
  
 

const  handlewheel= (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}


useEffect(()=>{ 

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


cardsRef.current.addEventListener('wheel',handlewheel);
},[])
  return (
    <div className='titlecard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/Player/${card.id}`}

          className="card" key={index}>
       
         <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}  />
<p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard

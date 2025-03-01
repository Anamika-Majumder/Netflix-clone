import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:"",
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWI3YTFhNzc3ZmJiMDI1YWMyZjBjZDc0YjVkOGRiNSIsIm5iZiI6MTc0MDIwMTI2Ni40NjgsInN1YiI6IjY3Yjk1ZDMyMDZiNTUzNmJkYzBhNjhmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IAGSx-W1sQ3WUUU26qWfa_mYH70FyYKW8DqPoJ9GNjY'
    }
  };
  
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results?.[0]))
    .catch(err => console.error(err));

}, [])


  

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='Kpop' frameBorder='0' allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player

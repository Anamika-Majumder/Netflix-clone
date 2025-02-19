
import './TitleCard.css'
import Cards_data from '../../assets/cards/Cards_data'
import { useRef } from 'react'
import { useEffect } from 'react';





const TitleCard = ({title, category}) => {
  const cardsRef = useRef();

const  handlewheel= (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}


useEffect(()=>{ 
cardsRef.current.addEventListener('wheel',handlewheel);
},[])
  return (
    <div className='titlecard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {Cards_data.map((card, index)=>{
          return <div className="card" key={index}>
       
         <img src={card.image}  />
<p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard

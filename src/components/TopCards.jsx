import React, {useState, useEffect } from 'react'
import TopCard from './TopCard';
import axios from 'axios';

import './TopCards.css';

const TopCards = () => {
    const [cards, setCards] = useState([]);
    const [error,setError] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:5000/api/topcards')
      .then((res) => {
        setCards(res.data.cards);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    },[])

    if (cards === []) return <p>No Upcomming BirthDays for now</p>

    if(error !== '' ) return <p> {error}</p>
    
    return (
      <div className='topcards'>
        <h1>Upcomming Birthdays</h1>
        {cards.map(card => <TopCard id={card.id} name={card.name} dob={card.dob}  key={card.id}/>)} 
           
      </div>
    );
}

export default TopCards;
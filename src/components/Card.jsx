import React, { useState, useEffect } from "react";
import { ReactComponent as Coins } from "../assets/coins.svg";
import { ReactComponent as Share } from "../assets/share.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

import "./Card.css";

const Card = () => {
  console.log(window.location.href);
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState('');
  const { id } = useParams();

  const shareCardHandler = () => {
    const share = {
      name: card.name,
      dob: card.dob,
      url: `${window.location.href}`,
    };
    navigator.share(share);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bdays-backend.herokuapp.com/api/card/${id}`)
      .then((res) => {
        setCard(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });

    setLoading(false);
  }, [id]);

  if (loading === true  ) return <p>Loading ....</p>;

  if(error !== '') return <p>{error}</p>

  return (
    <>
      {card !== null && (
        <div className='card'>
          <header>
            <div className='header__first'>
              <div className='logo'>
                <h2>Leoha</h2>
              </div>
              <div className='points'>
                <Coins />
                <h3>{card.points}</h3>
              </div>
            </div>
            <div className='header__middle'>
              <img
                src={`https://bdays-backend.herokuapp.com/${card.image}`}
                width='250'
                height='250'
              />
            </div>
            <div className='header__last'>
              <p>
                Name: <b>{card.name}</b>
              </p>
              <p>
                Birthday: <b>{card.dob}</b>
              </p>
            </div>
            <p id='powByCom'>
              Powered by <b>BetterSelf</b>
            </p>
          </header>
          <footer>
            <div onClick={shareCardHandler}>
              <p>Share Card</p>
              <button>
                <Share />
              </button>
            </div>
            <Link to='/addcard'>
              <div>
                <button>
                  <Plus />
                </button>
                <p>New Card</p>
              </div>
            </Link>
          </footer>
        </div>
      )}
    </>
  );
}

export default Card;

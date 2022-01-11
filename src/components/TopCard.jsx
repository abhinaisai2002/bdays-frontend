import React from 'react'
import treebg from '../assets/treebg.png'
import './TopCard.css'
import { Link } from 'react-router-dom'

const TopCard = ({id, name, dob}) => {
    return (
        <Link to={`/card/${id}`}>
            <div className="topcard">
                <img src={treebg} />
                <p>{name}, {dob}</p>
            </div>
        </Link>
    )
}

export default TopCard;

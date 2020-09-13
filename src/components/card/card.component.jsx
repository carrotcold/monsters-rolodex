import React from 'react';
import './card.styles.css'

export const Card = props => (
  <div className='card-container'>
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set1&size=200x200`} />
    <h3>{props.monster.name}</h3>
    <p>{props.monster.email}</p>
  </div >
)

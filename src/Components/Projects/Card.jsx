import React from 'react'
import './Projects.css'

const Card = (props) => {
  return (
    <>
      <div className="cardContainer">
        <img src={props.img} alt="" />
<h2>{props.title}</h2>
<p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card

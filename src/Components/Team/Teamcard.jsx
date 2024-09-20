import React from 'react'
import './Team.css'
import img from'../../assets/musicgirl.jpeg'
const Teamcard = (props) => {
  return (
    <>
      <div className="teamCard">
<div className="member">
<img src={img} alt="" />
</div>
<div className="memberAbt">
    <p>{props.about}</p>
    <h3>Author</h3>
    <h4>Xyz Post</h4>
   
</div>
      </div>
    </>
  )
}

export default Teamcard

import React from 'react'
import './ImageSection.css'
import { Link } from 'react-router-dom'
import gallery from '../../assets/berry.jpg'
const ImageSection = () => {
  return (
    <>
      <div className="imageSection">
        <div className="heading">
          <h1>Gallery</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="imageContainer">
<div className="image"> 
<img src={gallery} alt="" />
</div>
<div className="image">  
<img src={gallery} alt="" />
</div>
<div className="image"> 
<img src={gallery} alt="" />
</div>
<div className="image">  
<img src={gallery} alt="" />
</div>

        </div>
        <button type='button'><Link to="/gallery">More</Link></button>
      </div>
    </>
  )
}

export default ImageSection

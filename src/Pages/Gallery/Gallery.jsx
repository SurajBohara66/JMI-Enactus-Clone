import React from 'react'
import './Gallery.css'
import img from '../../assets/berry.jpg'
import img2 from '../../assets/musicgirl.jpeg'
const Gallery = () => {
  return (
    <>
      <div className="gallerHero">
        <div className="galleryOverlay  "></div>
        <h1>Gallery</h1>
      </div>
      <div className="galleryContent">
<img src={img} alt="" />
<img src={img2} alt="" />
<img src={img} alt="" />
<img src={img2} alt="" />
<img src={img} alt="" />
<img src={img2} alt="" />
<img src={img} alt="" />
<img src={img2} alt="" />
<img src={img} alt="" />
<img src={img2} alt="" />
<img src={img} alt="" />
<img src={img2} alt="" />
<img src={img} alt="" />
<img src={img2} alt="" />

      </div>
    </>
  )
}

export default Gallery

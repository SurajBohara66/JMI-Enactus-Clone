import React from 'react'
import './Blog.css'
import img from '../../assets/bookshelf.jpg'
const Blog = () => {

  return (
    <>
      <div className="blogContainer">
<div className="heading">
    <h1>Recent Blogs</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis hic illo dolore facilis repellendus. Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam eveniet officia, molestias suscipit tenetur perspiciatis quaerat rerum, quae modi delectus in ut nulla doloremque at consectetur dicta saepe earum. Reiciendis, velit officiis? Perspiciatis delectus aliquid, sapiente debitis voluptatibus corrupti voluptates libero optio dolorem beatae?</p>
</div>
<div className="blogCollection">

    <div className="blogCard">
      
<img src={img} alt="" />
<div className="details">
<p>23 December 2024</p>
<p>Author</p>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>

</div>
    </div>
    <div className="blogCard">
      
      <img src={img} alt="" />
      <div className="details">
      <p>23 December 2024</p>
      <p>Author</p>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
      
      </div>
          </div>
          <div className="blogCard">
      
      <img src={img} alt="" />
      <div className="details">
      <p>23 December 2024</p>
      <p>Author</p>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
      
      </div>
          </div>
</div>
<div className='btnbox'>
  <button type="button">MORE</button>
</div>
      </div>

    </>
  )
}

export default Blog

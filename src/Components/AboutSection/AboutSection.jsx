import React from 'react'
import './AboutSection.css'
import { Link } from 'react-router-dom'
const AboutSection = () => {
  return (
    <>
      <div className="abtSection">
        <h3>About Us</h3>
        <h1>"A Story OF Resilience"</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis impedit perspiciatis, a ex exercitationem accusamus quam nostrum quisquam nihil est expedita labore itaque magni. Assumenda ad similique iusto facere dolorum qui, deleniti amet architecto incidunt repudiandae nostrum vero. Doloribus eaque quod cumque, iusto nihil adipisci vero vitae quae atque fugiat fuga quidem assumenda, reiciendis consequatur corrupti perferendis minima sit dicta voluptatem, recusandae deleniti quos nostrum dignissimos incidunt. Quo magni voluptate impedit, necessitatibus corrupti, quasi excepturi, minima recusandae nisi labore esse nulla. Officiis at placeat culpa facere.</p>
        <button type="button" ><Link to="/about">More</Link></button>
      </div>
    </>
  )
}

export default AboutSection

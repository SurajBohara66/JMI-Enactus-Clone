import React from 'react'
import './Home.css'
import Herosection from '../../Components/Herosection/Herosection'
import AboutSection from '../../Components/AboutSection/AboutSection'
import Projects from '../../Components/Projects/Projects'
import ImageSection from '../../Components/ImageSection/ImageSection'
import Journey from '../../Components/Journey/Journey'
import Blog from '../../Components/Blog/Blog'
import Team from '../../Components/Team/Team'
import Company from '../../Components/Company/Company'

const Home = () => {

  return (
  
    <>
    
     <Herosection />
     <AboutSection />
<Projects />
<Journey />
<ImageSection />
<Blog />
<Team />
<Company />
    </>
    
  )
}

export default Home

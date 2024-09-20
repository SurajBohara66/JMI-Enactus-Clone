import React, { useState } from 'react'
import './About.css'
import contentImg from '../../assets/gbook.jpg'
import AbtContent from './AbtContent'
import Mission from './Mission'
import Goal from './Goal'
const About = () => {
  const [content , setContent] = useState("work")
  return (
    <>
      <div className="abtHero">
        <div className="overlayAbt"></div>
        <h1>About Us</h1>
      </div>
      <div className="abtContent">
        <div className="contentImg">
          <img src={contentImg} alt="" />
        </div>
        <div className="contentBox">
          <div className="btnBox">
            <button type="button" onClick={() => {setContent("work")}} style={content ==="work"?{backgroundColor: "#0b0a0a", color:"white" , border:"none" }:{backgroundColor: "transparent" } }>What we do</button>
            <br />
            <button type="button"   onClick={() => {setContent("mission")}} style={content ==="mission"?{backgroundColor: "#0b0a0a", color:"white" , border:"none" }:{backgroundColor: "transparent" } }>Our mission</button>
            <button type="button"   onClick={() => {setContent("goal")}} style={content ==="goal"?{backgroundColor: "#0b0a0a", color:"white" , border:"none" }:{backgroundColor: "transparent" } }>Our goal</button>
          </div>
          <div className="contentDeatils" >
{content === "work"? <AbtContent /> : ''}
{content === "mission"? <Mission /> : ''}
{content === "goal"? <Goal /> : ''}
          </div>
        </div>
      </div>
    </>
  )
}

export default About

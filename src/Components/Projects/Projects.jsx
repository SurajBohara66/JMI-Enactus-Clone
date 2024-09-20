import React from 'react'
import './Projects.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import img from'../../assets/darkbook.jpg'
const Projects = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
 
    <>
      <div className="projectContainer" id='projects'>
        <h1>Our Projects</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestias repudiandae aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet, aperiam rem modi cupiditate iste. Debitis temporibus officiis quo dignissimos assumenda expedita blanditiis, quod, saepe at iusto beatae enim corrupti?</p>
      <Carousel responsive={responsive}>
  <Card img={img} title="Project-1"  desc= "sdfgghj sdfghjyt dfcvngh efv nm"/>
  <Card  img={img} title="Project-1"  desc= "sdfgghj sdfghjyt dfcvngh efv nm"/>
  <Card  img={img} title="Project-1"  desc= "sdfgghj sdfghjyt dfcvngh efv nm"/>
  <Card  img={img} title="Project-1"  desc= "sdfgghj sdfghjyt dfcvngh efv nm"/>
  <Card  img={img} title="Project-1"  desc= "sdfgghj sdfghjyt dfcvngh efv nm"/>
  <Card  img={img} title="Project-1"  desc= "sdfgghj sdfghjyt dfcvngh efv nm"/>
  <Card  img={img} title="Project-1"  desc= "sdfgghj sdfghjyt dfcvngh efv nm"/>
</Carousel>;
      </div>
    </>
  )
}

export default Projects

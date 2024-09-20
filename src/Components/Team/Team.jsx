import React from 'react'
import './Team.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Teamcard from './Teamcard';
const Team = () => {
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
      <div className="teamContainer">
      <hr />
      <div className="teamAbout">
        <h1>Our Team</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, beatae impedit eligendi temporibus necessitatibus quis laudantium, architecto deserunt hic numquam explicabo facere repellendus dignissimos!</p>
      </div>
      <div className="teamSlider">
      <Carousel responsive={responsive}>
    
     
      <Teamcard  about = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur? Perspiciatis iste cum totam porro aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur. Magni facilis quidem pariatur? Perspiciatis iste cum totam porro aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro. "/>
      <Teamcard  about ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur? Perspiciatis iste cum totam porro aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro."/>
      <Teamcard  about ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur? Perspiciatis iste cum totam porro aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro."/>
       <Teamcard  about ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur? Perspiciatis iste cum totam porro aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro."/>
       <Teamcard  about ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur? Perspiciatis iste cum totam porro aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilisnecessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro."/>
       <Teamcard  about ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur? Perspiciatis iste cum totam porro aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro.Excepturi optio non dolorum magnam porro.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur. Excepturi optio non dolorum magnam porro."/>
       <Teamcard  about ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur? Perspiciatis.aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro.Excepturi optio non dolorum magnam porro.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur. Excepturi optio non dolorum magnam porro."/>
       <Teamcard  about ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur? Perspiciatis iste cum totam porro aperiam, sint praesentium temporibus necessitatibus ab nobis sunt voluptatem voluptate pariatur. Excepturi optio non dolorum magnam porro.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni facilis quidem pariatur. Excepturi optio non dolorum magnam porro."/>
     
      </Carousel>
      </div>
      </div>
    </>
  )
}

export default Team

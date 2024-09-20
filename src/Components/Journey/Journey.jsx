import React, { useState } from "react";
import "./Journey.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Journey = () => {
  const [counter, setCounter] = useState(false);
  return (
    <>
   
        <div className="journeyContainer">
          <div className="abtJourney">
            <h1>Our Journey</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus dolores deleniti eveniet sunt eaque, cupiditate
              blanditiis vero facilis, enim, ea corporis illum magni.
              Repudiandae quas quod maxime libero minus! Tempora iste optio
              dicta quos corrupti illum ullam ducimus dignissimos.
            </p>
          </div>
          <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
          <div className="numbers">
            <div className="projects  workDetails">
              <h1>
                {counter && (
                  <CountUp start={0} end={7} delay={0} duration={2.4} />
                )}
              </h1>
              <p>Projects</p>
            </div>
            <div className="workingHours  workDetails">
              <h1>
                {counter && (
                  <CountUp start={0} end={57983} delay={0} duration={2.4} />
                )}
                +
              </h1>
              <p>Hours Worked</p>
            </div>
            <div className="livesTouched  workDetails">
              <h1>
                {counter && (
                  <CountUp start={0} end={3000} delay={0} duration={2.4} />
                )}
                +
              </h1>
              <p>Lives Touched</p>
            </div>
            <div className="volunteers  workDetails">
              <h1>
                {counter && (
                  <CountUp start={0} end={200} delay={0} duration={2.4} />
                )}
                +
              </h1>
              <p>Volunteers</p>
            </div>
          </div>
          </ScrollTrigger>
        </div>
   
    </>
  );
};

export default Journey;

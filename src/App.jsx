import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bounce } from "gsap";

import "./App.css";

function App() {
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          // duration: 5,
          // yPercent: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            markers: true,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: true,
            snap: 1,
          },
        }
      );

      // tl.current = gsap
      //   .timeline()
      //   .fromTo(
      //     aboutRef.current,
      //     { skewY: "0deg", duration: 4 },
      //     { skewY: "25deg", duration: 4 }
      //   )
      //   .to(aboutRef.current, { scale: 1.5, duration: 2 });

      gsap.fromTo(
        workRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 5,
          // yPercent: 1,
          scrollTrigger: {
            trigger: workRef.current,
            markers: true,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: true,
            snap: 1,
          },
        }
      );

      // gsap.fromTo(
      //   contactRef.current,
      //   { opacity: 1 },
      //   {
      //     opacity: 0,
      //     duration: 5,
      //     // yPercent: 1,
      //     scrollTrigger: {
      //       trigger: contactRef.current,
      //       markers: true,
      //       start: "top top",
      //       end: "+=100%",
      //       pin: true,
      //       scrub: true,
      //     },
      //   }
      // );
      gsap.from(".title", { y: -100, ease: Bounce.easeOut, duration: 3 });
    });
    console.log("runing");

    return () => ctx.revert();
  }, []);

  const Project_Card = ({ name, tech, imgUrl }) => (
    <div className="card">
      <h3 className="project-name">{name}</h3>
      <p className="project-des">{tech}</p>
      <img src="https://via.placeholder.com/180x150"></img>
      <div className="btn btn-source">check it out</div>
    </div>
  );

  return (
    <div className="App">
      <section id="about">
        <div className="sidebar about">
          <div className="bar">
            <div className="text" ref={aboutRef}>
              About
            </div>
          </div>
        </div>
        <div className="content about">
          <p className="title">I'm Viet Nguyen</p>
          <hr />
          <p>Front-End Developer</p>
        </div>
      </section>
      <section id="work">
        <div className="sidebar">
          <div className="bar">
            <div className="text" ref={workRef}>
              Work
            </div>
          </div>
        </div>
        <div className="content work">
          <h1>My project</h1>
          <div className="marquee">
            <div className="track animate">
              <div className="list ">
                <Project_Card name={"calander"} tech={"react"} />
                <Project_Card name={"calander1"} tech={"react"} />
                <Project_Card name={"calander2"} tech={"react"} />
                <Project_Card name={"calander3"} tech={"react"} />
              </div>
              <div className="list">
                <Project_Card name={"calander"} tech={"react"} />
                <Project_Card name={"calander1"} tech={"react"} />
                <Project_Card name={"calander2"} tech={"react"} />
                <Project_Card name={"calander3"} tech={"react"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="sidebar">
          <div className="bar">
            <div className="text" ref={contactRef}>
              Contact
            </div>
          </div>
        </div>
        <div className="content contact">
          <h1>get in touch</h1>
          <div className="container">
            <form className="contact_form">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" />
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" />
              <label htmlFor="message">Your message</label>
              <textarea type="text" rows={4} id="message" />
            </form>
          </div>
            <button>submit</button>
        </div>
      </section>
    </div>
  );
}

export default App;

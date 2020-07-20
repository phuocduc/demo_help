import React from "react";

import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Gallery from './Gallery';
import Interests from './Interests';

import ReadingProgress from "../views/ReadingProgress";

export default function About() {
  const target = React.createRef();
  return (
    <>
    <ReadingProgress target={target} />
    <div className="sections" ref={target}>
    <AboutMe />
    <Education/>
    <Experience/>
    <Skills/>
    <Gallery/>
    <Interests />
    </div>
    </>
  );
}
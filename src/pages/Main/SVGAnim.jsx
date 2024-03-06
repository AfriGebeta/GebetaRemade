import './svgAnim.css';

import React, { useEffect, useRef } from 'react';
import { ReactComponent as RunningManSVG } from "./../../assets/img/runningMan.svg";

const SVGAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    // const nodes = svgElement.querySelectorAll('path, circle, rect, polygon');
    // A unique part of the 'd' attribute of the path you don't want to animate
    const excludePathPart = "M38.0797 1.0804C34.7896 0.740949 31.4734 0.627797 28.192 0.149078";

    // Select nodes, excluding the specific path
    const nodes = Array.from(svgElement.querySelectorAll('path'))
                       .filter(path => !path.getAttribute('d').startsWith(excludePathPart));

    nodes.forEach(node => {
      // Dramatically increase the range of movement
      const moveX = (Math.random() * 100 - 10) * (Math.random() < 0.5 ? -1 : 1);
      const moveY = (Math.random() * 100 - 10) * (Math.random() < 0.5 ? -1 : 1);
      const scale = 1 + Math.random() * 0.5; // Random scale from 1 to 1.5
      const rotation = Math.random() * 360; // Random rotation from 0 to 360 degrees

      node.style.setProperty('--move-x', `${moveX}px`);
      node.style.setProperty('--move-y', `${moveY}px`);
    //   node.style.setProperty('--scale', scale);
      node.style.setProperty('--rotation', `${rotation}deg`);

      const animationDuration = 2 + Math.random() * 2; // Random duration between 2 to 4 seconds
      const animationDelay = Math.random() * 2; // Random delay up to 2 seconds

      node.style.animation = `moveNode ${animationDuration}s ${animationDelay}s infinite`;
    });
}, []);

  return (
    <RunningManSVG ref={svgRef} className=' mt-[25%] mb-[40%] md:mt-[5%] md:mb-[0] lg:mb-[-10%] md:ml-[1%] w-5/6 h-5/6'/>
  );
};

export default SVGAnimation;

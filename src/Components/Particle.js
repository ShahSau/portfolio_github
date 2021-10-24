/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Particles from 'react-particles-js';

import React from 'react';

function Particle() {
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 190,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            color: {
              value: '#636e72',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 5,
              },
            },
            line_linked: {
              enable: false,
              distance: 500,
              opacity: 0.6,
              width: 2,
              shadow: {
                enable: true,
                color: '#e74c3c',
                blur: 5,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 0.6,
              out_mode: 'bounce',
              bounce: false,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 40,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.8,
              anim: {
                speed: 1,
                opacity_min: 0.1,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'bubble',

              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,

        }}
      />
    </>
  );
}

export default Particle;

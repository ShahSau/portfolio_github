import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';

function PassionSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 250 }}
      animate={{ opacity: 1, y: 1 }}
      exit={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <InnerLayout>
        <PassionSectionStyled>
          <Title title="Passion" span="Passion" />
          <div className="services">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 1 }}
              exit={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <ServiceCard
                image={design}
                title="FrontEnd"
                paragraph="Web development gives me the opportunity to express myself creatively on the internet. And I love to see my imagination come to life."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 1 }}
              exit={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <ServiceCard
                image={intelligence}
                title="BackEnd"
                paragraph="The human visual system does not perceive the world in the same manner as digital detectors and I love to create link between them."
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                <ServiceCard
                  image={design}
                  title="FullStack"
                  paragraph="I love making sense of unorganized, messy data and visualizing my findings for better utilization of data."
                />
              </motion.div>
            </div>
          </div>
        </PassionSectionStyled>
      </InnerLayout>
    </motion.div>
  );
}

const PassionSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }

`;

export default PassionSection;

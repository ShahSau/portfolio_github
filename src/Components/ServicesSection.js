import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import {motion} from "framer-motion";

function ServicesSection() {
    return (
        <motion.div
        initial={{opacity: 0,y:250}}
        animate={{opacity: 1,y:1}}
        exit={{opacity: 1,y:0}}
        transition={{delay: 1, duration: 1}}
    >
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Passion'} span={'Passion'} />
                <div className="services">
                <motion.div
                    initial={{opacity: 0,y:250}}
                    animate={{opacity: 1,y:1}}
                    exit={{opacity: 1,y:0}}
                    transition={{delay: 1, duration: 1.5}}
                >
                    <ServiceCard 
                        image={design} 
                        title={'Web Development'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                     </motion.div>
                    <div className="mid-card"> </div>
                    <motion.div
                    initial={{opacity: 0,y:250}}
                    animate={{opacity: 1,y:1}}
                    exit={{opacity: 1,y:0}}
                    transition={{delay: 1, duration: 1.5}}
                    >
                    <ServiceCard 
                        image={intelligence} 
                        title={'Image processing'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />    
                    </motion.div>  
                    <div className="mid-card"> </div>
                     <div> 
                     <motion.div
                    initial={{opacity: 0,y:250}}
                    animate={{opacity: 1,y:1}}
                    exit={{opacity: 1,y:0}}
                    transition={{delay: 1, duration: 2.25}}
                    >
                    <ServiceCard 
                            image={design} 
                            title={'Data analysis'} 
                            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                        />
                        </motion.div> 
                     </div> 
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
        </motion.div>
    )
}

const ServicesSectionStyled = styled.section`
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

export default ServicesSection;

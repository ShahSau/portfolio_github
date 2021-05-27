import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import {motion} from "framer-motion";

function AboutPage() {
    return (
        <motion.div
        initial={{opacity: 0,y:250}}
        animate={{opacity: 1,y:1}}
        exit={{opacity: 1,y:0}}
        transition={{ duration: 2}}
    >
        <MainLayout>
           
            <AboutStyled >
            
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                {/* <ReviewsSection /> */}
                
            </AboutStyled >
            
            
        </MainLayout>
        </motion.div> 
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage

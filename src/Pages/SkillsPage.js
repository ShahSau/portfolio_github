import { useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import astronaut from "../img/skills/astronaut.png";
import celebrating from "../img/skills/celebrating.png";
import education from "../img/skills/education.png";
import taken from "../img/skills/taken.png";
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

function SkillPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
}

const SkillStyled = styled.section`
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
    .skl{
    width: 30%;
    margin: 10rem 10rem;
    height: 100%;
    // background-color: transparent !important;
    }
    .slide img {
        width: 20rem;
        margin: 0 auto;
        position: center;
      }
      
      .slide {
        transform: scale(0.2);
        transition: transform 300ms;
        opacity: 0.5;
      }
      
      .activeSlide {
        transform: scale(1.2);
        opacity: 1;
      }
      
      .arrow {
        position: absolute;
        cursor: pointer;
        z-index: 10;
      }
      
      .arrow svg {
        transition: color 300ms;
      }
      
      .arrow svg:hover {
        color: #68edff;
      }
      
      .next {
        right: 10%;
        top: 50%;
      }
      
      .prev {
        left: 10%;
        top: 50%;
      }

    
`;

export default SkillPage
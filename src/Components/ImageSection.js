/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
  return (
    <ImageSectionStyled>
      {/* <div className="left-content">
                <img src={resume} alt=""/>
            </div> */}
      <div className="right-content">
        <h4>
          Hi, there
          {' '}
          <span>👋 </span>
        </h4>
        <p className="paragraph">
          I am a multitalented Software Developer, highly proficient
          in Data Analysis with Python and R as well as Full Stack Development with MERN Stack.
          I am a great team player who loves teamwork and dedicates
          myself fully to solving the problem at hand. I am eager to continue expanding
          and perfecting my knowledge while making a valuable contribution to cross-functional
          development teams.

        </p>

        <PrimaryButton title="My work" />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    word-spacing: 0.25rem;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;

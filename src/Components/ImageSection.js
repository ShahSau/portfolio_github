import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            {/* <div className="left-content">
                <img src={resume} alt=""/>
            </div> */}
            <div className="right-content">
                <h4>Hi, there <span>👋 </span></h4>
                <p className="paragraph">
                Shahriar is a multitalented Data Analyst & AI Software Developer. He is highly proficient in
Data Analysis with Python and R as well as Full Stack Development with MERN Stack. Having
earned a Master of Science, Shahriar has led a postgraduate research team at the University
of Helsinki for over a year. Shahriar is a great team player who loves teamwork and dedicates
himself fully to solving the problem at hand. He is eager to continue expanding and perfecting
his knowledge while making a valuable contribution to cross-functional development teams.
                    
                </p>
                {/* <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Lorem Ipsum</p>
                        <p>: 36</p>
                        <p>: Spainsh </p>
                        <p>: Spanish, French, English </p>
                        <p>: London, United Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div> */}
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
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

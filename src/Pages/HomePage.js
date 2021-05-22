import React from 'react'
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';
import Typical from 'react-typical'
import {motion} from "framer-motion";

function HomePage() {
    return (
        <motion.div
      initial={{opacity: 0, x:250}} 
      animate={{opacity: 1, x:10}} 
      exit={{opacity: 0, x:0}} 
      transition={{delay: 0.25, duration: 1.5}}
    >
        <HomePageStyled>
            
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Shahriar Saurov</span></h1>
                <p>
                    <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                        'I am a software developer 💻',
                        2000,
                        'I am a designer ',
                        2000,
                        'I am a nano-physics graduate',
                        2000
                    ]}
                    />
                </p>

                <motion.div
                    initial={{scaleY:0}}
                    animate={{scaleY:1}}
                    exit={{scaleY:0}}
                    transition={{delay: 1.5, duration: 1.75}}
                >

                <div className="icons">
                <a href="https://www.linkedin.com/in/shahriar-karim-saurov-53a6ba4b/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>

                    <a href="https://github.com/ShahSau" className="icon i-github">
                        <GithubIcon />
                    </a>

                    <a href="https://twitter.com/saurov_shahriar" className="icon ">
                        <TwitterIcon />
                    </a>
                </div>

                </motion.div>
            </div>
            
        </HomePageStyled>
        </motion.div>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #0072B1;
                    color: #0072B1;
                }
            }
        }
    }
`;

export default HomePage;

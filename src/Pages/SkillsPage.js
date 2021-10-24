import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import skills from '../data/skills';
import { MainLayout, InnerLayout } from '../styles/Layouts';
// import {motion} from "framer-motion";

function SkillPage() {
  return (
    <MainLayout>
      <SkillsStyled>
        {/* <motion.div
        initial={{opacity: 0,x:-250 , y:0}}
        animate={{opacity: 1,x:1, y:1}}
        exit={{opacity: 1,y:0, x:250}}
        transition={{ duration: 2.5}}
    > */}
        <Title title="Skills" span="Skills" />
        <InnerLayout className="skill">
          {
                    skills.map((skill) => (
                      <div key={skill.id} className="skill-item">
                        <div className="title">
                          {skill.title}
                          <div className="image">

                            {skill.image.map((img) => (
                              <img key={Math.random()} src={img} alt={skill.id} />

                            ))}

                          </div>

                        </div>

                      </div>
                    ))
                }
        </InnerLayout>
        {/* </motion.div> */}
      </SkillsStyled>
    </MainLayout>
  );
}
const SkillsStyled = styled.div`
    .skill{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        .skill-item{
            background: var(--background-dark-grey);
            padding: 1rem 1rem;
            cursor: pointer;
            &:hover{
                transform: rotate(0deg) scale(1.07);
                transition: all .4s ease-in-out;
                background: linear-gradient(45deg ,#708090, #696969, #A9A9A9);
                // backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
                
                .title{
                    color: #171717;
                    text-shadow:1px 1.25px #A9A9A9;
                    transition: all .4s ease-in-out;
                }
                
            }
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding: 0.5rem 0;
            display:flex;
            flex-wrap: wrap;
            text-align:center;
            
            img{
                width: 15%;
                
                object-fit: scale-down;
                margin:5px;
                float:left;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(0deg) scale(1.2);
                }
            }
        }

        .title{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                
            
        }
    }
`;

export default SkillPage;

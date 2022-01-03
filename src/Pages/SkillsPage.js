import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import skills from "../data/skills";
import { MainLayout, InnerLayout } from "../styles/Layouts";

// import {motion} from "framer-motion";

function SkillPage() {
  return (
    <MainLayout>
      <SkillsStyled>
        <Title title="Skills" span="Skills" />
        <InnerLayout className="skill">
          {skills.map((skill) => (
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
          ))}
        </InnerLayout>
      </SkillsStyled>
    </MainLayout>
  );
}
const SkillsStyled = styled.div`
  .skill {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    .title {
      color: #000 !important;
    }
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .skill-item {
      // background: linear-gradient(45deg ,#708090, #696969, #A9A9A9);
      background: #2e3445;
      padding: 1rem 1rem;
      cursor: pointer;

      &:hover {
        transform: rotate(0deg) scale(1.02);
        transition: all 0.4s ease-in-out;

        .title {
          //color: #171717;
          // text-shadow: 1px 1.25px #a9a9a9;
          transition: all 0.4s ease-in-out;
        }
      }
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding: 0.5rem 0;
      display: flex;
      flex-wrap: wrap;
      text-align: center;

      img {
        width: 15%;
        object-fit: scale-down;
        margin: 5px;
        float: left;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(0deg) scale(1.2);
        }
      }
    }

    .title {
      font-size: 1.8rem;
      padding: 2rem 0;
      color: #171717;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
    }
  }
`;

export default SkillPage;

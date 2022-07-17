import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton"; 
import CV from '../data/CV.pdf';

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="right-content">
        <h4>
          Hi there,<span>👋</span>
        </h4>
        <p className="paragraph">
          Merging my passion for usability and technology with technical
          knowledge, I love to create smooth digital experiences using
          cutting-edge technology. Using MERN stack and other robust
          technologies like Typescript, Django, PostgreSQL, my goal is to build
          websites of the highest standard, by writing clean, efficient, and
          easily maintainable codes. My knowledge, paired with my passion for
          Software development can make me a necessary addition to every team.
        </p>

        <PrimaryButtonStyled>
        <a href={CV} download="CV">resume</a>
        </PrimaryButtonStyled>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  word-spacing: 0.25rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  //text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default ImageSection;

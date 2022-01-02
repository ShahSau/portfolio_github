import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      {/* <div className="left-content">
                <img src={resume} alt=""/>
            </div> */}
      <div className="right-content">
        <h4>
          Hi there, <span>👋 </span>
        </h4>
        <p className="paragraph">
          Merging my passion for usability and technology with technical
          knowledge, I love to create cool digital experiences using robust
          cutting-edge technology. My goal is to create smooth digital
          experiences by writing clean and efficient codes that are easy to
          maintain. I have knowledge and experience in building web apps using
          technologies including but not limited to Javascript, React, Node,
          Django, Redux, Typescript, MongoDb, PostgreSql. I am highly organized,
          results-oriented, ambitious, adventurous, assiduous , and able to work
          in a team or by myself.
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
export default ImageSection;

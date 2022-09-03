import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typical from "react-typical";
//import Particle from "../Components/Particle";

function HomePage() {
  
  return (
    <HomePageStyled>
      {/* <div className="particle-con"> 
        <Particle /> 
      </div> */}
      <div className="typography">
        <h1>
          Hi, I&apos;m <span>Shahriar</span> 
        </h1>
        <p>
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              "Software developer",
              2000,
              "Data enthusiast",
              2000,
              "Website Builder",
              2000,
            ]}
          />
        </p>

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/shahriar-karim-saurov-53a6ba4b/"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/ShahSau" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/saurov_shahriar" className="icon ">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .particle-con {
    position: absolute;
    width: 90%;
    height: 100vh;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid #0072b1;
          color: #0072b1;
        }
      }
    }
  }
`;

export default HomePage;

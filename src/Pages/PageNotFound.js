import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <MainLayout>
      <NoPageStyled>
        <div className="mainbox">
          <div className="err">4</div>
          <div className="err1">0</div>
          <div className="err2">4</div>
          <div className="msg">
            Maybe this page moved? Got deleted? Is hiding out in quarantine?
            Never existed in the first place?
            <br />
              Let&apos;s go to <Link to="/" className="spa">Home</Link> and try from there.
            
          </div>
        </div>
      </NoPageStyled>
    </MainLayout>
  );
}

const NoPageStyled = styled.header`
  .mainbox {
    width: 100%;
  height: 100vh;
  position: relative;
  }
  .spa{
    color: var(--primary-color);
    
    font-size: 1.6rem;
  }

  .err {
    color:var(--white-color);
  
    font-size: 11rem;
    position: absolute;
    left: 20%;
    top: 8%;
  }
  .err1 {
    color: var(--primary-color);
 
    font-size: 11rem;
    position: absolute;
    left: 44%;
    top: 8%;
  }

  .far {
    position: absolute;
    font-size: 8.5rem;
    left: 42%;
    top: 15%;
    color: #ffffff;
  }

  .err2 {
    color: var(--white-color);
    
    font-size: 11rem;
    position: absolute;
    left: 68%;
    top: 8%;
  }

  .msg {
    text-align: center;
    
    font-size: 1.6rem;
    position: absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }
`;
export default PageNotFound;

import React from 'react'
import { MainLayout} from '../styles/Layouts';
import styled from 'styled-components';
function PageNotFound() {
    return (
        <MainLayout>
            <NoPageStyled>
            <div className="mainbox">
                <div className="err">4</div>
                <div className="err1">0</div>
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? 
                    Never existed in the first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
            </div>
            </NoPageStyled>
        </MainLayout>
    )
}

const NoPageStyled = styled.header`
.mainbox {
   
    margin: auto;
    height: 600px;
    width: 600px;
    position: relative;
  }
  
    .err {
      color: #ffffff;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 11rem;
      position:absolute;
      left: 20%;
      top: 8%;
    }
    .err1 {
        color: #ffffff;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position:absolute;
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
      color: #ffffff;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 11rem;
      position:absolute;
      left: 68%;
      top: 8%;
    }
  
  .msg {
      text-align: center;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 1.6rem;
      position:absolute;
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
`
export default PageNotFound
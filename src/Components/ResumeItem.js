import React from 'react'
import styled from 'styled-components';

function ResumeItem({ year, title, subTitle, text}) {
    return (
        <ResumeItemStyled>
            {/* <div className="left-content">
                <p>{year}</p>
            </div> */}
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}, {year}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
            font-weight:lighter;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        word-spacing: 0.25rem;
        // &::before{
        //     content: "";
        //     position: absolute;
        //     left: 0px;
        //     top: 15px;
        //     height: 2px;
        //     width: 3rem;
        //     background-color: #fff;
        // }
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        h5{
            color: var(primary-color-light);
            font-size: 1.8rem;
            padding-bottom: 0.9rem;
            font-weight:lighter;
        }
        h6{
            padding-bottom: 1rem;
            font-size: 1.25rem;
            color: var(--secondary-color)
            
        }
    }
`;
export default ResumeItem;

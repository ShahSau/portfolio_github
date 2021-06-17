import React from 'react';
import styled from 'styled-components';


function ContactItem({title, icon, cont1, cont2=''}) {
    return (
        <ContactItemStyled>
            {/* <div className="before">
                {
                    loc
                }


            </div> */}
            <div className="before">
                {
                    icon
                }
            </div>
            
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                {cont2 !== '' && <p>{cont2}</p>}
                
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding:1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    &:hover{
        transform: rotate(0deg) scale(1.07);
        transition: all ease-in-out;
        background: linear-gradient(45deg ,#708090, #696969, #A9A9A9);
        
        .before{
            display:none;
        }
        // .left-content{
        //     display:block;
        // }
        .right-content h6{
            display:block;
            color:black;
        }
        .right-content p{
            display:block;
            color:black;
        }

    }
    .before{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        backdrop-filter: blur(5px);
        position: absolute;
        left:70%;
        @media screen and (max-width: 1023px){
            left:50%;
        }
    }
    // .left-content{
    //     padding: 1.5rem;
    //     border: 1px solid var(--border-color);
    //     font-size: 2rem;
    //     display: flex;
    //     align-items: left;
    //     justify-content: left;
    //     margin-right: 1.5rem;

    //     display:none;
    //     svg{
    //         font-size: 2.3rem;
    //     }
    // }

    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
            display:none;
        }
        p{
            padding: .1rem 0;
            display:none;
        }
    }
`;

export default ContactItem;

import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


function Menu({menuItem}) {
    return (
        <MenuItemStyled >
            {
                menuItem.map((item)=>{
                    return <div className="grid-item" key={item.id}>
                        

                        <div className="portfolio-content">
                            
                                <div className="">
                                <img src={item.image} alt=""/>
                                </div>
                                <div className="details">
                                
                                <div className='inline'>
                                <p>Details:{item.text}</p>
                                &nbsp;
                                <div className='inline'>Technologies:{item.technologies.map((item)=>{
                                    return <p>{item} </p>
                                })}
                                &nbsp;
                                <li>
                                        <a href={item.link1} target='_blank' rel="noreferrer">
                                            <GitHub />
                                        </a>
                                    </li>
                                    {item.link2 !== '' && (
                                    <li>
                                        <a href={item.link2} target='_blank' rel="noreferrer" >
                                            <LanguageIcon />
                                        </a>
                                    </li>
                                    )}
                                </div>
                                </div>
                                
                            </div>
                            <div className='box'>
                            <h6>{item.title}</h6>
                            
                            {/* <p>{item.text}</p>
                            <div className='inline'>Technologies: &nbsp;{item.technologies.map((item)=>{
                                    return <p>{item}&nbsp;</p>
                                })}</div> */}
                            </div>
                        </div>
                        
                        {/* </div> */}
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .inline{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
       
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            .details{
                // transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 10%;
                opacity: 0;
                overflow:hidden;
                li{
                        background-color: var(--background-dark-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            }

            img{
                &::before{
                    content: "";
                    position: relative;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                    
                }
            }
            img:hover{
                opacity:0.2;
                transform: translateY(20px);
                transition: 0.4s ease-out;
                .box{
                    
                    visibility:hidden;
                }
                .details{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .5s ease-in-out;
                    opacity: 1;
                    color:#007bff;
                    overflow: hidden;
                   
                    li{
                        background-color: var(--background-dark-color);
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }

                    li:hover{
                        svg{
                            color: var(--white-color);
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                    height: calc(100% - 55%) ;
                    width: calc(100% - 4%);
                    background-color: transparent;
                    opacity: 0.9;
                    transform-origin: left;
                    
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;

export default Menu;

import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => (
        <>
          <Card className="root">
            <CardMedia
              component="img"
              alt={item.title}
              height="250"
              image={item.image}
              title={item.title}
              className="img"
            />

            <CardContent className="card">
              <Typography gutterBottom variant="h6" component="h5">
                {item.title}
              </Typography>
              <button className="but">
              <Link to={`/portfolios/${item.title}`}>Case Study</Link>
              </button>
              <div className="details">
                <Typography variant="body2" color="#fff" component="p">
                  Details: {item.text}
                </Typography>
                <Typography variant="body2" color="#fff" component="p">
                  <div>
                    Technologies:
                    {item.technologies.map((newitem) => (
                      <>{newitem} </>
                    ))}
                  </div>
                </Typography>
              </div>

              <CardActions
                style={{ justifyContent: "center" }}
                className="links"
              >
                <a href={item.link1} target="_blank" rel="noreferrer">
                  <GitHub />
                </a>

                {item.link2 !== "" && (
                  <li>
                    <a href={item.link2} target="_blank" rel="noreferrer">
                      <LanguageIcon />
                    </a>
                  </li>
                )}
                {item.link3 !== "" && (
                  <li>
                    <a href={item.link3} target="_blank" rel="noreferrer">
                      <YouTubeIcon />
                    </a>
                  </li>
                )}
              </CardActions>
            </CardContent>
          </Card>
        </>
      ))}
    </MenuItemStyled>
  );
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
    .root{
      minWidth: 200;
      textAlign: center;
      flexGrow: 1;
      background-color: #191D2B;
      border-radius: 10px;
      box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
      
    .but{
      visibility:hidden;
      
      }
      &:hover{
        transform: scale3d(1.02, 1.02, 1);
        transition: all .4s ease-in-out;
        boxShadow: 3px 3px #fff; 
      
        .card{
          transform: translateY(-25%);
          visibility:visible;
          
        }
        .img{
          visibility:visible;
        }
        .but{
      visibility:hidden;
          outline: none;
      border: none;
      background-color: var(--background-light-color-2);
      padding: 0.4rem 2rem;
      font-size: inherit;
      color: var(--white-color);
      margin-bottom: 0.6rem;
        }
       
     },
    }
    .img{
      visibility:visible;
    }
    .card{
       background-color: #191D2B;
       
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    },  
    `;
// export const ExternalLinks = styled.a`
//   color: #d4c0c0;
//   font-size: 1.6rem;
//   padding: 1rem 1.5rem;
//   background: #6b3030;
//   border-radius: 15px;
//   transition: 0.5s;
//   &:hover {
//
//   }
// `;
export default Menu;

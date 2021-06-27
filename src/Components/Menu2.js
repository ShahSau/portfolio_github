import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


  
function Menu({menuItem}) {
    // const classes = useStyles();
    return (
        <MenuItemStyled>
             {

    menuItem.map((item)=>{
        
  return (
    
    <>
    <Card className="root" >
      <CardActionArea >
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
          <div className="details">
            <Typography variant="body2" color="#fff" component="p">
              Details: {item.text}
              <div className='inline'>Technologies:{item.technologies.map((item)=>{
                                    return <>{item} </>
                                })}
              </div>
            </Typography>
          </div>
        
        <CardActions style={{justifyContent:"center"}} className="links">
        
          <a href={item.link1} target='_blank' rel="noreferrer">
            <GitHub />
          </a>
        
          {item.link2 !== '' && (
            <li>
              <a href={item.link2} target='_blank' rel="noreferrer" >
                <LanguageIcon />
              </a>
            </li>
          )} 
          {item.link3 !== '' && (
            <li>
              <a href={item.link3} target='_blank' rel="noreferrer" >
                <YouTubeIcon />
              </a>
            </li>
          )} 
        </CardActions> 
      </CardContent>
      </CardActionArea>
     
    </Card>
    </>
    
  );
  
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
    .root{
      minWidth: 200;
      textAlign: center;
      flexGrow: 1;
      background-color: #191D2B;
      &:hover{
        transform: scale3d(1.05, 1.05, 1);
        transition: all .4s ease-in-out;
        boxShadow: 3px 3px #fff; 
        .card{
          transform: translateY(-50%);
          
        }
        .img{
          visibility:hidden;
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
      
      &:hover{
          background-color: #778899;
          color:#000;
       },
    },  
    
   



    `
    
    


export default Menu;

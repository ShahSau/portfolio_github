import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import { Grid } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
    // root: {
    //   minWidth: 200,
    //   textAlign: 'center',
    //   flexGrow: 1,
    //   '&:hover': {
    //     transform: 'scale3d(1.05, 1.05, 1)',
    //     transition: 'all .4s ease-in-out',
    //     boxShadow: '3px 3px #383838',
        
        
    //  },
      
    // },
    
    // card:{
    //     backgroundColor: "#191D2B",
    //     color: "#fff",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     '&:hover': {
    //         backgroundColor: "#778899",
    //         color:"#000",
            
    //      },
    // },
  //   link:{
  //       '&:hover': {
  //           transform: 'scale3d(1.5, 1.5, 1)',
  //           transition: 'all .5s ease-in-out',
            
            
            
  //        },
  //   },
    

  // });
  
function Menu({menuItem}) {
    // const classes = useStyles();
    return (
        <MenuItemStyled>
             {

    menuItem.map((item)=>{
        
  return (
    
    <div>
    <Card className="root" >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.title}
          height="250"
          image={item.image}
          title={item.title}
        />
        <CardContent className="card">
          <Typography gutterBottom variant="h6" component="h5">
          {item.title}
          </Typography>
          {/* <Typography variant="body2" color="#fff" component="p">
          Details:{item.text}
          <div className='inline'>Technologies:{item.technologies.map((item)=>{
                                    return <>{item} </>
                                })}
            </div>
          </Typography> */}
        {/* </CardContent>
      </CardActionArea> */}
      {/* <CardActions style={{justifyContent:"center"}} >
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <GitHub style={{}} className={classes.link}/>
        <a href={item.link1} target='_blank' rel="noreferrer">
        <GitHub style={{}} className={classes.link}/>
        </a> */}
        
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
        {/* {item.link2 !== '' && (
                                    <li>
                                        <a href={item.link2} target='_blank' rel="noreferrer" >
                                            <LanguageIcon />
                                        </a>
                                    </li>
                                    )}
      </CardActions> */} 
      </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
    
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
      &:hover{
        transform: scale3d(1.05, 1.05, 1);
        transition: all .4s ease-in-out;
        boxShadow: 3px 3px #383838; 
     },
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

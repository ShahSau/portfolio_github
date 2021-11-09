import python  from "../img/skills/python.png"
import js from '../img/skills/js.png'
import c from '../img/skills/c.png'
import Cs from '../img/skills/CSharp.png'
import R from '../img/skills/R2.png'


//froentend
import html from '../img/skills/html.png'
import css from '../img/skills/css.png'
import react from '../img/skills/react.png'
import TS from '../img/skills/TS.png'
import vue from '../img/skills/vue.png'
import redux from '../img/skills/redux.svg'
import boot from '../img/skills/boot.png'
import material from '../img/skills/material.png'
import tail from '../img/skills/tail.svg'

//backend
import node from '../img/skills/node.png'
import express from '../img/skills/express.png'
import flask from '../img/skills/flask.png'
import django from '../img/skills/django.png'
import djREST from '../img/skills/djREST.webp'
import graph from '../img/skills/graph.png'
import rest from '../img/skills/rest.png'

///testing
import jest from '../img/skills/jest.png'
import cypress from '../img/skills/cypress.png'
import mocha from '../img/skills/mocha.png'
import aws from '../img/skills/aws.png'
import heroku from '../img/skills/heroku.png'
import netlify from '../img/skills/netlify.png'


import docker from '../img/skills/docker.png'
const skills = [
  {
    id: 0,
    title: 'Languages',
    image: [
      python,
      js,
      Cs,
      c,
      R,

    ],
  },
  {
    id: 1,
    title: 'Froentend Technologies',
    image: [
    html,
    css,
    react,
    redux,
    TS,
    vue,
    boot,
    material,
    tail
    ],
  },
  {
    id: 2,
    title: 'Backend Technologies',
    image: [
      node,
      express,
      flask,
      django,
      djREST,
      graph,
      rest,
    
    ],
  },
  {
    id: 3,
    title: 'Testing & Cloud',
    image: [
      jest,
      cypress,
      mocha,
      heroku,
      aws,
      netlify

    ],
  },
  {
    id: 4,
    title: 'Machine learning & Data Science',
    image: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_big.svg.png',
      'https://opencv.org/wp-content/uploads/2020/07/cropped-OpenCV_logo_white_600x.png',
      'https://spark.apache.org/images/spark-logo-trademark.png', 
      'https://user-images.githubusercontent.com/1217238/65354639-dd928f80-dba4-11e9-833b-bc3e8c6a737d.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/450px-Pandas_logo.svg.png',
      'https://static.bokeh.org/logos/logotype.svg',
      'https://images.prismic.io/plotly-marketing-website/bd1f702a-b623-48ab-a459-3ee92a7499b4_logo-plotly.svg',
      'https://tidyverse.tidyverse.org/articles/tidyverse-logo.png',
    ],
  },
  {
    id: 5,
    title: 'Database',
    image: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/200px-Postgresql_elephant.svg.png',
      'https://docs.mongodb.com/images/mongodb-logo.png',
      'https://i.ibb.co/KygzfYg/no-SQL-removebg-preview.png',

    ],
  },
  {
    id: 6,
    title: 'Others',
    image: [
////figma
///react native
      'https://i.ibb.co/KWL8Y3V/Tableau-Logo.png',
      
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png',
      docker,

    ],
  },
];
// images are saved in imagebb.com
export default skills;

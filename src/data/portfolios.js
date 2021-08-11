import img0 from '../img/portImages/0.png'
import img1 from '../img/portImages/1.png'
import img2 from '../img/portImages/2.png'
import img3 from '../img/portImages/3.png'
import img4 from '../img/portImages/4.png'
import img5 from '../img/portImages/5.png'
import img6 from '../img/portImages/6.png'
import img7 from '../img/portImages/7.png'
import img8 from '../img/portImages/8.png'
import img9 from '../img/portImages/9.png'
import img11 from '../img/portImages/11.png'
import img12 from '../img/portImages/12.png'
import img13 from '../img/portImages/13.png'
import img14 from '../img/portImages/14.png'
import img00 from '../img/portImages/00.png'
import img0000 from '../img/portImages/0000.png'

const portfolios = [
    {
        id: 11111111,
        category: 'Fullstack',
        image: img00,
        link1: 'https://github.com/ShahSau/Tech_Shop',
        link2: 'https://techshop-shah.herokuapp.com',
        link3: '',
        title: 'Tech Shop',
        technologies:["React,", "Redux,", "Django,", "Django-Rest,", "Bootstrap,", "simpleJWT Authentication,", "Postgresql,", "AWS,", "WhiteNoise."],
        text: 'Fully fledged E-commerce website for a tech shop.'
    },
    {
        id: 1111,
        category: 'Fullstack',
        image: img0000,
        link1: 'https://github.com/ShahSau/Dev-Insta',
        link2: 'https://hidden-ridge-66171.herokuapp.com/',
        link3: '',
        title: 'Dev Insta',
        technologies:["React,", "Redux,","Express,", "Node,", "MongoDB,", "Heroku,","Express-validator,","REST API."],
        text: 'A social network website for developers. In this website developers can create account, connect their github account, connect with each other, post, comment on other\'s post. '
    },
    {
        id: 1,
        category: 'Data Analysis',
        image: img1,
        link1: 'https://github.com/ShahSau/Python_Data_Science/tree/master/COVID-19%20Analysis',
        link2: '',
        link3: '',
        title: 'COVID-19 Analysis',
        technologies:["Pandas,", "Plotly,", "Folium,", "Numpy."],
        text: 'Analyzed Covid-19 Pandemic dataset from Johns Hopkins University & THL.'
    },
    {
        id: 2,
        category: 'FrontEnd',
        image: img2,
        link1: 'https://github.com/ShahSau/Backpackr',
        link2: 'https://backpackr.netlify.app/',
        link3: '',
        title: 'Backpackr',
        technologies:["React,", "Material UI,", "Google Maps API,", "Rapid API,", "weather map API."],
        text: 'This is a travel advisor website, where users can search restaurants, hotels and attractions near them. Users can change the location and also filter the result.It also shows the current weather at that location.'
    },
    {
        id: 3,
        category: 'Backend',
        image: img3,
        link1: 'https://github.com/ShahSau/Flask/tree/main/FeedBackForm%20',
        link2: '',
        link3: '',
        title: 'FeedBack Form',
        technologies:["Flask,","Jinja2,","SQLAlchemy"],
        text: 'A feddback form, that stores data from the form.'
    },
    {
        id: 4,
        category: 'Data Analysis',
        image: img4,
        link1: 'https://github.com/ShahSau/R_Data_Science/blob/master/DataCamp-R/%20RISE%20AND%20FALL%20OF%20PROGRAMMING%20LANGUAGES/Rise%20and%20Fall%20of%20Programming%20Languages%202/notebook.ipynb',
        link2: '',
        link3: '',
        title: 'Trend in Programming Languages',
        technologies:["readr,", "dplyr,", "tidyverse,", "ggplot2."],
        text: 'Analyzing the trend in programming language from year 2008 to 2018 using data obtained from Stack Overflow.'
    },
    {
        id: 0,
        category: 'Fullstack',
        image: img0,
        link1: 'https://github.com/ShahSau/part3_HU',
        link2: 'https://calm-thicket-11450.herokuapp.com/',
        link3: 'https://youtu.be/uSEI-h2RCT4',
        title: 'CURD application',
        technologies:["React,", "Express,", "Node,", "MongoDB,", "Heroku,","REST API."],
        text: 'Phonebook app where user add, remove or update data.'
    },
    {
        id: 5,
        category: 'Fullstack',
        image: img5,
        link1: 'https://github.com/ShahSau/Flask/tree/main/Weather%20app/weatherApp',
        link2: '',
        link3: '',
        title: 'Weather App (Flask)',
        technologies:["flask,", "flask sqlalchemy,", "HTML5,", "CSS3,", "Docker,", "REST API."],
        text: 'A simple weather app.'
    },
    {
        id: 6,
        category: 'FrontEnd',
        image: img6,
        link1: 'https://github.com/ShahSau/React/tree/main/Pokemon%20',
        link2: 'https://6091a5202c719311ad1175be--epic-leakey-1c63a6.netlify.app/',
        link3: 'https://youtu.be/MevCWZgfxuE',
        title: 'Pokemon',
        technologies:["React,", "Bootstrap,", "REST API."],
        text: 'Data fetched from pokemon API and displayed using react.'
    },
    {
        id: 8,
        category: 'Data Analysis',
        image: img8,
        link1: 'https://github.com/ShahSau/Python_Data_Science/tree/master/Flight%20Delays%20and%20Cancellations',
        link2: '',
        link3: '',
        title: 'Flight Delays and Cancellations',
        technologies:["pandas,", "plotly,", "seaborn,", "dask."],
        text: 'Explored the flights in different airports in USA in 2015'
    },
    {
        id: 9,
        category: 'Backend',
        image: img9,
        link1: 'https://github.com/ShahSau/Backend-Project/tree/main/Login_page_with_authentication',
        link2: 'https://stark-beach-09227.herokuapp.com/',
        link3: '',
        title: 'Login page with authentication',
        technologies:["Javascript,", "Express,", "Node,", "Mongodb,","Passport.js."],
        text: 'Its a login page with authentication'
    },
    {
        id: 11,
        category: 'FrontEnd',
        image: img11,
        link1: 'https://github.com/ShahSau/React/tree/main/Movie_search_app',
        link2: 'https://60d61d3781e2cf8aa7ed8471--elastic-keller-07ea9c.netlify.app/',
        link3: '',
        title: 'Entertainment Vibe',
        technologies:["React,", "React-DOM,", "material ui,", "REST API."],
        text: 'This is an movie search app using data from The Movie Database.'
    },
    {
        id: 12,
        category: 'Data Analysis',
        image: img12,
        link1: 'https://github.com/ShahSau/Python_Data_Science/blob/master/%20House%20Sales%20in%20King%20County%2C%20USA.ipynb',
        link2: '',
        link3: '',
        title: 'House Sales in King County, USA',
        technologies:["pandas,", "seaborn,", "scikit-learn,", "numpy."],
        text: 'This dataset contains house sale prices for King County in the year 2014 & 2015.'
    },
    {
        id: 13,
        category: 'Design',
        image: img13,
        link1: 'https://github.com/ShahSau/React/tree/main/Rent-Car',
        link2: '',
        link3: 'https://youtu.be/0ObE4fOsGTw',
        title: 'Rent A Car',
        technologies:["React,", "Typescript", "Tailwind"],
        text: 'This is a car renting website.'
    },
    {
        id: 7,
        category: 'Others',
        image: img7,
        link1: 'https://github.com/ShahSau/JavaScript/tree/main/Killing%20Spider',
        link2: 'https://compassionate-joliot-a4dcf7.netlify.app/',
        link3: '',
        title: 'Killing Spider',
        technologies:["Javascript,","HTML5,","CSS3."],
        text: 'A small RPG (Role Playing Game) using core Javascript, HTML5 and CSS3.'
    },
    {
        id: 14,
        category: 'FrontEnd',
        image: img14,
        link1: 'https://github.com/ShahSau/React/tree/main/Recipe%20App/recipe-app',
        link2: 'https://6097058f5a99220b5a6b58c4--naughty-wescoff-9ad9ba.netlify.app/',
        link3: '',
        title: 'Recipe App',
        technologies:["React,", "React Route,", "Bootstrap,", "REST API."],
        text: 'This website was build using recipe API from Edamam .'
    },

]

export default portfolios;

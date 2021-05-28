import img0 from '../img/portImages/0.png'
import img1 from '../img/portImages/1.png'
import img3 from '../img/portImages/3.png'
import img4 from '../img/portImages/4.png'
import img5 from '../img/portImages/5.png'
import img7 from '../img/portImages/7.png'
import img8 from '../img/portImages/8.png'
import img9 from '../img/portImages/9.png'
import img12 from '../img/portImages/12.png'




const portfolios = [
    {
        id: 0,
        category: 'Fullstack',
        image: img0,
        link1: 'https://calm-thicket-11450.herokuapp.com/',
        link2: 'https://github.com/ShahSau/part3_HU',
        title: 'CURD application',
        technologies:["React,", "Express,", "Node,", "MongoDB,", "Heroku,","REST API."],
        text: 'Phonebook app where user add, remove or update data.'
    },
    {
        id: 1,
        category: 'Data Analysis',
        image: img1,
        link1: 'https://github.com/ShahSau/Python_Data_Science/tree/master/COVID-19%20Analysis',
        link2: '',
        title: 'COVID-19 Analysis',
        technologies:["Pandas,", "Plotly,", "Folium,", "Numpy."],
        text: 'Analyzed Covid-19 Pandemic dataset from Johns Hopkins University and Terveyden ja hyvinvoinnin laitos(THL).'
    },
    {
        id: 2,
        category: 'FrontEnd',
        image: img1,
        link1: '',
        link2: '',
        title: '',
        technologies:[""],
        text: ''
    },
    {
        id: 3,
        category: 'Backend',
        image: img3,
        link1: 'https://github.com/ShahSau/Flask/tree/main/FeedBackForm%20',
        link2: '',
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
        title: 'Trend in Programming Languages',
        technologies:["readr,", "dplyr,", "tidyverse,", "ggplot2."],
        text: 'Analyzing the trend in programming language from year 2008 to 2018 using data obtained from Stack Overflow.'
    },
    {
        id: 5,
        category: 'Fullstack',
        image: img5,
        link1: 'https://github.com/ShahSau/Flask/tree/main/Weather%20app/weatherApp',
        link2: '',
        title: 'Weather App (Flask)',
        technologies:["flask,", "flask sqlalchemy,", "HTML5,", "CSS3,", "Docker,", "REST API."],
        text: 'A simple weather app, that takes input from users and display the current weather in the city of the user\'s choice.'
    },
    {
        id: 6,
        category: 'FrontEnd',
        image: img1,
        link1: '',
        link2: '',
        title: '',
        technologies:[""],
        text: ''
    },
    {
        id: 7,
        category: 'Others',
        image: img7,
        link1: 'https://github.com/ShahSau/JavaScript/tree/main/Killing%20Spider',
        link2: 'https://compassionate-joliot-a4dcf7.netlify.app/',
        title: 'Killing Spider',
        technologies:["Javascript,","HTML5,","CSS3."],
        text: 'A small RPG (Role Playing Game) using core Javascript, HTML5 and CSS3.'
    },
    {
        id: 8,
        category: 'Data Analysis',
        image: img8,
        link1: 'https://github.com/ShahSau/Python_Data_Science/tree/master/Flight%20Delays%20and%20Cancellations',
        link2: '',
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
        title: 'Login page with authentication',
        technologies:["Javascript,", "Express,", "Node,", "Mongodb,","Passport.js."],
        text: 'Its a login page with authentication'
    },
    
    {
        id: 12,
        category: 'Data Analysis',
        image: img12,
        link1: 'https://github.com/ShahSau/Python_Data_Science/blob/master/%20House%20Sales%20in%20King%20County%2C%20USA.ipynb',
        link2: '',
        title: 'House Sales in King County, USA',
        technologies:["pandas,", "seaborn,", "scikit-learn,", "numpy."],
        text: 'This dataset contains house sale prices for King County, which includes Seattle. It includes homes sold between May 2014 and May 2015.'
    },

]

export default portfolios;
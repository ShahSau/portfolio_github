import { DiPython, DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import { FaReact, FaNode } from "react-icons/fa";
import {
  SiRedux,
  SiCsharp,
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiBootstrap,
  SiMaterialui,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiDjango,
  SiGraphql,
  SiJest,
  SiCypress,
  SiHeroku,
  SiAmazonaws,
  SiNetlify,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiLinux,
  SiTableau,
  SiFigma,
} from "react-icons/si";
import djREST from '../img/skills/djREST.webp'
import rest from '../img/skills/rest.png'
import mocha from '../img/skills/mocha.png'
import native from '../img/skills/native.png'
const tech = [
  {
    id: 0,
    title: "Languages",
    image: [<DiPython />, <DiJavascript />, <SiCsharp />, <SiCsharp />],
  },
  {
    id: 1,
    title: "Frontend Technologies",
    image: [
      <DiHtml5 />,
      <DiCss3 />,
      <FaReact />,
      <SiRedux />,
      <SiTypescript />,
      <SiNextdotjs />,
      <SiVuedotjs />,
      <SiBootstrap />,
      <SiMaterialui />,
      <SiTailwindcss />,
    ],
  },
  {
    id: 2,
    title: "Backend Technologies",
    image: [
      <FaNode />,
      <SiExpress />,
      <SiFlask />,
      <SiDjango />,
      <img key={Math.random()} src={djREST} alt="djREST" />,
      <SiGraphql />,
      <img key={Math.random()} src={rest} alt="REST" />,
    ],
  },
  {
    id: 3,
    title: "Testing & Cloud",
    image: [
      <SiJest />,
      <SiCypress />,
      <img key={Math.random()} src={mocha} alt="REST" />,
      <SiHeroku />,
      <SiAmazonaws />,
      <SiNetlify />,
    ],
  },
  //   {
  //     id: 4,
  //     title: "Machine learning & Data Science",
  //     image: [sklearn, opencv, numpy, pandas, bokeh, plotly, tidyverse],
  //   },
  {
    id: 5,
    title: "Database",
    image: [<SiPostgresql />, <SiSqlite />, <SiMongodb />, <SiFirebase />],
  },
  {
    id: 6,
    title: "Others",
    image: [<SiFigma />, <img key={Math.random()} src={native} alt="REST" />,, <SiTableau />, <SiLinux />, <SiDocker />],
  },
];
// images are saved in imagebb.com
export default tech;

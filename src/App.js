import  React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, useLocation, Switch as Switching } from 'react-router';
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import SkillsPage from './Pages/SkillsPage';
import PageNotFound from './Pages/PageNotFound';
import DetailsPage from './Pages/DetailsPage';

// import Switch from '@material-ui/core/Switch'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState('dark-theme');
  // const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // const themeToggler = () =>{
  //   if(theme === 'light-theme'){
  //     setTheme('dark-theme');
  //     setChecked(false)
  //   }else{
  //     setTheme('light-theme');
  //     setChecked(true)
  //   }
  // }

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />
      {!navToggle && (
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(true)}>
          <MenuIcon />
        </IconButton>
      </div>
      )}
      {navToggle && (
      <div className="ham-burger-menu cross">
        <IconButton onClick={() => setNavToggle(false)}>
          <ClearIcon />
        </IconButton>
      </div>
      )}

      <AnimatePresence exitBeforeEnter initial={false}>
        <MainContentStyled>
          <Switching location={location} key={Location.pathname}>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/portfolios/:name" >
              <DetailsPage />
            </Route>
            <Route path="/skills" exact>
              <SkillsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switching>
        </MainContentStyled>
      </AnimatePresence>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  
  }
`;

export default App;

import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import './components.css'





function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function MenuAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar className='AppBar' position="fixed">
        <Container className='Container' fixed >
          <Toolbar className='Toolbar'>
            <Button color="inherit"><Link to="/">Главная</Link></Button>
            <Button color="inherit"><Link to="/price">Цены</Link></Button>
            <Button color="inherit"><Link to="/contacts">Контакты</Link></Button>
            <Button color="inherit"><Link to="/account">Аккаунт</Link></Button>
          </Toolbar>
        </Container>
      </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default MenuAppBar;
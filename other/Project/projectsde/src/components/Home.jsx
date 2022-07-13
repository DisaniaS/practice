import { Container } from '@mui/material';
import React from 'react'
import './components.css'
import logo from './logo.png';


const Home = () => {
  return (
    <Container className='Home_Page'>
        <div className="App-logo">
            <img src={logo} className="logo" alt="logo" srcset=""/>
        </div>
    </Container>
  )
}

export default Home
import { Container } from '@mui/material'
import React from 'react'
import PriceTable from './PriceTable'
import './components.css'

const PriceList = () => {
  return (
    <Container className='Tablica'>
      <PriceTable/>
    </Container>
  )
}

export default PriceList
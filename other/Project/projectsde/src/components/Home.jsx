import React from 'react'
import './components.css'
import logo from './logo.png'


const Home = () => {
  return (
    <div>
      <div className="Home-Menu">
        <div className="Home-Menu-Item"><a href="#about">О нас</a></div>
        <div className="Home-Menu-Item"><a href="#gallery">Галерея</a></div>
        <div className="Home-Menu-Item"><a href="#team">Наша команда</a></div>
        <div className="App-logo">
          <img src={logo} className="logo" alt="logo" srcset=""/>
        </div>
      </div>
      <div className='Welcome'> 
        <div>
        </div>      
      </div>
      <div id='about'>
        <div className='about-title'>О нашем клубе</div>
        <div >
          <li>Мы - любители аниме и спорта, поэтому создали собственный тематический спортивной зал на основе культового аниме-сериала "Боец Баки".
            На нашем логотипе красуется отец главного героя сериала, сильнейший человек планеты - Ханма Юдзеро. 
            Посметрев этот великолепный тайтл, наша команда настолько замотивировалась заниматься спортом, чтобы хоть на шаг приблизиться к силе и воле этого персонажа. 
            А также мы загорелись идеей открыть свой спортивный зал и мотивировать остальных людей к такому же стремлению, как и наше собственное.
          </li>
          
        </div>
      </div>
      <div id='gallery'></div>
      <div id='team'></div>
    </div>
  )
}

export default Home
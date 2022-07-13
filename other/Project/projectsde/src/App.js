import './App.css';
import MenuAppBar from './components/MenuAppBar';
import {Routes, Route, Link,} from 'react-router-dom';
import PriceList from './components/PriceList';
import Home from './components/Home';
import logo from './components/logo.png';
import Contacts from './components/Contacts';
import Account from './components/Account';


function App() {
  return (
     <div className="App">
      <header className="App-header">
        <MenuAppBar/>
        
      </header>
      <body className='Body-Home'>
        <div className="App-logo">
            <img src={logo} className="logo" alt="logo" srcset=""/>
        </div>
      </body>
      <Routes>
          <Route path='/' element={Home}/>
          <Route path='/price' element={PriceList}/>
          <Route path='/contacts' element={Contacts}/>
          <Route path='/account' element={Account}/>
      </Routes>
     </div> 

   

  );
}

export default App;



import React ,{ useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Heading from './components/Header/Heading';
import Footer from './components/Footer/Footer';
import Deals from './components/Deals/Deals';
import BigCard from './components/BigCard/BigCard';
import BigCardFourth from './components/BigCard/BigCardFourth';

function App() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(current_theme ?  current_theme : "light");

  useEffect(() => {
    localStorage.setItem('current_theme',theme);
    console.log('Updated..!!!');
    console.log(theme);
  },[theme])

  return (
    
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Heading />
        <BigCard rating={9.8} review={"Exceptional"} caption={"Builder1"} theme={theme}/>
        <BigCard rating={9.5} review={"Excellent"} caption={"Builder2"} theme={theme}/>
        <BigCard rating={9.3} review={"Exceptional"} caption={"Builder3"} theme={theme}/>
        <BigCardFourth theme={theme} />
        <Deals  theme={theme}/>
      </div>
      <Footer />
    </>
      
      
    
    
  )
}

export default App

import React from 'react';
import Header from '../../components/Header/Header';
import Service from '../../components/Service/Service';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className="home">
   <Header/>
   <Service/>
   <About/>
   <Contact/>
   <Footer/>
   </div>
  )
}

export default Home

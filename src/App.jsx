import  {React,useState,useEffect} from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './index.css'
import Myphotos from './components/myphotos/Myphotos';

const App = () => {

  const [loading, setLoading] = useState(false);

   

    useEffect (()=>{
        setLoading(true)
        console.log(loading);
        setTimeout(() => {
            setLoading(false)
            console.log(loading)
          },3000);
    },[])

    if(loading){
     return(
       <div className="loader-container">
        <h2 className='text-load'>Loading...</h2>
          <div class="spinner"></div>
       </div>
     
     ) 
    }
      
    
return (

      
    <>
   
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Myphotos/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
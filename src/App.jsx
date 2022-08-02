import  {React,useState,useEffect} from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import './index.css'

const App = () => {

  const [loading, setLoading] = useState(true);

   

    useEffect (()=>{
       
        console.log(loading);
        setTimeout(() => {
            
            console.log(loading)
          },);
    },[])

    if(loading){
     return(
       <div className="loader-div">
         Loading.
          <div class="loader">Loading...</div>
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
    <Testimonials/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
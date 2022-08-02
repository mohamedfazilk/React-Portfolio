import {React,useState,useEffect} from 'react';
import './loading.css';


const Loading = () => {
    const [Loading, setLoading] = useState(true);

   

    useEffect (()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
          }, 2000);
    },[])

  
  return (
    <h3></h3>
  )
}

export default Loading
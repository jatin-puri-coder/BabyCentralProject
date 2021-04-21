import React, { useState, useEffect} from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

import { getPhotographers } from '../api'

function BabyPhotography() {
    const [photographers, setPhotographers] = useState([])

    useEffect(() => {
        getPhotographers()
          .then(photographer => {
            setPhotographers(photographer)
            
            return null
          })
          .catch(e => {
            console.log(e)
          })  
      }, [])

      

    return ( 
      <>
         <h1 className='title'>Baby Photographers</h1>  
         <div className='photographers'>
           {photographers.map(({name, location, image}) => 
           <>
           <Link to={'/photographers/' + name}>
           <div className='photographerbox'>      
              <h2>{name}</h2>  
              <h4 className='location'>- {location}</h4>
              <img className='mainbabypics' src= {image} />      
           </div>
           </Link>
           </>
           )}
           
      
         </div>
      </>
    )
}


export default BabyPhotography
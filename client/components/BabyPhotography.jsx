import React, { useState, useEffect} from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

import { getPhotographers } from '../api'

function BabyPhotography(props) {
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
           <div className='photographerbox'>
            <Link to={'/photographers/' + name}>
              <h2>{name}</h2>
            </Link>
              <h4 className='location'>- {location}</h4>
              <img className='mainbabypics' src= {image} />      
           </div>
           </>
           )}
           
      
         </div>
      </>
    )
}


export default BabyPhotography
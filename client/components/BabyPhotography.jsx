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
           <Link to={'/photographers/' + name}>
              <h2>{name}</h2>
              <img src= '${image}' />
           </Link>
           <h2>{location}</h2>
           </>
           )}
           
         </div>
      </>
    )
}


export default BabyPhotography
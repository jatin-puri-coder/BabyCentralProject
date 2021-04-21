import React, { useState, useEffect} from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

import { getPhotographers } from '../api'

function Photographers () {
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
        <div>
        {photographers.map(({name, location, image}) => 
          <>
            <h1 className='title'>{name}</h1> 

          </>
        )}
        </div>
      )
}

export default Photographers
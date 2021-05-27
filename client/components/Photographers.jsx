import React, { useState, useEffect} from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

import { getPhotographers } from '../api'

function Photographers (props) {
  const [photographers, setPhotographers] = useState([])

  console.log(props.match.params)

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

  // const currentPhotographer = photographers.find((props) => {
  //     return props.match.params
  // })

  return (
    <div>

      {/* //if not currentPhotographer show loading else show photgrapher details */}

      {photographers.map(({name, location, image}) => 
        <>
          <h1 className='title'>{name}</h1> 

        </>
      )}
    </div>
  )
}

export default Photographers

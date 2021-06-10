import React, { useState, useEffect } from 'react'

import { getPhotographerByName } from '../api'

function Photographers (props) {
  const photographerName = props.match.params.name
  const [photographer, setPhotographer] = useState('')

  console.log(props.match.params)

  useEffect(() => {
    getPhotographerByName(photographerName)
      .then(photographer => {
        setPhotographer(photographer)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [photographerName])

  return (
    <div className='photographerpage'>
      <h1 className='title'>{ photographer.name }</h1>
      <h4 className='specificlocation'>{ photographer.location }</h4>
      <img className='mainbabypics' src={photographer.image}></img>
      <div className='info'>
        <p>{ photographer.about }</p>
        <a target='blank' href={photographer.website}>{ photographer.website }</a>
      </div>

    </div>
  )
}

export default Photographers

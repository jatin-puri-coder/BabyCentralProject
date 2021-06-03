import request from 'superagent'

const photographerUrl = '/api/v1/photographers/'

export function getPhotographers () {
  return request
    .get(photographerUrl)
    .then(response => response.body)
}

export function getPhotographerByName (photographerName) {
  return request
    .get(photographerUrl + '/' + photographerName)
    .then(res => res.body)
}

export function getPhotographerById (photographerId) {
  return request
    .get(photographerUrl + '/' + photographerId)
    .then(res => res.body)
}

import request from 'superagent'

const photographerUrl = '/api/v1/photographers/'

export function getPhotographers () {
  return request
      .get(photographerUrl)
      .then(response => response.body)
}
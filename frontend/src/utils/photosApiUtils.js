import { csrfFetch } from "./authUtils"

export const fetchAllPhotos= () => (
  fetch('/api/photos')
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        // error handling
      }
    })
)

export const fetchPhoto = async photoId => {
  const res = await fetch(`/api/photos/${photoId}`)
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    // error handling
  }
}

export const createPhoto = async photo => {
  const res = await csrfFetch('/api/photos', {
    method: 'POST'
  })
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    // error handling
  }
}

export const deleteTea = teaId => (
  fetch(`/api/teas/${teaId}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        // error handling
      }
    })
)
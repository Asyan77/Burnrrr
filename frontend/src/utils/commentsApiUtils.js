// import { csrfFetch } from "./authUtils"


// // index
// export const fetchAllComments= () => (
//   fetch('/api/comments')
//     .then(res => {
//       if(res.ok) {
//         return res.json()
//       } else {
//         // error handling
//       }
//     })
// )


// //show
// export const fetchComment = async commentId => {
//   const res = await fetch(`/api/comments/${commentId}`)
//   if (res.ok) {
//     const data = await res.json()
//     return data
//   } else {
//     // error handling
//   }
// }


// //post
// export const createComment = async photo => {
//   const res = await csrfFetch('/api/comments', {
//     method: 'POST'
//   })
//   if (res.ok) {
//     const data = await res.json()
//     return data
//   } else {
//     // error handling
//   }
// }

// //patch
// export const updateComment = async photo => {
//     const res = await csrfFetch('/api/comments', {
//       method: 'PATCH'
//     })
//     if (res.ok) {
//       const data = await res.json()
//       return data
//     } else {
//       // error handling
//     }
//   }

// //delete
// export const deleteComment = photoId => (
//   fetch(`/api/comments/${photoId}`, {
//     method: 'DELETE'
//   })
//     .then(res => {
//       if (res.ok) {
//         return res.json()
//       } else {
//         // error handling
//       }
//     })
// )
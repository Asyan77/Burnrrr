const UPLOAD_PHOTO = 'photo/UPLOAD_PHOTOS'
const SET_PHOTOS = 'photo/SET_PHOTOS';
const UPDATE_PHOTO = 'photo/UPDATE_PHOTO';
const GET_PHOTO = 'photo/GET_PHOTO';
const USER_PHOTOS = 'photo/USER_PHOTOS';
const DELETE_PHOTO = 'photo/DELETE_PHOTO';


const setPhotos = (photos) => ({
    type: SET_PHOTOS,
    photos

})

const getPhotoById = (photo) => ({
    type: GET_PHOTO,
    photo
})

const updatePhoto = (photo) => ({
    type: UPDATE_PHOTO,
    photo
})

const uploadPhoto = (photo) => ({
    type: UPLOAD_PHOTO,
    photo
})
const deletePhoto = (photo) => ({
    type: DELETE_PHOTO,
    photo
})

export const getPhotos = (state) => state.photos ? Object.values(state.photos) : null
export const getPhoto = (id) => (state) => state.photos[id]
export const getUserPhotos = (userId) => (state) => state.photos ? Object.values(state.photos.userId[userId]) : null

export const getAllPhotos = () => async (dispatch) => {
    const response = await fetch('/api/photos')
    if (response.ok) {
        const data = await response.json()
        dispatch(setPhotos(data))
        return data
    }
}
export const getAllPhotosByUserId = (id) => async (dispatch) => {
    const response = await fetch(`/api/photos?userId=${id}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(setPhotos(data))
        return data
    }
}

export const getPhotoByIdTHUNK = (photoId) => async dispatch => {
    const res = await fetch(`/api/photos/${photoId}`);
    if (res.ok) {
        const data = await res.json()
        dispatch(getPhotoById(data))
        return data
    }
}

export const deletePhotoTHUNK = (id) => async (dispatch) => {
    const res = await fetch(`/api/photos/${id}`, {
        method: "DELETE"
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(deletePhoto(data))
        return data
    }
}

export const editPhotoTHUNK = (payload) => async dispatch => {
    const { photoId, title, description, people, albums } = payload
    const response = await fetch(`/api/photos/${photoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, people, albums })
    })

    if (response.ok) {
        const question = await response.json()
        dispatch(updatePhoto(question))
        return question
    }
}


const photoReducer = (state, action) => {
    const currentState = state ? state : {}

    switch (action.type) {
        case SET_PHOTOS: {
            return action.photos
        }

        case GET_PHOTO: {
            return {...currentState, [action.photo.id]: action.photo }
        }

        case USER_PHOTOS: {
            return action.photos
        }

        case DELETE_PHOTO: {
            const newState = { ...currentState }
            delete newState.allPhotos[action.payload];
            return newState;
        }
        case UPDATE_PHOTO:

            return {
                ...currentState,
                [action.payload.id]: action.payload
            }
        default:
            return currentState;
    }
}

export default photoReducer
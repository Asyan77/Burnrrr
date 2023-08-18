const SET_PHOTOS = 'photo/SET_PHOTOS';
const DELETE_PHOTO = 'photo/DELETE_PHOTO';
const UPDATE_PHOTO = 'photo/UPDATE_PHOTO';
const GET_PHOTO = 'photo/GET_PHOTO';
const USER_PHOTOS = 'photo/USER_PHOTOS';


const setPhotos = (photos) => ({
    type: SET_PHOTOS,
    photos

})

const deletePhoto = (photo) => ({
    type: DELETE_PHOTO,
    photo
})

const updatePhoto = (photo) => ({
    type: UPDATE_PHOTO,
    photo
})

const getPhotoById = (photo) => ({
    type: GET_PHOTO,
    photo
})

const userPhotos = (photos) => ({
    type: USER_PHOTOS,
    photos
})

export const getPhotos = (state) => state.photos ? Object.values(state.photos) : null

export const getAllPhotos = () => async (dispatch) => {
    const response = await fetch('/api/photos')
    if (response.ok) {
        const data = await response.json()
        dispatch(setPhotos(data))
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

export const getPhotoByIdTHUNK = (imageId) => async dispatch => {
    const res = await fetch(`/api/photos/${imageId}`);
    if (res.ok) {
        const data = await res.json()
        dispatch(getPhotoById(data))
        return data
    }
}

export const getUserPhotosTHUNK = (userId) => async dispatch => {
    const res = await fetch(`/api/photos/user/${userId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(userPhotos(data))
        return data
    }
}

// const initialState = { allPhotos: {}, curr entPhoto: {}, userPhotos: {}};

const photoReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PHOTOS: {
            return action.photos
        }

        case GET_PHOTO: {
            const newState = { ...state }
            newState.currentPhoto = {}
            const photo = action.photo
            newState.currentPhoto = photo
            return newState
        }

        case USER_PHOTOS: {
            const newState = { ...state }
            newState.userPhotos = {}
            const photos = action.photo
            newState.userPhotos = photos
            return newState
        }

        case DELETE_PHOTO: {
            const newState = { ...state }
            delete newState.allPhotos[action.payload];
            return newState;
        }
        case UPDATE_PHOTO:

            return {
                ...state,
                [action.payload.id]: action.payload
            }
        default:
            return state;
    }
}

export default photoReducer
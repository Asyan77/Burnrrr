const SET_COMMENTS = 'comment/SET_COMMENTS';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT';
const GET_COMMENT = 'comment/GET_COMMENT';



const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments

})

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment
})


export const getAllComments = () => async (dispatch) => {
    const response = await fetch('/api/comments')
    if (response.ok) {
        const data = await response.json()
        dispatch(setComments(data))
        return data
    }
}


export const deleteCommentTHUNK = (id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${id}`, {
        method: "DELETE"
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(deleteComment(data))
        return data
    }
}

export const editCommentTHUNK = (payload) => async dispatch => {
    const { photoId, authorId, body } = payload
    const response = await fetch(`/api/comments/${photoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body, photoId, authorId })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(updateComment(data))
        return data
    }
}


const commentsReducer = (state= {}, action) => {
    const currentState = state ? state : {}

    switch (action.type) {
        case SET_COMMENTS: {
            return action.comments
        }

        case GET_COMMENT: {
            const newState = { ...state }
           
            const photo = action.photo
            newState.currentPhoto = photo
            return newState
        }

        case DELETE_COMMENT: {
            const newState = { ...state }
            delete newState.allPhotos[action.payload];
            return newState;
        }
        case UPDATE_COMMENT:

            return {
                ...state,
                [action.payload.id]: action.payload
            }
        default:
            return state;
    }
}

export default commentsReducer
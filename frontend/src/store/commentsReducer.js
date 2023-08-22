const GET_COMMENTS = 'comment/GET_COMMENTS';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';

const getComments = (comments) => ({
    type: GET_COMMENTS,
    comments

})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment

})

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})
const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})


export const getAllComments = (state) => state.comments ? Object.values(state.comments) : null


export const fetchAllComments = () => async (dispatch) => {
    const response = await fetch('/api/comments')
    if (response.ok) {
        const data = await response.json()
        dispatch(getComments(data))
        return data
    }
}

// export const fetchComment = (id) => async (dispatch) => {
//     const response = await fetch(`/api/comments/${id}`)
//     if (response.ok) {
//         const data = await response.json()
//         dispatch(editComment(data))
//         return data
//     }
// }

export const deleteCommentThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${id}`, {
        method: "DELETE"
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(deleteComment(data))
        return data
    }
}

export const editCommentThunk = (payload) => async dispatch => {
    const { commentId, authorId, body } = payload
    const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body, commentId, authorId })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(editComment(data))
        return data
    }
}


const commentsReducer = (state, action) => {
    const currentState = state ? state : {}

    switch (action.type) {
        case GET_COMMENTS: {
            return action.comments
        }

        case ADD_COMMENT: {          
            return {...currentState, [action.comment.id]: action.comment }
        }

        case DELETE_COMMENT: {
            const newState = { ...currentState}
            delete newState[action.comment];
            return currentState;
        }
        case EDIT_COMMENT:
            return {...currentState, [action.payload.id]: action.payload }

        default:
            return currentState;
    }
}

export default commentsReducer
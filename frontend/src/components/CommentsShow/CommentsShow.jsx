import { useSelector } from 'react-redux'
import './CommentsShow.css'
import { useEffect, dispatch, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'



const CommentsShow = () => {
    const comments = useSelector(state => state.comments)
    const user = useSelector(state => state.session.currentUser)
    const [form, setForm] = useState({ title: '', body: ''})
    const {photoId} = useParams()

    // useEffect(() => {
    //     dispatch(getPhotoByIdTHUNK(photoId))
    // }, [dispatch])

    if(!comments) {
        return null
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // if (postId) {
        //     dispatch(updatePost(form))
        // } else {
        //     dispatch(createPost(form))
        // }
    }

    return (
        <div className='comment-box-container'>
            <form className='form' onSubmit={handleSubmit}>             
              <h1>Leave a Comment</h1>
              <input type='text' className='comment-box' value={form.body} placeholder='Write your comment here' onChange={(e) => setForm({...form, body: e.target.value}) }/>
              <button className='comment-btn'> Comment </button>
            </form>
        </div>
    )
}

export default CommentsShow
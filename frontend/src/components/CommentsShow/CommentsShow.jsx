import { useSelector } from 'react-redux'
import './CommentsShow.css'
import { useEffect } from 'react'


const CommentsShow = () => {
    const comments = useSelector(state => state.comments)
    const user = useSelector(state => state.session.currentUser)


    useEffect(() => {
        dispatch(getPhotoByIdTHUNK(photoId))
    }, [dispatch])
    return (

    )
}

export default CommentsShow
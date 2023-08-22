import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { getPhotoByIdTHUNK } from "../../store/photosReducer";
import React from 'react'
import { useEffect } from "react";
import { fetchAllComments } from "../../store/commentsReducer";

const UsersSinglePhoto = () => {
    const dispatch = useDispatch
    const { user_Id, photoId } = useParams()
    const currentUser = useSelector(state => state.session.user)
    const currentPhoto = useSelector(state => state.photoReducer.currentPhoto[photoId])
    const comments = useSelector(state => state.comments.comments )
    
    const photo = useSelector(getPhotoByIdTHUNK(photoId))

    useEffect(() => {
        dispatch(getPhotoByIdTHUNK(photoId))
    }, [dispatch, photoId])

    useEffect(() => {
        dispatch(fetchAllComments())
    }, [dispatch])

    return ( // displays current photo at the top half of page along with , bottom half is the title, description and comments 
        <div>
            <div>
                <img src={photo.photoUrl} alt="" className="single-photo-picture" />
            </div>
            {comments.map(comment => {
            return (
             <ul>
                <li key={comment.id}>{comment}</li>
             </ul>
            );
          })}

        </div>

        
    )
}

export default UsersSinglePhoto
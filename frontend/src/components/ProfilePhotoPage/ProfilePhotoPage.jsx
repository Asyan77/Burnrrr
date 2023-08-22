import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { getPhotoByIdTHUNK } from "../../store/photosReducer";
import React from 'react'
import { useEffect } from "react";
import { getAllComments } from "../../store/commentsReducer";

const ProfilePhotoPage = () => {
    const dispatch = useDispatch
    const { user_Id, photoId } = useParams()
    const currentUser = useSelector(state => state.session.user)
    const currentPhoto = useSelector(state => state.photoReducer.currentPhoto[photoId])
    // const comments = useSelector(state => state.commentReducer )
    
    const photo = useSelector(getPhotoByIdTHUNK(photoId))

    useEffect(() => {
        dispatch(getPhotoByIdTHUNK(photoId))
    }, [dispatch, photoId])

    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch])

    return ( // displays current photo at the top half of page along with , bottom half is the title, description and comments 
        <div>
            <div>
                <img src={photo.photoUrl} alt="" className="single-photo-picture" />
            </div>
            

        </div>

        
    )
}

export default ProfilePhotoPage
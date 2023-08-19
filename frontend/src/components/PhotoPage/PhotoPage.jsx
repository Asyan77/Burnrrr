import { useSelector } from "react-redux";
import { useParams } from "react-router"
import { getPhotoByIdTHUNK } from "../../store/photosReducer";
import React from 'react'

const PhotoPage = () => {
    const photoId = useParams();
    const photo = useSelector(getPhotoByIdTHUNK(photoId))

    return (
        <img src={photo.photoUrl} alt="" className="single-photo-picture" />
    )
}

export default PhotoPage
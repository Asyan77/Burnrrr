import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotosTHUNK } from "../../store/photosReducer";


const You = () => {
    const user = useSelector(state => state.session.currentUser)
    const userId = user.id
    const photos = useSelector(getUserPhotosTHUNK(userId))

    return (
       <div>
        <ul className="photoimage-grid"> 
          {photos.map(photo => {
            return (
                <imgc lassName="photoimage" key={photo.id} src={photo.photoUrl} alt="" />
            );
          })}
        </ul>
       </div>
    )
}

export default You
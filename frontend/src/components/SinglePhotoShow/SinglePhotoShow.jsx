import { getPhoto, getPhotoByIdTHUNK } from "../../store/photosReducer";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './SinglePhotoShow.css'
import CommentsShow from "../CommentsShow/CommentsShow";

const SinglePhotoShow =() => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const photo = useSelector(getPhoto(id))
    const charles = 'Salvage'
    const riley = 'Riley Monster'
    const ben = 'Squeeze'
    const zach = 'ProZach'

    useEffect(() => {
        dispatch(getPhotoByIdTHUNK(id))
       }, [dispatch]);
    
       if(!photo) {
        return null
       }

    return (
        <div className="single-photo-show-box">
            <div className="photo-container">
              <img className='single-photo' src={photo.photoUrl}></img>
            </div>
            <div className="outer-photo-details-box">
                <div className="photo-details">
                    <p className="photo-title">{photo.title}</p>
                    <p className="photo-by">Photo by: {photo.userId}</p>
                    <p className="photo-description">{photo.description}</p>
                </div>
                <CommentsShow/>
            </div>
                
        </div>
    )
}

export default SinglePhotoShow
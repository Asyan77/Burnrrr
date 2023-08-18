import { useSelector } from "react-redux";
import { useParams } from "react-router"
import { getPhotoByIdTHUNK } from "../../store/photosReducer";

const SinglePhotoShow = () => {
    const photoId = useParams();
    const photo = useSelector(getPhotoByIdTHUNK(photoId))

    return (
        <img src={photo.photoUrl} alt="" className="single-photo-picture" />
    )
}

export default SinglePhotoShow
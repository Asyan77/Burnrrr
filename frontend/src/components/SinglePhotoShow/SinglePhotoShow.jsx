import { getPhoto, getPhotoByIdTHUNK } from "../../store/photosReducer";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SinglePhotoShow =() => {
    const { id } = useParams();
    const dispatch = useDispatch
    const photo = useSelector(getPhoto)

    useEffect(() => {
        dispatch(getPhotoByIdTHUNK(id))
       }, [dispatch]);
    

    return (
        <>
        <h1>hiiiii</h1>
  

        </>
    )
}

export default SinglePhotoShow
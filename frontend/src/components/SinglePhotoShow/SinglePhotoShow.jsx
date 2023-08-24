import { getPhotoByIdTHUNK } from "../../store/photosReducer";
import { useParams } from "react-router"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SinglePhotoShow =() => {
    const { id } = useParams();
    console.log(id)
    const dispatch = useDispatch

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
import { getPhotoByIdTHUNK } from "../../store/photosReducer";
import { useParams } from "react-router"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SinglePhotoShow =() => {
    const { id } = useParams();
    const dispatch = useDispatch

    useEffect(() => {
        dispatch(getPhotoByIdTHUNK(id))
      }, [dispatch]);
    
    

    return (
        <>
        <h1>hiiiii</h1>
        {require('react-dom')}
        {window.React2 = require('react')}
          {console.log(window.React1 === window.React2)}
        </>
    )
}

export default SinglePhotoShow
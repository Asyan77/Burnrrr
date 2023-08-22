import { useSelector, useDispatch } from "react-redux";
import { getAllPhotos, getPhotos } from "../../store/photosReducer";
import { useEffect } from "react";
import './PhotoIndex.css'

const PhotoIndex = () => {
  
  const dispatch = useDispatch();
  const photos = useSelector(getPhotos)

// this is grabbing all 30 photos
  useEffect(() => {
    dispatch(getAllPhotos())
  }, [dispatch]);

  // const handlePhotoImageClick = (e) => {
  //   navigate(`/photo/${key}`)
  // }

    return (
      <div className="page">
        <ul className="photoimage-grid"> 
          {photos.map(photo => {
            return (
              <div>
                <a href={`/photos/${photo.id}`}> 
                  <img key={photo.id} src={photo.photoUrl} alt="" className="photoimage" />
                </a>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default PhotoIndex;
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useNavigation } from "react-router";
import { getAllPhotos, getPhotos } from "../../store/photosReducer";
import { useEffect } from "react";
import './PhotoIndex.css'

const PhotoIndex = () => {
  
  const dispatch = useDispatch();
  // const [photos, setPhotos] = useState([]);
  const photos = useSelector(getPhotos)
  console.log(photos, "akljshdlkgfhqeiur")
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
              // <li key={photo.id}>
              <div>
                {/* <h2>{photo.title}</h2>  */}
                <img key={photo.id} src={photo.photoUrl} alt="" className="photoimage" />
                {/* <h2>{photo.description}</h2> */}
              </div>
                // onClick={handlePhotoImageClick}
              // </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default PhotoIndex;
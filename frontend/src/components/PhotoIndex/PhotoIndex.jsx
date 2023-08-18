import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllPhotos, getPhotos } from "../../store/photosReducer";
import { useEffect } from "react";

const PhotoIndex = () => {
  
  const dispatch = useDispatch();
  // const [photos, setPhotos] = useState([]);
  const photos = useSelector(getPhotos)
  console.log(photos, "akljshdlkgfhqeiur")
// this is grabbing all 30 photos
  useEffect(() => {
    dispatch(getAllPhotos())
  }, [dispatch]);
    return (
      <ul>
        {photos.map(photo => {
          return (
            <li key={photo.id}>
              <h2>{photo.title}</h2>
              <img src={photo.photoUrl} alt="" />
            </li>
          );
        })}
      </ul>
    );
  }
  
  export default PhotoIndex;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoByIdTHUNK } from "../../store/photosReducer";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAllPhotos, getPhotos} from "../../store/photosReducer";
import { useNavigate } from 'react-router';
import './You.css'

const You = () => {
  // const history = useHistory();
  const { userId } = useParams();
  const photos = useSelector(getPhotos);
  const user = useSelector(state => state.session.currentUser)
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getAllPhotos())
  }, [dispatch]);


      return (
        <div className="page">
          <ul className="user-profile-photo-grid"> 
            {photos.map(photo => {
              return (
                <div>
                   <Link to={`/photos/user/${user.id}/${photo.id}`}>
                    <img key={photo.id} src={photo.photoUrl} alt="user-photos" className="user-photoimage" />
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }

export default You
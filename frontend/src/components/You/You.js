import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from "react-router-dom";
import { getAllPhotos, getAllPhotosByUserId, getPhotos} from "../../store/photosReducer";
// import { useNavigate } from 'react-router';
import './You.css'

const You = () => {
  // const history = useHistory();
  const { userId } = useParams();
  console.log(useParams())
  const photos = useSelector(getPhotos);
  const user = useSelector(state => state.session.currentUser)
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getAllPhotosByUserId(userId))
  }, [dispatch]);


      return (
        <div className="page">
          <div className="you-profile-header">
            <h1 className="username">{user.username}</h1>
            <div className="profile-header-mini-links">
              <div className="left-mini-links">
                <p> 6 Followers</p>
                <p> 11 Following</p>
              </div>
              <div className="right-mini-links">
                <p> {photos.count} Photos</p>
                <p> Joined 2013</p>
              </div>
            </div>
          </div>
          <ul className="user-profile-photo-grid"> 
            {photos.map(photo => {
              return (
                <div>
                   <Link to={`/user/${user.id}/photos/${photo.id}`}>
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
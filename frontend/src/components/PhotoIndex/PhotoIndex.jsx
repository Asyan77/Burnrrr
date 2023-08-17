function PhotoIndex({photos}) {
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
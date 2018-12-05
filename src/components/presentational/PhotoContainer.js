import React from 'react';

//Components
import PhotoArray from '../container/PhotoArray';

const PhotoContainer = () => {
	return (
      <div className="photo-container">
        <h2>Results</h2>
        <PhotoArray/>
      </div>
	);
}

export default PhotoContainer;
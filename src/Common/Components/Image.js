import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DEFAULT_IMG from '../../Images/default-img.jpg';

const Image = ({ source, name, className }) => {
  const [defaultSource, setDefaultSource] = useState(null);
  // handle Image Error
  const onImageError = () => {
    setDefaultSource(DEFAULT_IMG);
  };

  return (
    <img
      src={defaultSource || source}
      alt={name}
      className={className}
      onError={onImageError}
    />
  );
};

Image.propTypes = {
  source: PropTypes.string,
  name: PropTypes.string,
};

export default Image;

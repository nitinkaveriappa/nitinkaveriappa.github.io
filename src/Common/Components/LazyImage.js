import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Image = lazy(() => import('./Image'));

const LazyImage = ({ source, name, className }) => {
  return (
    <Suspense fallback={<CircularProgress size={32} className={className} />}>
      <Image source={source} name={name} className={className} />
    </Suspense>
  );
};

LazyImage.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  name: PropTypes.string,
};

export default LazyImage;

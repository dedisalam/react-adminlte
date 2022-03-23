import React from 'react';
import PropTypes from 'prop-types';
import {
  FLEX,
  FLEX_TYPES,
  JUSTIFY_CONTENT,
} from '../../ClassName';

function Preloader(props) {
  const { children, flex, justifyContent } = props;
  const className = [];
  className.push('preloader');
  if (flex) {
    className.push(FLEX[flex]);
  }

  if (justifyContent) {
    className.push(JUSTIFY_CONTENT[justifyContent]);
  }
  return (
    <div className='preloader flex-column justify-content-center align-items-center'>
      {children}
      {flex}
    </div>
  );
}

Preloader.propTypes = {
  children: PropTypes.node,
  flex: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(FLEX_TYPES),
  ]),
  justifyContent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(JUSTIFY_CONTENT),
  ]),
};

Preloader.defaultProps = {
  children: null,
  flex: false,
  justifyContent: false,
};

export default Preloader;

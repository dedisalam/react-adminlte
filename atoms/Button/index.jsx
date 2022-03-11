import React from 'react';
import { Button as RBButton } from 'react-bootstrap/atoms';
import { BUTTON_DEFAULT } from '../../assets';

function Button() {
  return (
    <RBButton block color={BUTTON_DEFAULT}>
      Default
    </RBButton>
  );
}

export default Button;

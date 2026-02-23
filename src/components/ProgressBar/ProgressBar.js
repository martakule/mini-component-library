/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const ProgressBarOUtside = styled.div`
    height: 30px;
    width: 100%;
    background-color: #80808026;
    box-shadow: 0px 2px 4px 0px #80808059 inset;
  `;

  return <ProgressBar role="progressbar" aria-valuenow={value}/>;
};

export default ProgressBar;

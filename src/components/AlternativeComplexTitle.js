import React from 'react'
import styled from 'styled-components';
import { color, setupBorder } from '../utils';

const AlternativeComplexTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className='underline' />
      <div className='box' />
    </div>
  );
}

const Wrapper = styled(AlternativeComplexTitle)`
  h1{
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${color.primary};
    margin: 0 auto;
  }
  .box {
    border: ${setupBorder({ width: 1, type: 'solid', color: 'blue' })};
    height: 10px;
  }
`

export default Wrapper;

import React from 'react'
import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline' />
      <div className='box' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1{
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
  }
  .title {
    color: blue;
  }
  .box {
    border: var(--mainBorder);
    height: 10px;
  }
`

export default ComplexTitle;

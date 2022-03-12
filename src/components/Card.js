import React from from 'react';
import styled from 'styled-components'

const Card = () => {
  return (
    <StyledCard>
      <img
        src='https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160'
        alt='product'
      />
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article

export default Card;
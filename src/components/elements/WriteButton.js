import React from 'react';

import IconEdit from '../../static/icons/Variety=edit, Status=untab.svg';

import styled from 'styled-components';

const WriteButton = ({ onClick }) => {
  return (
    <StWriteButton onClick={onClick}>
      <img src={IconEdit} />
    </StWriteButton>
  );
};

export default WriteButton;

const StWriteButton = styled.div`
  position: fixed;
  bottom: 9.6rem;
  right: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.4rem;
  height: 6.4rem;
  background-color: #9b9b9b;

  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  img {
    width: 3.8rem;
    height: 3.8rem;
  }
`;

import React from 'react';

import { TIME_ARR } from '../../../shared/Array';
import { fontBold, fontMedium } from '../../../shared/themes/textStyle';

import styled, { css } from 'styled-components';

const TimeSlide = ({ time, setTime }) => {
  //마감시간 설정 핸들러
  const timeHandler = (event) => {
    const chooseTime = event.target.getAttribute('time');
    setTime(chooseTime);
  };

  return (
    <StTimeSlide selectTime={time}>
      {TIME_ARR.map((item) => (
        <div key={item} time={item} onClick={timeHandler}>
          {item}시간
        </div>
      ))}
      <StInnerTime time={time}></StInnerTime>
    </StTimeSlide>
  );
};

export default TimeSlide;

const StTimeSlide = styled.div`
  position: relative;

  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    height: 4rem;

    transition-delay: 0.1s;

    ${fontMedium}
  }

  div:nth-child(1) {
    color: #fff;
    ${fontBold}
  }

  div:nth-child(2) {
    ${(props) =>
      props.selectTime != 1 &&
      css`
        color: #fff;
        ${fontBold}
      `}
  }

  div:nth-child(3) {
    ${(props) =>
      props.selectTime != 1 &&
      props.selectTime != 4 &&
      css`
        color: #fff;
        ${fontBold}
      `}
  }

  div:nth-child(4) {
    ${(props) =>
      props.selectTime != 1 &&
      props.selectTime != 4 &&
      props.selectTime != 8 &&
      css`
        color: #fff;
        ${fontBold}
      `}
  }

  div:nth-child(5) {
    ${(props) =>
      props.selectTime != 1 &&
      props.selectTime != 4 &&
      props.selectTime != 8 &&
      props.selectTime != 12 &&
      css`
        color: #fff;
        ${fontBold}
      `}
  }
`;

const StInnerTime = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  display: inline-block;

  width: ${(props) => {
    if (props.time == 1) {
      return '20%';
    } else if (props.time == 4) {
      return '40%';
    } else if (props.time == 8) {
      return '60%';
    } else if (props.time == 12) {
      return '80%';
    } else if (props.time == 24) {
      return '100%';
    }
  }};
  height: 4rem;
  background-color: #454545;

  transition-duration: 0.3s;
  border-radius: 2rem;

  z-index: -1;
`;

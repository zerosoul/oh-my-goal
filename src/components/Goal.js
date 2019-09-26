import React from 'react';
import styled from 'styled-components';
import LadyImg from '../assets/img/xg.png';
const Wrapper = styled.section`
  height: 100%;
  background: url(${LadyImg});
  color: #fff;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: blur(100px); */
`;
const BaseBlurLen = 100;
export default function Goal({ blurPercent = 1, grayPercent = 1 }) {
  return (
    <Wrapper
      style={{ filter: `blur(${BaseBlurLen * blurPercent}px) grayscale(${grayPercent})` }}
    ></Wrapper>
  );
}
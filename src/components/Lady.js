import React from 'react';
import styled from 'styled-components';
import LadyImg from '../assets/img/lady.1.jpg';
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
export default function Lady({ percent = 1 }) {
  return (
    <Wrapper style={{ filter: `blur(${BaseBlurLen * percent}px) grayscale(${percent})` }}></Wrapper>
  );
}

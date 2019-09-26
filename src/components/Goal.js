import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  height: 100%;
  color: #fff;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: filter 0.4s ease-in;
`;
const BaseBlurLen = 40;
export default function Goal({ image, blurPercent = 1, grayPercent = 1 }) {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${image})`,
        filter: `blur(${Math.floor(BaseBlurLen * blurPercent)}px) grayscale(${grayPercent})`
      }}
    ></Wrapper>
  );
}

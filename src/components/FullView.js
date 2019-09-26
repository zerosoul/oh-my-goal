import React from 'react';
import styled, { keyframes } from 'styled-components';
import CloseButton from './CloseButton';
const Blur = keyframes`
 0% { filter: blur(10px); }
  50% { filter: blur(5px); }
  100% { filter: blur(0); }
`;

const BounceInDown = keyframes`
from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const Wrapper = styled.section`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  animation: ${BounceInDown} 1s;
  /* background: rgba(255, 255, 255, 0.6); */
  img {
    filter: blur(10px);
    width: 96%;
    animation: ${Blur} 1.4s forwards;
    animation-delay: 1s;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);
  }
`;

export default function FullView({ image, closeView }) {
  return (
    <Wrapper>
      <img src={image} alt="full view" />
      <CloseButton handleClose={closeView} />
    </Wrapper>
  );
}

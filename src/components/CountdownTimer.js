import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.aside`
  color: #fff;
  background: rgba(22, 22, 22, 0.6);
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  .split {
    padding: 0 0.4rem;
  }
`;
// const BaseBlurLen = 100;
export default function CountdownTimer({ seconds = 100 }) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return (
    <Wrapper>
      <span className="count">{min < 10 ? String(min).padStart(2, '0') : min}</span>
      <span className="split">:</span>
      <span className="count">{sec < 10 ? String(sec).padStart(2, '0') : sec}</span>
    </Wrapper>
  );
}

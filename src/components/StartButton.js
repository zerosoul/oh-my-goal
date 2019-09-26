import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.2rem 2rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.05);
  line-height: 1.25;
  background: #fc6e51;
  text-decoration: none;
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
  transition: background-color 0.6s ease;
  overflow: hidden;
  font-weight: bold;
  border-radius: 0.8rem;

  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(white, 0.1);
    border-radius: 100%;
    transition: width 0.3s ease, height 0.3s ease;
  }
  &:focus,
  &:hover {
    background: #fc6e00;
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
`;

export default function StartButton({ handleStart }) {
  return <StyledButton onClick={handleStart}>start</StyledButton>;
}

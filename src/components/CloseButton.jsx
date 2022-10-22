import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6rem;
  background: #fc6e51;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  transition: background-color 0.6s ease;
  overflow: hidden;
  font-weight: bold;
  border-radius: 0.4rem;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
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

export default function AgainButton({ handleClose }) {
  return <StyledButton onClick={handleClose}>再来一发</StyledButton>;
}

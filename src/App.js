import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';
const Goal = lazy(() => import('./components/Goal'));
const CountdownTimer = lazy(() => import('./components/CountdownTimer'));
import styled from 'styled-components';
import { useCountdown } from './hooks';
import NoSleep from 'nosleep.js';
const StyledBody = styled.section`
  height: 100vh;
  .startBtn {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    padding: 1.2rem 2rem;
    box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
    line-height: 1.25;
    background: #fc6e51;
    text-decoration: none;
    color: white;
    font-size: 3rem;
    letter-spacing: 0.08rem;
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
  }
`;
const noSleep = new NoSleep();
const App = () => {
  const { counting, leftSeconds, totalSeconds, startCountdown } = useCountdown(40);
  const handleStart = () => {
    startCountdown();
    noSleep.enable();
  };
  return (
    <Suspense fallback={<Loading />}>
      <StyledBody>
        {counting && <CountdownTimer seconds={leftSeconds}></CountdownTimer>}
        <Goal
          grayPercent={leftSeconds < 10 ? leftSeconds / 10 : 1}
          blurPercent={counting ? (leftSeconds - 10 < 0 ? 0 : leftSeconds - 10) / totalSeconds : 0}
        ></Goal>
        {!counting && (
          <button className="startBtn" onClick={handleStart}>
            start
          </button>
        )}
      </StyledBody>
    </Suspense>
  );
};
export default App;

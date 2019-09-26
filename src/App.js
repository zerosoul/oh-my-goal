import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Loading from './components/Loading';
import { useCountdown, useGoal } from './hooks';
import FullView from './components/FullView';
import Goal from './components/Goal';
import CountdownTimer from './components/CountdownTimer';
const DurationSelect = lazy(() => import('./components/DurationSelect'));
const GoalSelect = lazy(() => import('./components/GoalSelect'));
const StartButton = lazy(() => import('./components/StartButton'));
const StyledBody = styled.section`
  height: 100vh;
`;
const StartGrayTime = 5;
const App = () => {
  const {
    counting,
    reset,
    finished,
    leftSeconds,
    totalSeconds,
    startCountdown,
    setTotalSeconds
  } = useCountdown(10);
  const { keyVal, image, changeGoal } = useGoal();
  const handleStart = () => {
    startCountdown();
  };

  return (
    <Suspense fallback={<Loading />}>
      <StyledBody>
        {finished && <FullView image={image} closeView={reset} />}
        {!counting && <GoalSelect keyVal={keyVal} changeGoal={changeGoal}></GoalSelect>}
        {counting && <CountdownTimer seconds={leftSeconds}></CountdownTimer>}
        <Goal
          image={image}
          grayPercent={leftSeconds < StartGrayTime ? leftSeconds / StartGrayTime : 1}
          blurPercent={
            counting
              ? (leftSeconds - StartGrayTime < 0 ? 0 : leftSeconds - StartGrayTime) / totalSeconds
              : 1
          }
        ></Goal>
        {!counting && !finished && <StartButton handleStart={handleStart}>start</StartButton>}
        {!counting && !finished && (
          <DurationSelect changeDuration={setTotalSeconds}></DurationSelect>
        )}
      </StyledBody>
    </Suspense>
  );
};
export default App;

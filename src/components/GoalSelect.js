import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 4;
  select {
    background: none;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 2rem;
    padding: 0.4rem 0.6rem;
    padding-bottom: 0.8rem;
  }
`;

export default function GoalSelect({ keyVal, changeGoal }) {
  return (
    <Wrapper>
      <select
        value={keyVal}
        onChange={evt => {
          changeGoal(evt.target.value);
        }}
      >
        <option value="man">猛男</option>
        <option value="girl">美女</option>
        <option value="xg">兄贵</option>
      </select>
    </Wrapper>
  );
}

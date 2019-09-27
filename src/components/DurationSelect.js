import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
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
let params = new URLSearchParams(location.search);
const Durations = [
  {
    dur: 5 * 60,
    title: '5分钟'
  },
  {
    dur: 15 * 60,
    title: '15分钟'
  },
  {
    dur: 20 * 60,
    title: '20分钟'
  },
  {
    dur: 25 * 60,
    title: '25分钟'
  },
  {
    dur: 30 * 60,
    title: '30分钟'
  }
];
if (params.get('dur')) {
  let dur = Number(params.get('dur'));
  let title = `${dur}秒`;

  Durations.unshift({
    dur,
    title
  });
}

export default function DurationSelect({ duration, changeDuration }) {
  return (
    <Wrapper>
      <select
        value={duration}
        onChange={evt => {
          changeDuration(Number(evt.target.value));
        }}
      >
        {Durations.map(item => {
          return (
            <option value={item.dur} key={item.title}>
              {item.title}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
}
export { Durations };

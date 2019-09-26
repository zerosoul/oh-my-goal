import { useState, useEffect } from 'react';
import NoSleep from 'nosleep.js';

import Girl from './assets/img/lady.1.jpg';
import Boy from './assets/img/man.1.jpg';
import XG from './assets/img/xg.png';
const noSleep = new NoSleep();

// const COUNTDOWN_SECONDS = 60 * 30;
const DefaultDuration = 60 * 5;
const useCountdown = (totalSeconds = DefaultDuration) => {
  const [finished, setFinished] = useState(false);
  // 总计时
  const [total, setTotal] = useState(totalSeconds);
  // 计时中标识
  const [timing, setTiming] = useState(false);
  // 当前秒数
  const [second, setSecond] = useState(total);

  // 首次渲染和 timing 变化时触发 effect
  useEffect(() => {
    let interval = 0;
    // 开始倒计时
    if (timing) {
      interval = setInterval(() => {
        setSecond(preSecond => {
          if (preSecond <= 1) {
            setFinished(true);
            setTiming(false);
            clearInterval(interval);

            // 重置秒数
            return total;
          } else {
            return preSecond - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timing, total]);
  const startCountdown = () => {
    setSecond(total);
    setFinished(false);
    setTiming(true);
    noSleep.enable();
  };
  const reset = () => {
    setFinished(false);
    noSleep.disable();
  };

  return {
    counting: timing,
    leftSeconds: second,
    totalSeconds: total,
    setTotalSeconds: setTotal,
    finished,
    reset,
    startCountdown
  };
};
const useGoal = () => {
  const Goals = {
    man: Boy,
    girl: Girl,
    xg: XG
  };
  const [image, setImage] = useState('xg');
  return { keyVal: image, image: Goals[image], changeGoal: setImage };
};
export { useCountdown, useGoal };

import { useState, useEffect } from 'react';
// const COUNTDOWN_SECONDS = 60 * 30;
const useCountdown = (totalSeconds = 60 * 30) => {
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
    setTiming(true);
  };

  return {
    counting: timing,
    leftSeconds: second,
    totalSeconds: total,
    setTotalSeconds: setTotal,
    startCountdown
  };
};

export { useCountdown };

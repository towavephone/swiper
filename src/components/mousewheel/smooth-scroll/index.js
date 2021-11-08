import Tween from './tween';

import './requestAnimationFrame';

const smoothScrollFunc = (
  {
    initialValue = 0, // 初始值
    changeValue = 0, // 变化量
    tweenType = 'Cubic', // 动画类型
    tweenFunc = 'easeOut', // 动画函数
    frame = 20, // 运行多少个帧数（运行多少个单位的频率），即运行时间为 1 / 屏幕刷新率 * unit
  },
  cb = () => {},
) => {
  let start = 0;
  let requestId;

  const runAnimation = () => {
    start += 1;
    const distance = Tween[tweenType][tweenFunc](start, initialValue, changeValue, frame);
    if (start < frame) {
      cb({
        distance,
        result: 'pending',
      });
      requestId = requestAnimationFrame(runAnimation);
    } else {
      cancelAnimationFrame(requestId);
      cb({
        distance,
        result: 'finish',
      });
    }
  };
  runAnimation();
};

export default smoothScrollFunc;

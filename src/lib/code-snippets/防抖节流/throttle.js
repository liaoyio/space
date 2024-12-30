/**
 * 节流函顶配版 [ 立即执行控制、尾部控制、取消操作、获取返回值 ]
 *
 * @param fn 要执行的函数
 * @param wait 等待的时间间隔（毫秒）
 * @param object  leading 立即执行 trailing 尾部控制
 * @returns Promise 返回 Promise
 *
 */
export function MyThrottle(fn, wait, { leading = true, trailing = false } = {}) {
  let startTime = 0;
  let timer = null;

  const _throttle = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        // 1.获取当前时间
        const nowTime = new Date().getTime();

        // 对立即执行进行控制
        if (!leading && startTime === 0) {
          startTime = nowTime;
        }

        // 2.计算需要等待的时间执行函数
        const waitTime = wait - (nowTime - startTime);

        if (waitTime <= 0) {
          if (timer) clearTimeout(timer);
          const res = fn.apply(this, args);
          resolve(res);
          startTime = nowTime;
          timer = null;
          return;
        }

        // 3.判断是否需要执行尾部
        if (trailing && !timer) {
          timer = setTimeout(() => {
            // console.log("执行timer")
            const res = fn.apply(this, args);
            resolve(res);
            startTime = new Date().getTime();
            timer = null;
          }, waitTime);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    startTime = 0;
    timer = null;
  };

  return _throttle;
}

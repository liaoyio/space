/**
 * 执行第一次的节流函
 *
 * @param fn 要执行的函数
 * @param wait 等待的时间间隔（毫秒）
 * @returns 返回一个经过节流处理的函数
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number,
): (...args: Parameters<T>) => void {
  // 记录上一次执行的时间，初始为 null 表示从未执行过
  let lastTime: number | null = null;
  // 返回一个闭包函数，用于执行节流逻辑
  return function (...args: Parameters<T>): void {
    // 获取当前时间
    const now = Date.now();
    // 如果是首次执行 (lastTime 为 null) 或者时间间隔超过了设定的等待时间
    // --> 技能之前没用过，或者 "技能CD" 已好
    if (lastTime === null || now - lastTime > wait) {
      lastTime = now; // 更新上一次执行时间为当前时间(更新技能释放时间)
      return fn.apply(this, args); // 调用原函数并绑定上下文
    }
  };
}

/** 节流函数选项类型 */
interface ThrottleOptions {
  /** 是否在开始时立即执行，默认为 true */
  leading?: boolean;
  /** 是否在结束时延迟执行(尾部控制)，默认为 true */
  trailing?: boolean;
}

/** 节流函数返回类型 */
interface ThrottledFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): Promise<ReturnType<T>>; // 节流后的函数
  cancel: () => void; // 取消节流的方法
}

// 定义节流函数的主类型
export type ThrottleFn<T extends (...args: any[]) => any> = (
  fn: T, // 要执行的原函数
  /** 等待的时间间隔（毫秒） */
  wait: number, // 等待时间间隔
  options: ThrottleOptions, // 配置选项
) => ThrottledFunction<T>;

/**
 * 节流函数顶配版 [ 立即执行控制、尾部控制、取消操作、Promise化 ]
 *
 * @param fn 要执行的函数
 * @param wait 等待的时间间隔（毫秒）
 * @param object  leading 立即执行 trailing 尾部控制
 * @returns 返回一个经过节流处理的函数，并附带 `cancel` 方法
 */
export const MyThrottle: ThrottleFn<any> = (fn, wait, { leading = true, trailing = false }) => {
  /** 记录上一次执行的时间，首次未运行时为 0 */
  let lastTime = 0;
  let timer: NodeJS.Timeout | null = null;

  const _throttle: ThrottledFunction<typeof fn> = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        /** 记录当前时间 */
        const now = Date.now(); // 获取当前时间

        // 对立即执行进行控制
        if (!leading && lastTime === 0) {
          lastTime = now;
        }

        /** 需要等待的时间 */
        const waitTime = wait - (now - lastTime);

        if (waitTime <= 0) {
          if (timer) clearTimeout(timer);
          const result = fn.apply(this, args);
          resolve(result);
          lastTime = now;
          timer = null;
          return;
        }

        // 判断是否需要执行尾部
        if (trailing && !timer) {
          timer = setTimeout(() => {
            const result = fn.apply(this, args);
            resolve(result);
            lastTime = Date.now();
            timer = null;
          }, waitTime);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  // 取消操作
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    lastTime = 0;
    timer = null;
  };

  return _throttle;
};

const throttleFn = MyThrottle(
  function (event: string) {
    console.log(`-->`, event);
    return 'throttle return value';
  },
  3000,
  { trailing: true },
);

throttleFn('liaoyi').then((res) => {
  console.log('res:', res);
});

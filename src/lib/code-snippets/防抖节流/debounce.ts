// 防抖选项类型
export interface DebounceOptions {
  immediate?: boolean; // 是否立即执行
  resultCallback?: (result: any) => void; // 结果回调函数
}

// 防抖函数返回值类型
export interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): Promise<ReturnType<T>>; // 返回一个 Promise 包装的函数
  cancel: () => void; // 取消防抖的方法
}

// 防抖函数主类型
export type DebounceFn<T extends (...args: any[]) => any> = (
  fn: T, // 要执行的函数
  delay: number, // 延迟时间
  options?: DebounceOptions, // 防抖选项
) => DebouncedFunction<T>;

/**
 * 防抖函数顶配版 [ 立即执行控制、尾部控制、取消操作、Promise化 ]
 * @param fn 要执行的函数
 * @param delay 延迟时间（毫秒）
 * @param options 防抖选项
 * @returns 返回一个经过防抖处理的函数，并附带 `cancel` 方法
 */
export const hydebounce: DebounceFn<any> = (fn, delay, options = {}) => {
  const { immediate = false, resultCallback } = options;

  let timer: NodeJS.Timeout | null = null; // 用于记录上一次的定时器
  let isInvoke = false; // 是否已立即执行

  const _debounce: DebouncedFunction<typeof fn> = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        // 如果已有定时器，清除定时器
        if (timer) clearTimeout(timer);

        let result: ReturnType<typeof fn> | undefined;

        // 如果需要立即执行且未执行过
        if (immediate && !isInvoke) {
          result = fn.apply(this, args); // 立即调用函数
          if (resultCallback) resultCallback(result); // 执行结果回调
          resolve(result); // Promise 返回结果
          isInvoke = true; // 标记为已执行
          return;
        }

        // 设置延迟执行
        timer = setTimeout(() => {
          result = fn.apply(this, args); // 延迟调用函数
          if (resultCallback) resultCallback(result); // 执行结果回调
          resolve(result); // Promise 返回结果
          timer = null; // 清空定时器
          isInvoke = false; // 重置立即执行标记
        }, delay);
      } catch (error) {
        reject(error); // 捕获错误并通过 Promise 抛出
      }
    });
  };

  // 绑定取消方法
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer); // 清除定时器
    timer = null; // 重置定时器
    isInvoke = false; // 重置立即执行标记
  };

  return _debounce;
};

const logMessage = (msg: string) => {
  console.log(`${msg} - ${new Date().toISOString()}`);
};

// 创建防抖函数
const debouncedLog = hydebounce(logMessage, 2000, {
  immediate: true,
  resultCallback: (result) => console.log('Result:', result),
});

// 使用防抖函数
debouncedLog('Hello'); // 立即执行
debouncedLog('World'); // 延迟执行

// 取消防抖
setTimeout(() => {
  debouncedLog.cancel();
  console.log('防抖取消');
}, 3000);

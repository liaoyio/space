function myDebounce(fn, delay) {
  // 1.用于记录上一次事件触发的timer
  let timer = null;

  // 2.触发事件时执行的函数
  const _debounce = (...args) => {
    // 1.用于记录上一次事件触发的timer

    if (timer) clearTimeout(timer);

    // 2.2.延迟去执行对应的fn函数(传入的回调函数)
    timer = setTimeout(() => {
      fn.apply(this, args);
      // 执行过函数之后, 将timer重新置null
      timer = null;
    }, delay);
  };

  return _debounce;
}

myDebounce(function () {
  console.log(`-->`, this.value, this);
}, 2000);

function hydebounce(fn, delay, immediate = false, resultCallback) {
  // 1.用于记录上一次事件触发的timer
  let timer = null;
  let isInvoke = false;

  // 2.触发事件时执行的函数
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        // 2.1.如果有再次触发(更多次触发)事件, 那么取消上一次的事件
        if (timer) clearTimeout(timer);

        // 第一次操作是不需要延迟
        let res = undefined;
        if (immediate && !isInvoke) {
          res = fn.apply(this, args);
          if (resultCallback) resultCallback(res);
          resolve(res);
          isInvoke = true;
          return;
        }

        // 2.2.延迟去执行对应的fn函数(传入的回调函数)
        timer = setTimeout(() => {
          res = fn.apply(this, args);
          if (resultCallback) resultCallback(res);
          resolve(res);
          timer = null; // 执行过函数之后, 将timer重新置null
          isInvoke = false;
        }, delay);
      } catch (error) {
        reject(error);
      }
    });
  };

  // 3.给_debounce绑定一个取消的函数
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };

  // 返回一个新的函数
  return _debounce;
}

const logMessage = (msg) => {
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

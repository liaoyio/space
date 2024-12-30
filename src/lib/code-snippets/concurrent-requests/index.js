/**
 * 并发请求
 *
 * @param urls - 待请求的 urls 数组
 * @param maxNum 最大并发数
 * @returns 一个 Promise，解析为所有任务的执行结果数组
 *
 */
export function concurRequest(urls, maxNum) {
  const len = urls.length; // 请求总数量
  // 存放请求结果
  let result = new Array(len).fill(false);
  let count = 0; // 当前已完成的 promise 数量

  return new Promise((resolve) => {
    const _request = () => {
      let nextIndex = count++; // 下一个请求的 url 索引地址
      // 所有请求完成，返回数据
      if (count >= len && !result.includes(false)) {
        resolve(result);
        return;
      }

      const url = urls[nextIndex];

      fetch(url)
        .then((res) => {
          result[nextIndex] = res;
          if (count < len) {
            _request();
          }
        })
        .catch((err) => {
          result[nextIndex] = err;
          if (count < len) {
            _request();
          }
        });
    };

    // 考虑最大请求数小于 urls 数组的情况，取最小值
    for (let i = 0; i < Math.min(len, maxNum); i++) {
      _request();
    }
  });
}

const _urls = [...Array.from({ length: 20 })].map(
  (_, i) => `https://jsonplaceholder.typicode.com/todos/${i}`,
);

concurRequest(_urls, 5).then((resps) => {
  console.log('resps', resps);
});

async function multiRequest(urls = [], maxNum) {
  const _urls = urls.slice(0, maxNum);
  const _list = _urls.map(async (url, index) => {
    try {
      console.log(`完成 ${index}`, new Date().toLocaleString());
      return await fetch(url);
    } catch (err) {
      console.log(`结束 ${index}`, new Date().toLocaleString());
      return err;
    }
  });
  return await Promise.all(_list);
}

multiRequest(_urls, 4).then((res) => {
  console.log('res', res);
});

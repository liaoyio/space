/**
 * 控制并发执行的异步任务池。
 *
 * @param poolLimit - 最大并发数量
 * @param iterable - 可迭代对象，包含任务的数据源
 * @param iteratorFn - 异步任务执行函数
 * @returns 一个 Promise，解析为所有任务的执行结果数组
 *
 * @example
 * const timeout = (i: number) => new Promise((resolve) => setTimeout(() => resolve(i), i));
 * asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
 *   console.log(results); // 输出: [1000, 5000, 3000, 2000]
 * });
 */
async function asyncPool<T, R>(
  poolLimit: number,
  iterable: Iterable<T>,
  iteratorFn: (item: T, iterable: Iterable<T>) => Promise<R>,
): Promise<R[]> {
  // 保存所有异步任务的 Promise
  const ret: Promise<R>[] = [];
  // 保存正在执行的任务的 Promise
  const executing: Set<Promise<R>> = new Set();

  for (const item of iterable) {
    // 包装任务为 Promise
    const p = Promise.resolve().then(() => iteratorFn(item, iterable));
    ret.push(p);
    executing.add(p);

    // 任务完成后从正在执行的任务集合中移除
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);

    // 如果正在执行的任务数达到上限，则等待最快完成的任务
    if (executing.size >= poolLimit) {
      await Promise.race(executing);
    }
  }

  // 等待所有任务完成并返回结果
  return Promise.all(ret);
}

// 使用示例
const timeout = (i: number): Promise<number> =>
  new Promise((resolve) => setTimeout(() => resolve(i), i));

asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
  console.log(results); // 输出: [1000, 5000, 3000, 2000]
});

/**
 * 解析 URL 中的查询参数或哈希参数为对象形式。
 *
 * @param query - URL 中的查询字符串，例如 `?a=1&b=2&c=3&a=4`。
 *
 * @example
 * getUrlParams('?a=1&b=2&c=3&a=4') -> { a: ['1', '4'], b: '2', c: '3' }
 * getUrlParams(location.hash.split('?')[1])
 * 假设 location.hash 为 '#/page?a=1&b=2&c=3', 则返回: { a: '1', b: '2', c: '3' }
 */
export const getUrlParams = (query: string): Record<string, string | string[]> =>
  Array.from(new URLSearchParams(query)).reduce<Record<string, string | string[]>>(
    (params, [key, value]) =>
      Object.assign({}, params, {
        [key]: params[key]
          ? // 如果已经存在该键，检查是否为数组
            Array.isArray(params[key])
            ? [...params[key], value] // 如果是数组，直接追加值
            : [params[key], value] // 如果不是数组，转换为数组后追加值
          : value, // 如果不存在该键，直接赋值
      }),
    {},
  );

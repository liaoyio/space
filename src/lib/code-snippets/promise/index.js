const uuid = (a) =>
  a
    ? // 如果 `a` 存在，则生成随机的 16 进制字符
      ((a ^ ((Math.random() * 16) >> (a / 4))) & 0xf).toString(16)
    : // 如果 `a` 不存在，初始化 UUID 模板并递归生成字符
      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));

const _json1 = [...Array.from({ length: 20 })].map((_, i) => ({
  id: `key${i + 1}`,
  name: uuid('liaoyi'),
  age: randomIntegerInRange(18, 32),
}));

const _json2 = [...Array.from({ length: 10 })].map((_, i) => ({
  id: `key${i + 1002}`,
  name: uuid('liaoyi'),
  age: randomIntegerInRange(18, 32),
}));

const _promises = [
  delay(100).then(() => _json1),
  delay(200).then(() => _json2),
  delay(200).then(() => []),
];

Promise.all(_promises)
  .then((dataArr) => {
    const list = dataArr.filter((it) => it.length === 0);
    if (list.length === 3) {
      console.log('list error');
    } else {
      console.log('list success');
    }
    console.log('list', list);
    console.log(dataArr);
  })
  .catch((err) => {
    console.log(err);
  });

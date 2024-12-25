/**
 * 生成字符串的所有可能排列（全排列）
 * @example
 * permutations('abc') -> ['abc','acb','bac','bca','cab','cba']
 * @param str - 输入字符串
 * @returns 字符串的所有排列组成的数组
 */
export const permutations = (str: string): string[] => {
  // str长度为2 ? 返回两个可能的排列 : 直接返回单个字符
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

  const _str = str.split(''); // 将字符串拆分为字符数组
  return _str.reduce<string[]>(
    (acc, letter, i) =>
      // 遍历每个字符，将其作为排列的第一个字符
      acc.concat(
        // 对剩余字符递归生成排列
        permutations(str.slice(0, i) + str.slice(i + 1))
          // 将当前字符拼接到递归结果的前面
          .map((val) => letter + val),
      ),
    [],
  );
};

/**
 * 计算数组中所有数字的平均值。
 * @example
 * average([1,2,3]) -> 2
 * @param arr - 一个由数字组成的数组
 * @returns 数组中数字的平均值
 */
export const average = (arr: number[]): number => {
  // 使用 reduce 累加数组中的所有元素，并除以数组的长度
  return arr.reduce((acc: number, val: number) => acc + val, 0) / arr.length;
};

/**
 * 每个单词的首字母大写
 * @param str - 输入的字符串
 * @returns 转换后的字符串，每个单词的首字母都被大写
 * @example
 * capitalizeEveryWord('hello world!') -> 'Hello World!'
 */
export const capitalizeEveryWord = (str: string): string => {
  // 使用正则表达式匹配单词首字母并将其转换为大写
  return str.replace(/\b[a-z]/g, (char: string) => char.toUpperCase());
};

/**
 * 将字符串的第一个字符大写，其余部分根据参数决定是否转为小写。
 * @param str - 输入的字符串
 * @param lowerRest - 是否将字符串的其余部分转为小写（默认为 `false`）
 * @returns 转换后的字符串，第一个字符大写，其余部分根据参数处理
 * @example
 * capitalize('myName', true) -> 'Myname'
 * capitalize('myName') -> 'MyName'
 */
export const capitalize = (str: string, lowerRest: boolean = false): string => {
  // 将第一个字符大写，并根据 lowerRest 参数处理其余部分
  return str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
};

/**
 * 检查一个字符串是否是回文（忽略大小写、空格和非字母数字字符）。
 * @param str - 要检查的字符串
 * @returns 如果字符串是回文，返回 `true`；否则返回 `false`
 * @example
 * palindrome('taco cat') -> true
 * palindrome('hello') -> false
 */
export const palindrome = (str: string): boolean => {
  const s = str.toLowerCase().replace(/[\W_]/g, ''); // 将字符串转换为小写并移除所有非字母数字字符
  return s === s.split('').reverse().join(''); // 检查处理后的字符串是否与其反转结果相等
};

/**
 * 统计数组中某个值出现的次数
 * @param arr - 要统计的数组
 * @param value - 要统计的目标值
 * @returns 目标值在数组中出现的次数
 * @example
 * countOccurrences([1, 1, 2, 1, 2, 3], 1) -> 3
 */
export const countOccurrences = <T>(arr: T[], value: T): number =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

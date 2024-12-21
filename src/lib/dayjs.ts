import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export const toFromNow = (date: number | Date) => {
  return dayjs(date).locale("zh-cn").fromNow();
};

export const toSlashDateString = (date: number | Date) => {
  return dayjs(date).locale("zh-cn").format("YYYY年M月D日 dddd HH:mm:ss");
};

export const prettyDate = (date: number | string | Date) => {
  return dayjs(date).locale("zh-cn").format("M月 D, YYYY");
};

/* 根据当前时间显示不同的问候语 */
export const sayHi = () => {
  const hour = dayjs().hour();

  if (hour < 6) {
    return "凌晨好~";
  } else if (hour < 9) {
    return "早上好~";
  } else if (hour < 12) {
    return "上午好~";
  } else if (hour < 14) {
    return "中午好~";
  } else if (hour < 17) {
    return "下午好~";
  } else if (hour < 19) {
    return "傍晚好~";
  } else {
    return "晚上好~";
  }
};

export const prettyDateWithWeekday = (date: number | Date) => {
  return dayjs(date).locale("zh-cn").format("dddd，MMMM D YYYY");
};

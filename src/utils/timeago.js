const getTimeAgo = (dateTimeStamp) => {
  let now = new Date().getTime();
  let diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return '未知时间';
  }
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;
  let year = month * 12;
  let yearC = diffValue / year;
  let monthC = diffValue / month;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;
  if (yearC >= 1) {
    return `${~~yearC}年前`;
  } else if (monthC >= 1) {
    return `${~~monthC}月前`;
  } else if (weekC >= 1) {
    return `${~~weekC}周前`;
  } else if (dayC >= 1) {
    return `${~~dayC}天前`;
  } else if (hourC >= 1) {
    return `${~~hourC}小时前`;
  } else if (minC >= 1) {
    return `${~~minC}分钟前`;
  }
  return `刚刚`;
};

export default getTimeAgo;

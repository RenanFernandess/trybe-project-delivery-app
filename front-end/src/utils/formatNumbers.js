export function formatNumber(num, size) {
  num = num.toString();
  while (num.length < size) num = `0${num}`;
  return num;
}

export function formatDate(date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear().toString().split('');
  const month = formatNumber(newDate.getMonth() + 1, 2);
  const dt = formatNumber(newDate.getDate(), 2);

  return `${dt}/${month}/${year[2]}${year[3]}`;
}

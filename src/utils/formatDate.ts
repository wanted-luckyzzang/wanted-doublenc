export default function formatDate(d: string) {
  const dd = new Date(d);
  let s =
    addZero(dd.getFullYear(), 4) +
    '.' +
    addZero(dd.getMonth() + 1, 2) +
    '.' +
    addZero(dd.getDate(), 2) +
    ' ' +
    '까지';
  return s;
}

function addZero(n: number, digits: number) {
  let zero = '';
  const stringN = n.toString();
  if (stringN.length < digits) {
    for (let i = 0; i < digits - stringN.length; i++) zero += '0';
  }

  return zero + n;
}

const styleReturn = (...params: string[]) => {
  let obj = {};
  let keys = [];
  let values = [];

  params.forEach((e, idx) => {
    if (idx % 2 === 0) keys.push(e);
    else values.push(e);
  });

  keys.forEach((e, idx) => {
    obj[e] = values[idx];
  });
  return obj;
};

export default styleReturn;

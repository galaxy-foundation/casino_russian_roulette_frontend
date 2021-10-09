const isNumber = (value) => {
  let n = Number(value).toFixed(2);
  return Number(n).toLocaleString("en-US", { minimumFractionDigits: 2 });
};

export default isNumber;

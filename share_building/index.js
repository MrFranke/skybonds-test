function toPercent(data) {
  const percent = data.reduce((acc, item) => acc + Number(item), 0) / 100;
  return data.map(item => (Number(item)/percent).toFixed(3));
}


module.exports = {toPercent};

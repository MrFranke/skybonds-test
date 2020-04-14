const http = require('http');

const getBondsDataWithCache = (cache) => async ({date, isins}) => {
  if (cache[date]) {
    return cache[date];
  }

  const result = await http.post({
    url: `/bonds/${date}`,
    body: isins
  });

  cache[date] = result;

  return result;
};

module.exports = {getBondsDataWithCache};

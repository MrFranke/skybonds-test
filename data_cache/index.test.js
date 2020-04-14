const { getBondsDataWithCache } = require('./index');

jest.mock('http', () => ({
  post: (config) => Promise.resolve(config.body.map(isin => ({
    isin, data: {some: 'data'}
  })))
}));


test('getBondsData update cache', async () => {
  const TEST_DATA = [
    { isin: 'XS0971721963', data: { some: 'data' } },
    { isin: 'RU000A0JU4L3', data: { some: 'data' } }
  ];
  const CACHE = {};
  const getBondsData = getBondsDataWithCache(CACHE);
  const result = await getBondsData({
    date: '20180120',
    isins: ['XS0971721963', 'RU000A0JU4L3']
  });

  expect(result).toEqual(TEST_DATA);
  expect(CACHE[20180120]).toEqual( TEST_DATA);
});

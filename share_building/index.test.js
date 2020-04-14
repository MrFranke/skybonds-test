const {toPercent} = require('./index');

test('toPercent with example data', () => {
  const data = [
    '1.5', '3', '6', '1.5'
  ];

  const result = toPercent(data);
  expect(result).toEqual([ '12.500', '25.000', '50.000', '12.500' ]);
});

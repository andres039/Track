const getScaleHistory = require('./getScaleHistory.js')

const obj = [{Date: '24', scale: 'A', BPM: 45}, {Date: '4', scale: 'E', BPM: 45}, {Date: '2', scale: 'A', BPM: 45}]
test('returns an array with at least one object with Date inside', () => {
  expect(getScaleHistory(obj, 'A')[1].date).toEqual('2')
});
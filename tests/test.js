var test = require('tape');
var exampleLib = require('../index.js');

test('timesTwo test', function (t) {
  t.plan(1);
  t.deepEqual(exampleLib.timesTwo([1,2,3]), [2,4,6]);
});

test('timesThree test', function (t) {
  t.plan(1);
  t.deepEqual(exampleLib.timesThree([1,2,3]), [3,6,9]);
});

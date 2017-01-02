'use strict';

var chompBindLR, clearBindLR, convert, isBind, ref;

ref = require('../index'), clearBindLR = ref.clearBindLR, chompBindLR = ref.chompBindLR, convert = ref.convert, isBind = ref.isBind;

test('isBind => {{bind}}', function () {
  return expect(isBind('{{bind}}')).toBe(true);
});

test('isBind not bind => bind', function () {
  return expect(isBind('bind')).toBe(false);
});

test('isBind left => {{bind}}right', function () {
  return expect(isBind('{{bind}}right')).toBe(true);
});

test('isBind right => left{{bind}}', function () {
  return expect(isBind('left{{bind}}')).toBe(true);
});

test('isBind center => left{{bind}}right', function () {
  return expect(isBind('left{{bind}}right')).toBe(true);
});

test('chompBindLR => {{bind}}', function () {
  return expect(chompBindLR('{{bind}}')).toBe("{bind}");
});

test('clearBindLR => {{bind}}', function () {
  return expect(clearBindLR('{{bind}}')).toBe("bind");
});

test('width:{{width}}', function () {
  return expect(convert('width:{{width}}')).toBe("'width:'+(width)+''");
});

test('{{width}}:{{value}}', function () {
  return expect(convert('{{width}}:{{value}}')).toBe("''+(width)+':'+(value)+''");
});

test('{{true}}', function () {
  return expect(convert('{{true}}')).toBe("{true}");
});

test('This is a {{text}}', function () {
  return expect(convert('This is a {{text}}')).toBe("'This is a '+(text)+''");
});

test('{{text}} is a word', function () {
  return expect(convert('{{text}} is a word')).toBe("''+(text)+' is a word'");
});
// Generated by CoffeeScript 1.11.1
var wxdbrn;

wxdbrn = require('../index');

test('width:{{width}}', function() {
  return expect(wxdbrn('width:{{width}}')).toBe("{'width:'+(width)+''}");
});

test('{{width}}:{{value}}', function() {
  return expect(wxdbrn('{{width}}:{{value}}')).toBe("{''+(width)+':'+(value)+''}");
});

test('{{true}}', function() {
  return expect(wxdbrn('{{true}}')).toBe("{true}");
});

test('This is a {{text}}', function() {
  return expect(wxdbrn('This is a {{text}}')).toBe("{'This is a '+(text)+''}");
});
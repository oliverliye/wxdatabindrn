"use strict";

var _convertMixed, _convertOnly, bindL, bindR, chompBindLR, clearBindLR, convert, isBind, mixedBind, mixedBindAll, onlyBind;

onlyBind = /^\{\{[^\{^\}]+\}\}$/;

mixedBind = /\{\{[^\{^\}]+\}\}/;

mixedBindAll = /\{\{[^\{^\}]+\}\}/g;

bindL = /\{\{/g;

bindR = /\}\}/g;

clearBindLR = function clearBindLR(str) {
  return str.replace(bindL, "").replace(bindR, "");
};

chompBindLR = function chompBindLR(str, lch, rch) {
  if (lch == null) {
    lch = '{';
  }
  if (rch == null) {
    rch = '}';
  }
  return str.replace(/\{\{/g, lch).replace(/\}\}/g, rch);
};

isBind = function isBind(data) {
  return onlyBind.test(data) || mixedBind.test(data);
};

_convertOnly = function _convertOnly(data) {
  return "{" + clearBindLR(data) + "}";
};

_convertMixed = function _convertMixed(data) {
  var bd, binds, i, item, len, noBinds, ret;
  binds = data.match(mixedBindAll);
  noBinds = data.split(mixedBindAll);
  ret = [];
  for (i = 0, len = noBinds.length; i < len; i++) {
    item = noBinds[i];
    bd = binds.shift();
    ret.push("'" + item + "'" + (bd ? "+(" + clearBindLR(bd) + ")" : ''));
  }
  return "" + ret.join('+');
};

convert = function convert(data) {
  if (onlyBind.test(data)) {
    return _convertOnly(data);
  } else if (mixedBind.test(data)) {
    return _convertMixed(data);
  }
};

module.exports = {
  clearBindLR: clearBindLR,
  chompBindLR: chompBindLR,
  convert: convert,
  isBind: isBind
};
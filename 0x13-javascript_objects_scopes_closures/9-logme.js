#!/usr/bin/node
let cpt = 0;
exports.logMe = function (item) {
  console.log(cpt + ': ' + item);
  cpt += 1;
};
var ffi = require('ffi-napi');
const path = require('path')
var lib = ffi.Library(path.join(__dirname, './target/release/libsharedpackage'), {
    add2numbers: ['int', ['int','int']]
});

var num = lib.add2numbers(33, 43)

console.log('num ::: ', num)
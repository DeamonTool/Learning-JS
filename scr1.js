"use strict";
let promise = new Promise((a, b) => a(5));
promise.then(mas => alert(mas), mas =>  alert(mas));
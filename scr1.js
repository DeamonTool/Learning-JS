"use strict";
let animal = {
    eats: true
};
let rabbit = {
    fuck: true
};
Object.setPrototypeOf(rabbit, animal);
alert(JSON.stringify(rabbit));
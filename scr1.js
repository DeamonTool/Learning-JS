"use strict";
function imDig(Im, Rel) {
    return {
        Im: Im + "i",
        Rel,
        valueOf() { return this.Rel },
        toString() { return this.Im }
    }
};
let first = imDig(3, 4);
alert(first);
"use strict";
function formatString(input, toUpper) {
    if (toUpper == true) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
const answer = formatString("hello");
console.log(answer);

"use strict";
console.log('This is app.ts file ');
let userName = "app.js";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('This is message : ', message);
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', clickHandler.bind(null, 'you are welcome'));
//# sourceMappingURL=app.js.map
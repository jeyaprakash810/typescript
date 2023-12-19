console.log('This is app.ts file ')
let userName = "app.js"

const button = document.querySelector('button');


function clickHandler(message:string){
    // let s;
    console.log('This is message : ',message);
}

//comment added
button?.addEventListener('click',clickHandler.bind(null,'you are welcome'))









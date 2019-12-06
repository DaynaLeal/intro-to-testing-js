// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === false || input === null || input === " ") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}
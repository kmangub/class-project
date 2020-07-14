function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}
function addUserName() {
    var name = prompt('What is your name');
    var message = 'Hello, ' + name;

    return document.write('<h3>' + message + '</h3>');
}

function addPreference(){
    var preference = prompt('Do you like prequals or sequals?');
var response;

if (preference === 'Prequals') {
    response = 'Prequals are Great!';
} else if (preference === 'sequals') {
    response = 'Sequals are Fabulous!';
} else {
    response = "Fine!";
}

return document.write('<h3>' + response + '</h3>')
}

//I want a white cake with lavender frosting and lemon filling.
function buildCake(cakeType, frostingType, fillingType){
    var message = 'I want a ' + cakeType + 'cake with ' + frostingType + ' frosting and' + fillingType + ' filling.';

    return message;
}
var preference = prompt('Do you like prequals or sequals?');
var response;

if (preference === 'Prequals') {
    response = 'Prequals are Great!';
} else if (preference === 'sequals') {
    response = 'Sequals are Fabulous!';
} else {
    response = "Fine!";
}

document.write('<h3>' + response + '</h3>')
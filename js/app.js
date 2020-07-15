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

while (preference !== 'prequals' && preference !== 'sequals'){
    preference = prompt('Please answer exactly! Do you like prequals or sequals?')
}

if (preference === 'prequals') {
    item = '<p><img src="https://i.pinimg.com/originals/22/4f/9d/224f9d64ad01d1bf5937a46ffe99eaec.jpg"></p>';
} else if (preference === 'sequals') {
    item = '<img src="https://live.staticflickr.com/65535/49110577696_040d037ae0.jpg"></p>';
} 

// need to add the images instead of the response

return document.write('<h3>' + response + '</h3>')
}

//helper function
function getCount() {
    var count = prompt('How many star wars movies have you watched?');
// ( false || false)
    while (isNan(count) || count === '') {
        count = prompt('please enter a number! How many star wars movies have you watched?');
    }

    return document.write(count);
}

 function getStarCount(){
    var starCount = prompt('How many stars would you rate the experience? 1 to 5. ')
    
    while(isNan(count) || count === ''){
 count = prompt('please enter a number! How would you rate that experience?');
}
return starCount
}

function showOrder(){
    var result = '';
    var itemType = addPreference();
    var total = getCount();

    for (var i = 0; i < total; i++){
        result = result + '<p>' + itemType + '</p>';
    }

    return document.write(result);
}

function showRating(){
    var result = '';
    var starCount = getStarCount();
  
    for (var i = 0; i < starCount; i++){
      result = result + '<p><img src="images/star.png"></p>';
    }
  
    return document.write(result);
  }
//I want a white cake with lavender frosting and lemon filling.
function buildCake(cakeType, frostingType, fillingType){
    var message = 'I want a ' + cakeType + 'cake with ' + frostingType + ' frosting and' + fillingType + ' filling.';

    return message;
}
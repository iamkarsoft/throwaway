//ex 1
// var start = '{"favFood":"lasagne","favColor":"black","favSeason":"rainy season"}';

// var myObject = JSON.parse(start);

// console.log(myObject);

// var myString = JSON.stringify(myObject);
// console.log(myString);
//
//ex 2
//
// var myData = '{"name":"kofi ramos","city":"accra"}';
// var myObj = JSON.parse(myData);
// console.log(myObj);

// document.querySelector('.message').innerHTML = myObj.city;
//
// ex 3 double level json data
//
// var myData = `{"Jida":{"stack":"javascript","framework":"Express"},"Ramos":{"stack":"php","framework":"laravel"}}`;
// var myOjb=JSON.parse(myData);
// document.querySelector('.message').innerHTML=myOjb.Jida.stack;
// document.querySelector('.message').innerHTML=myOjb.Ramos.stack;
//
// // document.querySelector('.message').innerHTML = myObj.city;
//
// ex 4 triple level json data
//
var myData = `{"Jida":{"stack":{"frontend":"React, Redux, Html/css","framework":"Node, Express"},"framework":"Express"},"Ramos":{"stack":{"frontend":"Vue, Html/css","framework":"Laravel, Express, Wordpress"},"framework":"laravel"}}`;
var myOjb=JSON.parse(myData);
document.querySelector('.message').innerHTML=myOjb.Jida.stack.framework;

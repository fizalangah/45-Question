"use strict";
//  QUESTION # 2;
let myName = "fiza";
console.log("Hello fiza,would you like tolearn some pythone today? ", myName);
// QUESTION # 3;
//UPPER CASE..
let myName1 = "heer";
console.log(myName1.toUpperCase());
//LOWER CASE..
console.log(myName1.toLowerCase());
//QUESTION # 4;
console.log("once william Shakespear said,To be or not to be,that is the question.?");
// QUESTION # 5;
let famous_person = "Willium Shakespear";
let message = "once william Shakespear said,To be or not to be,that is the question.";
console.log(message, famous_person);
// QUESTION # 6;
let person_name = "\nfiza\n";
console.log(person_name);
// QUESTION # 7; 
console.log(5 + 3);
console.log(2 * 4);
console.log(9 - 1);
console.log(16 / 2);
// QUESTION # 9;
let favnumber = 9;
console.log(favnumber, " is my favourit number");
// QUESTION # 10
//friend data
let friendName = "my best friend name is ayesha and she is my classmate";
//  my data
let myName2 = "my name is fiza and i m an IT student";
// QUESTION # 11;
let names1 = ["ayesha", "rabia", "kanwal", "shabana", "aliya"];
console.log(names1);
//  QUESTION # 12;
let names = ["ayesha", "rabia", "kanwal", "shabana", "aliya"];
console.log("goodmorning", names[0]);
console.log("goodmorning", names[1]);
console.log("goodmorning", names[2]);
console.log("goodmorning", names[3]);
console.log("goodmorning", names[4]);
// QUESTION # 13;
let cars = ["hoda", "civic", "alto", "cultus", "rivo"];
console.log("i would like to own a ", cars[0]);
console.log("i would like to own a ", cars[1]);
console.log("i would like to own a ", cars[2]);
console.log("i would like to own a ", cars[3]);
console.log("i would like to own a ", cars[4]);
// QUESTION # 14;
let guest1 = ["hira", "amina", "sohana"];
console.log(guest1[0], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest1[1], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest1[2], "I like to invite you for a dinner plz come my home at 9pm");
// QUESTION # 15;
let guest2 = ["hira", "amina", "sohana"];
console.log(guest2[0], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest2[1], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest2[2], "I like to invite you for a dinner plz come my home at 9pm");
let newguest1 = guest2[2] = "shabana";
console.log(newguest1);
console.log(guest2);
// QUESTION # 16;
let guest3 = ["hira", "amina", "sohana"];
console.log(guest3[0], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest3[1], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest3[2], "I like to invite you for a dinner plz come my home at 9pm");
let newguest2 = guest3[2] = "shabana";
console.log(newguest2);
console.log(guest3);
console.log("i would like to inform all my guest that now i found bigger dinner table so i would like to invite more friends");
guest3.unshift("kanwal");
console.log(guest3);
guest3.splice(2, 0, "fiza");
console.log(guest3);
// guest.push("ayesha");
// console.log(guest);
// QUESTION # 17;
let guest = ["hira", "amina", "sohana"];
console.log(guest[0], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest[1], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest[2], "I like to invite you for a dinner plz come my home at 9pm");
let newguest = guest[2] = "shabana";
console.log(newguest);
console.log(guest);
console.log("i would like to inform all my guest that now i found bigger dinner table so i would like to invite more friends");
guest.unshift("kanwal");
console.log(guest);
guest.splice(2, 0, "fiza");
console.log(guest);
guest.push("ayesha");
console.log(guest);
console.log("sorry friends now i found a emergency thats why i cannot invite more friends  because i have only two peoples limit");
console.log(guest.pop(), "sorry i cannot invite you");
console.log(guest.pop(), "sorry i cannot invite you");
console.log(guest.pop(), "sorry i cannot invite you");
console.log(guest.pop(), "sorry i cannot invite you");
console.log(guest.splice(2, 4));
console.log(guest, "you both are still invited");
guest.splice(0, 2);
console.log(guest);
//QUESTION # 18;
let countries = ["dubai", "pakistan", "UAE", "maldeevs", "america"];
console.log(countries.sort());
console.log(countries.reverse());
let newcountries = ["america", "maldeevs", "UAE", "pakistan", "dubai"];
console.log(newcountries);
console.log(countries);
// QUESTION # 19;
console.log("now i invit 10 peoples for dinner");
// QUESTION # 20;
let cities = ["karachi", "multan", "lahore", "islamabad", "hyderabab"];
console.log(cities);
let pen = {
    name: "dollerpen",
    color: "black",
    price: 100,
    isUdesd: true,
};
console.log(pen);
// QUESTION # 22;
// let rollNumbers:number[] =[10,11,12,13,14,15,"sixteen"];
//console.log(rollNumbers);
let rollNumbers = [10, 11, 12, 13, 14, 15, 16];
console.log(rollNumbers);
// QUESTION # 23;
let car = "civic";
console.log(car == "civic");
console.log(car != "civic");
let mobile = "oppo";
console.log(mobile == "oppo");
console.log(mobile != "oppo");
let laptop = "dell";
console.log(laptop == "dell");
console.log(laptop != "dell");
let myName3 = "fiza langah";
console.log(myName3 == "fiza langah");
console.log(myName3 != "fiza langah");
let color = "red";
console.log(color == "red");
console.log(color != "red");
// QUESTION # 24;
let myName4 = "fiza langah";
console.log(myName4 == "fiza langah");
// LOWER CASE;
let cname = "fiza";
console.log(cname == "fiza");
console.log(cname == "FIZA");
// NUMBER COMPARASION;
console.log(2 == 2);
console.log(2 != 2);
console.log(2 < 3);
console.log(2 > 3);
console.log(2 <= 2);
console.log(2 >= 2);
let num1 = 5;
let num2 = 6;
console.log(num1 < num2 && num2 > num1);
console.log(num1 > num2 && num2 < num1);
console.log(num1 < num1 || num1 == num2);
console.log(num1 == num2 || num1 > num2);
let num4 = [1, 2, 3, 4,];
console.log(num4[0] == 1);
console.log(num4[4] == 4);
// QUESTION # 25;
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("player just earned 5 points");
}
if (alien_color1 != "green") {
    console.log("player earned 0 points");
}
//QUESTION # 26;
let alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("player just earned 5 points");
}
else {
    console.log("player earned 10 points");
}
//QUESTION # 27;
let alien_color = "red";
if (alien_color == "green") {
    console.log("player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points");
}
else if (alien_color == "red") {
    console.log("player earned 15 points");
}
// QUESTION # 28;
let age = 18;
if (age < 2) {
    console.log(" that person is a baby");
}
else if (age == 2 || age < 4) {
    console.log("that person is a toddler");
}
else if (age == 4 || age < 13) {
    console.log("that person is a kid");
}
else if (age == 13 || age < 20) {
    console.log("that person is a teenager");
}
else if (age == 20 || age < 65) {
    console.log("that person is an adult");
}
else if (age == 65 || age > 65) {
    console.log("that person is an elder");
}
else {
    console.log("that person is not born yet");
}
// QUESTION # 29 ;
let favourit_fruits = ["apple", "banana", "mango", "lichi", "lichi", "painapple"];
if (favourit_fruits[0] == "apple") {
    console.log("apple is my favourit fruit");
}
if (favourit_fruits[1] == "banana") {
    console.log("banana is my favourit fruit");
}
if (favourit_fruits[2] == "mango") {
    console.log("mango is my favourit fruit");
}
if (favourit_fruits[3] == "apple") {
    console.log("lichi is my favourit fruit");
}
if (favourit_fruits[4] == "painapple") {
    console.log("painapple is my favourit fruit");
}
// QUESTION # 30;
let userNames1 = ["admoin", "fiza", "kanwal", "ali", "bilawal"];
for (let index = 0; index < userNames1.length; index++) {
    const element = userNames1[index];
    if (userNames1[index] == "admin") {
        console.log("Helloo admin, would you like to see a status report");
    }
    else {
        console.log("hello ", userNames1[index] + "thsnk you for logging in again");
    }
}
//QUESTION # 31;
let userNames = [""];
for (let index = 0; index < userNames.length; index++) {
    const element = userNames[index];
    if (userNames[index] == "") {
        console.log("we need to find some users!");
    }
}
// QUESTION # 32;
let current_users = ["hurain", "husnain", "mehak", "zulkernain", "daood",];
let new_users = ["hurain", "husnain", "saleem", "shazia", "sidra"];
for (let index = 0; index < new_users.length; index++) {
    const element = new_users[index];
    if (new_users[index] == current_users[index]) {
        console.log(current_users[index], " will need to enter a new users");
    }
    else {
        console.log(new_users[index], " is avaiable");
    }
}
//QUESTION # 33;
let oridnal_numbers = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
for (let index = 0; index < oridnal_numbers.length; index++) {
    const element = oridnal_numbers[index];
    if (oridnal_numbers[index] == "1st", "2nd", "3rd", "4th", "6th", "7th", "8th", "9th")
        console.log(oridnal_numbers[index]);
}
//QUESTION # 34;
let pizzas = ["cheesiPizza", "chickenPizza", "pepperoniPizza"];
for (let index = 0; index < pizzas.length; index++) {
    const element = pizzas[index];
    console.log("i like", pizzas[index], " ,I really love pizza");
}
// QUESTION # 35;
let animals = ["Dog", "Cat", "hourse"];
for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    console.log("a", animals[index], "would make a great pet");
    console.log(animals[index], " is very faithfull animals");
}
//QUESTION # 36;
let make_shirt1 = ((size) => {
    console.log("this shirt is best");
});
make_shirt1(34);
// QUESTION # 37;
let make_shirt2 = ((size) => {
    console.log("i love typscript");
});
make_shirt2("large");
let make_shirt3 = ((size) => {
    console.log(" i love typscript");
});
make_shirt3("medium");
let make_shirt = ((size) => {
    console.log("this shirt is small in siza");
});
make_shirt("small");
//question # 38;
let describe_cities = ((country) => {
    console.log("karachi is in pakistan");
});
let otercountry = describe_cities("pakistan");
describe_cities("america");
describe_cities("dubai");
// question # 39;
let city_country = ((city, country) => {
    return console.log(city, country);
});
let cityName = city_country("lahore", "pakistan");
let othercity = city_country("london", "uk");
let newcity = city_country("canbera", "australia");
// QUESTION # 40;
let make_album = ((artistname, albumtitle) => {
    let newobject = {
        artistname: artistname,
        albumtitle: albumtitle,
    };
    return newobject;
});
let firstalbum = make_album("ahmed", "myalbum");
let secondalbum = make_album("ali", "bigalbum");
let thirdalbum = make_album("numan", "smallalbum");
let fourthalbum = make_album("bilawal", "largalbum");
console.log(secondalbum);
//  //QUESTION # 41;
let show_magicians1 = (() => {
    let magicianc_name = ["dai vernon", "harry", "david", "doug henning"];
    return magicianc_name;
});
let newmagiciance1 = show_magicians1();
console.log(newmagiciance1);
// QUESTION # 42;
let make_great1 = (() => {
    let magicianc_name = ["dai vernon", "harry", "david", "doug henning"];
    console.log("hello", magicianc_name);
});
make_great1();
//QUESTION # 43;
let show_magicians = (() => {
    let magicianc_name = ["dai vernon", "harry", "david", "doug henning"];
    return magicianc_name;
});
let newmagiciance = show_magicians();
console.log(newmagiciance);
let make_great = (() => {
    console.log("hello", newmagiciance);
});
make_great();
//QUESTION # 44;
let sandwiches = ((items, moreitems) => {
    let newitems = [items, moreitems];
    return newitems;
});
let sanditems = sandwiches("egg", "chees");
let sandwiches1 = sandwiches("chicken", "butter");
let sandwiches2 = sandwiches("mutton", "chees");
console.log(sandwiches1);
// QUESTION # 45;
let cars_information = ((modle_name, manufacture, color, price) => {
    let carsobject = {
        modle_name: modle_name,
        manufacture: manufacture,
        color: color,
        price: price,
    };
    return carsobject;
});
let newinformation = cars_information("civic", "honda", "red", 4500000);
console.log(newinformation);

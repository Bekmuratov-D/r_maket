"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log("Салат");
console.log('Предположение:' + "string");
console.log('Фактический:', _typeof("Салат"));
console.log(9);
console.log('Предположение:', 'number');
console.log('Фактический:', _typeof(9));
console.log(1.2);
console.log('Предположение:', 'number');
console.log('Фактический:', _typeof(1.2));
console.log(NaN);
console.log('Предположение:', 'number');
console.log('Фактический:', typeof NaN === "undefined" ? "undefined" : _typeof(NaN));
console.log("Hello World");
console.log('Предположение:', 'string');
console.log('Фактический:', _typeof("Hello World"));
console.log(true);
console.log('Предположение:', 'boolean');
console.log('Фактический:', _typeof(true));
console.log(2 != 1);
console.log('Предположение:', 'boolean');
console.log('Фактический:', _typeof(2 != 1));
console.log("сыр" + "ы");
console.log('Предположение:', ' string');
console.log('Фактический:', _typeof("сыр" + "ы"));
console.log("2" + "4");
console.log('Предположение:', 'string');
console.log('Фактический:', _typeof("2" + "4"));
console.log("2" - "4");
console.log('Предположение:', 'number');
console.log('Фактический:', _typeof("2" - "4"));
console.log("Сэм" + 5);
console.log('Предположение:', 'string');
console.log('Фактический:', _typeof("Сэм" + 5));
console.log("Сэм" - 5);
console.log('Предположение:', 'number');
console.log('Фактический:', _typeof("Сэм" - 5));
console.log(99 * "шары");
console.log('Предположение:', 'number');
console.log('Фактический:', _typeof(99 * "шары")); //Задача №2 Прямоугольник

console.log("Задача №2");
var width1 = 2,
    length = 3;
var perimeter = width1 * 2 + length * 2,
    area = width1 * length;
var perimeterArea = perimeter / area;
console.log(perimeter);
console.log(area);
console.log(perimeterArea); //Задача №3 Конвертация единиц измерения
//В первой вместо дата поставить существующие типы данных, третья - обозначение градуса с C и F, елка должна генерироваться через код

console.log("Задача №3");
var celsius = 25;
var fahrenheit = 69.2;
var convertToFahrenheit = celsius * 1.8 + 32;
var convertToCelsius = (fahrenheit - 32) / 1.8;
console.log("".concat(celsius, "\xB0C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ").concat(convertToFahrenheit, "F"));
console.log("".concat(fahrenheit, "F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ").concat(convertToCelsius, "\xB0C")); //Задача №4 Високосный год

console.log('Задача №4'); //let year = prompt('Задание №4 Year:');
// alert(year % 4 == 0 && year % 100 != 0 ? "true" : "false")
//Задание №5 Проверка

console.log('Задание №5');
var num1 = 9;
var num2 = 10; // &&-and; || - or; ! - не
//if (num1 == 10 || num2 == 10 || num1 + num2 == 10) {
//      console.log(true)
//} else{
//    console.log(false)
//}
// Задача №6 Считаем овец

console.log('Задача №6'); //let numSheep = prompt('numSheep');
//let i = 0;
//while (i < numSheep){
//    alert((i+1) + 'овечка...')
//   i++
//}
//Задача №7 Четное-нечетное

console.log('Задача №7');

for (var i = 0; i < 16; i++) {
  if (i % 2 == 0) {
    console.log(i + 'четное');
  } else {
    console.log(i + 'нечетное');
  }
} //Задача №8 Елка к новому году


console.log("Задача №8");

function tree(line) {
  var str2 = '';

  for (var _i = 1; _i <= line; _i++) {
    str2 = str2 + '#';
    console.log(str2);
  }
}

tree(12); //Задание № 9 Задача №9 Сортировка

console.log("Задание № 9");
var a = 0;
var b = -3;
var c = 1;

if (a < b && b < c) {
  console.log(a, b, c);
} else if (a < b && c < b) {
  console.log(a, c, b);
} else if (b < a && a < c) {
  console.log(b, a, c);
} else if (b < a && c < a) {
  console.log(b, c, a);
} else if (c < a && a < b) {
  console.log(c, a, b);
} else {
  console.log(c, b, a);
} // Задача №10 Максимальное значение


console.log("Задача №10");
var a2 = 2;
var b2 = -1;
var c2 = 0;
var d2 = -5;
var f2 = -4;

if (a2 > b2 && a2 > b2 && a2 > d2 && a2 > f2) {
  console.log('<', a2);
} else if (b2 > a2 && b2 > c2 && b2 > d2 && b2 > f2) {
  console.log('<', b2);
} else if (c2 > a2 && c2 > b2 && c2 > d2 && c2 > f2) {
  console.log('<', c2);
} else if (d2 > a2 && d2 > b2 && d2 > c2 && d2 > f2) {
  console.log('<', d2);
} else {
  console.log('<', f2);
}
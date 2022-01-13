"use strict";

// Задача №1 Абсолютное значение
console.log(' Задача №1');

function absValue(num) {
  if (num < 0) {
    return 0 - num;
  } else {
    return num;
  }
}

console.log(absValue(2)); // Задача №2 Палиндром

console.log('Задача №2'); //.split('') - str to массив; .reverse() - менаем порядок элементов массива на обраттный.
// .join('') - массив to str 

function isPalindrome(str) {
  if (str === str.split('').reverse().join('')) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isPalindrome("довод"); //Задача №3 Сложение матриц

console.log('Задача №3');
var b = [[2, 2], [3, 4]];
var a = [[9, 8], [7, 6]];

function matrixAddition(a, b) {
  var m = a.length,
      n = b.length,
      matrix = [];

  if (m === n && b[0].length === a[0].length) {
    for (var i = 0; i < m; i++) {
      matrix[i] = [];

      for (var k = 0; k < b[0].length; k++) {
        matrix[i][k] = b[i][k] + a[i][k];
      }
    }

    console.log(matrix);
  } else {
    console.log("матрицы не совпадают!! ");
  }
}

matrixAddition(a, b); // Задача №4 Работа с объектом

console.log("Задача №4");
var student = {
  group: 211,
  "last name": "Бекмуратов",
  "first name": "Дилмуратов"
};
console.log('Студент ' + student["first name"] + student["last name"] + ' учится в ' + student.group + ' группе');
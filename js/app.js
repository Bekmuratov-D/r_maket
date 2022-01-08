
let type = "Data";

console.log("Салат")
console.log('Предположение:', type)
console.log('Фактический:', typeof("Салат"))

console.log(9)
console.log('Предположение:', type)
console.log('Фактический:', typeof(9))

console.log(1.2)
console.log('Предположение:', type)
console.log('Фактический:', typeof(1.2))

console.log(NaN)
console.log('Предположение:', type)
console.log('Фактический:', typeof(NaN))

console.log("Hello World")
console.log('Предположение:', type)
console.log('Фактический:', typeof("Hello World"))

console.log(true)
console.log('Предположение:', type)
console.log('Фактический:', typeof(true))

console.log(2 != 1)
console.log('Предположение:', type)
console.log('Фактический:', typeof(2 != 1))

console.log("сыр" + "ы")
console.log('Предположение:', type)
console.log('Фактический:', typeof("сыр" + "ы"))

console.log("сыр" - "ы")
console.log('Предположение:', type)
console.log('Фактический:', typeof("сыр" - "ы"))

console.log("2" + "4")
console.log('Предположение:', type)
console.log('Фактический:', typeof("2" + "4"))

console.log("2" - "4")
console.log('Предположение:', type)
console.log('Фактический:', typeof("2" - "4"))

console.log("Сэм" + 5)
console.log('Предположение:', type)
console.log('Фактический:', typeof("Сэм" + 5))

console.log("Сэм" - 5)
console.log('Предположение:', type)
console.log('Фактический:', typeof("Сэм" - 5))

console.log(99 * "шары")
console.log('Предположение:', type)
console.log('Фактический:', typeof(99 * "шары"))


//Задача №2 Прямоугольник
console.log("Задача №2")
let with1 = 2, length = 3;
console.log(with1, length)
console.log("Периметр:", with1 + with1 + length + length)
console.log("Площадь:", with1 * length)
console.log('Периметр/Площадь:', (with1 + with1 + length + length)/(with1 * length))

//Задача №3 Конвертация единиц измерения
console.log("Задача №3")
let celsius = 25;
let fahrenheit = 69.2;
let convertToFahrenheit = celsius * 1.8 + 32 ;
let convertToCelsius = (fahrenheit - 32) / 1.8 ;

console.log(celsius, "соответствует", convertToFahrenheit )
console.log(fahrenheit, "соответствует", convertToCelsius )

//Задача №4 Високосный год
console.log('Задача №4')
let year = prompt('Задание №4 Year:');

alert(year % 4 == 0 && year % 100 != 0 ? "true" : "false")

//Задание №5 Проверка
console.log('Задание №5')
let num1 = 9;
let num2 = 10;

// &&-and; || - or; ! - не
if (num1 == 10 || num2 == 10 || num1 + num2 == 10) {
      console.log(true)
} else{
    console.log(false)
}


// Задача №6 Считаем овец
console.log('Задача №6')
let numSheep = prompt('numSheep');
let i = 0;
while (i < numSheep){
    alert((i+1) + 'овечка...')
    i++
}

//Задача №7 Четное-нечетное
console.log('Задача №7')
for (let i =0; i < 16; i++) {
    if(i % 2 == 0){
        console.log(i + 'четное')
    } else{
        console.log(i + 'нечетное')
    }
}


//Задача №8 Елка к новому году
//console.log('Задача №8')
//let hash = '#';
//let hash2 = '*';
//let line1 = " "
//let line2 = " "
//let height = 12;
//for (let i = 0; i < height; i++){
    //if(i % 2 == 0){
       // console(line1 == line1 + hash2)
 //   } else{
 //     console.log(line2 == line2 + hash1)
 //   }
//}

//Задание № 9 Задача №9 Сортировка
let n1 = 0;
let n2 = -3;
let n3 = 1;

if (n1 > n2 && n2 > n3){
    console.log(n1, n2, n3)
}
if (n1 > n2 && n2 < n3 && n1 > n3){
    console.log(n1, n3, n2)
}
if (n2 > n1 && n1 > n3){
    console.log(n2, n1, n3)
}
if (n2 > n1 && n1 < n3 && n2 > n3){
    console.log(n2, n3, n1)
}
if (n3 > n1 && n1 > n2){
    console.log(n3, n1, n2)
}
if (n3 > n1 && n1 < n2 && n3 > n2){
    console.log(n3, n2, n1)
}
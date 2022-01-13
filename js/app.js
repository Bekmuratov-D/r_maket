
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
console.log("Задача №8")
console.log("*")
console.log("##")
console.log("***")
console.log("####")
console.log("*****")
console.log("######")
console.log("*******")
console.log("########")
console.log("*********")
console.log('##########')


//Задание № 9 Задача №9 Сортировка
console.log("Задание № 9")
let a = 0;
let b = -3;
let c = 1;

if(a < b && b < c) {
   console.log(a, b , c);
} else if (a < b && c < b) {
    console.log(a, c, b);
} else if (b < a && a < c) {
    console.log(b, a, c);
} else if(b < a && c < a) {
    console.log(b, c, a); 
} else if(c < a && a < b) {
    console.log(c, a, b);
} else {
    console.log(c, b , a);
}

// Задача №10 Максимальное значение
console.log("Задача №10")
let a2 = 2;
let b2 = -1;
let c2 = 0;
let d2 = -5;
let f2 = -4;
if (a2 > b2 && a2 > b2 && a2 > d2 && a2 > f2){
    console.log('<',a2)
} else if ( b2 > a2 && b2 > c2 && b2 > d2 && b2 > f2){
    console.log('<',b2)
} else if (c2 > a2 && c2 > b2 && c2 > d2 && c2 > f2){
    console.log('<',c2)
} else if (d2 > a2 && d2 > b2 && d2 > c2 && d2 > f2){
    console.log('<',d2)
} else{
    console.log('<',f2)
}
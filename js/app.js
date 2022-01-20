
console.log("Салат")
console.log('Предположение: string')
console.log('Фактический:', typeof("Салат"))

console.log('9')
console.log('Предположение:', 'number')
console.log('Фактический:', typeof(9))

console.log('1.2')
console.log('Предположение:', 'number')
console.log('Фактический:', typeof(1.2))

console.log('NaN')
console.log('Предположение:', 'number')
console.log('Фактический:', typeof(NaN))

console.log("Hello World")
console.log('Предположение:', 'string')
console.log('Фактический:', typeof("Hello World"))

console.log('true')
console.log('Предположение:', 'boolean')
console.log('Фактический:', typeof(true))

console.log('2 != 1')
console.log('Предположение:', 'boolean')
console.log('Фактический:', typeof(2 != 1))

console.log('"сыр" + "ы"')
console.log('Предположение:', ' string')
console.log('Фактический:', typeof("сыр" + "ы"))

console.log('"сыр" - "ы"')
console.log('Предположение:', ' string')
console.log('Фактический:', typeof("сыр" - "ы"))

console.log('"2" + "4"')
console.log('Предположение:', 'string')
console.log('Фактический:', typeof("2" + "4"))

console.log('"2" - "4"')
console.log('Предположение:', 'number')
console.log('Фактический:', typeof("2" - "4"))

console.log('"Сэм" + 5')
console.log('Предположение:', 'string')
console.log('Фактический:', typeof("Сэм" + 5))

console.log('"Сэм" - 5')
console.log('Предположение:', 'number')
console.log('Фактический:', typeof("Сэм" - 5))

console.log('99 * "шары"')
console.log('Предположение:', 'number')
console.log('Фактический:', typeof(99 * "шары"))


//Задача №2 Прямоугольник
console.log("Задача №2")
let width1 = 2, length = 3;
let perimeter = width1*2 + length*2, area = width1*length;
let perimeterArea = perimeter / area ;
console.log(perimeter)
console.log(area)
console.log(perimeterArea)

//Задача №3 Конвертация единиц измерения
//елка должна генерироваться через код

console.log("Задача №3")
let celsius = 25;
let fahrenheit = 100;
let convertToFahrenheit = celsius * 1.8 + 32 ;
let convertToCelsius = (fahrenheit - 32) / 1.8 ;

console.log(`${celsius}°C соответствует ${convertToFahrenheit}F`)
console.log(`${fahrenheit}F соответствует ${convertToCelsius}°C`)

//Задача №4 Високосный год
console.log('Задача №4');
let year = prompt('Задание №4 Year:');

alert(year % 4 == 0 && year % 100 != 0 ? "true" : "false")

//Задание №5 Проверка
console.log('Задание №5')
let num1 = 1;
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
let ab = '';
while (i < numSheep){
   ab = ab + (`${i+1}  овечка...`)
  i++
}
alert(ab)

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
console.log("Задача №8");

let num = 12;
console.log(createChristmasTree(num));
function createChristmasTree(num) {
    let result = "";
    
    for (let j = 1; j <= num; j++) {
    if (j % 2 == 1) {
    result += "*".repeat(j)+ '\n' ;
    } else {
    result += "#".repeat(j)+ '\n' ;
    }
    }
    
    return result;
}

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
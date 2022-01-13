
// Задача №1 Абсолютное значение
console.log(' Задача №1')
function absValue(num) {
    if( num < 0){
        return 0 - num;
    } else {
        return num
    }
}
console.log(absValue(2))

// Задача №2 Палиндром
console.log('Задача №2')

//.split('') - str to массив; .reverse() - менаем порядок элементов массива на обраттный.
// .join('') - массив to str 

function isPalindrome(str) {
    if (str === str.split('').reverse().join('')) {  
        console.log("true")
    } else {
        console.log("false")
    }
}
isPalindrome("довод")


//Задача №3 Сложение матриц
console.log('Задача №3')
 
let b = [[2, 2,], [3, 4,],];
let a = [[9, 8,], [7, 6,],];

function  matrixAddition(a, b)  {
    let m = a.length, n = b.length, matrix = [] ;
    if (m === n && b[0].length === a[0].length) {
        for (let i = 0; i < m; i++){
            matrix[i] = [];
            for ( let k = 0; k < b[0].length; k++){
                matrix[ i ][k] = b[i][k] + a[i][k];
            }
        }
        console.log(matrix)
    } else {
        console.log("матрицы не совпадают!! ")
    }
}
matrixAddition(a, b)




// Задача №4 Работа с объектом
console.log("Задача №4")
let student = {
    group: 211,
    "last name": "Бекмуратов",
    "first name": "Дилмуратов",
};
console.log('Студент ' + student["first name"] + student["last name"] + ' учится в ' + student.group + ' группе');



 // Задача №5 Переключение элементов

let position = 0;
const slidesToShow = 4;
const sliderToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
// const item = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsCount = item.length;
const items = document.querySelectorAll('.slider-item');
const itemWidth = items / slidesToShow;
const movePosition = sliderToScroll * itemWidth;


items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= sliderToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth ;
    position += itemsLeft >= sliderToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
checkBtns();

 


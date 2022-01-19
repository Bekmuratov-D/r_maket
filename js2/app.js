
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
console.log(`Список свойств: ${Object.keys(student)} .`)
console.log(`Студент ${student["first name"]} ${student["last name"]} учится в ${student.group} группе`);


 // Задача №5 Переключение элементов
let dots = document.getElementsByClassName('dots-item'),
    dotsArea = document.getElementsByClassName('dots-block')[0],
    slides = document.getElementsByClassName('slides-item'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    slideIndex = 1;

showSlides(slideIndex)

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if  (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active'); 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n);
}
prevBtn.onclick = function(){
    plusSlides(-1);
}
nextBtn.onclick = function(){
    plusSlides(1);
}
dotsArea.onclick = function(e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i -1]) {
            currentSlide(i);
        }
    }
}


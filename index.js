// 1.

// for (let i  = 0; i <= 10; i++){
//         console.log(i)
// }

// 2.

// let i = -1;

// while (i++ , i <= 10){
  
//     console.log(i)
// }

// 3.

// let i = 0

// do{
//     console.log(i)
//     i++;

// } while(i <= 10)

// 4.

// let str ='Near human quality — Improve';

// for ( let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// 5.arrow function 

// const text = (text) => {
//     for ( let i = 0; i < text.length; i++) {
//         console.log(text[i]);
//     }
// }

// text('Near human quality');

// 6.function declaration

// function text(text) {
//     for ( let i = 0; i < text.length; i++) {
//        console.log(text[i]);
//      }
// }

// text('Near human quality')

// 7.function expression

// const text = function(text) {
//     for ( let i = 0; i < text.length; i++) {
//         console.log(text[i]);
//     }
// }
// text('Near human quality')

// 8. 

// const numarLitera = (sarcina1, text2) => {
//     console.log('Numarare:');
//     for(let i = 0; i <= sarcina1; i++) {
//         console.log(i);
//     }

//     console.log('Afisare litere:');
//     for ( let i = 0; i < text2.length; i++) {
//          console.log(text2[i]);
//     }
// }

// numarLitera(5, 'Salut')

// 9.


// function numarLitera(sarcina1, text2) {
//     console.log('Numarare:');
//     for(let i = 0; i <= sarcina1; i++) {
//         console.log(i);
//     }

//     console.log('Afisare litere:');
//     for ( let i = 0; i < text2.length; i++) {
//          console.log(text2[i]);
//     }
// }

// numarLitera(5, 'Salut')

// 10.


// const numarLitera = function(sarcina1, text2) {
//     console.log('Numarare:');
//     for(let i = 0; i <= sarcina1; i++) {
//         console.log(i);
//     }

//     console.log('Afisare litere:');
//     for ( let i = 0; i < text2.length; i++) {
//          console.log(text2[i]);
//     }
// }

// numarLitera(5, 'Salut')

// 11.

// const suma = (num1, num2, num3)=>{
//     return num1 +num2 + num3;
// }

// console.log(suma(1,2,3))

// 12.

const nameHobby = (name, hobby) => {
    if (typeof name === 'string' && typeof hobby === 'string'){
        return `My name is ${name} and my favorite hobby is ${hobby}`
    }
    return 'please use a valid name and hobby'
}

const result = nameHobby('Daniela', 'smth')
console.log(result)
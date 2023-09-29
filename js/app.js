// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.


function findBiggestWord (str) {
    const stringSplit = str.split(' ');
    let longestWord = "";

    for (const i of stringSplit) {
        if ((i).length > longestWord.length) {
            longestWord = (i);
        }
    }
    return longestWord; 
}

console.log(findBiggestWord('This music very difficult for me!'));

// 2. написать функцию которая принимает число и возвращает перевернутое число

function reverseNumber(number) {
    number = number + "";
    return number.split("").reverse("").join("");
}
console.log(reverseNumber(5555990))

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

//                      1 СПОСОБ :

function unique(str) {
    let c = {};
    let r = '';
    for (let i = 0; i < str.length; i++) {
        if (!c[str[i]]) {
            r = r + str[i];
            c[str[i]] = 1;
        }
    }
    return r;
}
  
console.log(unique("ssssssssssseeeeeeeaaaaaaa"));

//                       2 СПОСОБ :


const uniqueSimilar = [...new Set('ssssssssssseeeeeeeaaaaaaa')].join('');
console.log(uniqueSimilar);




// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

function calcPoints(win, draw, loss) {
    return win*3 + draw + loss;
}
console.log(calcPoints(2, 4, 0))


// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

const arrStr = [5, 10, 24, 46, 78, 100]
function statistics(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
        return {
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
        avg: sum / arr.length,
        }
}
 console.log(statistics(arrStr));


// 6.Написать функцию которая принимает массив работников компании 

const workers = [
    { name: "Jimm", salary: 40000, department: "IT" },
    { name: "Bob", salary: 60300, department: "HR" },
    { name: "Stacy", salary: 15000, department: "IT" },
    { name: "Tom", salary: 55200, department: "DEVOPS" },
    { name: "Kate", salary: 25000, department: "IT" },
    { name: "John", salary: 40000, department: "HR" },
    { name: "Billy", salary: 60000, department: "DEVOPS" },
];

function findDepartmentHighAverage(workers) {
    const dataSalDep = workers.reduce((acc, curr) => {
        const {salary, department} = curr;
            if (!acc[department]) {
                acc[department] = {sumSal: 0, employees: 0};   
            }
            acc[department].sumSal += salary;
            acc[department].employees ++;
            return acc; 
}, {});
    let maxAvg = -1;
    let maxDep= "";
    for (const department in dataSalDep) {
        const {sumSal, employees} = dataSalDep[department]
        const avgSal = sumSal / employees;
        if (avgSal > maxAvg) {
            maxAvg = avgSal;
            maxDep = department;
        }
    }
    if (maxDep !== "") {
        return {
            department: maxDep,
            average: maxAvg
        }
    } else {
        return "";
    }
}
console.log(findDepartmentHighAverage(workers))
// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 


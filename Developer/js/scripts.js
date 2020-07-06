const languages = ["HTML", "CSS", "PHP", "Java", "Swift", "Javascript"];
const wanted_languages = 5;
console.log("مرحبًا بك في برنامح توظيف المبرمجين");

let name = prompt("ما اسمك؟");
let age = parseInt(prompt("كم عمرك؟"));
let expert = parseInt(prompt("كم عدد سنوات خبرتك؟"));

console.log("لغات البرمجة : ");
// console.log("1. " + languages[0]);
// console.log("2. " + languages[1]);
// console.log("3. " + languages[2]);
// console.log("4. " + languages[3]);
// console.log("5. " + languages[4]);
// console.log("6. " + languages[5]);

for (let i = 1; i <= languages.length; i++) {
    console.log(i + ". " + languages[i-1]);
}

let skill = prompt("اختر اللغة");
let skill2 = prompt("اختر لغة أخرى");

if (
    (age > 25 && age < 40 && expert > 3 && skill == wanted_languages | skill2 == wanted_languages)
) {
    console.log("مقبول");
} else {
    console.log("مرفوض");
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------

function logger (Harara) {
    for (let i = 0; i < Harara.length; i++) {
        console.log(Harara[i]);
    }
}

function fromFeh(Harara) {
    for (let i = 0; i < Harara.length; i++) {
        result_array.push(parseInt((Harara[i]- 32) * (5 / 9)));
    }
    return result_array;
}

function hottestDays (Harara, min_value) {
    for (let i = 0; i < Harara.length; i++) {
        if (Harara[i] > min_value) {
            hot.push(Harara[i]);
        }
    }
    return hot;
}

let feh_temp_array = [35, 72, 98, 116];
let threshold = 72;
let hot = [];
let result_array = [];

function logHottestDays(input_array, min_value) {
    logger(fromFeh(hottestDays(input_array, min_value)));
}
   
logHottestDays(feh_temp_array, threshold);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

function tim() {
    sumofGrades = 0;
    grades = document.getElementById("grades").value.split(",");
    for (i = 0; i < grades.length; i++) {
        sumofGrades += parseInt(grades[i]);
    }
    document.getElementById("sum").innerHTML = sumofGrades;

    if(sumofGrades >= 90 && sumofGrades <= 100) {
        document.getElementById("som").innerHTML = "A";
        document.getElementById("eremj").innerHTML =   "<img src='a.gif' />";
    }else if(sumofGrades >= 80 && sumofGrades <= 89) {
        document.getElementById("som").innerHTML = "B";
        document.getElementById("eremj").innerHTML =   "<img src='b.gif' />";
    }else if(sumofGrades >= 70 && sumofGrades <= 79) {
        document.getElementById("som").innerHTML = "C";
        document.getElementById("eremj").innerHTML =  "<img src='c.gif' />";
    }else if(sumofGrades >= 60 && sumofGrades <= 69) {
        document.getElementById("som").innerHTML = "D";
        document.getElementById("eremj").innerHTML =   "<img src='d.gif' />";
    }else if(sumofGrades >=0 && sumofGrades < 60) {
        document.getElementById("som").innerHTML = "F";
        document.getElementById("eremj").innerHTML =  "<img src='f.gif' />";
    }else {
        document.getElementById("som").innerHTML = "Wrong numbers";
    }
}
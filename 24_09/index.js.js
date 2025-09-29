

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



//funkcja do pobierania i czytania wieku dla u?ytkownika
function askAge(name, surname) {
    
    rl.question("Podaj swoj wiek: ", (age) => {

        u_age = age; 

        age = Number(age); //upewniamy si?, ?e na pewno wiek to liczba

        if (age < 0 || age > 100 || isNaN(age)) {
            console.log("Prosimy o podanie faktycznego wieku");
            askAge(name, surname); //generalnie, ?eby spyta? ponownie to si? robi rekurencje a nie p?tle apparently

        } else {
            if (age < 18) {
                console.log("Witaj, dzieciaku - zrobiles zadanie z matematyki?");
            } else {
                console.log(`Witaj ${name} ${surname}. Teraz masz lat ${age}`);
                askEvenOdd(age);
            }
        }
    });


}

function askEvenOdd(age) {
    console.log("Twoj wiek to liczba...");

        let num = Number(age); //rzutowanie na liczbe

        if (isNaN(num)) {
            console.log("emm dlaczego to nie jest liczba?");
            askEvenOdd(); //pytanie ponownie

        } else if (num % 2 == 0) {
            console.log("parzysta.");
            rl.close();//dopóki nie zamkniejsz tutaj readline, program dalej czeka na dane

        } else {
            console.log("nieparzysta.");
            rl.close();
        }

    
}


let u_name = '';
let u_surname = '';
let u_age = 0;

rl.question("Podaj swoje imie: ", (name) => {
    rl.question("Podaj swoje nazwisko: ", (surname) => {

        u_name = name;
        u_surname = surname;
        askAge(name, surname);

    });
});










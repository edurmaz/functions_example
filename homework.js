//Write a function findMax that takes three arguments and returns their maximum.

function findMax1(say1,say2,say3) { 
    let maxSay =Math.max(say1,say2,say3);
    return maxSay;
}   
console.log(findMax1(28,41,99));


//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.

let tamSayi  = prompt("Pozitif Tam Sayı Girin")

function evenAddOdds() {
    if (tamSayi%2 === 0){
        return(`${tamSayi} çift sayıdır.`)      
    }  else{
        return (`${tamSayi} tek sayıdır.`)

    }    
}
console.log(evenAddOdds(tamSayi))


//Write a function which generates a randomUserIp. Ex: 168.127.25.2

function ipAdress() {
    let adress = Math.ceil(Math.random() * 100);
    let adress1 = Math.ceil(Math.random() * 100);
    let adress2 = Math.ceil(Math.random() * 100);
    let adress3 = Math.ceil(Math.random() * 100);
    console.log(`ip Adres:${adress}.${adress1}.${adress2}.${adress3}`);
}
ipAdress()


//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.

let firstName = prompt("isminizi giriniz");
let surName = prompt("Soyadınızı giriniz");
function fullName(firstName, surName) {
    console.log(firstName, surName, (firstName.length + surName.length), "karakter");

}
fullName(firstName, surName)

function fullName1(firstName) {
    console.log(firstName, "'den sevgilerle");

}
fullName1(firstName);



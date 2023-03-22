
// String Methods 

const str = "Archana Patel";
console.log(str);
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.slice(5));
console.log(str.slice(1,5));
console.log(str.concat(" is friend of"));

const str3 = "Archana Patel archana Archana";
console.log(str3.replace("Archana","Drshti"));
console.log(str3.replaceAll("Archana" , "Drshti"));


const str1 = "           Archana Patel        ";
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());
console.log(str1.startsWith('A'));
console.log(str1.startsWith(' '));

let text = "HELLO WORLD";
console.log(text.charAt(0));
console.log(text.includes("L"));

let text1 = "Please locate where 'locate' occurs!";
console.log(text1.indexOf("locate"))
console.log(text1.lastIndexOf("locate"));
console.log(text1.search("locate"));
console.log(text1.search(/locate/));


// Number Methods

const number = 123.234;
console.log(number.toFixed(2));
console.log(number.toExponential(2));
console.log(number.toPrecision(2));
console.log(Number.isInteger(10));

// Setter and getter

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
const person1 = person.lang;
console.log(person1);  

const Person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    set lang(lang) {
        this.language = lang.toUpperCase();
      }
  };
const person2 = Person.language;
console.log(person2);  

//Rest Parameter
function sum(...Numbers){
    let total=0;
    for (const iterator of Numbers) {
        total += iterator;
    }
    return total;
}
console.log(sum(1,2,3));

// Default Parameter

function SumThreeNum(a,b,c=10){
    return a+b+c;
}
console.log(SumThreeNum(3,4));

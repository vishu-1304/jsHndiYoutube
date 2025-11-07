const name = "vishu";
const repoCount = 50

// console.log(name + repoCount +"Value");//  its not better way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String ('vishiiiiii')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   vishu    "
console.log(newStringOne);// with spaces
console.log(newStringOne.trim());// rremoves spaces from both sides


const url ="www.vishuu.com/products/repo.html"
console.log(url.replace('products','item'));

console.log(url.includes('repo'));
console.log(url.split('/'));
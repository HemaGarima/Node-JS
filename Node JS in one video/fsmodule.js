const fs = require('fs');

// Blocking do not occurs
// fs.readFile('file.txt' , 'utf-8' , (err , data)=>{
//     console.log(err , data);
// })

// Blocking occurs intentionally
const a = fs.readFileSync('file.txt');

console.log(a); 
console.log(a.toString());

// non blocking I/O model
// fs.writeFile('file2.txt' , "This is a data" , ()=>{
//     console.log("written to the file.");
// });

// blocking occurs
const b = fs.writeFileSync('file2.txt' , "This is a data2");
console.log(b); // returns undefined
console.log("Finished reading file.");
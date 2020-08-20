let firstRow = 'мама мыла раму'+' ';
let secondRow = 'собака друг человека';
 console.log(firstRow.length);
 console.log(secondRow.length);


for (let i = 0; i < firstRow.length ; ++i) {
    console.log(firstRow.charAt(i));
}
for (let i = 0; i < secondRow.length; ++i) {
    console.log(secondRow.charAt(i));
}




function for1(phone) { 
     let newFormat = ''; 
     for (let i =0;i <phone.lenght; i++) { 
         newFormat += phone.charAt(i); 
         if(i ==1) {newFormat += '(';
        } else if (i==4){newFormat += ')';
    } else if (i==7 || i==9){newFormat += '-';
}
 } 
 return newFormat;
} 
console.log(for1('+7123456789'));

let s1 = " 7";
    let s2 = "(123)";
    let s3 = "456-78-90";
    let firstRow = s1 +s2 + s3;
      console.log("+" + s1 + " " + s2 + " " + s3);
    
    for (let i = 0; i < firstRow.length ; ++i) {

console.log(firstRow.charAt(i));}



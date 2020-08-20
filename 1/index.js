
function getRow(firstRow, secondRow) { 
    let count1 = 0; 
    let count2 = 0;
for (let i = 0; i < firstRow.length ; i++) {    
firstRow.charAt(i) ==='a' } ;
count1++;
for (let i = 0; i < secondRow.length ; i++) {
 secondRow.charAt(i)  ==='a' };
 count2++;


  if (count1 >count2) { console.log("мама мыла раму");
  } else console.log("собака друг человека");
}
    const firstRow = 'мама мыла раму'; 
    const secondRow = 'собака друг человека';

console.log(getRow(firstRow, secondRow));



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

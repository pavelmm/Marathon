 1.   
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
В каждой из них необходимо посчитать количество букв "а" и вывести ту строку, в которой таких букв больше.
function getRow(firstRow, secondRow) {
}
console.log(getRow(firstRow, secondRow)); // мама мыла раму



   const firstRow = 'мама мыла раму'; 
    const secondRow = 'собака друг человека';
    const CHAR = 'р'

function getRow(firstRow, secondRow) { 
    let firstResult =  countedChar (firstRow, CHAR); 
    let secondResult =  countedChar (secondRow, CHAR); 

    if (firstResult === secondResult){
        return 'Здесь одинаковое количество букв ' +  CHAR;
    }

    return firstResult >secondResult ? firstRow : secondRow;
}
function countedChar (row, char){
     let counted =0;
      
    for (let i = 0; i < row.length; i++) { 
        if (row.charAt(i) === char ){        
            counted++;
        }
    }
    return counted;
}
console.log(getRow(firstRow, secondRow));

2.
Есть номер телефона из 12-ти символов: +71234567890 должен быть +7 (123) 456-78-90
У нас должна быть функция, которая принимает телефон строкой и возвращает обратно отформатированные телефон:
function formattedPhone(phone) {
}
console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90



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

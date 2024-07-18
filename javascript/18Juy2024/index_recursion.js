// recursion

function printNoTillTen(number){
    console.log(number)
    if(number!==10)
      printNoTillTen(number+1)
  }
  
  printNoTillTen(1)
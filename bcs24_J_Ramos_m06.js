function oddEvenChecker(num) {
    if (typeof num !== 'number') {
      console.log('Invalid Input.');
    } else if (num % 2 === 0) {
      console.log('The number is even.');
    } else {
      console.log('The number is odd.');
    }
  }

oddEvenChecker(2); 
oddEvenChecker(3); 
oddEvenChecker(6); 
  
  function budgetChecker(num) {
    if (typeof num !== 'number') {
      console.log('Invalid Input.');
    } else if (num > 40000) {
      console.log('You are over the budget.');
    } else {
      console.log('You have resources left.');
    }
  }


budgetChecker(20000); 
budgetChecker(40000); 
budgetChecker('pork'); 
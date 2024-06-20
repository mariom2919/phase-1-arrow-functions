// Function expression named divide
function divide() {
    return 2000 / 100;
  }
  
  // Arrow function named square taking one parameter
  const square = (num) => {
    return num * num;
  }
  
  // Arrow function named add taking two parameters
  const add = (num1, num2) => {
    return num1 + num2;
  }
  
  // Calling the functions and potentially using the results
  console.log(divide()); // Output: 20
  
  const result = square(5);
  console.log(result); // Output: 25
  
  const sum = add(10, 15);
  console.log(sum); // Output: 25
  
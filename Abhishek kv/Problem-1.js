// Create a small calculator that performs operations such as:
// Addition, Subtraction, Multiplication, and Division using a class.

// Calculator inputs:
//   'a' -> First number 
//   'b' -> Second number
//   'type of operation' -> Type of operation (as a string, e.g., 'addition', 'subtraction', 'multiplication', 'division')

// Datatypes:
//   'a' = double
//   'b' = double
//   'type of operation' = string

class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      //addition
      case 'addition':
        return this.a + this.b;

      //subtraction 
      case 'subtraction':
        return this.a - this.b;

      //multiplication
      case 'multiplication':
        return this.a * this.b;

      //division
      case 'division':
        if (this.b === 0) {
          return "Error: Division by zero is not allowed.";
        }
        return this.a / this.b;

      default:
        return "Error: Invalid operation.";
    }
  }
}

const calc = new Calculator('10', '2', 'multiplication');
console.log(calc.calculate());

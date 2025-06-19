How it works 

- This calculator adds, subtracts, divides and multiply's two given numbers and stores the calculation and results in a history log. 

- When a user presses a button it uses the showToDisplay function to register what has been pressed and display the content to the screen of the calculator.

- When an operator is selected it uses the getOperator function that first takes the first input and converts it from a string to a number. Then the function fetches what operator input was requested.

- When the user selects the 2nd number of the equation and selects equal "=" the calculate function is called. First it takes the 2nd input and converts it to a number since JavaScript cant complete the equatin if the two inputs are strings. Then with the informatino we get from the operator function we are able to complete the equation. Results will be displayed on the screen of the calculator, the equation and results will be stored in the history log, and then the calculator resets and preps for a new equation.

- Error message should appear if User presses the equal button prior to selecting a 2nd input and/or operator.

- Error message should appear if user tries to divide a number by 0. 


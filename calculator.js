"use strict";
	let input = document.getElementById('answer');

        let firstNum = '';
        let secondNum = '';
        let operator = '';
        let answer = '';


        function calculator(btn, value){
            if(btn.id !== "operator"){ //if the btn is not an operator
                if(operator == ""){//if operator = empty string
                	if(value=="."){ //if value of button is a decimal point
                	}
                	else {
                		let num = firstNum;
                	}
                    let num1 = getFirstNum(value);
                    printToScreen(value);
                } else if (operator !== "") {
                    getSecondNum(value);
                    printToScreen(value);
                }
                // lines 11-24 check to see if the input is not an operator then it must be firstNum
            } else if(btn.id == "operator" && value !== '='){
                if(firstNum !== ''){
                    operator = value;
                    console.log(operator)
                    printToScreen(operator)
                } else {
                    alert("You need to enter a number first!");
                }//lines 25-32 check to see if IS an operator but NOT '=' and checks to make sure a number has been entered
            } else if(btn.id == "operator" && value == "=" && operator !== ''){
                console.log("Running calculation...");//this happens when you click the '='

                let num1 = convertToNumber(firstNum);
                let num2 = convertToNumber(secondNum);

                if (operator == '+'){
                    answer = Add(num1, num2);//calls function on line128-129
                    printAnswerToScreen(answer);
                    getSecondEquation(answer);
                    return answer;
                } else if ( operator == '-') {
                    answer = Subtract(num1, num2);//calls function on line 136-137
                    printAnswerToScreen(answer);
                    getSecondEquation(answer);
                    return answer;
                } else if (operator == '*') {
                    answer = Multiply(num1, num2);//calls function on line 124-135
                    printAnswerToScreen(answer);
                    getSecondEquation(answer);
                    return answer;
                } else if (operator == '/'){
                    answer = Divide(num1, num2);//calls function on line 133-134
                    printAnswerToScreen(answer);
                    getSecondEquation(answer);
                    return answer;
                } else {
                    console.log("Operation was not selected")
                }
            }
            console.log(firstNum, operator, secondNum, answer)
            return false;
        }

        // Get Values to calculate

        function getFirstNum(value){
            return firstNum += value;
        }

        function getSecondNum(value){
            return secondNum += value;
        }

        function getOperator(value){
            return operator = value;
        }


        function getSecondEquation(prevAnswer){
            firstNum = prevAnswer;
            operator = '';
            secondNum = '';
            answer = '';
            console.log("Answer has been calculated! Yupi!", answer)
        }


        // Conversions and Printing
       
        function convertToNumber(value){
			let decimal = (value - Math.floor(value) !== 0)
			if (decimal == true){
				console.log("Decimal found")
				return value = parseFloat(value, 10)//parseFloat parses a string and returns a floating point number.
			} else {
				console.log("No Decimal")
				return value = parseInt(value, 10); //parseInt parses a string and returns an integer.
			}
		}

        function printToScreen(value){
            return input.value += `${value}`;
        }

        function printAnswerToScreen(value){
            return input.value = `${value}`;
        }

        function clearScreen(){
            console.log("Clearing Screen...")

            firstNum = "";
            secondNum = "";
            operator = "";

            return input.value = '';
        }


        // Math Operations
        function Multiply(num1, num2){
            return num1 * num2;
        }

        function Add(num1, num2){
            return num1 + num2;
        }

        function Divide(num1, num2){
            return num1 / num2;
        }

        function Subtract(num1, num2){
            return num1 - num2;
        }
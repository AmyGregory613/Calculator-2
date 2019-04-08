"use strict";
		var calculator = new Object();
		calculator.add = function(x, y) {
			return parseInt(x) + parseInt(y);
		}
		calculator.subtract = function(x, y) {
			return parseInt(x) - parseInt(y);
		}
		calculator.divide = function(x, y) {
			return parseInt(x) / parseInt(y);
		}
		calculator.multiply = function(x, y) {
			return parseInt(x) * parseInt(y);
		}
		
		var calculate = function() {
			console.dir(this);
			
			var result;

			if(this.value == "+") {
				result = calculator.add(input.value, input.value); 
				console.log(result);
			}

			else if (this.value == "-") {
				result = calculator.subtract(input.value, input.value); 
				console.log(result);
			}

			else if (this.value == "*") {
				result = calculator.multiply(input.value, input.value); 
				console.log(result);
			}

			else if (this.value == "/") {
				result = calculator.divide(input.value, input.value); 
				console.log(result);
			}

			// var out = document.querySelector("#out");
			// out.value = result;
		}
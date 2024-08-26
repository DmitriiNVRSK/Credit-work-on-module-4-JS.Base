let userName;
userName = "Dmitrii";
alert(userName);
function greet() {
    alert("Hello Dmitrii");
}
greet();

import { celsiusToFahrenheit } from "./modules/celsiusToFahrenheit.js";
import { calculateFallDistance } from "./modules/calculateFallDistance.js";
import { calculateAverage } from "./modules/calculateAverage.js";
import { concatStrings } from "./modules/concatStrings.js";
console.log(celsiusToFahrenheit(25));
console.log(calculateFallDistance(5));
console.log(calculateAverage(10, 20, 30));
console.log(concatStrings("Привет", "Мир"));


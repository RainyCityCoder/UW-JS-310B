// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let wHead = document.getElementById("weather-head");
wHead.innerText = "February 10 Weather Forecast, Seattle"

// Change the styling of every element with class "sun" to set the color to "orange"
let classSun1 = document.querySelectorAll('.sun');
classSun1.forEach((element) => element.style.color = "orange");
 
// Change the class of the second <li> from to "sun" to "cloudy"
let firstListItemOfClassSun = document.querySelectorAll("li.sun")[0];
firstListItemOfClassSun.className = "cloudy"; 
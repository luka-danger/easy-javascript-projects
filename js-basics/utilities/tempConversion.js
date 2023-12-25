const convertToCelsius = function(temp) {
    let tempInCelcius = (temp - 32) * 5/9;
    return tempInCelcius; 
}; 

const convertToFahrenheit = function(temp) {
    let tempInFahrenheit = (temp * (9/5) + 32); 
    return tempInFahrenheit; 
}; 

const celciusToKelvin = function(temp) {
    let celToKel = (temp + 273.15); 
    return celToKel; 
};

const kelvinToCelcius = function(temp) {
    let kelToCel = (temp - 273.15);
    return kelToCel; 
};

const fahrenheitToKelvin = function(temp) {
    let fahrToKel = (temp + 459.67) * (5/9);
    return fahrToKel;
};

const kelvinToFahrenheit = function(temp) {
    let kelToFahr = (temp * (9/5) - 459.67);
    return kelToFahr; 
}; 

function getWeather() {
    const apiKey = '5049a862a809b58c2f4bd69c408c6043'; 
    const city = document.getElementsByClassName('.input').value;
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=city&appid=5049a862a809b58c2f4bd69c408c6043";
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
function displayWeather(data){
    const main = document.querySelector('.weatherInfo')
    const temperatureinfo = document.querySelector('.temperatureinfo')
    const windinfo = document.querySelector('.windinfo')
    const countryinfo = document.querySelector('.countryinfo')

    temperatureinfo.innerHTML ="Temperature: " + data.main.temp
    countryinfo.innerHTML ="Country: " + data.sys.country
    windinfo.innerHTML ="Wind: " + data.wind.speed
    main.innerHTML= "Weather: " + data.weather[0].main

    const checking = data.weather.map((weath)=>{
        const main = weath.main
        
        // console.log(main)
    })

    
}

// array destructuring...

// const userdetails ={
//     name:"mustapha",
//     age: 13,
// }
// const{name}=userdetails
// console.log(name)

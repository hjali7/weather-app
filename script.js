let weather = {
    "APIkey" : "751c7946b80d85f448db9972e0bc711f",
    fetchWeather : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.APIkey)
        .then((res)=> res.json())
        .then((data)=> this.displayWeather(data)) ;
    },

    displayWeather: function(data) {
        const { name } = data;
        const{ description ,icon  } = data.weather[0] ;
        const{temp , humidity} = data.main ; 
        const{ speed } = data.wind ;
        console.log(name,description,icon ,temp ,humidity,speed)
        document.querySelector('.city').innerHTML  = 'weather in ' + name;
        document.querySelector('.temp').innerHTML = temp + '°C'
        document.querySelector('.humidity').innerHTML  = 'humidity: ' + humidity + '%'
        document.querySelector('.wind').innerHTML = 'wind speed : ' + speed + 'km/h'
        document.querySelector('.description').innerHTML  = description
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+ icon + '.png'
    }
}

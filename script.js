let searchBar =document.querySelector('.search-bar')
let button = document.querySelector('button')

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
        document.querySelector('.city').innerHTML  = 'weather in ' + name;
        document.querySelector('.temp').innerHTML = temp + '°C'
        document.querySelector('.humidity').innerHTML  = 'humidity: ' + humidity + '%'
        document.querySelector('.wind').innerHTML = 'wind speed : ' + speed + 'km/h'
        document.querySelector('.description').innerHTML  = description
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+ icon + '.png'
        document.querySelector('body').style.backgroundImage = `url(https://source.unsplash.com/1600x900/?` + name  +` )`
    },
    search: function() {
        this.fetchWeather(searchBar.value)
        document.querySelector('.weather').classList.remove('loading')
    }    
}

button.addEventListener('click',()=>{
    weather.search()
    searchBar.value = ''
})

searchBar.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        weather.search()
        searchBar.value = ''
    }
})

weather.fetchWeather('tehran')
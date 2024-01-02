const API_KEY='88fb3f408002b3101273105d41903164';
const form=document.querySelector("form");
const search=document.querySelector("#search");
const weather=document.querySelector("#weather");

const getweather = async(city)=> {
    console. log('Fetching weather for city')
    console.log(city);
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod == "404"){
        weather.innerHTML = '<h2>City not found</h2>';
        return;
    }

  
    weather.innerHTML=`
    <div>
        <h2>${data.main.temp} °C</h2>
        <h4>${data.weather[0].main}</h4>
    </div>`

};

form.addEventListener(
    "submit",
    function(event){
        getweather(search.value)
        event.preventDefault();
    }
)
//Accessing the element 
const timeE1=document.getElementById('time');
const dateE1=document.getElementById('date');
const currentWeatherItemE1=document.getElementById('current-weather-item');
const timezoneE1=document.getElementById('timezone');
const countryE1=document.getElementById('country');
const weatherForcastE1=document.getElementById('weather-forecast');
const currentTempE1=document.getElementById('current-temp');

months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


setInterval(()=>{
   
const time=new Date();
const month=time.getMonth(); //we will get value 0-11 thats why we have to define month name in a array
const date=time.getDate();
const day=time.getDay();// we will get value from 0-6 thats why we have to define the day name in the arrray
const hours=time.getHours();
const minute=time.getMinutes();
const hourIn12Format=hours>=13 ? hours%12:hours;
const ampm=hours >= 12 ? 'PM':'AM';

timeE1.innerHTML=hourIn12Format+ ':' + minute +' '+ `<span id="am-pm">${ampm}</span>`
dateE1.innerHTML=Days[day]+','+date+' '+months[month]

},1000);

const API_KEY='6b9089ec827d3d787a3d38f446853b7a';

weatherData();

function weatherData(){
    navigator.geolocation.getCurrentPosition((success)=>{
        console.log(success);

        // let longitute=success.coords.longitude;
        // let latitute=success.coords.latitude;

        let {latitute, longitute } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitute}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res=>res.json()).then(data=>{
            console.log(data);
        })
    })
}

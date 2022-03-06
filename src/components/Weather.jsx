import React from 'react'
import Clear from '../resources/Clear.jpg'

const imageMap = {
'Clear': Clear,
'Clouds':
'https://images.unsplash.com/photo-1530537880974-a076f2eaf827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80',
'Smoke':
'https://images.unsplash.com/photo-1478971408687-8820951f5a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3354&q=80',
'Haze':
'https://images.unsplash.com/photo-1533757704860-384affeed946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
'Rain':'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
'Snow':
'https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
'Wind':
'https://images.unsplash.com/12/barley.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
'Mist':'https://images.unsplash.com/photo-1579553947413-0eb573d52526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80'
}

const Weather = ({ WeatherData , deleteData}) => {

var d = new Date();
var date = d.getDate();
var year = d.getFullYear();
var month = d.toLocaleString('default', {month: 'long'});
var day = d.toLocaleString('default', {weekday:'long'});
const mystyle = {
backgroundImage : `url(${imageMap[WeatherData.weather[0].main] }) , url(${Clear})`,
backgroundRepeat :'no-repeat',
backgroundSize : 'cover',
};

const handleDelete = () => {
    deleteData(WeatherData)
}

return (
<div className='col-md-4 mb-4'>
    <button type="button" className="btn position-relative pull-right" onClick={handleDelete}>
        <span className="badge rounded-pill bg-danger">X</span>
    </button>
    <div className="card-body py-5" style={mystyle}>
        <h5 className="card-title mb-2  fw-bold display-5">{WeatherData.name}</h5>
        <p className="card-text mb-5">
            {day}, {month} {date}, {year}
        </p>
        <hr />
        <h1 className="display-5 fw-bold mb-5">{WeatherData.main.temp} &deg;C</h1>
        <p className="lead fw-bold mb-2">{WeatherData.weather[0].main}</p>
        <p className="fw-bold mb-5">Min : {WeatherData.main.temp_min} &deg;C | Max : {WeatherData.main.temp_max} &deg;C
        </p>
        <p className="lead">Humidity : {WeatherData.main.humidity}%</p>
    </div>
</div>
);
}

export default Weather
import React, {useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import './App.css'

function App() {
const [data, setdata] = useState([]);

const updateData = city => {
if(!data.some(obj => obj.name === city.name))
setdata([city, ...data]);
console.log(city)
}

const deleteData = city => {
  setdata(data.filter(item => item.name !== city.name))
}

const fetchData = () => {
navigator.geolocation.getCurrentPosition(async (position) => {
const response = await
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=2e7d01985a60688c5fa6bd1cc9b2df38&units=metric`);
const city = await response.json()
setdata([city])
})
}

useEffect(() => {
fetchData();
}, [])

return (
<>
  <Navbar updateData={updateData} />
    <div class="row flex-row flex-wrap m-2 pb-4 pt-2">
      {data.map((city) => (
        <Weather key={city.name} WeatherData={city} deleteData={deleteData} />
      ))
      }
    </div>
</>
);
}

export default App;
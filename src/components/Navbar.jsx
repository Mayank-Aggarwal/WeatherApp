import React, { useRef } from 'react'

const Navbar = ({ updateData }) => {
    
    let textInput = useRef();
    const handleClick = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textInput.current.value}&appid=2e7d01985a60688c5fa6bd1cc9b2df38&units=metric`);
        if(response.status !== 404)
        {
            const city = await response.json();
            updateData(city);
            textInput.current.value = ""
        } 
        else {
            textInput.current.value = ""
            alert("Wrong city name entered")
        }
    }

    const handleKeypress = e => {
      if (e.charCode === 13) {
        handleClick();
      }
      
    };    


return (
<div>
    <nav className="navbar navbar-dark bg-dark justify-content-between">
        <h1 className="navbar-brand m-2">Weather</h1>
        <div className="form-inline d-flex flex-row">
            <input className="form-control mr-sm-2 p-2" type="search" aria-label="Search" ref={textInput}  placeholder="Enter City ...." onKeyPress={handleKeypress}/>
            <button className="btn btn-outline-success my-2 my-sm-0 " type="submit" onClick={() => handleClick()}>Search</button>
        </div>
    </nav>
</div>
)
}

export default Navbar
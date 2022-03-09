import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {

const [planets , setPlanets] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(()=> {
    fetch("http://localhost:8085/planets")
    .then(response => response.json())
    .then(planetsArray => {
        console.log(planetsArray);
        setPlanets(planetsArray)
    })
},[]);

function addNewPlanet(planet){
    fetch('http://localhost:8085/planets', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(planet)
    })
    .then(response => response.json())
    .then(json => { 
      setPlanets([...planets, json]);
    })
    .catch(err => console.error(err))
}
function handleSearch(searchText){
    setSearchText(searchText)
}
const planetsToDisplay = planets.filter(planet =>{
    return planet.name.toLowerCase().includes(searchText.toLowerCase())
})
    return(
        <div className="registry">
            <Search onSearch={handleSearch}/>
            <div className="content">
                <PlanetList planetData={planetsToDisplay}/>
                <NewPlanetForm addNewPlanet={addNewPlanet}/>
            </div>
        </div>
    )
}

export default Registry;
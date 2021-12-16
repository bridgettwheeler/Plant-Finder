import {useState, useEffect} from "react"
import React from "react";
import Navbar from "./Navbar";
import PlantFilter from "./PlantFilter";
import PlantContainer from "./PlantContainer";
import NewPlantForm from "./NewPlantForm";
import FavoritePlants from "./FavoritePlants";



//bloomscape.com

const API = "http://localhost:3000/house_plants"

function App() {

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState(plants)
  const handelChange = e => {
    const selectedGenre = e.target.value
    const filteredPlants = plants.filter(plant => plant.name === selectedGenre)
    setFilteredPlants(filteredPlants)
  }
  //for the form:
  const handelSubmit = e => {
    e.preventDefault()
    // PATCH?
  }
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API)
      const plants = await response.json()
      setPlants(plants)
      setFilteredPlants(plants)
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <p> Home page!</p>
      <PlantFilter  handelChange={handelChange}/>
      <PlantContainer plantsList= {plants} fileredPlants={filteredPlants}/>
      {/*<NewPlantForm handelSubmit={handelSubmit}/>
      <FavoritePlants /> */}
    </div>
  );
}

export default App;

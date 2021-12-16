import {useState, useEffect} from "react"
import React from "react";
import Navbar from "./Navbar";
import PlantFilter from "./PlantFilter";
import PlantContainer from "./PlantContainer";
import NewPlantForm from "./NewPlantForm";
import FavoritePlants from "./FavoritePlants";
import house_plants from "../db.json";


//bloomscape.com

const API = "http://localhost3001/house_plants"

function App() {

  const [plants, setPlants] = useState([{house_plants}])
  const handelChange = e => {
    const selectedGenre = e.target.value
    const filteredPlants = house_plants.filter(plant => plant.name === selectedGenre)
    setPlants(filteredPlants)
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
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <p> Home page!</p>
      <PlantFilter fileredPlants={filteredPlants} handelChange={handelChange}/>
      <PlantContainer plantsList= {plants}/>
      <NewPlantForm handelSubmit={handelSubmit}/>
      <FavoritePlants />
    </div>
  );
}

export default App;

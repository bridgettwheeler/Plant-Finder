import {useState, useEffect} from "react"
import React from "react";
import Navbar from "./Navbar";
import PlantFilter from "./PlantFilter";
import PlantContainer from "./PlantContainer";
import NewPlantForm from "./NewPlantForm";
import FavoritePlants from "./FavoritePlants";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



//bloomscape.com

const API = "http://localhost:3000/house_plants"

function App() {

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState(plants)
  const handelChange = e => {
    const selectedPlant = e.target.value
    const filteredPlants = plants.filter(plant => selectedPlant === "All" || plant.name === selectedPlant)
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
      
      <Router>
        <Navbar />
          <Switch>
          <Route path="/plants/new">
            <NewPlantForm />
          </Route>
          <Route path="/plants/favorites">
            <FavoritePlants />
          </Route>
          <Route path="/">
            <p> Home page!</p>
            <PlantFilter  handelChange={handelChange}/>
            <PlantContainer plantsList= {plants} filteredPlants={filteredPlants}/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

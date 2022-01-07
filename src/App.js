import {useState, useEffect} from "react";
import React from "react";
import Navbar from "./Navbar";
import PlantFilter from "./PlantFilter";
import PlantContainer from "./PlantContainer";
import NewPlantForm from "./NewPlantForm";
import FavoritePlants from "./FavoritePlants";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// question - I feel like my handleLike should be in App but when I put it there is says it is undefined. I try to add it to the plant container component but it doesnt work?
//bloomscape.com

const API = "http://localhost:3000/house_plants"

function App() {

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState(plants)
  
  const handleAddPlant = newPlant => {
    setPlants(currentPlants => [...currentPlants, newPlant])
    setFilteredPlants(currentPlants => [...currentPlants, newPlant])
  }

  const handleLike = likedPlant => {
    const modifiedPlantId = plants.findIndex(plant => plant.id === likedPlant.id)
    const newArray = [...plants]
    newArray[modifiedPlantId] = likedPlant
    setPlants(newArray)
    setFilteredPlants(newArray)

  }

  const handelChange = e => {
    const selectedPlant = e.target.value
    const filteredPlants = plants.filter(plant => selectedPlant === "All" || plant.name === selectedPlant)
    setFilteredPlants(filteredPlants)
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
            <NewPlantForm  handleAddPlant={handleAddPlant} />
          </Route>
          <Route path="/plants/favorites">
            <FavoritePlants plantsList= {plants}/>
          </Route>
          <Route path="/">
            <p> Home page!</p>
            <PlantFilter handelChange={handelChange}/>
            <PlantContainer plantsList= {plants} filteredPlants={filteredPlants} handleLike={handleLike}/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

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
            <p style={{color:'#006A4E', textAlign: 'center'}}>If you love house plants then you will this app! Browse all the house plants or filter by name. </p> <p style={{color:'#006A4E', textAlign: 'center'}}>Feeling that plant connection? Simply like all your favorite house plants and they will be saved to your Favorites page!</p> <p style={{color:'#006A4E', textAlign: 'center'}} >No plant left behind! If you have a plant that isn't in our database please add it by navigating to the Add New Plant form. Thank you for helping us keep our database growing!</p>
            <PlantFilter handelChange={handelChange}/>
            <PlantContainer plantsList= {plants} filteredPlants={filteredPlants} handleLike={handleLike}/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

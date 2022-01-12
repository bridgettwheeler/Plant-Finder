import {useState} from "react";
import {Card} from './StyledComponents';

//What i want to do is filter through plantCard and send a patch request for only the ids/cards that have a filled in heart. so the request will not have a specific id but rather if a heart is filled in the patch changes "liked:true". I am thinking I need a state variable that will capture all the "likedPlants" then map through those and fetch using the id/key? idk im confused...
//I need to filter through the 
function PlantCard({plantObj, handleLike}) {
    const [plant, setPlant] = useState(plantObj)
    const handleLikePlant = e => {

        //e.target.innerText = (e.target.innerText === "♡") ? "♥" : "♡"

        fetch(`http://localhost:3000/house_plants/${plant.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
        liked: !liked
       }),
        headers: {"Content-Type": "application/json"}
        })
        .then(resp => resp.json())
        .then(plant => {
            handleLike(plant)
            setPlant(plant)
        })
    
        

    }
    
const {image,name,size,sun,difficulty, id, liked} = plant
    return(
        <Card>
            <img alt="plant pic" src={window.location.origin + image} style={{width:"200px"}}/>
            <h3>{name}</h3>
            <p>Size: {size}</p>
            <p>Sun Exposure: {sun}</p>
            <p>Difficulty Level: {difficulty}</p>
            <p style={{color: "red"}} id="heart" onClick={handleLikePlant}>{liked ? "♥" : "♡"}</p>
        </Card>

    )
}
export default PlantCard;
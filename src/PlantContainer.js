import PlantCard from "./PlantCard";
//flexboxfroggy

function PlantContainer({filteredPlants, handleLike}) {

    return (
        <div>
            {filteredPlants.map(plant => <PlantCard key={plant.id} plantObj={plant} handleLike={handleLike}/>)}
        </div>
        
    )
}

export default PlantContainer;
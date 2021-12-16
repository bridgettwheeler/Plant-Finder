import PlantCard from "./PlantCard";

function PlantContainer({filteredPlants}) {

    return (
        <div>
            {filteredPlants.map(plant => <PlantCard key={plant.id} plant={plant}/>)}
        </div>
        
    )
}

export default PlantContainer;
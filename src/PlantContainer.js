import PlantCard from "./PlantCard";
//flexboxfroggy

function PlantContainer({filteredPlants}) {

    return (
        <div>
            {filteredPlants.map(plant => <PlantCard key={plant.id} plantObj={plant} />)}
        </div>
        
    )
}

export default PlantContainer;
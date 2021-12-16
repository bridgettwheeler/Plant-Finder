import PlantCard from "./PlantCard";

function PlantContainer({plants}) {

    return (
        <div>
            {plants.map(plant => <PlantCard />)}
        </div>
        
    )
}

export default PlantContainer;
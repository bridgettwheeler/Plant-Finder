import PlantCard from "./PlantCard";

function FavoritePlants({plantsList}) {
const likedPlants = plantsList.filter(plant => !!plant.liked)
    return (
        <div>
           {likedPlants.map(plant => <PlantCard key={plant.id} plantObj={plant} />)}
        </div>

    )
}
export default FavoritePlants;
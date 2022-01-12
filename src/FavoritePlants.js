import PlantCard from "./PlantCard";
import {Container} from './StyledComponents';

function FavoritePlants({plantsList}) {
const likedPlants = plantsList.filter(plant => !!plant.liked)
    return (
        <Container>
           {likedPlants.map(plant => <PlantCard key={plant.id} plantObj={plant} />)}
        </Container>

    )
}
export default FavoritePlants;
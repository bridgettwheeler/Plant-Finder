import PlantCard from "./PlantCard";
import {Container} from './StyledComponents';

function PlantContainer({filteredPlants, handleLike}) {
    const plantCards = filteredPlants.map(plant => <PlantCard key={plant.id} plantObj={plant} handleLike={handleLike} />)
    return (
        <Container> {plantCards} </Container>
        
    )
}






export default PlantContainer;
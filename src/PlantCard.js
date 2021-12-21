
function PlantCard({plant:{image,name,size,sun,difficulty}}) {

    return(
        <div style={{border:"solid", width:"300px", textAlign:"center"}}>
            <img alt="plant pic" src={window.location.origin + image} style={{width:"200px"}}/>
            <h3>{name}</h3>
            <p>Size: {size}</p>
            <p>Sun Exposure: {sun}</p>
            <p>Difficulty Level: {difficulty}</p>
            <p>&#9825;</p>
        </div>

    )
}
export default PlantCard;
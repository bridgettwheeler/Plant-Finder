
function PlantCard({plant:{image,name,size,sun,difficulty}}) {

    return(
        <div style={{border:"solid", width:"300px"}}>
            <img alt="plant pic" src={image} style={{width:"200px"}}/>
            <h3>{name}</h3>
            <p>{size}</p>
            <p>{sun}</p>
            <p>{difficulty}</p>
            <p>&#9825;</p>
        </div>

    )
}
export default PlantCard;
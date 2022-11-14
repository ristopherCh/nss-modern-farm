export const harvestPlants = (plantsArr) => {
    let reaped = []
    let seedsGathered = 0;
    for (let plant of plantsArr){
        if (plant.type === "Corn"){
            seedsGathered = plant.output/2
        } else {
            seedsGathered = plant.output
        }
        for (let i=0;i<seedsGathered;i++){
            reaped.push(plant)
        }
    }
    return reaped
}
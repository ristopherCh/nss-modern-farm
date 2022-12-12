const plants = [];

export const addPlant = (seedObj) => {
    if(Array.isArray(seedObj)){
        plants.push(...seedObj);
    } else {
        plants.push(seedObj);
    }   
}

export const usePlants = () => {
    
    return plants.map(plant => ({...plant}))
}



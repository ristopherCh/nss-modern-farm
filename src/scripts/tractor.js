
import { addPlant } from './field.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (planMap) => {
    for (let row of planMap){
        for (let crop of row){
            if (crop === "Asparagus"){
                addPlant(createAsparagus())
            }
            if (crop === "Corn"){
                addPlant(createCorn())
            }
            if (crop === "Potato"){
                addPlant(createPotato())
            }
            if (crop === "Soybean"){
                addPlant(createSoybean())
            }
            if (crop === "Sunflower"){
                addPlant(createSunflower())
            }
            if (crop === "Wheat"){
                addPlant(createWheat())
            }           
        }
    }
}
export const catalog = (harvestArr) => {
    let outStr = "";
    for (let crop of harvestArr){
        outStr += `<section class="plant">${crop.type}</section>`    
    }
    return outStr
}
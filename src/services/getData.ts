export async function getDataFact(){

    try {
        const dataCatFact = await fetch ("https://catfact.ninja/fact").then(res => res.json());
        console.log(dataCatFact)
        console.log(dataCatFact.fact)
        return dataCatFact
    } catch (error) {
        console.log(error)        
    }

}



export async function getDataCatimg(){

    try {
        const dataCatImg = await fetch ("https://cataas.com/cat").then(res => res);
        console.log(dataCatImg)
        return dataCatImg
    } catch (error) {
        console.log(error)        
    }

}


    

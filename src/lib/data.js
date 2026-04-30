export async function getAllTilesData (){
    const res = await fetch("https://autoglaze-data-server.onrender.com/all_Tiles")
    const data = await res.json();
    return data;
}

export async function getSingleTilesData (id){
    const res = await fetch(`https://autoglaze-data-server.onrender.com/all_Tiles/${id}`)
    const data = await res.json();
    return data;
}
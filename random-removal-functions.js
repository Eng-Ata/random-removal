function randomRemoval(x){
    let list = x
    for(let i = x.length; i > 0; i--){
        let random = Math.floor(i * Math.random())
        list.splice(random, 1)
        console.log(random)
        console.log(list)
    }
}
randomRemoval(["elyar", "ata", "sina", "milad"])

function randomRemoval2(x){
    let i = x.length
    let list =  x
    while(i > 0){
        let random = Math.floor(i * Math.random())
        list.splice(random, 1)
        i--
        console.log(list)
    }
}
randomRemoval2(["elyar", "ata", "sina", "milad", 'reza', 'ali'])

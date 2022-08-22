function getplayernameById(player){
    const playerId =document.getElementById(player);
    const playeardValue = playerId.innerText
    if(playeardValue==='Jashua Kimmich'){
        return 'Jashua Kimmich';
    }
    else if(playeardValue==='Thomas Muller'){
        return 'Thomas muller' ;
    }
    else if(playeardValue==='Serge Gnabry'){
        return 'Serge Gnabry';
    }
    else if(playeardValue==='Jamal Musiala'){
        return 'Jamal Musiala';
    }
    else if(playeardValue==='Manuel Nauer'){
        return 'Manuel Nauer';
    }
    else if(playeardValue==='Sadio Mane'){
        return 'Sadio Mane';
    }
}


document.getElementById('player-1').addEventListener('click', function(){
    const players =getplayernameById('kimmich')
    console.log(players)
    const 
    
})
document.getElementById('player-2').addEventListener('click', function(){
    const players =getplayernameById('muller')
    console.log(players)
    
})
document.getElementById('player-3').addEventListener('click', function(){
    const players =getplayernameById('gnabry')
    console.log(players)
    
})

document.getElementById('player-4').addEventListener('click', function(){
    const players =getplayernameById('jamal')
    console.log(players)
    
})

document.getElementById('player-5').addEventListener('click', function(){
    const players =getplayernameById('nauer')
    console.log(players)
    
})
document.getElementById('player-6').addEventListener('click', function(){
    const players =getplayernameById('mane')
    console.log(players)
    
})






// optional code



const players = document.getElementsByClassName("player");
for(const playeardId of players){
    playeardId.addEventListener('click' , function(event){
        // const name =event.target.innerText
        // console.log(name)

        // const firstPlayer = getplayernameById('kimmich')
        // console.log(firstPlayer)
        // const secondPlayer =getplayernameById('muller')
        // console.log(secondPlayer)

        // const name =document.getElementById('muller')
        // const nameValue =name.innerText
        // if(nameValue==='Jashua Kimmich'){
        //     console.log(true)
        // }
        // else{
        //     console.log(false)
        // }
    })
}
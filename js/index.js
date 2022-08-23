function getplayernameById(player, PlayersBusket){
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


document.getElementById('player-1').addEventListener('click', function(event){
    const limit =event.target.innerText
    const btn =document.getElementById('player-1')
    if(1>=limit){
        btn.removeAttribute("disabled")
    }
    else(
        btn.setAttribute("disabled", true)
    )
    const players =getplayernameById('kimmich')
    const busket =document.getElementById("players-busket")
    const li =document.createElement('li')
    li.innerText=players
    busket.appendChild(li)
})
document.getElementById('player-2').addEventListener('click', function(event){
    const limit =event.target.innerText
    const btn =document.getElementById('player-2')
    if(1>=limit){
        btn.removeAttribute("disabled")
    }
    else(
        btn.setAttribute("disabled", true)
    )
    const players =getplayernameById('muller')
    const busket =document.getElementById("players-busket")
    const li =document.createElement('li')
    li.innerText=players
    busket.appendChild(li)
    
})
document.getElementById('player-3').addEventListener('click', function(event){
    const limit =event.target.innerText
    const btn =document.getElementById('player-3')
    if(1>=limit){
        btn.removeAttribute("disabled")
    }
    else(
        btn.setAttribute("disabled", true)
    )
    const players =getplayernameById('gnabry')
    const busket =document.getElementById("players-busket")
    const li =document.createElement('li')
    li.innerText=players
    busket.appendChild(li) 
})

document.getElementById('player-4').addEventListener('click', function(event){
    const limit =event.target.innerText
    const btn =document.getElementById('player-4')
    if(1>=limit){
        btn.removeAttribute("disabled")
    }
    else(
        btn.setAttribute("disabled", true)
    )
    const players =getplayernameById('jamal')
    const busket =document.getElementById("players-busket")
    const li =document.createElement('li')
    li.innerText=players
    busket.appendChild(li)
    
})

document.getElementById('player-5').addEventListener('click', function(event){
    const limit =event.target.innerText
    const btn =document.getElementById('player-5')
    if(1>=limit){
        btn.removeAttribute("disabled")
    }
    else(
        btn.setAttribute("disabled", true)
    )
    const players =getplayernameById('nauer')
    const busket =document.getElementById("players-busket")
    const li =document.createElement('li')
    li.innerText=players
    busket.appendChild(li)
    
})
document.getElementById('player-6').addEventListener('click', function(event){
    const limit =event.target.innerText
    const btn =document.getElementById('player-6')
    if(1>=limit){
        btn.removeAttribute("disabled")
    }
    else(
        btn.setAttribute("disabled", true)
    )
    const players =getplayernameById('mane')
        const busket =document.getElementById("players-busket")
    const li =document.createElement('li')
    li.innerText=players
    busket.appendChild(li)
    
})

// 
// calculate function
// 

document.getElementById('calculate-button').addEventListener('click', function(){
    const playerPrice =document.getElementById('player-price');
    const list  =document.querySelector("#players-busket").childNodes
    const listItem =list.length-1
    if(4<=listItem){
        const reuslt = playerPrice.value*listItem
        const totalPrice =document.getElementById('player-total-price')
        totalPrice.innerText = reuslt
    }
    else{
        alert('iudhfiodsf')
    }

})

// 
// calculate total function
// 

document.getElementById('claculate-total').addEventListener('click', function(){
    const totalPrice =document.getElementById('player-total-price');
    const totalPriceElement =totalPrice.innerText;
    const totalPriceValue = parseInt(totalPriceElement);

    const mangerValue =document.getElementById('manager');
    const managerValueElement=mangerValue.value;
    const managerNumber=parseInt(managerValueElement);

    const coachValue =document.getElementById('coach');
    const coachValueElement =coachValue.value
    const coachNumber =parseInt(coachValueElement);

    const mangerCoachAddition = managerNumber + coachNumber + totalPriceValue

    const calculateTotal =document.getElementById('total');
    const calculateTotalString =calculateTotal.innerText;
    const calculateTotalValue =parseInt(calculateTotalString);
    calculateTotal.innerText =mangerCoachAddition;
})


    



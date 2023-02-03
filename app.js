let message='';
let hasBlackJack = false
let isAlive = false
let sum =0;
let messageEl=document.querySelector('#message-el');
let button=document.querySelector('#submit');
let sumEl=document.querySelector('#sum');
let cardEl=document.querySelector('#card')
let newCard=document.querySelector('#newCard');
let playerEl=document.getElementById("player");
let myarr=[];
let player={
    playername:' Per',
    playerChips:145
}
playerEl.textContent=player.playername+':'+" "+'$'+player.playerChips;
// for(let j in playerEl){
//     playerEl.textContent=playerEl[j];
// }

button.addEventListener('click',()=>{
    isAlive=true;
    let firstCard = getRandom();
    let secondCard = getRandom();
    myarr=[firstCard,secondCard]
    sum=firstCard+secondCard;
    cardEl.textContent=`Cards:`;
    for(var x in myarr){
        cardEl.textContent +=myarr[x] + '  ';
    }
    sumEl.textContent=`Sum: ${sum}`;
    if (sum <= 20) {
        message="Do you want to draw a new card?";
    } else if (sum === 21) {
        message="Wohoo! You've got Blackjack! ";
        hasBlackJack = true
    } else {
        message="You're out of the game!";
        isAlive = false
    }
    messageEl.textContent=message;
});
newCard.addEventListener('click',()=>{
    if(isAlive === true &&  hasBlackJack === false){
    let card =getRandom();
    sum +=card;
    myarr.push(card);
    sumEl.textContent=`Sum: ${sum}`;
    }

});
function getRandom(){
    let randomNumber= Math.floor(Math.random()*13)+1;
    if(randomNumber >10){
return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }else{
        return   randomNumber;
    }

}
// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear"
// ];
// for(let x in messages){
//     console.log(messages[x])
// }
// messages.forEach((value)=>{
//     console.log(value);
// })
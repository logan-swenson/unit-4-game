$(document).ready(function(){
    
    let Total= 0; 
    let lose = 0;
    let win= 0;
    let jirfNum= Math.floor(Math.random()*12);
    let rapNum= Math.floor(Math.random()*12);
    let flyNum= Math.floor(Math.random()*12);
    let rexNum= Math.floor(Math.random()*12);
    let randomNumber=Math.floor(Math.random()*120);
    
$('#randomNumber').text(randomNumber);
$('#winCount').text(win);
$('#lossCount').text(lose);

function winner(){
    alert("Winner!");
    win++; 
    $('#winCount').text(win);
    newGame();}

function loser(){
    alert ("Loser!");
    lose++;
    $('#lossCount').text(lose);
    newGame()}

function newGame(){
    Random=Math.floor(Math.random()*120);
    console.log(randomNumber);
    $('#randomNumber').text(randomNumber);
    jirfNum= Math.floor(Math.random()*12);
    rapNum= Math.floor(Math.random()*12);
    flyNum= Math.floor(Math.random()*12);
    rexNum= Math.floor(Math.random()*12);
    Total= 0;
    $('#total').text(Total);
    } 

    $('#jirf').on ('click', function(){
        Total = Total + jirfNum;
        console.log("New Total= " + Total);
        $('#total').text(Total); 
            if (Total == randomNumber){
            winner();
            }else if ( Total > randomNumber){
            loser();}})  

    $('#rap').on('click', function(){
        Total = Total + rapNum;
        console.log("New Total= " + Total);
        $('#total').text(Total); 
            if (Total == randomNumber){
            winner();
            }else if ( Total > randomNumber){
            loser();}})  

    $('#fly').on('click', function(){
        Total = Total + flyNum;
        console.log("New Total= " + Total);
        $('#total').text(Total);
            if (Total == randomNumber){
            winner();
            } else if ( Total > randomNumber){
            loser();}})  

    $('#rex').on('click', function(){
        Total = Total + rexNum;
        console.log("New Total= " + Total);
        $('#total').text(Total); 
            if (Total == randomNumber){
            winner();
            }else if ( Total > randomNumber){
            loser();}});   
  }); 
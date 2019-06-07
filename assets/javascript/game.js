$(document).ready(function(){
    let randomNumber=Math.floor(Math.random()*101+19)
    let Total= 0; 
    let win= 0;
    let lose = 0;
    let jirfNum= Math.floor(Math.random()*11+1)
    let rapNum= Math.floor(Math.random()*11+1)
    let flyNum= Math.floor(Math.random()*11+1)
    let rexNum= Math.floor(Math.random()*11+1)

$('#randomNumber').text(randomNumber);
$('#winCount').text(win);
$('#lossCount').text(lose);

  function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(randomNumber)
    $('#randomNumber').text(randomNumber);
    jirfNum= Math.floor(Math.random()*11+1);
    rapNum= Math.floor(Math.random()*11+1);
    flyNum= Math.floor(Math.random()*11+1);
    rexNum= Math.floor(Math.random()*11+1);
    Total= 0;
    $('#total').text(Total);
    } 

  function winner(){
  alert("Winner!");
    win++; 
    $('#winCount').text(win);
    reset();
  }

  function loser(){
  alert ("Loser!");
    lose++;
    $('#lossCount').text(lose);
    reset()
  }

    $('#jirf').on ('click', function(){
      Total = Total + jirfNum;
      console.log("New Total= " + Total);
      $('#total').text(Total); 
          if (Total == randomNumber){
            winner();
          }else if ( Total > randomNumber){
            loser();
          }   
    })  
    $('#rap').on('click', function(){
      Total = Total + rapNum;
      console.log("New Total= " + Total);
      $('#total').text(Total); 
          if (Total == randomNumber){
            winner();
          }else if ( Total > randomNumber){
            loser();
          } 
    })  
    $('#fly').on('click', function(){
      Total = Total + flyNum;
      console.log("New Total= " + Total);
      $('#total').text(Total);
            if (Total == randomNumber){
            winner();
        } else if ( Total > randomNumber){
            loser();
          } 
    })  
    $('#rex').on('click', function(){
      Total = Total + rexNum;
      console.log("New Total= " + Total);
      $('#total').text(Total); 
            if (Total == randomNumber){
            winner();

          }else if ( Total > randomNumber){
            loser();
          }
    });   
  }); 
'use strict';
let upper = 5;
let lower = 1;

// score display variables
const currentPlayer2Score = document.querySelector(".current-player2");
const currentPlayer1Score = document.querySelector(".current-player1");
const mainPlayer2Score = document.querySelector(".main-player2");
const mainPlayer1Score = document.querySelector(".main-player1");
const winMessage = document.querySelector(".win-message");

// button variables
const btnRollDice = document.querySelector(".roll-dice");
const diceImage = document.querySelector(".dice");
const btnHold = document.querySelector(".hold");
const btnNewGame = document.querySelector(".new-game");

//score variables
var currentScore =0;
var player1Score =0;
var player2Score =0;
var playerCode = 1;


//events

   
            btnRollDice.addEventListener('click',rolldice);
            btnHold.addEventListener('click',holdFunction);
            btnNewGame.addEventListener('click',newGame);

    function rolldice()
    {   
        if(player1Score <100 && player2Score <100)
        {   
            if(playerCode ===1)
            {
                let secNumber = Math.floor(Math.random()* (upper - lower +1)+lower);
                console.log(secNumber);
                if(secNumber !== 1)
                {
                        switch(secNumber)
                        {
                            case 2:
                                diceImage.src = 'die_face_2.svg';
                                break;
                            case 3:
                                diceImage.src = 'die_face_3.svg';
                                break;
                            case 4:
                                diceImage.src = 'die_face_4.svg';
                                break;
                            case 5:
                                diceImage.src = 'die_face_5.svg';
                                break;
                            default:
                                diceImage.src = 'die_face_6.svg';
                        }
                        currentScore = currentScore + secNumber ;
                       currentPlayer1Score.textContent = currentScore;
                }
                else
                {
                    diceImage.src = 'die_face_1.svg';
                    currentScore =0;
                    currentPlayer1Score.textContent = currentScore; 
                    
                    if(playerCode === 1)
                    {
                        playerCode = 2;                             
                    }
                    else
                    {
                        playerCode = 1;                   
                    }                   
                }
            }  
            else
            {
                let secNumber = Math.floor(Math.random()* (upper - lower +1)+lower);
                console.log(secNumber);
                if(secNumber !== 1)
                {
                        switch(secNumber)
                        {
                            case 2:
                                diceImage.src = 'die_face_2.svg';
                                break;
                            case 3:
                                diceImage.src = 'die_face_3.svg';
                                break;
                            case 4:
                                diceImage.src = 'die_face_4.svg';
                                break;
                            case 5:
                                diceImage.src = 'die_face_5.svg';
                                break;
                            default:
                                diceImage.src = 'die_face_6.svg';
                        }
                        currentScore = currentScore + secNumber ;
                       currentPlayer2Score.textContent = currentScore;
                }
                else
                {
                    diceImage.src = 'die_face_1.svg';
                    currentScore =0;
                    currentPlayer2Score.textContent = currentScore; 
                    
                    if(playerCode === 1)
                    {
                        playerCode = 2;                             
                    }
                    else
                    {
                        playerCode = 1;                    
                    }
                    
                }
            }  
        }
        else
        {
              if(player1Score >=100)
              {
                  winMessage.textContent = 'Player 1 Wins !'
              }
              else
              {
                winMessage.textContent = 'Player 2 Wins !'
              }

        }

    }
    

   
    function holdFunction()
    {
        if(playerCode === 1)
                {
                    player1Score = player1Score + currentScore;
                    playerCode = 2;
                    currentScore = 0;
                    currentPlayer1Score.textContent =currentScore;
                    mainPlayer1Score.textContent = player1Score;
                    
                }
                else
                {
                    player2Score = player2Score + currentScore;
                    playerCode = 1;
                    currentScore = 0;
                    currentPlayer2Score.textContent =currentScore;
                    mainPlayer2Score.textContent = player2Score;
                    
                }
                
    }

    function newGame()
    {
         currentScore =0;
         player1Score =0;
         player2Score =0;
         playerCode = 1;
         mainPlayer2Score.textContent = player2Score;
         mainPlayer1Score.textContent = player1Score;
         currentPlayer2Score.textContent = currentScore;
         currentPlayer1Score.textContent = currentScore;
    }

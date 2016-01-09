"use strict";

var towerSelected = false;
var selectedTowerId;
var $selectedPiece;

$(document).ready(init);

console.log("towerSelected", towerSelected, "selectedTowerId", selectedTowerId, "selectedPiece", $selectedPiece)

function init(){

    var $towers = $('.towerBase');
    $towers.on('click', towerClicked);
}


function towerClicked(event){
    if (towerSelected){
        if (this.id === selectedTowerId){
        towerClicked = false;
        $selectedPiece.removeClass('selected');

      } else{

        var topPieceId = $selectedPiece.attr('id');
        var bottomPieceId = $(this).children(":first").attr('id');


        if (!bottomPieceId || validMove(topPieceId, bottomPieceId)){
            $selectedPiece.remove();
            $(this).prepend($selectedPiece);
            towerSelected = false;
            $selectedPiece.removeClass('selected');


        } else {
            towerSelected = false;
            $selectedPiece.removeClass('selected');

        }
      }

//first tower selected
    } else {
      $selectedPiece = $(this).children(":first");
      $selectedPiece.addClass("selected");
      towerSelected = true;
      selectedTowerId = this.id;
  }
  console.log("towerSelected", towerSelected, "selectedTowerId", selectedTowerId, "selectedPiece", $selectedPiece)

  checkGameWon();
}



function validMove(topPieceId, bottomPieceId){
    return parseInt(topPieceId[5]) < parseInt(bottomPieceId[5])
}










function checkGameWon(){
    var count = $("#tower3").children().length;
    if (count === 4)
        return youWin();
}

function youWin(){
    $('body').css("background-color", "LightSalmon");
    $('#displayOutput').text("You win!");
}

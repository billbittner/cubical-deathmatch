

var creatureSize = 5;
var resourceSize = 5;
var spellSize = 5;

var player1 = {
    name: "Test Player 1",
    cards: {
        deck: [],
        onDeck: [],
        inPlayCards: [],
        inHandCards: [],
        discardPile: []
    }
};

var gameState = "draw card";

//create random decks.  note: in the future you will come in with your own deck and we will just shuffle it.
function dealDeck(bank1, numberOfCards1, bank2, numberOfCards2, bank3, numberOfCards3){
    var deck = [];
    var randomNumber;
    for (var i = 0; i < numberOfCards1; i++){
        randomNumber = Math.floor(Math.random()*bank1.length)
        deck.push(bank1[randomNumber]);
    };
     for (var i = 0; i < numberOfCards2; i++){
        randomNumber = Math.floor(Math.random()*bank2.length)
        deck.push(bank2[randomNumber]);
    };
     for (var i = 0; i < numberOfCards3; i++){
        randomNumber = Math.floor(Math.random()*bank3.length)
        deck.push(bank3[randomNumber]);
    };
    return deck;
}

function createCard(card){
        //create a div to use for display
        var cardDiv = $("<div>");
        cardDiv.addClass("card");
        //display the card's name
        var cardName = $("<p>");
        cardName.addClass("card-text");
        cardName.text("Name: " + card.name);
        cardDiv.append(cardName);
        //display the card's type
        var cardType = $("<p>");
        cardType.addClass("card-text");
        cardType.text("Type: " + card.type);
        cardDiv.append(cardType);
        //display the card's description
        var cardDescription = $("<p>");
        cardDescription.addClass("card-text");
        cardDescription.text(card.description);
        cardDiv.append(cardDescription);
        //return the created div
        return cardDiv;
};

function openSlots(){
    $("#in-play-target").removeClass("closed-slot");
    $("#in-play-target").addClass("open-slot");
    $(".card-slot").removeClass("closed-slot");
    $(".card-slot").addClass("open-slot");
}

function closeSlots(){
    $("#in-play-target").removeClass("open-slot");
    $("#in-play-target").addClass("closed-slot");
    $(".card-slot").removeClass("open-slot");
    $(".card-slot").addClass("closed-slot");
}

//create a random deck
player1.cards.deck = dealDeck(creatureBank, 5, resourceBank, 5, spellBank, 5);

//add click events to deck so you can draw
$("#deck").on("click", function(){  
    if (gameState === "draw card") {
        //push a card from the deck to the player's on deck circle
        player1.cards.onDeck.push(player1.cards.deck[0]);
        //remove the card you just pushed from the deck
        player1.cards.deck.shift();

        //create the on deck card
        var newCard = createCard(player1.cards.onDeck[0]);
        console.log(player1.cards.onDeck[0]);
        //place the ondeck card
        $("#on-deck-slot").append(newCard);

        //show where card can be placed
        openSlots();
        //switch the game state
        gameState = "card on deck";
    };

    //update the game state display
    $("#game-state").text(gameState);

})

//add click events to card slots
$("#in-play-target").on("click", function(){
    if (gameState === "card on deck"){
        //store the on deck card in a temporary variable
        var tempCardHolder;
        tempCardHolder = player1.cards.onDeck[0];
        //push the card from the deck to played cards & remove the card from the deck
        player1.cards.inPlayCards.push(player1.cards.onDeck[0]);
        player1.cards.onDeck.shift();

        //empty the on-deck area
        $("#on-deck-slot").empty();

        //create the new card in the in-play area
        var newCard = createCard(tempCardHolder);
        console.log(newCard);
        //place the ondeck card
        $("#in-play-target").before(newCard);
        
        //turn off the open-slot indicators
        closeSlots();
        //reset the game state so a new card can be drawn
        gameState = "ready to end turn";
        $("#end-turn-btn").show();
    };

    //update the game state display
    $("#game-state").text(gameState);
});
//add click events to in-hand card slots
$(".card-slot").on("click", function(){
    //if a card is on deck then..
    if ((gameState === "card on deck")  && (player1.cards.inHandCards.length <= 5)){
        //if the card slot is "filled" then trigger a swap it with the on-deck card
            //not sure how this will work.  maybe need to strip the card slots styling so it can be a wrapper. else just delete card slot and replace.
            //maybe replace the card slots with just a target like we have for the in place cards.
        //if the card slot is empty, then fill it with the on deck card
    };

    //update the game state display
    $("#game-state").text(gameState);
});
//add click events to discard slot
$("#discard").on("click", function(){
    //if a card is on deck then..
    if (gameState === "card on deck"){
        //place the on-deck card in the discard pile
        //store the on deck card in a temporary variable
        var tempCardHolder;
        tempCardHolder = player1.cards.onDeck[0];
        //push the card from the deck to played cards & remove the card from the deck
        player1.cards.discardPile.push(player1.cards.onDeck[0]);
        player1.cards.onDeck.shift();

        //empty the on-deck area
        $("#on-deck-slot").empty();

        //create the new card in the in-play area
        var newCard = createCard(tempCardHolder);
        console.log(newCard);
        //place the ondeck card
        $("#discard").append(newCard);
        
        //turn off the open-slot indicators
        closeSlots();
        //reset the game state so a new card can be drawn
        gameState = "ready to end turn";
        $("#end-turn-btn").show();
    };

    //update the game state display
    $("#game-state").text(gameState);
});



//all current cards need to be able to be moved around
$(document).on("click", ".card", function(){
    //if no card in the on-deck circle, player select or deselect card
    //if selected, move it to the on-deck circle
})



$("#end-turn-btn").on("click", function(){
    if (gameState === "ready to end turn"){
    //this will trigger when the player is done with their turn
    //at this point, we will go through and perform all the necessary actions
        //remove the card that is displayed in the discard pile
        //carry out all attacks
        //carry out all passive abilities
        //carry out all defenses
        //etc.
    //we will also update the server so it can pass the baton to the other player
    //other player will take down the information to update their version of the game and then perform their turn.

    $("#discard").empty();
    gameState = "draw card";
    $(this).hide();
    };
})


// -- RUN THE GAME --- 
//show the game state
$("#game-state").text(gameState);
$("#end-turn-btn").hide();


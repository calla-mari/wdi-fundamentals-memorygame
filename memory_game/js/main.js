

console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamond",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkMatch = function() {

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		};
	} else {
		alert("Pick another card.");
	};
};

var flipCard = function() {

	cardID = this.getAttribute('data-id');
	console.log("Player flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	cardsInPlay.push(cards[cardID].rank);

	this.setAttribute('src', cards[cardID].cardImage);
	console.log(cards[cardID].cardImage);
	
	setTimeout(checkMatch, 100);
	// checkMatch();
};


var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		//document.querySelector('cardElement').appendChild('game-board');
		document.getElementById('game-board').appendChild(cardElement);
	};
}; 

createBoard();

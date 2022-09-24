// array of quotes that will appear
const quotes = [
	'You like my hair? / Gee, thanks, just bought it.',
	'I need a one dance. Got a Hennessy in my hand.',
	'Venom, (I got that) adrenaline momentum.',
	'I just want you call my phone right now. I just wanna hear youre mine.',
	'You got me in a tight grip. You know how to just make me want you, baby.',
	'Y en la calle ando suelto pero por ti me quito. Si tu me lo pides yo me porto bonito.',
	'Cause you make me feel like. Ive been locked out of heaven.',
    'Dont be shy, girl, go bananza. Shake ya body like a belly dancer.',
    'Te fe-li-cito, que bien actuas.'
];

// array for storing the words of the current challenge word
let words = [];
// stores the index of the word the player is currently typing
let wordIndex = 0;
// default value for startTime (will be set on start)
let startTime = Date.now();

// grab UI items
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message')
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', function () {
	// get a quote randomly
	const quoteIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteIndex];
	// put the quote into an array of words, will spare by an space
	words = quote.split(' ');
	// reset the word index for tracking
	wordIndex = 0;

	// create an array of span elements so we can set a class
	const spanWords = words.map(function(word) {return `<span>${word} </span>`});
	// convert into string and set as innerHTML on quote display
	quoteElement.innerHTML = spanWords.join('');
	// highlight the first word
	quoteElement.childNodes[0].className = 'highlight';
	// clear any prior messages
	messageElement.innerText = '';

	// setup the textbox
	// clear the textbox
	typedValueElement.value = '';
	// set focus
	typedValueElement.focus();
	// set the event handler

	// Start the timer
	startTime = new Date().getTime();
});

typedValueElement.addEventListener('input', (e) => {
	// Get the current word
	const currentWord = words[wordIndex];
	// get the current value
	const typedValue = typedValueElement.value;

	if (typedValue === currentWord && wordIndex === words.length - 1) {
		// end of quote
		// Display success
		const elapsedTime = new Date().getTime() - startTime;
		const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
		messageElement.innerText = message;
	} else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
		// end of word
		// clear the typedValueElement for the new word
		typedValueElement.value = '';
		// move to the next word
		wordIndex++;
		// reset the class name for all elements in quote
		for (const wordElement of quoteElement.childNodes) {
			wordElement.className = '';
		}
		// highlight the new word
		quoteElement.childNodes[wordIndex].className = 'highlight';
	} else if (currentWord.startsWith(typedValue)) {
		// currently correct
		// highlight the next word
		typedValueElement.className = '';
	} else {
		// error state
		typedValueElement.className = 'error';
	}
});
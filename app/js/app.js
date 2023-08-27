// ------------------------- OBJECT & VARIABLES -------------------------

const ADVICE_SLIP_API_URL = 'https://api.adviceslip.com/advice';

const adviceGeneratorBtn = document.querySelector('.advice-card__button');
const adviceQuoteId = document.querySelector('.advice-card__id');
const adviceTextQuote = document.querySelector('.advice-card__quote');

// ---------------------------------------------------------------------


// ------------------------- FUNCTIONS -------------------------

// Function to generate random advice
const generateAdvice = () => {
    // Fetch the API
    fetch(ADVICE_SLIP_API_URL)
        .then(response => response.json())
        .then(data => {
            adviceQuoteId.textContent = data.slip.id;
            adviceTextQuote.textContent = data.slip.advice;
        })
        .catch(error => console.log(error));
    
    // Disable the button for 2 seconds (to prevent spamming)
    adviceGeneratorBtn.disabled = true;
    setTimeout(() => {
        adviceGeneratorBtn.disabled = false;
    }, 2000);
}

// ---------------------------------------------------------------------

// ------------------------- EVENT LISTENERS -------------------------

adviceGeneratorBtn.addEventListener('click', generateAdvice);

// ---------------------------------------------------------------------
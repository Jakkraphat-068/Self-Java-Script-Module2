// Step 1: Create an array to hold quote objects
let quotes = undefined

// Step 2: Select the DOM element where quotes will be rendered
function addNewQuote(content, author) {
  addQuote(content, author);
}
// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
  const container = document.getElementById('quote-list');
  if (!container) return;
  container.innerHTML = '';
  quotes = getAllQuotes();
  quotes.forEach(q => {
    const p = document.createElement('p');
    p.textContent = `"${q.content}" — ${q.author}`;
    container.appendChild(p);
  });
}
// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
addNewQuote('Stay hungry, stay foolish.', 'Steve Jobs');
addNewQuote('Do or do not. There is no try.', 'Yoda');
addNewQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci');
renderQuotes();
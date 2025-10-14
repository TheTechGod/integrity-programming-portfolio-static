// Coffee + Kids + Code Dynamic Quotes
document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    {
      text: "Integrity is doing the right thing, even when no one is watching.",
      author: "C.S. Lewis"
    },
    {
      text: "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson"
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      text: "Do not let your fire go out, spark by irreplaceable spark.",
      author: "Ayn Rand"
    },
    {
      text: "The function of good software is to make the complex appear simple.",
      author: "Grady Booch"
    }
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-text").textContent = `“${randomQuote.text}”`;
  document.getElementById("quote-author").textContent = `— ${randomQuote.author}`;
});

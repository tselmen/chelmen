fetch("https://type.fit/api/quotes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const random = Math.floor(Math.random() * data.length)
    const quote = data[random]
    const quoteBody = document.querySelector("#quote");
    if (!data.author) data.author = ""
    quoteBody.innerHTML = `${quote.text}<br>~${quote.author}`;
  })
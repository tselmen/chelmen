fetch("https://random-quote-generator-clmn.herokuapp.com/quotes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const quoteBody = document.querySelector("#quote");
    if (!data.author) data.author = ""
    quoteBody.innerHTML = `${data.body}<br>~${data.author}`;
  })
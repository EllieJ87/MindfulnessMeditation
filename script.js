function generateMindfulness() {
    let mindfulQuote = MINDFULNESS.length;
    let randomIndex = Math.floor(Math.random() * mindfulQuote);
    let randomMindData = MINDFULNESS[randomIndex];

    document.getElementById("text").innerText = randomMindData.quote;
   
}
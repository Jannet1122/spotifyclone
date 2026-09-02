let quotes=[
    {
        text: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt" 
    },
    {
        text: "In the middle of every difficulty lies opportunity.",    
        author: "Albert Einstein"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        text:"Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },
    {
        text: "sacrifice is the price of success.",
        author: "Unknown"
    },
]
let index=Math.floor(Math.random()*quotes.length);
const button=document.querySelector(".button");

console.log(quoteText);

function generateQuote(){
    let quoteText= document.querySelector(".quote");
    console.log("Button clicked");
    console.log(quotes[index].text+" - "+quotes[index].author);
    quoteText.textContent=quotes[index].text+" - "+quotes[index].author;
    console.log(quotes[index].text+" - "+quotes[index].author);
}

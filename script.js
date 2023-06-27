const btn = document.getElementById("btn");

const output = document.querySelector(".output");

let quote = ["When you have a dream, you've got to grab it and never let go.",
"Nothing is impossible. The word itself says 'I'm possible!'",
"There is nothing impossible to they who will try.",
"The bad news is time flies. The good news is you're the pilot.",
"Life has got all those twists and turns. You've got to hold on tight and off you go."
]

btn.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*quote.length);

    output.textContent =quote[random];
})
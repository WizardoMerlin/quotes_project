let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
'"Make the lie big. Make it simple. Keep saying it, and eventually people will believe it." - Adolf Hitler',
'"Death is the solution to all problems. No man, no problem." - Joseph Stalin',
'"You cannot run faster than a bullet." - Ide Amin',
'"There is no state with a democracy except Libya on the whole planet." - Muammar Gaddafi',
'"Politics is when you say you are going to do one thing while intending to do another. Then you do neither what you said, nor what you intended." - Saddam Hussein',
'​"Do not compare yourself to others. If you do so, you’re insulting yourself." - Adolf Hitler',
'"North Americans don’t understand that our country is not just Cuba; our country is also humanity." - Fidel Castro',
'"The only white man you can trust is a dead white man." ​-Robert Mugabe',
'"Ideas are more powerful than guns. We would not let our enemies have guns. Why should we let them have ideas?" - Joseph Stalin',
'"He alone, who owns the youth, gains the future." - Adolf Hitler',
'"I don’t care if they respect me, so long as they fear me". - Caligula',
'"Let us have a dagger between our teeth, a bomb in our hands, and an infinite scorn in our hearts." - Benito Mussolini',
];

btn.addEventListener('click', function(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;

})

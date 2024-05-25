// Math.random
var Quote = ['“Be yourself; everyone else is already taken.”' , 
'“So many books, so little time.”',
    '“You only live once, but if you do it right, once is enough.”'
    ,'“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”'
    ,'“If you tell the truth, you dont have to remember anything.”'
    ,'“A friend is someone who knows all about you and still loves you.”',
    '“To live is the rarest thing in the world. Most people exist, that is all.”',
    '“Always forgive your enemies; nothing annoys them so much.”',
    '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    '“We accept the love we think we deserve.”',
    '“Without music, life would be a mistake.”',
    '“It is better to be hated for what you are than to be loved for what you are not.”',
    '“find fulfilling work, fall in love, and chase the moon”',
    '“find fulfilling work”',
    '“Suffer not yet our eyes to hunger for your face.”',
    '“goblin grin,”',
    '“I never want this to end. This Kiss is pure fire.”',
    '“بقينا في الاندلس ما بقينا مع الله, واضعنا الاندلس لما اضعنا طريق الله”',
    '“Keep cool but care.”',
    '“Ah bon ? Je suis importante ?”',
    '“Money only has value because we believe it to.” ',
    '“She remembered everything, as if their entire history had been carved into her bones.”',]


 var lastrramdomNumber;
 var displayed = [];
function sayhello (){

    if(Quote.length == displayed.length){
        displayed=[];
    }
     do{
        var ramdomNumber = Math.floor(Math.random() * Quote.length );

     }while(lastrramdomNumber == ramdomNumber || displayed.includes(ramdomNumber))
     displayed.push(ramdomNumber)
    lastrramdomNumber = ramdomNumber;
        document.getElementById('Quote-display').innerHTML =Quote[ramdomNumber];
        console.log(ramdomNumber);
        typing(Quote[ramdomNumber],'Quote-display')

}

function typing(string,place){
    var typed = new Typed(`#${place}`, {
        strings: [string],
        typeSpeed: 1000,
        showCursor:false
      });
    
}



































// function shuffleArray(Quote) {
//     for (let i = Quote.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [Quote[i], Quote[j]] = [Quote[j], Quote[i]]; // Swap elements
    
//     document.getElementById('Quote-display').innerHTML =Quote[i];
//     console.log(Quote[i]);
//     }
//     return Quote;

//   }
  // function displayRandomQuote() {
  //   var shuffledQuotes = shuffleArray(Quote);
  //   var randomQuote = shuffledQuotes[Math.floor(Math.random() * shuffledQuotes.length )];
  //   document.getElementById('Quote-display').innerHTML = randomQuote;
  //   console.log(randomQuote);
  // }
  
  // displayRandomQuote()



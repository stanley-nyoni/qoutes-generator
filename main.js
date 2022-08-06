const Qoutes = [
    "When you have a dream, you've got to grab it and never let go.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "There is nothing impossible to they who will try.",
    "The bad news is time flies. The good news is you're the pilot.",
    "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You define your own life. Don't let other people write your script.",
    "You are never too old to set another goal or to dream a new dream.",
    "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
    "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",
    "Spread love everywhere you go.",
    "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    "You can be everything. You can be the infinite amount of things that people are.",
    "It is during our darkest moments that we must focus to see the light.",
    "Not having the best situation, but seeing the best in your situation is the key to happiness.",
    "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
    "All you need is the plan, the road map, and the courage to press on to your destination.",
    "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
    "Real change, enduring change, happens one step at a time.",
    "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
    "There's nothing more powerful than not giving a f—k.",
    "If you don't like the road you're walking, start paving another one!",
    "What you get by achieving your goals is not as important as what you become by achieving your goals."
];

let dayTimeUpdate = document.querySelector('.day-time');
let yourname = document.querySelector('.your-name');
let qoute = document.querySelector('.qoute');
let qouteBtn = document.querySelector('.new-qoute');


//Welcoming Text
if(new Date().getHours() <= 12 && new Date().getHours() >= 00){
    dayTimeUpdate.innerHTML = "Good Morning, ";
}else if(new Date().getHours()> 12 && new Date().getHours()< 18){
    dayTimeUpdate.innerHTML = "Good afternoon"
}else{
    dayTimeUpdate.innerHTML = "Good evening"
};

function GetQoute(){
    let randomQoute = Math.floor(Math.random()*Qoutes.length);
    qoute.innerHTML = Qoutes[randomQoute];
}

qouteBtn.addEventListener('click', GetQoute)
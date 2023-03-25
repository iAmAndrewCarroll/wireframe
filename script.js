// !!!!!!!!!!!JAVASCRIPT!!!!!!!!!!!!!

// Basic Commands
// alert();
// console.log()

// prompt()





// let <-- Yes
// const <-- Yes
// var <-- NO
// (nothing) <-- NO


// example of declaring a CHANGEABLE VARIABLE
// const myName = `iAmAndrewCarroll`
// document.write(myName);

// myName = `AndrewCarroll`;
// document.write(myName);

// DATA TYPES 
// strings --> TEXT --> Surrounded in quotes: `iAmAndrewCarroll`, `2`, `two`
// number --> 2, 42, 120
// boolean --> TRUE or FALSE

// let myFavColor = 'blue';
// let myOtherFavColor = 'white';

// let num;
// num = 42; 

// let thisNum = 24;

function getUsername(){
    let mydiv=document.getElementById("divine")
    let userName = prompt("What is your government name?"); 
    console.log(userName);
    mydiv.innerHTML = userName;
    if (userName == 'iAmAndrewCarroll'){
    mydiv.innerHTML="Hello my Savage Poet";
    } else if (userName === 'Justin'){
    mydiv.innerHTML=userName + ", you probably aren't being followed";
    } else if (userName == 'Kjell'){
    mydiv.innerHTML="All Hail kJ-E-L-L-O!!!";
    } else if (userName == 'Toni'){
    mydiv.innerHTML="You are so loved Sweet Sister!"
    } else if (userName == 'Kassie'){
    mydiv.innerHTML="You are doing such a great job!"
    } else if (userName == 'Mom'){
    mydiv.innerHTML="I love and miss you so much!"
    } else if (userName == 'Luann'){
    mydiv.innerHTML="If you are Andrew's Mom he wants you to know that he loves and misses you!!!!"
    } else if (userName == 'Oma'){
    mydiv.innerHTML="Andrew loves and misses you!!!!"
    } else if (userName == 'Carla'){
    mydiv.innerHTML="If you are Andrew's Oma he wants you to know that he loves and misses you!!!!"
    } else if (userName == 'Shirley'){
        mydiv.innerHTML="Shirley, I have very deep and meaningful feelings, respect, and adoration for you, Love.  I'm so proud of everything you have accomplished and the strength you exhibit in your life.  Thank you for your honesty and willingness to engage with me as we grow together in healthy ways.  You are so incredible, Shirley Love."
    } else if (userName == 'Carren'){
        mydiv.innerHTML="Hi Staci!  You are so awesome and make such an impact on people.  Your kindness will ring always and forever as ripples on the pond of life.  Thank you for showing me a different way. Love always dear friend, Andrew."
    } else {
    mydiv.innerHTML="They are definitely watching you...";
    // mydiv.innerHTML=userName;
    } 
} 
getUsername()

function getAffirmation(){
    let mydiv=document.getElementById("affirmation")
if (window.confirm("Did you know that you are doing amazing things?")) {
    mydiv.innerHTML=("Take a moment and breathe in that feeling of well-being.");
} else {
    mydiv.innerHTML=("You are. Give yourself a moment to appreciate all the hard work you do.");
}
}
getAffirmation()

function getCast(){
    let mydiv=document.getElementById("cast")
if (confirm("Close your eyes, take a deep breath into the belly, and set a deep intention for today.")) {
    mydiv.innerHTML=("Setting deep intentions is the foundation for engaging in word magic.");
} else {
    mydiv.innerHTML=("That's okay.  The teacher appears when the student is ready.");
}
}
getCast()

function getBless(){
    let answer = prompt("On a scale of 1 - 10 how blessed do you feel?")
        let mydiv = document.getElementById("bless")
while (answer < 7) {
    answer = prompt("I'm sure there is something you can give gratitude for right now...what can you do right now, in this moment, to increase your blessings?! Now how are you doing on that scale?")
} 
if (answer >= 7) {
    mydiv.innerHTML = ("Wow, that's amazing! You must practice gratitude!");    
}
}
getBless()

function getRate(){
    let rate = parseInt(prompt("Enter a number between 1 & 3 to receive your blessings?"));
        let mydiv = document.getElementById("rate")
        console.log(rate)
    if (rate > 3) {
        alert("Don't get greedy...I said a maximum of 3 blessings, chump.")
            getRate()
    }
    else {
        for (let i = 0; i < rate; i++) {
                // if (i === 3) {
                //     break This is commented out because it is made redundant by the if check on line 102
                // } 
            let li = document.createElement("li")
        li.innerHTML = "<img src='./pics/favicon.png' alt='yeah baby' width='5%'></img>";
        mydiv.appendChild(li);
        }
    }
  }
  getRate()


// conditional logic basic structure
// if (if this is true){execute the code in these brackets}
// if (){
//    execute the code in these brackets
// }

// if (userName == 'iAmAndrewCarroll'){
    // document.write('Hello my Savage Poet')
// } else if (userName == 'Justin'){
    // document.write("TA's are AMAZING");
// } else if (userName == 'Kjell'){
    // document.write("TA's are AMAZING");
// } else{
    // document.write("They are definitely tracking you...");
// }


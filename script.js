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
    mydiv.innerHTML=userName;
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
    }
    else {
    mydiv.innerHTML="They are definitely watching you...";
    // mydiv.innerHTML=userName;
    } 
} 
getUsername()

function getAffirmation(){
    let mydiv=document.getElementById("affirmation")
if (confirm("Did you know that you are doing amazing things?")) {
    mydiv.innerHTML=("Take a moment and breathe in that feeling of well-being.");
} else {
    mydiv.innerHTML=("You are. Give yourself a moment to appreciate all the hard work you do.");
}
}
getAffirmation()

function getCast(){
    let mydiv=document.getElementById("cast")
if (confirm("Close your eyes, take a deep breath into the belly, and set a deep intention for today.")) {
    mydiv.innerHTML=("This is the beginning skillset for engaging in word magic.");
} else {
    mydiv.innerHTML=("That's okay.  The teacher appears when the student is ready.");
}
}
getCast()

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


function greet() {

    let username = prompt("Howdy, what's your name weary traveller?");

    message = "Hiya " + username + "! 🤩";

    document.write(message);
    }

function answer() {

    let response = prompt("On a scale of 1 to 10, how excited are you to view this page?");

if (response <= 5) {
    message = "Ok, that's fair enough! 😊";
} else if (response >=6) {
    message = "Fab, that's nice to hear! 👍👍👍"
}

document.write(message);
}

function changebackgroundcolor() 

{
    document.body.style.backgroundColor = '#3A2E39';
    }

function getRevels() {

    let rating = prompt("And finally, how many bags of revels would you like (for your movie snack)? WARNING there's only 10 bags in stock!");

while (!(rating > 0 && rating <=5)) {
        rating = prompt("Greedy! That's too many!")
    }

for (let i = 0; i < rating; i++) {
    document.write("<img src='./Images/Revels.jpg'/>");
    }

}
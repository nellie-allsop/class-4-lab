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

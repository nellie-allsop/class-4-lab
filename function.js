function greet() {

    let username = prompt("Howdy, what's your name weary traveller?");

    message = "Hiya " + username + "! ";

    document.write(message);
    }

function answer() {

    let response = prompt("On a scale of 1 to 10, how excited are you to view this page?");

if (response <= 5) {
    message = "Ok, that's fair enough!";
} else if (response >=6) {
    message = "Fab, that's nice to hear!"
}

document.write(message);
}












    
// function response() {

//     let question = confirm("Do you wish to continue?");

//     let output = 'Ah!';

//     if (question == true) {
//         response = (output) + "I'm glad to hear that!";
//     } else {
//         response = "(output) + "Well you are visiting it anyway!"
//     }







// let question = confirm('Are you a human?')

// let output = 'whoo!'

// if (question === true) {
// 	console.log(output)
// } else {
//  console.log(output + "- wait! Something's not right')
// }










let response = prompt("On a scale of 1 to 10, how excited are you to view this page?");

if (response <= 5) {
    message = "Ok, that's fair enough!";
} else if (response >=6) {
    message = "Fab, that's nice to hear!"
}

document.write(message);












    // function askTime() {
    // let time = prompt("What hour is it? (0-23)");
    // let message;
    
    // if (time <= 11) {
    //   message = "Good morning";
    // } else if (time <= 17) {
    //   message = "Good afternoon";
    // } else if (time < 24) {
    //   message = "Good evening";
    // } else {
    //   message = "My friend, that is not a time!";
    // }
    
    // document.write(message); 
    // }
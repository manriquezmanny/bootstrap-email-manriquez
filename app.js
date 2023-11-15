// Getting an array of all div's with class of message-box. Will loop over them to give all an event listener.
var message_Boxes = document.getElementsByClassName("message-box");

// Getting divs for DOM manipulation.
var inbox = document.getElementById("inbox-mail");
var sent = document.getElementById("sent-mail");
var spam = document.getElementById("spam-mail");
var deleted = document.getElementById("deleted-mail");
var compose = document.getElementById("compose-mail");

// Creating an empty array of mailboxes.
mailboxes = [];

// Populating mailboxes array.
mailboxes.push(inbox);
mailboxes.push(sent);
mailboxes.push(spam);
mailboxes.push(deleted);
mailboxes.push(compose);

// Creating a toggle function for DOM manipulation.
function toggleMail(mailbox) {
    // Making sure all mailboxes are toggled off first.
    for (i = 0; i < mailboxes.length; i++){
        mailboxes[i].style.display = "none";
    }
    console.log("Toggled off all mailboxes.")
    // Toggling on only the mailbox that was passed into function.
    mailbox.style.display = "flex";
    console.log("Toggled on " + mailbox.id);
    // Slicing mailbox ID
    let current = mailbox.id.slice(0, -5);
    // Making first letter of current capitalized.
    current = current.charAt(0).toUpperCase() + current.slice(1);
    // Manipulating current-mail's innerHTML to show current mailbox.
    document.getElementById("current-mail").innerHTML = current;
}


// Looping over each message_box and giving each an event listener that toggles a child div when clicked.
for (i = 0; i < message_Boxes.length; i++) {
    message_Boxes[i].addEventListener("click", function(e) {
        if (this.children[1].style.display === "none"){
            this.children[1].style.display = "flex";
        } else {
            this.children[1].style.display = "none";
        }
    })
}
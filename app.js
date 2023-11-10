// Getting an array of all div's with class of message-expansion. Will loop over them to give all an event listener.
var message_Boxes = document.getElementsByClassName("message-box");

for (i = 0; i < message_Boxes.length; i++) {
    message_Boxes[i].addEventListener("click", function(event) {
        event.stopPropagation();
        if (this.children[1].style.display === "none"){
            this.children[1].style.display = "flex";
        } else {
            this.children[1].style.display = "none";
        }
        console.log("toggled");
    })
}
document.addEventListener("keydown", function(event) {
    event = event || window.Event;
    if (event.keyCode == 13) {
        var value = document.getElementById("insert").value
        
        insertParagraph(value);
        
        if (value == 1) {
            // About
        } else if (value == 2) {
            // Projects
        } else if (value == 3) {
            // Exit
        }
        
        document.getElementById("insert").value = ""
    }
})

function insertParagraph(text) {
    var element = document.createElement("p");
    element.innerHTML = text;
    document.getElementById("new").appendChild(element);
}
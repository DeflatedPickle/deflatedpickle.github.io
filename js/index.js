document.addEventListener("keydown", function(event) {
    event = event || window.Event;
    if (event.keyCode == 13) {
        value = document.getElementById("insert").value
        
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
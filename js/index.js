document.addEventListener("keydown", function(event) {
    event = event || window.Event;
    if (event.keyCode == 13) {
        value = document.getElementById("insert").value
    }
})
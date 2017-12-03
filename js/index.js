document.addEventListener("keydown", function(event) {
    event = event || window.Event;
    alert(event.keyCode);
})
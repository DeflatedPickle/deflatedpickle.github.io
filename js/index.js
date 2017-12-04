document.addEventListener("keydown", function(event) {
    event = event || window.Event;
    if (event.keyCode == 13) {
        var value = document.getElementById("insert").value;
        
        insertParagraph(value);
        
        if (value == 1) {
            // About
            insertParagraph("Retrieving about.");
        } else if (value == 2) {
            // Projects
            insertParagraph("Retrieving projects.");
            insertList(["pkinter", "quill"]);
        } else if (value == 3) {
            // Exit
            insertParagraph("Exiting the website.");
            window.close();
        } else {
            insertParagraph(value + " is not a valid command.");
        }
        
        document.getElementById("insert").value = "";
    }
})

function insertParagraph(text) {
    var element = document.createElement("p");
    element.innerHTML = text;
    document.getElementById("new").appendChild(element);
}

var list_count = 0

function insertList(list) {
    var list_element = document.createElement("ul");
    list_element.id = "list" + list_count;
    document.getElementById("new").appendChild(list_element);
    
    list.forEach(function(item, index, array) {
        var list_item = document.createElement("li");
        list_item.innerHTML = item;
        document.getElementById(list_element.id).appendChild(list_item);
    });
    
    list_count += 1;
}
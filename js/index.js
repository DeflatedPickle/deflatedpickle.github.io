var mode = "menu";
var projects = ["pkinter", "quill"];

function insertParagraph(text) {
    "use strict";
    var element = document.createElement("p");
    element.innerHTML = text;
    document.getElementById("new").appendChild(element);
}

var list_count = 0;

function insertList(list) {
    "use strict";
    var list_element = document.createElement("ul");
    list_element.id = "list" + list_count;
    document.getElementById("new").appendChild(list_element);
    
    list.forEach(function (item, index, array) {
        var list_item = document.createElement("li");
        list_item.innerHTML = "[" + (index + 1) + "] " + item;
        document.getElementById(list_element.id).appendChild(list_item);
    });
    
    list_count += 1;
}

document.addEventListener("keydown", function (event) {
    "use strict";
    event = event || window.Event;
    if (event.keyCode === 13) {
        var value = parseInt(document.getElementById("insert").value, 10);
        
        if (!isNaN(value)) {
            insertParagraph(value);

            if (mode === "menu") {
                if (value === 1) {
                    // About
                    insertParagraph("Retrieving about.");
                } else if (value === 2) {
                    // Projects
                    mode = "projects";
                    insertParagraph("Retrieving projects.");
                    insertList(projects);
                } else if (value === 3) {
                    // Exit
                    insertParagraph("Exiting the website.");
                    window.close();
                } else {
                    insertParagraph(value + " is not a valid command.");
                }
            } else if (mode === "projects") {
                
            }

            document.getElementById("insert").value = "";
        }
    }
});
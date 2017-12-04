var mode = "menu";
var projects = ["pkinter", "quill", "Back"];
var project_descriptions = ["A Python widget library for TkInter.", "A Python library to ease creation to text-based games with Tkinter"];

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

function menu() {
    "use strict";
    insertList(["About", "Projects", "Exit"]);
}

document.addEventListener("keydown", function (event) {
    "use strict";
    event = event || window.Event;
    if (event.keyCode === 13) {
        var value = parseInt(document.getElementById("insert").value, 10);
        
        if (!isNaN(value)) {
            insertParagraph(value);

            if (mode === "menu") {
                // Switch statement?
                if (value === 1) {
                    // About
                    // insertParagraph("Retrieving about.");
                    insertParagraph("You decide that you want to read about just who this DeflatedPickle person is, or at least, who they think they are.");
                    insertParagraph("A voice calls out to you, explaning that DeflatedPickle is a semi-experienced and hardly decent programmer, that specializes in Python, though, they have been branching out into more languages and frameworks.");
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
                if (value < projects.length) {
                    insertParagraph(project_descriptions[value - 1]);
                } else if (value === projects.length) {
                    mode = "menu";
                    menu();
                } else {
                    insertParagraph(value + " is not a valid command.");
                }
            }

            document.getElementById("insert").value = "";
        }
    }
    
    window.scrollTo(0, document.body.scrollHeight);
});
import {addTemplate, putFooter} from "./components/template.js";
import {addNavigation} from "./components/navigation.js";
import {home} from "./content/home.js";
import {bio} from "./content/bio.js";
import {projects} from "./content/projects.js";
import {blog} from "./content/blog.js";
import {abstraction} from "./content/blog/abstraction.js";
import {elementary} from "./content/blog/elementary.js";
import {boolean} from "./content/blog/boolean.js";
import {representing} from "./content/blog/representing.js";
import {decisions} from "./content/blog/decisions.js";
import {contact} from "./content/contact.js";
import {alu} from "./content/blog/alu.js";

let state = {
    page: "home",
    subpage: "none"
};

function render(state) {
    addTemplate();
    
    addNavigation(state);

    switch (state.page){
    case "home":
        home();
        break;

    case "bio":
        bio();
        break;

    case "projects":
        switch (state.subpage) {
        case "alu":
            alu();
            break;

        default:
            projects();
            break;
        }
        break;

    case "blog":
        switch (state.subpage) {
        case "abstraction":
            abstraction();
            break;

        case "elementary":
            elementary();
            break;

        case "boolean":
            boolean();
            break;

        case "representing":
            representing();
            break;

        case "decisions":
            decisions();
            break;

        default:
            blog();
            break;
        }
        break;

    case "contact":
        contact();
        break;
    }

    if (state.page != "home") {
        document.getElementById("link-home").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "home";
            state.subpage = "none";
            render(state);
        });
    }

    if (state.page != "bio") {
        document.getElementById("link-bio").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "bio";
            state.subpage = "none";
            render(state);
        });
    }

    if (state.page != "projects") {
        document.getElementById("link-projects").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "projects";
            state.subpage = "none";
            render(state);
        });
    }

    if (state.page == "projects" && state.subpage == "none") {
        document.getElementById("alu").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "projects";
            state.subpage = "alu";
            render(state);
        });
    }

    if (state.page != "blog") {
        document.getElementById("link-blog").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "blog";
            state.subpage = "none";
            render(state);
        });
    }

    if (state.page == "blog" && state.subpage == "none") {
        document.getElementById("abstraction").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "blog";
            state.subpage = "abstraction";
            render(state);
        });

        document.getElementById("elementary").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "blog";
            state.subpage = "elementary";
            render(state);
        });

        document.getElementById("boolean").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "blog";
            state.subpage = "boolean";
            render(state);
        });

        document.getElementById("representing").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "blog";
            state.subpage = "representing";
            render(state);
        });

        document.getElementById("decisions").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "blog";
            state.subpage = "decisions";
            render(state);
        });
    }
    
    document.getElementById("link-blog").addEventListener("click", function() {
        window.event.preventDefault();
        state.page = "blog";
        state.subpage = "none";
        render(state);
    });
    
    if (state.page != "contact") {
        document.getElementById("link-contact").addEventListener("click", function() {
            window.event.preventDefault();
            state.page = "contact";
            state.subpage = "none";
            render(state);
        });
    } 
    putFooter();   
};

render(state);
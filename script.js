
// SECTION A: STORE PROJECTS AS DATA

const projects = [
    {
        title: "Bio Page",
        description: "My first HTML and CSS page.",
        category: "HTML"
    },
    {
        title: "Responsive Nav",
        description: "A flexbox navigation bar that adapts.",
        category: "CSS"
    },
    {
        title: "Grid Gallery",
        description: "Cards laid out using CSS Grid.",
        category: "CSS"
    },
    {
        title: "Contact Form",
        description: "A form with validation.",
        category: "HTML"
    },
    {
        title: "JavaScript Project",
        description: "Learning JavaScript arrays, loops and form handling.",
        category: "HTML"
    }
];


// SECTION B: BUILD PROJECT CARDS WITH A LOOP

const grid = document.querySelector("#projectsGrid");

function displayProjects(category) {

    if (!grid) return;

    // Clear existing cards
    grid.innerHTML = "";

    // Filter projects
    const filteredProjects = projects.filter(function (project) {
        return category === "All" || project.category === category;
    });

    // Generate project cards
    filteredProjects.forEach(function (project) {

        const card = document.createElement("div");

        card.className = "project-card";

        card.innerHTML =
            "<h3>" + project.title + "</h3>" +
            "<p>" + project.description + "</p>" +
            "<p class='project-skills'>Category: " +
            project.category + "</p>";

        grid.appendChild(card);

    });
}

// Display all projects when the page loads
displayProjects("All");


// SECTION C: PROJECT FILTER BUTTONS

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category = button.dataset.filter;

        displayProjects(category);

        // Update active button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// SECTION D: TAKE CONTROL OF THE CONTACT FORM

const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

if (form && message) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();

        const text = document.querySelector("#message").value.trim();

        if (name === "" || text.length < 10) {

            message.textContent =
                "Please enter your name and a message of at least 10 characters.";

            return;
        }

        message.textContent =
            "Thanks, " + name + "! Your message was received.";

        form.reset();

    });

}


// SECTION E: MESSAGE CHARACTER COUNTER

const messageInput = document.querySelector("#message");
const charCount = document.querySelector("#charCount");

if (messageInput && charCount) {

    function updateCharacterCount() {

        const characters = messageInput.value.length;

        charCount.textContent = "Characters: " + characters;

    }

    // Update whenever the user types
    messageInput.addEventListener("input", updateCharacterCount);

    // Display the correct count when the page loads
    updateCharacterCount();

}


// SECTION F: DARK MODE TOGGLE

const themeToggle = document.querySelector("#themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const darkModeEnabled =
            document.body.classList.contains("dark-mode");

        if (darkModeEnabled) {

            themeToggle.textContent = "Light Mode";
            themeToggle.setAttribute("aria-pressed", "true");

        } else {

            themeToggle.textContent = "Dark Mode";
            themeToggle.setAttribute("aria-pressed", "false");

        }

    });

}

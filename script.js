document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dark Mode Toggle
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Dark Mode";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.bottom = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.backgroundColor = "#333";
    toggleBtn.style.color = "#fff";
    toggleBtn.style.border = "none";
    toggleBtn.style.cursor = "pointer";

    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Dark Mode Styles
    const darkModeStyles = document.createElement("style");
    darkModeStyles.textContent = `
        .dark-mode {
            background-color: #333;
            color: #f5f5f5;
        }

        .dark-mode header,
        .dark-mode footer {
            background-color: #222;
        }

        .dark-mode .project-card,
        .dark-mode form input,
        .dark-mode form textarea,
        .dark-mode form button {
            background-color: #444;
            color: #f5f5f5;
            border-color: #555;
        }
    `;

    document.head.appendChild(darkModeStyles);
});

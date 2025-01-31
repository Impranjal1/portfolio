// Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Change icon based on mode
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️";
    } else {
        darkModeToggle.textContent = "🌙";
    }
});

// Smooth Scroll Effect
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
            // Update Navbar (Optional, if you want to highlight social links)
        }
    });
});
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);
    const responseMessage = document.getElementById("formResponse");

    try {
        // Sending form data via AJAX (without opening a new tab)
        const response = await fetch("https://formsubmit.co/ajax/your-email@example.com", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.classList.add("success");
            responseMessage.classList.remove("hidden");
            form.reset();
        } else {
            throw new Error("Something went wrong.");
        }
    } catch (error) {
        responseMessage.textContent = "Error sending message. Please try again.";
        responseMessage.classList.add("error");
        responseMessage.classList.remove("hidden");
    }

    responseMessage.style.display = "block"; // Show message
    setTimeout(() => { responseMessage.style.display = "none"; }, 3000); // Hide after 3s
});

const text = [
    "> Initializing Portfolio...",
    "> Loading Reyhan Wijaya...",
    "> Preparing Experience...",
    "> Ready."
];

let line = 0;
let char = 0;
let terminal = document.getElementById("terminal-text");

function typeEffect() {

    if (line < text.length) {

        if (char < text[line].length) {
            terminal.innerHTML += text[line].charAt(char);
            char++;
            setTimeout(typeEffect, 40);
        } else {
            terminal.innerHTML += "<br>";
            line++;
            char = 0;
            setTimeout(typeEffect, 400);
        }

    } else {
        setTimeout(() => {
            document.getElementById("intro").style.display = "none";
        }, 800);
    }
}

typeEffect();
const words = [
    "I Build Websites",
    "I Build Systems",
    "I Build Experiences"
];

let wordIndex = 0;
let letterIndex = 0;
let typingElement = document.getElementById("typing-text");

function typingEffect() {

    if (letterIndex < words[wordIndex].length) {
        typingElement.innerHTML += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typingEffect, 80);
    } else {
        setTimeout(eraseEffect, 1200);
    }
}

function eraseEffect() {

    if (letterIndex > 0) {
        typingElement.innerHTML =
            words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        setTimeout(typingEffect, 300);
    }
}

typingEffect();
function toggleAI() {
    let chat = document.getElementById("aiChat");
    chat.style.display =
        chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();
    let body = document.getElementById("aiBody");

    body.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

    let reply = "Sorry, I don't understand yet.";

    if (message.includes("purpose") || message.includes("tujuan")) {
        reply = "This website was created to show Reyhan's real capabilities beyond expectations.";
    }
    else if (message.includes("skill")) {
        reply = "Reyhan specializes in HTML, CSS, JavaScript, and building real web applications.";
    }
    else if (message.includes("project")) {
        reply = "You can check Reyhan's projects below, including e-commerce systems and admin dashboards.";
    }

    body.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
    input.value = "";
    body.scrollTop = body.scrollHeight;
}
window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(el) {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
let counterStarted = false;

function startCounter() {

    const aboutSection = document.querySelector(".about");
    if (!aboutSection) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && !counterStarted) {

        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {

            const target = +counter.getAttribute("data-target");

            const duration = 2000;
            const steps = 60;
            const increment = target / steps;

            let current = 0;
            let count = 0;

            const animate = () => {
                count++;
                current += increment;

                if (count < steps) {
                    counter.innerText = Math.floor(current);
                    requestAnimationFrame(animate);
                } else {
                    counter.innerText = target;
                }
            };

            animate();
        });

        counterStarted = true;
    }
}

// jalan saat scroll
window.addEventListener("scroll", startCounter);

// jalan saat halaman pertama load
window.addEventListener("load", startCounter);
let skillStarted = false;

function startSkills() {

    const skillSection = document.querySelector(".skills");
    if (!skillSection) return;

    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && !skillStarted) {

        const skills = document.querySelectorAll(".skill-progress");

        skills.forEach(skill => {
            skill.style.width = skill.getAttribute("data-width");
        });

        skillStarted = true;
    }
}

window.addEventListener("scroll", startSkills);
window.addEventListener("load", startSkills);
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});
document.getElementById("contactForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    let phoneNumber = "6285123522907";

    let text =
`Assalammualaikum Admin, saya ingin menghubungi dari website portfolio.

Nama : ${name.value}
Email : ${email.value}

Pesan :
${message.value}`;

    let encodedText = encodeURIComponent(text);

    // tampilkan notifikasi
    let notif = document.getElementById("wa-notification");
    notif.classList.add("show");

    // buka whatsapp
    setTimeout(() => {
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedText}`,
            '_blank'
        );

        // auto clear form
        name.value = "";
        email.value = "";
        message.value = "";

        // sembunyikan notif
        notif.classList.remove("show");

    }, 800);
});

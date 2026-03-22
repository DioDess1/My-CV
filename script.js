/* отримання даних*/
const browserData = {
    browser: navigator.userAgent,
    os: navigator.platform,
    language: navigator.language
};
localStorage.setItem("browserInfo", JSON.stringify(browserData));

const savedData = JSON.parse(localStorage.getItem("browserInfo"));

const footer = document.getElementById("footer");

if (footer) {
    footer.innerHTML = `<div style="padding: 20px; border-top: 1px solid var(--rule); margin-top: 20px;">
        <p><strong>Системна інформація:</strong> ${savedData.os} | ${savedData.browser}</p>
    </div>`;
}

/* коментарі з сервера*/
fetch("https://jsonplaceholder.typicode.com/posts/25/comments")
    .then(response => response.json())
    .then(comments => {
        const container = document.getElementById("comments");

        if (container) {
            comments.forEach(comment => {
                const p = document.createElement("p");
                p.style.marginBottom = "15px";
                // Виправлено InnerHTML на innerHTML
                p.innerHTML = `<span style="color: var(--accent)">${comment.email}:</span> ${comment.body}`;
                container.appendChild(p);
            });
        }
    });

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
}

setTimeout(() => {
   const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    if (modal && overlay) {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
}, 60000);

const btn = document.getElementById("themeToggle");
if (btn) {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        console.log("Тему змінено!"); 
    });
}

const hour = new Date().getHours();

if (hour < 7 || hour >= 21) {
    document.body.classList.add("dark");
}

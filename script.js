const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
        action.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("action : ", action.parentElement);
            const url = action.parentElement.getAttribute("href");
            console.log("url : ", url);
            navigator.clipboard.writeText(url);
            alert("Link berhasil disalin!")
            document.getElementById("toast").innerHTML = `
            <div class="toast-container toast-gone">
             <p>✅ Link berhasil disalin!</p>
            `;

        setTimeout(() => {
            document
            .querySelector("#toast .toast-container")
            .classList.add("toast-gone");
        }, 300);
        })
});



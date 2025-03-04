document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search subject...");
    searchInput.style.position = "absolute";
    searchInput.style.top = "10px";
    searchInput.style.right = "10px";
    searchInput.style.padding = "5px";
    searchInput.style.border = "1px solid #ccc";
    searchInput.style.borderRadius = "5px";
    searchInput.style.backgroundColor = "#333";
    searchInput.style.color = "#fff";

    document.body.appendChild(searchInput);

    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll(".subjects table tr");

        rows.forEach((row, index) => {
            if (index === 0) return; // Skip header row
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(filter) ? "" : "none";
        });
    });
});

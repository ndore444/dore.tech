const filterInput = document.getElementById("filter");
const groups = document.querySelectorAll(".group");
const noMatches = document.getElementById("no-matches");

filterInput.addEventListener("input", () => {
    const term = filterInput.value.trim().toLowerCase();
    let total = 0;

    for (const group of groups)
    {
        let shown = 0;

        for (const row of group.querySelectorAll(".link"))
        {
            const match = row.textContent.toLocaleLowerCase().includes(term);
            row.hidden = !match;
            if (match) shown++;
        }

        group.hidden = shown === 0;
        total += shown;
    }

    noMatches.hidden = total > 0;
})
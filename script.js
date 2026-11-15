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

const themePicker = document.getElementById("theme");
const THEMES = ["python", "nord", "gruvbox", "tokyo", "dracula", "catppuccin"];

function applyTheme(name)
{
    document.documentElement.setAttribute("data-theme", name);
    themePicker.value = name;
    try
    {
        localStorage.setItem("theme", name)
    } catch (e) {}
}

themePicker.addEventListener("change", () => applyTheme(themePicker.value));

let savedTheme = null;
try
{
    savedTheme = localStorage.getItem("theme");
} catch (e) {}
themePicker.value = THEMES.includes(savedTheme) ? savedTheme : "python";
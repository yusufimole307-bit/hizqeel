const subject = document.getElementById("subject");
const level = document.getElementById("level");
const language = document.getElementById("language");

function updateSelection() {
document.getElementById("selection").textContent =
`${subject.value} • ${level.value} • ${language.value}`;
}

subject.addEventListener("change", updateSelection);
level.addEventListener("change", updateSelection);
language.addEventListener("change", updateSelection);

function askTutor() {
const question = document.getElementById("question").value.trim();
const response = document.getElementById("response");

```
if (!question) {
    response.textContent = "Please enter a question first.";
    return;
}

response.textContent =
    "🤖 HIZQEEL is preparing your answer...";
```

}

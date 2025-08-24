const executors = [
  { name: "Velocity", status: "Updated", note: "Recommended", type: "green" },
  { name: "Pulsar", status: "No download", note: "Recommended", type: "darkred" },
  { name: "Arctic", status: "Updated", note: "Recommended", type: "green" },
  { name: "Bunni", status: "Outdated info", note: "", type: "darkred" },
  { name: "AWP", status: "Scam", note: "", type: "red" },
  { name: "Swift", status: "Outdated info", note: "", type: "darkred" },
  { name: "Bypasser", status: "Web", note: "", type: "blue" },
  { name: "Ix63", status: "Outdated info", note: "", type: "darkred" },
  { name: "Valex", status: "Outdated info", note: "", type: "darkred" },
  { name: "Moon", status: "Outdated info", note: "", type: "darkred" },
  { name: "Solara", status: "Outdated info", note: "", type: "darkred" },
  { name: "VOLCANO", status: "Outdated info", note: "", type: "darkred" },
];

const grid = document.getElementById("executors-grid");

executors.forEach(exec => {
  const card = document.createElement("div");
  card.classList.add("executor-card", `executor-${exec.type}`);

  card.innerHTML = `
    <h3>${exec.name}</h3>
    <p>${exec.status}</p>
    ${exec.note ? `<span class="badge">⭐ ${exec.note}</span>` : ""}
  `;

  grid.appendChild(card);
});

// executors.js

const executors = [
  { name: "Velocity", status: "Updated", note: "Recommended", color: "green" },
  { name: "Pulsar", status: "No download", note: "Recommended", color: "maroon" },
  { name: "Arctic", status: "Updated", note: "Recommende", color: "green" },
  { name: "Bunni", status: "Outdated info", note: "", color: "maroon" },
  { name: "AWP", status: "Scam", note: "", color: "red" },
  { name: "Swift", status: "Outdated info", note: "", color: "maroon" },
  { name: "Bypasser", status: "Web", note: "", color: "navy" },
  { name: "Ix63", status: "Outdated info", note: "", color: "maroon" },
  { name: "Valex", status: "Outdated info", note: "", color: "maroon" },
  { name: "Moon", status: "Outdated info", note: "", color: "maroon" },
  { name: "Solara", status: "Outdated info", note: "", color: "maroon" },
  { name: "VOLCANO", status: "Outdated info", note: "", color: "maroon" }
];

const grid = document.getElementById("executorsGrid");

executors.forEach(executor => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.background = executor.color;

  card.innerHTML = `
    <h2>${executor.name}</h2>
    <p>${executor.status}</p>
    ${executor.note ? `<span class="badge">${executor.note}</span>` : ""}
  `;

  grid.appendChild(card);
});



const executors = [
  { name: "Velocity", status: "Updated", note: "Recommended", type: "green", url: "https://rcheatzhub.com/velocity" },
  { name: "Pulsar", status: "No download", note: "Recommended", type: "darkred", url: "https://rcheatzhub.com/pulsar" },
  { name: "Arctic", status: "Updated", note: "Recommended", type: "green", url: "https://rcheatzhub.com/arctic" },
  { name: "Bunni", status: "Outdated info", note: "", type: "darkred", url: "https://rcheatzhub.com/bunni" },
  { name: "AWP", status: "Scam", note: "", type: "red", url: "https://rcheatzhub.com/awp" },
  { name: "Swift", status: "Outdated info", note: "", type: "darkred", url: "https://rcheatzhub.com/swift" },
  { name: "Bypasser", status: "Web", note: "", type: "blue", url: "https://rcheatzhub.com/bypasser" },
  { name: "Ix63", status: "Outdated info", note: "", type: "darkred", url: "https://rcheatzhub.com/ix63" },
  { name: "Valex", status: "Outdated info", note: "", type: "darkred", url: "https://rcheatzhub.com/valex" },
  { name: "Moon", status: "Outdated info", note: "", type: "darkred", url: "https://rcheatzhub.com/moon" },
  { name: "Solara", status: "Outdated info", note: "", type: "darkred", url: "https://rcheatzhub.com/solara" },
  { name: "VOLCANO", status: "Outdated info", note: "", type: "darkred", url: "https://rcheatzhub.com/volcano" },
];

const grid = document.getElementById("executors-grid");

executors.forEach(exec => {
  const card = document.createElement("div");
  card.classList.add("executor-card", `executor-${exec.type}`);

  card.innerHTML = `
    <a href="${exec.url}">
      <h3>${exec.name}</h3>
      <p>${exec.status}</p>
      ${exec.note ? `<span class="badge">⭐ ${exec.note}</span>` : ""}
    </a>
  `;

  grid.appendChild(card);
});

const executors = [
  { name: "Velocity", link: "#", status: "updated", labels: ["Updated", "Recommended"] },
  { name: "Pulsar", link: "#", status: "outdated", labels: ["Outdated Info", "Recommended"] },
  { name: "Arctic", link: "#", status: "outdated", labels: ["Outdated Info", "Recommended"] },
  { name: "Bunni", link: "https://gitlab.com/senz3/bunni-download/-/raw/main/latestbunni.zip?ref_type=heads&inline=false", status: "outdated", labels: ["Outdated Info"] },
  { name: "Swift", link: "#", status: "outdated", labels: ["Outdated Info"] },
  { name: "Bypasser", link: "#", status: "web", labels: ["Web"] },
  { name: "Ix63", link: "#", status: "outdated", labels: ["Outdated Info"] },
  { name: "Valex", link: "#", status: "outdated", labels: ["Outdated Info"] },
  { name: "Moon", link: "#", status: "outdated", labels: ["Outdated Info"] },
  { name: "Solara", link: "#", status: "outdated", labels: ["Outdated Info"] },
  { name: "AWP", link: "#", status: "scam", labels: ["Scam"] },
  { name: "VOLCANO", link: "#", status: "outdated", labels: ["Outdated Info"] }
];

const grid = document.getElementById("executorsGrid");

executors.forEach(exec => {
  const card = document.createElement("a");
  card.className = `card ${exec.status}`;
  card.href = exec.link;
  card.target = "_blank";
  card.innerHTML = `
    <h2>${exec.name}</h2>
    ${exec.labels.map(l => `<span class="status ${exec.status}">${l}</span>`).join(" ")}
    ${exec.labels.includes("Recommended") ? `<div class="recommended">⭐ Recommended</div>` : ""}
  `;
  grid.appendChild(card);
});



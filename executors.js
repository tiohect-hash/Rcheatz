const executors = [
  { name: "Velocity", status: "Updated", note: "Recommended", type: "green", url: "https://rip.linkvertise.lol/stuff/velocity" },
  { name: "Pulsar", status: "No download", note: "Recommended", type: "darkred", url: "https://discord.com/invite/rdEHJBRfSx" },
  { name: "Arctic", status: "Updated", note: "Recommended", type: "green", url: "https://discord.com/invite/arctic-studios-1329873465897128058" },
  { name: "Bunni", status: "Outdated info", note: "", type: "darkred", url: "https://gitlab.com/senz3/bunni-download/-/raw/main/latestbunni.zip?ref_type=heads&inline=false" },
  { name: "AWP", status: "Scam", note: "", type: "red", url: "https://rcheatzhub.com/awp" },
  { name: "Swift", status: "Outdated info", note: "", type: "darkred", url: "https://getswift.vip" },
  { name: "Bypasser", status: "Web", note: "", type: "blue", url: "rip.linkvertise.lol/" },
  { name: "lx63", status: "Outdated info", note: "", type: "darkred", url: "lx63.xyz/" },
  { name: "Valex", status: "Outdated info", note: "", type: "darkred", url: "valex.io" },
  { name: "Moon", status: "Outdated info", note: "", type: "darkred", url: "https://getmoonexecuter.vercel.app" },
  { name: "Solara", status: "Outdated info", note: "", type: "darkred", url: "https://volcano.wtf" },
  { name: "VOLCANO", status: "Outdated info", note: "", type: "darkred", url: "https://volcano.wtf" },
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


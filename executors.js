const cheats = [
      { name:"Velocity", status:"Updated",       type:"updated",  recommended:true,  link:"https://rip.linkvertise.lol/stuff/velocity" },
      { name:"Pulsar",   status:"No download",   type:"outdated", recommended:true,  link:"https://discord.gg/rdEHJBRfSx" },
      { name:"Arctic",   status:"Updated",       type:"updated", recommended:true,  link:"https://discord.gg/arctic-studios-1329873465897128058" },
      { name:"Bunni",    status:"Outdated info", type:"outdated", recommended:false, link:"https://rcheatz.neocities.org" },
      { name:"Swift",    status:"Outdated info", type:"outdated", recommended:false, link:"#"},
      { name:"Bypasser", status:"Web",           type:"web",      recommended:false, link:"#"},
      { name:"lx63",     status:"Outdated info", type:"outdated", recommended:false, link:"https://lx63.xyz"},
      { name:"valex",    status:"Outdated info", type:"outdated", recommended:false, link:"#"},
      { name:"Moon",     status:"Outdated info", type:"outdated", recommended:false, link:"#"},
      { name:"Solara",   status:"Outdated info", type:"outdated", recommended:false, link:"#"},
      { name:"AWP",      status:"Scam",          type:"scam",     recommended:false, link:"#"},
      { name:"VOLCANO",  status:"Outdated info", type:"outdated", recommended:false, link:"#"}
    ];
    

    const grid = document.getElementById("cheatGrid");
    cheats.forEach(c => {
      const a = document.createElement("a");
      a.href = c.link || "#";
      a.target = "_blank";
      a.rel = "noopener";
      a.className = `cheat-btn ${c.type}`;
      a.innerHTML = `
        <div>${c.name}</div>
        <div class="status ${c.type}">${c.status}</div>
        ${c.recommended ? `<div class="recommended">Recommended</div>` : ""}
      `;
      grid.appendChild(a);
    });

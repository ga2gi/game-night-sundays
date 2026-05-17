<script>
  let selectedId = $state("joyce");

  const suspects = [
    {
      id: "joyce",
      name: "Joyce Naliaka",
      age: 26,
      role: "Naomi’s Best Friend / Flatmate",
      threat: "High",
      color: "#ff4d6d",
      nameColor: "#ff4d6d",
      motive:
        "Joyce was Naomi’s closest confidant. Evidence suggests emotional tension before death involving sensitive information.",
      alibi:
        "Left around 11:00 PM and claims she was at her sister’s place. Last call with Naomi at 12:20 AM.",
      evidence:
        "Final call log confirms Naomi contacted Joyce at 12:20 AM during death window.",
      notes:
        "Last known contact before death."
    },
    {
      id: "brian",
      name: "Brian Mwangi",
      age: 27,
      role: "Ex-Boyfriend",
      threat: "High",
      color: "#bd93f9",
      nameColor: "#bd93f9",
      motive:
        "Jealous ex-boyfriend with emotional instability after breakup.",
      alibi:
        "Left around 12:10 AM after argument, claims no return.",
      evidence:
        "CCTV shows exit at 12:00 AM + threatening draft message found.",
      notes:
        "Strong emotional + behavioural motive."
    },
    {
      id: "jayden",
      name: "Jayden Otieno",
      age: 28,
      role: "Neighbor / Close Associate",
      threat: "Moderate",
      color: "#f1fa8c",
      nameColor: "#f1fa8c",
      motive:
        "Close proximity created tension and suspicion in group dynamics.",
      alibi:
        "Claims he left with Sharon and stayed home.",
      evidence:
        "Blurry balcony photo places him with Naomi at 11:30 PM.",
      notes:
        "Last seen near victim before death window."
    },
    {
      id: "sharon",
      name: "Sharon Muli",
      age: 31,
      role: "Event Planner / Mutual Friend",
      threat: "High",
      color: "#50fa7b",
      nameColor: "#50fa7b",
      motive:
        "Potential conflict after Naomi discovered sensitive information.",
      alibi:
        "Claims she left early and was not present during incident.",
      evidence:
        "Victim was strangled using Sharon’s silk scarf.",
      notes:
        "Direct physical evidence links her to murder weapon."
    }
  ];

  let current = $derived(
    suspects.find((s) => s.id === selectedId)
  );
</script>

<div class="board-container">

  <!-- NAVIGATION -->
  <div class="top-navigation">
    <a href="/games/naomi-mwangi" class="nav-link">📄 Incident Report</a>
    <a href="/games/naomi-mwangi/suspects" class="nav-link active-link">🕵️ Suspects</a>
    <a href="/games/naomi-mwangi/evidence" class="nav-link">🧪 Evidence Locker</a>
    <a href="/games/naomi-mwangi/accuse" class="nav-link">⚖️ Accusation Chamber</a>
  </div>

  <div class="content-layout">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2>Suspect Files</h2>
        <p>Naomi Mwangi Case // Nairobi CID</p>
      </div>

      {#each suspects as s}
        <button
          class="suspect-tab"
          class:active={selectedId === s.id}
          on:click={() => (selectedId = s.id)}
        >
          <span class="threat-dot" style="background:{s.color}"></span>

          <div class="tab-info">
            <span class="tab-name" style="color:{s.nameColor}">
              {s.name}
            </span>
            <span class="tab-role">{s.role}</span>
          </div>
        </button>
      {/each}
    </aside>

    <!-- DOSSIER -->
    <main class="dossier-view">

      {#if current}
        <div class="dossier-content">

          <div class="dossier-header">

            <div class="profile-box" style="border-color:{current.color}">
              PHOTO REDACTED
            </div>

            <div>
              <h1 style="color:{current.nameColor}">
                {current.name} ({current.age})
              </h1>

              <p class="role">{current.role}</p>

              <div class="threat" style="border-color:{current.color}; background:{current.color}22">
                Threat Level: <strong>{current.threat}</strong>
              </div>
            </div>

          </div>

          <div class="grid">

            <section class="block">
              <h3>BACKGROUND</h3>
              <p>{current.motive}</p>
            </section>

            <section class="block">
              <h3>ALIBI</h3>
              <p class="quote">"{current.alibi}"</p>
            </section>

            <section class="block full">
              <h3>FORENSIC EVIDENCE</h3>
              <div class="evidence-box">
                {current.evidence}
              </div>
            </section>

            <section class="block full notes">
              <h3>INVESTIGATOR NOTES</h3>
              <p>{current.notes}</p>
            </section>

          </div>

        </div>
      {/if}

    </main>
  </div>
</div>

<style>
.board-container {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1a1a1a, #0a0a0a);
  color: #e6e6e6;
  font-family: "Courier New", monospace;
}

/* NAV */
.top-navigation {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
  background: #151515;
}

.nav-link {
  text-decoration: none;
  color: #999;
  padding: 10px 14px;
  border: 1px solid #333;
  background: #111;
  font-size: 0.85rem;
}

.nav-link:hover {
  border-color: #b02a2a;
  color: white;
}

.active-link {
  border-color: #b02a2a;
  color: white;
}

/* LAYOUT */
.content-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
}

/* SIDEBAR */
.sidebar {
  background: #151515;
  border-right: 1px solid #222;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #222;
}

.suspect-tab {
  width: 100%;
  display: flex;
  gap: 12px;
  padding: 14px 20px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #222;
  text-align: left;
  cursor: pointer;
}

.suspect-tab:hover {
  background: #222;
}

.suspect-tab.active {
  background: #1f1f1f;
  border-left: 4px solid #b02a2a;
}

.tab-name {
  font-weight: bold;
  font-size: 1rem;
}

.tab-role {
  font-size: 0.7rem;
  color: #777;
}

/* DOSSIER */
.dossier-view {
  padding: 50px;
}

.dossier-header {
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
}

.profile-box {
  width: 120px;
  height: 150px;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 0.6rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.block h3 {
  color: #b02a2a;
  border-bottom: 1px solid #333;
}

.full {
  grid-column: span 2;
}

.quote {
  font-style: italic;
  color: #ccc;
}

.evidence-box {
  background: #111;
  padding: 15px;
  border: 1px dashed #333;
}

.notes {
  color: #aaa;
}

/* MOBILE */
@media (max-width: 900px) {
  .content-layout {
    grid-template-columns: 1fr;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .top-navigation {
    overflow-x: auto;
    justify-content: flex-start;
  }
}
</style>
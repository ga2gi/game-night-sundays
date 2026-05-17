<script>
  let selectedId = $state("michael");

  const suspects = [
    {
      id: "michael",
      name: "Michael Korir",
      age: 44,
      role: "Former Spouse / Retired Marathoner",
      threat: "High",
      motive: "Divorce finalized two years ago. Legal documents show Susan revised her her will shortly before her death. Multiple witnesses describe continued tension between them.",
      alibi: "States he left home at 5:50 a.m. for coffee and returned at approximately 7:00 a.m.",
      evidence: "Garage footage confirms departure at 5:49 a.m. in a black Mercedes E-Class. Coffee receipt timestamped 6:11 a.m. Phone inactive between 5:46–7:03 a.m. Glove marked 'M.K.' found at the scene. Victim’s headlamp recovered 0.4 miles from his residence.",
      notes: "Claims glove was lost months earlier at a charity event. Records confirm it entered lost-and-found but later disappeared. Forensics show cleaning solvent on the glove not typical of household use. Timeline proximity cannot be ruled out.",
      color: "#ff5555"
    },
    {
      id: "jan",
      name: "Jan Snaw",
      age: 52,
      role: "Diplomat / Foreign Mission",
      threat: "Critical",
      motive: "Maintained undisclosed personal relationship with the victim. Internal communications suggest growing tension. Victim had recently disclosed that someone was following her and she asked whether diplomatic vehicles could be traced through city cameras.",
      alibi: "Claims he remained inside the diplomatic mission from 5:30 a.m. onward.",
      evidence: "Traffic camera captured diplomatic Mercedes E-Class entering park access road at 6:09 a.m. Vehicle ignition logged at 5:57 a.m. Tire impressions match diplomatic fleet.",
      notes: "Garage CCTV was disabled between 5:50–6:50 a.m. via remote access from a public library. Subject’s phone never left mission range. Diplomatic pouch reported missing that morning. No visual confirmation places him outside.",
      color: "#bd93f9"
    },
    {
      id: "jane",
      name: "Jane Toto",
      age: 36,
      role: "Business Partner",
      threat: "Moderate",
      motive: "Financial records indicate discrepancies in company accounts. A legal meeting had been scheduled within the week. Internal communications show rising conflict.",
      alibi: "States she remained at home overnight. Entry logs confirm access at 10:02 p.m.",
      evidence: "No internal CCTV confirms she stayed inside. Witness saw a woman resembling her near the park at ~6:20 a.m. Subject searched luxury watch resellers and private resale brokers. Purchased surgical tools and latex gloves two weeks prior.",
      notes: "Claims purchases were for a corporate wellness demonstration(The event was hosted at a venue supplied by the City Botanical Conservatory). Reports not owning a car and usually cycles. Timeline movement remains plausible but unverified.",
      color: "#f1fa8c"
    },
    {
      id: "njoroge",
      name: "Njoroge Njoroge",
      age: 38,
      role: "Independent Podcaster / Researcher",
      threat: "High",
      motive: "Focused on historic 'Gardenia' cases. Recently documented victim routines. Was recently researching Susan for an episode involving elite atheletes and victim profiling and was to meet for an interview. Notes suggest interest in pattern recurrence.",
      alibi: "Checked into hotel at 2:00 a.m. Seen leaving for breakfast at 6:32 a.m. Hotel is ~5 minutes from park.",
      evidence: "Notebook contains victim route and phrase 'No encore for the runner'—same as crime scene note (not public). Phone ping near park at 6:12 a.m. Boot size matches print at scene.",
      notes: "Denies writing note. Claims duplication of his material. Previously interviewed Zamzam Hamisi at her home. Demonstrates detailed knowledge of historical case patterns.",
      color: "#50fa7b"
    },
    {
      id: "zamzam",
      name: "Zamzam Hamisi",
      age: 67,
      role: "Retired Detective / Cold Case Unit",
      threat: "Low",
      motive: "Worked on original Gardenia cases. Retains knowledge of unresolved details.Regularly donated white gardenias from her home garden to the City Botanical Conservatory and flowers from her garden were commonly used in civic and corporate events.",
      alibi: "No formal timeline provided. States she remained home due to health.",
      evidence: "Previously consulted informally but never met victim.",
      notes: "Described incision as 'not quite the same'. She voluntarily suggested re-checking Michael’s timeline and initially appeared helpful in reviewing similarities with original murders, but declined formal involvement due to retirement and health concerns. Prior contact with Njoroge. No confirmed meeting with victim.",
      color: "#8be9fd"
    }
  ];

  let currentSuspect = $derived(suspects.find(s => s.id === selectedId));
</script>

<div class="board-container">

  <!-- TOP CASE NAVIGATION -->
  <div class="top-navigation">
    <a href="/games/gardenia-slayings" class="nav-link">📄 Incident Report</a>
    <a href="/games/gardenia-slayings/evidence" class="nav-link">🧪 Evidence Locker</a>
    <a href="/games/gardenia-slayings/accuse" class="nav-link active-link">⚖️ Accusation Chamber</a>
  </div>

  <!-- MAIN LAYOUT -->
  <div class="content-layout">

    <!-- SUSPECT SIDEBAR -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>Suspect Files</h2>
        <p>Division: Major Crimes</p>
      </div>

      {#each suspects as suspect}
        <button 
          class="suspect-tab" 
          class:active={selectedId === suspect.id}
          onclick={() => selectedId = suspect.id}
        >
          <span class="threat-dot" style="background: {suspect.color}"></span>
          <div class="tab-info">
            <span class="tab-name">{suspect.name}</span>
            <span class="tab-role">{suspect.role}</span>
          </div>
        </button>
      {/each}
    </div>

    <!-- DOSSIER VIEW -->
    <main class="dossier-view">
      {#if currentSuspect}
        <div class="dossier-content">

          <div class="dossier-header">
            <div class="profile-placeholder" style="border-color: {currentSuspect.color}">
              <span class="photo-label">PHOTO MISSING</span>
            </div>

            <div class="main-info">
              <h1>{currentSuspect.name} ({currentSuspect.age})</h1>
              <p class="role-tag">{currentSuspect.role}</p>

              <div class="threat-level" style="background: {currentSuspect.color}22; border: 1px solid {currentSuspect.color}">
                Threat Level: <strong>{currentSuspect.threat}</strong>
              </div>
            </div>
          </div>

          <div class="dossier-grid">
            <section class="info-block">
              <h3>Background & Context</h3>
              <p>{currentSuspect.motive}</p>
            </section>

            <section class="info-block">
              <h3>Statement / Timeline</h3>
              <p class="alibi-text">"{currentSuspect.alibi}"</p>
            </section>

            <section class="info-block full-width">
              <h3>Observed Evidence</h3>
              <div class="evidence-box">
                {currentSuspect.evidence}
              </div>
            </section>

            <section class="info-block full-width notes">
              <h3>Investigator Notes</h3>
              <p>{currentSuspect.notes}</p>
            </section>
          </div>

        </div>
      {/if}
    </main>

  </div>
</div>

<style>
  :root {
    --bg: #1a1a1a;
    --sidebar-bg: #252525;
    --text: #e0e0e0;
    --accent: #b02a2a;
    --card-bg: #2d2d2d;
  }

  /* TOP NAV */
  .top-navigation {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    border-bottom: 1px solid #333;
    background: #151515;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .nav-link {
    text-decoration: none;
    color: #ccc;
    padding: 10px 14px;
    border: 1px solid #333;
    background: #1f1f1f;
    font-size: 0.85rem;
    transition: 0.2s;
  }

  .nav-link:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .active-link {
    border-color: var(--accent);
    color: #fff;
  }

  /* LAYOUT */
  .content-layout {
    display: grid;
    grid-template-columns: 340px 1fr;
    height: calc(100vh - 70px);
    background: var(--bg);
    color: var(--text);
    font-family: 'Courier New', monospace;
  }

  /* SIDEBAR */
  .sidebar {
    background: var(--sidebar-bg);
    border-right: 2px solid #333;
    overflow-y: auto;
    padding: 20px 0;
  }

  .sidebar-header {
    padding: 0 20px 20px;
    border-bottom: 1px solid #333;
    margin-bottom: 20px;
  }

  .sidebar-header h2 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--accent);
  }

  .sidebar-header p {
    margin: 5px 0 0;
    font-size: 0.75rem;
    color: #777;
  }

  .suspect-tab {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #333;
    color: #999;
    cursor: pointer;
    transition: 0.2s;
  }

  .suspect-tab:hover {
    background: #333;
  }

  .suspect-tab.active {
    background: var(--card-bg);
    color: #fff;
    border-left: 4px solid var(--accent);
  }

  .threat-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .tab-info {
    display: flex;
    flex-direction: column;
  }

  .tab-name { font-weight: bold; }
  .tab-role { font-size: 0.7rem; color: #777; }

  /* DOSSIER */
  .dossier-view {
    padding: 60px;
    overflow-y: auto;
    background: radial-gradient(circle at top right, #252525, #1a1a1a);
  }

  .dossier-content {
    max-width: 800px;
    margin: auto;
  }

  .dossier-header {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
  }

  .profile-placeholder {
    width: 120px;
    height: 150px;
    background: #111;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .photo-label { font-size: 0.6rem; color: #444; }

  h1 { margin: 0; font-size: 2rem; }

  .role-tag { color: #aaa; font-style: italic; }

  .threat-level {
    padding: 6px 12px;
    font-size: 0.8rem;
    border-radius: 4px;
    margin-top: 10px;
    display: inline-block;
  }

  .dossier-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .info-block h3 {
    font-size: 0.8rem;
    color: var(--accent);
    border-bottom: 1px solid #444;
    padding-bottom: 5px;
  }

  .full-width { grid-column: span 2; }

  .alibi-text {
    font-style: italic;
    background: rgba(255,255,255,0.05);
    padding: 10px;
    border-left: 3px solid #666;
  }

  .evidence-box {
    background: #111;
    padding: 20px;
    border: 1px dashed #555;
    color: #bbb;
  }

  .notes {
    color: #888;
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    .content-layout {
      grid-template-columns: 1fr;
      height: auto;
    }

    .dossier-grid {
      grid-template-columns: 1fr;
    }

    .full-width { grid-column: span 1; }

    .top-navigation {
      flex-wrap: wrap;
    }
  }
</style>
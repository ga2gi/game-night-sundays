<script>
  let selectedId = $state("janet");

  const suspects = [
    {
      id: "janet",
      name: "Janet Otieno",
      age: 34,
      role: "Accountant / Regular Customer",
      threat: "Moderate",
      motive:
        "Regular customer at Café Umoja. Often met David Mwangi during lunch breaks and was present inside the café on the night of the incident.",
      alibi:
        "“I came in for my usual coffee and mandazi. David seemed distracted, but I didn't think much of it. When the lights went out, I stayed at my table. I didn't hear anything unusual.”",
      evidence:
        "CCTV backup footage recorded at 8:02 PM shows Janet walking toward the service counter moments before the blackout occurred.",
      notes:
        "An argument between Janet and David was reportedly overheard earlier in the evening at approximately 8:00 PM.",
      color: "#ff5555"
    },

    {
      id: "brian",
      name: "Brian Kamau",
      age: 27,
      role: "University Student / Former Employee",
      threat: "High",
      motive:
        "Former Café Umoja employee who was fired by David Mwangi the previous month after workplace disagreements.",
      alibi:
        "“I only came to grab a quick coffee before heading home. I know people think I held a grudge against David, but I swear I just wanted a cappuccino. I didn't even go near the counter.”",
      evidence:
        "A café receipt recovered from the scene shows a purchase made using Brian Kamau’s bank card at 8:05 PM. The transaction included a cappuccino and sandwich.",
      notes:
        "The receipt timestamp appears inconsistent with Brian’s statement about leaving the café earlier that evening.",
      color: "#bd93f9"
    },

    {
      id: "esther",
      name: "Esther Njeri",
      age: 29,
      role: "Social Media Influencer",
      threat: "Moderate",
      motive:
        "Recently promoted Café Umoja on social media. Witnesses reported a dispute between Esther and David regarding unpaid marketing fees.",
      alibi:
        "“David owed me money, yes, but I wouldn't kill him over it! I was busy recording an Instagram Story when the power cut out. Check my phone if you don't believe me.”",
      evidence:
        "A handwritten note recovered near the counter read: “David — If you don't pay me back by tonight, you'll regret it. This is your last warning. — E”",
      notes:
        "A local newspaper article also referenced a recent public disagreement between Esther and David over unpaid promotional work.",
      color: "#f1fa8c"
    },

    {
      id: "james",
      name: "James Mwangi",
      age: 45,
      role: "Property Owner / Local Politician",
      threat: "High",
      motive:
        "Owned the building where Café Umoja operated. David Mwangi was reportedly behind on rent payments.",
      alibi:
        "“I stopped by to remind David about his overdue rent. We argued briefly, but I left to make a phone call outside when the lights went out. When I returned, he was already dead.”",
      evidence:
        "Recovered phone messages between James and David show discussion about overdue payments shortly before the incident.",
      notes:
        "Message records include: “No more excuses. Tonight is the deadline.” sent by James at 7:56 PM.",
      color: "#50fa7b"
    }
  ];

  let current = $derived(
    suspects.find((s) => s.id === selectedId)
  );
</script>

<div class="board-container">

  <!-- TOP NAVIGATION -->
  <div class="top-navigation">
    <a href="/games/coffee-house-murder" class="nav-link">
      📄 Incident Report
    </a>

    <a href="/games/coffee-house-murder/evidence" class="nav-link">
      🧪 Evidence Locker
    </a>

    <a
      href="/games/coffee-house-murder/suspects"
      class="nav-link active-link"
    >
      🕵️ Suspects
    </a>

    <a href="/games/coffee-house-murder/accuse" class="nav-link">
      ⚖️ Accusation Chamber
    </a>
  </div>

  <div class="content-layout">

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-header">
        <h2>Suspect Files</h2>
        <p>Café Umoja Incident // Nairobi CID</p>
      </div>

      {#each suspects as s}
        <button
          class="suspect-tab"
          class:active={selectedId === s.id}
          on:click={() => (selectedId = s.id)}
        >
          <span
            class="threat-dot"
            style="background:{s.color}"
          ></span>

          <div class="tab-info">
            <span class="tab-name">{s.name}</span>

            <span class="tab-role">
              {s.role}
            </span>
          </div>
        </button>
      {/each}

    </aside>

    <!-- MAIN DOSSIER -->
    <main class="dossier-view">

      {#if current}
        <div class="dossier-content">

          <!-- HEADER -->
          <div class="dossier-header">

            <div
              class="profile-box"
              style="border-color:{current.color}"
            >
              <span>PHOTO REDACTED</span>
            </div>

            <div>
              <h1>
                {current.name} ({current.age})
              </h1>

              <p class="role">
                {current.role}
              </p>

              <div
                class="threat"
                style="
                  border-color:{current.color};
                  background:{current.color}22
                "
              >
                Threat Level:
                <strong>{current.threat}</strong>
              </div>
            </div>

          </div>

          <!-- GRID -->
          <div class="grid">

            <section class="block">
              <h3>BACKGROUND</h3>
              <p>{current.motive}</p>
            </section>

            <section class="block">
              <h3>STATEMENT</h3>

              <p class="quote">
                {current.alibi}
              </p>
            </section>

            <section class="block full">
              <h3>RELATED EVIDENCE</h3>

              <div class="evidence-box">
                {current.evidence}
              </div>
            </section>

            <section class="block full notes">
              <h3>CASE NOTES</h3>

              <p>{current.notes}</p>
            </section>

          </div>

        </div>
      {/if}

    </main>
  </div>
</div>

<style>
  :root {
    --bg: #0a0a0a;
    --panel: #151515;
    --panel2: #1f1f1f;
    --text: #e6e6e6;
    --muted: #999;
    --accent: #b02a2a;
  }

  .board-container {
    min-height: 100vh;
    background:
      radial-gradient(circle at top, #1a1a1a, #0a0a0a);
    color: var(--text);
    font-family: 'Courier New', monospace;
  }

  /* NAV */

  .top-navigation {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    background: var(--panel);
    border-bottom: 1px solid #222;
    flex-wrap: wrap;
  }

  .nav-link {
    text-decoration: none;
    color: var(--muted);
    padding: 10px 14px;
    border: 1px solid #333;
    background: #111;
    font-size: 0.85rem;
    transition: 0.2s;
  }

  .nav-link:hover {
    border-color: var(--accent);
    color: white;
  }

  .active-link {
    border-color: var(--accent);
    color: white;
  }

  /* LAYOUT */

  .content-layout {
    display: grid;
    grid-template-columns: 320px 1fr;
    min-height: calc(100vh - 70px);
  }

  /* SIDEBAR */

  .sidebar {
    background: var(--panel);
    border-right: 1px solid #222;
    overflow-y: auto;
  }

  .sidebar-header {
    padding: 20px;
    border-bottom: 1px solid #222;
  }

  .sidebar-header h2 {
    margin: 0;
    color: var(--accent);
  }

  .sidebar-header p {
    font-size: 0.75rem;
    color: #777;
  }

  .suspect-tab {
    width: 100%;
    display: flex;
    gap: 12px;
    padding: 14px 20px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #222;
    color: #aaa;
    cursor: pointer;
    text-align: left;
    transition: 0.2s;
  }

  .suspect-tab:hover {
    background: #222;
  }

  .suspect-tab.active {
    background: var(--panel2);
    border-left: 4px solid var(--accent);
    color: white;
  }

  .threat-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 5px;
    flex-shrink: 0;
  }

  .tab-info {
    display: flex;
    flex-direction: column;
  }

  .tab-name {
    font-weight: bold;
  }

  .tab-role {
    font-size: 0.7rem;
    color: #777;
    margin-top: 3px;
    line-height: 1.4;
  }

  /* DOSSIER */

  .dossier-view {
    padding: 50px;
    overflow-y: auto;
  }

  .dossier-content {
    max-width: 900px;
    margin: auto;
  }

  .dossier-header {
    display: flex;
    gap: 25px;
    margin-bottom: 40px;
    align-items: flex-start;
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
    background: #111;
    flex-shrink: 0;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  .role {
    color: #aaa;
    margin-top: 8px;
  }

  .threat {
    margin-top: 14px;
    padding: 6px 10px;
    display: inline-block;
    font-size: 0.8rem;
    border: 1px solid;
  }

  /* GRID */

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  .block {
    background: #111;
    border: 1px solid #222;
    padding: 20px;
  }

  .block h3 {
    color: var(--accent);
    border-bottom: 1px solid #333;
    padding-bottom: 8px;
    margin-top: 0;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }

  .block p {
    line-height: 1.7;
    color: #ccc;
  }

  .full {
    grid-column: span 2;
  }

  .quote {
    font-style: italic;
    color: #ddd;
  }

  .evidence-box {
    background: #0c0c0c;
    padding: 15px;
    border: 1px dashed #444;
    line-height: 1.7;
  }

  .notes {
    color: #aaa;
    font-size: 0.95rem;
  }

  /* MOBILE */

  @media (max-width: 900px) {

    .content-layout {
      grid-template-columns: 1fr;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    .full {
      grid-column: span 1;
    }

    .dossier-header {
      flex-direction: column;
    }

    .dossier-view {
      padding: 30px 20px;
    }
  }
</style>
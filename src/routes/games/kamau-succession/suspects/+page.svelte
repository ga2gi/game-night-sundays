<script>
  let selectedId = $state("victor");

  const suspects = [
    {
      id: "victor",
      name: "Victor Kamau",
      age: 40,
      role: "CEO of Kamau Estates / Eldest Son",
      threat: "Extreme",
      motive:
        "Edward Kamau intended to remove Victor from every major leadership position after uncovering alleged merger fraud inside Kamau Estates. Under the old succession structure, Victor still inherited the controlling share if Edward died before the amended will was formally executed.",
      alibi:
        "“It’s insane to suggest I murdered my father. Yes, we argued. Yes, he planned to announce the succession tonight. But the poison was in my own glass. Father was only supposed to take a ceremonial sip like always — not drain the entire dawa.”",
      evidence:
        "The poisoned dawa glass originally belonged to Victor and remained at his original place setting after the seating change. Investigators also discovered Victor was missing one gold Kamau crest cufflink from the pair he wore that evening.",
      notes:
        "Victor always places his drink to the left side of his plate. During dinner confusion caused by Brian’s prank, Victor moved to the ancestral seat while his original dawa remained untouched at the table. Several relatives, however, owned nearly identical ceremonial cufflinks.",
      color: "#ff5555"
    },

    {
      id: "grace",
      name: "Grace Kamau",
      age: 62,
      role: "Family Matriarch / Wife",
      threat: "Moderate",
      motive:
        "Grace recently discovered Edward intended to secretly transfer ownership of the Karen family estate to an illegitimate child, threatening her future security, inheritance, and place within the dynasty.",
      alibi:
        "“He was difficult, but he was still my husband. I noticed the honey in Victor’s dawa looked unusually thick — almost medicinal — but I assumed the cook had made it too sweet. I only want justice for Edward.”",
      evidence:
        "A syrup jar containing thick honey-like liquid was recovered from Grace’s handbag. Laboratory testing confirmed the substance was harmless valerian-root sedative often added to Edward’s tea.",
      notes:
        "Grace possesses a commemorative pair of Kamau crest cufflinks gifted during her thirty-fifth wedding anniversary. Her observation about the unusually syrupy honey later became important to investigators.",
      color: "#f1c27d"
    },

    {
      id: "david",
      name: "David Kamau",
      age: 37,
      role: "CFO of Kamau Estates / Second Son",
      threat: "High",
      motive:
        "Edward’s draft email revealed David was about to become sole successor to Kamau Estates. Detectives questioned whether David feared Edward might still reverse the decision after privately confronting Victor later that night.",
      alibi:
        "“I had absolutely nothing to gain from killing him. Father was preparing to hand me the company. The poison was in Victor’s drink, not mine. My scotch was clean. Forensics can confirm that.”",
      evidence:
        "David’s left sleeve was missing its gold Kamau crest cufflink. The remaining cufflink on his right sleeve matched the design of the single cufflink discovered near Victor’s original chair.",
      notes:
        "David was also the family member who located the empty vial in the kitchen bin and alerted investigators. Chloe later stated David appeared visibly shaken and pale immediately after Edward collapsed.",
      color: "#50fa7b"
    },

    {
      id: "lisa",
      name: "Lisa Kamau",
      age: 34,
      role: "Marketing Director / Daughter",
      threat: "High",
      motive:
        "Lisa deeply resented the patriarchal succession culture within the Kamau dynasty. She had also prepared a damaging press leak exposing labour abuses at Kamau Estates scheduled for release that same night.",
      alibi:
        "“The patriarchy poisoned itself. I’m not sorry the system cracked apart, but I didn’t kill my father. I passed the kitchen before dinner and saw someone adding something from a tiny bottle into a glass. I only noticed a gold cufflink catching the light.”",
      evidence:
        "Lisa’s browser history contained a search from two days earlier reading: “Can monkshood be masked by honey?” She later claimed the search was research for a novel she was writing.",
      notes:
        "Lisa owns ceremonial Kamau crest cufflinks previously used during company branding campaigns and fashion shoots. Her eyewitness account regarding the mystery figure in the kitchen remains one of the case’s most significant statements.",
      color: "#8be9fd"
    },

    {
      id: "brian",
      name: "Brian Kamau",
      age: 29,
      role: "Artist / Younger Son",
      threat: "Moderate",
      motive:
        "Brian owed nearly eight million shillings to dangerous loan sharks and reportedly begged Edward for financial assistance hours before dinner. Edward refused him publicly.",
      alibi:
        "“I only switched seats as a joke. Victor completely lost his mind over it. During the blessing I was drinking my Tusker and holding Chloe’s hand under the table. My hands were covered in ochre paint — I never touched the dawa.”",
      evidence:
        "Detectives recovered a Gikomba herbalist receipt for mũthaiga root dated four days before the murder. Brian claimed it was for harmless medicinal paste later found in his room.",
      notes:
        "Brian’s prank unintentionally changed the seating arrangement moments before Edward performed the blessing ritual. Older Kamau crest cufflinks were also recovered among Brian’s belongings despite his claims that he never wore them.",
      color: "#bd93f9"
    },

    {
      id: "chloe",
      name: "Chloe Kamau",
      age: 26,
      role: "Law Student / Youngest Daughter",
      threat: "Moderate",
      motive:
        "Edward recently discovered Chloe’s secret relationship with the son of the Kamau family’s greatest business rival. He allegedly threatened to expose the affair publicly and revoke her trust fund during dinner.",
      alibi:
        "“Victor’s dawa was always disgustingly sweet. I would never drink something like that. When Papa collapsed, I saw David’s face go completely white. I think someone knocked over a glass, but everything became chaos.”",
      evidence:
        "House staff reported hearing Chloe shout at Edward earlier that afternoon: “I wish you would just disappear for once!”",
      notes:
        "Friends confirmed Chloe occasionally wore a Kamau crest cufflink as a pendant charm around her neck. Her observations about David’s reaction after the poisoning intensified suspicion around him.",
      color: "#ff79c6"
    }
  ];

  let current = $derived(
    suspects.find((s) => s.id === selectedId)
  );
</script>

<div class="board-container">

  <!-- TOP NAVIGATION -->
  <div class="top-navigation">

    <a href="/games/kamau-succession" class="nav-link">
      📄 Incident Report
    </a>

    <a href="/games/kamau-succession/evidence" class="nav-link">
      🧪 Evidence Locker
    </a>

    <a
      href="/games/kamau-succession/suspects"
      class="nav-link active-link"
    >
      🕵️ Suspects
    </a>

    <a href="/games/kamau-succession/accuse" class="nav-link">
      ⚖️ Accusation Chamber
    </a>

  </div>

  <div class="content-layout">

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-header">
        <h2>Suspect Files</h2>
        <p>Kamau Succession Case // Nairobi Homicide</p>
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

            <span class="tab-name">
              {s.name}
            </span>

            <span class="tab-role">
              {s.role}
            </span>

          </div>

        </button>
      {/each}

    </aside>

    <!-- DOSSIER -->
    <main class="dossier-view">

      {#if current}

        <div class="dossier-content">

          <!-- HEADER -->
          <div class="dossier-header">

            <div
              class="profile-box"
              style="border-color:{current.color}"
            >
              <span>FILE SEALED</span>
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
              <h3>MOTIVE</h3>

              <p>
                {current.motive}
              </p>
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
              <h3>DETECTIVE NOTES</h3>

              <p>
                {current.notes}
              </p>
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
    font-family: "Courier New", monospace;
  }

  /* NAVIGATION */

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
    min-height: calc(100vh - 76px);
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
    letter-spacing: 1px;
  }

  .sidebar-header p {
    font-size: 0.75rem;
    color: #777;
    margin-top: 8px;
  }

  .suspect-tab {
    width: 100%;
    display: flex;
    gap: 12px;
    padding: 15px 20px;
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
    font-size: 0.72rem;
    color: #777;
    margin-top: 4px;
    line-height: 1.4;
  }

  /* DOSSIER */

  .dossier-view {
    padding: 50px;
    overflow-y: auto;
  }

  .dossier-content {
    max-width: 950px;
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
    font-size: 0.7rem;
    background: #111;
    flex-shrink: 0;
    letter-spacing: 2px;
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
    line-height: 1.8;
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
    line-height: 1.8;
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
<script>
  let selectedId = $state("walter");

  const suspects = [
    {
      id: "diana",
      name: "Diana Kamau",
      age: 36,
      role: "Sister of Edwin Kamau",
      threat: "High",
      motive: "Salim was blackmailing Diana over the Edwin Kamau case. She believes Salim planned to expose her brother Edwin as the real killer in the Monica K. murder. In truth, Edwin was innocent. Diana stole the police file and wants to destroy the Kimani Deposition. Exposure would mean prison for tampering with evidence.",
      alibi: "Claims she was in the restroom from 8:30–8:45 p.m. (logged times). Due to clock drift, this window could shift forward or backward by nine minutes.",
      evidence: "Phone pinged the 48th-floor router at logged 8:31 p.m. Partial origami crane identical to the one at the crime scene found in her bag (she says she found it in the parking lot). Recently searched online for 'cyanide purchase' and 'how to bypass digital deadbolt.'",
      notes: "No known history of violence or chemical knowledge. Claims she found the origami crane in the parking lot before the gala. Her fingerprints were found on the service cart tray alongside Sharon's.",
      color: "#ff5555",
      clue: "⚠️ Online searches are suspicious, but no evidence she has the skills to apply dried cyanide film.",
      innocence: "🔍 Diana lacks the chemical knowledge and precision required for the poison method."
    },
    {
      id: "marcus",
      name: "Marcus Mutugi",
      age: 62,
      role: "Retired Prosecutor",
      threat: "Critical",
      motive: "His brother (a real estate developer) ordered two of the three original murders. Salim had the Kimani Deposition naming the brother as the mastermind behind the cover-up. Marcus faces conspiracy charges and loss of pension.",
      alibi: "Claims he was on the balcony alone from 8:10–8:40 p.m. (logged times). No witness. Also claims he was with Oliver from logged 8:20–8:40; Oliver claims he was with Marcus from logged 8:28–8:48.",
      evidence: "Traffic camera captured black Mercedes E-Class (his car) entering the parking garage at 8:05 p.m. (drift means between 7:56 and 8:14). Phone went offline from logged 8:10 p.m. to 8:55 p.m. Matchbook from 'The Arcadian Lounge' had his office phone number written inside. Stencil note's pressure patterns consistent with his disguised hand (left-handed but wrote with right).",
      notes: "Has access to legal poisons via old evidence lockers from prosecutor days. Both he and Oliver possess digital tools to manipulate the building's server. Claims the matchbook was planted.",
      color: "#bd93f9",
      clue: "⚠️ The matchbook is too convenient — why would Salim carry it? Could be planted.",
      innocence: "🔍 Marcus has motive but was on the balcony during the poisoning window. The matchbook is likely planted evidence."
    },
    {
      id: "walter",
      name: 'Walter "Wally" Mulandi',
      age: 67,
      role: "Retired Stage Magician",
      threat: "Critical",
      motive: "Accidentally pushed Liza Mueni down the stairs when she caught him stealing charity funds. He took her notebook and has been blackmailing Salim with it. Salim was about to reveal Walter as Liza's killer at the gala. Exposure means life in prison.",
      alibi: "With Beatrice until logged 8:40, then 'got a drink.' No witness.",
      evidence: "Magic trunk key found on his person. The trunk (in coat check) contained Liza's bloodstained scarf and a vial of cyanide. Fingerprints on the whiskey bottle's label (he says he poured a toast for Salim at logged 8:00). Seen leaving the War Room hallway at logged 8:38 – though the door was locked, he claims he was looking for a restroom. Stencil note's pressure patterns also consistent with someone who practices precise hand movements (magic).",
      notes: "Master of misdirection and known for a performer's smile under pressure. CCTV shows him adjusting the tray of glasses on the service cart at 8:02 p.m. His fingerprints were found on the underside of the tray.",
      color: "#f1fa8c",
      clue: "🔍 KEY SUSPECT: Liza's notebook directly names 'W.M.' and says to check his magic trunk. The trunk contained the cyanide used to kill Salim. 'Old timer from the Seaview Circle' matches Walter (age 67, Seaview Circle member). 'They smiled' matches his performer persona.",
      innocence: "⚠️ All evidence points to Walter. The magic trunk is the smoking gun."
    },
    {
      id: "sharon",
      name: "Sharon Mukiri",
      age: 41,
      role: "Former Podcast Co-Host",
      threat: "High",
      motive: "Salim had proof that Sharon accidentally killed Zoe Muli (Arcadian Apartments case) during an argument – a push from a balcony. She then tampered with the fire investigation to frame a developer. Exposure means manslaughter charges and the end of her career.",
      alibi: "Claims she was near the service cart with Diana Kamau during the critical window. Due to drift, her phone ping at logged 8:34 p.m. overlaps with Diana's at logged 8:31 p.m.",
      evidence: "DNA found under Salim's fingernail (she claims she shook his hand earlier or that it could be from the pre-gala argument). Voice recording on Salim's phone captures Sharon saying, 'If you release that file, I'll make sure you never speak again.' Timestamp 8:02 p.m. (logged). Purchased a rare cyanide-based insecticide for her garden two weeks prior.",
      notes: "Physically strong, but poison is her implied method. Was seen giving Diana a small glass vial near the service cart. Her fingerprints were found on the service cart tray.",
      color: "#50fa7b",
      clue: "⚠️ Threat was empty. Insecticide is not the same as the pure cyanide used. Lacks precision for dried film.",
      innocence: "🔍 Sharon lacks the chemical precision and performer's calm required for this execution."
    },
    {
      id: "oliver",
      name: "Oliver Kili",
      age: 39,
      role: "Researcher",
      threat: "High",
      motive: "Tried to blackmail Salim using stolen Arcadian evidence. Salim refused and threatened to expose Oliver's illegal hacking into police databases. Exposure means federal charges.",
      alibi: "Claims he was with Marcus Mutugi from 8:20 to 8:40. (Mirroring Marcus's statement.)",
      evidence: "Laptop (seized) contained searches for 'Salim Juma security code' and 'cyanide in whiskey.' Single latex glove found in the War Room trash bin matched a box purchased by Oliver. Phone ping placed him near the War Room door at 8:37 p.m.",
      notes: "Both he and Marcus possess digital tools to manipulate the building's server. A latex glove found in the hallway contained a mixed DNA profile with trace cells from both Marcus and Oliver, neither dominant.",
      color: "#ffb86c",
      clue: "⚠️ Searches suggest interest in cyanide, but no evidence he had access to pure cyanide.",
      innocence: "🔍 Oliver is a blackmailer and hacker, not a killer. The glove was likely planted."
    },
    {
      id: "beatrice",
      name: 'Beatrice "Birdie" Pesa',
      age: 68,
      role: "Retired Cryptographer",
      threat: "Moderate",
      motive: "Salim stole Liza Mueni's notebook from Birdie's home. The notebook contains codes proving that Walter Mulandi killed Liza. Birdie wanted the notebook back to expose Walter, but Salim threatened to reveal Birdie's own secret: she helped cover up a past theft to protect a friend. Exposure means public disgrace.",
      alibi: "Talking with Walter Mulandi from logged 8:15–8:40 p.m., then used the restroom.",
      evidence: "Handwriting analysis showed similarity to the stencil note's pressure patterns (she is skilled at altering hand). Seen near the War Room door at logged 8:42 by catering staff. A torn page from Liza's notebook (with the code) was found in Birdie's coat pocket.",
      notes: "Has a heart condition; poison is possible, but physical violence is unlikely. Was seen wiping a spill off the service cart tray at 8:02 p.m. Her fingerprints were recovered from the underside of the tray.",
      color: "#8be9fd",
      clue: "⚠️ Birdie wanted to expose Walter, not kill Salim. She lacks the physical precision for dried film due to arthritis.",
      innocence: "🔍 Birdie wanted the notebook back to expose Walter. Her arthritis prevents her from performing the precise hand movements required."
    },
    {
      id: "sylvia",
      name: "Sylvia Mwende",
      age: 58,
      role: "Retired Detective",
      threat: "Moderate",
      motive: "Knows that Marcus Mutugi's brother orchestrated the cover-up of all three original cases. She was forced off the force for getting too close. Salim had the Kimani Deposition but refused to share it with her, intending to sell it rather than release it publicly. Sylvia wanted the truth to come out.",
      alibi: "Alone in the library corner, reviewing notes. Unconfirmed.",
      evidence: "Service revolver (unregistered) found in her car, with one round fired (ballistics inconclusive – not the murder weapon). She says she used it at a firing range months ago. A torn page from Liza's notebook (the missing one) was in her coat pocket. It read: 'W.M. took KSH.50k. Confronted him. He panicked. If I die, check his magic trunk.' She claims she found it on the War Room floor after the body was discovered and kept it to preserve evidence. Had access to the building's master key override codes (former police consultant), but the deadbolt log shows no override was used.",
      notes: "Calm under pressure and trained in forensic pathology. A single latent fingerprint was recovered from the inside of the confession letter envelope. It belongs to her. She admits touching it after the murder and says that if she wrote it, she would have used gloves.",
      color: "#ff79c6",
      clue: "⚠️ The confession letter is too convenient — Sylvia's fingerprint on the envelope, but she handled it after the murder.",
      innocence: "🔍 Sylvia found the notebook page after the murder and kept it as evidence. The confession letter was planted to frame her. She never uses typewriters, but the letter was typed."
    }
  ];

  let currentSuspect = $derived(suspects.find(s => s.id === selectedId));
</script>

<div class="board-container">

  <!-- TOP CASE NAVIGATION -->
  <div class="top-navigation">
    <a href="/games/echoes-in-the-tower" class="nav-link">📄 Incident Report</a>
    <a href="/games/echoes-in-the-tower/evidence" class="nav-link">🧪 Evidence Locker</a>
    <a href="/games/echoes-in-the-tower/suspects" class="nav-link active-link">👤 Suspect Dossiers</a>
    <a href="/games/echoes-in-the-tower/accuse" class="nav-link">⚖️ Accusation Chamber</a>
  </div>

  <!-- MAIN LAYOUT -->
  <div class="content-layout">

    <!-- SUSPECT SIDEBAR -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>Suspect Files</h2>
        <p>Division: Major Crimes — Echoes in the Tower</p>
        <p style="font-size: 0.7rem; color: #666; margin-top: 5px;">7 Persons of Interest</p>
      </div>

      {#each suspects as suspect}
        <button 
          class="suspect-tab" 
          class:active={selectedId === suspect.id}
          class:key-suspect={suspect.id === "walter"}
          onclick={() => selectedId = suspect.id}
        >
          <span class="threat-dot" style="background: {suspect.color}"></span>
          <div class="tab-info">
            <span class="tab-name">{suspect.name}</span>
            <span class="tab-role">{suspect.role}</span>
          </div>
          {#if suspect.id === "walter"}
            <span class="key-badge">🔑</span>
          {/if}
        </button>
      {/each}
      
      <div class="sidebar-footer">
        <p>🔍 = Key Evidence</p>
        <p>⚠️ = Red Flag</p>
      </div>
    </div>

    <!-- DOSSIER VIEW -->
    <main class="dossier-view">
      {#if currentSuspect}
        <div class="dossier-content">

          <div class="dossier-header">
            <div class="profile-placeholder" style="border-color: {currentSuspect.color}">
              <span class="photo-label">FILE PHOTO</span>
              <span class="photo-sub">MISSING</span>
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
              <h3>Motive</h3>
              <p>{currentSuspect.motive}</p>
            </section>

            <section class="info-block">
              <h3>Alibi / Statement</h3>
              <p class="alibi-text">"{currentSuspect.alibi}"</p>
            </section>

            <section class="info-block full-width">
              <h3>Evidence Against</h3>
              <div class="evidence-box">
                {currentSuspect.evidence}
              </div>
            </section>

            <section class="info-block full-width notes">
              <h3>Investigator Notes</h3>
              <p>{currentSuspect.notes}</p>
            </section>

            <!-- CLUE SECTION -->
            <section class="info-block full-width clue-section">
              <h3>🔍 Investigative Analysis</h3>
              <div class="clue-box" class:clue-key={currentSuspect.id === "walter"}>
                <p><strong>Key Observation:</strong> {currentSuspect.clue}</p>
                <p style="margin-top: 10px;"><strong>Innocence Indicator:</strong> {currentSuspect.innocence}</p>
                {#if currentSuspect.id === "walter"}
                  <div class="smoking-gun">
                    <span>⚠️</span>
                    <strong>SMOKING GUN:</strong> Liza's notebook names "W.M." and says to check his magic trunk. The trunk contained cyanide matching the murder weapon and Liza's bloodstained scarf. The trunk key was on Walter's person.
                  </div>
                {/if}
              </div>
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
    flex-wrap: wrap;
  }

  .nav-link {
    text-decoration: none;
    color: #ccc;
    padding: 10px 14px;
    border: 1px solid #333;
    background: #1f1f1f;
    font-size: 0.85rem;
    transition: 0.2s;
    font-family: 'Courier New', monospace;
  }

  .nav-link:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .active-link {
    border-color: var(--accent);
    color: #fff;
    background: var(--accent);
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
    display: flex;
    flex-direction: column;
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
    font-family: 'Cinzel', serif;
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
    font-family: 'Courier New', monospace;
    position: relative;
  }

  .suspect-tab:hover {
    background: #333;
  }

  .suspect-tab.active {
    background: var(--card-bg);
    color: #fff;
    border-left: 4px solid var(--accent);
  }

  .suspect-tab.key-suspect {
    background: rgba(176, 42, 42, 0.1);
    border-left: 3px solid #f1fa8c;
  }

  .suspect-tab.key-suspect:hover {
    background: rgba(176, 42, 42, 0.2);
  }

  .key-badge {
    margin-left: auto;
    font-size: 0.8rem;
  }

  .threat-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .tab-info {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .tab-name { font-weight: bold; font-size: 0.9rem; }
  .tab-role { font-size: 0.65rem; color: #777; }

  .sidebar-footer {
    margin-top: auto;
    padding: 15px 20px;
    border-top: 1px solid #333;
    font-size: 0.7rem;
    color: #666;
  }

  .sidebar-footer p {
    margin: 3px 0;
  }

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
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .profile-placeholder {
    width: 120px;
    height: 150px;
    background: #111;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .photo-label { font-size: 0.6rem; color: #444; }
  .photo-sub { font-size: 0.5rem; color: #333; margin-top: 2px; }

  .main-info { flex: 1; }

  h1 { 
    margin: 0; 
    font-size: 2rem; 
    font-family: 'Cinzel', serif;
  }

  .role-tag { 
    color: #aaa; 
    font-style: italic; 
    font-size: 0.9rem;
  }

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
    margin-bottom: 10px;
    font-family: 'Cinzel', serif;
  }

  .info-block p {
    line-height: 1.6;
    font-size: 0.9rem;
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
    line-height: 1.8;
  }

  .notes {
    color: #888;
    font-size: 0.9rem;
  }

  /* CLUE SECTION */
  .clue-section {
    margin-top: 10px;
  }

  .clue-box {
    background: rgba(255,255,255,0.05);
    padding: 20px;
    border-left: 4px solid #666;
    border-radius: 2px;
  }

  .clue-box.clue-key {
    border-left-color: #f1fa8c;
    background: rgba(241, 250, 140, 0.05);
  }

  .clue-box p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #ccc;
  }

  .smoking-gun {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    background: rgba(176, 42, 42, 0.15);
    border: 1px solid var(--accent);
    padding: 15px;
    margin-top: 15px;
    border-radius: 4px;
    color: #ff6b6b;
  }

  .smoking-gun span {
    font-size: 1.2rem;
  }

  .smoking-gun strong {
    color: #ff6b6b;
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

    .dossier-view {
      padding: 30px 20px;
    }

    .dossier-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .sidebar-footer {
      display: none;
    }
  }

  /* Scrollbar styling */
  .dossier-view::-webkit-scrollbar,
  .sidebar::-webkit-scrollbar {
    width: 6px;
  }

  .dossier-view::-webkit-scrollbar-track,
  .sidebar::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  .dossier-view::-webkit-scrollbar-thumb,
  .sidebar::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 3px;
  }

  .dossier-view::-webkit-scrollbar-thumb:hover,
  .sidebar::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
  }
</style>
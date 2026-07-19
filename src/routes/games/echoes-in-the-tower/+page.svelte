<script>
  // Svelte 5 reactivity for simple UI toggles
  let showFullDossier = $state(false);
</script>

<div class="incident-container">
  <!-- Top Navigation -->
  <div class="case-navigation">
    <a href="/games/echoes-in-the-tower" class="nav-link active">INCIDENT REPORT</a>
    <a href="/games/echoes-in-the-tower/evidence" class="nav-link">EVIDENCE</a>
    <a href="/games/echoes-in-the-tower/suspects" class="nav-link">SUSPECTS</a>
    <a href="/games/echoes-in-the-tower/accuse" class="nav-link">ACCUSATION</a>
  </div>

  <!-- Subtle background texture overlay -->
  <div class="paper-texture"></div>
  <div class="watermark">CLASSIFIED</div>

  <div class="dossier-header">
    <div class="stamp-box">
      <span class="red-stamp">TOP SECRET</span>
      <span class="case-id">CASE FILE: RRP-2026-088</span>
    </div>
    <h1>Incident Report: Echoes in the Tower</h1>
    <p class="subtitle">Investigating Officer: Forensics Unit // Date: May 18, 2026</p>
    <div class="header-line"></div>
  </div>

  <div class="dossier-body">

    <!-- Section 1: The Victim -->
    <section class="dossier-section victim-profile">
      <div class="tape top-left"></div>
      <div class="tape top-right"></div>
      <div class="section-tag">SUBJECT_01 // DECEASED</div>
      <h3>Victim Profile: Salim Juma (44)</h3>
      <ul>
        <li><strong>Status:</strong> Former investigative journalist; Host of true-crime podcast <em>Unsolved Echoes</em>.</li>
        <li><strong>History:</strong> Divorced 5 years ago. No children.</li>
        <li><strong>Recent Activity:</strong> Acquired the sealed <strong>"Kimani Deposition"</strong> – a document naming the same person as the killer in three separate cold cases.</li>
        <li><strong>Conflict:</strong> Major public falling out with three former co-hosts: Sharon Mukiri, Oliver Kili, and Sylvia Mwende (ret.).</li>
        <li><strong>Blackmail:</strong> Secretly blackmailed all seven gala attendees using fragments of the deposition. Each suspect faced financial ruin, imprisonment, or exposure of past killings.</li>
        <li><strong>Last Known Statement (to a friend, two weeks before death):</strong> “The three cases are connected by one person. The deposition proves it.”</li>
        <li><strong>Last Words (recorded on phone, 8:29 p.m.):</strong> “The <span class="highlight">old timer</span> from the <span class="highlight">Seaview Circle</span> just handed me the glass. <span class="highlight">They smiled</span>. I think they know.”</li>
        <li><strong>Security Concern:</strong> Recently sought discreet private security advice; no formal meeting recorded.</li>
        <li><strong>Final Warning:</strong> Told a friend: “If anything happens to me, look at the deposition first.”</li>
      </ul>
      
      <!-- INVESTIGATOR TIP: Salim's last words -->
      <div class="investigator-tip">
        <span class="tip-icon">🔍</span>
        <div>
          <strong>INVESTIGATOR NOTE:</strong> Salim's last words contain three critical clues. 
          <span class="tip-highlight">"Old timer"</span> suggests someone older. 
          <span class="tip-highlight">"Seaview Circle"</span> points to a specific group. 
          <span class="tip-highlight">"They smiled"</span> describes the killer's demeanor.
        </div>
      </div>
    </section>

    <!-- Section 2: The Scene -->
    <section class="dossier-section scene-details">
      <h3>The Crime Scene: Kilimani Arts Tower — War Room (48th Floor)</h3>
      <p>Body discovered at <strong>approx. 8:47 p.m.</strong> slumped over the desk in the soundproofed War Room.</p>
      <p><strong>Cause of death:</strong> Cyanide poisoning.</p>

      <div class="staging-box">
        <h4 class="warning-text">CRIME SCENE DETAILS</h4>
        <ul>
          <li><strong>Door Status:</strong> Digital deadbolt registered "Secured" at a logged time of 8:05 p.m. (with ±9-minute clock drift).</li>
          <li><strong>Access Pathways:</strong> Digital deadbolt (logged), maintenance override (no log), manual emergency latch (no log).</li>
          <li><strong>Poison Method:</strong> Applied as a clear, dehydrated film coating the inside bottom of a crystal vintage Macallan 25 whiskey glass.</li>
          <li><strong>Condition:</strong> No defensive wounds. Victim slumped over desk.</li>
          <li><strong>Missing:</strong> Single torn page from Liza Mueni's notebook (later found in Sylvia Mwende's possession).</li>
        </ul>
      </div>

      <div class="inventory">
        <h4>Property Log // Evidence Locker</h4>
        <div class="log-grid">
          <p class="log-item missing"><strong>MISSING:</strong> Liza Mueni's notebook page (found later with Sylvia Mwende).</p>
          <p class="log-item recovered"><strong>RECOVERED:</strong> iPhone 17, wallet, whiskey bottle, matchbook, origami crane fragment.</p>
        </div>
      </div>

      <div class="staging-box digital-trace">
        <h4 class="warning-text">SYSTEM CLOCK DRIFT</h4>
        <ul>
          <li><strong>Drift Cause:</strong> Severe electrical storm caused split-brain synchronisation failure at 8:00 p.m.</li>
          <li><strong>Variance:</strong> ±9-minute linear variance between all recorded timestamps.</li>
          <li><strong>Impact:</strong> A logged time of 8:05 p.m. could have occurred between 7:56 p.m. and 8:14 p.m.</li>
          <li><strong>Status:</strong> Exact chronological sequence is objectively unknowable.</li>
        </ul>
        
        <!-- INVESTIGATOR TIP: Clock drift -->
        <div class="investigator-tip" style="margin-top: 15px;">
          <span class="tip-icon">⏰</span>
          <div>
            <strong>INVESTIGATOR NOTE:</strong> The clock drift means <span class="tip-highlight">timelines are unreliable</span>. 
            Focus on <span class="tip-highlight">method and motive</span> instead of trying to reconstruct exact times.
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: The Clues -->
    <section class="dossier-section evidence-clues">
      <h3>Preliminary Field Evidence</h3>

      <div class="clue-grid">
        <div class="clue-card">
          <span class="clue-label">Chemical</span>
          <p>Cyanide residue in whiskey glass</p>
          <div class="clue-hint">The poison was applied as a <strong>dried film</strong> — a technique requiring <span class="tip-highlight">precision and knowledge</span></div>
        </div>

        <div class="clue-card">
          <span class="clue-label">Physical</span>
          <p>Partial origami crane under victim's fingernail</p>
          <div class="clue-hint">All suspects practiced origami — <span class="tip-highlight">shared skill</span> makes this a <span class="tip-highlight">misdirection</span></div>
        </div>

        <div class="clue-card">
          <span class="clue-label">Document</span>
          <p>Arcadian Lounge matchbook with phone number</p>
          <div class="clue-hint">Phone number traces to Marcus Mutugi — <span class="tip-highlight">possibly planted</span></div>
        </div>

        <div class="clue-card">
          <span class="clue-label">Evidence</span>
          <p>Stencil note: <em>"The price of an echo is silence."</em></p>
          <div class="clue-hint">Stencil kit available to all — <span class="tip-highlight">pressure patterns</span> may reveal the writer</div>
        </div>
      </div>

      <div class="proximity-alert">
        <strong>FORENSIC NOTE:</strong> The magic trunk containing Liza's bloodstained scarf and a vial of cyanide 
        was found in <strong>Walter Mulandi's</strong> possession. The trunk key was on his person.
        <div class="investigator-tip" style="margin-top: 12px; background: rgba(255,255,255,0.7);">
          <span class="tip-icon">🗝️</span>
          <div>
            <strong>INVESTIGATOR NOTE:</strong> A magic trunk containing <span class="tip-highlight">Liza's scarf</span> and <span class="tip-highlight">cyanide</span> is 
            significant evidence. The key was on <span class="tip-highlight">Walter's person</span>. Who keeps a cyanide vial in their trunk?
          </div>
        </div>
      </div>
      
      <!-- KEY INVESTIGATIVE QUESTION -->
      <div class="key-question-box">
        <span class="key-question-icon">❓</span>
        <div>
          <strong>KEY INVESTIGATIVE QUESTION:</strong>
          <p style="margin: 5px 0 0 0; font-size: 1.05rem;">
            Who had the <span class="tip-highlight">skills</span> to apply a precise dried cyanide film to a glass, 
            the <span class="tip-highlight">opportunity</span> to place it on the service cart, 
            and the strongest <span class="tip-highlight">motive</span> to silence Salim permanently?
          </p>
        </div>
      </div>
    </section>

    <!-- Section 4: The Suspects Overview -->
    <section class="dossier-section suspects-overview">
      <h3>Suspects Overview</h3>
      <p class="suspects-intro">Seven individuals attended the Blackout Masquerade gala. Each had motive, opportunity, and connection to the Kimani Deposition.</p>
      
      <div class="suspects-mini-grid">
        <div class="suspect-mini">
          <span class="suspect-name">Diana Kamau</span>
          <span class="suspect-role">The Sister</span>
          <span class="suspect-motive">Blackmailed over Edwin Kamau case</span>
          <span class="suspect-clue">🔍 Origami in bag (found)</span>
        </div>
        <div class="suspect-mini">
          <span class="suspect-name">Marcus Mutugi</span>
          <span class="suspect-role">The Retired Prosecutor</span>
          <span class="suspect-motive">Brother named in deposition</span>
          <span class="suspect-clue">🔍 Matchbook with his number</span>
        </div>
        <div class="suspect-mini suspect-highlight">
          <span class="suspect-name">Walter "Wally" Mulandi</span>
          <span class="suspect-role">The Retired Magician</span>
          <span class="suspect-motive">Killed Liza Mueni, blackmailing Salim</span>
          <span class="suspect-clue">🔍 Magic trunk with cyanide + scarf</span>
          <span class="suspect-clue">🔍 Fingerprints on whiskey label</span>
          <span class="suspect-clue">🔍 Master of misdirection</span>
        </div>
        <div class="suspect-mini">
          <span class="suspect-name">Sharon Mukiri</span>
          <span class="suspect-role">The Former Co-Host</span>
          <span class="suspect-motive">Accidentally killed Zoe Muli</span>
          <span class="suspect-clue">🔍 DNA under victim's nails</span>
        </div>
        <div class="suspect-mini">
          <span class="suspect-name">Oliver Kili</span>
          <span class="suspect-role">The Researcher</span>
          <span class="suspect-motive">Blackmailing Salim with stolen evidence</span>
          <span class="suspect-clue">🔍 Latex glove found in War Room</span>
        </div>
        <div class="suspect-mini">
          <span class="suspect-name">Beatrice "Birdie" Pesa</span>
          <span class="suspect-role">The Retired Cryptographer</span>
          <span class="suspect-motive">Wanted Liza's notebook back</span>
          <span class="suspect-clue">🔍 Fingerprints on service cart tray</span>
        </div>
        <div class="suspect-mini">
          <span class="suspect-name">Sylvia Mwende</span>
          <span class="suspect-role">The Retired Detective</span>
          <span class="suspect-motive">Wanted truth about deposition</span>
          <span class="suspect-clue">🔍 Fingerprint on confession letter</span>
          <span class="suspect-clue">🔍 Had the missing notebook page</span>
        </div>
      </div>
      
      <!-- SUSPECT ANALYSIS TIP -->
      <div class="investigator-tip" style="margin-top: 25px; background: rgba(255,255,255,0.7);">
        <span class="tip-icon">👤</span>
        <div>
          <strong>INVESTIGATOR NOTE:</strong> Pay attention to <span class="tip-highlight">who has the most to lose</span> 
          and <span class="tip-highlight">who has the skills</span> to commit this specific crime. 
          The poisoned glass required <span class="tip-highlight">precision, chemical knowledge, and sleight of hand</span>.
        </div>
      </div>
    </section>

  </div>

  <!-- Navigation -->
  <div class="action-footer">
    <p class="briefing-note">The system clock drift makes this case complex. Focus on motive, method, and the clues in Salim's last words.</p>
    <div class="btn-group">
      <a href="/games/echoes-in-the-tower/suspects" class="nav-btn primary">PROCEED TO SUSPECTS 🕵️‍♀️</a>
      <a href="/games/echoes-in-the-tower/evidence" class="nav-btn secondary">VIEW LAB RESULTS 🧪</a>
    </div>
  </div>
</div>

<style>
  /* --- BASE STYLES --- */
  :root {
    --paper-color: #f4f1ea;
    --ink-color: #2c2c2c;
    --red-stamp: #b02a2a;
    --tape-color: rgba(210, 180, 140, 0.3);
    --highlight-bg: rgba(176, 42, 42, 0.08);
    --highlight-border: #b02a2a;
  }

  .incident-container {
    max-width: 950px;
    margin: 40px auto;
    padding: 80px 60px;
    background-color: var(--paper-color);
    color: var(--ink-color);
    box-shadow: 0 10px 40px rgba(0,0,0,0.3), inset 0 0 100px rgba(0,0,0,0.05);
    font-family: 'Courier New', Courier, monospace;
    position: relative;
    border: 1px solid #d1cfc7;
    line-height: 1.5;
  }

  /* --- CASE NAVIGATION --- */
  .case-navigation {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
  }

  .nav-link {
    text-decoration: none;
    color: var(--ink-color);
    border: 1px solid rgba(0,0,0,0.2);
    padding: 10px 16px;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all 0.2s ease;
    background: rgba(255,255,255,0.5);
  }

  .nav-link:hover {
    background: var(--ink-color);
    color: var(--paper-color);
  }

  .nav-link.active {
    background: var(--red-stamp);
    color: white;
    border-color: var(--red-stamp);
  }

  /* Paper texture overlay */
  .paper-texture {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    background-image: url("https://www.transparenttextures.com/patterns/pinstriped-suit.png");
    opacity: 0.05;
  }

  .watermark {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-size: 10rem;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.03);
    z-index: 0;
    pointer-events: none;
    text-transform: uppercase;
  }

  /* --- HEADER --- */
  .dossier-header {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }

  .red-stamp {
    display: inline-block;
    color: var(--red-stamp);
    border: 4px double var(--red-stamp);
    padding: 5px 15px;
    font-weight: 900;
    font-size: 1.5rem;
    transform: rotate(-5deg);
    margin-bottom: 10px;
    background: rgba(176, 42, 42, 0.05);
  }

  .case-id {
    display: block;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 5px;
  }

  h1 {
    font-size: 2rem;
    margin: 20px 0 5px 0;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -1px;
  }

  .subtitle {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 20px;
  }

  .header-line {
    height: 3px;
    background: var(--ink-color);
    width: 100%;
    border-bottom: 1px solid var(--ink-color);
  }

  /* --- HIGHLIGHT TEXT --- */
  .highlight {
    background: var(--highlight-bg);
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: bold;
    color: var(--red-stamp);
  }

  .tip-highlight {
    background: var(--highlight-bg);
    padding: 1px 4px;
    border-radius: 2px;
    font-weight: bold;
    color: var(--red-stamp);
  }

  /* --- INVESTIGATOR TIP --- */
  .investigator-tip {
    display: flex;
    gap: 12px;
    background: rgba(255, 255, 255, 0.8);
    border-left: 4px solid var(--red-stamp);
    padding: 15px 18px;
    margin: 15px 0;
    border-radius: 2px;
    font-size: 0.9rem;
    align-items: flex-start;
  }

  .tip-icon {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .investigator-tip div {
    line-height: 1.6;
  }

  /* --- KEY QUESTION BOX --- */
  .key-question-box {
    display: flex;
    gap: 15px;
    background: var(--highlight-bg);
    border: 2px solid var(--red-stamp);
    padding: 20px 25px;
    margin: 30px 0 10px 0;
    border-radius: 4px;
    align-items: flex-start;
  }

  .key-question-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .key-question-box div {
    line-height: 1.6;
  }

  .key-question-box p {
    margin: 5px 0 0 0;
    font-size: 1.05rem;
  }

  /* --- SECTIONS --- */
  .dossier-section {
    background: rgba(255, 255, 255, 0.6);
    padding: 40px;
    margin-bottom: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.02);
  }

  .section-tag {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 0.7rem;
    color: #999;
    font-weight: bold;
  }

  h3 {
    font-size: 1.3rem;
    border-bottom: 1px solid #333;
    padding-bottom: 10px;
    margin-bottom: 25px;
    color: var(--red-stamp);
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 15px;
    padding-left: 20px;
    position: relative;
  }

  ul li::before {
    content: "—";
    position: absolute;
    left: 0;
  }

  /* --- SPECIFIC BOXES --- */
  .staging-box {
    background: #fdfdfd;
    border: 2px solid #ddd;
    padding: 20px;
    margin: 30px 0;
    border-left: 8px solid var(--red-stamp);
  }

  .digital-trace {
    border-left: 8px solid #2c3e50;
    background: #f0f4f7;
  }

  .warning-text {
    margin-top: 0;
    color: var(--red-stamp);
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }

  .log-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .log-item {
    padding: 12px;
    font-size: 0.9rem;
    border: 1px solid #eee;
  }

  .missing {
    background: #fff5f5;
    border-left: 5px solid #ff8787;
  }

  .recovered {
    background: #f4fce3;
    border-left: 5px solid #a9e34b;
  }

  /* --- CLUE GRID --- */
  .clue-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .clue-card {
    background: #fff;
    padding: 20px;
    border: 1px dashed #999;
    font-size: 0.9rem;
  }

  .clue-label {
    display: block;
    font-size: 0.7rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #666;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .clue-hint {
    font-size: 0.75rem;
    color: #666;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dotted #ddd;
    font-style: italic;
  }

  .proximity-alert {
    background: #fff9db;
    padding: 15px;
    border: 1px solid #f59f00;
    font-size: 1rem;
    transform: rotate(0.5deg);
    box-shadow: 3px 3px 0px rgba(245, 159, 0, 0.2);
  }

  /* --- SUSPECTS OVERVIEW --- */
  .suspects-overview {
    background: rgba(255, 255, 255, 0.8);
  }

  .suspects-intro {
    margin-bottom: 25px;
    font-style: italic;
    color: #555;
  }

  .suspects-mini-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  .suspect-mini {
    background: #fff;
    padding: 15px;
    border: 1px solid #ddd;
    border-left: 4px solid var(--red-stamp);
    transition: 0.2s;
  }

  .suspect-mini:hover {
    transform: translateX(5px);
    box-shadow: 3px 3px 10px rgba(0,0,0,0.05);
  }

  .suspect-mini.suspect-highlight {
    border-left: 4px solid #b02a2a;
    background: rgba(176, 42, 42, 0.05);
    border-color: #b02a2a;
  }

  .suspect-name {
    display: block;
    font-weight: 900;
    font-size: 1rem;
    color: var(--ink-color);
  }

  .suspect-role {
    display: block;
    font-size: 0.8rem;
    color: #666;
    margin: 3px 0;
  }

  .suspect-motive {
    display: block;
    font-size: 0.75rem;
    color: #888;
    font-style: italic;
  }

  .suspect-clue {
    display: block;
    font-size: 0.7rem;
    color: #555;
    margin-top: 4px;
    font-weight: bold;
  }

  /* --- FOOTER/NAV --- */
  .action-footer {
    text-align: center;
    margin-top: 80px;
    padding-top: 40px;
    border-top: 2px dashed #333;
    z-index: 1;
    position: relative;
  }

  .briefing-note {
    font-style: italic;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .nav-btn {
    padding: 15px 30px;
    text-decoration: none;
    font-weight: 900;
    transition: all 0.2s;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  .primary {
    background: var(--ink-color);
    color: var(--paper-color);
  }

  .secondary {
    border: 2px solid var(--ink-color);
    color: var(--ink-color);
  }

  .nav-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  /* --- TAPE DECO --- */
  .tape {
    position: absolute;
    width: 100px;
    height: 35px;
    background-color: var(--tape-color);
    backdrop-filter: blur(1px);
    z-index: 2;
  }

  .top-left {
    top: -15px;
    left: -30px;
    transform: rotate(-35deg);
  }

  .top-right {
    top: -15px;
    right: -30px;
    transform: rotate(35deg);
  }

  /* Responsive Adjustments */
  @media (max-width: 600px) {
    .incident-container {
      padding: 40px 20px;
      margin: 10px;
    }

    .btn-group {
      flex-direction: column;
    }

    .case-navigation {
      flex-direction: column;
    }

    h1 {
      font-size: 1.5rem;
    }

    .red-stamp {
      font-size: 1.2rem;
    }

    .suspects-mini-grid {
      grid-template-columns: 1fr;
    }

    .key-question-box {
      flex-direction: column;
    }

    .investigator-tip {
      flex-direction: column;
    }
  }
</style>
<script>
  // Svelte 5 reactivity for simple UI toggles
  let showFullDossier = $state(false);
</script>

<div class="incident-container">
  <!-- Subtle background texture overlay -->
  <div class="paper-texture"></div>
  <div class="watermark">CLASSIFIED</div>

  <div class="dossier-header">
    <div class="stamp-box">
      <span class="red-stamp">TOP SECRET</span>
      <span class="case-id">CASE FILE: RRP-2026-088</span>
    </div>
    <h1>Incident Report: The River Road Slaying</h1>
    <p class="subtitle">Investigating Officer: Forensics Unit // Date: April 20, 2026</p>
    <div class="header-line"></div>
  </div>

  <div class="dossier-body">

    <!-- Section 1: The Victim -->
    <section class="dossier-section victim-profile">
      <div class="tape top-left"></div>
      <div class="tape top-right"></div>
      <div class="section-tag">SUBJECT_01 // DECEASED</div>
      <h3>Victim Profile: Susan Amani (34)</h3>
      <ul>
        <li><strong>Status:</strong> Former middle-distance runner; Owner of elite sportswear brand.</li>
        <li><strong>History:</strong> Divorced from Michael Korir (retired marathoner, 2 years ago).</li>
        <li><strong>Secret Relationship:</strong> Involved with Jan Snaw, Charge d’Affaires of the King's Landing.</li>
        <li><strong>Conflict:</strong> Major dispute with business partner Jane Toto over suspected diversion of company funds (<strong>KSH 150,000,000</strong>).</li>
        <li><strong>Routine:</strong> Jogged daily at dawn using the same River Road Park route.</li>
        <li><strong>Last Known Text:</strong> SMS sent at <strong>5:58 a.m.</strong> stating: 
          <em>"Black sedan again. Same one from last week. If it’s Michael being stupid, I swear..."</em>
        </li>
        <li><strong>Private Statement to a friend two weeks before her death:</strong> “The old Gardenia murders were never solved because the wrong person was protected.”</li>
        <li><strong>Security Concern:</strong> Recently sought discreet private security advice via an acquaintance; referred to retired Detective Zamzam Hamisi. No formal meeting recorded.</li>
        <li><strong>Final Warning:</strong> Told a friend: “If anything happens to me, look at the company books first.”</li>
      </ul>
    </section>

    <!-- Section 2: The Scene -->
    <section class="dossier-section scene-details">
      <h3>The Crime Scene: River Road Park</h3>
      <p>Body recovered at <strong>6:15 a.m.</strong> near the east trail.</p>
      <p><strong>Cause of death:</strong> Blunt force trauma to the back of the head.</p>

      <div class="staging-box">
        <h4 class="warning-text">POST-MORTEM STAGING (Highly Unusual)</h4>
        <ul>
          <li>Arms crossed over chest.</li>
          <li>Single <strong>white gardenia flower</strong> placed on chest.</li>
          <li>Precise abdominal incision from sternum to pubis.</li>
        </ul>
      </div>

      <div class="inventory">
        <h4>Property Log // Evidence Locker</h4>
        <div class="log-grid">
          <p class="log-item missing"><strong>MISSING:</strong> Limited-edition luxury running watch (Value: <strong>KSH 1,200,000</strong>).</p>
          <p class="log-item recovered"><strong>RECOVERED:</strong> iPhone 17, earrings, wallet, car keys.</p>
        </div>
      </div>

      <div class="staging-box digital-trace">
        <h4 class="warning-text">DIGITAL TRACE</h4>
        <ul>
          <li>Running watch synced to private cloud account.</li>
          <li>Last data upload: <strong>6:07 a.m.</strong></li>
          <li>GPS + biometric feed stopped abruptly.</li>
          <li>Device never recovered.</li>
        </ul>
      </div>
    </section>

    <!-- Section 3: The Clues -->
    <section class="dossier-section evidence-clues">
      <h3>Preliminary Field Evidence</h3>

      <div class="clue-grid">
        <div class="clue-card">
          <span class="clue-label">DNA / Physical</span>
          <p>Bloody running glove monogrammed <strong>"M.K."</strong></p>
        </div>

        <div class="clue-card">
          <span class="clue-label">Footwear</span>
          <p>Partial bootprint: <strong>Size 9 hiking boot</strong></p>
        </div>

        <div class="clue-card">
          <span class="clue-label">Tire Tracks</span>
          <p>Luxury sedan tracks (likely <strong>Mercedes E-Class</strong>)</p>
        </div>

        <div class="clue-card">
          <span class="clue-label">Recovered Note</span>
          <p>Handwritten: <em>"No encore for the runner."</em></p>
        </div>
      </div>

      <div class="proximity-alert">
        <strong>FORENSIC NOTE:</strong> Susan’s headlamp was recovered in a drainage ditch 
        <strong>0.4 miles</strong> from Michael Korir’s home.
      </div>
    </section>

  </div>

  <!-- Navigation -->
  <div class="action-footer">
    <p class="briefing-note">The details don't add up. It's time to solve the crime.</p>
    <div class="btn-group">
      <a href="/suspects" class="nav-btn primary">PROCEED TO SUSPECTS 🕵️‍♀️</a>
      <a href="/evidence" class="nav-btn secondary">VIEW LAB RESULTS 🧪</a>
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

  .proximity-alert {
    background: #fff9db; /* Yellow highlighter effect */
    padding: 15px;
    border: 1px solid #f59f00;
    font-size: 1rem;
    transform: rotate(0.5deg);
    box-shadow: 3px 3px 0px rgba(245, 159, 0, 0.2);
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
    h1 { font-size: 1.5rem; }
    .red-stamp { font-size: 1.2rem; }
  }
</style>
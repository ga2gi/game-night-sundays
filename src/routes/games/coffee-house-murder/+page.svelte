<script>
  let showFullDossier = $state(false);

  const timeline = [
    {
      time: "7:45 PM",
      event: "All suspects arrive at Café Umoja."
    },
    {
      time: "7:55 PM",
      event: "David texts James asking for more time regarding overdue rent."
    },
    {
      time: "7:56 PM",
      event: "James responds: “No more excuses. Tonight is the deadline.”"
    },
    {
      time: "7:57 PM",
      event: "David replies: “I’ll get the money, just don’t come here.”"
    },
    {
      time: "8:00 PM",
      event: "Witnesses overhear an argument between David and Janet."
    },
    {
      time: "8:02 PM",
      event: "CCTV footage captures movement near the café counter moments before blackout."
    },
    {
      time: "8:05 PM",
      event: "Receipt transaction processed under Brian Kamau’s bank card."
    },
    {
      time: "8:15 PM",
      event: "Power outage affects Café Umoja for approximately two minutes."
    },
    {
      time: "8:20 PM",
      event: "David Mwangi discovered dead near the service counter."
    }
  ];
</script>

<div class="incident-container">

  <!-- TOP NAVIGATION -->
  <div class="case-navigation">
    <a href="/games/coffee-house-murder" class="nav-link active">INCIDENT REPORT</a>
    <a href="/games/coffee-house-murder/evidence" class="nav-link">EVIDENCE</a>
    <a href="/games/coffee-house-murder/suspects" class="nav-link">SUSPECTS</a>
    <a href="/games/coffee-house-murder/accuse" class="nav-link">ACCUSATION</a>
  </div>

  <!-- BACKGROUND -->
  <div class="paper-texture"></div>
  <div class="watermark">CLASSIFIED</div>

  <!-- HEADER -->
  <div class="dossier-header">

    <div class="stamp-box">
      <span class="red-stamp">TOP SECRET</span>
      <span class="case-id">CASE FILE: CHM-2026-001</span>
    </div>

    <h1>The Coffee House Murder</h1>

    <p class="subtitle">
      Nairobi Major Crimes Division // Active Investigation File
    </p>

    <div class="header-line"></div>

  </div>

  <!-- CASE INTRO -->
  <section class="dossier-section intro-section">

    <div class="section-tag">CASE BRIEF</div>

    <h3>Incident Overview</h3>

    <p>
      On a rainy evening in Nairobi, barista David Mwangi was found dead
      inside Café Umoja.
    </p>

    <p>
      Four individuals were confirmed to be inside the café during the
      incident window.
    </p>

    <p>
      One of them is responsible.
    </p>

    <div class="detective-note">
      <strong>DETECTIVE INSTRUCTIONS</strong>

      <ul>
        <li>Review all suspect statements carefully.</li>
        <li>Study the recovered evidence and timeline.</li>
        <li>Compare contradictions between testimony and records.</li>
        <li>Use the evidence to identify the killer.</li>
      </ul>
    </div>

  </section>

  <!-- VICTIM -->
  <section class="dossier-section victim-profile">

    <div class="section-tag">SUBJECT_01 // DECEASED</div>

    <h3>Victim Profile: David Mwangi</h3>

    <ul>
      <li><strong>Occupation:</strong> Barista at Café Umoja</li>
      <li><strong>Location:</strong> Nairobi CBD</li>
      <li><strong>Status:</strong> Deceased</li>
      <li><strong>Scene:</strong> Found near the café counter</li>
      <li><strong>Conditions:</strong> Incident occurred during temporary power outage</li>
      <li><strong>Witnesses Present:</strong> Four confirmed individuals</li>
    </ul>

  </section>

  <!-- CRIME SCENE -->
  <section class="dossier-section scene-details">

    <div class="section-tag">SCENE ANALYSIS</div>

    <h3>Café Umoja</h3>

    <p>
      The incident occurred inside Café Umoja during evening operating hours.
      Weather reports confirm heavy rainfall across Nairobi CBD that night.
    </p>

    <div class="staging-box">

      <h4 class="warning-text">SCENE OBSERVATIONS</h4>

      <ul>
        <li>Temporary blackout reported inside café.</li>
        <li>No signs of forced entry detected.</li>
        <li>All suspects remained within the premises during incident window.</li>
        <li>Victim discovered shortly after restoration of power.</li>
      </ul>

    </div>

    <div class="inventory">

      <h4>Recovered Materials</h4>

      <div class="log-grid">

        <p class="log-item recovered">
          <strong>RECOVERED:</strong> Café receipt transaction
        </p>

        <p class="log-item recovered">
          <strong>RECOVERED:</strong> CCTV backup footage fragment
        </p>

        <p class="log-item recovered">
          <strong>RECOVERED:</strong> Handwritten warning note
        </p>

        <p class="log-item recovered">
          <strong>RECOVERED:</strong> Mobile text message records
        </p>

      </div>

    </div>

  </section>

  <!-- EVIDENCE SUMMARY -->
  <section class="dossier-section evidence-clues">

    <div class="section-tag">FIELD EVIDENCE</div>

    <h3>Recovered Evidence Summary</h3>

    <div class="clue-grid">

      <div class="clue-card">
        <span class="clue-label">RECEIPT</span>

        <p>
          Café Umoja receipt processed at 8:05 PM under Brian Kamau’s card.
        </p>

        <div class="mini-document">
          1x Cappuccino — 250 KSh<br>
          1x Sandwich — 300 KSh
        </div>
      </div>

      <div class="clue-card">
        <span class="clue-label">CCTV FOOTAGE</span>

        <p>
          Backup footage shows movement near the counter shortly before blackout.
        </p>

        <div class="mini-document">
          Timestamp: 8:02 PM
        </div>
      </div>

      <div class="clue-card">
        <span class="clue-label">HANDWRITTEN NOTE</span>

        <p>
          Warning note recovered near service area after the scene was secured.
        </p>

        <div class="mini-document note-box">
          David —<br><br>

          If you don't pay me back by tonight, you'll regret it.<br><br>

          This is your last warning.<br><br>

          —E
        </div>
      </div>

      <div class="clue-card">
        <span class="clue-label">TEXT MESSAGES</span>

        <p>
          Conversation recovered between David Mwangi and James Mwangi.
        </p>

        <div class="mini-document">
          <strong>David:</strong> “Please, give me more time.”<br><br>

          <strong>James:</strong> “No more excuses. Tonight is the deadline.”<br><br>

          <strong>David:</strong> “I’ll get the money, just don’t come here.”
        </div>
      </div>

      <div class="clue-card">
        <span class="clue-label">NEWS REPORT</span>

        <p>
          Local publication reported dispute involving unpaid promotion fees.
        </p>

        <div class="mini-document">
          “LOCAL INFLUENCER IN DISPUTE OVER UNPAID CAFÉ PROMOTION FEES”
        </div>
      </div>

      <div class="clue-card">
        <span class="clue-label">DIGITAL SYSTEMS</span>

        <p>
          Café systems experienced interrupted synchronization during blackout.
        </p>

        <div class="mini-document">
          One unidentified device remained connected to café WiFi.
        </div>
      </div>

    </div>

  </section>

  <!-- TIMELINE -->
  <section class="dossier-section timeline-section">

    <div class="section-tag">TIMELINE RECONSTRUCTION</div>

    <h3>Incident Timeline</h3>

    <div class="timeline">

      {#each timeline as item}
        <div class="timeline-item">

          <div class="timeline-time">
            {item.time}
          </div>

          <div class="timeline-line"></div>

          <div class="timeline-event">
            {item.event}
          </div>

        </div>
      {/each}

    </div>

  </section>

  <!-- FOOTER -->
  <div class="action-footer">

    <p class="briefing-note">
      Four suspects. One killer. The truth is hidden somewhere in the evidence.
    </p>

    <div class="btn-group">

      <a
        href="/games/coffee-house-murder/suspects"
        class="nav-btn primary"
      >
        PROCEED TO SUSPECTS 🕵️
      </a>

      <a
        href="/games/coffee-house-murder/evidence"
        class="nav-btn secondary"
      >
        VIEW EVIDENCE 🧪
      </a>

    </div>

  </div>

</div>

<style>
:root {
  --paper: #f4f1ea;
  --ink: #2b2b2b;
  --accent: #8b1f1f;
  --muted: #666;
  --glass: rgba(255,255,255,0.7);
}

/* MAIN */
.incident-container {
  max-width: 1050px;
  margin: 40px auto;
  padding: 80px 60px;
  background: var(--paper);
  color: var(--ink);
  font-family: "Courier New", monospace;
  border: 1px solid #d8d4cc;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.25);
}

/* NAV */
.case-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 50px;
  position: relative;
  z-index: 2;
}

.nav-link {
  text-decoration: none;
  padding: 10px 16px;
  border: 1px solid rgba(0,0,0,0.2);
  background: rgba(255,255,255,0.5);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--ink);
  transition: 0.2s;
}

.nav-link:hover {
  background: var(--ink);
  color: white;
}

.nav-link.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* BACKGROUND */
.paper-texture {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.05) 3px
    );
}

.watermark {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 10rem;
  font-weight: 900;
  color: rgba(0,0,0,0.03);
  pointer-events: none;
}

/* HEADER */
.dossier-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

.red-stamp {
  color: var(--accent);
  border: 4px double var(--accent);
  padding: 5px 16px;
  font-weight: 900;
  display: inline-block;
  transform: rotate(-4deg);
}

.case-id {
  display: block;
  margin-top: 10px;
  font-size: 0.8rem;
  letter-spacing: 2px;
}

h1 {
  font-size: 2.3rem;
  margin: 25px 0 10px;
  text-transform: uppercase;
}

.subtitle {
  color: var(--muted);
  font-size: 0.85rem;
}

.header-line {
  height: 3px;
  background: var(--ink);
  margin-top: 25px;
}

/* SECTIONS */
.dossier-section {
  background: var(--glass);
  border: 1px solid rgba(0,0,0,0.1);
  padding: 40px;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
}

.section-tag {
  font-size: 0.7rem;
  color: #777;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

h3 {
  color: var(--accent);
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* LISTS */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 12px;
}

ul li::before {
  content: "—";
  position: absolute;
  left: 0;
}

/* BOXES */
.staging-box {
  border-left: 6px solid var(--accent);
  background: white;
  padding: 20px;
  margin-top: 25px;
}

.warning-text {
  color: var(--accent);
  margin-bottom: 10px;
}

.log-grid {
  display: grid;
  gap: 12px;
  margin-top: 15px;
}

.log-item {
  padding: 14px;
}

.recovered {
  background: #f5f5f5;
  border-left: 4px solid #4caf50;
}

/* DETECTIVE NOTE */
.detective-note {
  margin-top: 30px;
  padding: 20px;
  background: #fff;
  border: 1px dashed #999;
}

/* CLUES */
.clue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.clue-card {
  background: white;
  border: 1px dashed #999;
  padding: 20px;
}

.clue-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 900;
  color: #777;
  margin-bottom: 10px;
}

.mini-document {
  margin-top: 15px;
  padding: 15px;
  background: #f6f6f6;
  border-left: 3px solid var(--accent);
  font-size: 0.8rem;
  line-height: 1.7;
}

.note-box {
  font-style: italic;
}

/* TIMELINE */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 120px 20px 1fr;
  gap: 15px;
  align-items: start;
}

.timeline-time {
  font-weight: bold;
  color: var(--accent);
}

.timeline-line {
  width: 2px;
  background: var(--accent);
  height: 100%;
  margin: auto;
}

.timeline-event {
  background: white;
  padding: 14px;
  border: 1px solid #ddd;
}

/* FOOTER */
.action-footer {
  text-align: center;
  margin-top: 70px;
  padding-top: 40px;
  border-top: 2px dashed #444;
  position: relative;
  z-index: 2;
}

.briefing-note {
  font-style: italic;
  margin-bottom: 25px;
}

.btn-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-btn {
  text-decoration: none;
  padding: 14px 28px;
  font-weight: 900;
  letter-spacing: 1px;
  transition: 0.2s;
}

.primary {
  background: var(--ink);
  color: white;
}

.secondary {
  border: 2px solid var(--ink);
  color: var(--ink);
}

.nav-btn:hover {
  transform: translateY(-2px);
}

/* MOBILE */
@media (max-width: 700px) {
  .incident-container {
    padding: 40px 20px;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }

  .timeline-line {
    display: none;
  }

  .btn-group {
    flex-direction: column;
  }

  .case-navigation {
    flex-direction: column;
  }
}
</style>
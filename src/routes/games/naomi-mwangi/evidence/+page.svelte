<script>
  let selectedEvidence = "receipt";

  const evidenceItems = [
    {
      id: "scarf",
      type: "Physical Evidence",
      title: "Silk Scarf (Ligature)",
      tag: "EVIDENCE #001",
      icon: "🧣",
      color: "#ff5555",
      description:
        "A silk scarf recovered from the victim’s neck, confirmed as the weapon used in the strangulation.",
      forensics:
        "Fiber analysis matches properties of scarf owned by Sharon Muli. No usable fingerprints recovered due to fabric contamination and handling during discovery.",
      contradiction:
        "How did Sharon’s scarf end up as the murder weapon if she claims she never left the balcony area?"
    },
    {
      id: "fiber",
      type: "Forensic Trace",
      title: "Fiber Match Report",
      tag: "EVIDENCE #002",
      icon: "🧬",
      color: "#bd93f9",
      description:
        "Microscopic fiber traces recovered from the victim’s clothing and neck area.",
      forensics:
        "Lab confirms high-confidence match to scarf fibers belonging to Sharon K. Secondary trace contamination suggests brief transfer window prior to death.",
      contradiction:
        "Transfer of fibers indicates close physical contact during the estimated time of death."
    },
    {
      id: "cctv",
      type: "Surveillance Footage",
      title: "Apartment CCTV Irregularity",
      tag: "EVIDENCE #003",
      icon: "🎥",
      color: "#50fa7b",
      description:
        "Apartment corridor CCTV shows conflicting exit times among suspects.",
      forensics:
        "Brian Mwangi recorded leaving at 12:00 AM, but timestamp offset analysis suggests footage delay of approximately 10 minutes. Activity inside Unit 4B not fully captured due to camera blind spot.",
      contradiction:
        "Was Brian already inside during the blackout window despite appearing to leave?"
    },
    {
      id: "phone",
      type: "Digital Communication",
      title: "Final Phone Call Record",
      tag: "EVIDENCE #004",
      icon: "📞",
      color: "#f1fa8c",
      description:
        "A 4-minute outgoing call from Naomi Mwangi to Joyce M. shortly before death.",
      forensics:
        "Call initiated at 12:20 AM and ended just before estimated time of death window. No background noise detected.",
      contradiction:
        "Why did Naomi call Joyce moments before her death?"
    },
    {
      id: "chat",
      type: "Recovered Messages",
      title: "Deleted Chat Fragment",
      tag: "EVIDENCE #005",
      icon: "💬",
      color: "#ffb86c",
      description:
        "Partial chat logs recovered from Naomi’s device showing emotional exchanges.",
      forensics: `Naomi:
"I can't keep pretending around them. It hurts. I want to be with you"

J:
"I'm not ready. Don't tell them. Let's talk about it first"

Metadata shows contact saved as "J..."`,
      contradiction:
        "Was Naomi planning to expose someone?"
    },
    {
      id: "message",
      type: "Unsent Message",
      title: "Brian’s Draft Text",
      tag: "EVIDENCE #006",
      icon: "✉️",
      color: "#ff5555",
      description:
        "A threatening unsent message found in Brian Mwangi’s phone drafts.",
      forensics:
        `"If you won't come back to me, then he won't have you either."`,
      contradiction:
        "Intent without action—premeditation or impulse?"
    },
    {
      id: "timeline",
      type: "Case Timeline",
      title: "Reconstructed Timeline",
      tag: "EVIDENCE #007",
      icon: "⏱️",
      color: "#8be9fd",
      description:
        "Full reconstruction of the night’s events.",
      forensics: `9:00 PM — Gathering begins  
10:30 PM — Argument  
11:00 PM — Joyce leaves  
11:30 PM — Photo taken  
12:00 AM — Brian exits  
12:20 AM — Call made  
12:30–12:50 AM — TOD window  
7:30 AM — Body discovered`,
      contradiction:
        "At least one false alibi exists."
    }
  ];
</script>

<div class="desk-surface">

  <div class="evidence-header">
    <span class="stamp">CONFIDENTIAL DOSSIER</span>
    <h1>CASE FILE #002 // NAOMI MWANGI</h1>
    <p class="case-number">FORENSIC EVIDENCE LOCKER | RIVERSIDE COURT INCIDENT</p>
  </div>

  <!-- ✅ FIXED NAVIGATION -->
  <nav class="case-nav">
    <a href="/games/naomi-mwangi" class="nav-link">INCIDENT REPORT</a>
    <a href="/games/naomi-mwangi/suspects" class="nav-link">SUSPECTS</a>
    <a href="/games/naomi-mwangi/evidence" class="nav-link active">EVIDENCE</a>
    <a href="/games/naomi-mwangi/accuse" class="nav-link">ACCUSATION</a>
  </nav>

  <div class="evidence-grid">
    {#each evidenceItems as item}
      <div class="evidence-item">

        <div class="artifact-graphic" style="--accent: {item.color}">
          <div class="graphic-header">{item.type}</div>

          <div class="graphic-main">
            <span class="evidence-icon">{item.icon}</span>
            <div class="dna-sequence"></div>
          </div>

          <div class="graphic-footer">{item.tag}</div>
        </div>

        <div class="analysis-card">
          <h2>{item.title}</h2>

          <p><strong>FIELD SUMMARY:</strong><br />{item.description}</p>

          <div class="forensic-box">
            <strong>FORENSIC ANALYSIS:</strong>
            <p>{item.forensics}</p>
          </div>

          <p class="red-pen">{item.contradiction}</p>
        </div>

      </div>
    {/each}
  </div>

  <div class="raw-logs-section">
    <div class="printout">
      <h3>TIMELINE VERIFICATION</h3>
      <p>
        All suspects present between 11:00 PM and 12:30 AM. Overlapping alibis detected.
      </p>
    </div>

    <div class="printout">
      <h3>FORENSIC SUMMARY</h3>
      <p>
        Ligature strangulation confirmed. No forced entry. Victim likely knew attacker.
      </p>
    </div>
  </div>

  <div class="footer-nav">
    <a href="/games/naomi-mwangi/accuse" class="proceed-btn">
      PROCEED TO ACCUSATION ⚖️
    </a>
  </div>

</div>

<style>
  .desk-surface {
    background: #0a0a0a;
    min-height: 100vh;
    padding: 60px 20px;
    color: #e8dcc4;
    font-family: 'Courier New', monospace;
  }

  /* ✅ FIX: NAV ALWAYS CLICKABLE */
  .case-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 40px 0;
    padding: 0 10px;
    position: relative;
    z-index: 50; /* IMPORTANT FIX */
  }

  .nav-link {
    text-decoration: none;
    color: #e8dcc4;
    padding: 10px 16px;
    border: 1px solid rgba(255,255,255,0.15);
    font-size: 0.7rem;
    letter-spacing: 2px;
    border-radius: 8px;
    transition: all 0.25s ease;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
  }

  .nav-link:hover {
    background: #8b0000;
    border-color: #8b0000;
    transform: translateY(-2px);
  }

  .active {
    background: #8b0000;
    border-color: #8b0000;
  }

  .nav-link:active {
    transform: scale(0.97);
  }

  /* rest unchanged */
  .evidence-grid {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 70px;
  }

  .evidence-item {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
  }

  .artifact-graphic {
    border: 2px solid var(--accent);
    background: #111;
    height: 240px;
    display: flex;
    flex-direction: column;
  }

  .graphic-header {
    background: var(--accent);
    color: black;
    text-align: center;
    font-size: 0.7rem;
    font-weight: bold;
    padding: 5px;
  }

  .graphic-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .evidence-icon { font-size: 4rem; opacity: 0.25; }

  .dna-sequence {
    position: absolute;
    inset: 0;
    opacity: 0.08;
  }

  .graphic-footer {
    border-top: 1px dashed var(--accent);
    text-align: center;
    padding: 8px;
    font-size: 0.75rem;
  }

  .analysis-card {
    background: #e8dcc4;
    color: #111;
    padding: 25px;
  }

  .analysis-card h2 {
    color: #8b0000;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .forensic-box {
    margin: 15px 0;
    padding: 12px;
    border-left: 4px solid #8b0000;
  }

  .red-pen {
    margin-top: 15px;
    color: #8b0000;
    font-style: italic;
  }

  .raw-logs-section {
    max-width: 1000px;
    margin: 60px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .printout {
    background: #f0f0f0;
    color: #111;
    padding: 20px;
  }

  .footer-nav {
    text-align: center;
    margin-top: 70px;
  }

  .proceed-btn {
    background: #8b0000;
    color: white;
    padding: 18px 35px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 6px;
    display: inline-block;
  }

  @media (max-width: 800px) {
    .evidence-item {
      grid-template-columns: 1fr;
    }

    .raw-logs-section {
      grid-template-columns: 1fr;
    }
  }
</style>
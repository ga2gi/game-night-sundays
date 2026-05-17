<script>
  let showFullDossier = $state(false);

  const evidenceItems = [
    {
      id: "receipt",
      type: "Financial Record",
      title: "Café Umoja Receipt",
      tag: "EVIDENCE #001",
      icon: "🧾",
      color: "#ff5555",
      description:
        "Printed receipt recovered from the café point-of-sale system after investigators secured the scene.",
      forensics:
        "Transaction timestamp recorded at 8:05 PM. Payment completed using a bank card registered to Brian Kamau.",
      contradiction:
        "The transaction time differs from parts of Brian Kamau’s statement regarding his movements that evening."
    },

    {
      id: "cctv",
      type: "Surveillance Footage",
      title: "CCTV Backup Fragment",
      tag: "EVIDENCE #002",
      icon: "🎥",
      color: "#bd93f9",
      description:
        "Partial surveillance footage recovered from a damaged café backup storage drive.",
      forensics:
        "Video timestamp places Janet Otieno near the service counter shortly before the interruption of the recording feed.",
      contradiction:
        "The recovered footage ends before the incident occurred and does not confirm later movements."
    },

    {
      id: "note",
      type: "Handwritten Document",
      title: "Recovered Threat Note",
      tag: "EVIDENCE #003",
      icon: "📝",
      color: "#f1fa8c",
      description:
        "Handwritten note discovered near the rear service station after the scene was processed.",
      forensics:
        "Document analysis confirms the note was written recently. Signature marked only with the letter 'E'.",
      contradiction:
        "Investigators could not confirm who authored the note or whether it was delivered to the victim directly.",
      excerpt: `David —

If you don't pay me back by tonight,
you'll regret it.

This is your last warning.

— E`
    },

    {
      id: "messages",
      type: "Mobile Messages",
      title: "Recovered Conversation Log",
      tag: "EVIDENCE #004",
      icon: "📱",
      color: "#8be9fd",
      description:
        "Extracted mobile phone conversation between David Mwangi and James Mwangi recovered during digital analysis.",
      forensics:
        "Messages exchanged between 7:55 PM and 7:57 PM reference overdue payments and a scheduled meeting that night.",
      contradiction:
        "Investigators could not determine whether the discussion escalated further after the final recovered message.",
      excerpt: `[7:55 PM] David:
Please, give me more time.

[7:56 PM] James Mwangi:
No more excuses. Tonight is the deadline.

[7:57 PM] David:
I'll get the money, just don't come here.`
    },

    {
      id: "newspaper",
      type: "Media Archive",
      title: "Local Newspaper Clipping",
      tag: "EVIDENCE #005",
      icon: "📰",
      color: "#ffb86c",
      description:
        "Newspaper article referencing a public dispute between Esther Njeri and David Mwangi over unpaid promotional work.",
      forensics:
        "Witness accounts cited in the article describe an argument that reportedly occurred earlier in the week.",
      contradiction:
        "No official complaint or legal action related to the dispute was filed before the incident."
    },

    {
      id: "timeline",
      type: "Timeline Reconstruction",
      title: "Incident Timeline Board",
      tag: "EVIDENCE #006",
      icon: "⏰",
      color: "#50fa7b",
      description:
        "Timeline assembled using witness interviews, digital records, and scene analysis.",
      forensics:
        "All four suspects were confirmed present inside Café Umoja between 7:45 PM and 8:20 PM.",
      contradiction:
        "Witness statements conflict regarding movements during the blackout period."
    },

    {
      id: "system",
      type: "Digital Forensics",
      title: "POS Network Activity Log",
      tag: "EVIDENCE #007",
      icon: "💻",
      color: "#caa9fa",
      description:
        "Internal café network logs recovered from the point-of-sale infrastructure.",
      forensics:
        "System records show interrupted synchronization during the power outage and unidentified network activity remaining active.",
      contradiction:
        "Ownership of the connected device could not be verified."
    }
  ];
</script>

<div class="desk-surface">

  <!-- HEADER -->
  <div class="evidence-header">
    <span class="stamp">CONFIDENTIAL CASE FILE</span>

    <h1>CHM-2026-001 // EVIDENCE LOCKER</h1>

    <p class="case-number">
      VICTIM: DAVID MWANGI | STATUS: ACTIVE INVESTIGATION
    </p>
  </div>

  <!-- NAVIGATION -->
  <div class="case-nav">
    <a href="/games/coffee-house-murder" class="nav-link">
      INCIDENT REPORT
    </a>

    <a href="/games/coffee-house-murder/suspects" class="nav-link">
      SUSPECTS
    </a>

    <a
      href="/games/coffee-house-murder/evidence"
      class="nav-link active"
    >
      EVIDENCE
    </a>

    <a href="/games/coffee-house-murder/accuse" class="nav-link">
      ACCUSATION
    </a>
  </div>

  <!-- EVIDENCE GRID -->
  <div class="evidence-grid">
    {#each evidenceItems as item}
      <div class="evidence-item">

        <!-- LEFT PANEL -->
        <div
          class="artifact-graphic"
          style="--accent: {item.color}"
        >
          <div class="graphic-header">{item.type}</div>

          <div class="graphic-main">
            <span class="evidence-icon">{item.icon}</span>

            <div class="dna-sequence"></div>
          </div>

          <div class="graphic-footer">{item.tag}</div>
        </div>

        <!-- RIGHT PANEL -->
        <div class="analysis-card">
          <h2>{item.title}</h2>

          <p>
            <strong>FIELD DESCRIPTION:</strong>
            {item.description}
          </p>

          {#if item.excerpt}
            <div class="evidence-excerpt">
              <strong>RECOVERED CONTENT:</strong>

              <pre>{item.excerpt}</pre>
            </div>
          {/if}

          <div class="forensic-box">
            <strong>LAB ANALYSIS:</strong>

            <p>{item.forensics}</p>
          </div>

          <p class="red-pen">
            {item.contradiction}
          </p>
        </div>

      </div>
    {/each}
  </div>

  <!-- RAW LOGS -->
  <div class="raw-logs-section">

    <div class="printout">
      <h3>TIMELINE SUMMARY</h3>

      <p>
        7:45 PM — All known individuals arrive at Café Umoja.
        <br /><br />

        8:00 PM — Witnesses report an argument inside the café.
        <br /><br />

        8:15 PM — Power interruption affects the premises for approximately
        two minutes.
        <br /><br />

        8:20 PM — David Mwangi discovered near the service counter.
      </p>
    </div>

    <div class="printout">
      <h3>INVESTIGATOR NOTE</h3>

      <p>
        Multiple witness accounts conflict regarding movements during the
        blackout period. Physical evidence, digital records, and personal
        statements should all be reviewed before reaching a conclusion.
      </p>
    </div>

  </div>

  <!-- FOOTER -->
  <div class="footer-nav">
    <a
      href="/games/coffee-house-murder/accuse"
      class="proceed-btn"
    >
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
    background-image:
      radial-gradient(circle at 50% 50%, rgba(20,20,20,0.8), #0a0a0a),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 1px,
        rgba(255,255,255,0.02) 1px,
        rgba(255,255,255,0.02) 2px
      );
  }

  /* HEADER */

  .evidence-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .stamp {
    border: 2px solid #8b0000;
    color: #8b0000;
    padding: 5px 10px;
    display: inline-block;
    transform: rotate(-5deg);
    font-weight: bold;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 1.8rem;
    margin: 10px 0;
    letter-spacing: 1px;
  }

  .case-number {
    font-size: 0.8rem;
    color: #aaa;
  }

  /* NAV */

  .case-nav {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin: 40px 0;
  }

  .nav-link {
    text-decoration: none;
    color: #e8dcc4;
    padding: 10px 14px;
    border: 1px solid rgba(255,255,255,0.15);
    font-size: 0.7rem;
    letter-spacing: 2px;
    transition: 0.2s;
  }

  .nav-link:hover {
    background: #8b0000;
    border-color: #8b0000;
  }

  .active {
    background: #8b0000;
    border-color: #8b0000;
  }

  /* GRID */

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

  /* LEFT PANEL */

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

  .evidence-icon {
    font-size: 4rem;
    opacity: 0.25;
  }

  .dna-sequence {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 20px,
      var(--accent) 20px,
      var(--accent) 21px
    );
    opacity: 0.08;
  }

  .graphic-footer {
    border-top: 1px dashed var(--accent);
    text-align: center;
    padding: 8px;
    font-size: 0.75rem;
    color: var(--accent);
  }

  /* RIGHT PANEL */

  .analysis-card {
    background: #e8dcc4;
    color: #111;
    padding: 25px;
  }

  .analysis-card h2 {
    color: #8b0000;
    margin-top: 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .evidence-excerpt {
    margin: 18px 0;
    padding: 15px;
    background: rgba(0,0,0,0.05);
    border: 1px dashed #999;
  }

  .evidence-excerpt pre {
    white-space: pre-wrap;
    font-family: 'Courier New', monospace;
    margin: 12px 0 0;
    line-height: 1.7;
    font-size: 0.82rem;
  }

  .forensic-box {
    margin: 15px 0;
    padding: 12px;
    border-left: 4px solid #8b0000;
    background: rgba(0,0,0,0.05);
  }

  .red-pen {
    margin-top: 15px;
    color: #8b0000;
    font-style: italic;
    border-top: 1px dashed #8b0000;
    padding-top: 10px;
  }

  /* RAW LOGS */

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
    font-size: 0.85rem;
    line-height: 1.7;
  }

  .printout h3 {
    margin-top: 0;
    color: #8b0000;
  }

  /* FOOTER */

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
  }

  .proceed-btn:hover {
    background: red;
  }

  /* MOBILE */

  @media (max-width: 800px) {
    .evidence-item {
      grid-template-columns: 1fr;
    }

    .raw-logs-section {
      grid-template-columns: 1fr;
    }
  }
</style>
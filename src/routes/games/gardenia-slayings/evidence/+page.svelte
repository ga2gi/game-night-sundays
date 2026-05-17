<script>
  const evidenceItems = [
    {
      id: "glove",
      type: "Physical Artifact",
      title: "Monogrammed Running Glove",
      tag: "EVIDENCE #001",
      icon: "🧤",
      color: "#ff5555",
      description:
        "Recovered 3ft from the victim's body. Left-hand running glove, monogrammed 'M.K.'. Positioned close to the torso in a way that suggests deliberate placement rather than random loss during movement.",
      forensics:
        "Blood matches Susan Amani. Trace chemical analysis detected a light cleaning solvent inconsistent with known household products associated with Michael Korir. No usable fingerprints recovered. Fibre traces indicate the glove was handled after initial contamination.",
      contradiction:
        "If this item was previously reported lost, how did it resurface at the scene in a condition suggesting recent handling—and what explains the attempt to clean or alter its surface?"
    },
    {
      id: "tire",
      type: "Physical Impression",
      title: "Luxury Sedan Tire Tracks",
      tag: "EVIDENCE #002",
      icon: "🚗",
      color: "#bd93f9",
      description:
        "Recovered from soft mud near the east trail service entrance. The pattern indicates controlled vehicle movement rather than erratic motion.",
      forensics:
        "Consistent with a Mercedes E-Class. Wear pattern and tread alignment match diplomatic fleet specifications. Depth variations suggest the vehicle paused briefly before repositioning.",
      contradiction:
        "A diplomatic vehicle is not officially recorded in this area during the time window. However, ignition logs and surveillance gaps create an unresolved overlap in timelines."
    },
    {
      id: "note",
      type: "Document",
      title: "The 'No Encore' Note",
      tag: "EVIDENCE #003",
      icon: "📝",
      color: "#f1fa8c",
      description:
        "Recovered beneath a white gardenia placed on the victim’s chest. The paper is clean, dry, and shows no signs of environmental exposure.",
      forensics:
        "Handwritten phrase: 'No encore for the runner.' Forensic handwriting analysis suggests intentional disguise of natural writing style. No identifiable fingerprints or biological residue were recovered.",
      contradiction:
        "The phrase appears in a private research context not publicly accessible. Whether this indicates authorship or replication remains unclear."
    },
    {
      id: "botany",
      type: "Forensic Report",
      title: "Rare Gardenia Pollen",
      tag: "REPORT #044",
      icon: "🔬",
      color: "#50fa7b",
      description:
        "Microscopic pollen traces recovered from the victim’s clothing, concentrated around upper fabric layers.",
      forensics:
        "Matches a rare cultivated gardenia strain distributed through a limited supply chain involving three known sources within Kiambu County: diplomatic grounds, a city conservation facility, and a private residential garden.",
      contradiction:
        "The floral trace connects multiple controlled environments, but does not indicate direct origin of contact—only proximity within an unspecified timeframe."
    }
  ];
</script>

<div class="desk-surface">
  <div class="evidence-header">
    <span class="stamp">CONFIDENTIAL CASE FILE</span>

    <h1>RRP-2026-088 // EVIDENCE LOCKER</h1>

    <p class="case-number">
      VICTIM: SUSAN AMANI | STATUS: UNRESOLVED
    </p>
  </div>

  <!-- CASE NAVIGATION -->
  <div class="case-nav">
    <a
      href="/games/gardenia-slayings"
      class="nav-link"
    >
      INCIDENT REPORT
    </a>

    <a
      href="/games/gardenia-slayings/suspects"
      class="nav-link"
    >
      SUSPECTS
    </a>

    <a
      href="/games/gardenia-slayings/evidence"
      class="nav-link active"
    >
      EVIDENCE
    </a>

    <a
      href="/games/gardenia-slayings/accuse"
      class="nav-link"
    >
      FINAL ACCUSATION
    </a>
  </div>

  <div class="evidence-grid">
    {#each evidenceItems as item}
      <div class="evidence-item">
        <div
          class="artifact-graphic"
          style="--accent: {item.color}"
        >
          <div class="graphic-header">
            {item.type}
          </div>

          <div class="graphic-main">
            <span class="evidence-icon">
              {item.icon}
            </span>

            <div class="dna-sequence"></div>
          </div>

          <div class="graphic-footer">
            {item.tag}
          </div>
        </div>

        <div class="analysis-card">
          <h2>{item.title}</h2>

          <div class="card-body">
            <p>
              <strong>FIELD DESCRIPTION:</strong>
              {item.description}
            </p>

            <div class="forensic-box">
              <p>
                <strong>LAB FINDINGS:</strong>
                {item.forensics}
              </p>
            </div>

            <p class="red-pen">
              {item.contradiction}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="raw-logs-section">
    <div class="printout">
      <h3>DIGITAL FOOTPRINT // LIBRARY WI-FI</h3>

      <p>
        Diplomatic garage CCTV outage was triggered via
        remote administrative access from a public library
        network. System logs indicate unauthorized
        credentials were used during the 5:50–6:50 a.m.
        window. Visitor records are incomplete due to a
        printer malfunction, leaving the access source
        unverified.
      </p>
    </div>

    <div class="printout">
      <h3>MEDICAL EXAMINER NOTES</h3>

      <p>
        Time of death estimated at 6:07 a.m. based on
        physiological indicators and device sync cutoff.
        The abdominal incision shows controlled execution,
        consistent with deliberate technique, done by
        someone calm and practised but not necessarily
        medically trained.
      </p>
    </div>
  </div>

  <div class="footer-nav">
    <a
      href="/games/gardenia-slayings/accuse"
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
      radial-gradient(
        circle at 50% 50%,
        rgba(20, 20, 20, 0.8) 0%,
        #0a0a0a 100%
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 1px,
        rgba(255,255,255,0.02) 1px,
        rgba(255,255,255,0.02) 2px
      );
  }

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
    margin-bottom: 10px;
    font-weight: bold;
  }

  /* NAVIGATION */

  .case-nav {
    max-width: 1000px;
    margin: 0 auto 60px;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }

  .nav-link {
    text-decoration: none;
    color: #e8dcc4;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.03);
    padding: 12px 18px;
    font-size: 0.75rem;
    letter-spacing: 2px;
    font-weight: bold;
    transition: 0.2s ease;
  }

  .nav-link:hover {
    background: #8b0000;
    border-color: #8b0000;
    transform: translateY(-2px);
  }

  .nav-link.active {
    background: #8b0000;
    border-color: #8b0000;
    color: white;
    box-shadow: 0 0 20px rgba(139, 0, 0, 0.4);
  }

  .evidence-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  .evidence-item {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 40px;
    align-items: center;
  }

  .artifact-graphic {
    background: #1a1a1a;
    border: 2px solid var(--accent);
    height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    overflow: hidden;
  }

  .graphic-header {
    background: var(--accent);
    color: #000;
    font-size: 0.7rem;
    font-weight: bold;
    padding: 4px;
    text-align: center;
    text-transform: uppercase;
  }

  .graphic-main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .evidence-icon {
    font-size: 5rem;
    filter: grayscale(1) contrast(1.5);
    opacity: 0.3;
  }

  .dna-sequence {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 20px,
      var(--accent) 20px,
      var(--accent) 21px
    );
    opacity: 0.1;
  }

  .graphic-footer {
    border-top: 1px dashed var(--accent);
    color: var(--accent);
    font-size: 0.8rem;
    padding: 10px;
    text-align: center;
    background: rgba(0,0,0,0.3);
  }

  .analysis-card {
    background: #e8dcc4;
    color: #1b1b1b;
    padding: 30px;
    box-shadow: 10px 10px 0 #333;
  }

  .analysis-card h2 {
    margin-top: 0;
    color: #8b0000;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .forensic-box {
    background: rgba(0,0,0,0.08);
    padding: 15px;
    margin: 15px 0;
    border-left: 5px solid #8b0000;
  }

  .red-pen {
    color: #8b0000;
    font-weight: bold;
    font-style: italic;
    margin-top: 20px;
    border-top: 1px dashed #8b0000;
    padding-top: 10px;
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
    padding: 25px;
    font-size: 0.85rem;
    border: 1px solid #ccc;
  }

  .footer-nav {
    text-align: center;
    margin: 80px 0 40px;
  }

  .proceed-btn {
    background: #8b0000;
    color: white;
    padding: 20px 40px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 5px 5px 0 #333;
    transition: 0.2s;
  }

  .proceed-btn:hover {
    background: #ff0000;
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #333;
  }

  @media (max-width: 800px) {
    .evidence-item {
      grid-template-columns: 1fr;
    }

    .artifact-graphic {
      max-width: 300px;
      margin: 0 auto;
    }

    .raw-logs-section {
      grid-template-columns: 1fr;
    }

    .case-nav {
      gap: 10px;
    }

    .nav-link {
      width: 100%;
      text-align: center;
    }
  }
</style>
<script>
  const evidenceItems = [
    {
      id: "cyanide",
      type: "Chemical Analysis",
      title: "Cyanide Residue on Whiskey Glass",
      tag: "EVIDENCE #001",
      icon: "🧪",
      color: "#50fa7b",
      description:
        "Recovered from the bottom of a crystal vintage Macallan 25 whiskey glass found on the desk. The poison was applied as a clear, dehydrated film coating the inside bottom of the glass before the liquid was poured.",
      forensics:
        "Cyanide concentration analysis confirms 99.7% purity. The rehydration process created a nearly undetectable compound when whiskey was added. No fingerprints recovered from the glass itself due to condensation degradation. Multiple fingerprints found on adjacent glasses and tray.",
      investigatorNote: "🔍 KEY QUESTION: Who would have the precision and knowledge to apply a dried cyanide film to glass without leaving traces? This requires steady hands and chemical understanding — not a skill everyone possesses."
    },
    {
      id: "notebook",
      type: "Document",
      title: "Liza Mueni's Notebook Page",
      tag: "EVIDENCE #002",
      icon: "📓",
      color: "#f1fa8c",
      description:
        "A torn page from Liza Mueni's personal notebook. Initially missing from the crime scene, it was later found in Sylvia Mwende's possession. The page contains critical information identifying Liza's killer.",
      forensics:
        "Handwriting analysis confirms it belongs to Liza Mueni. Reads: 'W.M. took KSH.50k. Confronted him. He panicked. If I die, check his magic trunk.' The paper shows evidence of being folded and stored in a coat pocket after the murder.",
      investigatorNote: "🔍 KEY CLUE: 'W.M.' are initials. 'Check his magic trunk' is a direct instruction. Who in this case is known for magic and has a trunk?"
    },
    {
      id: "origami",
      type: "Physical Artifact",
      title: "Partial Origami Crane",
      tag: "EVIDENCE #003",
      icon: "🦢",
      color: "#bd93f9",
      description:
        "Found under the victim's right fingernail. A single folded wing from an origami crane. No usable fingerprints were recovered from the origami due to paper texture.",
      forensics:
        "Paper stock matches the artisan paper available in the 47th-floor design studio. The folding technique is consistent with all seven suspects' shared origami practice. An identical partial crane was found in Diana Kamau's bag.",
      investigatorNote: "🔍 KEY QUESTION: If ALL seven suspects practice origami, why would the killer leave this clue? Could it be deliberate misdirection to frame someone else?"
    },
    {
      id: "matchbook",
      type: "Document",
      title: "Arcadian Lounge Matchbook",
      tag: "EVIDENCE #004",
      icon: "🔥",
      color: "#ff5555",
      description:
        "Found in the victim's left jacket pocket. A matchbook from 'The Arcadian Lounge' - a now-closed bar connected to the Zoe Muli case and the Arcadian Apartments fire.",
      forensics:
        "Inside the matchbook: a phone number written in pen. The number traces to Marcus Mutugi's office line. The matchbook was printed approximately 8 years ago, matching the timeframe of the Arcadian Apartments incident.",
      investigatorNote: "🔍 KEY QUESTION: Why would Salim carry a matchbook with Marcus's phone number? Could this be planted evidence to frame Marcus?"
    },
    {
      id: "letter",
      type: "Document",
      title: "The Confession Letter",
      tag: "EVIDENCE #005",
      icon: "✉️",
      color: "#ff79c6",
      description:
        "Found in Salim's office safe. A typed letter dated the day before the murder, reading: 'If I am found dead, I want it known that I planned to kill Salim myself. He destroyed my career.' The signature is torn away.",
      forensics:
        "Paper matches the gala's official stationery. The signature is deliberately removed. A single latent fingerprint from Sylvia Mwende was recovered from the envelope. Sylvia admits handling the envelope after the murder. Typing matches a plastic lettering stencil available to all attendees.",
      investigatorNote: "🔍 KEY QUESTION: A typed confession with a torn signature and Sylvia's fingerprint? Too convenient. Who would benefit from framing Sylvia? And who would have access to a typewriter?"
    },
    {
      id: "trunk",
      type: "Physical Artifact",
      title: "Walter Mulandi's Magic Trunk",
      tag: "EVIDENCE #006",
      icon: "🗃️",
      color: "#ffb86c",
      description:
        "Located in the coat check area. A magic trunk containing incriminating evidence. Walter had the trunk key on his person. The trunk was accessible to all attendees during the gala.",
      forensics:
        "Inside the trunk: Liza Mueni's bloodstained scarf (forensic analysis confirms it matches her blood type) and a vial of cyanide with identical chemical signature to the poison used on Salim. The trunk also contained several stage props and personal effects consistent with Walter's magician background.",
      investigatorNote: "🔍 SMOKING GUN: Liza's bloodstained scarf + cyanide matching the murder weapon + trunk key on Walter's person. This is the strongest physical evidence in the case."
    }
  ];
</script>

<div class="desk-surface">
  <div class="evidence-header">
    <span class="stamp">CONFIDENTIAL CASE FILE</span>

    <h1>RRP-2026-088 // EVIDENCE LOCKER</h1>

    <p class="case-number">
      VICTIM: SALIM JUMA | STATUS: UNRESOLVED
    </p>
  </div>

  <!-- CASE NAVIGATION -->
  <div class="case-nav">
    <a
      href="/games/echoes-in-the-tower"
      class="nav-link"
    >
      INCIDENT REPORT
    </a>

    <a
      href="/games/echoes-in-the-tower/suspects"
      class="nav-link"
    >
      SUSPECTS
    </a>

    <a
      href="/games/echoes-in-the-tower/evidence"
      class="nav-link active"
    >
      EVIDENCE
    </a>

    <a
      href="/games/echoes-in-the-tower/accuse"
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

            <!-- INVESTIGATOR NOTE -->
            <div class="investigator-note">
              <span class="note-icon">🔍</span>
              <div>
                <strong>INVESTIGATOR NOTE:</strong>
                <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #333;">
                  {item.investigatorNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="raw-logs-section">
    <div class="printout">
      <h3>CLOCK DRIFT ANALYSIS // SYSTEM LOGS</h3>

      <p>
        Due to a severe electrical storm at 8:00 p.m., the building's central server suffered a split-brain synchronisation failure. The digital deadbolt log, CCTV network, and cellular tower pings drifted independently. Investigators calculate a ±9-minute linear variance between all recorded timestamps. The exact chronological sequence is objectively unknowable.
      </p>
      <p style="margin-top: 10px; color: #8b0000; font-weight: bold;">
        ⚠️ TIME OF DEATH: 8:30–8:50 p.m. (with drift, any suspect could have administered poison within their plausible timeline)
      </p>
      <div class="investigator-tip" style="margin-top: 15px; background: rgba(139,0,0,0.08); padding: 12px; border-left: 3px solid #8b0000;">
        <strong>🔍 INVESTIGATOR TIP:</strong> The clock drift makes timelines unreliable. Focus on <strong>who had the skills</strong> to apply the poison and <strong>who had the strongest motive</strong>.
      </div>
    </div>

    <div class="printout">
      <h3>MEDICAL EXAMINER REPORT</h3>

      <p>
        Time of death: 8:30–8:50 p.m. (accounting for system clock drift). Cause: Cyanide poisoning. The poison was not in the bottle nor injected through the cork. Applied as a clear, dehydrated film coating the inside bottom of the glass before the liquid was poured. No defensive wounds. Victim slumped over the desk. Toxicology window narrows to cyanide ingestion within 5-10 minutes of death.
      </p>
      <p style="margin-top: 10px; color: #8b0000; font-weight: bold;">
        ⚠️ CONDITION: Victim slumped over desk. No signs of struggle. Clean execution.
      </p>
      <div class="investigator-tip" style="margin-top: 15px; background: rgba(139,0,0,0.08); padding: 12px; border-left: 3px solid #8b0000;">
        <strong>🔍 INVESTIGATOR TIP:</strong> "Clean execution" suggests the killer was <strong>calm and precise</strong> — not panicked or rushed. This points to someone with <strong>performer's control</strong>.
      </div>
    </div>

    <div class="printout">
      <h3>STENCIL NOTE ANALYSIS</h3>

      <p>
        A typed note taped under the desk reads: "The price of an echo is silence." Forensic analysis confirms it was created using a plastic lettering stencil. An identical stencil kit was available to all attendees in the open-access 47th-floor design studio.
      </p>
      <p style="margin-top: 10px; color: #666;">
        🔍 Pressure pattern analysis shows consistency with both Marcus Mutugi's disguised handwriting and Walter Mulandi's precise stage magician hand movements.
      </p>
      <div class="investigator-tip" style="margin-top: 15px; background: rgba(139,0,0,0.08); padding: 12px; border-left: 3px solid #8b0000;">
        <strong>🔍 INVESTIGATOR TIP:</strong> Two suspects match the pressure patterns. One is a prosecutor trying to disguise his handwriting. The other is a magician used to <strong>precise hand movements</strong>.
      </div>
    </div>

    <div class="printout">
      <h3>CCTV & WITNESS STATEMENTS</h3>

      <p>
        CCTV from logged 8:02 shows Walter and Birdie standing on either side of the service cart. Walter adjusted the tray of glasses. Birdie wiped a spill off the tray. Both their fingerprints were recovered from the underside of the tray. Neither left prints on the glasses themselves.
      </p>
      <p style="margin-top: 10px; color: #666;">
        👤 Catering staff reports: Sharon and Diana near service cart. Sharon gave Diana a small glass vial. Both placed fingerprints on the tray. A separate witness places Walter near the ice bucket at 8:02 p.m.
      </p>
      <div class="investigator-tip" style="margin-top: 15px; background: rgba(139,0,0,0.08); padding: 12px; border-left: 3px solid #8b0000;">
        <strong>🔍 INVESTIGATOR TIP:</strong> Walter was <strong>adjusting the tray</strong> — the exact moment the poisoned glass would need to be positioned. Birdie's presence created <strong>fingerprint symmetry</strong> that obscured his handling.
      </div>
    </div>
  </div>

  <!-- KEY EVIDENCE SUMMARY -->
  <div class="key-summary">
    <h3>🔍 EVIDENCE THAT POINTS TO THE KILLER</h3>
    <div class="summary-grid">
      <div class="summary-item">
        <span class="summary-icon">🧪</span>
        <div>
          <strong>The Poison Method</strong>
          <p>Dried cyanide film requires <span class="highlight">precision and chemical knowledge</span></p>
        </div>
      </div>
      <div class="summary-item">
        <span class="summary-icon">📓</span>
        <div>
          <strong>Liza's Notebook</strong>
          <p>Directly names <span class="highlight">"W.M."</span> and says to <span class="highlight">"check his magic trunk"</span></p>
        </div>
      </div>
      <div class="summary-item">
        <span class="summary-icon">🗃️</span>
        <div>
          <strong>The Magic Trunk</strong>
          <p>Contains <span class="highlight">Liza's bloodstained scarf</span> and <span class="highlight">cyanide</span> matching the murder weapon</p>
        </div>
      </div>
      <div class="summary-item">
        <span class="summary-icon">🎭</span>
        <div>
          <strong>Salim's Last Words</strong>
          <p>"<span class="highlight">Old timer</span>" from the "<span class="highlight">Seaview Circle</span>" handed him the glass and "<span class="highlight">smiled</span>"</p>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-nav">
    <a
      href="/games/echoes-in-the-tower/accuse"
      class="proceed-btn"
    >
      PROCEED TO FINAL ACCUSATION ⚖️
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

  h1 {
    color: #e8dcc4;
    font-size: 2.5rem;
    margin: 20px 0;
    letter-spacing: 4px;
  }

  .case-number {
    color: #888;
    font-size: 0.9rem;
    letter-spacing: 2px;
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

  .card-body p {
    line-height: 1.6;
  }

  .forensic-box {
    background: rgba(0,0,0,0.08);
    padding: 15px;
    margin: 15px 0;
    border-left: 5px solid #8b0000;
  }

  /* INVESTIGATOR NOTE */
  .investigator-note {
    display: flex;
    gap: 12px;
    background: rgba(139, 0, 0, 0.06);
    border-left: 4px solid #8b0000;
    padding: 12px 15px;
    margin-top: 15px;
    border-radius: 2px;
  }

  .note-icon {
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .investigator-note div {
    font-size: 0.85rem;
    color: #333;
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

  .printout h3 {
    color: #8b0000;
    margin-top: 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .printout p {
    line-height: 1.6;
  }

  .investigator-tip {
    background: rgba(139, 0, 0, 0.06);
    padding: 12px;
    border-left: 3px solid #8b0000;
    font-size: 0.85rem;
    color: #333;
  }

  /* KEY SUMMARY */
  .key-summary {
    max-width: 1000px;
    margin: 60px auto 0;
    background: rgba(139, 0, 0, 0.08);
    border: 2px solid #8b0000;
    padding: 30px 40px;
  }

  .key-summary h3 {
    color: #e8dcc4;
    text-align: center;
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 25px;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .summary-item {
    display: flex;
    gap: 15px;
    align-items: flex-start;
    background: rgba(255,255,255,0.05);
    padding: 15px;
    border-radius: 4px;
  }

  .summary-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .summary-item div {
    color: #e8dcc4;
  }

  .summary-item div strong {
    display: block;
    color: #ff6b6b;
    font-size: 0.85rem;
  }

  .summary-item div p {
    margin: 3px 0 0 0;
    font-size: 0.8rem;
    color: #aaa;
    line-height: 1.5;
  }

  .highlight {
    color: #ff6b6b;
    font-weight: bold;
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
    display: inline-block;
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

    h1 {
      font-size: 1.8rem;
    }

    .summary-grid {
      grid-template-columns: 1fr;
    }

    .key-summary {
      padding: 20px;
    }
  }
</style>
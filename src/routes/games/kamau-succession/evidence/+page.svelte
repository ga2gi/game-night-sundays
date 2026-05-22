<script>
  const evidenceItems = [
    {
      id: "dawa-glass",
      type: "Toxicology Evidence",
      title: "The Dawa Glass — Residue Analysis",
      tag: "EVIDENCE #001",
      icon: "🥃",
      color: "#ff5555",
      description: "The dawa glass originally placed at Victor Kamau’s seat, later consumed by Edward during the blessing ritual.",
      forensics: "Contains vodka, lime, excessive wild honey, sugar, and lethal mũthaiga alkaloid (Kenyan monkshood). Poison exists only in this glass.",
      contradiction: "Victor insists he never touched the glass after moving seats. Edward unexpectedly drank the entire contents during the blessing ritual.",
      excerpt: `KEY OBSERVATIONS:
• Sugared rim smudged and uneven
• Honey unusually thick and syrupy
• Poison present ONLY in this glass
• No contamination in any other drink`
    },
    {
      id: "seating-chaos",
      type: "Scene Reconstruction",
      title: "Seating Chaos & Blessing Path",
      tag: "EVIDENCE #002",
      icon: "🪑",
      color: "#bd93f9",
      description: "Brian sat in Victor’s seat as a joke, triggering a chain of seating changes before the blessing ritual began.",
      forensics: "Victor moved to the ancestral seat. His drink remained in original position, now exposed to open access during ritual circulation.",
      contradiction: "Multiple glass positions changed hands visually, but only Victor’s glass contained poison.",
      excerpt: `MOVEMENT PATH:
Brian → Victor’s seat (temporary)
Victor → ancestral seat
Edward → moved clockwise drinking all glasses`
    },
    {
      id: "honey-stain",
      type: "Trace Evidence",
      title: "Honey Stain & Ant Trail",
      tag: "EVIDENCE #003",
      icon: "🍯",
      color: "#f1fa8c",
      description: "A sticky honey stain was found near Victor’s original place setting on the tablecloth.",
      forensics: "Honey composition matches the dawa glass mixture. Ant trail suggests spill or deliberate residue transfer.",
      contradiction: "No witness confirms spilling occurred. Suggests pre- or post-placement contamination.",
      excerpt: `OBSERVATIONS:
• Honey stain right of Victor’s seat
• Ant trail moving toward glass position
• Suggests deliberate handling or leakage`
    },
    {
      id: "email-will",
      type: "Digital Evidence",
      title: "Edward’s Final Email Draft",
      tag: "EVIDENCE #004",
      icon: "📧",
      color: "#50fa7b",
      description: "Draft email sent to family lawyer Gideon Muthoka hours before dinner.",
      forensics: "Confirms David as intended successor and planned confrontation with Victor regarding merger forgery.",
      contradiction: "Establishes motive conflict between heirs and imminent restructuring of inheritance.",
      excerpt: `“David is named sole successor in the safe.
Victor will be given final chance to explain merger forgery.
After dinner, we execute the new will.”`
    },
    {
      id: "bible-note",
      type: "Cultural Evidence",
      title: "Handwritten Bible Note",
      tag: "EVIDENCE #005",
      icon: "📖",
      color: "#ffb86c",
      description: "Found in the Book of Cain and Abel with a Kikuyu proverb highlighted in fresh ink.",
      forensics: "Ink analysis suggests recent handling before dinner. Indicates premeditated symbolic framing.",
      contradiction: "No clear author identified; appears placed deliberately as moral commentary.",
      excerpt: `“Kĩrĩra kĩa mũcingiri gĩtirĩ kĩenyũ.”
(The cry of the poisoner has no echo.)`
    },
    {
      id: "security-log",
      type: "Surveillance Evidence",
      title: "Security Camera Shutdown",
      tag: "EVIDENCE #006",
      icon: "📹",
      color: "#8be9fd",
      description: "Dining room cameras were disabled at 6:00 PM under Edward’s instructions.",
      forensics: "Hallway footage confirms all six suspects entered between 6:30–6:45 PM. No exits recorded until collapse.",
      contradiction: "Critical moment of poisoning occurs during unrecorded window.",
      excerpt: `• Camera OFF at 6:00 PM
• Entry recorded 6:30–6:45 PM
• No recorded exits before death`
    },
    {
      id: "empty-vial",
      type: "Physical Evidence",
      title: "Empty Herbal Vial",
      tag: "EVIDENCE #007",
      icon: "🧪",
      color: "#ff5555",
      description: "Found in kitchen bin, wiped clean of fingerprints.",
      forensics: "Smells of wild honey and herbal liquorice note consistent with mũthaiga preparation.",
      contradiction: "No confirmed handler; suggests deliberate disposal after use.",
      excerpt: `• Cleaned vial
• Honey residue smell
• Possible poison container`
    },
    {
      id: "cufflink",
      type: "Trace Identity Evidence",
      title: "Gold Kamau Cufflink",
      tag: "EVIDENCE #008",
      icon: "🟡",
      color: "#f1fa8c",
      description: "Found under tablecloth near Victor’s original seat.",
      forensics: "Identical cufflinks owned by multiple family members. Cannot be attributed to a single individual.",
      contradiction: "Victor missing one cufflink; others also possess identical sets.",
      excerpt: `• Found near Victor’s seat
• Family crest engraving
• Multiple owners possible`
    },
    {
      id: "victor-note",
      type: "Document Evidence",
      title: "Victor’s Torn Note",
      tag: "EVIDENCE #009",
      icon: "📝",
      color: "#ff5555",
      description: "Recovered from study waste bin, partially destroyed.",
      forensics: "Handwriting confirmed as Victor Kamau.",
      contradiction: "Missing context makes intent unclear.",
      excerpt: `“…tonight must be his last decision…”`
    },
    {
      id: "grace-syrup",
      type: "Chemical Evidence",
      title: "Grace’s Syrup Jar",
      tag: "EVIDENCE #010",
      icon: "🫙",
      color: "#bd93f9",
      description: "Found in Grace Kamau’s handbag.",
      forensics: "Contains valerian-root sedative. Non-lethal but psychoactive.",
      contradiction: "Grace admits regular use in Edward’s tea.",
      excerpt: `• Sedative syrup
• Non-toxic
• Habitual use admitted`
    },
    {
      id: "lisa-phone",
      type: "Digital Behavior",
      title: "Lisa’s Phone Search History",
      tag: "EVIDENCE #011",
      icon: "📱",
      color: "#8be9fd",
      description: "Browser history reveals research query two days before dinner.",
      forensics: "Search suggests knowledge of poison masking techniques.",
      contradiction: "Lisa claims research for novel writing.",
      excerpt: `“Can monkshood be masked by honey?”`
    },
    {
      id: "brian-receipt",
      type: "Financial Evidence",
      title: "Brian’s Herbalist Receipt",
      tag: "EVIDENCE #012",
      icon: "🧾",
      color: "#50fa7b",
      description: "Receipt for mũthaiga root purchased four days before dinner.",
      forensics: "Linked to herbal preparation consistent with poison source plant.",
      contradiction: "Brian claims it was for a harmless joint pain poultice.",
      excerpt: `• Purchased mũthaiga root
• Herbalist transaction confirmed
• Associated paste found`
    },
    {
      id: "housekeeper",
      type: "Witness Statement",
      title: "Housekeeper Observation",
      tag: "EVIDENCE #013",
      icon: "👁️",
      color: "#ffb86c",
      description: "Verbal report before dinner escalation.",
      forensics: "Credible witness account of emotional confrontation.",
      contradiction: "No physical evidence linking threat to action.",
      excerpt: `“I wish you would just disappear for once!” — Chloe Kamau`
    }
  ];
</script>

<div class="desk-surface">
  <div class="evidence-header">
    <span class="stamp">CONFIDENTIAL CASE FILE</span>
    <h1>KSD-2026-001 // EVIDENCE LOCKER</h1>
    <p class="case-number">
      VICTIM: EDWARD KAMAU | STATUS: ACTIVE INVESTIGATION
    </p>
  </div>

  <div class="case-nav">
    <a href="/games/kamau-succession">INCIDENT REPORT</a>
    <a class="active" href="/games/kamau-succession/evidence">EVIDENCE</a>
    <a href="/games/kamau-succession/suspects">SUSPECTS</a>
    <a href="/games/kamau-succession/accuse">ACCUSATION</a>
  </div>

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
          <p><strong>FIELD:</strong> {item.description}</p>

          {#if item.excerpt}
            <div class="evidence-excerpt">
              <strong>RECOVERED DATA:</strong>
              <pre>{item.excerpt}</pre>
            </div>
          {:else}
            <!-- Fallback container to maintain layout rhythm if data is missing -->
            <div class="evidence-excerpt-placeholder"></div>
          {/if}

          <div class="forensic-box">
            <strong>FORENSIC ANALYSIS:</strong>
            <p>{item.forensics}</p>
          </div>

          <p class="red-pen">{item.contradiction}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="footer-nav">
    <a class="proceed-btn" href="/games/kamau-succession/accuse">
      PROCEED TO ACCUSATION ⚖️
    </a>
  </div>
</div>

<style>
  .desk-surface {
    background: radial-gradient(circle at top, #151515, #0a0a0a);
    min-height: 100vh;
    padding: 60px 20px;
    color: #e8dcc4;
    font-family: 'Courier New', monospace;
  }

  .evidence-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .stamp {
    border: 2px solid #8b0000;
    color: #8b0000;
    padding: 6px 12px;
    display: inline-block;
    transform: rotate(-4deg);
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 2rem;
    margin: 10px 0;
    letter-spacing: 1px;
  }

  .case-number {
    font-size: 0.8rem;
    color: #aaa;
  }

  .case-nav {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin: 40px 0;
  }

  .case-nav a {
    text-decoration: none;
    color: #e8dcc4;
    padding: 10px 14px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    font-size: 0.7rem;
    letter-spacing: 2px;
    transition: background 0.2s, border-color 0.2s;
  }

  .case-nav a:hover, .case-nav a.active {
    background: #8b0000;
    border-color: #8b0000;
  }

  .evidence-grid {
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 70px;
  }

  .evidence-item {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 35px;
    background: rgba(255, 255, 255, 0.02);
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
  }

  .artifact-graphic {
    border: 2px solid var(--accent);
    background: #111;
    height: 240px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
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

  .analysis-card {
    background: #e8dcc4;
    color: #111;
    padding: 25px;
    border-left: 4px solid #8b0000;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
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
    background: rgba(0, 0, 0, 0.05);
    border: 1px dashed #999;
  }

  .evidence-excerpt pre {
    white-space: pre-wrap;
    font-family: 'Courier New', monospace;
    font-size: 0.82rem;
    margin: 0;
  }

  .forensic-box {
    margin: 15px 0;
    padding: 12px;
    border-left: 4px solid #8b0000;
    background: rgba(0, 0, 0, 0.05);
  }

  .red-pen {
    margin-top: 15px;
    color: #8b0000;
    font-style: italic;
    border-top: 1px dashed #8b0000;
    padding-top: 10px;
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
    letter-spacing: 2px;
    transition: background 0.2s, transform 0.2s;
    display: inline-block;
  }

  .proceed-btn:hover {
    background: red;
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    .evidence-item {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .artifact-graphic {
      height: 180px;
    }
  }
</style>
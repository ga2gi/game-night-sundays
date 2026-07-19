<script>
  import { fly, fade } from 'svelte/transition';
  
  let accessCode = $state("");
  let unlocked = $state(false);
  let error = $state(false);

  const CORRECT_CODE = "088-2026";

  function unlock() {
    if (accessCode.trim() === CORRECT_CODE) {
      unlocked = true;
    } else {
      error = true;
      setTimeout(() => error = false, 1800);
    }
  }
</script>

<svelte:head>
  <title>DECRYPTED: Case RRP-2026-088 | Resolution</title>
</svelte:head>

<div class="solution-wrapper">
  {#if !unlocked}
    <!-- 🔐 LOCK SCREEN: THE TERMINAL OVERRIDE -->
    <div class="lock-card" in:fade>
      <div class="security-header">
        <span class="pulse-red"></span>
        <span class="lock-label">ENCRYPTED SECTOR: ARCHIVE_88</span>
      </div>
      <h2>FINAL RESOLUTION</h2>
      <p class="hint">Please provide authorization code to finalize case.</p>

      <div class="input-group">
        <input 
          type="password"
          bind:value={accessCode}
          placeholder="ENTER CODE"
          class:error={error}
          onkeydown={(e) => e.key === 'Enter' && unlock()}
        />
        <button onclick={unlock} class="btn-unlock">AUTHORIZE</button>
      </div>

      {#if error}
        <p class="error-text" in:fly={{ y: -10 }}>[!] ACCESS DENIED: INVALID CREDENTIALS</p>
      {/if}
    </div>

  {:else}
    <!-- 📂 THE DOSSIER: MANILA STYLE -->
    <div class="dossier-container" in:fly={{ y: 50, duration: 1000 }}>
      
      <header class="dossier-header">
        <div class="stamps">
          <span class="stamp red">CLASSIFIED</span>
          <span class="stamp black">CONFIRMED RESOLUTION</span>
        </div>
        <div class="case-meta">
          <p>Dossier No: RRP-2026-088</p>
          <p>Subject: Echoes in the Tower</p>
          <p>Location: Kilimani Arts Tower, Nairobi</p>
          <p>Date: May 17, 2026</p>
        </div>
      </header>

      <div class="paper-content">
        <!-- THE KILLER -->
        <section class="redacted-section">
          <h2>I. IDENTIFIED PERPETRATOR</h2>
          <div class="profile-box">
             <h1 class="killer-identity">WALTER "WALLY" MULANDI</h1>
             <p class="status">CURRENT STATUS: APPREHENDED</p>
             <p class="sub-status">Former Stage Magician • Member of the "Seaview Circle"</p>
          </div>
        </section>

        <!-- THE MOTIVE -->
        <section>
          <h2>II. THE MOTIVE: DESPERATE PRESERVATION</h2>
          <p>
            Walter accidentally killed <strong>Liza Mueni</strong> during an argument over stolen charity funds. 
            He took her notebook, which contained evidence against him. Salim obtained the notebook and was going 
            to reveal Walter as Liza's killer during the gala. Walter killed Salim to silence him permanently.
          </p>
          <p>
            Exposure meant life in prison for Walter. He had to act before Salim could expose the truth about 
            the Seaview Circle and Liza's death.
          </p>
          <div class="evidence-highlight">
            <strong>🔍 KEY EVIDENCE:</strong> The missing notebook page found in Walter's magic trunk, 
            along with Liza's bloodstained scarf and a vial of cyanide matching the poison used on Salim.
          </div>
        </section>

        <!-- EXECUTION -->
        <section class="execution-log">
          <h2>III. METHOD OF EXECUTION</h2>
          <div class="log-entry">
            <span class="step">01. POISON PREPARATION:</span>
            <p>Before the gala, Walter prepared a single vintage Macallan 25 whiskey glass by coating the inside bottom with a dried cyanide film – a technique he learned from old magic manuals (poisoner's glass, used in stage illusions where the "victim" pretends to die).</p>
          </div>
          <div class="log-entry">
            <span class="step">02. THE SERVICE CART:</span>
            <p>Walter placed his prepared glass on the service cart among three clean glasses. At logged 8:02 (drift possible), he adjusted the tray – captured on CCTV – to ensure his prepared glass was in the front position. Beatrice, wiping the tray at the same time, created fingerprint symmetry, obscuring any trace of his handling.</p>
          </div>
          <div class="log-entry">
            <span class="step">03. THE EXECUTION:</span>
            <p>When Salim arrived at the cart, Walter offered to pour. Using sleight of hand, he selected his prepared glass. He added whiskey, which rehydrated the cyanide film. He handed the glass to Salim, smiled (captured in Salim's final words: "They smiled"), and stepped back. Salim then locked himself in the War Room and drank. Death occurred by 8:40.</p>
          </div>
          <div class="log-entry">
            <span class="step">04. EVIDENCE PLANTING:</span>
            <p>After the body was found, Walter used the power failure at 8:46 to slip into the room via the unlogged manual emergency latch (which he had practised opening earlier). He planted the origami crane fragment under Salim's fingernail to frame Sharon (who used crane imagery) and placed the stencil note under the desk using the shared kit.</p>
          </div>
          <div class="log-entry">
            <span class="step">05. THE FRAME:</span>
            <p>Walter typed a misleading confession on a typewriter in the 47th-floor business centre (no log), placed it in an envelope, tore off the signature, and planted it in Salim's safe during the power failure. He knew Sylvia would search the safe and leave her fingerprint, creating a perfect frame.</p>
          </div>
        </section>

        <!-- THE DECEPTION -->
        <section>
          <h2>IV. THE MAGICIAN'S DECEPTION</h2>
          <p>
            Walter used his background as a stage magician to create <strong>misdirection at every turn</strong>:
          </p>
          <ul class="deception-list">
            <li><strong>Poisoner's Glass:</strong> The dried cyanide film technique came from old magic manuals – a stage illusion where the "victim" pretends to die. Walter adapted it for real murder.</li>
            <li><strong>Sleight of Hand:</strong> He offered to pour for Salim, using his magician's skills to select the prepared glass while making it appear natural.</li>
            <li><strong>Performer's Smile:</strong> Salim's last words – "They smiled" – perfectly match Walter's performer persona, not Beatrice's stone-faced character.</li>
            <li><strong>Misdirection:</strong> His "looking for a restroom" at 8:38 was classic misdirection – he was actually returning from planting evidence.</li>
            <li><strong>The Frame:</strong> He planted the confession letter to frame Sylvia, knowing she would handle evidence and leave her fingerprint.</li>
          </ul>
          <div class="evidence-highlight">
            <strong>🎭 THE HIDDEN TELL:</strong> The misleading confession was typed, not stencilled – Walter borrowed a typewriter from the 47th Floor. Sylvia never uses typewriters (she prefers handwriting). This is a hidden tell that breaks the frame.
          </div>
        </section>

        <!-- WHY THE OTHERS ARE INNOCENT -->
        <section>
          <h2>V. WHY THE OTHERS ARE INNOCENT</h2>
          
          <div class="innocent-grid">
            <div class="innocent-card">
              <h4>Diana Kamau</h4>
              <p>Wanted to destroy the deposition, but is not a killer. Her origami crane was a coincidence. The vial exchange with Sharon was unrelated to poison (activated charcoal for a medical condition).</p>
            </div>
            
            <div class="innocent-card">
              <h4>Marcus Mutugi</h4>
              <p>Guilty of conspiracy but not murder. He was on the balcony during the poisoning window. His handwriting match is subjective. His phone going offline was due to a dead battery.</p>
            </div>
            
            <div class="innocent-card">
              <h4>Beatrice "Birdie" Pesa</h4>
              <p>Wanted the notebook but not Salim's death. Physically unable to perform the precise hand movements required for a dried film due to arthritis. Her fingerprints on the tray are from wiping, not placement.</p>
            </div>
            
            <div class="innocent-card">
              <h4>Sharon Mukiri</h4>
              <p>Guilty of accidental manslaughter of Zoe Muli but had no role in Salim's poisoning. Her threat was empty. She lacks the chemical precision for a dried cyanide film.</p>
            </div>
            
            <div class="innocent-card">
              <h4>Oliver Kili</h4>
              <p>A blackmailer and hacker, not a killer. His latex glove was planted by Walter. His searches were for research, not execution.</p>
            </div>
            
            <div class="innocent-card">
              <h4>Sylvia Mwende</h4>
              <p>Found the missing notebook page after the murder and kept it as evidence to expose Walter's murder of Salim. Also trying to expose Marcus and his brother, not kill Salim. The confession letter was planted by Walter to frame her. Her fingerprint is from legitimate evidence handling.</p>
            </div>
          </div>
        </section>

        <!-- THE TROPHY -->
        <section>
          <h2>VI. THE KILLER'S CALLING CARD</h2>
          <p>
            The origami crane fragment found under Salim's fingernail was a <strong>deliberate misdirection</strong>. 
            All seven suspects practiced origami as a shared team-building exercise, making it seem like anyone 
            could be responsible. Walter deliberately used his origami skills to create confusion and spread suspicion.
          </p>
          <p style="margin-top: 10px; color: #666;">
            <em>"The price of an echo is silence."</em> — The stencil note left at the scene was Walter's final message, 
            a threat to anyone who might try to uncover the truth about the Seaview Circle.
          </p>
        </section>

        <div class="dossier-footer">
          <p class="final-verdict">CASE CLOSED // PERPETRATOR APPREHENDED</p>
          <div class="signature-line">OFFICIAL VERIFICATION: ARCHIVE_ADMIN_KE</div>
          <div class="signature-line" style="margin-top: 5px; font-size: 0.7rem;">
            Case Resolution: May 24, 2026 • 11:47 a.m.
          </div>
        </div>
      </div>
      
      <div class="actions-bottom">
        <button onclick={() => window.location.href = '/games'} class="btn-return">RETURN TO ARCHIVES</button>
      </div>
    </div>
  {/if}
</div>

<style>
  /* FONTS: Import Courier and Cinzel in your global CSS */
  
  .solution-wrapper {
    min-height: 100vh;
    background: #0a0a0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
    font-family: 'Courier New', Courier, monospace;
  }

  /* LOCK SCREEN STYLE */
  .lock-card {
    background: #111;
    border: 1px solid #333;
    padding: 40px;
    width: 100%;
    max-width: 450px;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }

  .security-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .lock-label { font-size: 0.6rem; letter-spacing: 2px; color: #666; }
  
  .pulse-red {
    width: 8px; height: 8px; background: #ff5555;
    border-radius: 50%; animation: pulse 1.5s infinite;
  }

  .input-group {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input {
    background: #000;
    border: 1px solid #444;
    padding: 15px;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 5px;
    outline: none;
    color: #ff5555;
  }

  input.error { border-color: #ff5555; }

  .btn-unlock {
    background: #fff;
    color: #000;
    border: none;
    padding: 15px;
    font-weight: 900;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn-unlock:hover {
    background: #b02e2e;
    color: white;
    transform: scale(1.02);
  }

  .error-text { color: #ff5555; font-size: 0.7rem; margin-top: 15px; font-weight: bold; }

  /* DOSSIER (THE PAPER EFFECT) */
  .dossier-container {
    width: 100%;
    max-width: 850px;
    background: #e8e2d6; /* Manila Paper Color */
    color: #222;
    padding: 60px;
    box-shadow: 10px 10px 0px rgba(0,0,0,0.5);
    position: relative;
  }

  .dossier-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #222;
    padding-bottom: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 20px;
  }

  .stamps { display: flex; flex-direction: column; gap: 10px; }
  
  .stamp {
    border: 3px solid;
    padding: 5px 15px;
    font-weight: 900;
    font-size: 0.8rem;
    text-transform: uppercase;
    transform: rotate(-5deg);
    display: inline-block;
  }

  .stamp.red { border-color: #b02e2e; color: #b02e2e; }
  .stamp.black { border-color: #222; color: #222; margin-left: 10px; transform: rotate(2deg); }

  .case-meta p { 
    font-size: 0.7rem; 
    margin: 2px 0; 
    text-transform: uppercase; 
    font-weight: bold;
  }

  section { margin-bottom: 40px; }
  
  h2 {
    font-size: 0.9rem;
    background: #222;
    color: #e8e2d6;
    padding: 5px 10px;
    display: inline-block;
    margin-bottom: 20px;
  }

  .killer-identity {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    margin: 10px 0;
    text-decoration: underline;
    color: #b02e2e;
  }

  .status { 
    font-weight: bold; 
    color: #b02e2e; 
    font-size: 0.9rem;
  }

  .sub-status {
    font-size: 0.8rem;
    color: #555;
    margin-top: 5px;
    font-style: italic;
  }

  .execution-log .log-entry { 
    margin-bottom: 20px;
    padding: 10px;
    border-left: 3px solid #b02e2e;
    background: rgba(0,0,0,0.05);
  }

  .step { 
    font-weight: 900; 
    color: #000; 
    display: block; 
    margin-bottom: 5px;
    font-size: 0.85rem;
  }

  .evidence-highlight {
    background: rgba(176, 46, 46, 0.1);
    border: 1px solid #b02e2e;
    padding: 15px;
    margin: 15px 0;
    border-left: 5px solid #b02e2e;
  }

  /* Deception List */
  .deception-list {
    list-style: none;
    padding: 0;
  }

  .deception-list li {
    padding: 8px 0 8px 20px;
    position: relative;
    line-height: 1.6;
  }

  .deception-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #b02e2e;
    font-weight: bold;
  }

  /* Innocent Grid */
  .innocent-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .innocent-card {
    background: rgba(0,0,0,0.05);
    padding: 15px;
    border-left: 3px solid #2e7d32;
  }

  .innocent-card h4 {
    margin: 0 0 5px 0;
    color: #b02e2e;
    font-size: 0.9rem;
  }

  .innocent-card p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #444;
  }

  .dossier-footer {
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid #999;
    text-align: center;
  }

  .final-verdict { 
    font-weight: 900; 
    font-size: 1.2rem; 
    letter-spacing: 2px;
    color: #b02e2e;
  }

  .signature-line {
    margin-top: 20px;
    font-style: italic;
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .actions-bottom {
    text-align: center;
    margin-top: 40px;
  }

  .btn-return {
    background: none;
    border: 2px solid #222;
    color: #222;
    padding: 12px 30px;
    font-family: inherit;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    font-size: 0.9rem;
  }

  .btn-return:hover {
    background: #222;
    color: #e8e2d6;
    transform: translateY(-2px);
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }

  @media (max-width: 600px) {
    .dossier-container { padding: 30px; }
    .killer-identity { font-size: 1.8rem; }
    .dossier-header {
      flex-direction: column;
    }
    .stamps {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .stamp {
      transform: rotate(0deg);
    }
    .stamp.black {
      margin-left: 0;
      transform: rotate(0deg);
    }
    .innocent-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
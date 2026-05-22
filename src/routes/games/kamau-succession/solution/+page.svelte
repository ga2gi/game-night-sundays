<script>
  import { fly, fade } from 'svelte/transition';

  let accessCode = $state("");
  let unlocked = $state(false);
  let error = $state(false);

  // Default authorization code set to configuration specifications
  const CORRECT_CODE = "1212"; 

  function unlock() {
    if (accessCode.trim() === CORRECT_CODE) {
      unlocked = true;
    } else {
      error = true;
      setTimeout(() => (error = false), 1500);
    }
  }
</script>

<svelte:head>
  <title>DECRYPTED CASE FILE // THE KAMAU SUCCESSION</title>
</svelte:head>

<div class="solution-wrapper">

  {#if !unlocked}

    <!-- 🔐 LOCK SCREEN -->
    <div class="lock-card" in:fade>

      <div class="security-header">
        <span class="pulse"></span>
        <span class="lock-label">ENCRYPTED FILE // ARCHIVE EK-1212</span>
      </div>

      <h2 class="lock-title">FINAL RESOLUTION</h2>

      <p class="hint">
        Enter authorization code to access full investigative findings.
      </p>

      <div class="input-group">
        <input
          type="password"
          bind:value={accessCode}
          placeholder="ENTER CODE"
          class:error={error}
          onkeydown={(e) => e.key === 'Enter' && unlock()}
        />

        <button class="btn-unlock" onclick={unlock}>
          AUTHORIZE
        </button>
      </div>

      {#if error}
        <p class="error-text" in:fly={{ y: -8 }}>
          ACCESS DENIED — INVALID CODE
        </p>
      {/if}

    </div>

  {:else}

    <!-- 📂 DOSSIER -->
    <div class="dossier-container" in:fly={{ y: 30, duration: 900 }}>

      <header class="dossier-header">

        <div class="stamps">
          <span class="stamp red">CLASSIFIED</span>
          <span class="stamp black">CASE RESOLVED</span>
        </div>

        <div class="meta">
          <p>CASE ID: EK-2026-005</p>
          <p>LOCATION: MIOTONI ROAD, KAREN</p>
          <p>STATUS: CLOSED</p>
        </div>

      </header>

      <!-- FINDINGS -->
      <section class="findings-section">
        <h2 class="dossier-title">DETECTIVE FINDINGS</h2>

        <ul>
          <li>
            <strong>Victor Kamau (The Target):</strong> Completely exonerated. His left-dominant handling of glassware contradicts the physical location of the honey spills and cufflink dropped on the right side of his original setting. He was the intended victim.
          </li>

          <li>
            <strong>Edward Kamau (The Casualty):</strong> Accidentally intercepted the assassination plot. His unpredictable sentimentality caused him to drain Victor&rsquo;s cocktail entirely during the blessing ritual, consuming the lethal dose intended for his eldest son.
          </li>

          <li>
            <strong>Brian Kamau:</strong> Unintentionally disrupted the murder plot. His last-minute seating prank forced Victor away from the poisoned glass, saving Victor&rsquo;s life and dooming their father.
          </li>

          <li>
            <strong>Lisa &amp; Chloe Kamau:</strong> Forensically cleared. Lisa&rsquo;s research on monkshood was weaponized by the true killer as a psychological red herring to misdirect police scrutiny.
          </li>
        </ul>
      </section>

      <!-- CONCLUSION -->
      <section class="conclusion-section">
        <h2 class="dossier-title">CASE CONCLUSION</h2>

        <div class="killer-box">
          <h1 class="killer">DAVID KAMAU</h1>
          <p class="subtitle">PRIMARY PERPETRATOR // TARGET: VICTOR KAMAU</p>
        </div>

        <p>
          David Kamau planned and executed the poisoning of Victor&rsquo;s <em>dawa</em> glass using a lethal concentration of <strong>mũthaiga</strong> extract. His true objective was to assassinate his older brother, Victor, to protect his newly discovered inheritance.
        </p>

        <p>
          David&rsquo;s alibi contained a fatal logical error: he claimed he had no reason to kill his father because Edward&rsquo;s draft email already named him sole heir. However, that email was drafted at 4:17 PM and locked in a private safe. David&rsquo;s precise knowledge of its contents proves he broke into the safe prior to dinner. 
        </p>

        <p>
          Upon learning he was the successor, David realized Victor still had &ldquo;one final chance to explain himself&rdquo; to Edward after dinner. Fearing Victor&rsquo;s corporate manipulation would reverse the decision, and wanting to prevent Victor from ever contesting the new will, David poisoned Victor&rsquo;s cocktail before guests arrived.
        </p>

        <p>
          Physical forensics confirm David&rsquo;s guilt. The single gold family crest cufflink wedged on the <strong>right side</strong> of Victor&rsquo;s original seat matches David&rsquo;s bare left sleeve. While reaching across to add the messy honey and poison, his cufflink caught on the tablecloth and tore free.
        </p>

        <p>
          David watched in silent horror as Brian&rsquo;s seating joke left the poisoned cocktail sitting empty in front of Edward, who broke tradition and drained the glass, turning David&rsquo;s flawless corporate assassination into an accidental patricide.
        </p>
      </section>

      <!-- VERDICT -->
      <footer class="footer">
        <div class="final-stamp">CASE CLOSED</div>

        <p class="final-line">
          Kĩrĩra kĩa mũcingiri gĩtirĩ kĩenyũ. The cry of the poisoner has no echo.
        </p>
      </footer>

    </div>

  {/if}

</div>

<style>
  /* BASE */
  .solution-wrapper {
    min-height: 100vh;
    background: radial-gradient(circle at top, #0f0f12, #050507);
    color: #e6e6e6;
    font-family: 'Courier New', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
  }

  /* LOCK SCREEN */
  .lock-card {
    background: #111;
    border: 1px solid #333;
    padding: 40px;
    width: 100%;
    max-width: 420px;
    text-align: center;
  }

  .security-header {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    align-items: center;
  }

  .pulse {
    width: 8px;
    height: 8px;
    background: #ff5555;
    border-radius: 50%;
    animation: pulse 1.5s infinite;
  }

  .lock-label {
    font-size: 0.6rem;
    color: #777;
    letter-spacing: 2px;
  }

  .lock-title {
    margin: 20px 0;
  }

  .hint {
    font-size: 0.85rem;
    color: #aaa;
  }

  .input-group {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input {
    background: #000;
    border: 1px solid #444;
    padding: 15px;
    color: #fff;
    text-align: center;
    letter-spacing: 5px;
  }

  input.error {
    border-color: #ff5555;
  }

  .btn-unlock {
    background: #fff;
    color: #000;
    padding: 14px;
    font-weight: 900;
    border: none;
    cursor: pointer;
  }

  .error-text {
    color: #ff5555;
    font-size: 0.7rem;
    margin-top: 5px;
  }

  /* DOSSIER */
  .dossier-container {
    width: 100%;
    max-width: 850px;
    background: #e8e2d6;
    color: #222;
    padding: 50px;
    box-shadow: 10px 10px 0 #000;
  }

  .dossier-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #222;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }

  .meta p {
    font-size: 0.7rem;
    margin: 2px 0;
    font-weight: bold;
  }

  .stamps {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .stamp {
    border: 3px solid;
    padding: 5px 10px;
    font-weight: 900;
    font-size: 0.75rem;
    text-transform: uppercase;
    display: inline-block;
    transform: rotate(-5deg);
  }

  .stamp.red {
    border-color: #b02a2a;
    color: #b02a2a;
  }

  .stamp.black {
    border-color: #222;
    color: #222;
    transform: rotate(2deg);
  }

  section {
    margin-bottom: 35px;
  }

  .dossier-title {
    background: #222;
    color: #e8e2d6;
    display: inline-block;
    padding: 5px 10px;
    font-size: 0.9rem;
    margin-top: 0;
  }

  ul {
    margin-top: 15px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 12px;
    line-height: 1.5;
  }

  p {
    line-height: 1.6;
    margin-bottom: 16px;
  }

  /* KILLER */
  .killer-box {
    margin: 20px 0;
    padding: 20px;
    border: 2px solid #b02a2a;
    background: rgba(176,42,42,0.08);
  }

  .killer {
    font-size: 2rem;
    margin: 0;
    color: #b02a2a;
  }

  .subtitle {
    font-size: 0.75rem;
    font-weight: bold;
    color: #444;
    margin-top: 5px;
    margin-bottom: 0;
  }

  /* FOOTER */
  .footer {
    margin-top: 40px;
    border-top: 1px solid #999;
    padding-top: 20px;
    text-align: center;
  }

  .final-stamp {
    font-weight: 900;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  .final-line {
    font-size: 0.8rem;
    margin-top: 10px;
    opacity: 0.8;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.6); opacity: 0.4; }
    100% { transform: scale(1); opacity: 1; }
  }
</style>
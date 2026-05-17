<script>
  import { fly, fade } from 'svelte/transition';
  
  let accessCode = $state("");
  let unlocked = $state(false);
  let error = $state(false);

  const CORRECT_CODE = "1212";

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
          <p>Subject: The Gardenia Slayings</p>
          <p>Location: River Road Park, Nairobi</p>
        </div>
      </header>

      <div class="paper-content">
        <!-- THE KILLER -->
        <section class="redacted-section">
          <h2>I. IDENTIFIED PERPETRATOR</h2>
          <div class="profile-box">
             <h1 class="killer-identity">DET. ZAMZAM HAMISI (RTD.)</h1>
             <p class="status">CURRENT STATUS: UNDER SURVEILLANCE</p>
          </div>
        </section>

        <!-- THE MOTIVE -->
        <section>
          <h2>II. THE MOTIVE: PRESERVATION</h2>
          <p>
            The motive was not rooted in common criminal desires. It was a <strong>defensive strike</strong>. 
            Zamzam Hamisi carried the weight of the 1969 Gardenia case for decades—not as a victim, but as the architect 
            of its failure.
          </p>
          <p>
            When researcher Susan Amani neared the truth of the 1969 cover-up, Zamzam utilized her institutional knowledge 
            to silence her and frame a modern "copycat" to distract from the past.
          </p>
        </section>

        <!-- EXECUTION -->
        <section class="execution-log">
          <h2>III. METHOD OF EXECUTION</h2>
          <div class="log-entry">
            <span class="step">01. PREPARATION:</span>
            <p>Planted Michael Korir’s glove (recovered from long-term storage) at the scene. The solvent inconsistency was a fatal oversight by a veteran who underestimated modern forensics.</p>
          </div>
          <div class="log-entry">
            <span class="step">02. DIVERSION:</span>
            <p>Utilized a diplomatic-style black Mercedes to trigger suspicion toward foreign interests (Jan Snaw), and remotely disabled CCTV using her legacy backdoors.</p>
          </div>
          <div class="log-entry">
            <span class="step">03. STAGING:</span>
            <p>Mirrored the "runner" terminology from Njoroge’s private journals to ensure he would be the primary suspect if the Korir framing failed.</p>
          </div>
        </section>

        <!-- THE WATCH -->
        <section>
          <h2>IV. THE TROPHY</h2>
          <p>
            The missing luxury watch was not liquidated. It was retained as a <strong>trophy</strong>—a hallmark of a killer who views themselves as superior to the law they once enforced.
          </p>
        </section>

        <div class="dossier-footer">
          <p class="final-verdict">CASE CLOSED // NO FURTHER ACTION REQUIRED</p>
          <div class="signature-line">OFFICIAL VERIFICATION: ARCHIVE_ADMIN_KE</div>
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
    color: var(--accent);
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 5px;
    outline: none;
  }

  input.error { border-color: #ff5555; color: #ff5555; }

  .btn-unlock {
    background: #fff;
    color: #000;
    border: none;
    padding: 15px;
    font-weight: 900;
    letter-spacing: 2px;
    cursor: pointer;
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

  .case-meta p { font-size: 0.7rem; margin: 2px 0; text-transform: uppercase; font-weight: bold; }

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
  }

  .status { font-weight: bold; color: #b02e2e; font-size: 0.8rem; }

  .execution-log .log-entry { margin-bottom: 20px; }
  .step { font-weight: 900; color: #000; text-decoration: underline; display: block; margin-bottom: 5px; }

  .dossier-footer {
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid #999;
    text-align: center;
  }

  .final-verdict { font-weight: 900; font-size: 1.2rem; letter-spacing: 2px; }

  .signature-line {
    margin-top: 20px;
    font-style: italic;
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .btn-return {
    margin-top: 40px;
    background: none;
    border: 1px solid #222;
    color: #222;
    padding: 10px 20px;
    font-family: inherit;
    font-weight: bold;
    cursor: pointer;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }

  @media (max-width: 600px) {
    .dossier-container { padding: 30px; }
    .killer-identity { font-size: 1.5rem; }
  }
</style>
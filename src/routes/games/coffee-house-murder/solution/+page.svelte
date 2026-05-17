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
      setTimeout(() => (error = false), 1500);
    }
  }
</script>

<svelte:head>
  <title>DECRYPTED CASE FILE // CHM-7781</title>
</svelte:head>

<div class="solution-wrapper">

  {#if !unlocked}

    <!-- 🔐 LOCK SCREEN -->
    <div class="lock-card" in:fade>
      <div class="security-header">
        <span class="pulse"></span>
        <span class="lock-label">ENCRYPTED FILE // ARCHIVE CHM-001</span>
      </div>

      <h2>FINAL RESOLUTION</h2>
      <p class="hint">Enter authorization code to access the full case breakdown.</p>

      <div class="input-group">
        <input
          type="password"
          bind:value={accessCode}
          placeholder="ENTER CODE"
          class:error={error}
          on:keydown={(e) => e.key === 'Enter' && unlock()}
        />

        <button class="btn-unlock" on:click={unlock}>
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
          <p>CASE ID: CHM-2026-001</p>
          <p>LOCATION: CAFÉ UMOJA, NAIROBI</p>
          <p>STATUS: CLOSED</p>
        </div>
      </header>

      <!-- FINDINGS -->
      <section>
        <h2>DETECTIVE FINDINGS</h2>

        <ul>
          <li><strong>Janet Otieno:</strong> CCTV shows she approached the counter before blackout but never interacted with the victim during the incident window.</li>

          <li><strong>Esther Njeri:</strong> Sent threatening message but Instagram Story confirms she was actively recording during blackout.</li>

          <li><strong>James Mwangi:</strong> Financial pressure established, but witness confirms he was outside on a phone call at time of death.</li>

          <li><strong>Brian Kamau:</strong> Receipt timestamp and CCTV fragment contradict his claim of early departure.</li>
        </ul>
      </section>

      <!-- CONCLUSION -->
      <section>
        <h2>CASE CONCLUSION</h2>

        <div class="killer-box">
          <h1 class="killer">BRIAN KAMAU</h1>
          <p class="subtitle">PRIMARY SUSPECT // CONFIRMED PERPETRATOR</p>
        </div>

        <p>
          Brian Kamau, a former employee dismissed weeks earlier, exploited the café blackout to commit the murder.
          A falsified timeline and receipt manipulation were used to disguise his presence.
        </p>

        <p>
          Evidence confirms he remained inside during the outage and positioned himself near the counter during the critical window.
        </p>
      </section>

      <!-- VERDICT -->
      <footer class="footer">
        <div class="final-stamp">CASE CLOSED</div>
        <p class="final-line">
          The truth was hidden in plain sight — behind a blackout and a broken alibi.
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

  h2 {
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

  h2 {
    background: #222;
    color: #e8e2d6;
    display: inline-block;
    padding: 5px 10px;
    font-size: 0.9rem;
  }

  ul {
    margin-top: 15px;
  }

  li {
    margin-bottom: 12px;
    line-height: 1.5;
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
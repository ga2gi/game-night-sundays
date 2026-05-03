<script>
  import { goto } from '$app/navigation';

  let accessCode = $state("");
  let accessDenied = $state(false);
  let showIntro = $state(true);

  const CORRECT_CODE = "GARDENIA";

  function handleEntry() {
    if (accessCode.toUpperCase() === CORRECT_CODE) {
      goto('/incident-report');
    } else {
      accessDenied = true;
      setTimeout(() => accessDenied = false, 1800);
    }
  }

  // auto skip intro after delay (cinematic feel)
  setTimeout(() => {
    showIntro = false;
  }, 6000);
</script>

{#if showIntro}
<!-- 🎬 CINEMATIC INTRO SEQUENCE -->
<div class="intro-screen">

  <div class="scanlines"></div>
  <div class="vignette"></div>

  <div class="intro-content">

    <div class="studio-text">KCPD ARCHIVE UNIT</div>

    <h1 class="main-title">CASE FILE // RRP-2026-088</h1>

    <div class="subtitle">
      A TRUE CRIME INCIDENT RECONSTRUCTION
    </div>

    <div class="typewriter">
      <p>Initializing evidence chain...</p>
      <p>Loading forensic archive...</p>
      <p>Cross-referencing suspect network...</p>
      <p class="highlight">Unlocking classified narrative...</p>
    </div>

    <div class="pulse-dot"></div>

  </div>

</div>

{:else}

<!-- 🔐 MAIN ACCESS ENVELOPE -->
<div class="briefing-room">
  <div class="scanner-line"></div>
  <div class="vignette"></div>

  <div class="invite-card">

    <div class="corner-label top-left">SEALED TRANSMISSION</div>
    <div class="corner-label bottom-right">FOR GIRL DETECTIVES ONLY</div>

    <div class="header">
      <h2 class="alert">OPEN CASE FILE</h2>

      <div class="subject-line">
        <span class="label">SUBJECT:</span>
        <span class="redacted">SUSAN AMANI</span>
      </div>
    </div>

    <div class="briefing-text">
      <p>
        You’ve been granted access to a restricted investigation archive.
      </p>

      <p>
        This case is incomplete. The official narrative has gaps —
        and the evidence doesn’t behave the way it should.
      </p>

      <p class="challenge">
        Proceed only if you’re ready to question everything.
      </p>
    </div>

    <div class="visuals">

      <div class="evidence-photo">
        <img src="https://images.pexels.com/photos/1035914/pexels-photo-1035914.jpeg" />
        <div class="photo-tag">CLUE NODE A</div>
      </div>

      <div class="evidence-photo">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" />
        <div class="photo-tag">SCENE DATA</div>
      </div>

    </div>

    <div class="auth-section">

      <p class="instruction">
        ENTER ACCESS KEY TO DECRYPT FILE
      </p>

      <div class="input-group">

        <input 
          type="text" 
          bind:value={accessCode}
          placeholder="••••••••"
          class:error={accessDenied}
          onkeydown={(e) => e.key === 'Enter' && handleEntry()}
        />

        <button onclick={handleEntry} class="accept-btn">
          DECRYPT FILE
        </button>

      </div>

      {#if accessDenied}
        <p class="error-text">ACCESS DENIED — INVALID KEY</p>
      {/if}

    </div>

  </div>
</div>

{/if}

<style>
/* =========================
   🎬 INTRO CINEMATIC SCREEN
========================= */

.intro-screen {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: #fff;
  font-family: 'Courier New', monospace;
  position: relative;
  overflow: hidden;
}

.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.02),
    rgba(255,255,255,0.02) 1px,
    transparent 2px,
    transparent 4px
  );
  animation: flicker 2s infinite;
}

@keyframes flicker {
  0%,100% { opacity: 0.4; }
  50% { opacity: 0.2; }
}

.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, transparent 30%, black 120%);
}

.intro-content {
  text-align: center;
  z-index: 2;
}

.studio-text {
  font-size: 0.8rem;
  letter-spacing: 4px;
  color: #888;
  animation: fadeIn 2s ease;
}

.main-title {
  font-size: 1.6rem;
  margin-top: 20px;
  color: #ff2d2d;
  letter-spacing: 2px;
  animation: fadeIn 3s ease;
}

.subtitle {
  margin-top: 10px;
  font-size: 0.8rem;
  color: #aaa;
  animation: fadeIn 4s ease;
}

.typewriter {
  margin-top: 30px;
  font-size: 0.85rem;
  color: #ccc;
  line-height: 1.6;
  animation: fadeIn 5s ease;
}

.highlight {
  color: #ff2d2d;
}

.pulse-dot {
  width: 10px;
  height: 10px;
  background: #ff2d2d;
  border-radius: 50%;
  margin: 30px auto 0;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.8); opacity: 0.4; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* =========================
   📂 MAIN PAGE (YOUR STYLE)
========================= */

:global(body) {
  margin: 0;
  background: #050505;
  font-family: 'Courier New', monospace;
  color: #e0e0e0;
}

.briefing-room {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #1a1a1a 0%, #050505 100%);
  position: relative;
  padding: 60px 20px;
}

.scanner-line {
  position: fixed;
  width: 100%;
  height: 2px;
  background: #ff0000;
  box-shadow: 0 0 12px #ff0000;
  animation: scan 6s linear infinite;
  opacity: 0.25;
}

@keyframes scan {
  0% { top: 0%; }
  100% { top: 100%; }
}

.vignette {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle, transparent 40%, black 130%);
}

.invite-card {
  background: #0f0f0f;
  border: 1px solid #2a2a2a;
  width: 100%;
  max-width: 780px;
  padding: 45px;
  position: relative;
}

.corner-label {
  position: absolute;
  font-size: 0.6rem;
  color: #555;
  letter-spacing: 2px;
}

.top-left { top: 15px; left: 15px; }
.bottom-right { bottom: 15px; right: 15px; }

.alert {
  color: #ff2d2d;
  font-size: 1.2rem;
  margin: 0;
}

.subject-line {
  margin-top: 12px;
  border-bottom: 1px solid #222;
  padding-bottom: 15px;
}

.redacted {
  background: #ddd;
  color: #ddd;
}

.briefing-text {
  margin: 25px 0;
  line-height: 1.7;
  color: #bbb;
}

.challenge {
  font-style: italic;
  color: #888;
}

.visuals {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.evidence-photo img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  opacity: 0.4;
  filter: grayscale(100%);
}

.photo-tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #8b0000;
  font-size: 0.55rem;
  padding: 3px 6px;
}

.auth-section {
  margin-top: 30px;
  text-align: center;
}

input {
  background: black;
  border: 1px solid #444;
  color: #ff2d2d;
  text-align: center;
  width: 220px;
  padding: 10px;
}

.accept-btn {
  background: #8b0000;
  color: white;
  border: none;
  padding: 10px 18px;
  cursor: pointer;
}

.error-text {
  color: #ff4d4d;
  font-size: 0.7rem;
  margin-top: 10px;
}
</style>
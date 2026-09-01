<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let activeStep = $state(1);
  let showGameStructure = $state(false);

  const steps = [
    {
      id: 1,
      title: 'SELECT YOUR CASE',
      icon: '🔍',
      description: 'Browse our case files and choose the mystery that intrigues you most.',
      details: [
        'Unique storylines set across Kenya',
        'Different difficulty levels available',
        'Multiple suspects with hidden motives',
        'Complex evidence to analyze'
      ]
    },
    {
      id: 2,
      title: 'PURCHASE ON HUSTLESASA',
      icon: '🛒',
      description: 'Complete your purchase to receive your access code.',
      details: [
        'Visit our HustleSasa Shop',
        'Complete purchase (KSH.500/-)',
        'Receive PDF with unique access code',
        'Check your email for delivery'
      ],
      link: 'https://murdermysterygameske.hustlesasa.shop/'
    },
    {
      id: 3,
      title: 'UNLOCK YOUR CASE',
      icon: '🔐',
      description: 'Enter your access code to unlock the interactive investigation.',
      details: [
        'Visit the case file page',
        'Enter your unique access code',
        'Gain access to all investigation materials',
        'Begin your detective journey'
      ]
    },
    {
      id: 4,
      title: 'INVESTIGATE',
      icon: '🕵️‍♀️',
      description: 'Work through the case file systematically.',
      sections: [
        {
          name: 'INCIDENT REPORT',
          content: 'Victim profile, crime scene details, preliminary evidence, forensic notes'
        },
        {
          name: 'SUSPECT FILES',
          content: 'Background, statements, alibis, observed evidence, investigator notes'
        },
        {
          name: 'EVIDENCE LOCKER',
          content: 'Physical artifacts, lab findings, digital footprints, medical examiner notes'
        }
      ]
    },
    {
      id: 5,
      title: 'MAKE YOUR ACCUSATION',
      icon: '⚖️',
      description: 'When you\'re confident, issue the arrest warrant.',
      details: [
        'Review all suspects carefully',
        'Analyze all evidence thoroughly',
        'Make your final accusation',
        'Reveal the solution'
      ],
      warning: 'Caution: An incorrect arrest will permanently close the case file.'
    }
  ];

  const gameStructure = [
    { step: 'SELECT CASE', action: 'Browse available mysteries', icon: '📁' },
    { step: 'PURCHASE', action: 'Complete payment on HustleSasa', icon: '💳' },
    { step: 'UNLOCK', action: 'Enter access code', icon: '🔓' },
    { step: 'INCIDENT REPORT', action: 'Review crime scene', icon: '📋' },
    { step: 'SUSPECTS', action: 'Interview and analyze', icon: '👥' },
    { step: 'EVIDENCE', action: 'Examine all clues', icon: '🔬' },
    { step: 'ACCUSE', action: 'Issue arrest warrant', icon: '⚖️' },
    { step: 'REVEAL', action: 'Unlock the solution', icon: '🎯' }
  ];

  function nextStep() {
    if (activeStep < steps.length) {
      activeStep++;
    }
  }

  function prevStep() {
    if (activeStep > 1) {
      activeStep--;
    }
  }
</script>

<svelte:head>
  <title>How to Play | Murder Mystery Games KE</title>
  <meta
    name="description"
    content="Learn how to play Murder Mystery Games KE. Select, purchase, unlock, and solve immersive detective cases set in Kenya."
  />
</svelte:head>

<div class="how-to-play-container">
  
  <!-- Header -->
  <header class="page-header" in:fade={{ duration: 800 }}>
    <div class="header-badge">OPERATIONAL GUIDE</div>
    <h1>HOW TO PLAY</h1>
    <div class="header-line"></div>
    <p class="header-subtitle">
      Your journey from curious observer to master detective
    </p>
  </header>

  <!-- Main Steps Navigation -->
  <div class="steps-navigation" in:fly={{ y: -20, delay: 200 }}>
    {#each steps as step}
      <button 
        class="step-nav-btn"
        class:active={activeStep === step.id}
        onclick={() => activeStep = step.id}
      >
        <span class="step-nav-icon">{step.icon}</span>
        <span class="step-nav-number">0{step.id}</span>
        <span class="step-nav-title">{step.title}</span>
      </button>
    {/each}
  </div>

  <!-- Active Step Display -->
  <main class="step-display">
    {#each steps as step}
      {#if activeStep === step.id}
        <div class="step-card" in:fade={{ duration: 400 }}>
          
          <!-- Step Header -->
          <div class="step-header">
            <div class="step-number-display">0{step.id}</div>
            <div class="step-icon-display">{step.icon}</div>
            <h2>{step.title}</h2>
          </div>

          <!-- Step Description -->
          <p class="step-description">{step.description}</p>

          <!-- Step Details -->
          {#if step.details}
            <div class="step-details">
              <h3>WHAT YOU'LL DO</h3>
              <ul>
                {#each step.details as detail}
                  <li>{detail}</li>
                {/each}
              </ul>
            </div>
          {/if}

          <!-- Step Sections (For Investigation Step) -->
          {#if step.sections}
            <div class="investigation-sections">
              {#each step.sections as section}
                <div class="section-card">
                  <div class="section-name">{section.name}</div>
                  <div class="section-content">{section.content}</div>
                </div>
              {/each}
            </div>
          {/if}

          <!-- Warning -->
          {#if step.warning}
            <div class="warning-box">
              <span class="warning-icon">⚠️</span>
              <span>{step.warning}</span>
            </div>
          {/if}

          <!-- Link (For Purchase Step) -->
          {#if step.link}
            <a 
              href={step.link} 
              target="_blank" 
              rel="noopener noreferrer"
              class="purchase-link"
            >
              VISIT HUSTLESASA SHOP →
            </a>
          {/if}

          <!-- Navigation Buttons -->
          <div class="step-navigation-buttons">
            {#if activeStep > 1}
              <button class="nav-btn prev" onclick={prevStep}>
                ← PREVIOUS STEP
              </button>
            {/if}
            
            {#if activeStep < steps.length}
              <button class="nav-btn next" onclick={nextStep}>
                NEXT STEP →
              </button>
            {:else}
              <a href="/games" class="nav-btn next">
                START INVESTIGATING →
              </a>
            {/if}
          </div>

        </div>
      {/if}
    {/each}
  </main>

  <!-- Game Structure Overview -->
  <section class="game-structure" in:fade={{ delay: 300 }}>
    <button 
      class="structure-toggle"
      onclick={() => showGameStructure = !showGameStructure}
    >
      <span>GAME STRUCTURE OVERVIEW</span>
      <span class="toggle-icon">{showGameStructure ? '▲' : '▼'}</span>
    </button>

    {#if showGameStructure}
      <div class="structure-flow" in:fade={{ duration: 300 }}>
        {#each gameStructure as item, index}
          <div class="flow-item">
            <div class="flow-icon">{item.icon}</div>
            <div class="flow-step">{item.step}</div>
            <div class="flow-action">{item.action}</div>
            {#if index < gameStructure.length - 1}
              <div class="flow-arrow">↓</div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </section>

  <!-- Tips Section -->
  <section class="tips-section" in:fade={{ delay: 400 }}>
    <div class="tips-header">
      <h2>DETECTIVE TIPS</h2>
      <div class="header-line-small"></div>
    </div>

    <div class="tips-grid">
      <div class="tip-card">
        <div class="tip-icon">📖</div>
        <h3>READ EVERYTHING</h3>
        <p>Every detail matters. The killer is hiding in plain sight within the case files.</p>
      </div>

      <div class="tip-card">
        <div class="tip-icon">✍️</div>
        <h3>TAKE NOTES</h3>
        <p>Create your own timeline. Cross-reference alibis and look for inconsistencies.</p>
      </div>

      <div class="tip-card">
        <div class="tip-icon">🔄</div>
        <h3>REVISIT EVIDENCE</h3>
        <p>After meeting suspects, return to the evidence locker. New connections will emerge.</p>
      </div>

      <div class="tip-card">
        <div class="tip-icon">🔬</div>
        <h3>TRUST FORENSICS</h3>
        <p>Lab findings don't lie. But remember - evidence can be planted to mislead you.</p>
      </div>

      <div class="tip-card">
        <div class="tip-icon">🎯</div>
        <h3>BE CERTAIN</h3>
        <p>You only get one chance to issue the arrest warrant. Make your accusation count.</p>
      </div>

      <div class="tip-card">
        <div class="tip-icon">🤝</div>
        <h3>PLAY WITH FRIENDS</h3>
        <p>Discuss theories, debate suspects, and solve together for the best experience.</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section" in:fade={{ delay: 500 }}>
    <h2>READY TO SOLVE YOUR FIRST CASE?</h2>
    <p>Choose from our collection of immersive murder mysteries set across Kenya.</p>
    <div class="cta-buttons">
      <a href="/games" class="cta-primary">BROWSE CASE FILES</a>
      <a 
        href="https://murdermysterygameske.hustlesasa.shop/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="cta-secondary"
      >
        SHOP ON HUSTLESASA
      </a>
    </div>
  </section>

</div>

<style>
  :global(body) {
    margin: 0;
    background: #050505;
    font-family: 'Inter', sans-serif;
  }

  .how-to-play-container {
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(177, 32, 32, 0.15), transparent 40%), #050505;
    color: #ffffff;
    padding: 60px 2rem;
  }

  /* Header */
  .page-header {
    text-align: center;
    margin-bottom: 60px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .header-badge {
    display: inline-block;
    background: rgba(177, 32, 32, 0.2);
    border: 1px solid #b12020;
    color: #b12020;
    padding: 8px 20px;
    font-size: 0.75rem;
    letter-spacing: 3px;
    font-weight: 700;
    margin-bottom: 20px;
    border-radius: 4px;
  }

  h1 {
    font-family: 'Cinzel', serif;
    font-size: 3rem;
    margin: 0;
    letter-spacing: 2px;
    font-weight: 900;
  }

  .header-line {
    width: 80px;
    height: 3px;
    background: #b12020;
    margin: 20px auto;
  }

  .header-subtitle {
    color: #8d93a8;
    font-size: 1.1rem;
    margin: 0;
  }

  /* Steps Navigation */
  .steps-navigation {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 40px;
  }

  .step-nav-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 15px 20px;
    background: rgba(16, 16, 20, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #8d93a8;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 8px;
    min-width: 120px;
  }

  .step-nav-btn:hover {
    border-color: #b12020;
    color: #ffffff;
    transform: translateY(-2px);
  }

  .step-nav-btn.active {
    background: rgba(177, 32, 32, 0.2);
    border-color: #b12020;
    color: #ffffff;
    box-shadow: 0 0 20px rgba(177, 32, 32, 0.2);
  }

  .step-nav-icon {
    font-size: 1.5rem;
  }

  .step-nav-number {
    font-size: 0.7rem;
    letter-spacing: 1px;
    font-weight: 700;
    color: #b12020;
  }

  .step-nav-title {
    font-size: 0.7rem;
    letter-spacing: 1px;
    font-weight: 700;
  }

  /* Step Display */
  .step-display {
    max-width: 800px;
    margin: 0 auto 60px;
  }

  .step-card {
    background: rgba(16, 16, 20, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 40px;
    backdrop-filter: blur(10px);
  }

  .step-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .step-number-display {
    font-size: 3rem;
    font-weight: 900;
    color: rgba(177, 32, 32, 0.3);
    font-family: 'Cinzel', serif;
  }

  .step-icon-display {
    font-size: 2.5rem;
  }

  .step-header h2 {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    margin: 0;
    letter-spacing: 1px;
  }

  .step-description {
    font-size: 1.1rem;
    color: #8d93a8;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .step-details h3,
  .investigation-sections h3 {
    font-size: 0.85rem;
    letter-spacing: 2px;
    color: #b12020;
    margin-bottom: 15px;
  }

  .step-details ul {
    list-style: none;
    padding: 0;
  }

  .step-details li {
    padding: 10px 0;
    padding-left: 25px;
    position: relative;
    color: #e2e8f0;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .step-details li::before {
    content: "›";
    position: absolute;
    left: 0;
    color: #b12020;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .investigation-sections {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .section-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 20px;
  }

  .section-name {
    font-weight: 700;
    letter-spacing: 1px;
    color: #ffffff;
    margin-bottom: 5px;
    font-size: 0.9rem;
  }

  .section-content {
    color: #8d93a8;
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .warning-box {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 68, 68, 0.1);
    border: 1px solid #ff4444;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    color: #ff8888;
    font-size: 0.9rem;
  }

  .warning-icon {
    font-size: 1.2rem;
  }

  .purchase-link {
    display: inline-block;
    margin-top: 20px;
    padding: 15px 30px;
    background: #b12020;
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .purchase-link:hover {
    background: #cd3737;
    box-shadow: 0 0 30px rgba(177, 32, 32, 0.4);
  }

  .step-navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-btn {
    padding: 12px 24px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 0.85rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .nav-btn:hover {
    background: #b12020;
    border-color: #b12020;
  }

  .nav-btn.prev {
    color: #8d93a8;
  }

  .nav-btn.prev:hover {
    color: #ffffff;
  }

  /* Game Structure */
  .game-structure {
    max-width: 800px;
    margin: 0 auto 60px;
  }

  .structure-toggle {
    width: 100%;
    padding: 20px;
    background: rgba(16, 16, 20, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .structure-toggle:hover {
    border-color: #b12020;
  }

  .toggle-icon {
    font-size: 0.8rem;
  }

  .structure-flow {
    margin-top: 20px;
    background: rgba(16, 16, 20, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 20px;
  }

  .flow-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    text-align: left;
    position: relative;
  }

  .flow-icon {
    font-size: 1.5rem;
    width: 40px;
    text-align: center;
  }

  .flow-step {
    font-weight: 700;
    letter-spacing: 1px;
    color: #ffffff;
    min-width: 120px;
    font-size: 0.85rem;
  }

  .flow-action {
    color: #8d93a8;
    font-size: 0.85rem;
  }

  .flow-arrow {
    position: absolute;
    left: 35px;
    bottom: -15px;
    color: #b12020;
    font-size: 1.2rem;
  }

  /* Tips Section */
  .tips-section {
    max-width: 1000px;
    margin: 0 auto 60px;
  }

  .tips-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .tips-header h2 {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    margin: 0;
    letter-spacing: 2px;
  }

  .header-line-small {
    width: 60px;
    height: 2px;
    background: #b12020;
    margin: 15px auto 0;
  }

  .tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .tip-card {
    background: rgba(16, 16, 20, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 25px;
    transition: all 0.3s ease;
  }

  .tip-card:hover {
    transform: translateY(-3px);
    border-color: rgba(177, 32, 32, 0.3);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }

  .tip-icon {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .tip-card h3 {
    font-size: 0.9rem;
    letter-spacing: 1px;
    margin: 0 0 10px 0;
    color: #ffffff;
  }

  .tip-card p {
    color: #8d93a8;
    font-size: 0.85rem;
    line-height: 1.6;
    margin: 0;
  }

  /* CTA Section */
  .cta-section {
    text-align: center;
    padding: 60px 20px;
    background: rgba(16, 16, 20, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    max-width: 800px;
    margin: 0 auto;
  }

  .cta-section h2 {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
    margin: 0 0 15px 0;
    letter-spacing: 1px;
  }

  .cta-section p {
    color: #8d93a8;
    margin-bottom: 30px;
    font-size: 1rem;
  }

  .cta-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-primary {
    padding: 15px 30px;
    background: #ffffff;
    color: #000000;
    text-decoration: none;
    font-weight: 800;
    letter-spacing: 1px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .cta-primary:hover {
    background: #b12020;
    color: #ffffff;
    transform: translateY(-2px);
  }

  .cta-secondary {
    padding: 15px 30px;
    background: transparent;
    border: 1px solid #b12020;
    color: #b12020;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .cta-secondary:hover {
    background: #b12020;
    color: #ffffff;
    transform: translateY(-2px);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .how-to-play-container {
      padding: 40px 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    .step-card {
      padding: 25px;
    }

    .step-header {
      flex-direction: column;
      text-align: center;
      gap: 10px;
    }

    .step-navigation-buttons {
      flex-direction: column;
      gap: 10px;
    }

    .nav-btn {
      width: 100%;
      text-align: center;
    }

    .steps-navigation {
      flex-direction: column;
    }

    .step-nav-btn {
      flex-direction: row;
      min-width: auto;
    }

    .flow-item {
      flex-direction: column;
      text-align: center;
      gap: 5px;
    }

    .flow-step {
      min-width: auto;
    }

    .flow-arrow {
      display: none;
    }

    .cta-buttons {
      flex-direction: column;
    }
  }
</style>
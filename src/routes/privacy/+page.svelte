<svelte:head>
  <title>Privacy Policy | Murder Mystery Games KE</title>

  <meta
    name="description"
    content="Privacy Policy for Murder Mystery Games KE."
  />
</svelte:head>

<script>
  const updated = "11 MAY 2026";
</script>

<main class="privacy-page">
  <div class="privacy-container">
    <div class="policy-header">
      <span class="protocol">OFFICIAL DOCUMENTATION</span>

      <h1>
        PRIVACY <span class="accent">POLICY</span>
      </h1>

      <p class="updated">
        Last Updated: {updated}
      </p>
    </div>

    <div class="policy-body">
      <section>
        <h2>1. Introduction</h2>

        <p>
          Murder Mystery Games KE values your privacy. This policy explains
          how information may be collected, stored, and used when accessing
          our website, digital case files, and related services.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>

        <p>
          We may collect limited information including:
        </p>

        <ul>
          <li>Name and email address during purchases or contact submissions</li>
          <li>Transaction details related to digital access purchases</li>
          <li>Basic device and browser information for website functionality</li>
          <li>Anonymous website analytics and usage data</li>
        </ul>
      </section>

      <section>
        <h2>3. Payments</h2>

        <p>
          Payments for premium access are processed securely through
          HustleSasa. Murder Mystery Games KE does not directly store
          card or mobile payment information on this website.
        </p>
      </section>

      <section>
        <h2>4. Digital Access Files</h2>

        <p>
          Premium purchases are delivered digitally in the form of downloadable
          PDF access files containing instructions and unlock codes.
        </p>

        <p>
          Purchased access files are intended for personal use only and may not
          be redistributed, resold, copied, or publicly shared without
          permission.
        </p>
      </section>

      <section>
        <h2>5. How Information Is Used</h2>

        <p>
          Information collected may be used to:
        </p>

        <ul>
          <li>Process purchases and deliver digital products</li>
          <li>Improve gameplay experience and website performance</li>
          <li>Respond to customer support inquiries</li>
          <li>Provide updates about new case releases or archive access</li>
        </ul>
      </section>

      <section>
        <h2>6. Data Protection</h2>

        <p>
          Reasonable measures are taken to protect user information and prevent
          unauthorized access to stored data.
        </p>

        <p>
          However, no online platform can guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>7. Third-Party Services</h2>

        <p>
          This platform may use third-party services including payment
          processors, analytics tools, and hosting providers.
        </p>

        <p>
          These services may operate under their own privacy policies.
        </p>
      </section>

      <section>
        <h2>8. Cookies</h2>

        <p>
          Basic cookies or similar technologies may be used to improve website
          performance and user experience.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>

        <p>
          For privacy-related questions or concerns, contact:
        </p>

        <p class="contact">
          murdermysterygameske@gmail.com
        </p>
      </section>
    </div>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    background: #050505;
    color: #fff;
    font-family: 'Inter', sans-serif;
  }

  :root {
    --bg: #050505;
    --border: rgba(255, 255, 255, 0.08);
    --muted: #8b8b95;
    --accent: #b12020;
  }

  .privacy-page {
    min-height: 100vh;
    padding: 100px 24px;
    background:
      radial-gradient(circle at top, rgba(177, 32, 32, 0.12), transparent 35%),
      var(--bg);
  }

  .privacy-container {
    max-width: 850px;
    margin: 0 auto;
  }

  .policy-header {
    margin-bottom: 70px;
    text-align: center;
  }

  .protocol {
    display: inline-block;
    margin-bottom: 20px;
    color: var(--accent);
    font-size: 0.72rem;
    letter-spacing: 0.3rem;
    font-family: monospace;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.8rem, 7vw, 4.5rem);
    font-family: 'Cinzel', serif;
    letter-spacing: 0.08em;
    line-height: 1;
  }

  .accent {
    color: var(--accent);
  }

  .updated {
    margin-top: 20px;
    color: var(--muted);
    font-size: 0.85rem;
    letter-spacing: 0.08rem;
  }

  .policy-body {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  section {
    border-bottom: 1px solid var(--border);
    padding-bottom: 40px;
  }

  h2 {
    margin: 0 0 18px;
    font-size: 1.1rem;
    font-family: 'Cinzel', serif;
    letter-spacing: 0.08rem;
  }

  p {
    color: var(--muted);
    line-height: 1.9;
    font-size: 0.97rem;
    margin: 0 0 18px;
  }

  ul {
    padding-left: 20px;
    margin: 0;
  }

  li {
    color: var(--muted);
    margin-bottom: 12px;
    line-height: 1.7;
  }

  .contact {
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.03rem;
  }

  @media (max-width: 768px) {
    .privacy-page {
      padding: 80px 20px;
    }

    h1 {
      font-size: 2.5rem;
    }

    section {
      padding-bottom: 30px;
    }
  }
</style>
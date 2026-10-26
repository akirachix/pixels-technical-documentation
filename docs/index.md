---
layout: page
---

<div class="hero-container">
  <div class="logo-wrapper">
    <img class="main-logo" src="/images/icon.png" alt="MvuviGo Logo" />
    <h1 class="logo-text">Mvuvi<span>Go</span></h1>
  </div>
  
  <p class="hero-tagline">When the horizon is your office, connectivity is survival. MvuviGo delivers relentless tracking and emergency response for those who make their living on the Lake Victoria waters.</p>
  
  <div class="hero-actions">
    <a class="btn brand-btn" href="/overview/product-definition/">Get Started</a>
    <a class="btn alt-btn" href="/overview/key-features">Explore the Platform</a>
  </div>
</div>

<div class="advantages-grid">
  <div class="card">
    <h3>Unbroken Connectivity</h3>
    <p>Leveraging custom LoRa mesh networks and edge hardware to keep communication alive when cellular signals drop off the map.</p>
  </div>
  
  <div class="card">
    <h3>Seamless Fleet Management</h3>
    <p>A comprehensive dashboard for station operators to register vessels, assign RFID wristbands, and monitor active trips in real time.</p>
  </div>
  
  <div class="card">
    <h3>Rapid Response Protocol</h3>
    <p>Instant distress alerts that route directly to the nearest rescue responders, turning critical emergencies into coordinated actions.</p>
  </div>
</div>

<div class="footer-callout-container">
  <div class="footer-callout">
    <div class="footer-line">
      Learn more about MvuviGo on our <a href="https://pixels-informational-website.vercel.app/" target="_blank">Website</a>.
    </div>
    <div class="footer-line">
      Ready to get started? <a href="/setup/installation">Start here!</a>
    </div>
  </div>
</div>

<style>
.hero-container {
  text-align: center;
  padding: 60px 20px 40px 20px;
  width: 100%; 
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px; 
  margin-bottom: 24px;
}

.main-logo {
  height: 72px;
  width: auto;
  display: block;
}

.logo-text {
  font-size: 3.8rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -1.5px;
  line-height: 1;
  color: #0e7486;
}

.logo-text span { color: #00a8c6; }
.dark .logo-text { color: #ffffff; }
.dark .logo-text span { color: #00a8c6; }

.hero-tagline {
  font-size: 1.75rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
  max-width: 850px;
  margin: 0 auto 35px auto;
  line-height: 1.6;
}
.dark .hero-tagline {
  color: #ffffff !important;
}


.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.brand-btn {
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text) !important;
}
.brand-btn:hover { background-color: var(--vp-button-brand-hover-bg); }

.alt-btn {
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1) !important;
}
.alt-btn:hover { background-color: var(--vp-c-bg-soft); }

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 100%; 
  margin: 40px auto 80px auto;
  padding: 0 24px;
}

.card {
  background: var(--vp-c-bg-soft); 
  border: 1px solid var(--vp-c-bg-alt);
  border-radius: 12px;
  padding: 30px;
  text-align: left;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  transform: translateY(-6px); 
  border-color: #00a8c6; 
}

.card h3 {
  font-size: 1.25rem !important;
  margin: 0 0 12px 0; 
  color: #0e7486 !important;
  line-height: 1.4 !important;
}
.dark .card h3 { color: #00a8c6 !important; }

.card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-1) !important;
  line-height: 1.6;
  margin: 0;
}

.footer-callout-container {
  width: 100%;
  padding: 40px 24px 20px 24px;
}

.footer-callout {
  background-color: var(--vp-c-bg-soft);
  border-left: 4px solid #0e7486; 
  border-top: 1px solid var(--vp-c-bg-alt);
  border-right: 1px solid var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-bg-alt);
  border-radius: 0 12px 12px 0;
  padding: 24px 30px;
  text-align: left;
  max-width: 100%; 
  margin: 0 auto;
}
.dark .footer-callout { border-left-color: #00a8c6; }

.footer-line {
  font-size: 1.05rem;
  color: var(--vp-c-text-1) !important;
  font-style: italic;
  line-height: 1.6;
}

.footer-callout a { color: #0e7486; font-weight: 600; text-decoration: underline; }
.dark .footer-callout a { color: #00a8c6; }

@media (max-width: 960px) {
  .advantages-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .advantages-grid { grid-template-columns: 1fr; }
  .logo-wrapper { flex-direction: column; }
}
</style>
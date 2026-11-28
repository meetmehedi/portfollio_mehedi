/**
 * Silicon Valley AI Lab — Interactive Engine (Vercel / Linear Style)
 * Includes: Cursor spotlight tracking, Ethereal AI Latent Network canvas,
 * Publication tabs, Abstract expansion, BibTeX copy & modal, Theme switcher.
 */

// ── Dynamic Cursor Spotlight Tracking for Cards ──
function initSpotlightTracking() {
  const cards = document.querySelectorAll('.spotlight-card, .pub-card, .bento-card, .award-hero-card, .about-card, .stat-box, .leadership-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
document.addEventListener('DOMContentLoaded', initSpotlightTracking);

// ── Progress Bar & Floating Nav ──
const progressBar = document.getElementById('progress-bar');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
let lastY = 0;

function onScroll() {
  const st = window.scrollY;
  const dh = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) {
    progressBar.style.width = (dh > 0 ? (st / dh) * 100 : 0) + '%';
  }
  if (nav) {
    if (st > lastY + 8 && st > 300) nav.classList.add('hide');
    else if (st < lastY - 8) nav.classList.remove('hide');
  }
  lastY = st;

  let current = '';
  sections.forEach(s => {
    if (s.getBoundingClientRect().top < 240) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
  const backTop = document.getElementById('back-top');
  if (backTop) backTop.classList.toggle('visible', st > 500);
}
window.addEventListener('scroll', onScroll, { passive: true });

// ── Typewriter Effect ──
function initTypewriter() {
  const nameEl = document.getElementById('typeName');
  if (!nameEl) return;

  const caret = document.createElement('span');
  caret.className = 'caret';

  const fullName = 'Md. Mehedi Hasan';
  let i = 0;
  nameEl.textContent = '';
  nameEl.appendChild(caret);

  const timer = setInterval(() => {
    i++;
    nameEl.textContent = fullName.slice(0, i);
    nameEl.appendChild(caret);
    if (i >= fullName.length) {
      clearInterval(timer);
    }
  }, 70);
}
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initTypewriter, 200);
});

// ── Ethereal AI Latent Space Particle Canvas ──
const canvas = document.getElementById('particle-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const COUNT = Math.min(65, Math.floor(W * H / 22000));
  const pts = Array.from({ length: COUNT }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.2 + 0.4,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    a: Math.random() * 0.4 + 0.2
  }));

  // Ethereal Math & AI latent formulas
  const mathNodes = [
    { text: "L_InfoNCE = -log(e^(z_i·z_j/τ) / ∑ e^(z_i·z_k/τ))", x: W * 0.72, y: H * 0.28, vx: -0.05, vy: 0.04 },
    { text: "Attention(Q,K,V) = softmax(QK^T / √d_k)V", x: W * 0.45, y: H * 0.78, vx: 0.04, vy: -0.06 },
    { text: "SEM Model: η = Bη + Γξ + ζ", x: W * 0.85, y: H * 0.62, vx: 0.04, vy: 0.05 },
    { text: "ϕ_i(v) = ∑ w_S [v(S ∪ {i}) - v(S)]  [SHAP]", x: W * 0.15, y: H * 0.84, vx: -0.04, vy: -0.03 },
    { text: "L_focal = -α_t (1 - p_t)^γ log(p_t)", x: W * 0.25, y: H * 0.18, vx: -0.05, vy: 0.03 },
    { text: "Student-YOLOv8 :: FPN Backbone", x: W * 0.60, y: H * 0.14, vx: 0.05, vy: -0.04 }
  ];

  let mouseX = -1000, mouseY = -1000;
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // Particles
    pts.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? `rgba(255, 255, 255, ${p.a * 0.4})`
        : `rgba(0, 0, 0, ${p.a * 0.25})`;
      ctx.fill();
    });

    // Formulas
    ctx.font = '10.5px "JetBrains Mono", monospace';
    mathNodes.forEach(m => {
      m.x += m.vx;
      m.y += m.vy;
      if (m.x < 20) m.x = W - 180;
      if (m.x > W - 20) m.x = 40;
      if (m.y < 20) m.y = H - 40;
      if (m.y > H - 20) m.y = 40;

      const distMouse = Math.hypot(m.x - mouseX, m.y - mouseY);
      const isNear = distMouse < 180;

      ctx.fillStyle = isNear
        ? (isDark ? "rgba(129, 140, 248, 0.95)" : "rgba(79, 70, 229, 0.95)")
        : (isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(0, 0, 0, 0.2)");
      ctx.fillText(m.text, m.x, m.y);

      // Delicate connections
      pts.forEach(p => {
        const d = Math.hypot(p.x - m.x, p.y - m.y);
        if (d < 85) {
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = isDark
            ? `rgba(129, 140, 248, ${(1 - d / 85) * (isNear ? 0.2 : 0.05)})`
            : `rgba(79, 70, 229, ${(1 - d / 85) * (isNear ? 0.15 : 0.04)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    // Particle web connections
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = isDark
            ? `rgba(255, 255, 255, ${(1 - d / 100) * 0.06})`
            : `rgba(0, 0, 0, ${(1 - d / 100) * 0.04})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

// ── Scroll Reveal ──
function revealAll() {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.02 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
window.addEventListener('DOMContentLoaded', revealAll);
window.addEventListener('load', revealAll);
setTimeout(revealAll, 200);

// ── Publication Tabs ──
const tabs = document.querySelectorAll('.pub-tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pub-list').forEach(l => l.classList.remove('active'));
    tab.classList.add('active');
    const targetList = document.getElementById(tab.id.replace('tab-', 'list-'));
    if (targetList) targetList.classList.add('active');
  });
});

// ── BibTeX Database ──
const bib = {
  hasan2025socio: `@inproceedings{hasan2025socio,\n title={A Socio-Economic Machine Learning Framework for Predicting Programmer Retention},\n author={Hasan, M. M. and Rakib, R. and Molla, M. A. and Borhan, R. and Based, M. A.},\n booktitle={BIM 2025}, year={2025}}`,
  hasan2025fraud: `@inproceedings{hasan2025fraud,\n title={Fraud Detection with DistilBERT},\n author={Hasan, M. M. and Mahin, A. A. and Chakraborty, S. and Afrose, M. and Mia, M. A. and Based, M. A.},\n booktitle={BIM 2025}, year={2025}}`,
  hasan2026mewc: `@inproceedings{hasan2026mewc,\n title={MEWC-RL++},\n author={Hasan, M. M. and Mahin, A. A. and Afrose, M. and Based, M. A.},\n booktitle={ECCT 2026}, year={2026}}`,
  mrida2026impact: `@inproceedings{mrida2026impact,\n title={Impact of Social Media Usage on Academic Performance},\n author={Mrida, M. A. R. and Hasan, M. M. and Ausaf, S. M. N. and Ray, P. C. and Based, M. A.},\n booktitle={ECCT 2026}, year={2026}}`,
  biswas2026lightweight: `@inproceedings{biswas2026lightweight,\n title={Lightweight Deep Learning for Urban Traffic Intelligence},\n author={Biswas, S. and Hasan, M. M. and Rakib, R. and Mahin, A. A. and Afrose, M. and Based, M. A.},\n booktitle={ECCT 2026}, year={2026}}`,
  asif2026federated: `@inproceedings{asif2026federated,\n title={Federated and Explainable ML Framework for Cyber Attack Detection in Smart Grids},\n author={Asif, M. and Hasan, M. M. and Based, M. A.},\n booktitle={ECCT 2026}, year={2026}}`,
  hasan2026student: `@article{hasan2026student,\n title={Student-YOLOv8},\n author={Hasan, M. M. and Hossain, M. A. and Mahin, A. A. and Khatun, F.},\n journal={IUB Journal of Science and Engineering}, year={2026}}`,
  rion2026suicidal: `@inproceedings{rion2026suicidal,\n title={Cross-Cultural Early Detection of Suicidal Ideation in Adolescents},\n author={Rion, A. M. and Pallob, M. M. I. and Rakib, R. and Molla, M. A. and Hasan, M. M.},\n booktitle={IEEE TENCON 2026}, year={2026}}`,
  molla2026hybrid: `@unpublished{molla2026hybrid,\n title={A Hybrid Explainable AI Framework for Earthquake Magnitude Estimation},\n author={Molla, M. A. and Rakib, R. and Hasan, M. M. and Pallob, M. I. and Rion, A. M. and Based, M. A.}, year={2026}}`,
  molla2026faircf: `@unpublished{molla2026faircf,\n title={FairCF: Fair Counterfactual Explanations for Student Academic Performance Prediction},\n author={Molla, M. A. and Rakib, R. and Pallob, M. I. and Hasan, M. M. and Rion, A. M.}, year={2026}}`,
  hasan2026dyslexia: `@inproceedings{hasan2026dyslexia,\n title={Toward an AI-Assisted Dyslexia Detection Framework for Bangla-Speaking Children: A Cross-Linguistic Conceptual Model Integrating Analytically Transparent Bayesian Attribution and Orthographic Complexity},\n author={Ray, D. D. and Hasan, M. M. and Ausaf, S. M. N. and Based, M. A. and Rahman, M. M.},\n booktitle={2026 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)},\n year={2026},\n organization={IEEE}}`
};

const paperData = {
  hasan2025socio: {
    title: "A Socio-Economic Machine Learning Framework for Predicting Programmer Retention",
    authors: "<b>Hasan, M. M.</b>, Rakib, R., Molla, M. A., Borhan, R., Based, M. A.",
    venue: "BIM 2025 · Taylor & Francis",
    badge: "accepted",
    abstract: "This study proposes an integrative socio-economic machine learning framework utilizing Structural Equation Modeling (SEM) and supervised classifiers to model developer retention. By quantifying socio-economic pressures, compensation structures, and workplace autonomy, our model achieves high predictive fidelity while detailing key structural retention drivers."
  },
  hasan2025fraud: {
    title: "Fraud Detection with DistilBERT: A Transformer-Based Approach to Behavioral Banking Sequences",
    authors: "<b>Hasan, M. M.</b>, Mahin, A. A., Chakraborty, S., Afrose, M., Mia, M. A., Based, M. A.",
    venue: "BIM 2025 · Taylor & Francis",
    badge: "accepted",
    abstract: "Detecting fraudulent behavior in digital banking requires capturing subtle sequential temporal patterns. We present a fine-tuned DistilBERT transformer framework optimized for high-velocity transaction sequences, combined with SHAP feature attribution to explain model decisions and minimize false positives."
  },
  hasan2026mewc: {
    title: "MEWC-RL++: A Modular and Adaptive Continual Reinforcement Learning Framework for Automation Systems",
    authors: "<b>Hasan, M. M.</b>, Mahin, A. A., Afrose, M., Based, M. A.",
    venue: "ECCT 2026 · Taylor & Francis",
    badge: "accepted",
    abstract: "Robotic automation systems operating in non-stationary environments frequently suffer from catastrophic forgetting. MEWC-RL++ integrates Memory-Efficient Weight Consolidation with InfoNCE contrastive representation learning, enabling continuous adaptation without degrading historical task policies."
  },
  mrida2026impact: {
    title: "Impact of Social Media Usage on Academic Performance: A Hybrid Machine Learning and SEM Approach",
    authors: "Mrida, M. A. R., <b>Hasan, M. M.</b>, Ausaf, S. M. N., Ray, P. C., Based, M. A.",
    venue: "ECCT 2026 · Taylor & Francis",
    badge: "accepted",
    abstract: "This paper evaluates the direct and mediated socio-psychological effects of adolescent social media consumption on academic performance. Combining PLS-SEM path modeling with ensemble ML classifiers, we identify critical sleep disruption and cognitive load mediation thresholds."
  },
  biswas2026lightweight: {
    title: "Lightweight Deep Learning for Urban Traffic Intelligence: A MobileNetV2-YOLOv8 Pipeline with Adaptive Resolution Processing",
    authors: "Biswas, S., <b>Hasan, M. M.</b>, Rakib, R., Mahin, A. A., Afrose, M., Based, M. A.",
    venue: "ECCT 2026 · ACSR, Springer Nature",
    badge: "accepted",
    abstract: "Urban traffic monitoring on edge hardware requires minimal computational overhead. We engineer a lightweight MobileNetV2-YOLOv8 detection architecture featuring adaptive resolution processing, reducing inference latency by 42% while retaining 91.4% mAP50 detection accuracy."
  },
  asif2026federated: {
    title: "Federated and Explainable Machine Learning Framework for Cyber Attack Detection in Smart Grids",
    authors: "Asif, M., <b>Hasan, M. M.</b>, Based, M. A.",
    venue: "ECCT 2026 · Taylor & Francis",
    badge: "accepted",
    abstract: "Smart grid infrastructures face persistent distributed cyber attacks. We formulate a privacy-preserving federated learning paradigm equipped with KernelSHAP attribution, allowing sub-station nodes to collaboratively train intrusion models without sharing raw power telemetry."
  },
  hasan2026student: {
    title: "Student-YOLOv8: A YOLO-Based Deep Learning Approach for Real-Time Student Detection and Face Recognition in Classroom Attendance Monitoring Systems",
    authors: "<b>Hasan, M. M.</b>, Hossain, M. A., Mahin, A. A., Khatun, F.",
    venue: "IUB Journal of Science and Engineering (AJSE)",
    badge: "accepted",
    abstract: "Student-YOLOv8 introduces an anchor-free feature pyramid network designed for simultaneous student detection and face recognition in dense classroom environments, operating at 45 FPS on edge devices."
  },
  rion2026suicidal: {
    title: "Cross-Cultural Early Detection of Suicidal Ideation in Adolescents: An Ensemble Machine Learning Approach Using GSHS Data",
    authors: "Rion, A. M., Pallob, M. M. I., Rakib, R., Molla, M. A., <b>Hasan, M. M.</b>",
    venue: "IEEE TENCON 2026",
    badge: "accepted",
    abstract: "Leveraging WHO Global School-based Student Health Survey (GSHS) datasets across multiple developing nations, we construct a cross-cultural ensemble ML architecture to identify early socio-environmental risk indicators of suicidal ideation."
  },
  molla2026hybrid: {
    title: "A Hybrid Explainable AI Framework for Concurrent Earthquake Magnitude Estimation and Severity Classification",
    authors: "Molla, M. A., Rakib, R., <b>Hasan, M. M.</b>, Pallob, M. I., Rion, A. M., Based, M. A.",
    venue: "MIET 2026 · Springer Nature LNNS",
    badge: "accepted",
    abstract: "Dual-objective seismic analysis system utilizing gradient boosted decision trees and SHAP values to estimate peak earthquake magnitude while classifying ground shaking severity from USGS sensor streams."
  },
  molla2026faircf: {
    title: "FairCF: Fair Counterfactual Explanations for Student Academic Performance Prediction",
    authors: "Molla, M. A., Rakib, R., Pallob, M. I., <b>Hasan, M. M.</b>, Rion, A. M.",
    venue: "ICAIMS 2026-Malaysia-IEEE",
    badge: "accepted",
    abstract: "FairCF formulates actionable, recourse-aware counterfactual explanations for student academic risk models while mathematically constraining demographic disparity across sensitive socio-economic groups."
  },
  hasan2026dyslexia: {
    title: "Toward an AI-Assisted Dyslexia Detection Framework for Bangla-Speaking Children: A Cross-Linguistic Conceptual Model Integrating Analytically Transparent Bayesian Attribution and Orthographic Complexity",
    authors: "Ray, D. D., <b>Hasan, M. M.</b>, Ausaf, S. M. N., Based, M. A., Rahman, M. M.",
    venue: "IEEE BECITHCON 2026 · IEEE",
    badge: "accepted",
    abstract: "This paper proposes a Bangla-specific, analytically transparent AI-assisted framework for dyslexia detection, targeting the unique orthographic and linguistic characteristics of Bangla script. The conceptual model integrates Bayesian probabilistic classification with interpretable log-likelihood ratio analysis to support transparent and responsible early screening in low-resource educational environments. Key cognitive and linguistic markers explored include conjunct consonant clusters (যুক্তাক্ষর), spatial diacritics (মাত্রা/কার), Rapid Automatized Naming (RAN), and morphemic segmentation. By combining cross-linguistic evidence with Bangla-specific orthographic complexity, the framework advances equitable, explainable AI for neurodiverse children in underserved communities."
  }
};

function copyBib(key) {
  if (!bib[key]) return;
  navigator.clipboard.writeText(bib[key]).then(() => showToast('✓ BibTeX copied to clipboard'));
}

function openPaperModal(key) {
  const data = paperData[key];
  if (!data) return;
  const metaEl = document.getElementById('modalPaperMeta');
  if (metaEl) {
    metaEl.innerHTML = `<span class="pub-badge ${data.badge}">${data.badge}</span><span class="pub-venue">${data.venue}</span>`;
  }
  const cmdEl = document.getElementById('modalPaperCmd');
  if (cmdEl) cmdEl.textContent = `✦ publication_${key}.pdf`;
  const titleEl = document.getElementById('modalPaperTitle');
  if (titleEl) titleEl.textContent = data.title;
  const authEl = document.getElementById('modalPaperAuthors');
  if (authEl) authEl.innerHTML = `Authors: ${data.authors}`;
  const absEl = document.getElementById('modalPaperAbstract');
  if (absEl) absEl.textContent = data.abstract;
  const bibEl = document.getElementById('modalPaperBib');
  if (bibEl) bibEl.textContent = bib[key] || '';
  const copyBtn = document.getElementById('modalCopyBibBtn');
  if (copyBtn) copyBtn.onclick = () => copyBib(key);

  const backdrop = document.getElementById('paperModalBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closePaperModal() {
  const backdrop = document.getElementById('paperModalBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePaperModal();
});

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

// ── Mobile Navigation Drawer ──
const menuToggle = document.getElementById('menuToggle');
const navLinksEl = document.getElementById('navLinks');
if (menuToggle && navLinksEl) {
  menuToggle.addEventListener('click', e => {
    e.stopPropagation();
    navLinksEl.classList.toggle('open');
    menuToggle.textContent = navLinksEl.classList.contains('open') ? '✕' : '☰';
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
      menuToggle.textContent = '☰';
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#nav')) {
      navLinksEl.classList.remove('open');
      menuToggle.textContent = '☰';
    }
  });
}

// ── Theme Switcher ──
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');
const html = document.documentElement;

function applyTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  if (iconSun && iconMoon) {
    iconSun.classList.toggle('active', t === 'light');
    iconMoon.classList.toggle('active', t !== 'light');
  }
}

applyTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
}

// ── Contact Form ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('cf-name').value;
    const email = document.getElementById('cf-email').value;
    const subject = document.getElementById('cf-subject').value;
    const message = document.getElementById('cf-message').value;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:meetmehedi1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast('✓ Opening your email client...');
  });
}

// ── vCard Download ──
function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Hasan;Md. Mehedi;;;',
    'FN:Md. Mehedi Hasan',
    'ORG:Dhaka International University',
    'TITLE:AI & ML Researcher',
    'EMAIL;TYPE=INTERNET:meetmehedi1@gmail.com',
    'TEL;TYPE=CELL:+8801403005254',
    'URL:https://www.mdmehedihasan.us/',
    'X-SOCIALPROFILE;TYPE=github:https://github.com/meetmehedi',
    'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/meetmehedi',
    'X-SOCIALPROFILE;TYPE=kaggle:https://www.kaggle.com/meetmehedi',
    'X-SOCIALPROFILE;TYPE=whatsapp:+8801403005254',
    'NOTE:AI & ML Researcher · IEEE Member · NASA International Space Apps Regional Champion, Global Nominee and Honorable mention at global finalist',
    'END:VCARD'
  ].join('\r\n');
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Mehedi_Hasan.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('✓ vCard downloaded');
}
window.downloadVCard = downloadVCard;
window.copyBib = copyBib;
window.openPaperModal = openPaperModal;
window.closePaperModal = closePaperModal;

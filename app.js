/**
 * SignalForge AI — Frontend SaaS Application & Landing Page Controller
 * Connects to the backend REST API (/api/*) with seamless offline/file:// fallback.
 */

const DEFAULT_SEED = {
  user: {
    id: "usr_founder_01",
    name: "Alex Mercer",
    email: "founder@signalforge.io",
    company: "Apex Growth Partners",
    offer: "We help B2B companies fix conversion leaks and add 15-25 qualified sales demos per month.",
    calendarUrl: "https://cal.com/alex-mercer/15min-audit",
    plan: "growth",
    planName: "Growth Pro ($149/mo)",
    creditsUsed: 14,
    creditsLimit: 500,
    apiKeys: { openai: "", stripeSecret: "" }
  },
  leads: [
    {
      id: "lead_101",
      company: "Vanguard Freight Systems",
      domain: "vanguardfreight.io",
      contactName: "Marcus Vance",
      contactRole: "VP of Sales",
      contactEmail: "mvance@vanguardfreight.io",
      industry: "Logistics & Supply Chain",
      healthScore: 44,
      dealValue: 3500,
      status: "Replied",
      createdAt: "2026-11-05T14:20:00Z",
      leaks: [
        "No interactive quote calculator or instant booking CTA above the fold",
        "Missing Meta Description & OpenGraph tags on primary landing pages",
        "No live chat or AI lead-capture widget detected (losing after-hours freight inquiries)",
        "Mobile LCP load time estimated > 3.8s due to unoptimized hero assets"
      ],
      techStack: ["WordPress", "Cloudflare", "Google Analytics 4"],
      metrics: { seoScore: 52, conversionScore: 35, speedScore: 48, trustScore: 41 },
      outreach: {
        subject1: "Quick question re: vanguardfreight.io quote funnel, Marcus",
        email1: "Hi Marcus,\n\nI was reviewing Vanguard Freight Systems' site (vanguardfreight.io) earlier today and noticed two quick conversion leaks that are likely costing your team inbound freight RFQs:\n\n1. Visitors have to scroll past 3 blocks of text to find a contact form, with no instant quote CTA above the fold.\n2. There's no live chat or automated capture widget for after-hours logistics inquiries.\n\nWe help B2B companies fix conversion leaks and add 15-25 qualified sales demos per month. I recorded a 90-second teardown showing how fixing those 2 items could lift inbound quote requests by ~28%.\n\nMind if I send over the link, or grab 15 mins here? https://cal.com/alex-mercer/15min-audit\n\nBest,\nAlex Mercer\nApex Growth Partners",
        subject2: "Re: Quick question re: vanguardfreight.io quote funnel, Marcus",
        email2: "Hi Marcus,\n\nFloating this back to the top of your inbox. I put together the full 1-page conversion audit for vanguardfreight.io (it scored a 44/100 on our B2B Conversion Index, mostly due to the missing above-the-fold RFQ trigger).\n\nEven if we never work together, your web team can implement the 3 fixes in under an afternoon.\n\nWant me to send the PDF report over?\n\nBest,\nAlex",
        subject3: "Should I cross Vanguard Freight off my list?",
        email3: "Hi Marcus,\n\nI know Q4 logistics schedules are packed, so I won't keep pinging you.\n\nIf capturing more inbound shippers from vanguardfreight.io isn't a priority right now, no worries at all. If it becomes a focus next quarter, feel free to book a quick slot anytime: https://cal.com/alex-mercer/15min-audit\n\nAll the best,\nAlex Mercer",
        linkedinNote: "Hi Marcus — ran a quick conversion & SEO teardown on vanguardfreight.io today (scored 44/100). Found 2 quick fixes on your quote page that could boost inbound shipper RFQs. Happy to share the 1-page report if useful!"
      }
    },
    {
      id: "lead_102",
      company: "CloudScale Security",
      domain: "cloudscalesec.com",
      contactName: "Elena Rostova",
      contactRole: "Chief Revenue Officer",
      contactEmail: "elena@cloudscalesec.com",
      industry: "B2B Cybersecurity SaaS",
      healthScore: 61,
      dealValue: 5000,
      status: "Booked Call",
      createdAt: "2026-11-06T09:15:00Z",
      leaks: [
        "Demo request form requires 9 mandatory fields (high drop-off friction)",
        "No interactive calendar routing (Calendly/ChiliPiper) after form submit",
        "Missing G2 / SOC2 trust badges near primary 'Book Demo' button"
      ],
      techStack: ["Next.js", "Segment", "HubSpot", "AWS"],
      metrics: { seoScore: 78, conversionScore: 49, speedScore: 72, trustScore: 45 },
      outreach: {
        subject1: "cloudscalesec.com's 9-field demo form + quick idea for Elena",
        email1: "Hi Elena,\n\nI just walked through the demo booking flow on cloudscalesec.com. Your SEO and page speed (72/100) are strong, but your '/book-demo' flow has a major friction point:\n\nRight now, prospects have to fill out 9 required fields without seeing instant calendar availability, and your SOC2/G2 social proof is buried in the footer instead of next to the submit button.\n\nIn B2B cybersecurity, trimming form fields from 9 to 4 + adding instant calendar routing typically lifts demo completions by 34%+.\n\nWe help B2B companies fix conversion leaks and add 15-25 qualified sales demos per month. Open to a quick 15-min walkthrough this week? https://cal.com/alex-mercer/15min-audit\n\nBest,\nAlex Mercer\nApex Growth Partners",
        subject2: "Re: cloudscalesec.com's 9-field demo form + quick idea for Elena",
        email2: "Hi Elena,\n\nFollowing up quickly — I mocked up how cloudscalesec.com's demo modal would look with a 2-step work-email capture + embedded SOC2 proof.\n\nHappy to send the before/after teardown over if you'd like to share it with your growth team.\n\nBest,\nAlex",
        subject3: "Permission to close your file, Elena?",
        email3: "Hi Elena,\n\nAssuming demo conversion optimization is already handled on your end for now. I'll close out my audit notes for CloudScale Security, but my calendar is always open if you ever want to compare notes: https://cal.com/alex-mercer/15min-audit\n\nCheers,\nAlex",
        linkedinNote: "Hi Elena — loved CloudScale's positioning, though I noticed your demo form has 9 required fields before routing to a rep. Put together a quick conversion teardown (61/100 score) if you're open to seeing the notes!"
      }
    },
    {
      id: "lead_103",
      company: "MedVantage Billing Solutions",
      domain: "medvantage-rcm.com",
      contactName: "David Chen",
      contactRole: "Founder & CEO",
      contactEmail: "dchen@medvantage-rcm.com",
      industry: "Healthcare Revenue Cycle",
      healthScore: 38,
      dealValue: 2500,
      status: "Outreach Sent",
      createdAt: "2026-11-06T18:40:00Z",
      leaks: [
        "Generic headline ('Welcome to MedVantage') lacks quantified value proposition",
        "No case studies or quantified revenue recovery metrics on homepage",
        "Broken schema markup and missing H1 tag hurting organic B2B search",
        "Contact phone number is not click-to-call on mobile devices"
      ],
      techStack: ["Wix", "Google Tag Manager"],
      metrics: { seoScore: 34, conversionScore: 36, speedScore: 44, trustScore: 38 },
      outreach: {
        subject1: "3 conversion gaps on medvantage-rcm.com (38/100 score)",
        email1: "Hi David,\n\nI ran MedVantage Billing Solutions (medvantage-rcm.com) through our B2B Conversion & SEO diagnostic today and noticed it scored 38/100 — which means medical practices visiting your site are likely bouncing before booking a consultation.\n\nSpecifically:\n1. The hero headline doesn't state your core RCM recovery % or specialty focus.\n2. Missing H1 tags and schema markup are suppressing your organic rankings.\n3. No quantified clinic case studies appear above the fold.\n\nWe help B2B companies fix conversion leaks and add 15-25 qualified sales demos per month. Worth a quick 15-minute chat to show you the exact fixes? https://cal.com/alex-mercer/15min-audit\n\nBest,\nAlex Mercer\nApex Growth Partners",
        subject2: "Re: 3 conversion gaps on medvantage-rcm.com (38/100 score)",
        email2: "Hi David,\n\nJust making sure this didn't get buried. I have the full 6-point inspection report for medvantage-rcm.com ready as a clean PDF you can hand straight to whoever manages your website.\n\nWant me to send it over?\n\nBest,\nAlex",
        subject3: "Last note for MedVantage, David",
        email3: "Hi David,\n\nI'll stop reaching out after this! If upgrading medvantage-rcm.com's inbound lead pipeline becomes a priority down the road, you can grab a time on my calendar here: https://cal.com/alex-mercer/15min-audit\n\nWishing you a great Q4,\nAlex",
        linkedinNote: "Hi David — ran a quick B2B website audit on medvantage-rcm.com and spotted a missing H1 tag + a few conversion leaks costing you inbound clinic leads. Happy to send the free PDF report over!"
      }
    },
    {
      id: "lead_104",
      company: "Precision CNC & Aero",
      domain: "precisioncncaero.com",
      contactName: "Sarah Jenkins",
      contactRole: "Director of Business Development",
      contactEmail: "sjenkins@precisioncncaero.com",
      industry: "Precision Manufacturing",
      healthScore: 51,
      dealValue: 4200,
      status: "Closed Won",
      createdAt: "2026-11-02T11:00:00Z",
      leaks: [
        "CAD file upload form throws validation warning on modern browsers",
        "ISO-9001 / AS9100 certification PDFs require 3 clicks to locate",
        "No automated email confirmation or SLA turnaround promise on RFQ form"
      ],
      techStack: ["Webflow", "Cloudflare", "Hotjar"],
      metrics: { seoScore: 64, conversionScore: 45, speedScore: 58, trustScore: 37 },
      outreach: {
        subject1: "AS9100 link + RFQ upload on precisioncncaero.com",
        email1: "Hi Sarah,\n\nWhile inspecting precisioncncaero.com's RFQ flow today, I noticed two quick things that might be costing your BD team aerospace & defense prototyping quotes:\n\n1. Your AS9100 certification badge takes 3 clicks to verify instead of sitting right next to the 'Upload CAD / Request Quote' button.\n2. The RFQ form doesn't state your quote turnaround SLA (e.g., '24-Hour Quote Turnaround'), which cuts conversion rates on engineering traffic.\n\nWe help B2B companies fix conversion leaks and add 15-25 qualified sales demos per month. Free for a 15-min review of your full 51/100 site audit? https://cal.com/alex-mercer/15min-audit\n\nBest,\nAlex Mercer\nApex Growth Partners",
        subject2: "Re: AS9100 link + RFQ upload on precisioncncaero.com",
        email2: "Hi Sarah,\n\nQuick bump on this — I saved the full conversion audit for precisioncncaero.com. Happy to send the link over with zero strings attached if you want to review it with your team.\n\nBest,\nAlex",
        subject3: "Closing my notes on Precision CNC",
        email3: "Hi Sarah,\n\nI'll assume your RFQ pipeline is at full capacity right now! If you ever want that teardown report, just reply 'report' or grab 15 mins here: https://cal.com/alex-mercer/15min-audit\n\nBest,\nAlex",
        linkedinNote: "Hi Sarah — noticed a couple quick ways to increase CAD/RFQ submissions on precisioncncaero.com (especially highlighting your AS9100 certs right inside the quote form). Let's connect!"
      }
    }
  ]
};

let state = JSON.parse(JSON.stringify(DEFAULT_SEED));
let currentMode = "landing";
let selectedAuditLeadId = null;

// Client-side fallback audit generator (if running directly via file://)
function buildClientAudit(payload, userProfile) {
  const rawDomain = (payload.domain || "example-b2b.com").trim().replace(/^https?:\/\//i, "").replace(/\/.*$/, "");
  const company = payload.company || rawDomain.split(".")[0].replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const contactName = payload.contactName || "Founder";
  const contactRole = payload.contactRole || "VP of Growth";
  const contactEmail = payload.contactEmail || `hello@${rawDomain}`;
  const industry = payload.industry || "B2B Services & SaaS";
  const dealValue = Number(payload.dealValue) || 3000;

  let hash = 0;
  for (let i = 0; i < rawDomain.length; i++) {
    hash = ((hash << 5) - hash) + rawDomain.charCodeAt(i);
    hash |= 0;
  }
  const absHash = Math.abs(hash);

  const candidateLeaks = [
    `Primary CTA on ${rawDomain} requires scrolling past the fold with no instant calendar routing`,
    `No interactive ROI calculator or instant quote/demo trigger capturing high-intent visitors`,
    `Missing retargeting pixel & automated lead-capture widget for after-hours B2B traffic`,
    `Lead form asks for too many manual fields without displaying social proof or response SLA`,
    `Mobile largest contentful paint (LCP) & hero hierarchy dilute the core ${industry} value proposition`,
    `Missing dedicated comparison / case-study landing page for outbound & paid traffic`
  ];
  const leaks = [];
  let idx = absHash % candidateLeaks.length;
  while (leaks.length < 4) {
    const c = candidateLeaks[idx % candidateLeaks.length];
    if (!leaks.includes(c)) leaks.push(c);
    idx++;
  }

  const stacks = [
    ["Webflow", "Cloudflare", "Google Analytics 4"],
    ["WordPress", "Google Tag Manager", "Nginx"],
    ["Next.js", "Vercel", "Segment"],
    ["HubSpot CMS", "Cloudflare", "Hotjar"]
  ];
  const techStack = stacks[absHash % stacks.length];

  const seoScore = 38 + (absHash % 42);
  const conversionScore = 29 + ((absHash >> 3) % 41);
  const speedScore = 42 + ((absHash >> 5) % 44);
  const trustScore = 34 + ((absHash >> 7) % 45);
  const healthScore = Math.round((seoScore + conversionScore + speedScore + trustScore) / 4);

  const firstName = contactName.split(" ")[0];
  const senderName = userProfile.name || "Alex Mercer";
  const senderCompany = userProfile.company || "Apex Growth Partners";
  const senderOffer = userProfile.offer || "We help B2B companies fix conversion leaks and add 15-25 qualified sales demos per month.";
  const calendarUrl = userProfile.calendarUrl || "https://cal.com/alex-mercer/15min-audit";

  return {
    id: "lead_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
    company,
    domain: rawDomain,
    contactName,
    contactRole,
    contactEmail,
    industry,
    healthScore,
    dealValue,
    status: "Scanned",
    createdAt: new Date().toISOString(),
    leaks,
    techStack,
    metrics: { seoScore, conversionScore, speedScore, trustScore },
    outreach: {
      subject1: `2 quick conversion fixes for ${rawDomain} (${healthScore}/100 audit score)`,
      email1: `Hi ${firstName},\n\nI was reviewing ${company}'s website (${rawDomain}) today and ran it through our B2B Conversion & Revenue Leak diagnostic. It scored ${healthScore}/100 — mostly because of two quick fixable gaps:\n\n1. ${leaks[0]}.\n2. ${leaks[1]}.\n\n${senderOffer}\n\nI put together a 1-page teardown for ${company} showing how fixing these two bottlenecks typically lifts inbound demo/quote conversions by 25–35%.\n\nMind if I send the report over, or grab 15 mins on my calendar here? ${calendarUrl}\n\nBest,\n${senderName}\n${senderCompany}`,
      subject2: `Re: 2 quick conversion fixes for ${rawDomain} (${healthScore}/100 audit score)`,
      email2: `Hi ${firstName},\n\nFloating this back to the top of your inbox in case it got buried.\n\nEven if we never work together, your team can implement the 3 fixes from our ${rawDomain} audit in a single afternoon.\n\nWant me to send over the PDF link?\n\nBest,\n${senderName}`,
      subject3: `Should I close my audit file on ${company}, ${firstName}?`,
      email3: `Hi ${firstName},\n\nI know schedules are packed, so I won't keep following up after this.\n\nIf capturing more qualified pipeline from ${rawDomain} isn't a priority this quarter, no worries at all. If you'd ever like to review the conversion audit together, feel free to grab a slot anytime: ${calendarUrl}\n\nAll the best,\n${senderName}`,
      linkedinNote: `Hi ${firstName} — ran a quick B2B conversion audit on ${rawDomain} today (scored ${healthScore}/100). Spotted 2 quick fixes on your landing flow that could lift inbound ${industry} leads. Happy to share the 1-page report if useful!`
    }
  };
}

function saveLocalFallback() {
  try {
    localStorage.setItem("signalforge_state_v1", JSON.stringify(state));
  } catch (_) {}
}

async function initApp() {
  updateRoiCalculator();
  try {
    const res = await fetch("/api/state");
    if (res.ok) {
      state = await res.json();
    } else {
      throw new Error("Offline");
    }
  } catch (_) {
    const cached = localStorage.getItem("signalforge_state_v1");
    if (cached) {
      try { state = JSON.parse(cached); } catch (e) {}
    }
  }
  selectedAuditLeadId = state.leads[0] ? state.leads[0].id : null;
  renderAll();
}

function showToast(msg) {
  const box = document.getElementById("toastBox");
  box.textContent = msg;
  box.classList.remove("hidden");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => box.classList.add("hidden"), 3800);
}

function switchMode(mode) {
  currentMode = mode;
  const landing = document.getElementById("landingView");
  const app = document.getElementById("appView");
  const btn = document.getElementById("toggleViewBtn");
  if (mode === "app") {
    landing.classList.add("hidden");
    app.classList.remove("hidden");
    btn.innerHTML = "&larr; Public Landing Page";
    renderAll();
  } else {
    app.classList.add("hidden");
    landing.classList.remove("hidden");
    btn.innerHTML = "Open SaaS Dashboard &rarr;";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMode() {
  switchMode(currentMode === "landing" ? "app" : "landing");
}

function openAppTab(tabId) {
  if (currentMode !== "app") {
    switchMode("app");
  }
  document.querySelectorAll(".app-tab").forEach(el => el.classList.add("hidden"));
  document.querySelectorAll(".side-btn").forEach(el => el.classList.remove("active"));

  const target = document.getElementById("tab-" + tabId);
  if (target) target.classList.remove("hidden");

  const navBtn = document.getElementById("nav-" + tabId);
  if (navBtn) navBtn.classList.add("active");

  renderAll();
}

function scoreBadgeClass(score) {
  if (score < 48) return "score-low";
  if (score < 68) return "score-mid";
  return "score-high";
}

function renderAll() {
  // Update top & sidebar plan/credits indicators
  const u = state.user;
  document.getElementById("activePlanBadge").textContent = u.planName || "Growth Pro ($149/mo)";
  document.getElementById("creditsText").textContent = `${u.creditsUsed} / ${u.creditsLimit}`;
  const pct = Math.min(100, Math.round((u.creditsUsed / (u.creditsLimit || 500)) * 100));
  document.getElementById("creditsBar").style.width = `${pct}%`;
  document.getElementById("sidebarPlanLabel").textContent = `Plan: ${u.planName}`;

  // KPI metrics
  const totalPipeline = state.leads.reduce((acc, l) => acc + (Number(l.dealValue) || 0), 0);
  const wonRevenue = state.leads.filter(l => l.status === "Closed Won").reduce((acc, l) => acc + (Number(l.dealValue) || 0), 0);
  const activeConvs = state.leads.filter(l => l.status === "Replied" || l.status === "Booked Call").length;
  const avgScore = state.leads.length
    ? Math.round(state.leads.reduce((acc, l) => acc + l.healthScore, 0) / state.leads.length)
    : 50;

  document.getElementById("kpiTotalPipeline").textContent = "$" + totalPipeline.toLocaleString();
  document.getElementById("kpiLeadCount").textContent = `${state.leads.length} audited B2B accounts`;
  document.getElementById("kpiWonRevenue").textContent = "$" + wonRevenue.toLocaleString();
  document.getElementById("kpiActiveConversations").textContent = String(activeConvs);
  document.getElementById("kpiAvgScore").textContent = `${avgScore} / 100`;

  renderOverviewTable();
  renderAuditResult();
  renderOutreachSelector();
  renderOutreachStudio();
  renderCrmTable();
  populateSettingsForm();
}

function renderOverviewTable() {
  const tbody = document.getElementById("overviewTableBody");
  if (!tbody) return;
  tbody.innerHTML = state.leads.slice(0, 8).map(lead => `
    <tr>
      <td>
        <div style="font-weight:700; color:#fff;">${escapeHtml(lead.company)}</div>
        <div style="font-size:0.8rem; color:var(--primary);">${escapeHtml(lead.domain)}</div>
      </td>
      <td>
        <div>${escapeHtml(lead.contactName)}</div>
        <div style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(lead.contactRole)}</div>
      </td>
      <td>
        <span class="score-pill ${scoreBadgeClass(lead.healthScore)}">${lead.healthScore} / 100</span>
      </td>
      <td style="max-width:300px; font-size:0.84rem; color:#cbd5e1;">
        ⚠️ ${escapeHtml(lead.leaks[0] || "Missing primary conversion trigger")}
      </td>
      <td style="font-weight:700;">$${Number(lead.dealValue || 0).toLocaleString()}</td>
      <td>
        <span class="tech-badge">${escapeHtml(lead.status)}</span>
      </td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary btn-sm" onclick="inspectLeadAudit('${lead.id}')">Audit Report</button>
          <button class="btn btn-primary btn-sm" onclick="openLeadOutreach('${lead.id}')">Cold Emails &rarr;</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function inspectLeadAudit(leadId) {
  selectedAuditLeadId = leadId;
  openAppTab("scanner");
}

function openLeadOutreach(leadId) {
  selectedAuditLeadId = leadId;
  openAppTab("outreach");
  const sel = document.getElementById("outreachLeadSelector");
  if (sel) sel.value = leadId;
  renderOutreachStudio();
}

function renderAuditResult() {
  const container = document.getElementById("auditResultContainer");
  if (!container) return;
  const lead = state.leads.find(l => l.id === selectedAuditLeadId) || state.leads[0];
  if (!lead) {
    container.innerHTML = `<p style="color:var(--text-muted);">No audits run yet. Enter a domain above to run your first teardown.</p>`;
    return;
  }

  container.innerHTML = `
    <div class="panel-header" style="border-bottom:1px solid var(--border); padding-bottom:16px;">
      <div>
        <div style="font-size:0.78rem; text-transform:uppercase; color:var(--accent); font-weight:700;">
          ✓ Live B2B Diagnostic Complete
        </div>
        <h3 style="font-size:1.45rem; margin-top:4px;">${escapeHtml(lead.company)} <span style="color:var(--text-muted); font-weight:400;">(${escapeHtml(lead.domain)})</span></h3>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" onclick="openClientReportModal('${lead.id}')">📄 Client Shareable PDF Report</button>
        <button class="btn btn-primary btn-sm" onclick="openLeadOutreach('${lead.id}')">✉️ View 3-Step Cold Email Sequence &rarr;</button>
      </div>
    </div>

    <div class="kpi-grid" style="margin-top:18px;">
      <div class="kpi-card">
        <div class="kpi-label">Overall Conversion Health</div>
        <div class="kpi-value" style="color:${lead.healthScore < 50 ? 'var(--danger)' : 'var(--warning)'};">${lead.healthScore} / 100</div>
        <div class="kpi-sub">High-urgency outbound prospect</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">SEO & Meta Structure</div>
        <div class="kpi-value">${lead.metrics.seoScore} / 100</div>
        <div class="kpi-sub">Title, H1 & schema diagnostics</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">CTA & Funnel Friction</div>
        <div class="kpi-value">${lead.metrics.conversionScore} / 100</div>
        <div class="kpi-sub">Above-the-fold capture score</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Page Speed & Trust</div>
        <div class="kpi-value">${lead.metrics.speedScore} / 100</div>
        <div class="kpi-sub">Mobile LCP & social proof</div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns: 1.4fr 0.6fr; gap:20px;">
      <div>
        <h4 style="margin-bottom:12px; color:#fca5a5;">🚨 Critical Conversion & Revenue Leaks Detected (${lead.leaks.length})</h4>
        ${lead.leaks.map(leak => `<div class="leak-item"><strong>Revenue Leak:</strong> ${escapeHtml(leak)}</div>`).join("")}
      </div>
      <div>
        <h4 style="margin-bottom:12px;">🛠️ Detected Tech Stack</h4>
        <div style="margin-bottom:18px;">
          ${(lead.techStack || []).map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join("")}
        </div>
        <h4 style="margin-bottom:8px;">👤 Target Decision Maker</h4>
        <div style="background:var(--bg-dark); padding:14px; border-radius:8px; border:1px solid var(--border); font-size:0.88rem;">
          <div><strong>${escapeHtml(lead.contactName)}</strong> (${escapeHtml(lead.contactRole)})</div>
          <div style="color:var(--text-muted); margin-top:4px;">${escapeHtml(lead.contactEmail)}</div>
          <div style="color:var(--accent); font-weight:700; margin-top:6px;">Est. Deal Value: $${Number(lead.dealValue).toLocaleString()}</div>
        </div>
      </div>
    </div>
  `;
}

function renderOutreachSelector() {
  const sel = document.getElementById("outreachLeadSelector");
  if (!sel) return;
  const currentVal = selectedAuditLeadId || (state.leads[0] && state.leads[0].id);
  sel.innerHTML = state.leads.map(l => `
    <option value="${l.id}" ${l.id === currentVal ? "selected" : ""}>
      ${escapeHtml(l.company)} (${escapeHtml(l.domain)}) — Score: ${l.healthScore}/100
    </option>
  `).join("");
}

function renderOutreachStudio() {
  const sel = document.getElementById("outreachLeadSelector");
  const container = document.getElementById("outreachSequenceContainer");
  if (!container) return;
  const leadId = (sel && sel.value) || selectedAuditLeadId || (state.leads[0] && state.leads[0].id);
  const lead = state.leads.find(l => l.id === leadId);
  if (!lead) return;
  selectedAuditLeadId = lead.id;

  container.innerHTML = `
    <div class="panel">
      <div class="panel-header">
        <div>
          <h3>Campaign for ${escapeHtml(lead.contactName)} at ${escapeHtml(lead.company)}</h3>
          <p style="font-size:0.86rem; color:var(--text-muted);">Recipient: <code>${escapeHtml(lead.contactEmail)}</code> | Current Stage: <strong>${escapeHtml(lead.status)}</strong></p>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn btn-secondary btn-sm" onclick="openClientReportModal('${lead.id}')">📄 Preview Audit PDF</button>
          <button class="btn btn-accent btn-sm" onclick="launchMailto('${lead.id}', 1)">🚀 Open Email #1 in Mail Client & Mark Sent</button>
        </div>
      </div>

      <!-- STEP 1 EMAIL -->
      <div class="email-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-weight:700; color:#a5b4fc;">Day 1 — Live Website Audit Teardown Opener</span>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary btn-sm" onclick="copyText('subj1_${lead.id}', 'Subject #1 copied!')">Copy Subject</button>
            <button class="btn btn-primary btn-sm" onclick="copyText('body1_${lead.id}', 'Email #1 copied to clipboard!')">Copy Email Body</button>
          </div>
        </div>
        <input id="subj1_${lead.id}" value="${escapeHtml(lead.outreach.subject1)}" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:#fff; padding:8px 12px; border-radius:6px; margin-bottom:8px; font-weight:600;" />
        <textarea id="body1_${lead.id}" rows="9" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:#e2e8f0; padding:12px; border-radius:6px;">${escapeHtml(lead.outreach.email1)}</textarea>
      </div>

      <!-- STEP 2 EMAIL -->
      <div class="email-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-weight:700; color:#6ee7b7;">Day 3 — Value-Add PDF Report Bump</span>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-primary btn-sm" onclick="copyText('body2_${lead.id}', 'Email #2 copied to clipboard!')">Copy Email #2</button>
          </div>
        </div>
        <input id="subj2_${lead.id}" value="${escapeHtml(lead.outreach.subject2)}" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:#fff; padding:8px 12px; border-radius:6px; margin-bottom:8px; font-weight:600;" />
        <textarea id="body2_${lead.id}" rows="6" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:#e2e8f0; padding:12px; border-radius:6px;">${escapeHtml(lead.outreach.email2)}</textarea>
      </div>

      <!-- STEP 3 EMAIL & LINKEDIN -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
        <div class="email-card" style="margin-bottom:0;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-weight:700; color:var(--warning);">Day 7 — Polite Breakup Email</span>
            <button class="btn btn-secondary btn-sm" onclick="copyText('body3_${lead.id}', 'Breakup email copied!')">Copy Email #3</button>
          </div>
          <textarea id="body3_${lead.id}" rows="6" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:#e2e8f0; padding:12px; border-radius:6px;">${escapeHtml(lead.outreach.email3)}</textarea>
        </div>

        <div class="email-card" style="margin-bottom:0;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-weight:700; color:#38bdf8;">LinkedIn Connection Note (Under 300 chars)</span>
            <button class="btn btn-secondary btn-sm" onclick="copyText('li_${lead.id}', 'LinkedIn note copied!')">Copy LinkedIn DM</button>
          </div>
          <textarea id="li_${lead.id}" rows="6" style="width:100%; background:var(--bg-card); border:1px solid var(--border); color:#e2e8f0; padding:12px; border-radius:6px;">${escapeHtml(lead.outreach.linkedinNote)}</textarea>
        </div>
      </div>
    </div>
  `;
}

function renderCrmTable() {
  const tbody = document.getElementById("crmTableBody");
  if (!tbody) return;
  const filter = (document.getElementById("crmStageFilter") && document.getElementById("crmStageFilter").value) || "ALL";
  const rows = state.leads.filter(l => filter === "ALL" || l.status === filter);

  const stages = ["Scanned", "Outreach Sent", "Replied", "Booked Call", "Closed Won"];
  tbody.innerHTML = rows.map(lead => `
    <tr>
      <td>
        <div style="font-weight:700;">${escapeHtml(lead.company)}</div>
        <div style="font-size:0.8rem; color:var(--primary);">${escapeHtml(lead.domain)}</div>
      </td>
      <td>
        <div>${escapeHtml(lead.contactName)}</div>
        <div style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(lead.contactEmail)}</div>
      </td>
      <td><span class="score-pill ${scoreBadgeClass(lead.healthScore)}">${lead.healthScore} / 100</span></td>
      <td style="font-weight:700;">$${Number(lead.dealValue).toLocaleString()}</td>
      <td>
        <select onchange="updateLeadStage('${lead.id}', this.value)" style="background:var(--bg-dark); color:#fff; border:1px solid var(--border-highlight); padding:6px 10px; border-radius:6px;">
          ${stages.map(s => `<option value="${s}" ${lead.status === s ? "selected" : ""}>${s}</option>`).join("")}
        </select>
      </td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary btn-sm" onclick="openClientReportModal('${lead.id}')">PDF Report</button>
          <button class="btn btn-primary btn-sm" onclick="openLeadOutreach('${lead.id}')">Sequence</button>
          <button class="btn btn-secondary btn-sm" style="color:var(--danger);" onclick="deleteLead('${lead.id}')">✕</button>
        </div>
      </td>
    </tr>
  `).join("");
}

async function performAuditAction(payload) {
  try {
    const res = await fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      state.leads.unshift(data.lead);
      state.user = data.user;
      selectedAuditLeadId = data.lead.id;
      saveLocalFallback();
      return data.lead;
    }
  } catch (_) {}

  // Offline / file:// fallback
  const fallbackLead = buildClientAudit(payload, state.user);
  state.leads.unshift(fallbackLead);
  state.user.creditsUsed = (state.user.creditsUsed || 0) + 1;
  selectedAuditLeadId = fallbackLead.id;
  saveLocalFallback();
  return fallbackLead;
}

async function runHeroAudit() {
  const domain = document.getElementById("heroDomainInput").value.trim() || "summit-manufacturing.com";
  const contactName = document.getElementById("heroContactInput").value.trim() || "Ryan Brooks";
  const lead = await performAuditAction({ domain, contactName, dealValue: 3500 });
  openAppTab("scanner");
  showToast(`✓ Audited ${lead.domain} (Score: ${lead.healthScore}/100) & generated 3-step sequence!`);
}

async function runQuickScan() {
  const domain = document.getElementById("quickDomainInput").value.trim();
  if (!domain) {
    showToast("Please enter a prospect domain to scan.");
    return;
  }
  const contactName = document.getElementById("quickContactInput").value.trim() || "Founder";
  const dealValue = Number(document.getElementById("quickValueInput").value) || 3000;
  const lead = await performAuditAction({ domain, contactName, dealValue });
  openAppTab("scanner");
  showToast(`✓ Audited ${lead.domain} (Score: ${lead.healthScore}/100)`);
}

async function handleFullAuditSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById("runAuditBtn");
  btn.textContent = "Scanning Domain...";
  const payload = {
    domain: document.getElementById("scanDomain").value,
    company: document.getElementById("scanCompany").value,
    contactName: document.getElementById("scanContactName").value,
    contactRole: document.getElementById("scanContactRole").value,
    contactEmail: document.getElementById("scanContactEmail").value,
    industry: document.getElementById("scanIndustry").value,
    dealValue: Number(document.getElementById("scanDealValue").value) || 3500
  };
  const lead = await performAuditAction(payload);
  btn.textContent = "🔍 Run Deep Website Audit";
  renderAll();
  showToast(`✓ Completed 6-point diagnostic for ${lead.company}!`);
}

function fillPresetProspect(type) {
  const presets = {
    saas: {
      domain: "revops-velocity.io",
      company: "RevOps Velocity AI",
      contactName: "Claire Sterling",
      contactRole: "Chief Revenue Officer",
      contactEmail: "claire@revops-velocity.io",
      industry: "B2B SaaS",
      dealValue: 4800
    },
    logistics: {
      domain: "titan-coldchain.com",
      company: "Titan ColdChain Freight",
      contactName: "Grant Mercer",
      contactRole: "VP of Operations",
      contactEmail: "gmercer@titan-coldchain.com",
      industry: "Cold Chain Logistics",
      dealValue: 3500
    },
    dental: {
      domain: "luxe-aesthetics-group.com",
      company: "Luxe Aesthetics & MedSpa Group",
      contactName: "Dr. Sophia Lin",
      contactRole: "Managing Partner",
      contactEmail: "slin@luxe-aesthetics-group.com",
      industry: "Healthcare / Multi-Location MedSpa",
      dealValue: 3000
    }
  };
  const p = presets[type] || presets.saas;
  document.getElementById("scanDomain").value = p.domain;
  document.getElementById("scanCompany").value = p.company;
  document.getElementById("scanContactName").value = p.contactName;
  document.getElementById("scanContactRole").value = p.contactRole;
  document.getElementById("scanContactEmail").value = p.contactEmail;
  document.getElementById("scanIndustry").value = p.industry;
  document.getElementById("scanDealValue").value = p.dealValue;
}

async function runBulkDomainScan() {
  const raw = document.getElementById("bulkDomainsInput").value.trim();
  if (!raw) return;
  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  let count = 0;
  for (const line of lines) {
    const parts = line.split(",").map(s => s.trim());
    const domain = parts[0];
    const contactName = parts[1] || "Decision Maker";
    const dealValue = Number(parts[2]) || 3500;
    if (domain) {
      await performAuditAction({ domain, contactName, dealValue });
      count++;
    }
  }
  renderAll();
  showToast(`✓ Batch-audited ${count} B2B domains & built custom cold sequences!`);
}

async function updateLeadStage(leadId, newStage) {
  const lead = state.leads.find(l => l.id === leadId);
  if (!lead) return;
  lead.status = newStage;
  saveLocalFallback();
  try {
    await fetch(`/api/leads/${leadId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStage })
    });
  } catch (_) {}
  renderAll();
  showToast(`Updated ${lead.company} stage to "${newStage}"`);
}

async function deleteLead(leadId) {
  state.leads = state.leads.filter(l => l.id !== leadId);
  saveLocalFallback();
  try {
    await fetch(`/api/leads/${leadId}`, { method: "DELETE" });
  } catch (_) {}
  renderAll();
  showToast("Prospect removed from CRM.");
}

function copyText(elementId, toastMsg) {
  const el = document.getElementById(elementId);
  if (!el) return;
  navigator.clipboard.writeText(el.value || el.textContent);
  showToast(toastMsg || "Copied to clipboard!");
}

function launchMailto(leadId) {
  const lead = state.leads.find(l => l.id === leadId);
  if (!lead) return;
  const subject = encodeURIComponent(document.getElementById(`subj1_${leadId}`).value);
  const body = encodeURIComponent(document.getElementById(`body1_${leadId}`).value);
  updateLeadStage(leadId, "Outreach Sent");
  window.location.href = `mailto:${lead.contactEmail}?subject=${subject}&body=${body}`;
}

function exportCrmCsv() {
  const headers = ["Company", "Domain", "ContactName", "ContactRole", "ContactEmail", "HealthScore", "DealValue", "Status", "TopRevenueLeak"];
  const rows = state.leads.map(l => [
    `"${(l.company || "").replace(/"/g, '""')}"`,
    `"${l.domain}"`,
    `"${l.contactName}"`,
    `"${l.contactRole}"`,
    `"${l.contactEmail}"`,
    l.healthScore,
    l.dealValue,
    `"${l.status}"`,
    `"${(l.leaks[0] || "").replace(/"/g, '""')}"`
  ].join(","));
  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `signalforge-pipeline-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  showToast("✓ Exported CRM Pipeline CSV!");
}

function populateSettingsForm() {
  const u = state.user;
  const nameEl = document.getElementById("setSenderName");
  if (!nameEl) return;
  nameEl.value = u.name || "";
  document.getElementById("setCompanyName").value = u.company || "";
  document.getElementById("setCalendarUrl").value = u.calendarUrl || "";
  document.getElementById("setSenderEmail").value = u.email || "";
  document.getElementById("setOfferPitch").value = u.offer || "";
}

async function saveUserSettings(e) {
  e.preventDefault();
  const payload = {
    name: document.getElementById("setSenderName").value,
    company: document.getElementById("setCompanyName").value,
    calendarUrl: document.getElementById("setCalendarUrl").value,
    email: document.getElementById("setSenderEmail").value,
    offer: document.getElementById("setOfferPitch").value,
    apiKeys: {
      stripeSecret: document.getElementById("setStripeSecret").value,
      openai: document.getElementById("setAiKey").value
    }
  };
  Object.assign(state.user, payload);
  saveLocalFallback();
  try {
    await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (_) {}
  renderAll();
  showToast("✓ White-label branding & API keys saved!");
}

async function triggerCheckout(planKey) {
  try {
    const res = await fetch("/api/billing/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: planKey })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.mode === "live_stripe" && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }
      state.user = data.user;
      saveLocalFallback();
      switchMode("app");
      renderAll();
      showToast(`🎉 ${data.message}`);
      return;
    }
  } catch (_) {}

  const map = {
    starter: { plan: "starter", planName: "Starter ($49/mo)", creditsLimit: 100 },
    growth: { plan: "growth", planName: "Growth Pro ($149/mo)", creditsLimit: 500 },
    agency: { plan: "agency", planName: "Agency Scale ($399/mo)", creditsLimit: 2500 }
  };
  Object.assign(state.user, map[planKey] || map.growth);
  saveLocalFallback();
  switchMode("app");
  renderAll();
  showToast(`🎉 Upgraded to ${state.user.planName}!`);
}

function updateRoiCalculator() {
  const leadsEl = document.getElementById("roiLeadsSlider");
  if (!leadsEl) return;
  const leadsPerDay = Number(leadsEl.value);
  const replyRate = Number(document.getElementById("roiReplySlider").value) / 100;
  const closeRate = Number(document.getElementById("roiCloseSlider").value) / 100;
  const dealSize = Number(document.getElementById("roiDealSlider").value);

  document.getElementById("roiLeadsVal").textContent = `${leadsPerDay} prospects/day`;
  document.getElementById("roiReplyVal").textContent = `${Math.round(replyRate * 100)}%`;
  document.getElementById("roiCloseVal").textContent = `${Math.round(closeRate * 100)}%`;
  document.getElementById("roiDealVal").textContent = `$${dealSize.toLocaleString()}`;

  const monthlyLeads = leadsPerDay * 22; // 22 business days
  const replies = Math.max(1, Math.round(monthlyLeads * replyRate));
  const deals = Math.max(1, Math.round(replies * closeRate));
  const monthlyRev = deals * dealSize;
  const annualRev = monthlyRev * 12;
  const roiMult = Math.round(monthlyRev / 149);

  document.getElementById("roiBookedCount").textContent = String(replies);
  document.getElementById("roiDealsCount").textContent = String(deals);
  document.getElementById("roiMonthlyRevenue").textContent = `$${monthlyRev.toLocaleString()}/mo`;
  document.getElementById("roiAnnualRevenue").textContent = `$${annualRev.toLocaleString()}/yr`;
  document.getElementById("roiMultiple").textContent = `${roiMult}x ROI`;
}

// Modals: Shareable Client Audit PDF Report, Founder Business Kit, and Legal
function openClientReportModal(leadId) {
  const lead = state.leads.find(l => l.id === leadId) || state.leads[0];
  if (!lead) return;
  const modal = document.getElementById("universalModal");
  const body = document.getElementById("universalModalBody");
  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:14px; margin-bottom:18px;">
      <div>
        <span style="font-size:0.75rem; text-transform:uppercase; color:var(--accent); font-weight:700;">White-Label Prospect Deliverable</span>
        <h3 style="font-size:1.35rem;">Website Conversion & Revenue Leak Audit: ${escapeHtml(lead.company)}</h3>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-primary btn-sm" onclick="window.print()">🖨️ Print / Save as PDF</button>
        <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
      </div>
    </div>

    <div style="background:var(--bg-dark); padding:18px; border-radius:10px; border:1px solid var(--border); margin-bottom:18px;">
      <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px;">
        <div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Audited Domain</div>
          <div style="font-size:1.1rem; font-weight:700;">https://${escapeHtml(lead.domain)}</div>
          <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">Prepared for ${escapeHtml(lead.contactName)} (${escapeHtml(lead.contactRole)})</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.8rem; color:var(--text-muted);">Overall Conversion Index</div>
          <div style="font-size:2rem; font-weight:900; color:var(--warning);">${lead.healthScore} / 100</div>
        </div>
      </div>
    </div>

    <h4 style="margin-bottom:10px;">1. Priority Revenue & Conversion Bottlenecks</h4>
    ${lead.leaks.map((l, i) => `
      <div class="leak-item"><strong>Finding #${i + 1}:</strong> ${escapeHtml(l)}</div>
    `).join("")}

    <h4 style="margin:18px 0 10px;">2. Recommended 14-Day Remediation Plan</h4>
    <div style="background:var(--bg-dark); padding:16px; border-radius:10px; border:1px solid var(--border); font-size:0.9rem; color:#cbd5e1;">
      <p style="margin-bottom:8px;">• <strong>Above-the-Fold Hero & CTA Overhaul:</strong> Replace passive navigation with a direct value proposition and instant calendar/quote trigger.</p>
      <p style="margin-bottom:8px;">• <strong>Lead Capture Friction Reduction:</strong> Compress intake fields and surface social proof / compliance badges directly adjacent to the submit button.</p>
      <p>• <strong>After-Hours Intent Capture:</strong> Deploy automated lead capture & retargeting to recover the ~65% of B2B traffic that leaves without converting.</p>
    </div>

    <div style="margin-top:20px; padding-top:16px; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <div style="font-weight:700;">Prepared by ${escapeHtml(state.user.name)} — ${escapeHtml(state.user.company)}</div>
        <div style="font-size:0.82rem; color:var(--text-muted);">${escapeHtml(state.user.offer)}</div>
      </div>
      <a href="${escapeHtml(state.user.calendarUrl)}" target="_blank" class="btn btn-accent btn-sm">Book 15-Min Walkthrough &rarr;</a>
    </div>
  `;
  modal.classList.remove("hidden");
}

function openBusinessKitModal() {
  const modal = document.getElementById("universalModal");
  const body = document.getElementById("universalModalBody");
  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:14px; margin-bottom:18px;">
      <div>
        <span style="font-size:0.75rem; text-transform:uppercase; color:var(--accent); font-weight:700;">Complete Business-in-a-Box Kit</span>
        <h3 style="font-size:1.35rem;">How to Make Money with SignalForge (2 Proven Models)</h3>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
    </div>

    <div style="font-size:0.92rem; color:#e2e8f0; display:flex; flex-direction:column; gap:14px;">
      <div style="background:var(--bg-dark); padding:16px; border-radius:10px; border:1px solid var(--border-highlight);">
        <h4 style="color:var(--accent); margin-bottom:6px;">Model A: Fast Cashflow ($2,500–$5,000/mo High-Ticket B2B Clients)</h4>
        <p>Use SignalForge yourself to scan 25 B2B businesses per day (local logistics, MedSpas, B2B SaaS, manufacturing, agencies). Send them the generated <strong>Day 1 Teardown Email</strong> + <strong>PDF Audit Report</strong>. Charge $1,500–$3,000 to fix the exact conversion leaks identified in the report. Just 4 clients = <strong>$10,000/mo</strong>.</p>
      </div>

      <div style="background:var(--bg-dark); padding:16px; border-radius:10px; border:1px solid var(--border);">
        <h4 style="color:#a5b4fc; margin-bottom:6px;">Model B: Recurring Micro-SaaS Subscriptions ($49–$399/mo MRR)</h4>
        <p>Deploy this codebase to Railway, Render, or a $5 VPS, paste your <code>STRIPE_SECRET_KEY</code> in Settings, and sell subscriptions to freelance web designers, SEO agencies, and B2B SDRs. 68 users on Growth Pro ($149/mo) = <strong>$10,132/mo MRR</strong>.</p>
      </div>

      <div style="background:var(--bg-dark); padding:16px; border-radius:10px; border:1px solid var(--border);">
        <h4 style="margin-bottom:6px;">📁 Included in Your <code>business-kit/</code> Directory:</h4>
        <ul style="padding-left:18px; color:var(--text-muted);">
          <li><code>01-GO-TO-MARKET-PLAYBOOK.md</code> — 30-day launch plan from $0 to $10,000/mo</li>
          <li><code>02-COLD-OUTREACH-SCRIPTS.md</code> — High-converting email, LinkedIn & Loom scripts + objection handling</li>
          <li><code>03-PITCH-AND-SALES-DECK.md</code> — 10-slide Enterprise & Investor deck</li>
          <li><code>04-LEGAL-TEMPLATES.md</code> — SaaS Terms of Service, Privacy Policy & Client MSA</li>
        </ul>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
}

function openLegalModal(type) {
  const modal = document.getElementById("universalModal");
  const body = document.getElementById("universalModalBody");
  const title = type === "terms" ? "Terms of Service" : "Privacy Policy";
  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:14px; margin-bottom:18px;">
      <h3>SignalForge Inc. — ${title}</h3>
      <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
    </div>
    <div style="font-size:0.88rem; color:var(--text-muted); line-height:1.6;">
      <p style="margin-bottom:12px;"><strong>Effective Date:</strong> November 2026</p>
      <p style="margin-bottom:12px;">1. <strong>Scope of Service:</strong> SignalForge provides automated B2B website conversion diagnostics, outreach copy generation, and CRM pipeline management tools on a monthly subscription basis.</p>
      <p style="margin-bottom:12px;">2. <strong>Acceptable Outbound Use:</strong> Customers agree to comply with applicable commercial email regulations (including CAN-SPAM and GDPR legitimate interest provisions) when sending outreach sequences.</p>
      <p style="margin-bottom:12px;">3. <strong>Billing & Cancellation:</strong> Subscriptions renew monthly according to the selected tier ($49, $149, or $399/mo) and may be upgraded, downgraded, or cancelled at any time from the Billing Settings tab.</p>
      <p>Full legal templates including the Master Services Agreement (MSA) are located in <code>business-kit/04-LEGAL-TEMPLATES.md</code>.</p>
    </div>
  `;
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("universalModal").classList.add("hidden");
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

window.addEventListener("DOMContentLoaded", initApp);

// Data structures — Version 3.0 Solution Fit Edition
const fitDimensions = [
    {
        icon: 'server',
        title: "1. Technical Infrastructure & Connectivity",
        coreQuestion: "Does the physical and digital infrastructure exist to run this solution?",
        color: "border-blue-500",
        criteria: [
            { id: "1.1", text: "The solution's minimum connectivity requirements (e.g., mobile data, broadband, offline-capable) are met in the deployment area", type: "Critical", deskReview: "National/regional connectivity coverage data; ITU reports", consultation: "What is typical connectivity like for frontline users in this sector?" },
            { id: "1.2", text: "End-user devices (smartphones, tablets, sensors, etc.) required by the solution are available or procurable", type: "Critical", deskReview: "Device penetration data; procurement feasibility", consultation: "What devices do field staff and end users currently have access to?" },
            { id: "1.3", text: "Power supply is sufficiently reliable for the solution's operational requirements", type: "Enabling", deskReview: "Electrification rates; grid stability data", consultation: "Are there power outages or supply issues that affect digital tools in this area?" },
            { id: "1.4", text: "Existing IT systems (ERP, MIS, databases) that the solution must integrate with are digitised and accessible", type: "Enabling", deskReview: "Systems inventory from government counterparts", consultation: "What systems are currently in use, and how are they managed?" }
        ]
    },
    {
        icon: 'shield',
        title: "2. Data Availability & Quality",
        coreQuestion: "Is the data this solution needs present, trustworthy, and usable?",
        color: "border-indigo-500",
        criteria: [
            { id: "2.1", text: "The primary data inputs required by this solution (e.g., sensor data, transaction records, registry data) are being collected", type: "Critical", deskReview: "Sector data inventories; national statistics; prior assessments", consultation: "What data is currently collected in this sector, and by whom?" },
            { id: "2.2", text: "Data is collected at sufficient frequency and granularity for the solution's use case", type: "Critical", deskReview: "Data collection protocols; reporting cadences", consultation: "How often is data updated, and at what level of detail?" },
            { id: "2.3", text: "Data quality is sufficiently reliable (consistent, complete, accurate) for the solution to produce trustworthy outputs", type: "Critical", deskReview: "Data audit reports; prior data quality findings", consultation: "Are there known gaps, inconsistencies, or quality issues in the data?" },
            { id: "2.4", text: "Data is accessible in a format compatible with the solution (digital, structured, via API, etc.)", type: "Enabling", deskReview: "Data format and storage documentation", consultation: "Is data held in paper records, spreadsheets, or a system? Who controls access?" },
            { id: "2.5", text: "Data sharing arrangements between institutions required by the solution are legally and practically feasible", type: "Enabling", deskReview: "Data sharing agreements; legal frameworks", consultation: "Are there restrictions on sharing data across ministries or agencies?" }
        ]
    },
    {
        icon: 'building',
        title: "3. Institutional Capacity & Ownership",
        coreQuestion: "Is there an institution with the mandate, resources, and commitment to own and sustain this solution?",
        color: "border-emerald-500",
        criteria: [
            { id: "3.1", text: "A lead institution exists with a clear mandate covering the solution's functional domain", type: "Critical", deskReview: "Organisational charts; legal mandates; sector strategies", consultation: "Which institution would be responsible for this type of system?" },
            { id: "3.2", text: "The lead institution has demonstrated commitment to digital transformation or similar initiatives", type: "Critical", deskReview: "Prior project track record; digital strategy documents", consultation: "Has this institution led or participated in digital projects before? What was the outcome?" },
            { id: "3.3", text: "The lead institution has sufficient operational budget and staffing to sustain the solution post-deployment", type: "Enabling", deskReview: "Budget allocations; staffing data", consultation: "What is the institution's current capacity to operate a digital system long-term?" },
            { id: "3.4", text: "Coordination mechanisms exist between the institutions the solution requires to collaborate", type: "Enabling", deskReview: "Inter-agency agreements; coordination body existence", consultation: "How do the relevant institutions currently work together? Are there coordination structures in place?" },
            { id: "3.5", text: "Political will and senior leadership buy-in for the solution exists within the lead institution", type: "Enabling", deskReview: "Policy statements; engagement history", consultation: "Is there visible support from senior leadership for this type of initiative?" }
        ]
    },
    {
        icon: 'users',
        title: "4. Local Skills & Workforce Readiness",
        coreQuestion: "Are there people who can operate, maintain, and use this solution effectively?",
        color: "border-cyan-500",
        criteria: [
            { id: "4.1", text: "Sufficient digital literacy exists among the end users who will interact with the solution daily", type: "Critical", deskReview: "Education statistics; prior training assessments; digital literacy surveys", consultation: "What is the typical digital skill level of the people who would use this tool day-to-day?" },
            { id: "4.2", text: "Technical staff capable of administering and maintaining the solution (IT, data management) are available locally", type: "Critical", deskReview: "ICT workforce data; institutional staffing profiles", consultation: "Does the lead institution have IT or data staff in-house, or would this need to be contracted?" },
            { id: "4.3", text: "Training capacity exists to onboard users and build long-term operational capability", type: "Enabling", deskReview: "Training infrastructure; CoE capacity; vocational institutions", consultation: "What training resources — institutions, trainers, programmes — exist in this sector?" },
            { id: "4.4", text: "The solution's interface and workflow are compatible with how users currently work (language, process, literacy)", type: "Enabling", deskReview: "User journey documentation; language/literacy data", consultation: "Are there language, process, or workflow factors that could affect how easily users adopt this tool?" }
        ]
    }
];

const caseStudies = {
    zambia: {
        flag: '🇿🇲',
        country: 'Zambia',
        sector: 'Livestock Sector',
        status: 'active',
        context: "Zambia is evaluating three candidate solutions for its national livestock sector transformation programme. The PM has conducted a desk review and two days of stakeholder consultations with DVS (Department of Veterinary Services), MALF, and provincial livestock officers.",
        candidateSolutions: [
            { id: 'A', name: 'National Livestock Identification & Traceability System (NLIS)' },
            { id: 'B', name: 'Predictive Early Warning System for disease surveillance (PLEWS), ML-dependent' },
            { id: 'C', name: 'Rule-based disease surveillance dashboard using existing DVS data' }
        ],
        fitComparison: [
            { dim: "Technical Infrastructure", criteria: [{ id: "1.1", label: "1.1 Connectivity", A: "Partial", B: "No", C: "Yes" }, { id: "1.2", label: "1.2 End-user devices", A: "Partial", B: "Partial", C: "Yes" }, { id: "1.3", label: "1.3 Power supply", A: "Partial", B: "Partial", C: "Partial" }, { id: "1.4", label: "1.4 IT integration", A: "Partial", B: "No", C: "Partial" }] },
            { dim: "Data Availability & Quality", criteria: [{ id: "2.1", label: "2.1 Primary data collected", A: "Partial", B: "No", C: "Yes" }, { id: "2.2", label: "2.2 Frequency & granularity", A: "Partial", B: "No", C: "Partial" }, { id: "2.3", label: "2.3 Data quality", A: "Partial", B: "No", C: "Partial" }, { id: "2.4", label: "2.4 Data format compatibility", A: "Partial", B: "No", C: "Yes" }, { id: "2.5", label: "2.5 Data sharing feasibility", A: "Partial", B: "Partial", C: "Yes" }] },
            { dim: "Institutional Capacity", criteria: [{ id: "3.1", label: "3.1 Lead institution mandate", A: "Yes", B: "Yes", C: "Yes" }, { id: "3.2", label: "3.2 Institutional commitment", A: "Yes", B: "Partial", C: "Yes" }, { id: "3.3", label: "3.3 Operational sustainability", A: "Partial", B: "No", C: "Partial" }, { id: "3.4", label: "3.4 Coordination mechanisms", A: "Partial", B: "Partial", C: "Partial" }, { id: "3.5", label: "3.5 Leadership buy-in", A: "Yes", B: "Partial", C: "Yes" }] },
            { dim: "Local Skills", criteria: [{ id: "4.1", label: "4.1 End-user digital literacy", A: "Partial", B: "No", C: "Partial" }, { id: "4.2", label: "4.2 Local technical staff", A: "Partial", B: "No", C: "Partial" }, { id: "4.3", label: "4.3 Training capacity", A: "Partial", B: "No", C: "Yes" }, { id: "4.4", label: "4.4 Interface compatibility", A: "Partial", B: "No", C: "Yes" }] },
            { dim: "Fit Recommendation", criteria: [{ id: "rec", label: "", A: "⚠️ Go with Conditions", B: "🚫 No-Go", C: "⚠️ Go with Conditions" }] }
        ],
        preferredSolution: {
            solution: "Solution C (Rule-based Dashboard)",
            rationale: "Solution C is recommended as the immediate deployment priority. While both A and C qualify as Go with Conditions, Solution C has a lighter conditions register and can be operational on existing DVS data with minimal infrastructure investment.",
            sequencing: "Solution A (NLIS) is recommended as the next phase — the data and institutional foundations built through Solution C directly enable NLIS deployment. These two solutions are sequenced, not competing.",
            noGo: "Solution B (PLEWS-ML) is Not Viable at this time. Multiple Critical criteria are unmet across all four dimensions. The ML-dependent design requires data volumes, quality, and technical staff that do not exist in the current context. It should be revisited once Solutions C and A have been operational for 2–3 years."
        },
        conditionsRegister: [
            { criterion: "2.2 — Data frequency", response: "Partial", barrier: "DVS data reported monthly; dashboard needs weekly updates", action: "Redesign reporting workflow with DVS provincial officers", timing: "Before deployment" },
            { criterion: "2.3 — Data quality", response: "Partial", barrier: "Known inconsistencies in animal count records across provinces", action: "Run a data cleaning exercise and establish QA protocol", timing: "Before deployment" },
            { criterion: "4.2 — Local technical staff", response: "Partial", barrier: "DVS has one IT officer nationally", action: "Embed a UNIDO-supported data officer for Year 1; develop handover plan", timing: "At project inception" }
        ]
    },
    ethiopia: {
        flag: '🇪🇹',
        country: 'Ethiopia',
        sector: 'Leather Sector',
        status: 'placeholder',
        candidateSolutions: ['Supply Chain Traceability System', 'Quality Assurance Platform', 'Market Access Portal'],
        readiness: null
    },
    ghana: {
        flag: '🇬🇭',
        country: 'Ghana',
        sector: 'Rice Value Chain',
        status: 'placeholder',
        candidateSolutions: ['Production Monitoring Dashboard', 'Post-Harvest Loss Tracking Tool', 'Market Information System'],
        readiness: null
    },
    vietnam: {
        flag: '🇻🇳',
        country: 'Viet Nam',
        sector: 'Shrimp/Aquaculture Sector',
        status: 'placeholder',
        candidateSolutions: ['Pond Management & IoT Monitoring', 'Disease Early Warning System', 'Export Certification Platform'],
        readiness: null
    }
};

// Icon SVG paths
const iconPaths = {
    server: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>',
    shield: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>',
    brain: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>',
    file: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
    building: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>',
    users: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>',
    chevronDown: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>',
    chevronRight: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>',
    checkCircle: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
    alertCircle: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
    minusCircle: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
};

// State management
let activeTab = 'summary';
let activeCase = 'zambia';

// Tab management
function setActiveTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-blue-900', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600');
    });
    document.getElementById(`tab-${tab}`).classList.remove('hidden');
    const activeBtn = document.querySelector(`[data-tab="${tab}"]`);
    activeBtn.classList.remove('bg-white', 'text-gray-600');
    activeBtn.classList.add('bg-blue-900', 'text-white');
}

// Response badge helper (Yes/Partial/No) — recommendation strings pass through as plain text
function renderResponseBadge(val) {
    const classes = { Yes: 'bg-emerald-500', Partial: 'bg-amber-500', No: 'bg-red-400' };
    if (['Yes', 'Partial', 'No'].includes(val)) {
        return `<span class="inline-flex px-2 py-0.5 rounded text-xs font-medium text-white ${classes[val]}">${val}</span>`;
    }
    return `<span class="text-xs font-medium text-gray-700">${val}</span>`;
}

// Dimension Card Component — 4 Fit Dimensions with criteria
function renderDimensionCard(dim, index) {
    const cardId = `dim-card-${index}`;
    const bgColor = dim.color.replace('border-', 'bg-').replace('-500', '-100');
    const textColor = dim.color.replace('border-', 'text-');
    const criteriaHtml = dim.criteria.map(c => `
        <div class="border-b border-gray-100 last:border-0 py-2">
            <div class="flex items-start gap-2">
                <span class="text-xs font-mono text-gray-500 shrink-0">${c.id}</span>
                <span class="text-xs font-medium ${c.type === 'Critical' ? 'text-red-700' : 'text-amber-700'}">[${c.type}]</span>
            </div>
            <p class="text-xs text-gray-700 mt-0.5">${c.text}</p>
            <div class="grid grid-cols-2 gap-2 mt-2 text-[10px]">
                <div class="bg-blue-50 rounded p-2"><span class="font-semibold text-blue-800">Desk:</span> ${c.deskReview}</div>
                <div class="bg-emerald-50 rounded p-2"><span class="font-semibold text-emerald-800">Consultation:</span> ${c.consultation}</div>
            </div>
        </div>
    `).join('');
    return `
        <div class="${dim.color} border-l-4 bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
            <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg ${bgColor}">
                    <svg class="${textColor}" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${iconPaths[dim.icon]}
                    </svg>
                </div>
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-800">${dim.title}</h4>
                    <p class="text-sm text-gray-600 mt-1 italic">${dim.coreQuestion}</p>
                    <button 
                        onclick="toggleCard('${cardId}')"
                        class="flex items-center gap-1 text-xs text-blue-600 mt-2 hover:text-blue-800"
                    >
                        <svg id="${cardId}-chevron" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            ${iconPaths.chevronRight}
                        </svg>
                        Diagnostic Criteria (${dim.criteria.length})
                    </button>
                    <div id="${cardId}-content" class="hidden mt-3 space-y-0 border-t border-gray-100 pt-3">
                        ${criteriaHtml}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Summary dimension cards (4 fit dimensions)
function renderSummaryDimensions() {
    const container = document.getElementById('summary-dimensions');
    if (!container) return;
    container.innerHTML = fitDimensions.map(dim => `
        <div class="rounded-lg p-4 border ${dim.color.replace('border-', 'border-').replace('-500', '-200')} bg-white shadow-sm">
            <h5 class="font-semibold text-gray-800 text-sm">${dim.title}</h5>
            <p class="text-xs text-gray-600 mt-1">${dim.coreQuestion}</p>
        </div>
    `).join('');
}

// Toggle card expansion
function toggleCard(cardId) {
    const content = document.getElementById(`${cardId}-content`);
    const chevron = document.getElementById(`${cardId}-chevron`);
    if (content) {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        if (chevron) {
            chevron.innerHTML = isHidden ? iconPaths.chevronDown : iconPaths.chevronRight;
        }
    }
}

// Render framework tab
function renderFrameworkTab() {
    const container = document.getElementById('dimensions-list');
    if (!container) return;
    container.innerHTML = fitDimensions.map((dim, i) => renderDimensionCard(dim, i)).join('');
}

// Render assessment process tab
function renderAssessmentTab() {
    const container = document.getElementById('assessment-content');
    if (!container) return;
    const recommendationLogic = [
        { rec: "✅ Go", pattern: "All Critical criteria = Yes; Enabling criteria mostly Yes with minor Partials", meaning: "Solution is viable in the current context with standard implementation support" },
        { rec: "⚠️ Go with Conditions", pattern: "All Critical criteria = Yes or Partial; some Enabling criteria = No or Partial", meaning: "Solution is viable but specific gaps must be addressed before or during deployment — document as pre-conditions" },
        { rec: "🔧 Adapt", pattern: "One or more Critical criteria = Partial, or a pattern of Nos across Enabling criteria", meaning: "Solution requires meaningful localisation or redesign to function in this context — document what must change" },
        { rec: "🚫 No-Go", pattern: "One or more Critical criteria = No", meaning: "A fundamental barrier exists that cannot be resolved through conditions or adaptation alone — solution is not viable in current context without structural change" }
    ];
    container.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Fit Recommendation Logic</h3>
            <p class="text-sm text-gray-600 mb-4">Once all criteria are assessed for a candidate solution, the response pattern determines the Fit Recommendation. No numerical scoring is required.</p>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="border-b border-gray-200">
                            <th class="text-left py-2 font-semibold text-gray-800">Recommendation</th>
                            <th class="text-left py-2 font-semibold text-gray-800">Criteria Pattern</th>
                            <th class="text-left py-2 font-semibold text-gray-800">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${recommendationLogic.map(r => `
                            <tr class="border-b border-gray-100">
                                <td class="py-2 font-medium">${r.rec}</td>
                                <td class="py-2 text-gray-600">${r.pattern}</td>
                                <td class="py-2 text-gray-600">${r.meaning}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            <div class="mt-4 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <p class="text-xs font-semibold text-amber-800">Escalation Rule</p>
                <p class="text-xs text-gray-700 mt-1">If a Critical criterion is answered Partial, treat it as a potential No-Go signal and probe further before assigning a final recommendation. A Partial on a Critical criterion means the barrier may be real but not yet fully understood — use the consultation questions to determine whether it is genuinely addressable.</p>
            </div>
        </div>
        <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Conditions & Adaptation Register</h3>
            <p class="text-sm text-gray-600 mb-4">For every criterion answered Partial or No, document a specific entry. This turns the assessment into an actionable work plan.</p>
            <div class="overflow-x-auto text-xs">
                <table class="w-full border border-gray-200">
                    <thead>
                        <tr class="bg-gray-50">
                            <th class="text-left p-2 font-semibold">Criterion</th>
                            <th class="text-left p-2 font-semibold">Response</th>
                            <th class="text-left p-2 font-semibold">Barrier Description</th>
                            <th class="text-left p-2 font-semibold">Required Action</th>
                            <th class="text-left p-2 font-semibold">Responsible Party</th>
                            <th class="text-left p-2 font-semibold">Timing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-t border-gray-100"><td class="p-2 text-gray-400 italic" colspan="6">(e.g.) 2.1 — Primary data inputs being collected</td></tr>
                        <tr class="border-t border-gray-100"><td class="p-2">Partial</td><td class="p-2">Critical</td><td class="p-2">Animal movement data collected by DVS but only at provincial level; farm-level data absent</td><td class="p-2">Design a farm-level data capture protocol as a pre-condition to deployment</td><td class="p-2">DVS + UNIDO TC team</td><td class="p-2">Before deployment</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Selection Guidance (Comparing 2–3 Candidates)</h3>
            <p class="text-sm text-gray-600 mb-3">The preferred solution is typically the one with the strongest fit recommendation and the fewest Critical-level barriers. Secondary factors:</p>
            <ul class="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
                <li><strong>Depth of Conditions Register</strong> — fewer and simpler pre-conditions favour faster deployment</li>
                <li><strong>CoE delivery capacity</strong> — does a CoE in the network have experience delivering this solution type?</li>
                <li><strong>Strategic sequencing</strong> — does one solution create the data or institutional foundation the other depends on?</li>
                <li><strong>Cost of adaptation</strong> — where adaptation is required, is it within project scope and budget?</li>
            </ul>
        </div>
    `;
}

// Render case studies tab
function renderCaseStudiesTab() {
    const selector = document.getElementById('case-selector');
    if (selector) {
        selector.innerHTML = Object.entries(caseStudies).map(([key, study]) => `
            <button
                onclick="setActiveCase('${key}')"
                class="flex-1 p-2 rounded-lg border-2 transition-all text-center ${
                    activeCase === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                }"
            >
                <div class="flex items-center justify-center gap-2">
                    <span class="text-lg">${study.flag}</span>
                    <div class="text-left">
                        <h5 class="font-medium text-gray-900 text-sm leading-tight">${study.country}</h5>
                        <p class="text-xs text-gray-500 leading-tight">${study.sector}</p>
                    </div>
                    ${study.status === 'placeholder' ? '<span class="bg-gray-200 text-gray-500 text-[9px] px-1.5 py-0.5 rounded ml-1">UPCOMING</span>' : ''}
                </div>
            </button>
        `).join('');
    }

    const content = document.getElementById('case-study-content');
    const cs = caseStudies[activeCase];
    if (!content) return;
    
    if (cs.status === 'active') {
        // Fit comparison table
        const fitTableRows = cs.fitComparison.flatMap(section => 
            section.criteria.map((row, i) => `
                <tr class="border-b border-gray-100 ${i === 0 ? 'border-t-2 border-gray-200' : ''}">
                    ${i === 0 ? `<td class="py-2 pr-4 font-semibold text-gray-800 align-top" rowspan="${section.criteria.length}">${section.dim}</td>` : ''}
                    <td class="py-2 text-xs text-gray-600">${row.label || ''}</td>
                    <td class="py-2 text-center">${renderResponseBadge(row.A)}</td>
                    <td class="py-2 text-center">${renderResponseBadge(row.B)}</td>
                    <td class="py-2 text-center">${renderResponseBadge(row.C)}</td>
                </tr>
            `)
        ).join('');
        // Fix: rowspan doesn't work well with map - simplify by repeating dim for each row
        const fitTableSimplified = cs.fitComparison.flatMap(section => 
            section.criteria.map((row, i) => `
                <tr class="border-b border-gray-100">
                    <td class="py-2 pr-4 font-semibold text-gray-700 text-xs">${i === 0 ? section.dim : ''}</td>
                    <td class="py-2 text-xs text-gray-600">${row.label || ''}</td>
                    <td class="py-2 text-center">${renderResponseBadge(row.A)}</td>
                    <td class="py-2 text-center">${renderResponseBadge(row.B)}</td>
                    <td class="py-2 text-center">${renderResponseBadge(row.C)}</td>
                </tr>
            `)
        ).join('');

        content.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">${cs.flag}</div>
                    <div>
                        <h2 class="font-bold text-gray-900 text-xl">Case Study: ${cs.country} – ${cs.sector}</h2>
                    </div>
                </div>
                <p class="text-sm text-gray-600">${cs.context}</p>
                <div class="mt-4">
                    <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Candidate Solutions Assessed</h4>
                    <div class="flex flex-wrap gap-2">
                        ${cs.candidateSolutions.map((s, i) => `
                            <span class="bg-blue-50 text-blue-800 px-3 py-1 rounded text-sm font-medium">Solution ${s.id} — ${s.name}</span>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 mb-6 overflow-x-auto">
                <h3 class="text-lg font-bold text-gray-900 mb-4">Fit Comparison</h3>
                <table class="w-full text-sm min-w-[600px]">
                    <thead>
                        <tr class="border-b-2 border-gray-200">
                            <th class="text-left py-2 pr-4 font-semibold">Fit Dimension</th>
                            <th class="text-left py-2 font-semibold">Criterion</th>
                            <th class="text-center py-2 font-semibold">Solution A (NLIS)</th>
                            <th class="text-center py-2 font-semibold">Solution B (PLEWS-ML)</th>
                            <th class="text-center py-2 font-semibold">Solution C (Dashboard)</th>
                        </tr>
                    </thead>
                    <tbody>${fitTableSimplified}</tbody>
                </table>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-4">Preferred Solution & Rationale</h3>
                <div class="space-y-4">
                    <div class="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                        <p class="font-semibold text-emerald-900">${cs.preferredSolution.solution}</p>
                        <p class="text-sm text-gray-700 mt-1">${cs.preferredSolution.rationale}</p>
                    </div>
                    <p class="text-sm text-gray-700"><strong>Sequencing:</strong> ${cs.preferredSolution.sequencing}</p>
                    <div class="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                        <p class="text-sm text-gray-700"><strong>Not Viable:</strong> ${cs.preferredSolution.noGo}</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-4">Conditions Register (Solution C — Rule-Based Dashboard)</h3>
                <div class="overflow-x-auto text-xs">
                    <table class="w-full border border-gray-200">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="text-left p-2 font-semibold">Criterion</th>
                                <th class="text-left p-2 font-semibold">Response</th>
                                <th class="text-left p-2 font-semibold">Barrier</th>
                                <th class="text-left p-2 font-semibold">Required Action</th>
                                <th class="text-left p-2 font-semibold">Timing</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cs.conditionsRegister.map(r => `
                                <tr class="border-t border-gray-100">
                                    <td class="p-2">${r.criterion}</td>
                                    <td class="p-2">${renderResponseBadge(r.response)}</td>
                                    <td class="p-2">${r.barrier}</td>
                                    <td class="p-2">${r.action}</td>
                                    <td class="p-2">${r.timing}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else {
        content.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm p-8 text-center">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">${cs.flag}</div>
                <h3 class="font-bold text-gray-900 text-xl mb-1">${cs.country} – ${cs.sector}</h3>
                <span class="inline-block bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full font-medium mb-4">Assessment Pending</span>
                <p class="text-gray-500 text-sm max-w-md mx-auto mb-6">
                    The AISRA for this sector is currently under development. It will evaluate candidate solutions across all four Fit Dimensions.
                </p>
                <h4 class="text-xs font-semibold text-gray-500 uppercase mb-3">Candidate Solutions Under Evaluation</h4>
                <div class="grid grid-cols-3 gap-3 max-w-lg mx-auto">
                    ${cs.candidateSolutions.map(p => `
                        <div class="bg-gray-50 rounded-lg p-3 text-center border border-dashed border-gray-300">
                            <span class="text-xs text-gray-500">${p}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="bg-gray-50 rounded-lg p-4 max-w-md mx-auto mt-6">
                    <h5 class="text-xs font-semibold text-gray-600 mb-2">Fit Dimensions to be Evaluated</h5>
                    <div class="flex flex-wrap justify-center gap-2">
                        ${fitDimensions.map(d => `
                            <span class="bg-white px-2 py-1 rounded text-xs text-gray-400 border border-gray-200">${d.title.split(' — ')[0]}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

// Set active case
function setActiveCase(caseKey) {
    activeCase = caseKey;
    renderCaseStudiesTab();
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    renderSummaryDimensions();
    renderFrameworkTab();
    renderAssessmentTab();
    renderCaseStudiesTab();
});

// Make functions globally available
window.setActiveTab = setActiveTab;
window.setActiveCase = setActiveCase;
window.toggleCard = toggleCard;


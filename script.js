// State
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
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-[10px]">
                <div class="bg-blue-50 rounded p-2"><span class="font-semibold text-blue-800">Desk:</span> ${c.deskReview}</div>
                <div class="bg-emerald-50 rounded p-2"><span class="font-semibold text-emerald-800">Consultation:</span> ${c.consultation}</div>
            </div>
        </div>
    `).join('');
    return `
        <div class="${dim.color} border-l-4 bg-white rounded-lg shadow-sm p-3 sm:p-4 hover:shadow-md transition-shadow">
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
        <div class="rounded-lg p-3 sm:p-4 border ${dim.color.replace('border-', 'border-').replace('-500', '-200')} bg-white shadow-sm">
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
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-4">Fit Recommendation Logic</h3>
            <p class="text-sm text-gray-600 mb-4">Once all criteria are assessed for a candidate solution, the response pattern determines the Fit Recommendation. No numerical scoring is required.</p>
            <div class="overflow-x-auto">
                <table class="w-full text-xs sm:text-sm min-w-[400px]">
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
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-4">Conditions & Adaptation Register</h3>
            <p class="text-sm text-gray-600 mb-4">For every criterion answered Partial or No, document a specific entry. This turns the assessment into an actionable work plan.</p>
            <div class="overflow-x-auto text-xs">
                <table class="w-full border border-gray-200 min-w-[500px]">
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
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-4">Selection Guidance (Comparing 2–3 Candidates)</h3>
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
                class="flex-1 min-w-[120px] sm:min-w-0 p-2 sm:p-3 rounded-lg border-2 transition-all text-center ${
                    activeCase === key
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                }"
            >
                <div class="flex items-center justify-center gap-2 flex-col sm:flex-row">
                    <span class="text-base sm:text-lg">${study.flag}</span>
                    <div class="text-center sm:text-left">
                        <h5 class="font-medium text-gray-900 text-xs sm:text-sm leading-tight">${study.country}</h5>
                        <p class="text-[10px] sm:text-xs text-gray-500 leading-tight">${study.sector}</p>
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
        const fitTableRows = cs.fitComparison.flatMap(section =>
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
            <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl shrink-0">${cs.flag}</div>
                    <div class="min-w-0">
                        <h2 class="font-bold text-gray-900 text-base sm:text-xl leading-tight">Case Study: ${cs.country} – ${cs.sector}</h2>
                    </div>
                </div>
                <p class="text-sm text-gray-600">${cs.context}</p>
                <div class="mt-4">
                    <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Candidate Solutions Assessed</h4>
                    <div class="flex flex-wrap gap-2">
                        ${cs.candidateSolutions.map(s => `
                            <span class="bg-blue-50 text-blue-800 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">Solution ${s.id} — ${s.name}</span>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 overflow-x-auto">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-4">Fit Comparison</h3>
                <table class="w-full text-xs sm:text-sm min-w-[520px]">
                    <thead>
                        <tr class="border-b-2 border-gray-200">
                            <th class="text-left py-2 pr-4 font-semibold">Fit Dimension</th>
                            <th class="text-left py-2 font-semibold">Criterion</th>
                            <th class="text-center py-2 font-semibold">Solution A (NLIS)</th>
                            <th class="text-center py-2 font-semibold">Solution B (PLEWS-ML)</th>
                            <th class="text-center py-2 font-semibold">Solution C (Dashboard)</th>
                        </tr>
                    </thead>
                    <tbody>${fitTableRows}</tbody>
                </table>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
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

            <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-4">Conditions Register (Solution C — Rule-Based Dashboard)</h3>
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
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
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

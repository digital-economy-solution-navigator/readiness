// Data structures
const caseStudies = {
    zambia: {
        flag: '🇿🇲',
        country: 'Zambia',
        sector: 'Digital Transformation of the Livestock Sector',
        status: 'active',
        strategicContext: {
            title: 'Strategic Context & Rationale',
            content: [
                'Livestock is a cornerstone of Zambia\'s rural economy, food security, and export potential. Yet the sector faces systemic constraints, including fragmented animal health information, limited disease surveillance, and lack of end-to-end traceability — all of which undermine sanitary compliance, market access, and climate resilience.',
                'Against this backdrop, Zambia\'s digital livestock agenda represents a strategic opportunity to strengthen national innovation capacity, reduce information asymmetries, and modernize agricultural value chains in alignment with the Global Digital Compact Objective 2 and AIM Global\'s shift "from Alliance to Solutions."'
            ]
        },
        transformationVision: {
            title: 'Transformation Vision',
            overview: 'Zambia aims to establish a national Animal Identification and Traceability System (AITS) that goes significantly beyond traditional tagging or paper-based reporting. The envisioned integrated system would:',
            objectives: [
                'Enhance food safety and consumer trust',
                'Strengthen disease detection and rapid response',
                'Improve sanitary compliance for regional and international markets',
                'Increase climate and environmental resilience',
                'Enable evidence-based agricultural planning and enforcement'
            ],
            outputs: [
                {
                    name: 'National Livestock Identification System (NLIS)',
                    description: 'Unique identification and end-to-end traceability'
                },
                {
                    name: 'Predictive Livestock Early Warning System (PLEWS)',
                    description: 'Integrated monitoring of animal and environmental risks powered by analytics and Earth Observation'
                },
                {
                    name: 'National Livestock Intelligence Platform (NLIP)',
                    description: 'A unified data backbone for policymaking, inspection, and enforcement'
                }
            ],
            conclusion: 'Together, they represent a sector-wide digital transformation pathway, fully aligned with UNIDO\'s approach to strengthening innovation ecosystems through CoEs and digital solutions.'
        },
        readiness: {
            infrastructure: { 
                level: 'moderate', 
                title: 'Digital Infrastructure Readiness',
                findings: [
                    'Livestock data is still predominantly paper-based, creating delays and inconsistencies',
                    'Connectivity in rural districts and border areas remains variable',
                    'EO/satellite data is available but not yet integrated into veterinary workflows'
                ],
                implication: 'Infrastructure can support pilots but requires targeted investment for scale'
            },
            governance: { 
                level: 'moderate', 
                title: 'Data Governance Readiness',
                findings: [
                    'No unified national livestock data model or reference standards',
                    'Data sits in disconnected systems across ministries, lacking interoperability rules or APIs',
                    'Quality assurance, metadata, and validation processes are not institutionalized'
                ],
                implication: 'A governance framework is essential before NLIS, PLEWS, or NLIP can scale'
            },
            aiml: { 
                level: 'emerging', 
                title: 'AI/ML Readiness',
                findings: [
                    'Clear use cases exist for forecasting, anomaly detection, and environmental risk profiling',
                    'However, historical datasets are fragmented or incomplete, limiting model training'
                ],
                implication: 'Begin with rule-based analytics; phase in ML once data improves'
            },
            policy: { 
                level: 'high', 
                title: 'Policy & Regulatory Readiness',
                findings: [
                    'National sanitary regulations and export ambitions create a strong incentive for traceability',
                    'Alignment with international standards (e.g., OIE, Codex) supports system adoption'
                ],
                implication: 'Strong policy drivers can accelerate behavioural and institutional change'
            },
            institutional: { 
                level: 'moderate', 
                title: 'Institutional & Governance Readiness',
                findings: [
                    'Veterinary, border, inspection, and trade authorities have defined mandates but limited data-sharing mechanisms',
                    'Coordination models and stewardship roles need formalization'
                ],
                implication: 'AITS requires a clear multi-agency governance structure and cross-institutional operating model'
            },
            adoption: { 
                level: 'moderate', 
                title: 'User & Adoption Readiness',
                findings: [
                    'Farmers and traders show varying degrees of digital literacy and may lack incentives to comply',
                    'Inspectors and veterinarians are willing but lack digital tools for real-time reporting'
                ],
                implication: 'Adoption must be supported through training, value propositions, and behavioural incentives'
            }
        },
        useCases: [
            {
                title: 'Opportunity 1 — Trusted & Traceable Livestock Value Chains (NLIS)',
                description: 'Strengthening Zambia\'s export competitiveness requires a system capable of unique identification at birth or point of entry, recording all animal movements, and linking sanitary inspections with certification workflows.',
                addresses: [
                    'Data Governance → need for common standards, quality rules, and verification mechanisms',
                    'User Adoption → providing tangible value to farmers, abattoirs, and exporters',
                    'Regulatory Readiness → enabling compliance with OIE/Codex standards'
                ],
                outcome: 'A mature NLIS lays the foundation for end-to-end product integrity and improved market access.'
            },
            {
                title: 'Opportunity 2 — Predictive Animal & Environmental Risk Surveillance (PLEWS)',
                description: 'Integrated monitoring of animal health events, environmental stress, and pasture conditions reduces vulnerability to disease outbreaks and climate shocks.',
                addresses: [
                    'Digital Infrastructure (EO, field data, mobile tools)',
                    'AI Readiness (progressive adoption of analytics → ML forecasting)',
                    'Institutional Readiness (One Health coordination across agencies)'
                ],
                outcome: 'PLEWS transforms fragmented reporting into early-warning capability, enhancing resilience and protecting livelihoods.'
            },
            {
                title: 'Opportunity 3 — Evidence-Based Policy & Enforcement (NLIP)',
                description: 'A national livestock intelligence platform can unify upstream systems (NLIS, PLEWS, inspections, trade) to support planning, enforcement, and resource allocation.',
                addresses: [
                    'Interoperability gaps',
                    'Need for a national data backbone',
                    'Demand for dashboards and analytics within ministries',
                    'Cross-institutional governance challenges'
                ],
                outcome: 'NLIP links digital transformation to tangible policy impact, positioning Zambia for long-term modernization of its livestock sector.'
            }
        ]
    },
    ethiopia: {
        flag: '🇪🇹',
        country: 'Ethiopia',
        sector: 'Leather Sector',
        status: 'placeholder',
        pillars: ['Supply Chain Traceability', 'Quality Assurance Systems', 'Market Access & Compliance'],
        readiness: null,
        recommendations: []
    },
    ghana: {
        flag: '🇬🇭',
        country: 'Ghana',
        sector: 'Rice Value Chain',
        status: 'placeholder',
        pillars: ['Production Monitoring', 'Post-Harvest Management', 'Market Information Systems'],
        readiness: null,
        recommendations: []
    },
    vietnam: {
        flag: '🇻🇳',
        country: 'Viet Nam',
        sector: 'Shrimp/Aquaculture Sector',
        status: 'placeholder',
        pillars: ['Pond Management & Monitoring', 'Disease Early Warning', 'Export Certification'],
        readiness: null,
        recommendations: []
    }
};

const technicalDimensions = [
    {
        icon: 'server',
        title: "1. Digital Infrastructure",
        description: "Foundational systems for data capture, storage, integration, and connectivity.",
        color: "border-blue-500",
        considerations: [
            "Digital records vs. paper-based workflows",
            "Connectivity and device access for frontline users",
            "Sector-specific data sources (EO, sensors, inspection systems)",
            "Cloud/national hosting and cybersecurity safeguards"
        ]
    },
    {
        icon: 'shield',
        title: "2. Data Governance",
        description: "Trusted, consistent, secure data flow across institutions.",
        color: "border-indigo-500",
        considerations: [
            "Data standards, taxonomies, reference datasets",
            "Metadata, cataloguing, quality assurance",
            "Interoperability frameworks and APIs",
            "Data sharing, protection, access rules"
        ]
    },
    {
        icon: 'brain',
        title: "3. AI/ML Readiness",
        description: "Suitability of data and institutions for AI development/deployment.",
        color: "border-violet-500",
        considerations: [
            "Sufficient, reliable, and representative factual datasets",
            "Analytic capacity among partners",
            "Responsible AI principles and governance",
            "Clear use cases (forecasting, detection, optimization)"
        ]
    }
];

const socialDimensions = [
    {
        icon: 'file',
        title: "4. Policy & Regulatory",
        description: "Enabling policy environment for data use and digital transformation.",
        color: "border-emerald-500",
        considerations: [
            "Digital, AI, industrial, sectoral strategies",
            "Regulatory requirements (food safety, traceability)",
            "Alignment with broader frameworks such as: SDGs, GDC Objective 2 (inclusive digital economy), and Objective 5 (responsible AI governance and risk management)"
        ]
    },
    {
        icon: 'building',
        title: "5. Institutional & Governance",
        description: "Institutional capacity to steward, sustain, and scale digital systems.",
        color: "border-teal-500",
        considerations: [
            "Clear mandates, roles, and coordination mechanisms across ministries and agencies",
            "Presence of dedicated digital transformation or data units within relevant institutions",
            "Vertical coordination between national and sub-national levels, particularly in decentralized sectors"
        ]
    },
    {
        icon: 'users',
        title: "6. User & Adoption",
        description: "Human capacity, incentives, and cultural readiness for digital tools.",
        color: "border-cyan-500",
        considerations: [
            "Digital literacy, training, change management, and perceived value of digital tools",
            "Financial/regulatory incentives with a gender and equity lens",
            "Rural connectivity, mobile access, and alignment with farmer networks/cooperatives"
        ]
    }
];

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

// Readiness level config
const levelConfigs = {
    high: { color: 'bg-emerald-500', text: 'Strong', icon: 'checkCircle' },
    moderate: { color: 'bg-amber-500', text: 'Moderate', icon: 'minusCircle' },
    low: { color: 'bg-red-400', text: 'Low', icon: 'alertCircle' },
    emerging: { color: 'bg-blue-400', text: 'Emerging', icon: 'alertCircle' }
};

// Readiness Level Component
function renderReadinessLevel(level) {
    const config = levelConfigs[level] || levelConfigs.moderate;
    return `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-white ${config.color}">
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${iconPaths[config.icon]}
            </svg>
            ${config.text}
        </span>
    `;
}

// Readiness Card Component
function renderReadinessCard(label, data, iconName, color) {
    const cardId = `card-${label.toLowerCase().replace(/\s+/g, '-')}`;
    return `
        <div class="bg-white rounded-lg border-l-4 ${color} shadow-sm overflow-hidden">
            <div 
                class="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
                onclick="toggleCard('${cardId}')"
            >
                <div class="flex items-center gap-2">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="${color.replace('border-', 'text-')}">
                        ${iconPaths[iconName]}
                    </svg>
                    <span class="text-sm font-medium text-gray-700">${label}</span>
                </div>
                <div class="flex items-center gap-2">
                    ${renderReadinessLevel(data.level)}
                    <svg id="${cardId}-chevron" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-gray-400">
                        ${iconPaths.chevronRight}
                    </svg>
                </div>
            </div>
            <div id="${cardId}-content" class="hidden px-3 pb-3 pt-1 bg-gray-50 border-t border-gray-100">
                <div class="space-y-1 mb-3">
                    ${data.findings.map(f => `
                        <div class="flex items-start gap-2 text-xs text-gray-600">
                            <span class="text-gray-400 mt-0.5">•</span>
                            <span>${f}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="bg-blue-50 rounded p-2 border-l-2 border-blue-400">
                    <p class="text-xs text-blue-800"><span class="font-semibold">Implication:</span> ${data.implication}</p>
                </div>
            </div>
        </div>
    `;
}

// Dimension Card Component
function renderDimensionCard(dim, index) {
    const cardId = `dim-card-${index}`;
    const bgColor = dim.color.replace('border-', 'bg-').replace('-500', '-100');
    const textColor = dim.color.replace('border-', 'text-');
    return `
        <div class="${dim.color} bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
            <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg ${bgColor}">
                    <svg class="${textColor}" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${iconPaths[dim.icon]}
                    </svg>
                </div>
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-800">${dim.title}</h4>
                    <p class="text-sm text-gray-600 mt-1">${dim.description}</p>
                    <button 
                        onclick="toggleCard('${cardId}')"
                        class="flex items-center gap-1 text-xs text-blue-600 mt-2 hover:text-blue-800"
                    >
                        <svg id="${cardId}-chevron" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            ${iconPaths.chevronRight}
                        </svg>
                        Key Considerations
                    </button>
                    <div id="${cardId}-content" class="hidden mt-2 space-y-1">
                        ${dim.considerations.map(c => `
                            <li class="text-xs text-gray-600 flex items-start gap-2">
                                <span class="text-gray-400 mt-0.5">•</span>
                                ${c}
                            </li>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
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

// Radar Chart Component
function renderReadinessRadar(readiness) {
    const dimensions = [
        { key: 'infrastructure', label: 'Infrastructure', angle: -90 },
        { key: 'governance', label: 'Governance', angle: -30 },
        { key: 'aiml', label: 'AI/ML', angle: 30 },
        { key: 'policy', label: 'Policy', angle: 90 },
        { key: 'institutional', label: 'Institutional', angle: 150 },
        { key: 'adoption', label: 'Adoption', angle: 210 }
    ];
    
    const levelToValue = { high: 1, moderate: 0.66, low: 0.33, emerging: 0.5 };
    const centerX = 100, centerY = 100, radius = 70;
    
    function getPoint(angle, value) {
        const rad = (angle * Math.PI) / 180;
        return {
            x: centerX + radius * value * Math.cos(rad),
            y: centerY + radius * value * Math.sin(rad)
        };
    }
    
    const points = dimensions.map(d => getPoint(d.angle, levelToValue[readiness[d.key].level]));
    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
    
    return `
        <svg viewBox="0 0 200 200" class="w-full h-full">
            ${[1, 0.66, 0.33].map((r, i) => {
                const polygonPoints = dimensions.map(d => {
                    const p = getPoint(d.angle, r);
                    return `${p.x},${p.y}`;
                }).join(' ');
                return `<polygon points="${polygonPoints}" fill="none" stroke="#e5e7eb" stroke-width="1" />`;
            }).join('')}
            ${dimensions.map((d, i) => {
                const p = getPoint(d.angle, 1);
                return `<line x1="${centerX}" y1="${centerY}" x2="${p.x}" y2="${p.y}" stroke="#e5e7eb" stroke-width="1" />`;
            }).join('')}
            <path d="${pathD}" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2" />
            ${points.map((p, i) => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#3b82f6" />`).join('')}
            ${dimensions.map((d, i) => {
                const p = getPoint(d.angle, 1.25);
                return `<text x="${p.x}" y="${p.y}" text-anchor="middle" dominant-baseline="middle" class="text-[8px] fill-gray-600 font-medium">${d.label}</text>`;
            }).join('')}
        </svg>
    `;
}

// Render framework tab
function renderFrameworkTab() {
    const container = document.getElementById('dimensions-list');
    container.innerHTML = [...technicalDimensions, ...socialDimensions]
        .map((dim, i) => renderDimensionCard(dim, i))
        .join('');
}

// Render case studies tab
function renderCaseStudiesTab() {
    // Render selector
    const selector = document.getElementById('case-selector');
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

    // Render active case study
    const content = document.getElementById('case-study-content');
    const cs = caseStudies[activeCase];
    
    if (cs.status === 'active') {
        // Strategic Context & Rationale
        const strategicContextHTML = cs.strategicContext ? `
            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-4">1. ${cs.strategicContext.title}</h3>
                <div class="space-y-3 text-sm text-gray-700 leading-relaxed">
                    ${cs.strategicContext.content.map(para => `<p>${para}</p>`).join('')}
                </div>
            </div>
        ` : '';

        // Transformation Vision
        const transformationVisionHTML = cs.transformationVision ? `
            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-4">2. ${cs.transformationVision.title}</h3>
                <p class="text-sm text-gray-700 mb-4 leading-relaxed">${cs.transformationVision.overview}</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-sm text-gray-700 ml-4">
                    ${cs.transformationVision.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
                <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-800 mb-3">Operationalized through three mutually reinforcing outputs:</h4>
                    <div class="space-y-3">
                        ${cs.transformationVision.outputs.map((output, idx) => `
                            <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                                <h5 class="font-semibold text-blue-900 mb-1">${output.name}</h5>
                                <p class="text-sm text-gray-700">${output.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <p class="text-sm text-gray-700 italic leading-relaxed">${cs.transformationVision.conclusion}</p>
            </div>
        ` : '';

        // Readiness Assessment
        const readinessHTML = cs.readiness ? `
            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-4">3. Readiness Assessment Summary (Technical + Social Readiness)</h3>
                <p class="text-xs text-gray-500 mb-4 italic">A synthesis based on the six TRA domains.</p>
                
                <div class="mb-6">
                    <h4 class="text-sm font-semibold text-blue-900 mb-3">A. Technical Readiness</h4>
                    <div class="space-y-3">
                        ${renderReadinessCard(cs.readiness.infrastructure.title, cs.readiness.infrastructure, 'server', 'border-blue-500')}
                        ${renderReadinessCard(cs.readiness.governance.title, cs.readiness.governance, 'shield', 'border-indigo-500')}
                        ${renderReadinessCard(cs.readiness.aiml.title, cs.readiness.aiml, 'brain', 'border-violet-500')}
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-semibold text-emerald-900 mb-3">B. Social Readiness</h4>
                    <div class="space-y-3">
                        ${renderReadinessCard(cs.readiness.policy.title, cs.readiness.policy, 'file', 'border-emerald-500')}
                        ${renderReadinessCard(cs.readiness.institutional.title, cs.readiness.institutional, 'building', 'border-teal-500')}
                        ${renderReadinessCard(cs.readiness.adoption.title, cs.readiness.adoption, 'users', 'border-cyan-500')}
                    </div>
                </div>
            </div>
        ` : '';

        // Priority Use Cases
        const useCasesHTML = cs.useCases ? `
            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-4">4. Priority Use Cases Enabled by Improved Readiness</h3>
                <p class="text-xs text-gray-500 mb-4 italic">Recasting NLIS, PLEWS, NLIP as readiness-driven opportunity pathways.</p>
                <div class="space-y-6">
                    ${cs.useCases.map((useCase, idx) => `
                        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border-l-4 border-blue-500">
                            <h4 class="font-bold text-blue-900 mb-3">${useCase.title}</h4>
                            <p class="text-sm text-gray-700 mb-4 leading-relaxed">${useCase.description}</p>
                            <div class="mb-4">
                                <p class="text-xs font-semibold text-gray-600 mb-2">This directly addresses gaps in:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                                    ${useCase.addresses.map(addr => `<li>${addr}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="bg-white rounded p-3 border-l-2 border-blue-400">
                                <p class="text-sm text-gray-800"><span class="font-semibold">Outcome:</span> ${useCase.outcome}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        content.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">${cs.flag}</div>
                    <div>
                        <h2 class="font-bold text-gray-900 text-xl">Case Study: ${cs.country} – ${cs.sector}</h2>
                    </div>
                </div>
            </div>
            ${strategicContextHTML}
            ${transformationVisionHTML}
            ${readinessHTML}
            ${useCasesHTML}
        `;
    } else {
        content.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm p-8 text-center">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    ${cs.flag}
                </div>
                <h3 class="font-bold text-gray-900 text-xl mb-1">${cs.country} – ${cs.sector}</h3>
                <span class="inline-block bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full font-medium mb-4">
                    Assessment Pending
                </span>
                <p class="text-gray-500 text-sm max-w-md mx-auto mb-6">
                    The Data Readiness Assessment for this sector is currently under development. The framework will evaluate readiness across all six dimensions.
                </p>
                
                <h4 class="text-xs font-semibold text-gray-500 uppercase mb-3">Anticipated Transformation Pillars</h4>
                <div class="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-6">
                    ${cs.pillars.map(p => `
                        <div class="bg-gray-50 rounded-lg p-3 text-center border border-dashed border-gray-300">
                            <span class="text-xs text-gray-500">${p}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="bg-gray-50 rounded-lg p-4 max-w-md mx-auto">
                    <h5 class="text-xs font-semibold text-gray-600 mb-2">Assessment Dimensions to be Evaluated</h5>
                    <div class="flex flex-wrap justify-center gap-2">
                        ${['Infrastructure', 'Governance', 'AI/ML', 'Policy', 'Institutional', 'Adoption'].map(d => `
                            <span class="bg-white px-2 py-1 rounded text-xs text-gray-400 border border-gray-200">${d}</span>
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
    renderFrameworkTab();
    renderCaseStudiesTab();
});

// Make functions globally available
window.setActiveTab = setActiveTab;
window.setActiveCase = setActiveCase;
window.toggleCard = toggleCard;


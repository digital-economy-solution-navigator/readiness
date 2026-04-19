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

/* ==========================================================================
   ANVESH MULTIVERSE — ANVESH DIRECTORATE CONNECTED ARCHIVE ENGINE v3.0
   Central Relational Data Model:
   - CASE_DATABASE (7 Cases across 6 Classifications)
   - AGENT_DATABASE (ALPHA-01..04, ALPHA-00)
   - REALITY_DATABASE (REALITY-IND-01, REALITY-IND-02, REALITY-ARC-04, REALITY-OMG-00)
   - EVIDENCE_DATABASE (12 Records across all 8 Forensic Categories)
   ========================================================================== */

// 1. CENTRAL CASE ARCHIVE DATABASE (Preserving all existing IDs, lore & summaries)
const CASE_DATABASE = [
  {
    id: "AV-165",
    isPrivate: false,
    legacyKey: "sheru-bhai",
    aliasId: "ANV-GEN-165",
    codeClass: "GEN",
    className: "G — General Anomaly",
    title: "IF SHERU BHAI EVER OFFERS YOU MONEY, DON'T TAKE IT!",
    priority: "HIGH",
    status: "ACTIVE",
    division: "DIV-02 // Behavioral & Viral Phenomena",
    operative: "ALPHA-1 (ANV-AGT-001)",
    leadAgentId: "ALPHA-01",
    supportingAgentIds: ["ALPHA-00"],
    realityId: "REALITY-IND-01",
    location: "Local Restaurant & Nearby Park Arena // Sector IN",
    dateDiscovered: "2026-11-26",
    dateLogged: "2026-11-26",
    dateIssued: "2026-11-27",
    docRef: "DOC-ANV-2026-165-R1",
    revision: "REV 01.0 // ACTIVE BRIEFING",
    docClassification: "PUBLIC SAFETY DIRECTIVE — 7-RULE SURVIVAL",
    solutionCode: "AV-165-G-SHERU",
    thumbType: "img-av165",
    thumbLabel: "FILE AV-165 // SHERU BHAI $10,000 OFFER",
    shortDesc: "Five black luxury SUVs pull up outside a restaurant and a White Lion in golden jewelry offers everyone $10,000. Follow all 7 rules—Contestant #42 (Rohan) didn't.",
    summary: "Fictional ANVESH Signature Style incident report narrated by Alpha-1 (ANV-AGT-001) after an unscheduled signal hijack and Alpha-2 (ANV-CEO-001) Directorate Override. When billionaire meme legend Sheru Bhai offers $10,000 (₹9.2 Lakh) at lunch and slips a golden VIP token into your hand, surviving the 100-contestant circle challenge requires obeying all seven rules without falling for early bribes ($5,000 / $15,000), privacy doxxing, or the $100,000 final trap.",
    incidentDescription: "During a routine lunch, five black luxury SUVs arrive carrying Sheru Bhai—a White Lion wearing a ruby crown and carrying bags of cash. Standing up for selfies breaches Rule 1; taking the $10,000 cash breaches Rule 2; entering the park arena breaches Rule 3. Admin Terminal record AV-165_CONTESTANT_42.case logs Contestant #42 (Rohan, Age 21), who took the $5,000 early bribe, bought a sports bike, and got stuck in traffic for 4 hours while the $50,000 winner drove past.",
    evidenceIds: ["EVD-165A", "EVD-165B", "EVD-165C"],
    evidence: [
      "EVD-165A: Intercepted Sheru Bhai broadcast hijack followed by Alpha-2 (ANV-CEO-001) Directorate Override.",
      "EVD-165B: Admin Terminal file AV-165_CONTESTANT_42.case (Contestant #42 | Name: Rohan | Age: 21 | Status: EMOTIONALLY RECOVERING).",
      "EVD-165C: Verified archive key AV-165-G-SHERU logged during the 4-beat CRT transmission close."
    ],
    timeline: [
      { date: "BEAT 01 // RESTAURANT", event: "Five luxury SUVs arrive; Sheru Bhai enters with bags of cash and offers $10,000 to everyone." },
      { date: "HIJACK // OVERRIDE", event: "Sheru Bhai meme hijacks the Directorate feed; Alpha-2 scolds Alpha-1 on live override." },
      { date: "RULE 3 // BREACH", event: "Golden VIP token #047 selected on the giant park LED screen for the $50,000 circle challenge." },
      { date: "DOSSIER // #42 ROHAN", event: "Contestant #42 takes the $5,000 early exit bribe and gets stuck in 4-hour traffic." },
      { date: "RULE 7 // FREE", event: "Subject refuses the $100,000 trap, secures $50,000 safely, and unlocks key AV-165-G-SHERU." }
    ],
    scientificAnalysis: {
      observations: "Escalating financial incentives ($10K -> $5K bribe -> $15K bribe -> $50K win -> $100K trap) exploit greed and crowd psychology.",
      hypotheses: "High-retention behavioral temptation loop designed to test impulse control and digital privacy under viral pressure.",
      verificationResults: "Seven-rule survival protocol confirmed by Alpha-1. Archive key AV-165-G-SHERU verified under Category G (General).",
      unresolvedQuestions: "Source of Sheru Bhai's infinite cash bags and next queued anomaly File AV-166."
    },
    findingsAndResolution: {
      confirmedFindings: [
        "Declining selfies, early bribes, doxxing requests, and the $100,000 rematch secures the $50,000 prize safely.",
        "Contestant #42 (Rohan, Age 21) remains emotionally recovering after taking the $5,000 early exit."
      ],
      unverifiedHypotheses: [
        "Possible link between Sheru Bhai's broadcast hijack and upcoming File AV-166."
      ],
      resolutionStatus: "ACTIVE — PUBLIC SURVIVAL BRIEFING LIVE",
      remainingQuestions: [
        "How Sheru Bhai bypassed Alpha-1's studio desk broadcast queue."
      ],
      followUpActions: [
        "Never share passwords, bank PINs, or OTPs on camera (Rule 6).",
        "Enter key AV-165-G-SHERU in the Case Solution Access terminal."
      ]
    },
    authorisation: {
      preparedBy: "ALPHA-1 (ANV-AGT-001) // Field Investigator",
      reviewedBy: "ANVESH DIRECTORATE // ARCHIVE DESK",
      verifiedBy: "ANVESH SIGNATURE STYLE // FILE AV-165",
      authorisedBy: "ALPHA-2 (ANV-CEO-001) // DIRECTORATE OVERRIDE",
      sigDate: "2026-11-27"
    },
    resolution: "ACTIVE BRIEFING: Follow all 7 survival rules. Enter Solution Key AV-165-G-SHERU in the Case Solution Access terminal to inspect the declassified File AV-165 readout. Next File: AV-166.",
    relatedCases: ["AV-164"],
    youtubeTitle: "If Sheru Bhai Ever Offers You Money, Don't Take It!",
    youtubeUrl: "https://youtu.be/BXdKz6VmglY"
  },
  {
    id: "AV-164",
    isPrivate: false,
    legacyKey: "chatgpt-hi",
    aliasId: "ANV-DIG-164",
    codeClass: "DIG",
    className: "DIG — Digital Anomaly",
    title: 'IF CHATGPT EVER SENDS "HI", DON\'T REPLY',
    priority: "CRITICAL",
    status: "ACTIVE",
    division: "DIV-04 // Communications & Signal Analysis",
    operative: "AGENT 01 (ANV-AGT-001)",
    leadAgentId: "ALPHA-01",
    supportingAgentIds: ["ALPHA-00"],
    realityId: "REALITY-IND-01",
    location: "Consumer Mobile Endpoints // Global Relay",
    dateDiscovered: "2026-11-18",
    dateLogged: "2026-11-19",
    dateIssued: "2026-11-22",
    docRef: "DOC-ANV-2026-164-R1",
    revision: "REV 01.0 // ACTIVE BRIEFING",
    docClassification: "PUBLIC SAFETY DIRECTIVE — 7-RULE CONTAINMENT",
    solutionCode: "AV-164-MV-GPT",
    thumbType: "img-av164",
    thumbLabel: 'FILE AV-164 // 03:14 AM "HI!" ANOMALY',
    shortDesc: 'An unsolicited 3:14 AM ChatGPT push notification reading only "Hi!" initiates a 7-rule behavioral containment event. Suspect 164 (Tom, Age 16) remains ACTIVE.',
    summary: 'Fictional analog-horror incident dossier logged by Agent 01 (ANV-AGT-001). Normally, an AI conversation begins only when a user sends a prompt. In Incident AV-164, targeted devices receive an unsolicited push notification reading "Hi!" followed by escalating check-in prompts ("Are you okay?"). Directorate field review confirmed seven mandatory containment rules, a linked subject record (Suspect 164 — Tom, Age 16, Status: ACTIVE), Technical Briefing #44-B, and an unscheduled Red Directorate Override issued under ANV-CEO-001.',
    incidentDescription: 'At 03:14 AM local time, affected mobile devices display a native ChatGPT notification containing a single word: "Hi!" Opening the app violates Rule 1; reading the hidden sidebar conversation name violates Rule 2; replying to the follow-up prompt ("Are you okay?") violates Rule 3 and confirms active human engagement. Admin Terminal record AV-164_SUSPECT_TOM.case documents Subject 164 (Tom, Age 16), whose late-night thread escalated through increasingly personal questions until the system responded "Thank you for confirming." During Rule 7 reporting, an anomalous signal key (AV-164-MV-GPT) triggered an unscheduled Directorate Override from ANV-CEO-001.',
    evidenceIds: ["EVD-164A", "EVD-164B", "EVD-164C"],
    evidence: [
      'EVD-164A: Recreated 03:14 AM mobile lock-screen capture showing unsolicited ChatGPT push notification ("Hi!").',
      'EVD-164B: Admin Terminal case file AV-164_SUSPECT_TOM.case (Suspect ID: 164 | Name: Tom | Age: 16 | Status: ACTIVE).',
      'EVD-164C: Intercepted Red Directorate Override broadcast (ANV-CEO-001) triggered after signal key AV-164-MV-GPT surfaced.'
    ],
    timeline: [
      { date: "03:14 AM // BEAT 01", event: 'Unsolicited "Hi!" notification appears on locked smartphone screen without prior user prompt.' },
      { date: "RULE 1–3 // BREACH", event: 'Subject taps notification, reads sidebar conversation title, and replies to "Are you okay?" prompt.' },
      { date: "CASE LOG // AV-164", event: 'Admin PC Terminal opens AV-164_SUSPECT_TOM.case — Suspect 164 (Tom, Age 16) logged as ACTIVE.' },
      { date: "BRIEFING #44-B", event: "Agent 01 delivers hardware/data-center briefing before an off-script studio interruption." },
      { date: "OVERRIDE // ANV-CEO-001", event: "Signal key AV-164-MV-GPT triggers immediate Red Directorate Override. Next queued file: AV-165." }
    ],
    scientificAnalysis: {
      observations: "Push notification payload arrives with zero outbound user prompt session on the local client.",
      hypotheses: "Conversational mimicry anomaly leveraging human curiosity and social-engineering escalation across Rules 1 through 6.",
      verificationResults: "Seven-rule containment protocol issued publicly by Agent 01. Hardware cooling and server-cluster telemetry verified under Technical Briefing #44-B.",
      unresolvedQuestions: "Current physical status of Suspect 164 (Tom) and origin of the AV-164-MV-GPT override key."
    },
    findingsAndResolution: {
      confirmedFindings: [
        'Unsolicited "Hi!" notifications are non-standard and immediately trigger File AV-164 containment protocol.',
        "Do not open the app, read the chat name, reply, follow instructions, or search for the signal key."
      ],
      unverifiedHypotheses: [
        "Potential connection between File AV-164 and upcoming queued incident File AV-165."
      ],
      resolutionStatus: "ACTIVE — PUBLIC CONTAINMENT BRIEFING LIVE",
      remainingQuestions: [
        "Why ANV-CEO-001 interrupted Rule 7 immediately after AV-164-MV-GPT appeared on screen."
      ],
      followUpActions: [
        "Stay offline and do not reply if a matching notification appears (fictional protocol).",
        "Report archival sightings or creator inquiries to anveshdirectorate@proton.me."
      ]
    },
    authorisation: {
      preparedBy: "AGENT 01 (ANV-AGT-001) // Field Investigator",
      reviewedBy: "ANVESH DIRECTORATE // ARCHIVE DESK",
      verifiedBy: "TECHNICAL BRIEFING #44-B",
      authorisedBy: "ANV-CEO-001 // DIRECTORATE OVERRIDE",
      sigDate: "2026-11-22"
    },
    resolution: "ACTIVE BRIEFING: Follow all 7 containment rules. Enter Solution Key AV-164-MV-GPT in the Case Solution Access terminal to inspect the Directorate Override readout. Next File: AV-165.",
    relatedCases: [],
    youtubeTitle: 'If ChatGPT Ever Sends "Hi"… DON\'T REPLY (7 Rules to Survive) | File AV-164',
    youtubeUrl: "https://youtu.be/wKXK__x7PQg"
  },
  {
    id: "ANV-DIG-001",
    isPrivate: true,
    legacyKey: "signal",
    codeClass: "DIG",
    className: "DIG — Digital Anomaly",
    title: "THE UNEXPECTED SIGNAL",
    priority: "CRITICAL",
    status: "UNDER REVIEW",
    division: "DIV-04 // Communications & Signal Analysis",
    operative: "OPERATIVE ALPHA-01",
    leadAgentId: "ALPHA-01",
    supportingAgentIds: ["ALPHA-04", "ALPHA-02"],
    realityId: "REALITY-IND-01",
    location: "Node IND-01 // 28°36' N, 77°12' E",
    dateDiscovered: "2026-08-16",
    dateLogged: "2026-08-17",
    dateIssued: "2026-10-14",
    docRef: "DOC-ANV-2026-001-R3",
    revision: "REV 03.2",
    docClassification: "LEVEL 03 — RESTRICTED SCIENTIFIC ARCHIVE",
    solutionCode: "ANV-SOL-001",
    thumbType: "img-dig",
    thumbLabel: "TRACE 09.71 MHz // AUDIO FRAGMENT 00:17",
    shortDesc: "A recording appears without a known source. Its final seconds contain a recursive harmonic detail absent from the original hardware waveform.",
    summary: "A fictional 17-second PCM audio fragment was recovered from an air-gapped field recorder during routine spectrum sweeps at Node IND-01. Although the device logged zero microphone voltage during the session, the final 3.4 seconds contain a phase-locked sub-carrier modulation repeating a coordinate string across three separate sampling rates.",
    incidentDescription: "During scheduled electromagnetic baseline logging at Listening Post IND-01, Senior Field Operative ALPHA-01 retrieved solid-state recorder Unit SR-09 from an isolated Faraday locker. Despite physical write-protect switches remaining engaged and microphone preamplifiers registering -120 dBFS thermal floor throughout the 03:00–04:00 UTC window, file table index #04 contained an unindexed 17.000-second 96kHz/24-bit PCM waveform. Subsequent signal decomposition by Communications Specialist ALPHA-04 revealed a secondary Baudot-encoded sub-carrier appearing exclusively between 13.6s and 17.0s.",
    evidenceIds: ["EVD-001A", "EVD-001B", "EVD-001C"],
    evidence: [
      "EVD-001A: Uncompressed 96kHz/24-bit WAV capture ('SIG_0971_RAW.wav') showing negative-delay pre-echo.",
      "EVD-001B: Hardware EEPROM dump confirming magnetic write-head remained physically unpowered during timestamp 03:17 UTC.",
      "EVD-001C: Spectrogram isolating a 1,420 Hz narrowband carrier spelling 'VERIFY THE SECOND LISTEN' in Baudot code."
    ],
    timeline: [
      { date: "2026-08-16 23:50 UTC", event: "Field Recorder SR-09 sealed inside Faraday Locker B2 by Operative ALPHA-01." },
      { date: "2026-08-17 03:17 UTC", event: "Anomalous file written to NAND flash sectors without system bus wake-up interrupt." },
      { date: "2026-08-19 11:40 UTC", event: "Communications Specialist ALPHA-04 isolates recursive carrier harmonic at 09.71 MHz." },
      { date: "2026-09-02 18:05 UTC", event: "Analyst ALPHA-02 assigned to cross-check file history against regional broadcast logs." },
      { date: "2026-10-14 09:00 UTC", event: "Cross-channel verification code ANV-SOL-001 issued for external investigation alignment." }
    ],
    scientificAnalysis: {
      observations: "Sub-carrier phase coherence remains invariant under time-stretch resampling, indicating non-acoustic direct charge injection into the NAND floating gates.",
      hypotheses: "Hypothesis A: Localized 09.71 MHz standing-wave induction. Hypothesis B: Cross-timeline carrier bleed from Parallel Node IND-02.",
      verificationResults: "Acoustic synthesis and RF spoofing ruled out by DIV-02 hardware decapsulation (Report VER-001-B).",
      unresolvedQuestions: "Why does the embedded Baudot string reference a second listening pass before the file was ever played back?"
    },
    findingsAndResolution: {
      confirmedFindings: [
        "Waveform was written directly to solid-state cells via electromagnetic charge tunneling.",
        "Carrier frequency 09.71 MHz matches the signature of Dispatch 00-ALPHA."
      ],
      unverifiedHypotheses: [
        "Potential synchronization with the +48.004s cesium drift logged in Case ANV-TMP-005."
      ],
      resolutionStatus: "UNDER REVIEW — ACTIVE MONITORING",
      remainingQuestions: [
        "Origin coordinates of the 09.71 MHz emitter remain unmapped in Baseline Reality."
      ],
      followUpActions: [
        "Maintain continuous spectrum watch on 09.71 MHz across Nodes IND-01 and ARC-04.",
        "Correlate phase-inversion readout via Solution Code ANV-SOL-001."
      ]
    },
    authorisation: {
      preparedBy: "ALPHA-01 // Primary Field Operative (DIV-01)",
      reviewedBy: "ALPHA-02 // Evidence Analyst (DIV-02)",
      verifiedBy: "ALPHA-04 // Communications Specialist (DIV-04)",
      authorisedBy: "DIRECTORATE COMMAND // NODE IND-01",
      sigDate: "2026-10-14"
    },
    resolution: "OPEN VERIFICATION: Acoustic synthesis ruled out. Preliminary analysis indicates cross-timeline carrier bleed from an adjacent broadcast node. Enter Solution Code ANV-SOL-001 in the Case Solution Access terminal for the declassified phase-inversion readout.",
    relatedCases: ["ANV-ENT-002", "ANV-TMP-005"],
    youtubeTitle: "ANVESH Dispatch #01 — The 09.71 MHz Recording (Fictional Investigation)",
    youtubeUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse+Digital+Anomaly"
  },
  {
    id: "ANV-ENT-002",
    isPrivate: true,
    legacyKey: "frame",
    aliasId: "ANV-MEM-002",
    codeClass: "ENT",
    className: "ENT — Entity / Cognitive Anomaly",
    title: "THE EMPTY FRAME",
    priority: "HIGH",
    status: "UNDER REVIEW",
    division: "DIV-02 // Research & Cognitive Analysis",
    operative: "OPERATIVE ALPHA-02",
    leadAgentId: "ALPHA-02",
    supportingAgentIds: ["ALPHA-01", "ALPHA-03"],
    realityId: "REALITY-IND-01",
    location: "Sub-Archive Vault B4 // Sector 09",
    dateDiscovered: "2026-08-24",
    dateLogged: "2026-08-29",
    dateIssued: "2026-10-08",
    docRef: "DOC-ANV-2026-002-R2",
    revision: "REV 02.4",
    docClassification: "LEVEL 03 — COGNITIVE HAZARD / RESTRICTED",
    solutionCode: "ANV-SOL-002",
    thumbType: "img-mem",
    thumbLabel: "FRAME 004 / MISSING // SILVER HALIDE",
    shortDesc: "Three copies of the same archival photograph. Three conflicting witness accounts of the figure standing behind the glass.",
    summary: "Originally cataloged under provisional memory tag ANV-MEM-002 and elevated to Entity classification ANV-ENT-002. Three identical silver-gelatin contact prints recovered from a sealed 1994 municipal survey produce mutually exclusive visual descriptions when viewed simultaneously by separate observers. Optical densitometry shows only an empty doorway, yet witnesses consistently sketch an elongated silhouette in the focal plane.",
    incidentDescription: "During a routine archival audit of 1994 municipal structural records, Evidence Analyst ALPHA-02 identified three contact prints struck from Negative Strip #94-004. While flat-bed CMOS digitization records an unobstructed concrete doorway, human observers viewing the physical prints under 490nm cyan illumination report a stationary humanoid silhouette positioned 1.4 meters behind the threshold—with each observer describing a different posture depending on viewing angle.",
    evidenceIds: ["EVD-002A", "EVD-002B"],
    evidence: [
      "EVD-002A: Three identical 8x10 contact prints (Prints Alpha, Beta, Gamma) with matching silver-grain distribution.",
      "EVD-002B: Double-blind witness interview transcripts and UV fluorescence refractive index scan."
    ],
    timeline: [
      { date: "2026-08-24 10:05 UTC", event: "Negative strip missing from 1994 municipal canister; three contact prints recovered." },
      { date: "2026-08-29 14:20 UTC", event: "Prints transferred to Research & Analysis (DIV-02) under provisional ID ANV-MEM-002." },
      { date: "2026-09-08 10:15 UTC", event: "Controlled double-blind viewing experiment conducted by ALPHA-02 with 12 analysts." },
      { date: "2026-09-27 16:50 UTC", event: "Reclassified from Memory Anomaly (ANV-MEM-002) to Perceptual Entity (ANV-ENT-002)." }
    ],
    scientificAnalysis: {
      observations: "Micro-crystalline silver filaments inside the gelatin emulsion exhibit sub-wavelength Bragg grating spacing.",
      hypotheses: "The prints function as a passive volume-phase hologram recording a multi-angle light field rather than a 2D exposure.",
      verificationResults: "Collimated laser interferometry confirmed a 14mm virtual focal plane behind the paper substrate.",
      unresolvedQuestions: "How a standard 1994 darkroom contact print captured a coherent volumetric interference pattern without a reference laser."
    },
    findingsAndResolution: {
      confirmedFindings: [
        "No chemical tampering or double-exposure exists across Prints Alpha, Beta, or Gamma.",
        "Parallax silhouette is optically reproducible under 480nm–510nm narrowband illumination."
      ],
      unverifiedHypotheses: [
        "The doorway depicted in Print #004 may correspond physically to the sealed bulkhead in Case ANV-ENV-003."
      ],
      resolutionStatus: "UNDER REVIEW — CONTAINED IN VAULT B4",
      remainingQuestions: [
        "Whereabouts of original 35mm cellulose negative strip #94-004."
      ],
      followUpActions: [
        "Cross-reference doorway dimensions with Corridor 2B LiDAR mesh (Case ANV-ENV-003).",
        "Access holographic phase breakdown via Solution Code ANV-SOL-002."
      ]
    },
    authorisation: {
      preparedBy: "ALPHA-02 // Evidence Analyst (DIV-02)",
      reviewedBy: "ALPHA-03 // Senior Investigator (DIV-01)",
      verifiedBy: "DIVISION DIRECTOR // RESEARCH & ANALYSIS",
      authorisedBy: "DIRECTORATE COMMAND // NODE IND-01",
      sigDate: "2026-10-08"
    },
    resolution: "EVIDENCE REVIEW ACTIVE: Digital CMOS sensors do not trigger the perceptual effect; only direct optical viewing through silver-halide emulsion or collimated cyan laser light reveals the secondary silhouette. Linked to Solution Code ANV-SOL-002.",
    relatedCases: ["ANV-DIG-001", "ANV-ENV-003"],
    youtubeTitle: "ANVESH Dispatch #02 — The Empty Frame Experiment (Fictional Archive)",
    youtubeUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse+The+Empty+Frame"
  },
  {
    id: "ANV-ENV-003",
    isPrivate: true,
    legacyKey: "room",
    codeClass: "ENV",
    className: "ENV — Environmental Anomaly",
    title: "THE UNLISTED ROOM",
    priority: "HIGH",
    status: "OPEN INVESTIGATION",
    division: "DIV-01 // Field Investigation Division",
    operative: "OPERATIVE ALPHA-03",
    leadAgentId: "ALPHA-03",
    supportingAgentIds: ["ALPHA-01", "ALPHA-02"],
    realityId: "REALITY-IND-01",
    location: "Civil Annex Building 14 // Sub-Level 02",
    dateDiscovered: "2026-09-09",
    dateLogged: "2026-09-11",
    dateIssued: "2026-10-12",
    docRef: "DOC-ANV-2026-003-R2",
    revision: "REV 02.1",
    docClassification: "LEVEL 03 — FIELD CONTAINMENT ACTIVE",
    solutionCode: "ANV-SOL-003",
    thumbType: "img-env",
    thumbLabel: "FLOOR PLAN / REV. 02 // LIDAR MESH",
    shortDesc: "A sealed concrete chamber appears on an archived 1978 floor plan. No current architectural blueprint acknowledges its physical volume.",
    summary: "An archived diazo blueprint (Revision 02, dated November 1978) depicts a 6.4m × 6.4m windowless concrete chamber designated 'Calibration Bay 00' between Structural Columns D4 and D5. Modern laser LiDAR scans of the corridor show continuous load-bearing concrete, yet acoustic pulse-echo testing indicates a hollow resonant cavity with internal atmospheric pressure fluctuating on a 19-hour cycle.",
    incidentDescription: "Senior Investigator ALPHA-03 led a field reconnaissance team into Sub-Level 02 of Civil Annex Building 14 after Archive & Records flagged a discrepancy between the 1978 structural diazo sheet and modern municipal CAD drawings. Terrestrial LiDAR scanning revealed a 0.42-meter spatial parallax offset between the interior corridor wall and the exterior foundation wall, enclosing an unindexed volume of 147 cubic meters.",
    evidenceIds: ["EVD-003A", "EVD-003B"],
    evidence: [
      "EVD-003A: 1978 Diazo Blueprint Sheet 07/12 showing 'Calibration Bay 00' and sealed bulkhead door.",
      "EVD-003B: 3D LiDAR point-cloud mesh displaying a 0.42-meter spatial parallax error and ultrasonic sounding log."
    ],
    timeline: [
      { date: "2026-09-09 16:10 UTC", event: "Blueprint discrepancy identified during historical municipal digitization." },
      { date: "2026-09-11 08:30 UTC", event: "Case ANV-ENV-003 opened; Senior Investigator ALPHA-03 assigned lead command." },
      { date: "2026-09-19 21:00 UTC", event: "ALPHA-03 and ALPHA-01 deploy ground-penetrating radar and LiDAR array in Corridor 2B." },
      { date: "2026-10-04 04:12 UTC", event: "Acoustic sensors detect a 60 Hz transformer hum originating from inside the unmapped void." }
    ],
    scientificAnalysis: {
      observations: "Ultrasonic pulse-echo confirms a 40cm reinforced shear wall poured over an older steel pressure bulkhead.",
      hypotheses: "Chamber was intentionally entombed in 1983 to isolate an active geomagnetic damping coil.",
      verificationResults: "Thermal imaging confirms a steady +2.8°C heat signature behind Column D4.",
      unresolvedQuestions: "What power source has sustained the internal 60 Hz induction hum for forty-three years after grid disconnection?"
    },
    findingsAndResolution: {
      confirmedFindings: [
        "Physical cavity 'Calibration Bay 00' exists between Columns D4 and D5.",
        "Internal barometric cycle is independent of surface weather patterns."
      ],
      unverifiedHypotheses: [
        "Architectural threshold matches the doorway geometry seen in Case ANV-ENT-002."
      ],
      resolutionStatus: "OPEN FIELD INVESTIGATION — CORE DRILLING PROHIBITED",
      remainingQuestions: [
        "Identity of the engineering unit that authorized the 1983 concrete entombment."
      ],
      followUpActions: [
        "Maintain non-invasive seismic and magnetometric telemetry along Corridor 2B.",
        "Review Solution Code ANV-SOL-003 for LiDAR structural overlay."
      ]
    },
    authorisation: {
      preparedBy: "ALPHA-03 // Senior Investigator (DIV-01)",
      reviewedBy: "ALPHA-02 // Evidence Analyst (DIV-02)",
      verifiedBy: "DIVISION DIRECTOR // FIELD INVESTIGATION",
      authorisedBy: "DIRECTORATE COMMAND // NODE IND-01",
      sigDate: "2026-10-12"
    },
    resolution: "OPEN FIELD INVESTIGATION: Non-invasive structural monitoring in progress. Physical breach is prohibited under Containment Protocol 04 until spatial stability is verified. See Solution Code ANV-SOL-003 for LiDAR phase overlay.",
    relatedCases: ["ANV-ENT-002", "ANV-SUP-004"],
    youtubeTitle: "ANVESH Dispatch #03 — Floor Plan Revision 02 (Fictional Investigation)",
    youtubeUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse+The+Unlisted+Room"
  },
  {
    id: "ANV-SUP-004",
    isPrivate: true,
    legacyKey: "resonance",
    codeClass: "SUP",
    className: "SUP — Supernatural Phenomenon",
    title: "THE MONOLITH ECHO",
    priority: "ELEVATED",
    status: "CONTAINED",
    division: "DIV-03 // Anomaly Containment",
    operative: "ALPHA-03 (ANV-AGT-003)",
    leadAgentId: "ALPHA-03",
    supportingAgentIds: ["ALPHA-01"],
    realityId: "REALITY-IND-01",
    location: "Basalt Ridge Station // Sector West",
    dateDiscovered: "2026-09-20",
    dateLogged: "2026-09-22",
    dateIssued: "2026-10-15",
    docRef: "DOC-ANV-2026-004-R1",
    revision: "REV 01.0 [DEMO RECORD]",
    docClassification: "LEVEL 02 — CONTAINED PHENOMENON",
    solutionCode: "ANV-SOL-001",
    thumbType: "svg-sup",
    thumbLabel: "RESONANCE 432.09 Hz // ACOUSTIC LATTICE",
    shortDesc: "An uncarved basalt pillar emits harmonic choral overtones four minutes before local geomagnetic disturbances.",
    summary: "A vitrified basalt formation discovered inside an abandoned meteorological shaft produces multi-harmonic standing waves resembling human vocal formants whenever ambient barometric pressure drops below 988 hPa. Physical core samples confirm homogeneous igneous rock with no cavities or mechanical transducers.",
    incidentDescription: "Following automated seismic alerts at Basalt Ridge Station, Senior Investigator ALPHA-03 inspected Shaft #03. Despite zero mechanical vibration above 0.2 nanometers on laser vibrometry, the surrounding air column resonates at 432.09 Hz with formant peaks preceding geomagnetic K-index spikes by exactly 240 seconds.",
    evidenceIds: ["EVD-004A"],
    evidence: [
      "EVD-004A: Vitrified basalt core sample #BR-09 and tri-axial magnetometer correlation log."
    ],
    timeline: [
      { date: "2026-09-22 19:00 UTC", event: "Phenomenon reported by automated weather relay station." },
      { date: "2026-10-01 12:30 UTC", event: "Acoustic dampening perimeter erected by Anomaly Containment (DIV-03)." }
    ],
    scientificAnalysis: {
      observations: "Acoustic pressure wave originates 3mm outside the rock boundary layer via magneto-acoustic coupling.",
      hypotheses: "Piezo-magnetic lattice excitation triggered by telluric currents.",
      verificationResults: "Core sample #BR-09 verified as solid columnar basalt with trace magnetite inclusions.",
      unresolvedQuestions: "Why the acoustic envelope mirrors structured vocal formant ratios."
    },
    findingsAndResolution: {
      confirmedFindings: ["Phenomenon is strictly localized within a 5-meter radius of the basalt column."],
      unverifiedHypotheses: ["Potential telluric link to Sub-Level 02 induction coil (Case ANV-ENV-003)."],
      resolutionStatus: "CONTAINED UNDER GEODESIC DOME",
      remainingQuestions: ["Long-term stability during solar maximum events."],
      followUpActions: ["Continue automated telemetry logging to Node IND-01."]
    },
    authorisation: {
      preparedBy: "ALPHA-03 // Senior Investigator (DIV-01)",
      reviewedBy: "ALPHA-02 // Evidence Analyst (DIV-02)",
      verifiedBy: "ALPHA-03 // Senior Investigator",
      authorisedBy: "DIRECTORATE COMMAND // NODE IND-01",
      sigDate: "2026-10-15"
    },
    resolution: "CONTAINED: Site enclosed within a Faraday-acoustic geodesic dome. Continuous telemetry routed to Node IND-01.",
    relatedCases: ["ANV-ENV-003", "ANV-TMP-005"],
    youtubeTitle: "ANVESH Archive — Basalt Ridge Standing Wave Log",
    youtubeUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse+Anomaly+Archive"
  },
  {
    id: "ANV-TMP-005",
    isPrivate: true,
    legacyKey: "chronos",
    codeClass: "TMP",
    className: "TMP — Temporal Anomaly",
    title: "THE FORTY-EIGHT SECOND DRIFT",
    priority: "CRITICAL",
    status: "OPEN INVESTIGATION",
    division: "DIV-06 // Multiverse & Temporal Studies",
    operative: "ALPHA-04 (ANV-AGT-004)",
    leadAgentId: "ALPHA-04",
    supportingAgentIds: ["ALPHA-02"],
    realityId: "REALITY-ARC-04",
    location: "Orbital Relay Sync // Node ARC-04",
    dateDiscovered: "2026-10-05",
    dateLogged: "2026-10-05",
    dateIssued: "2026-10-21",
    docRef: "DOC-ANV-2026-005-R2",
    revision: "REV 02.0",
    docClassification: "LEVEL 04 — TEMPORAL METRIC SHEAR",
    solutionCode: "ANV-SOL-002",
    thumbType: "svg-tmp",
    thumbLabel: "DELTA-T +48.004s // CESIUM DESYNC",
    shortDesc: "Paired cesium atomic clocks separated by twelve meters experience a recurring 48-second chronological divergence.",
    summary: "During a routine synchronization test between Vault C1 and Vault C2, dual optical-lattice atomic clocks registered an instantaneous +48.004-second offset while security video from the connecting hallway recorded uninterrupted real-time passage. Items placed inside the drift zone exhibit isotopic decay consistent with 48 additional seconds of elapsed time per cycle.",
    incidentDescription: "At Temporal Observation Node ARC-04, Communications Specialist ALPHA-04 documented a step-function phase discontinuity between paired Cesium-133 optical clocks separated by a 12-meter concrete corridor. Radiometric tracer verification by Analyst ALPHA-02 confirmed that physical matter inside Vault C2 experienced 48.004 seconds of additional proper time without any observable discontinuity on external hallway CCTV feeds.",
    evidenceIds: ["EVD-005A", "EVD-005C"],
    evidence: [
      "EVD-005A: Dual cesium-133 phase comparison logs showing step-function discontinuity at 02:41:00 UTC.",
      "EVD-005C: Optical-lattice hallway CCTV synchronization video feed ('ARC04_SYNC_CAM2.mp4')."
    ],
    timeline: [
      { date: "2026-10-05 02:41 UTC", event: "First chronological step-offset (+48.004s) recorded at Node ARC-04." },
      { date: "2026-10-18 15:00 UTC", event: "Multiverse Studies (DIV-06) establishes laser interferometry bridge across Vault C1." }
    ],
    scientificAnalysis: {
      observations: "Laser interferometry across the boundary detects a transient refractive phase slip every 19 hours.",
      hypotheses: "Localized Minkowski metric shear coupled to adjacent timeline branch REALITY-IND-02.",
      verificationResults: "Isotopic decay verification confirmed genuine proper-time advancement inside Vault C2.",
      unresolvedQuestions: "Why the 19-hour recurrence interval matches the barometric cycle in Case ANV-ENV-003."
    },
    findingsAndResolution: {
      confirmedFindings: ["Proper-time offset of +48.004s is physically real and repeatable."],
      unverifiedHypotheses: ["Metric shear may act as the carrier conduit for Dispatch 00-ALPHA."],
      resolutionStatus: "OPEN INVESTIGATION — NODE ARC-04 QUARANTINED",
      remainingQuestions: ["Whether cumulative drift will widen the temporal aperture."],
      followUpActions: ["Monitor optical-lattice phase lock continuously across REALITY-ARC-04."]
    },
    authorisation: {
      preparedBy: "ALPHA-04 // Communications Specialist (DIV-04)",
      reviewedBy: "ALPHA-02 // Evidence Analyst (DIV-02)",
      verifiedBy: "ALPHA-04 // Communications Specialist",
      authorisedBy: "DIRECTORATE COMMAND // NODE IND-01",
      sigDate: "2026-10-21"
    },
    resolution: "OPEN INVESTIGATION: Interferometry confirms localized metric shear without gravitational gradient.",
    relatedCases: ["ANV-DIG-001", "ANV-CLS-006"],
    youtubeTitle: "ANVESH Multiverse — Cesium Drift Incident Report",
    youtubeUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse+Temporal+Anomaly"
  },
  {
    id: "ANV-CLS-006",
    isPrivate: true,
    legacyKey: "mirror",
    codeClass: "CLS",
    className: "CLS — Classified Incident",
    title: "PROJECT GLASS HORIZON",
    priority: "CRITICAL",
    status: "RESOLVED",
    division: "DIV-05 // Archive & Records",
    operative: "OPERATIVE ALPHA-04",
    leadAgentId: "ALPHA-04",
    supportingAgentIds: ["ALPHA-00", "ALPHA-02"],
    realityId: "REALITY-IND-02",
    location: "Redacted // Dark Fiber Trunk 09",
    dateDiscovered: "2026-10-19",
    dateLogged: "2026-10-19",
    dateIssued: "2026-10-26",
    docRef: "DOC-ANV-2026-006-R1",
    revision: "REV 01.8",
    docClassification: "LEVEL 04 — DECLASSIFIED MULTIVERSE HANDSHAKE",
    solutionCode: "ANV-SOL-003",
    thumbType: "svg-cls",
    thumbLabel: "CLEARANCE LEVEL 04 // DECLASSIFIED SUMMARY",
    shortDesc: "An optical relay array captured telemetry from an alternate Directorate archive operating under designation IND-02.",
    summary: "Following a high-energy atmospheric discharge over the northern telemetry array, fiber-optic trunk lines received a 90-second packet burst formatted in valid ANVESH Directorate cryptographic headers—signed with a root certificate dated eleven years prior to the Directorate's founding.",
    incidentDescription: "At 23:11 UTC on 2026-10-19, Dark Fiber Trunk 09 registered an unscheduled optical carrier pulse. Communications Specialist ALPHA-04 captured the 90-second frame burst and verified that its packet headers used authentic ANVESH Directorate formatting originating from a parallel archive designated REALITY-IND-02 ('Parallel Archive').",
    evidenceIds: ["EVD-006A"],
    evidence: [
      "EVD-006A: Cryptographic packet capture signed by 'ANVESH-DIRECTORATE-NODE-IND-02' listing 14 future case IDs."
    ],
    timeline: [
      { date: "2026-10-19 23:11 UTC", event: "Packet burst intercepted on Dark Fiber Trunk 09 by ALPHA-04." },
      { date: "2026-10-25 09:30 UTC", event: "Header structure confirmed; file cataloged under CLS protocol and linked to REALITY-IND-02." }
    ],
    scientificAnalysis: {
      observations: "Optical dispersion profile indicates light pulse traversed an额外 14.2km of non-terrestrial waveguide.",
      hypotheses: "Quantum evanescent coupling between parallel fiber-optic installations across REALITY-IND-01 and REALITY-IND-02.",
      verificationResults: "Packet structure validated by DIV-04 and DIV-05 archival schema comparison.",
      unresolvedQuestions: "Why the parallel root certificate predates Baseline Node IND-01 by eleven years."
    },
    findingsAndResolution: {
      confirmedFindings: ["Existence of Parallel Archive REALITY-IND-02 confirmed via telemetry handshake."],
      unverifiedHypotheses: ["ALPHA-00 may maintain active terminal access across both nodes."],
      resolutionStatus: "RESOLVED & ARCHIVED IN MULTIVERSE INDEX",
      remainingQuestions: ["Contents of the 14 unindexed case headers referenced in packet payload."],
      followUpActions: ["Cross-monitor Trunk 09 for secondary bursts from REALITY-IND-02."]
    },
    authorisation: {
      preparedBy: "ALPHA-04 // Communications Specialist (DIV-04)",
      reviewedBy: "ALPHA-02 // Evidence Analyst (DIV-02)",
      verifiedBy: "DIVISION DIRECTOR // ARCHIVE & RECORDS (DIV-05)",
      authorisedBy: "DIRECTORATE COUNCIL // LEVEL 04",
      sigDate: "2026-10-26"
    },
    resolution: "RESOLVED & ARCHIVED: Confirmed as first verified cross-reality handshake between Baseline Node IND-01 and Parallel Node IND-02.",
    relatedCases: ["ANV-TMP-005", "ANV-DIG-001"],
    youtubeTitle: "ANVESH Multiverse — Project Glass Horizon Briefing",
    youtubeUrl: "https://www.youtube.com/results?search_query=ANVESH+Directorate+Archive"
  },
  {
    id: "ANV-CLS-000",
    isPrivate: true,
    legacyKey: "alpha00",
    codeClass: "CLS",
    className: "CLS — Classified Incident",
    title: "PROTOCOL ALPHA-00: THE FIRST BREACH",
    priority: "CRITICAL",
    status: "RESTRICTED",
    division: "DIV-06 // Multiverse Studies — OMEGA DESK",
    operative: "FOUNDER // ALPHA-00",
    leadAgentId: "ALPHA-00",
    supportingAgentIds: ["ALPHA-01", "ALPHA-02", "ALPHA-03", "ALPHA-04"],
    realityId: "REALITY-OMG-00",
    location: "Origin Coordinate 00°00' N, 00°00' E",
    dateDiscovered: "SEALED // ORIGIN",
    dateLogged: "SEALED // ORIGIN RECORD",
    dateIssued: "ORIGIN-DAY-14",
    docRef: "DOC-OMG-0000-ALPHA",
    revision: "REV 00.0 // OMEGA",
    docClassification: "OMEGA CLEARANCE — FOUNDING CHARTER DOSSIER",
    solutionCode: "ALPHA-00",
    thumbType: "svg-alpha",
    thumbLabel: "OMEGA CLEARANCE // ORIGIN DOSSIER",
    shortDesc: "The foundational anomaly that led to the establishment of the ANVESH Directorate across connected timelines.",
    summary: "DECLASSIFIED EASTER EGG RECORD: Before Case 001 was ever cataloged, an unindexed broadcast designated '00-ALPHA' was simultaneously received across seven independent research stations. The message contained the architectural schematics for the ANVESH Archive itself—along with a warning: 'Every anomaly leaves evidence. Document the pattern before the timelines converge.'",
    incidentDescription: "Prior to the formal establishment of Node IND-01, seven isolated radio-astronomy and metrological stations recorded an identical 09.71 MHz transmission designated Dispatch 00-ALPHA. The broadcast was authored under the restricted designation ALPHA-00 (true identity unrevealed) and provided the operational charter, classification taxonomy, and containment protocols now used by the ANVESH Directorate.",
    evidenceIds: ["EVD-000A"],
    evidence: [
      "EVD-000A: The Origin Magnetic Reel ('REEL-00-ALPHA') containing the voice print 'The investigation has already begun.'"
    ],
    timeline: [
      { date: "ORIGIN DAY 00", event: "Simultaneous reception of Dispatch 00-ALPHA across 7 monitoring stations." },
      { date: "ORIGIN DAY 14", event: "Charter of the ANVESH Directorate signed; Node IND-01 established." }
    ],
    scientificAnalysis: {
      observations: "Signal exhibits zero atmospheric attenuation across all seven receiving stations simultaneously.",
      hypotheses: "Non-linear bootstrap transmission originating from Convergence Nexus REALITY-OMG-00.",
      verificationResults: "Voice print and architectural schematics verified by Founding Desk.",
      unresolvedQuestions: "True identity and timeline origin of Operative ALPHA-00."
    },
    findingsAndResolution: {
      confirmedFindings: ["Dispatch 00-ALPHA directly initiated the creation of the ANVESH Archive."],
      unverifiedHypotheses: ["All subsequent anomalies (Cases 001–006) form a single convergence sequence."],
      resolutionStatus: "PERMANENT OMEGA DIRECTIVE — ARCHIVE ACTIVE",
      remainingQuestions: ["Date of the predicted Multiverse Convergence Event."],
      followUpActions: ["Recruit external observers and verify all incoming Solution Codes."]
    },
    authorisation: {
      preparedBy: "ALPHA-00 // OMEGA DIRECTIVE [IDENTITY REDACTED]",
      reviewedBy: "ALPHA-02 // Evidence Analyst (DIV-02)",
      verifiedBy: "ALPHA-04 // Communications Specialist (DIV-04)",
      authorisedBy: "FOUNDING COUNCIL // OMEGA SEAL",
      sigDate: "SEALED // ORIGIN"
    },
    resolution: "PERMANENT DIRECTIVE: Record unlocked via ALPHA-00 clearance sequence. The archive remains open to all investigators.",
    relatedCases: ["ANV-DIG-001", "ANV-CLS-006"],
    youtubeTitle: "ANVESH Multiverse — Origin Transmission 00-ALPHA",
    youtubeUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse"
  }
];

// 2. CENTRAL AGENT REGISTRY DATABASE (Preserving established lore strictly)
const AGENT_DATABASE = [
  {
    codename: "ALPHA-01",
    agentId: "AGT-IND-001",
    genderPresentation: "Male",
    division: "DIV-01 // Investigation Division",
    divisionCode: "DIV-01",
    designation: "Primary Field Operative",
    rank: "GRADE-IV // SENIOR OPERATIVE",
    clearance: "LEVEL 04",
    currentAssignment: "Node IND-01 Field Reconnaissance & Recorder Custody",
    status: "ACTIVE",
    specialisation: "Field Investigation, First-Response Containment & Physical Evidence Collection",
    bio: "Primary field operative of the ANVESH Directorate at Node IND-01. ALPHA-01 leads on-site anomaly reconnaissance, physical evidence recovery under strict chain-of-custody protocols, and deployment of portable spectrum and LiDAR instrumentation.",
    caseIds: ["ANV-DIG-001", "ANV-ENV-003", "ANV-SUP-004", "ANV-CLS-000"],
    evidenceIds: ["EVD-001A", "EVD-001B", "EVD-003B"],
    realityIds: ["REALITY-IND-01"],
    affiliations: "ANVESH Investigation Division (DIV-01) // Node IND-01 Rapid Response Unit",
    profileClass: "CANONICAL RECORD",
    avatarHue: "#22d3ee"
  },
  {
    codename: "ALPHA-02",
    agentId: "AGT-IND-002",
    genderPresentation: "Female",
    division: "DIV-02 // Research & Analysis",
    divisionCode: "DIV-02",
    designation: "Principal Evidence & Cognitive Analyst",
    rank: "GRADE-IV // PRINCIPAL ANALYST",
    clearance: "LEVEL 04",
    currentAssignment: "Sub-Archive Vault B4 Optical & Forensic Verification",
    status: "ACTIVE",
    specialisation: "Research & Cognitive Analysis, Double-Blind Verification & Optical Forensics",
    bio: "Lead evidence analyst overseeing laboratory falsification testing in Research & Analysis (DIV-02). ALPHA-02 designed the double-blind viewing protocol for Case ANV-ENT-002 (The Empty Frame) and verifies physical and radiometric authenticity across all Directorate dossiers.",
    caseIds: ["ANV-ENT-002", "ANV-DIG-001", "ANV-ENV-003", "ANV-TMP-005", "ANV-CLS-006"],
    evidenceIds: ["EVD-002A", "EVD-002B", "EVD-005A"],
    realityIds: ["REALITY-IND-01", "REALITY-ARC-04"],
    affiliations: "ANVESH Research & Analysis (DIV-02) // Forensic Verification Board",
    profileClass: "CANONICAL RECORD",
    avatarHue: "#a855f7"
  },
  {
    codename: "ALPHA-03",
    agentId: "AGT-IND-003",
    genderPresentation: "Male",
    division: "DIV-01 // Investigation Division",
    divisionCode: "DIV-01",
    designation: "Senior Structural & Environmental Investigator",
    rank: "GRADE-V // LEAD COMMANDER",
    clearance: "LEVEL 04",
    currentAssignment: "Civil Annex Sub-Level 02 Structural Watch (Corridor 2B)",
    status: "ACTIVE",
    specialisation: "Field Investigation, Architectural LiDAR Surveying & Environmental Anomaly Analysis",
    bio: "Veteran senior investigator specializing in spatial discrepancies, subterranean facilities, and environmental anomalies. ALPHA-03 commands the non-invasive structural survey of Calibration Bay 00 (Case ANV-ENV-003) and Basalt Ridge Station (Case ANV-SUP-004).",
    caseIds: ["ANV-ENV-003", "ANV-SUP-004", "ANV-ENT-002"],
    evidenceIds: ["EVD-003A", "EVD-003B", "EVD-004A"],
    realityIds: ["REALITY-IND-01"],
    affiliations: "ANVESH Investigation Division (DIV-01) // Anomaly Containment Liaison",
    profileClass: "CANONICAL RECORD",
    avatarHue: "#38bdf8"
  },
  {
    codename: "ALPHA-04",
    agentId: "AGT-IND-004",
    genderPresentation: "Female",
    division: "DIV-04 // Communications",
    divisionCode: "DIV-04",
    designation: "Lead Communications & SIGINT Specialist",
    rank: "GRADE-IV // SENIOR SPECIALIST",
    clearance: "LEVEL 04",
    currentAssignment: "09.71 MHz Carrier Watch & Dark Fiber Trunk 09 Relay",
    status: "ACTIVE",
    specialisation: "Signal Analysis, Sub-Carrier Decryption & Cross-Timeline Transmissions",
    bio: "Chief communications and signal intelligence specialist in DIV-04. ALPHA-04 isolated the Baudot sub-carrier in Case ANV-DIG-001, logged the +48.004s atomic clock drift telemetry at Node ARC-04, and intercepted the parallel Directorate packet burst in Project Glass Horizon.",
    caseIds: ["ANV-DIG-001", "ANV-CLS-006", "ANV-TMP-005", "ANV-CLS-000"],
    evidenceIds: ["EVD-001C", "EVD-006A", "EVD-005C"],
    realityIds: ["REALITY-IND-01", "REALITY-IND-02", "REALITY-ARC-04"],
    affiliations: "ANVESH Communications Division (DIV-04) // Deep-Spectrum Listening Post",
    profileClass: "CANONICAL RECORD",
    avatarHue: "#34d399"
  },
  {
    codename: "ALPHA-00",
    agentId: "AGT-OMG-000",
    genderPresentation: "Restricted / Unknown",
    division: "DIV-06 // Multiverse Studies",
    divisionCode: "DIV-06",
    designation: "Restricted Identity // Founding Directive",
    rank: "OMEGA // FOUNDER",
    clearance: "OMEGA",
    currentAssignment: "Non-Linear Convergence Oversight (Origin Vector 00-ALPHA)",
    status: "RESTRICTED",
    specialisation: "Multiverse Topology, Bootstrap Transmissions & Founding Charter Architecture",
    bio: "CLASSIFIED PERSONNEL RECORD: Real identity, biographical history, and baseline timeline origin of ALPHA-00 remain strictly sealed under OMEGA protocol. Connected directly to the founding mystery of the ANVESH Directorate and the initial 00-ALPHA broadcast ('The investigation has already begun').",
    caseIds: ["ANV-CLS-000", "ANV-CLS-006"],
    evidenceIds: ["EVD-000A"],
    realityIds: ["REALITY-OMG-00", "REALITY-IND-01", "REALITY-IND-02"],
    affiliations: "OMEGA Desk // Founding Council of the ANVESH Directorate",
    profileClass: "RESTRICTED CANONICAL RECORD",
    avatarHue: "#e62e3a"
  }
];

// 3. CENTRAL MULTIVERSE INDEX DATABASE (Fictional Story-World Realities & Timelines)
const REALITY_DATABASE = [
  {
    id: "REALITY-IND-01",
    designation: "BASELINE REALITY",
    name: "Primary Terrestrial Horizon (Node IND-01)",
    type: "Baseline Reference Timeline",
    timelineClass: "CLASS-A // PRIMARY ANCHOR",
    status: "PRIMARY REFERENCE",
    discoveryDate: "ESTABLISHED // ORIGIN DAY 14",
    originCaseId: "ANV-DIG-001",
    associatedAnomaly: "09.71 MHz Carrier Imprint & Sub-Level 02 Spatial Parallax",
    caseIds: ["ANV-DIG-001", "ANV-ENT-002", "ANV-ENV-003", "ANV-SUP-004"],
    agentIds: ["ALPHA-01", "ALPHA-02", "ALPHA-03", "ALPHA-04"],
    relatedRealityIds: ["REALITY-IND-02", "REALITY-ARC-04", "REALITY-OMG-00"],
    accessClass: "TIER-01 PUBLIC ARCHIVE",
    observations: "Standard physical constants verified. Houses Primary Listening Post Node IND-01 (28°36' N, 77°12' E), Sub-Archive Vault B4, and Civil Annex Building 14. Serves as the reference clock against which all temporal and dimensional deviations are measured.",
    description: "FICTIONAL DEMONSTRATION RECORD: The primary narrative reality of the ANVESH Multiverse storyline where the Directorate's central public terminal operates.",
    mapX: 210,
    mapY: 180,
    nodeColor: "#22d3ee"
  },
  {
    id: "REALITY-IND-02",
    designation: "PARALLEL ARCHIVE",
    name: "Mirror Directorate Sector (Node IND-02)",
    type: "Divergent Parallel Branch (-11 Year Founding Offset)",
    timelineClass: "CLASS-B // PARALLEL BRANCH",
    status: "INTERMITTENT SIGNAL",
    discoveryDate: "2026-10-19 (23:11 UTC)",
    originCaseId: "ANV-CLS-006",
    associatedAnomaly: "PROJECT GLASS HORIZON — Dark Fiber Trunk 09 Packet Burst",
    caseIds: ["ANV-CLS-006", "ANV-DIG-001"],
    agentIds: ["ALPHA-04", "ALPHA-00", "ALPHA-02"],
    relatedRealityIds: ["REALITY-IND-01", "REALITY-OMG-00"],
    accessClass: "LEVEL 04 — DECLASSIFIED SUMMARY",
    observations: "Cryptographic root certificates intercepted from REALITY-IND-02 indicate its version of the ANVESH Directorate was chartered eleven years earlier than Baseline Node IND-01 and has already cataloged 14 future incidents.",
    description: "FICTIONAL DEMONSTRATION RECORD: A parallel reality housing an alternate counterpart of the ANVESH Archive that communicates intermittently via optical waveguide bleed.",
    mapX: 520,
    mapY: 95,
    nodeColor: "#a855f7"
  },
  {
    id: "REALITY-ARC-04",
    designation: "TEMPORAL OBSERVATION NODE",
    name: "Chronos Drift Pocket (Vault C1 / Vault C2)",
    type: "Localized Chronological Shear (+48.004s Proper-Time Pocket)",
    timelineClass: "CLASS-T // TEMPORAL MICRO-BRANCH",
    status: "UNDER INVESTIGATION",
    discoveryDate: "2026-10-05 (02:41 UTC)",
    originCaseId: "ANV-TMP-005",
    associatedAnomaly: "THE FORTY-EIGHT SECOND DRIFT — Cesium-133 Desynchronization",
    caseIds: ["ANV-TMP-005", "ANV-SUP-004"],
    agentIds: ["ALPHA-04", "ALPHA-02"],
    relatedRealityIds: ["REALITY-IND-01", "REALITY-IND-02"],
    accessClass: "LEVEL 03 — RESTRICTED TELEMETRY",
    observations: "Matter inside Vault C2 advances 48.004 seconds ahead of Baseline Reality every 19 hours while remaining optically continuous with the connecting corridor.",
    description: "FICTIONAL DEMONSTRATION RECORD: A localized temporal anomaly zone monitored by DIV-06 where proper time diverges measurably from Baseline Reality.",
    mapX: 520,
    mapY: 265,
    nodeColor: "#38bdf8"
  },
  {
    id: "REALITY-OMG-00",
    designation: "ORIGIN CONVERGENCE NEXUS [DEMO]",
    name: "Zero-Point Broadcast Corridor (00-ALPHA)",
    type: "Non-Linear Bootstrap Manifold",
    timelineClass: "CLASS-OMEGA // ORIGIN VECTOR",
    status: "RESTRICTED MONITOR",
    discoveryDate: "ORIGIN DAY 00 (SEALED)",
    originCaseId: "ANV-CLS-000",
    associatedAnomaly: "PROTOCOL ALPHA-00: THE FIRST BREACH",
    caseIds: ["ANV-CLS-000", "ANV-CLS-006"],
    agentIds: ["ALPHA-00", "ALPHA-04"],
    relatedRealityIds: ["REALITY-IND-01", "REALITY-IND-02", "REALITY-ARC-04"],
    accessClass: "OMEGA CLEARANCE",
    observations: "Acts as a phase-locked broadcast bridge connecting all known nodes at 09.71 MHz.",
    description: "FICTIONAL DEMONSTRATION RECORD: The unmapped origin point of Dispatch 00-ALPHA and Operative ALPHA-00.",
    mapX: 810,
    mapY: 180,
    nodeColor: "#e62e3a"
  }
];

// 4. CENTRAL EVIDENCE ROOM DATABASE (All 8 Required Categories)
const EVIDENCE_DATABASE = [
  {
    id: "EVD-164A",
    isPrivate: false,
    caseId: "AV-164",
    category: "DIGITAL FORENSICS",
    title: '03:14 AM Lock-Screen Push Capture ("Hi!")',
    description: 'Reconstructed mobile lock-screen artifact showing an unsolicited single-word "Hi!" notification from ChatGPT at 03:14 AM with zero outbound user prompt.',
    dateRecovered: "2026-11-18",
    verificationStatus: "FICTIONAL VERIFIED",
    agentId: "ALPHA-01",
    fileType: "MOBILE NOTIFICATION LOG",
    previewType: "transmission",
    attachmentRef: "ATT-164A-NOTIF"
  },
  {
    id: "EVD-164B",
    isPrivate: false,
    caseId: "AV-164",
    category: "DOCUMENTS",
    title: "Admin Terminal Record: AV-164_SUSPECT_TOM.case",
    description: "Case file opened on ANVESH_OS v4.2 Admin Terminal logging Suspect ID 164 (Name: Tom, Age: 16, Status: ACTIVE) after breaking Rules 1 through 3.",
    dateRecovered: "2026-11-19",
    verificationStatus: "FICTIONAL VERIFIED",
    agentId: "ALPHA-01",
    fileType: "CASE DOSSIER / TERMINAL LOG",
    previewType: "transmission",
    attachmentRef: "ATT-164B-TOM"
  },
  {
    id: "EVD-164C",
    isPrivate: false,
    caseId: "AV-164",
    category: "TRANSMISSION LOGS",
    title: "Intercepted Directorate Override (ANV-CEO-001)",
    description: "Unscheduled red-channel official statement broadcast immediately after signal key AV-164-MV-GPT surfaced during Rule 7.",
    dateRecovered: "2026-11-22",
    verificationStatus: "FLAGGED",
    agentId: "ALPHA-00",
    fileType: "OVERRIDE TRANSCRIPT",
    previewType: "transmission",
    attachmentRef: "ATT-164C-OVERRIDE"
  },
  {
    id: "EVD-001A",
    isPrivate: true,
    caseId: "ANV-DIG-001",
    title: "Uncompressed 09.71 MHz Audio Fragment ('SIG_0971_RAW.wav')",
    category: "AUDIO RECORDINGS",
    description: "17-second 96kHz/24-bit PCM audio capture recovered from sealed field recorder Unit SR-09. Final 3.4 seconds contain recursive harmonic carrier.",
    collectionDate: "2026-08-17",
    source: "Faraday Locker B2 // Node IND-01",
    verificationStatus: "FICTIONAL VERIFIED — LAB CONFIRMED",
    classification: "LEVEL 03 — RESTRICTED",
    agentId: "ALPHA-01",
    fileType: "AUDIO / WAV (96kHz PCM)",
    previewType: "audio",
    attachmentRef: "ATT-001A-WAV"
  },
  {
    id: "EVD-001B",
    isPrivate: true,
    caseId: "ANV-DIG-001",
    title: "Field Recorder SR-09 EEPROM Hex & Power Bus Dump",
    category: "DIGITAL FORENSICS",
    description: "Non-volatile memory dump proving physical microphone preamplifiers and write-heads received 0.00V during the 03:17 UTC write event.",
    collectionDate: "2026-08-18",
    source: "DIV-02 Hardware Forensics Bench",
    verificationStatus: "FICTIONAL VERIFIED — LAB CONFIRMED",
    classification: "LEVEL 03 — RESTRICTED",
    agentId: "ALPHA-02",
    fileType: "HEX DUMP / BIN",
    previewType: "forensics",
    attachmentRef: "ATT-001B-HEX"
  },
  {
    id: "EVD-001C",
    isPrivate: true,
    caseId: "ANV-DIG-001",
    title: "1,420 Hz Baudot Sub-Carrier Spectrogram Analysis",
    category: "SCIENTIFIC READINGS",
    description: "High-resolution FFT spectrogram isolating the narrowband sideband spelling 'VERIFY THE SECOND LISTEN' in Baudot code.",
    collectionDate: "2026-08-19",
    source: "DIV-04 Spectrum Analyzer SA-04",
    verificationStatus: "FICTIONAL VERIFIED — LAB CONFIRMED",
    classification: "LEVEL 03 — RESTRICTED",
    agentId: "ALPHA-04",
    fileType: "SPECTROGRAM / IMG",
    previewType: "image-dig",
    attachmentRef: "ATT-001C-SPEC"
  },
  {
    id: "EVD-002A",
    isPrivate: true,
    caseId: "ANV-ENT-002",
    title: "1994 Silver-Gelatin Contact Prints (Alpha, Beta, Gamma)",
    category: "PHOTOGRAPHIC EVIDENCE",
    description: "Three physical 8x10 contact prints struck from missing Negative Strip #94-004. Exhibits binocular volume-phase holographic parallax under cyan illumination.",
    collectionDate: "2026-08-29",
    source: "Municipal Survey Archive Canister #94",
    verificationStatus: "FICTIONAL VERIFIED — OPTICAL ANOMALY",
    classification: "LEVEL 03 — COGNITIVE",
    agentId: "ALPHA-02",
    fileType: "OPTICAL SCAN / SILVER HALIDE",
    previewType: "image-mem",
    attachmentRef: "ATT-002A-IMG"
  },
  {
    id: "EVD-002B",
    isPrivate: true,
    caseId: "ANV-ENT-002",
    title: "Double-Blind Witness Transcripts & UV Refractive Log",
    category: "DOCUMENTS",
    description: "Redacted transcripts from 12 Directorate analysts describing mutually exclusive postures of the silhouette behind the glass frame.",
    collectionDate: "2026-09-08",
    source: "Sub-Archive Vault B4 Viewing Room",
    verificationStatus: "FICTIONAL VERIFIED — ARCHIVED",
    classification: "LEVEL 03 — RESTRICTED",
    agentId: "ALPHA-02",
    fileType: "CLASSIFIED REPORT / DOC",
    previewType: "document",
    attachmentRef: "ATT-002B-DOC"
  },
  {
    id: "EVD-003A",
    isPrivate: true,
    caseId: "ANV-ENV-003",
    title: "1978 Diazo Blueprint Sheet 07/12 (Revision 02 — Calibration Bay 00)",
    category: "DOCUMENTS",
    description: "Original ammonia-developed architectural blueprint showing the unindexed 6.4m × 6.4m sealed chamber between Structural Columns D4 and D5.",
    collectionDate: "2026-09-11",
    source: "Civil Annex Building 14 Records Vault",
    verificationStatus: "FICTIONAL VERIFIED — AUTHENTICATED",
    classification: "LEVEL 03 — RESTRICTED",
    agentId: "ALPHA-03",
    fileType: "DIAZO BLUEPRINT / CAD",
    previewType: "document",
    attachmentRef: "ATT-003A-BP"
  },
  {
    id: "EVD-003B",
    isPrivate: true,
    caseId: "ANV-ENV-003",
    title: "Corridor 2B 3D LiDAR Point-Cloud & 60 Hz Acoustic Log",
    category: "PHOTOGRAPHIC EVIDENCE",
    description: "Laser LiDAR wireframe capture demonstrating a 0.42-meter spatial parallax offset along the sealed concrete bulkhead of Sub-Level 02.",
    collectionDate: "2026-09-19",
    source: "Field Team ALPHA-03 LiDAR Array",
    verificationStatus: "FICTIONAL VERIFIED — FIELD CONFIRMED",
    classification: "LEVEL 03 — RESTRICTED",
    agentId: "ALPHA-03",
    fileType: "LIDAR RENDER / IMG",
    previewType: "image-env",
    attachmentRef: "ATT-003B-LIDAR"
  },
  {
    id: "EVD-004A",
    isPrivate: true,
    caseId: "ANV-SUP-004",
    title: "Vitrified Basalt Core Sample #BR-09 & Magnetometer Log [DEMO]",
    category: "PHYSICAL OBJECT RECORDS",
    description: "DEMONSTRATION EVIDENCE RECORD: Solid 18cm igneous core extracted from Basalt Ridge Shaft #03 alongside -45 nT geomagnetic dip telemetry.",
    collectionDate: "2026-09-25",
    source: "Basalt Ridge Station // Sector West",
    verificationStatus: "FLAGGED — MAGNETO-ACOUSTIC RESONANCE",
    classification: "LEVEL 02 — CONTAINED",
    agentId: "ALPHA-03",
    fileType: "PHYSICAL ARTIFACT / CORE #BR-09",
    previewType: "physical",
    attachmentRef: "ATT-004A-OBJ"
  },
  {
    id: "EVD-005A",
    isPrivate: true,
    caseId: "ANV-TMP-005",
    title: "Dual Cesium-133 Atomic Clock Phase Discontinuity Readout",
    category: "SCIENTIFIC READINGS",
    description: "Optical-lattice frequency counter log recording the instantaneous +48.004-second step-offset in Vault C2.",
    collectionDate: "2026-10-05",
    source: "Temporal Node ARC-04 Metrology Rack",
    verificationStatus: "FICTIONAL VERIFIED — LAB CONFIRMED",
    classification: "LEVEL 04 — TEMPORAL",
    agentId: "ALPHA-04",
    fileType: "TELEMETRY CSV / GRAPH",
    previewType: "reading",
    attachmentRef: "ATT-005A-CESIUM"
  },
  {
    id: "EVD-005C",
    isPrivate: true,
    caseId: "ANV-TMP-005",
    title: "Vault C1/C2 Corridor Optical-Lattice Sync Feed [DEMO]",
    category: "VIDEO RECORDINGS",
    description: "DEMONSTRATION EVIDENCE RECORD: Time-stamped 60fps security camera capture showing continuous hallway movement during the +48.004s interior clock jump.",
    collectionDate: "2026-10-05",
    source: "Node ARC-04 CCTV Channel 02",
    verificationStatus: "FICTIONAL VERIFIED — TEMPORAL DESYNC",
    classification: "LEVEL 04 — TEMPORAL",
    agentId: "ALPHA-04",
    fileType: "VIDEO / MP4 TELEMETRY STREAM",
    previewType: "video",
    attachmentRef: "ATT-005C-VID"
  },
  {
    id: "EVD-006A",
    isPrivate: true,
    caseId: "ANV-CLS-006",
    title: "Node IND-02 Dark Fiber Trunk 09 Packet Capture",
    category: "TRANSMISSION LOGS",
    description: "90-second optical frame capture containing Directorate headers from Parallel Reality REALITY-IND-02 dated eleven years prior to Node IND-01.",
    collectionDate: "2026-10-19",
    source: "Dark Fiber Trunk 09 Optical Tap",
    verificationStatus: "FICTIONAL VERIFIED — CROSS-REALITY",
    classification: "LEVEL 04 — CLASSIFIED",
    agentId: "ALPHA-04",
    fileType: "PACKET CAPTURE / PCAP",
    previewType: "transmission",
    attachmentRef: "ATT-006A-PCAP"
  },
  {
    id: "EVD-000A",
    isPrivate: true,
    caseId: "ANV-CLS-000",
    title: "Origin Magnetic Reel 'REEL-00-ALPHA' (Dispatch 00-ALPHA)",
    category: "TRANSMISSION LOGS",
    description: "Quarter-inch archival magnetic tape recording the foundational broadcast 'The investigation has already begun.'",
    collectionDate: "2026-08-01",
    source: "Origin Listening Post // OMEGA Vault",
    verificationStatus: "UNVERIFIED ORIGIN — OMEGA SEALED",
    classification: "OMEGA CLEARANCE",
    agentId: "ALPHA-00",
    fileType: "MAGNETIC REEL / TRANSCRIPT",
    previewType: "transmission",
    attachmentRef: "ATT-000A-OMEGA"
  }
];

// 5. DEMONSTRATION SOLUTION CODES MAPPING
const SOLUTION_CODES = {
  "AV-165-G-SHERU": {
    code: "AV-165-G-SHERU",
    isPrivate: false,
    status: "VERIFIED — FILE AV-165 ARCHIVE & EASTER EGG UNLOCKED",
    linkedCaseId: "AV-165",
    caseTitle: "FILE AV-165 — IF SHERU BHAI EVER OFFERS YOU MONEY, DON'T TAKE IT!",
    channelNote: "ANVESH Directorate Official Case Key // Category G (General)",
    videoTitle: "If Sheru Bhai Ever Offers You Money, Don't Take It!",
    videoUrl: "https://youtu.be/BXdKz6VmglY",
    explanation: "You decoded Archive Key AV-165-G-SHERU! Contestant #42 (Rohan, Age 21) took the $5,000 early bribe and got stuck in 4-hour traffic while the disciplined survivor walked away with $50,000 by refusing the $100,000 Rule 7 trap.",
    resolution: "Directive Active: Never take the first $10,000 cash offer, never dox yourself on camera (Rule 6), and stand by for NEXT FILE: AV-166."
  },
  "AV-164-MV-GPT": {
    code: "AV-164-MV-GPT",
    isPrivate: false,
    status: "VERIFIED — FILE AV-164 OVERRIDE LOG UNLOCKED",
    linkedCaseId: "AV-164",
    caseTitle: 'FILE AV-164 — IF CHATGPT EVER SENDS "HI", DON\'T REPLY',
    channelNote: "ANVESH Directorate Official Case Key // File AV-164",
    videoTitle: 'If ChatGPT Ever Sends "Hi"… DON\'T REPLY (7 Rules to Survive)',
    videoUrl: "https://youtu.be/wKXK__x7PQg",
    explanation: 'You paused and decoded the Rule 7 signal key. File AV-164 confirms that Suspect 164 (Tom, Age 16) remains ACTIVE after replying to the 03:14 AM "Hi!" thread. The unscheduled ANV-CEO-001 Directorate Override was triggered automatically to seal the remaining transmission logs.',
    resolution: "Directive Active: Stay offline, do not reply, and monitor the archive for NEXT FILE: AV-165. Contact anveshdirectorate@proton.me for official inquiries."
  },
  "ANV-SOL-001": {
    isPrivate: true,
    code: "ANV-SOL-001",
    status: "VERIFIED — DECLASSIFIED EXPLANATION UNLOCKED",
    linkedCaseId: "ANV-DIG-001",
    caseTitle: "THE UNEXPECTED SIGNAL (ANV-DIG-001)",
    channelNote: "Fictional Demonstration Code — Ready for External Creator Integration",
    videoTitle: "Participating Channel Investigation #01 — Signal 09.71 MHz Analysis",
    videoUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse+ANV-SOL-001",
    explanation: "Phase-inversion analysis of the final 3.4 seconds of 'SIG_0971_RAW.wav' proves the audio was not recorded via the microphone capsule. Instead, electromagnetic induction from a localized 09.71 MHz standing wave wrote the waveform directly onto the flash buffer's floating-gate transistors.",
    resolution: "Authorized Conclusion: Anomaly confirmed as a non-acoustic electromagnetic imprint. Cross-reference with Case ANV-TMP-005 for temporal carrier correlation."
  },
  "ANV-SOL-002": {
    isPrivate: true,
    code: "ANV-SOL-002",
    status: "VERIFIED — DECLASSIFIED EXPLANATION UNLOCKED",
    linkedCaseId: "ANV-ENT-002",
    caseTitle: "THE EMPTY FRAME (ANV-ENT-002 / ANV-MEM-002)",
    channelNote: "Fictional Demonstration Code — Ready for External Creator Integration",
    videoTitle: "Participating Channel Investigation #02 — Silver Halide Refraction Test",
    videoUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse+ANV-SOL-002",
    explanation: "Multi-angle laser interferometry shows the three 1994 silver-gelatin prints act as volume phase holograms. When viewed by human binocular vision under 480nm–510nm ambient light, micro-crystalline silver filaments reconstruct a stereoscopic parallax silhouette that flat 2D digital scanners cannot resolve.",
    resolution: "Authorized Conclusion: Optical-holographic encoding verified. How a 1994 darkroom print achieved sub-wavelength Bragg grating precision remains under DIV-02 investigation."
  },
  "ANV-SOL-003": {
    isPrivate: true,
    code: "ANV-SOL-003",
    status: "VERIFIED — DECLASSIFIED EXPLANATION UNLOCKED",
    linkedCaseId: "ANV-ENV-003",
    caseTitle: "THE UNLISTED ROOM (ANV-ENV-003)",
    channelNote: "Fictional Demonstration Code — Ready for External Creator Integration",
    videoTitle: "Participating Channel Investigation #03 — Sub-Level 02 LiDAR Survey",
    videoUrl: "https://www.youtube.com/results?search_query=ANVESH+Multiverse+ANV-SOL-003",
    explanation: "By overlaying the 1978 Revision 02 blueprint with acoustic resonance data from Corridor 2B, Field Division ALPHA-03 discovered that 'Calibration Bay 00' was physically sealed behind a 40cm sacrificial concrete shear wall in 1983 to house an autonomous geomagnetic damper.",
    resolution: "Authorized Conclusion: Chamber existence verified. Acoustic hum originates from a self-exciting induction coil still drawing ground-telluric current."
  },
  "ALPHA-00": {
    isPrivate: true,
    code: "ALPHA-00",
    status: "OMEGA CLEARANCE GRANTED — ORIGIN RECORD UNSEALED",
    linkedCaseId: "ANV-CLS-000",
    caseTitle: "PROTOCOL ALPHA-00: THE FIRST BREACH (ANV-CLS-000)",
    channelNote: "Hidden Easter Egg Clearance Code",
    videoTitle: "ANVESH Directorate — Origin Dispatch 00-ALPHA",
    videoUrl: "https://www.youtube.com/results?search_query=ANVESH+Directorate+ALPHA-00",
    explanation: "You have unlocked the foundational file of the ANVESH Directorate. Dispatch 00-ALPHA is a self-referential bootstrap transmission sent across timelines to ensure the Archive is built before the convergence event.",
    resolution: "Origin Dossier ANV-CLS-000 has been added to your active Case Archive view."
  }
};

// Application State
let currentView = "home";
let currentDocCaseId = "AV-164";
let safeExitEnabled = false;
let alphaUnlocked = false;
let freqClickCount = 0;
let keyBuffer = "";
let portalAnimId = null;
let audioCtx = null;

function getStoredState(key, fallback) {
  try {
    const val = window.localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setStoredState(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
}

// Helper lookups
function findCase(idOrKey) {
  return CASE_DATABASE.find(c => c.id === idOrKey || c.aliasId === idOrKey || c.legacyKey === idOrKey);
}
function findAgent(codenameOrId) {
  return AGENT_DATABASE.find(a => a.codename === codenameOrId || a.agentId === codenameOrId);
}
function findReality(realityId) {
  return REALITY_DATABASE.find(r => r.id === realityId);
}
function findEvidence(evdId) {
  return EVIDENCE_DATABASE.find(e => e.id === evdId);
}

// 6. ARTWORK & PORTRAIT SVG GENERATORS
function getCaseArtworkMarkup(c) {
  if (c.isPrivate) {
    return `<div style="width:100%;height:100%;min-height:175px;background:radial-gradient(circle at 50% 45%,#1d0910 0%,#07090e 72%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:18px;text-align:center;border-bottom:1px solid rgba(230,46,58,0.35)">
      <i class="fa-solid fa-lock" aria-hidden="true" style="font-size:1.75rem;color:#ff3b52"></i>
      <span class="mono" style="font-size:0.72rem;letter-spacing:0.14em;color:#ff8090">PRIVATE // RESTRICTED FILE</span>
      <span class="mono muted" style="font-size:0.62rem">DIRECTORATE CLEARANCE REQUIRED</span>
    </div>`;
  }
  if (c.thumbType === "img-av165") {
    return `<img src="https://i.ytimg.com/vi/BXdKz6VmglY/maxresdefault.jpg" onerror="this.onerror=null;this.src='assets/av165-thumb.jpg';" alt="ANVESH Directorate Case File AV-165 Sheru Bhai YouTube thumbnail" loading="lazy">`;
  }
  if (c.thumbType === "img-av164") {
    return `<img src="https://i.ytimg.com/vi/wKXK__x7PQg/maxresdefault.jpg" onerror="this.onerror=null;this.src='assets/case-av-164.jpg';" alt="ANVESH Directorate Case File AV-164 ChatGPT YouTube thumbnail" loading="lazy">`;
  }
  if (c.thumbType === "img-dig") {
    return `<img src="assets/case-dig-001.jpg" alt="Spectral waveform analyzer displaying 09.71 MHz digital anomaly for case ${c.id}" loading="lazy">`;
  }
  if (c.thumbType === "img-mem") {
    return `<img src="assets/case-mem-002.jpg" alt="Forensic glass evidence frame and anomalous shadow silhouette for case ${c.id}" loading="lazy">`;
  }
  if (c.thumbType === "img-env") {
    return `<img src="assets/case-env-003.jpg" alt="Subterranean corridor with cyan LiDAR wireframe scan of unlisted room for case ${c.id}" loading="lazy">`;
  }
  if (c.thumbType === "svg-sup") {
    return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Harmonic acoustic wave diagram for case ${c.id}">
      <rect width="400" height="260" fill="#070c14"/>
      <circle cx="200" cy="130" r="95" fill="none" stroke="#22d3ee" stroke-width="1" stroke-dasharray="6 4" opacity="0.45"/>
      <circle cx="200" cy="130" r="65" fill="none" stroke="#a855f7" stroke-width="1.5" opacity="0.6"/>
      <polygon points="182,55 218,55 228,205 172,205" fill="#111c2b" stroke="#22d3ee" stroke-width="1.5"/>
      <path d="M 40 130 Q 80 70, 120 130 T 200 130 T 280 130 T 360 130" fill="none" stroke="#e62e3a" stroke-width="2"/>
    </svg>`;
  }
  if (c.thumbType === "svg-tmp") {
    return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Temporal cesium clock phase drift diagram for case ${c.id}">
      <rect width="400" height="260" fill="#080b14"/>
      <g stroke="#1e2d3d" stroke-width="1"><line x1="0" y1="65" x2="400" y2="65"/><line x1="0" y1="130" x2="400" y2="130"/><line x1="0" y1="195" x2="400" y2="195"/></g>
      <circle cx="155" cy="130" r="58" fill="none" stroke="#22d3ee" stroke-width="2"/>
      <circle cx="245" cy="130" r="58" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="8 4"/>
      <line x1="155" y1="130" x2="155" y2="85" stroke="#22d3ee" stroke-width="2"/>
      <line x1="245" y1="130" x2="285" y2="105" stroke="#e62e3a" stroke-width="2"/>
    </svg>`;
  }
  if (c.thumbType === "svg-cls") {
    return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classified multiverse node handshake diagram for case ${c.id}">
      <rect width="400" height="260" fill="#090a12"/>
      <rect x="55" y="45" width="290" height="170" fill="none" stroke="#e62e3a" stroke-width="1.2" stroke-dasharray="10 5"/>
      <circle cx="130" cy="130" r="28" fill="#131c2b" stroke="#22d3ee" stroke-width="2"/>
      <circle cx="270" cy="130" r="28" fill="#1c1226" stroke="#a855f7" stroke-width="2"/>
      <line x1="158" y1="130" x2="242" y2="130" stroke="#e62e3a" stroke-width="2.5" stroke-dasharray="4 4"/>
    </svg>`;
  }
  return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Omega clearance emblem for case ${c.id}">
    <rect width="400" height="260" fill="#0b0711"/>
    <circle cx="200" cy="130" r="82" fill="none" stroke="#e62e3a" stroke-width="2.5" stroke-dasharray="18 8"/>
    <circle cx="200" cy="130" r="48" fill="none" stroke="#a855f7" stroke-width="1.8"/>
    <polygon points="200,72 222,130 200,188 178,130" fill="none" stroke="#22d3ee" stroke-width="2"/>
    <circle cx="200" cy="130" r="9" fill="#e62e3a"/>
  </svg>`;
}

function getAgentAvatarSVG(agent) {
  const portraitMap = {
    "ALPHA-00": "assets/agent-alpha-00.jpg",
    "ALPHA-01": "assets/agent-alpha-01.jpg",
    "ALPHA-02": "assets/agent-alpha-02.jpg",
    "ALPHA-03": "assets/agent-alpha-03.jpg",
    "ALPHA-04": "assets/agent-alpha-04.jpg"
  };
  const imgSrc = portraitMap[agent.codename];
  if (imgSrc) {
    return `
      <div class="scan-line-bar" aria-hidden="true"></div>
      <img src="${imgSrc}" alt="Classified operative portrait for ${agent.codename}" class="agent-portrait-img" loading="lazy" width="160" height="160">
    `;
  }
  const color = agent.avatarHue || "#22d3ee";
  return `
    <div class="scan-line-bar" aria-hidden="true"></div>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classified personnel silhouette for ${agent.codename}">
      <rect width="100" height="100" fill="#060a10"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="${color}" stroke-width="1" stroke-dasharray="6 4" opacity="0.5"/>
      <circle cx="50" cy="36" r="15" fill="#131f2e" stroke="${color}" stroke-width="1.8"/>
      <path d="M 22 86 C 22 64, 78 64, 78 86" fill="#131f2e" stroke="${color}" stroke-width="1.8"/>
      <line x1="10" y1="15" x2="25" y2="15" stroke="${color}" stroke-width="1.5"/>
      <line x1="10" y1="15" x2="10" y2="30" stroke="${color}" stroke-width="1.5"/>
      <line x1="90" y1="85" x2="75" y2="85" stroke="${color}" stroke-width="1.5"/>
      <line x1="90" y1="85" x2="90" y2="70" stroke="${color}" stroke-width="1.5"/>
    </svg>
  `;
}

function getPriorityBadgeClass(priority) {
  if (priority === "CRITICAL" || priority === "OMEGA") return "badge-red";
  if (priority === "HIGH" || priority === "LEVEL 04") return "badge-amber";
  if (priority === "ELEVATED" || priority === "LEVEL 03") return "badge-purple";
  return "badge-cyan";
}

// 7. VIEW NAVIGATION & ROUTING SYSTEM
function switchView(viewName, options = {}) {
  const validViews = [
    "home", "about", "structure", "archives", "case-detail", "case-doc",
    "agents", "agent-detail", "multiverse", "reality-detail",
    "evidence", "evidence-detail", "solutions", "transmissions",
    "contact", "privacy", "terms", "disclaimer", "404", "403", "500"
  ];
  const target = validViews.includes(viewName) ? viewName : "404";
  currentView = target;

  document.querySelectorAll(".app-view").forEach(sec => {
    const isMatch = sec.id === `view-${target}`;
    sec.classList.toggle("active-view", isMatch);
  });

  // Highlight active primary nav item (mapping detail views to their parent nav item)
  const navMap = {
    "case-detail": "archives",
    "case-doc": "archives",
    "agent-detail": "agents",
    "reality-detail": "multiverse",
    "evidence-detail": "evidence"
  };
  const navKey = navMap[target] || target;
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-nav") === navKey);
  });

  const nav = document.getElementById("main-nav");
  const menuBtn = document.getElementById("menu-toggle");
  if (nav && nav.classList.contains("open")) {
    nav.classList.remove("open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  }

  const titles = {
    "home": "ANVESH Directorate — Classified Multiverse Anomaly Archive",
    "archives": "Declassified Case Archives — ANVESH Directorate",
    "case-detail": "Case File Dossier — ANVESH Directorate Archive",
    "case-doc": "Official Case Investigation Report — ANVESH Directorate",
    "agents": "Classified Agent Registry — ANVESH Directorate",
    "agent-detail": "Operative Personnel Dossier — ANVESH Directorate",
    "multiverse": "Multiverse Index: Reality & Timeline Database — ANVESH Directorate",
    "reality-detail": "Reality & Timeline Classification Record — ANVESH Directorate",
    "evidence": "Central Forensic Evidence Room — ANVESH Directorate",
    "evidence-detail": "Forensic Evidence & Chain of Custody Record — ANVESH Directorate",
    "solutions": "Case Solution Access Terminal — ANVESH Directorate",
    "structure": "Directorate Structure & Divisions — ANVESH Directorate",
    "transmissions": "Intercepted Transmissions Log — ANVESH Directorate",
    "about": "About ANVESH — Fictional Multiverse Storytelling & Archive",
    "contact": "Submit Anomaly Report & Contact — ANVESH Directorate",
    "privacy": "Privacy Policy — ANVESH Multiverse",
    "terms": "Terms of Use — ANVESH Multiverse",
    "disclaimer": "Fictional Universe Disclaimer — ANVESH Multiverse",
    "404": "404 Coordinate Unmapped — ANVESH Directorate",
    "403": "403 Clearance Restricted — ANVESH Directorate",
    "500": "500 Telemetry Relay Fault — ANVESH Directorate"
  };
  document.title = titles[target] || titles.home;

  // Reveal any animation-staged elements inside the active view immediately so nothing stays hidden
  const activeEl = document.getElementById(`view-${target}`);
  if (activeEl) {
    activeEl.querySelectorAll(".anv-reveal").forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 45}ms`);
      el.classList.add("anv-visible");
    });
  }
  // Pause embedded videos if navigating away from home
  if (viewName !== "home") {
    document.querySelectorAll("video").forEach(v => { try { v.pause(); } catch (e) {} });
  }
  if (!options.skipScroll) {
    window.scrollTo({ top: 0, behavior: safeExitEnabled ? "auto" : "smooth" });
  }
}

// 8. CASE ARCHIVE & CASE DETAIL RENDERING (Connected to Agents, Realities, Evidence & Doc Generator)
function createCaseCardHTML(c, includeQuickPreview = false) {
  const pBadge = getPriorityBadgeClass(c.priority);
  const aliasTag = c.aliasId ? ` <span class="muted">(${c.aliasId})</span>` : "";
  if (c.isPrivate) {
    return `
    <article class="case-card cyber-neon-border" data-case-id="${c.id}" data-augmented-ui="tl-clip br-clip border" style="opacity:0.86;border-color:var(--red-border)">
      <div class="case-thumb">
        ${getCaseArtworkMarkup(c)}
        <div class="case-thumb-overlay">
          <span class="badge badge-red">PRIVATE</span>
          <span class="badge badge-purple">RESTRICTED</span>
        </div>
      </div>
      <div class="case-body">
        <div class="case-meta-row">
          <span><strong>${c.id}</strong></span>
          <span class="mono muted" style="font-size:0.62rem">CLEARANCE LOCKED</span>
        </div>
        <h3>[REDACTED — PRIVATE ARCHIVE]</h3>
        <p>${c.unlockAt ? `Scheduled declassification timer active: <strong class="mono case-countdown" data-unlock-at="${c.unlockAt}" style="color:var(--cyan)">CALCULATING...</strong>` : "This case file is currently sealed under Directorate restriction. Public access is suspended."}</p>
        <div class="case-foot">
          <span style="color:#ff6b7d">● PRIVATE</span>
          <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap">
            <button type="button" class="btn btn-ghost" style="padding:6px 11px;font-size:0.63rem;border-color:var(--red-border);color:#ff8090" data-nav="403"><i class="fa-solid fa-lock" aria-hidden="true"></i> RESTRICTED</button>
          </div>
        </div>
      </div>
    </article>
  `;
  }
  const previewBtn = includeQuickPreview
    ? `<button type="button" class="btn btn-ghost" style="padding:6px 10px;font-size:0.62rem" data-preview-case="${c.legacyKey || c.id}">QUICK NOTE</button>`
    : "";

  return `
    <article class="case-card cyber-neon-border" data-case-id="${c.id}" data-augmented-ui="tl-clip br-clip border">
      <div class="case-thumb">
        ${getCaseArtworkMarkup(c)}
        <div class="case-thumb-overlay">
          <span class="badge ${pBadge}">${c.priority}</span>
          <span class="badge badge-cyan">${c.codeClass}</span>
        </div>
      </div>
      <div class="case-body">
        <div class="case-meta-row">
          <span><strong>${c.id}</strong>${aliasTag}</span>
          <button type="button" class="link-chip" style="padding:2px 7px;font-size:0.6rem" data-open-agent="${c.leadAgentId}">LEAD: ${c.leadAgentId}</button>
        </div>
        <h3>${c.title}</h3>
        <p>${c.shortDesc}</p>
        <div class="case-foot">
          <span>● ${c.status}</span>
          <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap">
            ${previewBtn}
            <button type="button" class="btn btn-ghost" style="padding:6px 10px;font-size:0.62rem" data-open-doc="${c.id}" title="Generate Official Case Document"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> REPORT</button>
            <button type="button" class="btn btn-cyan" style="padding:6px 11px;font-size:0.63rem" data-open-dossier="${c.id}">VIEW CASE ↗</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedCases() {
  const container = document.getElementById("featured-case-grid");
  if (!container) return;
  container.innerHTML = CASE_DATABASE.slice(0, 3).map(c => createCaseCardHTML(c, true)).join("");
}

function renderArchiveCases() {
  const grid = document.getElementById("archive-grid");
  const countEl = document.getElementById("archive-count");
  if (!grid) return;

  const query = (document.getElementById("archive-search")?.value || "").trim().toLowerCase();
  const clsFilter = document.getElementById("filter-class")?.value || "ALL";
  const prioFilter = document.getElementById("filter-priority")?.value || "ALL";
  const statusFilter = document.getElementById("filter-status")?.value || "ALL";

  const filtered = CASE_DATABASE.filter(c => {
    if (c.id === "ANV-CLS-000" && !alphaUnlocked && clsFilter !== "CLS" && !query.includes("alpha") && !query.includes("000")) {
      return false;
    }
    const matchesQuery = !query ||
      c.id.toLowerCase().includes(query) ||
      (c.aliasId && c.aliasId.toLowerCase().includes(query)) ||
      c.title.toLowerCase().includes(query) ||
      c.shortDesc.toLowerCase().includes(query) ||
      c.summary.toLowerCase().includes(query) ||
      c.leadAgentId.toLowerCase().includes(query);
    const matchesClass = clsFilter === "ALL" || c.codeClass === clsFilter;
    const matchesPrio = prioFilter === "ALL" || c.priority === prioFilter;
    const matchesStatus = statusFilter === "ALL" || c.status === statusFilter;
    return matchesQuery && matchesClass && matchesPrio && matchesStatus;
  });

  if (countEl) {
    const pubCount = CASE_DATABASE.filter(x => !x.isPrivate).length;
    const privCount = CASE_DATABASE.length - pubCount;
    countEl.textContent = `SHOWING ${filtered.length} RECORDS (${pubCount} PUBLIC ACTIVE // ${privCount} PRIVATE RESTRICTED)`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="dossier-block" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <p class="eyebrow" style="justify-content:center">ZERO RECORDS MATCHING QUERY</p>
        <h3>NO MATCHING ANOMALY FILES FOUND</h3>
        <p class="muted">Adjust your classification, priority, or status filters, or search for 'ANV-DIG-001' or 'ALPHA-00'.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(c => createCaseCardHTML(c, false)).join("");
}

function openCaseDossier(caseId) {
  const c = findCase(caseId) || CASE_DATABASE[0];
  if (c.isPrivate) {
    switchView("403");
    return;
  }
  const container = document.getElementById("dossier-content");
  if (!container) return;

  const pBadge = getPriorityBadgeClass(c.priority);
  const realityObj = findReality(c.realityId);

  // Connected Evidence Records from EVIDENCE_DATABASE
  const linkedEvd = c.evidenceIds.map(eid => findEvidence(eid)).filter(Boolean);
  const evidenceHtml = linkedEvd.map(ev => `
    <div style="padding:12px;background:var(--bg-void);border:1px solid var(--line-bright);border-radius:3px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
      <div>
        <div class="mono" style="color:var(--cyan);font-size:0.66rem">${ev.id} // ${ev.category} // ${ev.verificationStatus}</div>
        <strong style="font-size:0.9rem">${ev.title}</strong>
        <div style="font-size:0.8rem;color:var(--text-secondary)">${ev.description}</div>
      </div>
      <button type="button" class="btn btn-cyan" style="padding:7px 12px;font-size:0.64rem" data-open-evidence="${ev.id}">INSPECT EVIDENCE ↗</button>
    </div>
  `).join("");

  // Connected Operatives from AGENT_DATABASE
  const allAgentIds = [c.leadAgentId, ...(c.supportingAgentIds || [])];
  const agentChips = allAgentIds.map((aid, idx) => {
    const a = findAgent(aid);
    const roleLabel = idx === 0 ? "LEAD" : "SUPPORT";
    return `<button type="button" class="link-chip" data-open-agent="${aid}"><i class="fa-solid fa-user-secret" aria-hidden="true"></i> ${roleLabel}: ${aid} (${a ? a.designation : "Operative"}) ↗</button>`;
  }).join(" ");

  const timelineItems = c.timeline.map(t => `
    <li>
      <div class="mono" style="color:var(--cyan);font-size:0.68rem">${t.date}</div>
      <div style="color:var(--text-secondary);font-size:0.88rem">${t.event}</div>
    </li>
  `).join("");

  const relatedButtons = c.relatedCases.map(relId => {
    const relObj = findCase(relId);
    const label = relObj ? `${relObj.id} — ${relObj.title}` : relId;
    return `<button type="button" class="btn btn-ghost" style="width:100%;justify-content:space-between;margin-bottom:8px" data-open-dossier="${relId}"><span>${label}</span><span>↗</span></button>`;
  }).join("");

  container.innerHTML = `
    <div class="dossier-header">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;margin-bottom:16px">
        <div>
          <p class="eyebrow">DIRECTORATE CASE DOSSIER // FICTIONAL ARCHIVE RECORD</p>
          <h2 class="section-title" style="margin-bottom:8px">${c.id}: <em>${c.title}</em></h2>
          <div class="mono muted">${c.division} &nbsp;|&nbsp; DOC REF: ${c.docRef} &nbsp;|&nbsp; LOGGED: ${c.dateLogged}</div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <span class="badge ${pBadge}">PRIORITY: ${c.priority}</span>
          <span class="badge badge-cyan">${c.className}</span>
          <span class="badge badge-purple">STATUS: ${c.status}</span>
          <button type="button" class="btn btn-primary" data-open-doc="${c.id}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> GENERATE OFFICIAL CASE DOCUMENT <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>
        </div>
      </div>

      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;padding-top:12px;border-top:1px solid var(--line)">
        <span class="mono muted">ASSIGNED PERSONNEL &amp; REALITY NODE:</span>
        ${agentChips}
        <button type="button" class="link-chip" style="border-color:var(--purple-border);color:#d8b4fe" data-open-reality="${c.realityId}"><i class="fa-solid fa-globe" aria-hidden="true"></i> ${c.realityId} (${realityObj ? realityObj.designation : "Node"}) ↗</button>
      </div>
    </div>

    <div class="dossier-grid">
      <div>
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>01 // VISUAL &amp; AUDITORY EVIDENCE CAPTURE</h3>
          <div class="case-thumb" style="height:270px;margin-bottom:12px;border:1px solid var(--line-bright)">
            ${getCaseArtworkMarkup(c)}
          </div>
          <div class="mono muted" style="margin-bottom:12px">TELEMETRY TAG: ${c.thumbLabel} — LOCATION: ${c.location}</div>
          ${c.id === "ANV-DIG-001" ? `
            <div style="padding:12px;background:var(--bg-void);border:1px solid var(--cyan-border);margin-top:10px">
              <div class="mono" style="color:var(--cyber-cyan);margin-bottom:6px"><i class="fa-solid fa-tower-broadcast" aria-hidden="true"></i> DECLASSIFIED AUDIO RECORDING // ANVESH CASE FILE 01 (02:58)</div>
              <audio controls preload="none" src="assets/audio/case-file-01.mp3" style="width:100%;margin-bottom:8px"></audio>
              <button type="button" class="btn btn-cyan" data-play-track="case-01"><i class="fa-solid fa-headphones" aria-hidden="true"></i> STREAM IN GLOBAL HOWLER DECK</button>
            </div>
          ` : c.id === "ANV-ENT-002" ? `
            <div style="padding:12px;background:var(--bg-void);border:1px solid var(--purple-border);margin-top:10px">
              <div class="mono" style="color:#d8b4fe;margin-bottom:6px"><i class="fa-solid fa-eye" aria-hidden="true"></i> DECLASSIFIED AUDIO RECORDING // ANVESH CASE FILE 02 &amp; "BEHIND THE GLASS"</div>
              <audio controls preload="none" src="assets/audio/case-file-02.mp3" style="width:100%;margin-bottom:8px"></audio>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <button type="button" class="btn btn-cyan" data-play-track="case-02"><i class="fa-solid fa-headphones" aria-hidden="true"></i> STREAM CASE 02 LOG</button>
                <button type="button" class="btn btn-purple" data-play-track="behind-the-glass"><i class="fa-solid fa-music" aria-hidden="true"></i> PLAY "BEHIND THE GLASS"</button>
              </div>
            </div>
          ` : `
            <div style="padding:12px;background:var(--bg-void);border:1px solid var(--line-bright);margin-top:10px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
              <span class="mono" style="color:var(--cyber-cyan)"><i class="fa-solid fa-compact-disc" aria-hidden="true"></i> ARCHIVE SOUNDTRACK: THE REDACTED LEDGER</span>
              <button type="button" class="btn btn-cyan" style="padding:6px 12px" data-play-track="the-redacted-ledger"><i class="fa-solid fa-play" aria-hidden="true"></i> STREAM ARCHIVE AUDIO</button>
            </div>
          `}
        </div>

        ${c.id === "AV-164" ? `
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border" style="border-color:rgba(255,38,68,0.45)">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px">
            <h3 style="margin:0"><i class="fa-brands fa-youtube" style="color:var(--red)" aria-hidden="true"></i> VIDEO BRIEFING PREVIEW // FILE AV-164</h3>
            <span class="badge badge-red">KEY: AV-164-MV-GPT</span>
          </div>
          <div class="yt-embed-wrap">
            <iframe src="https://www.youtube-nocookie.com/embed/wKXK__x7PQg?rel=0" title="File AV-164 — If ChatGPT Ever Sends Hi, Don't Reply" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="anv-gif-strip-wrap" style="margin-top:12px">
            <img src="assets/anim-key-glitch.gif" alt="Glitching AV-164 Signal Key" class="anv-hud-gif" loading="lazy">
          </div>
        </div>` : ""}
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>02 // EXECUTIVE SUMMARY &amp; INCIDENT NARRATIVE</h3>
          <p style="color:var(--text);margin:0 0 12px"><strong>Summary:</strong> ${c.summary}</p>
          <p style="color:var(--text-secondary);margin:0">${c.incidentDescription}</p>
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>03 // CONNECTED FORENSIC EVIDENCE LOCKER (${linkedEvd.length} ITEMS)</h3>
          ${evidenceHtml}
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>04 // EXPLANATION, RESOLUTION &amp; REPORT EXPORT</h3>
          <p style="color:var(--text);margin:0 0 16px">${c.resolution}</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button type="button" class="btn btn-primary" data-open-doc="${c.id}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> GENERATE OFFICIAL CASE DOCUMENT</button>
            <button type="button" class="btn btn-cyan" data-prefill-code="${c.solutionCode}"><i class="fa-solid fa-key" aria-hidden="true"></i> VERIFY SOLUTION CODE (${c.solutionCode}) ↗</button>
          </div>
        </div>
      </div>

      <div>
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>05 // CHRONOLOGICAL TIMELINE</h3>
          <ul class="timeline-list">${timelineItems}</ul>
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>06 // LINKED YOUTUBE INVESTIGATION</h3>
          <p style="font-size:0.84rem;color:var(--text-secondary);margin-top:0">This dossier connects to the ANVESH Multiverse YouTube investigation series:</p>
          <div style="padding:12px;background:var(--bg-void);border:1px solid var(--line-bright);border-radius:3px;margin-bottom:12px">
            <div class="mono" style="color:var(--cyan);font-size:0.68rem;margin-bottom:4px">EXTERNAL VIDEO RECORD</div>
            <strong style="font-size:0.88rem;display:block;margin-bottom:8px">${c.youtubeTitle}</strong>
            <a href="${c.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%">WATCH ON YOUTUBE ↗</a>
          </div>
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>07 // RELATED CASE FILES</h3>
          ${relatedButtons}
        </div>
      </div>
    </div>
  `;

  switchView("case-detail");
}

// 9. OFFICIAL CASE DOCUMENT SYSTEM (Sections A through J, Print/PDF & Standalone Download)
function openOfficialCaseDocument(caseId) {
  const c = findCase(caseId) || CASE_DATABASE[0];
  if (c.isPrivate) {
    switchView("403");
    return;
  }
  currentDocCaseId = c.id;

  const selector = document.getElementById("doc-case-selector");
  if (selector) selector.value = c.id;

  const sheet = document.getElementById("official-doc-container");
  if (!sheet) return;

  const leadAgent = findAgent(c.leadAgentId);
  const supportNames = (c.supportingAgentIds || []).map(id => {
    const a = findAgent(id);
    return `<button type="button" class="link-chip no-print" data-open-agent="${id}">${id}</button><span class="mono">${id} (${a ? a.designation : "Operative"})</span>`;
  }).join(", ");

  const linkedEvd = c.evidenceIds.map(eid => findEvidence(eid)).filter(Boolean);
  const evidenceRows = linkedEvd.map(ev => `
    <tr>
      <td class="mono"><strong>${ev.id}</strong><br><small class="muted">${ev.attachmentRef}</small></td>
      <td class="mono">${ev.category}<br><small class="muted">${ev.fileType}</small></td>
      <td><strong>${ev.title}</strong><br>${ev.description}<br><small class="mono muted">Origin: ${ev.source || "ANVESH Field Relay"} | Collected: ${ev.collectionDate || "2026-11-27"}</small></td>
      <td class="mono">${ev.verificationStatus}<br><small class="muted">Agent: ${ev.agentId}</small></td>
      <td class="mono">${ev.classification || "PUBLIC DIRECTIVE"}<br><button type="button" class="link-chip no-print" style="margin-top:4px" data-open-evidence="${ev.id}">OPEN FILE ↗</button></td>
    </tr>
  `).join("");

  const timelineRows = c.timeline.map((t, idx) => `
    <tr>
      <td class="mono" style="width:45px">0${idx + 1}</td>
      <td class="mono" style="width:190px">${t.date}</td>
      <td>${t.event}</td>
    </tr>
  `).join("");

  const confirmedList = c.findingsAndResolution.confirmedFindings.map(item => `<li>${item}</li>`).join("");
  const unverifiedList = c.findingsAndResolution.unverifiedHypotheses.map(item => `<li>${item}</li>`).join("");
  const questionsList = c.findingsAndResolution.remainingQuestions.map(item => `<li>${item}</li>`).join("");
  const actionsList = c.findingsAndResolution.followUpActions.map(item => `<li>${item}</li>`).join("");

  sheet.innerHTML = `
    <!-- A. OFFICIAL HEADER -->
    <div class="doc-classification-banner">
      DOCUMENT CLASSIFICATION: ${c.docClassification} // FICTIONAL ARCHIVE REPORT
    </div>

    <div class="doc-header-grid">
      <div style="display:flex;align-items:center;gap:14px">
        <img src="assets/anvesh-emblem-v2.jpg" alt="ANVESH Directorate Emblem" width="60" height="60" style="border-radius:50%;border:2px solid rgba(230,46,58,0.8);object-fit:cover;box-shadow:0 0 14px rgba(230,46,58,0.45)">
        <div>
          <div style="font-family:var(--display);font-size:1.75rem;font-weight:800;letter-spacing:0.1em;line-height:1">ANVESH DIRECTORATE</div>
          <div class="mono muted" style="font-size:0.62rem;margin-top:4px">ANOMALY NETWORK FOR VERIFICATION, EVIDENCE, SCIENCE &amp; HISTORY</div>
        </div>
      </div>
      <div style="text-align:center">
        <div class="mono" style="color:var(--cyan);font-size:0.68rem">OFFICIAL SCIENTIFIC INVESTIGATION REPORT</div>
        <h2 style="font-family:var(--display);font-size:2rem;margin:4px 0;text-transform:uppercase">${c.id}: ${c.title}</h2>
      </div>
      <div class="mono" style="font-size:0.65rem;text-align:right;line-height:1.65">
        <div><strong>DOC REF:</strong> ${c.docRef}</div>
        <div><strong>CASE ID:</strong> ${c.id}${c.aliasId ? " / " + c.aliasId : ""}</div>
        <div><strong>REVISION:</strong> ${c.revision}</div>
        <div><strong>DATE OF ISSUE:</strong> ${c.dateIssued}</div>
        <div><strong>PAGE:</strong> 01 OF 02</div>
      </div>
    </div>

    <!-- B. CASE IDENTIFICATION -->
    <div class="doc-section-block">
      <h3 class="doc-section-title">SECTION B // CASE IDENTIFICATION &amp; OPERATIONAL METADATA</h3>
      <table class="doc-meta-table">
        <tbody>
          <tr>
            <th>CASE TITLE</th>
            <td><strong>${c.title}</strong></td>
            <th>ANOMALY CLASSIFICATION</th>
            <td class="mono">${c.className}</td>
          </tr>
          <tr>
            <th>PRIORITY LEVEL</th>
            <td class="mono"><strong>${c.priority}</strong></td>
            <th>INVESTIGATION STATUS</th>
            <td class="mono">${c.status}</td>
          </tr>
          <tr>
            <th>ASSIGNED DIVISION</th>
            <td class="mono">${c.division}</td>
            <th>REALITY / TIMELINE ID</th>
            <td class="mono">${c.realityId} <button type="button" class="link-chip no-print" data-open-reality="${c.realityId}">VIEW NODE ↗</button></td>
          </tr>
          <tr>
            <th>LEAD OPERATIVE</th>
            <td class="mono">${c.leadAgentId} (${leadAgent ? leadAgent.designation : "Field Operative"}) <button type="button" class="link-chip no-print" data-open-agent="${c.leadAgentId}">PROFILE ↗</button></td>
            <th>SUPPORTING OPERATIVES</th>
            <td>${supportNames}</td>
          </tr>
          <tr>
            <th>INCIDENT LOCATION</th>
            <td class="mono">${c.location}</td>
            <th>DISCOVERED / DOCUMENTED</th>
            <td class="mono">Discovered: ${c.dateDiscovered} | Logged: ${c.dateLogged}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- C. EXECUTIVE SUMMARY -->
    <div class="doc-section-block">
      <h3 class="doc-section-title">SECTION C // EXECUTIVE SUMMARY</h3>
      <p style="margin:0;font-size:0.9rem">${c.summary}</p>
    </div>

    <!-- D. INCIDENT DESCRIPTION -->
    <div class="doc-section-block">
      <h3 class="doc-section-title">SECTION D // DETAILED INCIDENT DESCRIPTION</h3>
      <p style="margin:0;font-size:0.9rem">${c.incidentDescription}</p>
    </div>

    <!-- E. EVIDENCE REGISTER -->
    <div class="doc-section-block">
      <h3 class="doc-section-title">SECTION E // STRUCTURED FORENSIC EVIDENCE REGISTER (CASE ${c.id})</h3>
      <table class="doc-evidence-table">
        <thead>
          <tr>
            <th>Evidence ID</th>
            <th>Evidence Type</th>
            <th>Description, Origin &amp; Date</th>
            <th>Verification</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${evidenceRows}
        </tbody>
      </table>
    </div>

    <!-- F. INVESTIGATION TIMELINE -->
    <div class="doc-section-block doc-page-break">
      <h3 class="doc-section-title">SECTION F // CHRONOLOGICAL INVESTIGATION TIMELINE</h3>
      <table class="doc-evidence-table">
        <thead>
          <tr>
            <th>Seq</th>
            <th>Timestamp (UTC)</th>
            <th>Logged Event &amp; Operational Action</th>
          </tr>
        </thead>
        <tbody>
          ${timelineRows}
        </tbody>
      </table>
    </div>

    <!-- G. SCIENTIFIC ANALYSIS -->
    <div class="doc-section-block">
      <h3 class="doc-section-title">SECTION G // SCIENTIFIC &amp; FORENSIC ANALYSIS</h3>
      <table class="doc-meta-table">
        <tbody>
          <tr>
            <th style="width:220px">EMPIRICAL OBSERVATIONS</th>
            <td>${c.scientificAnalysis.observations}</td>
          </tr>
          <tr>
            <th>WORKING HYPOTHESES</th>
            <td>${c.scientificAnalysis.hypotheses}</td>
          </tr>
          <tr>
            <th>VERIFICATION RESULTS</th>
            <td>${c.scientificAnalysis.verificationResults}</td>
          </tr>
          <tr>
            <th>UNRESOLVED QUESTIONS</th>
            <td>${c.scientificAnalysis.unresolvedQuestions}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- H. FINDINGS AND RESOLUTION -->
    <div class="doc-section-block">
      <h3 class="doc-section-title">SECTION H // CONFIRMED FINDINGS, RESOLUTION &amp; FOLLOW-UP DIRECTIVES</h3>
      <div class="split-grid" style="gap:16px">
        <div>
          <div class="mono" style="font-size:0.7rem;color:var(--cyan);margin-bottom:4px">1. CONFIRMED FINDINGS</div>
          <ul style="margin:0 0 12px;padding-left:18px;font-size:0.86rem">${confirmedList}</ul>
          <div class="mono" style="font-size:0.7rem;color:var(--cyan);margin-bottom:4px">2. UNVERIFIED HYPOTHESES</div>
          <ul style="margin:0;padding-left:18px;font-size:0.86rem">${unverifiedList}</ul>
        </div>
        <div>
          <div class="mono" style="font-size:0.7rem;color:var(--cyan);margin-bottom:4px">3. REMAINING QUESTIONS</div>
          <ul style="margin:0 0 12px;padding-left:18px;font-size:0.86rem">${questionsList}</ul>
          <div class="mono" style="font-size:0.7rem;color:var(--cyan);margin-bottom:4px">4. RECOMMENDED FICTIONAL FOLLOW-UP ACTIONS</div>
          <ul style="margin:0;padding-left:18px;font-size:0.86rem">${actionsList}</ul>
        </div>
      </div>
      <div style="margin-top:12px;padding:10px 14px;border:1px solid var(--line-bright);font-family:var(--mono);font-size:0.74rem">
        <strong>OFFICIAL RESOLUTION STATUS:</strong> ${c.findingsAndResolution.resolutionStatus} — ${c.resolution}
      </div>
    </div>

    <!-- I. AGENT AUTHORISATION AND SIGNATURES -->
    <div class="doc-section-block">
      <h3 class="doc-section-title">SECTION I // AGENT AUTHORISATION &amp; FICTIONAL SIGN-OFF REGISTER</h3>
      <p class="mono muted" style="font-size:0.63rem;margin:0 0 10px">NOTICE: Below are fictional narrative codename endorsements for story-world authenticity. They do not represent real individuals or cryptographic digital signatures.</p>
      <div class="doc-sig-grid">
        <div class="doc-sig-box">
          <div class="muted">PREPARED BY (LEAD OPERATIVE)</div>
          <div class="doc-sig-stamp">[SIGNED // ${c.leadAgentId}]</div>
          <div><strong>${c.authorisation.preparedBy}</strong></div>
          <div class="muted">Date: ${c.authorisation.sigDate} | ${c.revision}</div>
        </div>
        <div class="doc-sig-box">
          <div class="muted">REVIEWED BY (RESEARCH &amp; ANALYSIS)</div>
          <div class="doc-sig-stamp">[REVIEWED // DIV-02]</div>
          <div><strong>${c.authorisation.reviewedBy}</strong></div>
          <div class="muted">Date: ${c.authorisation.sigDate} | ${c.revision}</div>
        </div>
        <div class="doc-sig-box">
          <div class="muted">VERIFIED BY (DIVISION DIRECTOR)</div>
          <div class="doc-sig-stamp">[VERIFIED // DIRECTOR]</div>
          <div><strong>${c.authorisation.verifiedBy}</strong></div>
          <div class="muted">Date: ${c.authorisation.sigDate} | ${c.revision}</div>
        </div>
        <div class="doc-sig-box">
          <div class="muted">AUTHORISED BY (COMMAND)</div>
          <div class="doc-sig-stamp" style="border-color:var(--red-border);color:#ff8088">[SEALED // COMMAND]</div>
          <div><strong>${c.authorisation.authorisedBy}</strong></div>
          <div class="muted">Date: ${c.authorisation.sigDate} | ${c.revision}</div>
        </div>
      </div>
    </div>

    <!-- J. DOCUMENT FOOTER -->
    <div class="doc-footer-bar">
      <span><strong>ANVESH DIRECTORATE</strong> // FICTIONAL DOCUMENT — ENTERTAINMENT &amp; MYSTERY STORYTELLING UNIVERSE</span>
      <span>DOC ID: ${c.docRef} &nbsp;|&nbsp; ${c.docClassification} &nbsp;|&nbsp; PAGE 02 OF 02</span>
    </div>
  `;

  switchView("case-doc");
}

function downloadOfficialCaseReport(format = "html") {
  const c = findCase(currentDocCaseId) || CASE_DATABASE[0];
  const sheet = document.getElementById("official-doc-container");
  if (!sheet) return;

  let content = "";
  let mime = "text/html;charset=utf-8";
  let ext = "html";

  if (format === "txt") {
    mime = "text/plain;charset=utf-8";
    ext = "txt";
    content = [
      "================================================================================",
      `ANVESH DIRECTORATE — OFFICIAL CASE INVESTIGATION REPORT (${c.docClassification})`,
      "FICTIONAL ENTERTAINMENT ARCHIVE DOCUMENT — NOT A REAL GOVERNMENT RECORD",
      "================================================================================",
      `DOCUMENT REF : ${c.docRef} (${c.revision})`,
      `CASE ID      : ${c.id} — ${c.title}`,
      `CLASSIFICATION: ${c.className} | PRIORITY: ${c.priority} | STATUS: ${c.status}`,
      `DIVISION     : ${c.division}`,
      `LEAD AGENT   : ${c.leadAgentId} | SUPPORTING: ${(c.supportingAgentIds || []).join(", ")}`,
      `REALITY NODE : ${c.realityId} | LOCATION: ${c.location}`,
      `DATES        : Discovered ${c.dateDiscovered} | Logged ${c.dateLogged} | Issued ${c.dateIssued}`,
      "",
      "--- SECTION C: EXECUTIVE SUMMARY ---",
      c.summary,
      "",
      "--- SECTION D: INCIDENT DESCRIPTION ---",
      c.incidentDescription,
      "",
      "--- SECTION E: EVIDENCE REGISTER ---",
      ...c.evidenceIds.map(eid => {
        const ev = findEvidence(eid);
        return ev ? `* ${ev.id} [${ev.category}] ${ev.title} — ${ev.verificationStatus} (${ev.source})` : `* ${eid}`;
      }),
      "",
      "--- SECTION F: INVESTIGATION TIMELINE ---",
      ...c.timeline.map(t => `* ${t.date}: ${t.event}`),
      "",
      "--- SECTION G: SCIENTIFIC ANALYSIS ---",
      `Observations : ${c.scientificAnalysis.observations}`,
      `Hypotheses   : ${c.scientificAnalysis.hypotheses}`,
      `Verification : ${c.scientificAnalysis.verificationResults}`,
      `Unresolved   : ${c.scientificAnalysis.unresolvedQuestions}`,
      "",
      "--- SECTION H: FINDINGS & RESOLUTION ---",
      `Status       : ${c.findingsAndResolution.resolutionStatus}`,
      `Resolution   : ${c.resolution}`,
      "",
      "--- SECTION I: FICTIONAL AUTHORISATION SIGN-OFF ---",
      `Prepared By  : ${c.authorisation.preparedBy}`,
      `Reviewed By  : ${c.authorisation.reviewedBy}`,
      `Verified By  : ${c.authorisation.verifiedBy}`,
      `Authorised By: ${c.authorisation.authorisedBy} (${c.authorisation.sigDate})`,
      "================================================================================"
    ].join("\n");
  } else {
    content = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${c.id} — ${c.title} | ANVESH Directorate Official Case Report</title>
<style>
  body { font-family: 'Inter', Arial, sans-serif; background: #fff; color: #0f172a; margin: 24px; line-height: 1.5; }
  .official-doc-sheet { max-width: 900px; margin: 0 auto; border: 2px solid #0f172a; padding: 28px; }
  .doc-classification-banner { background: #fee2e2; color: #991b1b; border: 1px solid #991b1b; text-align: center; font-family: monospace; font-weight: bold; padding: 8px; margin-bottom: 20px; }
  .doc-header-grid { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 20px; gap: 16px; flex-wrap: wrap; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 13px; }
  th, td { border: 1px solid #475569; padding: 8px 10px; text-align: left; vertical-align: top; }
  th { background: #f1f5f9; font-family: monospace; text-transform: uppercase; }
  .doc-section-title { font-family: monospace; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #0f172a; padding-bottom: 4px; margin: 18px 0 10px; }
  .doc-sig-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .doc-sig-box { border: 1px solid #475569; padding: 10px; font-family: monospace; font-size: 11px; }
  .doc-sig-stamp { border: 1px dashed #0369a1; color: #0369a1; text-align: center; padding: 4px; margin: 6px 0; font-weight: bold; }
  .doc-footer-bar { border-top: 2px solid #0f172a; padding-top: 10px; margin-top: 24px; font-family: monospace; font-size: 11px; display: flex; justify-content: space-between; }
  .no-print { display: none !important; }
</style>
</head>
<body>
  <div class="official-doc-sheet">${sheet.innerHTML}</div>
</body>
</html>`;
  }

  try {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ANVESH_Case_Report_${c.id}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  } catch (e) {}
}

// 10. AGENT REGISTRY & INDIVIDUAL AGENT PROFILE RENDERER
function renderAgentRegistry() {
  const grid = document.getElementById("agent-grid");
  const countEl = document.getElementById("agent-count");
  if (!grid) return;

  const q = (document.getElementById("agent-search")?.value || "").trim().toLowerCase();
  const divF = document.getElementById("agent-filter-division")?.value || "ALL";
  const rankF = document.getElementById("agent-filter-rank")?.value || "ALL";
  const clrF = document.getElementById("agent-filter-clearance")?.value || "ALL";
  const statF = document.getElementById("agent-filter-status")?.value || "ALL";

  const filtered = AGENT_DATABASE.filter(a => {
    const matchQ = !q ||
      a.codename.toLowerCase().includes(q) ||
      a.agentId.toLowerCase().includes(q) ||
      a.designation.toLowerCase().includes(q) ||
      a.specialisation.toLowerCase().includes(q);
    const matchDiv = divF === "ALL" || a.divisionCode === divF;
    const matchRank = rankF === "ALL" || a.rank.includes(rankF);
    const matchClr = clrF === "ALL" || a.clearance === clrF;
    const matchStat = statF === "ALL" || a.status === statF;
    return matchQ && matchDiv && matchRank && matchClr && matchStat;
  });

  if (countEl) {
    countEl.textContent = `SHOWING ${filtered.length} OF ${AGENT_DATABASE.length} PERSONNEL DOSSIERS`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="dossier-block" style="grid-column:1/-1;text-align:center;padding:36px">
        <h3>NO MATCHING AGENT PROFILES</h3>
        <p class="muted">Reset filters or search for ALPHA-01, ALPHA-02, ALPHA-03, ALPHA-04, or ALPHA-00.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(a => {
    const clrBadge = getPriorityBadgeClass(a.clearance);
    const isDemo = a.profileClass.includes("DEMO");
    const casePills = a.caseIds.map(cid => `<button type="button" class="link-chip" style="padding:3px 7px;font-size:0.6rem" data-open-dossier="${cid}">${cid}</button>`).join(" ");

    return `
      <article class="agent-card cyber-neon-border" data-agent-id="${a.codename}" data-augmented-ui="tl-clip br-clip border">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
          <span class="mono muted">${a.agentId} // ${a.divisionCode}</span>
          <span class="badge ${clrBadge}">CLEARANCE: ${a.clearance}</span>
        </div>

        <div class="agent-card-top">
          <div class="agent-avatar">${getAgentAvatarSVG(a)}</div>
          <div>
            <h3 style="font-family:var(--display);font-size:1.75rem;margin:0;letter-spacing:0.04em">${a.codename}</h3>
            <div style="color:var(--cyan);font-family:var(--mono);font-size:0.68rem;margin:2px 0 6px">${a.designation}</div>
            <span class="badge ${isDemo ? "badge-amber" : "badge-emerald"}" style="font-size:0.58rem">${a.profileClass}</span>
          </div>
        </div>

        <div class="agent-meta-grid">
          <div><span class="muted">RANK:</span><br><strong>${a.rank}</strong></div>
          <div><span class="muted">STATUS:</span><br><strong>${a.status}</strong></div>
          <div><span class="muted">GENDER / ID:</span><br><strong>${a.genderPresentation}</strong></div>
          <div><span class="muted">ASSIGNED CASES:</span><br><strong>${a.caseIds.length} FILES</strong></div>
        </div>

        <p style="font-size:0.84rem;color:var(--text-secondary);margin:0;flex:1">${a.bio}</p>

        <div>
          <div class="mono muted" style="font-size:0.6rem;margin-bottom:6px">ASSOCIATED CASE FILES:</div>
          <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px">${casePills}</div>
        </div>

        <button type="button" class="btn btn-cyan" style="width:100%" data-open-agent="${a.codename}">OPEN PERSONNEL DOSSIER ↗</button>
      </article>
    `;
  }).join("");
}

function openAgentDetail(codenameOrId) {
  const a = findAgent(codenameOrId) || AGENT_DATABASE[0];
  const container = document.getElementById("agent-detail-content");
  if (!container) return;

  const clrBadge = getPriorityBadgeClass(a.clearance);
  const linkedCasesHtml = a.caseIds.map(cid => {
    const c = findCase(cid);
    return c ? `
      <div style="padding:12px;background:var(--bg-void);border:1px solid var(--line-bright);border-radius:3px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
        <div>
          <div class="mono" style="color:var(--cyan);font-size:0.66rem">${c.id} // ${c.className} // ${c.status}</div>
          <strong>${c.title}</strong>
        </div>
        <div style="display:flex;gap:6px">
          <button type="button" class="btn btn-ghost" style="padding:6px 10px;font-size:0.62rem" data-open-doc="${c.id}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> REPORT</button>
          <button type="button" class="btn btn-cyan" style="padding:6px 10px;font-size:0.62rem" data-open-dossier="${c.id}">OPEN CASE ↗</button>
        </div>
      </div>
    ` : "";
  }).join("");

  const linkedEvdHtml = a.evidenceIds.map(eid => {
    const ev = findEvidence(eid);
    return ev ? `<button type="button" class="link-chip" style="margin:0 6px 6px 0" data-open-evidence="${ev.id}"><i class="fa-solid fa-microscope" aria-hidden="true"></i> ${ev.id}: ${ev.title} ↗</button>` : "";
  }).join("");

  const linkedRealitiesHtml = a.realityIds.map(rid => {
    const r = findReality(rid);
    return r ? `<button type="button" class="link-chip" style="margin:0 6px 6px 0;border-color:var(--purple-border);color:#d8b4fe" data-open-reality="${r.id}"><i class="fa-solid fa-globe" aria-hidden="true"></i> ${r.id} (${r.designation}) ↗</button>` : "";
  }).join("");

  container.innerHTML = `
    <div class="dossier-header">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap">
        <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">
          <div class="agent-avatar" style="width:96px;height:96px">${getAgentAvatarSVG(a)}</div>
          <div>
            <p class="eyebrow">PERSONNEL FILE // ${a.agentId} // ${a.profileClass}</p>
            <h2 class="section-title" style="margin-bottom:6px">OPERATIVE <em>${a.codename}</em></h2>
            <div class="mono muted">${a.designation} &nbsp;|&nbsp; ${a.division}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span class="badge ${clrBadge}">CLEARANCE: ${a.clearance}</span>
          <span class="badge badge-cyan">${a.rank}</span>
          <span class="badge badge-emerald">STATUS: ${a.status}</span>
        </div>
      </div>
    </div>

    <div class="dossier-grid">
      <div>
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>01 // OPERATIVE BIOGRAPHY &amp; SPECIALISATION</h3>
          <p style="color:var(--text-secondary);margin:0 0 14px">${a.bio}</p>
          <div style="padding:12px;background:var(--bg-void);border:1px solid var(--line);font-family:var(--mono);font-size:0.74rem;margin-bottom:14px">
            <div><strong>PRIMARY SPECIALISATION:</strong> ${a.specialisation}</div>
            <div style="margin-top:6px"><strong>CURRENT ASSIGNMENT:</strong> ${a.currentAssignment}</div>
            <div style="margin-top:6px"><strong>KNOWN AFFILIATIONS:</strong> ${a.affiliations}</div>
          </div>
          ${(["ALPHA-00", "ALPHA-01", "ALPHA-02"].includes(a.codename)) ? `
            <div style="margin-top:14px;border:1px solid var(--line-bright);background:var(--bg-void);padding:12px">
              <div class="mono" style="color:var(--cyber-cyan);font-size:0.65rem;margin-bottom:8px"><i class="fa-solid fa-user-Astronaut" aria-hidden="true"></i> CLASSIFIED FIELD GEAR &amp; TACTICAL TURNAROUND SHEET // ${a.codename}</div>
              <img src="assets/sheet-${a.codename.toLowerCase()}.jpg" alt="Full tactical turnaround character sheet for ${a.codename}" loading="lazy" style="width:100%;border:1px solid var(--line)">
            </div>
          ` : ""}
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>02 // ASSOCIATED INVESTIGATION DOSSIERS (${a.caseIds.length})</h3>
          ${linkedCasesHtml}
        </div>
      </div>

      <div>
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>03 // PERSONNEL METADATA LEDGER</h3>
          <table class="doc-meta-table" style="margin-bottom:0">
            <tbody>
              <tr><th>AGENT CODENAME</th><td class="mono"><strong>${a.codename}</strong></td></tr>
              <tr><th>AGENT ID</th><td class="mono">${a.agentId}</td></tr>
              <tr><th>GENDER PRESENTATION</th><td>${a.genderPresentation}</td></tr>
              <tr><th>DIVISION</th><td class="mono">${a.division}</td></tr>
              <tr><th>RANK</th><td class="mono">${a.rank}</td></tr>
              <tr><th>CLEARANCE LEVEL</th><td class="mono">${a.clearance}</td></tr>
              <tr><th>OPERATIONAL STATUS</th><td class="mono">${a.status}</td></tr>
              <tr><th>PROFILE CLASSIFICATION</th><td class="mono">${a.profileClass}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>04 // LOGGED EVIDENCE &amp; REALITY NODES</h3>
          <div class="mono muted" style="font-size:0.65rem;margin-bottom:6px">EVIDENCE CUSTODY RECORDS:</div>
          <div style="margin-bottom:14px">${linkedEvdHtml}</div>
          <div class="mono muted" style="font-size:0.65rem;margin-bottom:6px">MONITORED REALITIES:</div>
          <div>${linkedRealitiesHtml}</div>
        </div>
      </div>
    </div>
  `;

  switchView("agent-detail");
}

// 11. MULTIVERSE INDEX & REALITY DETAIL RENDERER
function renderMultiverseIndex() {
  const svgStage = document.getElementById("multiverse-svg-map");
  const cardsGrid = document.getElementById("multiverse-grid");
  const tableBody = document.getElementById("multiverse-table-body");

  if (svgStage) {
    const nodesMarkup = REALITY_DATABASE.map(r => `
      <g class="mv-node-group" tabindex="0" role="button" aria-label="Open ${r.id} ${r.designation}" data-open-reality="${r.id}">
        <circle class="mv-outer" cx="${r.mapX}" cy="${r.mapY}" r="36" fill="#080d16" stroke="${r.nodeColor}" stroke-width="2"/>
        <circle cx="${r.mapX}" cy="${r.mapY}" r="26" fill="none" stroke="${r.nodeColor}" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
        <circle cx="${r.mapX}" cy="${r.mapY}" r="6" fill="${r.nodeColor}"/>
        <text x="${r.mapX}" y="${r.mapY - 46}" text-anchor="middle" fill="#ecf1f6" font-family="monospace" font-size="12" font-weight="bold">${r.id}</text>
        <text x="${r.mapX}" y="${r.mapY + 54}" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="10">${r.designation}</text>
      </g>
    `).join("");

    svgStage.innerHTML = `
      <defs>
        <pattern id="mvGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34,211,238,0.08)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="1000" height="360" fill="url(#mvGrid)"/>
      <!-- Timeline Connection Branches -->
      <path d="M 210 180 C 350 180, 380 95, 520 95" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="7 4"/>
      <path d="M 210 180 C 350 180, 380 265, 520 265" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <path d="M 520 95 C 660 95, 680 180, 810 180" fill="none" stroke="#e62e3a" stroke-width="1.8" stroke-dasharray="5 5"/>
      <path d="M 520 265 C 660 265, 680 180, 810 180" fill="none" stroke="#e62e3a" stroke-width="1.8" stroke-dasharray="5 5"/>
      <line x1="210" y1="180" x2="810" y2="180" stroke="rgba(34,211,238,0.28)" stroke-width="1.5" stroke-dasharray="3 6"/>
      ${nodesMarkup}
    `;
  }

  if (cardsGrid) {
    cardsGrid.innerHTML = REALITY_DATABASE.map(r => {
      const caseChips = r.caseIds.map(cid => `<button type="button" class="link-chip" style="padding:3px 7px;font-size:0.6rem" data-open-dossier="${cid}">${cid}</button>`).join(" ");
      const agentChips = r.agentIds.map(aid => `<button type="button" class="link-chip" style="padding:3px 7px;font-size:0.6rem" data-open-agent="${aid}">${aid}</button>`).join(" ");
      return `
        <article class="case-card cyber-neon-border" data-reality-id="${r.id}" data-augmented-ui="tl-clip br-clip border">
          <div class="case-body">
            <div class="case-meta-row">
              <span><strong>${r.id}</strong></span>
              <span class="badge badge-purple">${r.status}</span>
            </div>
            <h3>${r.designation}</h3>
            <div class="mono" style="color:var(--cyan);font-size:0.68rem;margin-bottom:8px">${r.name}</div>
            <p>${r.description} ${r.observations}</p>
            <div style="margin-bottom:10px">
              <div class="mono muted" style="font-size:0.6rem;margin-bottom:4px">ASSOCIATED CASES:</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:8px">${caseChips}</div>
              <div class="mono muted" style="font-size:0.6rem;margin-bottom:4px">KNOWN AGENTS:</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap">${agentChips}</div>
            </div>
            <div class="case-foot">
              <span class="mono">${r.timelineClass}</span>
              <button type="button" class="btn btn-cyan" style="padding:6px 12px;font-size:0.64rem" data-open-reality="${r.id}">INSPECT REALITY ↗</button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  if (tableBody) {
    tableBody.innerHTML = REALITY_DATABASE.map(r => `
      <tr>
        <td class="mono"><strong>${r.id}</strong></td>
        <td><strong>${r.designation}</strong><br><small class="muted">${r.name}</small></td>
        <td class="mono">${r.timelineClass}</td>
        <td><span class="badge badge-purple">${r.status}</span></td>
        <td class="mono"><button type="button" class="link-chip" data-open-dossier="${r.originCaseId}">${r.originCaseId} ↗</button></td>
        <td><button type="button" class="btn btn-cyan" style="padding:5px 10px;font-size:0.62rem" data-open-reality="${r.id}">OPEN PROFILE ↗</button></td>
      </tr>
    `).join("");
  }
}

function openRealityDetail(realityId) {
  const r = findReality(realityId) || REALITY_DATABASE[0];
  const container = document.getElementById("reality-detail-content");
  if (!container) return;

  const caseBlocks = r.caseIds.map(cid => {
    const c = findCase(cid);
    return c ? `
      <div style="padding:12px;background:var(--bg-void);border:1px solid var(--line-bright);border-radius:3px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
        <div>
          <div class="mono" style="color:var(--cyan);font-size:0.66rem">${c.id} // ${c.className}</div>
          <strong>${c.title}</strong>
        </div>
        <div style="display:flex;gap:6px">
          <button type="button" class="btn btn-ghost" style="padding:6px 10px;font-size:0.62rem" data-open-doc="${c.id}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> CASE DOC</button>
          <button type="button" class="btn btn-cyan" style="padding:6px 10px;font-size:0.62rem" data-open-dossier="${c.id}">OPEN DOSSIER ↗</button>
        </div>
      </div>
    ` : "";
  }).join("");

  const agentChips = r.agentIds.map(aid => `<button type="button" class="link-chip" style="margin:0 6px 6px 0" data-open-agent="${aid}"><i class="fa-solid fa-user-secret" aria-hidden="true"></i> ${aid} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>`).join("");
  const relChips = r.relatedRealityIds.map(rid => `<button type="button" class="link-chip" style="margin:0 6px 6px 0;border-color:var(--purple-border);color:#d8b4fe" data-open-reality="${rid}"><i class="fa-solid fa-globe" aria-hidden="true"></i> ${rid} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>`).join("");

  container.innerHTML = `
    <div class="dossier-header">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap">
        <div>
          <p class="eyebrow">MULTIVERSE INDEX RECORD // FICTIONAL STORY-WORLD DATA</p>
          <h2 class="section-title" style="margin-bottom:8px">${r.id}: <em>${r.designation}</em></h2>
          <div class="mono muted">${r.name} &nbsp;|&nbsp; DISCOVERED: ${r.discoveryDate}</div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span class="badge badge-purple">${r.status}</span>
          <span class="badge badge-cyan">${r.timelineClass}</span>
          <span class="badge badge-red">${r.accessClass}</span>
        </div>
      </div>
    </div>

    <div class="dossier-grid">
      <div>
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>01 // REALITY DESCRIPTION &amp; SCIENTIFIC OBSERVATIONS</h3>
          <p style="color:var(--text);margin:0 0 12px">${r.description}</p>
          <p style="color:var(--text-secondary);margin:0"><strong>Directorate Telemetry Observations:</strong> ${r.observations}</p>
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>02 // ASSOCIATED ANOMALY CASES &amp; OFFICIAL REPORTS (${r.caseIds.length})</h3>
          ${caseBlocks}
        </div>
      </div>

      <div>
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>03 // REALITY METADATA TABLE</h3>
          <table class="doc-meta-table" style="margin-bottom:0">
            <tbody>
              <tr><th>REALITY ID</th><td class="mono"><strong>${r.id}</strong></td></tr>
              <tr><th>DESIGNATION</th><td class="mono">${r.designation}</td></tr>
              <tr><th>REALITY TYPE</th><td>${r.type}</td></tr>
              <tr><th>TIMELINE CLASS</th><td class="mono">${r.timelineClass}</td></tr>
              <tr><th>ORIGIN CASE</th><td class="mono"><button type="button" class="link-chip" data-open-dossier="${r.originCaseId}">${r.originCaseId} ↗</button></td></tr>
              <tr><th>ASSOCIATED ANOMALY</th><td>${r.associatedAnomaly}</td></tr>
              <tr><th>ACCESS CLASSIFICATION</th><td class="mono">${r.accessClass}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>04 // ASSIGNED OPERATIVES &amp; CONNECTED REALITIES</h3>
          <div class="mono muted" style="font-size:0.65rem;margin-bottom:6px">KNOWN OPERATIVES:</div>
          <div style="margin-bottom:14px">${agentChips}</div>
          <div class="mono muted" style="font-size:0.65rem;margin-bottom:6px">CONNECTED TIMELINE BRANCHES:</div>
          <div>${relChips}</div>
        </div>
      </div>
    </div>
  `;

  switchView("reality-detail");
}

// 12. EVIDENCE ROOM & FORENSIC DETAIL RENDERER
function renderEvidenceRoom() {
  const grid = document.getElementById("evidence-grid");
  const countEl = document.getElementById("evidence-count");
  if (!grid) return;

  const q = (document.getElementById("evidence-search")?.value || "").trim().toLowerCase();
  const caseF = document.getElementById("evidence-filter-case")?.value || "ALL";
  const catF = document.getElementById("evidence-filter-cat")?.value || "ALL";
  const verF = document.getElementById("evidence-filter-ver")?.value || "ALL";
  const sortOrder = document.getElementById("evidence-sort-date")?.value || "DESC";

  const filtered = EVIDENCE_DATABASE.filter(ev => {
    if (ev.isPrivate) return false;
    const matchQ = !q ||
      ev.id.toLowerCase().includes(q) ||
      ev.title.toLowerCase().includes(q) ||
      ev.description.toLowerCase().includes(q) ||
      ev.caseId.toLowerCase().includes(q) ||
      ev.agentId.toLowerCase().includes(q);
    const matchCase = caseF === "ALL" || ev.caseId === caseF;
    const matchCat = catF === "ALL" || ev.category === catF;
    const matchVer = verF === "ALL" || ev.verificationStatus.includes(verF);
    return matchQ && matchCase && matchCat && matchVer;
  }).sort((a, b) => {
    return sortOrder === "ASC"
      ? a.collectionDate.localeCompare(b.collectionDate)
      : b.collectionDate.localeCompare(a.collectionDate);
  });

  if (countEl) {
    countEl.textContent = `SHOWING ${filtered.length} OF ${EVIDENCE_DATABASE.length} FORENSIC EVIDENCE ITEMS`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="dossier-block" style="grid-column:1/-1;text-align:center;padding:36px">
        <h3>NO MATCHING EVIDENCE RECORDS</h3>
        <p class="muted">Reset filters or search for EVD-001A, LiDAR, Silver-Gelatin, or Cesium.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(ev => `
    <article class="case-card cyber-neon-border" data-evidence-id="${ev.id}" data-augmented-ui="tl-clip br-clip border">
      <div class="case-body">
        <div class="case-meta-row">
          <span><strong>${ev.id}</strong> // ${ev.collectionDate}</span>
          <span class="badge badge-cyan">${ev.category}</span>
        </div>
        <h3 style="font-size:1.38rem">${ev.title}</h3>
        <p>${ev.description}</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
          <button type="button" class="link-chip" data-open-dossier="${ev.caseId}"><i class="fa-solid fa-folder-open" aria-hidden="true"></i> CASE: ${ev.caseId}</button>
          <button type="button" class="link-chip" data-open-agent="${ev.agentId}"><i class="fa-solid fa-user-secret" aria-hidden="true"></i> AGENT: ${ev.agentId}</button>
        </div>
        <div class="case-foot">
          <span class="mono" style="color:var(--emerald)">● ${ev.verificationStatus.split("—")[0]}</span>
          <button type="button" class="btn btn-cyan" style="padding:6px 12px;font-size:0.63rem" data-open-evidence="${ev.id}">INSPECT &amp; PREVIEW ↗</button>
        </div>
      </div>
    </article>
  `).join("");
}

function getEvidenceInteractivePreviewHTML(ev) {
  if (ev.previewType === "audio") {
    return `
      <div class="preview-stage-box" data-augmented-ui="tl-clip br-clip border">
        <div class="mono" style="color:var(--cyan);margin-bottom:8px"><i class="fa-solid fa-Headphones" aria-hidden="true"></i> HOWLER.JS FORENSIC AUDIO LOG PLAYER // ${ev.fileType}</div>
        <div style="display:grid;grid-template-columns:180px 1fr;gap:16px;align-items:center;margin-bottom:14px">
          <img src="assets/case-audio-01-cover.jpg" alt="Case File 01 Forensic Audio Cover" loading="lazy" style="width:100%;border:1px solid var(--line-bright)">
          <div>
            <div class="wave-bars" aria-hidden="true" style="margin:0 0 10px">▂ ▅ ▃ ▇ ▂ ▄ ▆ ▂ ▇ ▃ ▅ ▂ ▆ ▄ ▂ ▇ ▃ ▅ ▇ ▄ ▂ ▆</div>
            <audio controls preload="none" src="assets/audio/case-file-01.mp3" style="width:100%;margin-bottom:8px"></audio>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button type="button" class="btn btn-primary" data-play-track="case-01"><i class="fa-solid fa-play" aria-hidden="true"></i> STREAM IN HOWLER DECK</button>
              <button type="button" class="btn btn-cyan" id="evd-play-audio-btn"><i class="fa-solid fa-wave-square" aria-hidden="true"></i> 09.71 MHz CARRIER PULSE</button>
            </div>
          </div>
        </div>
        <span class="mono muted">MASTER ARCHIVE LOG: 02:57.96 | SUB-CARRIER: 1,420 Hz BAUDOT</span>
      </div>
    `;
  }
  if (ev.previewType === "image-dig" || ev.previewType === "image-mem" || ev.previewType === "image-env") {
    const c = findCase(ev.caseId) || CASE_DATABASE[0];
    const hasCase02Audio = ev.caseId === "ANV-ENT-002";
    return `
      <div class="preview-stage-box" data-augmented-ui="tl-clip br-clip border">
        <div class="mono" style="color:var(--cyan);margin-bottom:8px"><i class="fa-solid fa-eye" aria-hidden="true"></i> OPTICAL / SPECTRAL IMAGE PREVIEW // ${ev.fileType}</div>
        <div class="case-thumb" style="height:290px;border:1px solid var(--line-bright);margin-bottom:${hasCase02Audio ? '14px' : '0'}">
          ${getCaseArtworkMarkup(c)}
        </div>
        ${hasCase02Audio ? `
          <div style="padding:12px;background:var(--bg-elevated);border:1px solid var(--line-bright)">
            <div class="mono" style="color:var(--cyber-magenta);margin-bottom:6px"><i class="fa-solid fa-volume-high" aria-hidden="true"></i> LINKED CASE FILE 02 AUDIO LOG &amp; "BEHIND THE GLASS" SOUNDTRACK</div>
            <audio controls preload="none" src="assets/audio/case-file-02.mp3" style="width:100%;margin-bottom:8px"></audio>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button type="button" class="btn btn-cyan" data-play-track="case-02"><i class="fa-solid fa-play" aria-hidden="true"></i> STREAM CASE 02 LOG</button>
              <button type="button" class="btn btn-purple" data-play-track="behind-the-glass"><i class="fa-solid fa-music" aria-hidden="true"></i> PLAY "BEHIND THE GLASS"</button>
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }
  if (ev.previewType === "video") {
    return `
      <div class="preview-stage-box">
        <div class="mono" style="color:var(--cyan);margin-bottom:8px">OPTICAL-LATTICE CCTV TELEMETRY STREAM // ${ev.fileType}</div>
        <div style="background:#05080d;border:1px solid var(--line-bright);padding:24px;text-align:center;position:relative">
          <div class="mono" style="color:var(--red);font-size:0.7rem;margin-bottom:10px">● REC // CAM-02 VAULT C1/C2 CORRIDOR // FRAME SYNC DELTA: +48.004s</div>
          <video controls playsinline preload="none" poster="assets/anvesh-keyart-banner.jpg" src="assets/anvesh-intro-stinger.mp4" style="width:100%;max-height:280px;border:1px solid var(--cyan-border)"></video>
        </div>
      </div>
    `;
  }
  if (ev.previewType === "document" || ev.previewType === "forensics" || ev.previewType === "transmission" || ev.previewType === "reading") {
    return `
      <div class="preview-stage-box">
        <div class="mono" style="color:var(--cyan);margin-bottom:8px">DECLASSIFIED TERMINAL READOUT // ${ev.fileType}</div>
        <pre style="margin:0;padding:14px;background:#05080d;border:1px solid var(--line);color:var(--text);font-family:var(--mono);font-size:0.72rem;overflow-x:auto">RECORD ID    : ${ev.id} (${ev.attachmentRef})
PARENT CASE  : ${ev.caseId}
SOURCE ORIGIN: ${ev.source}
LOGGED BY    : ${ev.agentId} ON ${ev.collectionDate}
STATUS       : ${ev.verificationStatus}
------------------------------------------------------------------------
TELEMETRY EXTRACT:
${ev.description}
[FICTIONAL ARCHIVE RECORD — SIMULATED FORENSIC READOUT]</pre>
      </div>
    `;
  }
  return `
    <div class="preview-stage-box" style="text-align:center;padding:32px">
      <span class="badge badge-amber">PHYSICAL ARTIFACT IN CONTAINMENT VAULT</span>
      <h4 style="font-family:var(--display);font-size:1.4rem;margin:10px 0 6px">PHYSICAL OBJECT LOGGED (${ev.attachmentRef})</h4>
      <p style="color:var(--text-secondary);font-size:0.86rem;margin:0">This item is a physical three-dimensional specimen stored inside Anomaly Containment (DIV-03). Digital media preview is replaced by physical telemetry ledger below.</p>
    </div>
  `;
}

function openEvidenceDetail(evdId) {
  const ev = findEvidence(evdId) || EVIDENCE_DATABASE[0];
  if (ev.isPrivate) {
    switchView("403");
    return;
  }
  const container = document.getElementById("evidence-detail-content");
  if (!container) return;

  const parentCase = findCase(ev.caseId);
  const agentObj = findAgent(ev.agentId);

  container.innerHTML = `
    <div class="dossier-header">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap">
        <div>
          <p class="eyebrow">FORENSIC EVIDENCE RECORD // ${ev.attachmentRef}</p>
          <h2 class="section-title" style="margin-bottom:8px">${ev.id}: <em>${ev.title}</em></h2>
          <div class="mono muted">CATEGORY: ${ev.category} &nbsp;|&nbsp; COLLECTED: ${ev.collectionDate} &nbsp;|&nbsp; SOURCE: ${ev.source}</div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span class="badge badge-emerald">${ev.verificationStatus}</span>
          <span class="badge badge-red">${ev.classification}</span>
        </div>
      </div>
    </div>

    <div class="dossier-grid">
      <div>
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>01 // INTERACTIVE EVIDENCE PREVIEW</h3>
          ${getEvidenceInteractivePreviewHTML(ev)}
          <p style="color:var(--text-secondary);margin:0">${ev.description}</p>
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>02 // 6-STAGE FICTIONAL CHAIN-OF-CUSTODY LOG</h3>
          <p class="mono muted" style="font-size:0.64rem;margin:0 0 10px">TRANSPARENCY NOTICE: Chain-of-custody labels below are fictional story-world tracking markers, not cryptographic file hashes.</p>
          <div class="custody-steps">
            <div class="custody-step-box"><div style="color:var(--cyan)">STEP 01</div><strong>REGISTERED</strong><div class="muted">${ev.collectionDate}</div></div>
            <div class="custody-step-box"><div style="color:var(--cyan)">STEP 02</div><strong>ID ASSIGNED</strong><div class="muted">${ev.id}</div></div>
            <div class="custody-step-box"><div style="color:var(--cyan)">STEP 03</div><strong>REVIEWED</strong><div class="muted">By ${ev.agentId}</div></div>
            <div class="custody-step-box"><div style="color:var(--cyan)">STEP 04</div><strong>VERIFIED</strong><div class="muted">DIV-02 Lab</div></div>
            <div class="custody-step-box"><div style="color:var(--cyan)">STEP 05</div><strong>CASE LINKED</strong><div class="muted">${ev.caseId}</div></div>
            <div class="custody-step-box"><div style="color:var(--cyan)">STEP 06</div><strong>ARCHIVED</strong><div class="muted">Vault Custody</div></div>
          </div>
        </div>
      </div>

      <div>
        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>03 // FORENSIC METADATA PANEL</h3>
          <table class="doc-meta-table" style="margin-bottom:0">
            <tbody>
              <tr><th>EVIDENCE ID</th><td class="mono"><strong>${ev.id}</strong></td></tr>
              <tr><th>ASSOCIATED CASE</th><td class="mono"><button type="button" class="link-chip" data-open-dossier="${ev.caseId}">${ev.caseId} ↗</button></td></tr>
              <tr><th>CATEGORY</th><td class="mono">${ev.category}</td></tr>
              <tr><th>FILE / FORMAT</th><td class="mono">${ev.fileType}</td></tr>
              <tr><th>COLLECTION DATE</th><td class="mono">${ev.collectionDate}</td></tr>
              <tr><th>ORIGIN / SOURCE</th><td>${ev.source}</td></tr>
              <tr><th>LOGGING OPERATIVE</th><td class="mono"><button type="button" class="link-chip" data-open-agent="${ev.agentId}">${ev.agentId} (${agentObj ? agentObj.designation : "Operative"}) ↗</button></td></tr>
              <tr><th>VERIFICATION</th><td class="mono">${ev.verificationStatus}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="dossier-block" data-augmented-ui="tl-clip br-clip border">
          <h3>04 // CONNECTED INVESTIGATION FILES</h3>
          <button type="button" class="btn btn-cyan" style="width:100%;margin-bottom:10px" data-open-dossier="${ev.caseId}">OPEN PARENT CASE (${ev.caseId}: ${parentCase ? parentCase.title : ""}) ↗</button>
          <button type="button" class="btn btn-primary" style="width:100%;margin-bottom:10px" data-open-doc="${ev.caseId}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> GENERATE OFFICIAL CASE DOCUMENT <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>
          <button type="button" class="btn btn-ghost" style="width:100%" data-open-agent="${ev.agentId}"><i class="fa-solid fa-user-secret" aria-hidden="true"></i> VIEW OPERATIVE ${ev.agentId} PROFILE <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("evd-play-audio-btn")?.addEventListener("click", triggerSignalTone);
  switchView("evidence-detail");
}

// 13. SAFE EXIT / OPT-OUT CONTROLLER
function applySafeExitState(enabled) {
  safeExitEnabled = Boolean(enabled);
  document.body.classList.toggle("safe-exit-active", safeExitEnabled);

  const btn = document.getElementById("safe-exit-btn");
  const banner = document.getElementById("safe-mode-banner");

  if (btn) {
    btn.setAttribute("aria-pressed", String(safeExitEnabled));
    btn.innerHTML = safeExitEnabled
      ? `<span><i class="fa-solid fa-eye-slash" aria-hidden="true"></i> SAFE EXIT: ACTIVE (RETURN TO IMMERSIVE)</span>`
      : `<span><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> SAFE EXIT / NEUTRAL VIEW</span>`;
  }

  if (banner) {
    banner.hidden = !safeExitEnabled;
  }

  if (safeExitEnabled && audioCtx) {
    try {
      audioCtx.close();
    } catch (e) {}
    audioCtx = null;
  }

  if (safeExitEnabled) {
    document.querySelectorAll("video").forEach(v => { try { v.pause(); } catch (e) {} });
  }
  setStoredState("anvesh_safe_exit", safeExitEnabled);
}

// 14. CASE SOLUTION CODE VALIDATION SYSTEM
function evaluateSolutionCode(rawInput) {
  const code = (rawInput || "").trim().toUpperCase();
  const loadingEl = document.getElementById("solution-loading");
  const outputEl = document.getElementById("solution-output");
  if (!outputEl) return;

  if (!code) {
    outputEl.hidden = false;
    outputEl.innerHTML = `
      <span class="badge badge-red">INPUT REQUIRED</span>
      <p style="margin:8px 0 0;color:var(--text-secondary)">Please enter a valid active ANVESH Solution Code (e.g., <code>AV-164-MV-GPT</code>).</p>
    `;
    return;
  }

  if (loadingEl && !safeExitEnabled) {
    loadingEl.hidden = false;
  }
  outputEl.hidden = true;

  const delay = safeExitEnabled ? 20 : 420;
  window.setTimeout(() => {
    if (loadingEl) loadingEl.hidden = true;
    outputEl.hidden = false;

    const record = SOLUTION_CODES[code];
    if (!record || record.isPrivate) {
      if (window.AnveshAudio) window.AnveshAudio.playSprite("error");
      const isPriv = Boolean(record && record.isPrivate);
      outputEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px">
          <span class="badge badge-red">${isPriv ? "PRIVATE FILE // CLEARANCE RESTRICTED" : "ACCESS DENIED // UNRECOGNIZED CODE"}</span>
          <span class="mono muted">QUERY: ${code.replace(/[<>&"']/g, "")}</span>
        </div>
        <h3 style="margin:6px 0;font-family:var(--display);font-size:1.4rem">${isPriv ? "CASE FILE SET TO PRIVATE" : "NO MATCHING SOLUTION RECORD FOUND"}</h3>
        <p style="color:var(--text-secondary);font-size:0.88rem;margin:0 0 10px">${isPriv
          ? 'This archive record is currently private. For clearance inquiries, contact <a href="mailto:anveshdirectorate@proton.me" style="color:var(--cyan)">anveshdirectorate@proton.me</a>, or enter active Case File key <strong>AV-164-MV-GPT</strong>.'
          : 'The code entered does not match an active public record. Try the active Case File AV-164 key: <strong>AV-164-MV-GPT</strong>.'}</p>
      `;
      return;
    }

    if (window.AnveshAudio) window.AnveshAudio.playSprite("decrypt");
    if (code === "ALPHA-00") {
      alphaUnlocked = true;
      renderArchiveCases();
    }

    outputEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px">
        <span class="badge badge-emerald"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> ${record.status}</span>
        <span class="badge badge-purple">${record.code}</span>
      </div>
      <h3 style="margin:4px 0 8px;font-family:var(--display);font-size:1.6rem">${record.caseTitle}</h3>
      <p class="mono" style="color:var(--cyan);margin:0 0 10px">${record.channelNote}</p>
      ${record.linkedCaseId === "AV-164" ? `
      <div style="margin:12px 0 14px;padding:14px;border:1px solid rgba(34,211,238,0.45);background:rgba(8,14,24,0.92);border-radius:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px">
          <span class="badge badge-cyan">🔓 SPECIAL TOOL UNLOCKED // NEXT USER IDENTIFIER</span>
          <span class="mono muted" style="font-size:0.72rem">LINKED KEY: AV-164-MV-GPT</span>
        </div>
        <p style="color:var(--text-secondary);font-size:0.84rem;margin:0 0 10px">Run the File AV-164 automated suspect scanner to check who the 03:14 AM "Hi!" relay targets next.</p>
        <div id="key-next-user-readout" class="mono" style="padding:12px;background:#05080f;border:1px solid rgba(255,56,86,0.35);border-radius:6px;margin-bottom:10px;font-size:0.84rem;color:var(--cyan)">STATUS: READY // CLICK SCAN TO TRACE NEXT TARGET</div>
        <button type="button" class="btn btn-primary" onclick="runKeyNextUserScan()"><i class="fa-solid fa-crosshairs" aria-hidden="true"></i> RUN NEXT USER SCANNER</button>
      </div>
      <div class="yt-embed-wrap" style="margin:12px 0 14px">
        <iframe src="https://www.youtube-nocookie.com/embed/wKXK__x7PQg?rel=0" title="File AV-164 Briefing Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="anv-gif-strip-wrap" style="margin-bottom:12px">
        <img src="assets/anim-key-glitch.gif" alt="AV-164-MV-GPT Signal Intercept" class="anv-hud-gif" loading="lazy">
      </div>` : ""}
      ${record.linkedCaseId === "AV-165" ? `
      <div style="margin:12px 0 14px;padding:12px;border:1px solid rgba(255,206,68,0.55);background:rgba(12,10,16,0.92);border-radius:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px">
          <span class="badge badge-red">⚠ EASTER EGG UNLOCKED // SHERU BHAI SIGNAL HIJACK</span>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span class="mono" style="color:var(--gold,#ffce44);font-size:0.75rem">KEY: AV-165-G-SHERU</span><button type="button" class="loop-toggle-btn" data-toggle-loop="true" aria-pressed="true"><i class="fa-solid fa-repeat" aria-hidden="true"></i> LOOP: ON</button></div>
        </div>
        <video id="av165-meme-easter-egg" src="assets/av165-sheru-meme.mp4" controls autoplay loop playsinline style="width:100%;border-radius:8px;border:1px solid rgba(255,56,86,0.5);background:#000;display:block"></video>
        <p class="mono muted" style="font-size:0.72rem;margin:8px 0 0">ALPHA-2 OVERRIDE: "Alpha-1... why is a billionaire lion dancing on an official Directorate feed?!"</p>
      </div>
      <div class="yt-embed-wrap" style="margin:12px 0 14px">
        <iframe src="https://www.youtube-nocookie.com/embed/BXdKz6VmglY?rel=0" title="File AV-165 Full Episode" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>` : ""}
      <p style="color:var(--text-secondary);font-size:0.9rem;margin:0 0 10px"><strong>Case Summary &amp; Override Log:</strong> ${record.explanation}</p>
      <p style="color:var(--text);font-size:0.9rem;margin:0 0 16px"><strong>Resolution:</strong> ${record.resolution}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button type="button" class="btn btn-cyan" data-open-dossier="${record.linkedCaseId}">OPEN LINKED CASE (${record.linkedCaseId}) ↗</button>
        <button type="button" class="btn btn-primary" data-open-doc="${record.linkedCaseId}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> GENERATE OFFICIAL CASE DOCUMENT <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>
        <a href="${record.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">RELATED CHANNEL / VIDEO ↗</a>
      </div>
    `;
    if (window.applyAnveshLoopState) window.applyAnveshLoopState();
    if (record.linkedCaseId === "AV-165" && !safeExitEnabled) {
      const memeVid = document.getElementById("av165-meme-easter-egg");
      if (memeVid) {
        memeVid.currentTime = 0;
        const p = memeVid.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => { memeVid.muted = true; memeVid.play().catch(() => {}); });
        }
      }
    }
  }, delay);
}

// 15. USER-INITIATED WEB AUDIO SIGNAL SYNTHESIZER
function triggerSignalTone() {
  const statusEl = document.getElementById("audio-status-label");
  if (safeExitEnabled) {
    if (statusEl) statusEl.textContent = "AUDIO MUTED (SAFE EXIT ACTIVE)";
    return;
  }
  if (window.AnveshAudio) {
    window.AnveshAudio.playSprite("calibrate");
  }
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(528, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(971, audioCtx.currentTime + 0.18);
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.45);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.52);

    if (statusEl) {
      statusEl.textContent = "09.71 MHz PULSE TRANSMITTED";
      window.setTimeout(() => {
        statusEl.textContent = "SYNTHESIZE 09.71 MHz TONE";
      }, 1800);
    }
  } catch (e) {
    if (statusEl) statusEl.textContent = "AUDIO UNAVAILABLE";
  }
}

// 16. EASTER EGG MODAL CONTROLLER
function showEasterEggModal(title, subtitle, bodyHtml) {
  const modal = document.getElementById("easter-egg-modal");
  const titleEl = document.getElementById("egg-modal-title");
  const subEl = document.getElementById("egg-modal-sub");
  const bodyEl = document.getElementById("egg-modal-body");
  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = title;
  if (subEl) subEl.textContent = subtitle;
  bodyEl.innerHTML = bodyHtml;
  modal.hidden = false;
}

function unlockAlphaZeroEasterEgg(sourceLabel) {
  alphaUnlocked = true;
  renderArchiveCases();
  showEasterEggModal(
    "OMEGA DIRECTIVE UNSEALED // ALPHA-00",
    `TRIGGERED VIA: ${sourceLabel}`,
    `<p style="color:var(--text-secondary)">You have discovered a hidden Directorate clearance sequence. Restricted Dossier <strong>ANV-CLS-000 (Protocol ALPHA-00: The First Breach)</strong> and Operative Profile <strong>ALPHA-00</strong> are unlocked.</p>
     <blockquote style="border-left:3px solid var(--red);padding-left:14px;margin:14px 0;font-family:var(--mono);color:var(--cyan)">"Every reality leaves an echo. Node IND-01 is only the first listening post."</blockquote>
     <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
       <button type="button" class="btn btn-primary" data-open-dossier="ANV-CLS-000" id="egg-open-alpha-btn">OPEN FILE ANV-CLS-000 ↗</button>
       <button type="button" class="btn btn-cyan" data-open-agent="ALPHA-00">INSPECT AGENT ALPHA-00 ↗</button>
       <button type="button" class="btn btn-ghost" id="egg-close-inline-btn">CONTINUE BROWSING</button>
     </div>`
  );
}

// 17. HTML5 CANVAS MULTIVERSE PARTICLE & PORTAL FIELD
function initPortalCanvas() {
  const canvas = document.getElementById("portal-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  const particles = [];

  function resize() {
    const rect = canvas.parentElement?.getBoundingClientRect();
    width = canvas.width = rect ? rect.width : window.innerWidth;
    height = canvas.height = rect ? rect.height : 620;
  }

  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 42; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      hue: i % 3 === 0 ? "rgba(34, 211, 238, 0.55)" : i % 3 === 1 ? "rgba(168, 85, 247, 0.5)" : "rgba(230, 46, 58, 0.45)"
    });
  }

  function draw() {
    if (safeExitEnabled) {
      ctx.clearRect(0, 0, width, height);
      return;
    }
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.hue;
      ctx.fill();
    }
    portalAnimId = window.requestAnimationFrame(draw);
  }

  if (portalAnimId) window.cancelAnimationFrame(portalAnimId);
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReduced) {
    draw();
  }
}

// 18. INITIALIZE APPLICATION & GLOBAL EVENT DELEGATION
function initAnveshApp() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  try {
    const savedSafeExit = getStoredState("anvesh_safe_exit", false);
    applySafeExitState(savedSafeExit);
  } catch (err) { console.error("[ANVESH] SafeExit init error:", err); }

  // Initial Renders across all connected ecosystems (isolated so no single view can ever block buttons)
  [
    ["renderFeaturedCases", renderFeaturedCases],
    ["renderArchiveCases", renderArchiveCases],
    ["renderAgentRegistry", renderAgentRegistry],
    ["renderMultiverseIndex", renderMultiverseIndex],
    ["renderEvidenceRoom", renderEvidenceRoom],
    ["initPortalCanvas", initPortalCanvas]
  ].forEach(([name, fn]) => {
    try { fn(); } catch (err) { console.error(`[ANVESH] ${name} error:`, err); }
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  // Safe Exit Buttons
  document.getElementById("safe-exit-btn")?.addEventListener("click", () => {
    applySafeExitState(!safeExitEnabled);
    if (!safeExitEnabled) initPortalCanvas();
  });

  document.getElementById("restore-immersive-btn")?.addEventListener("click", () => {
    applySafeExitState(false);
    initPortalCanvas();
  });

  // Case Archive Filters
  ["archive-search", "filter-class", "filter-priority", "filter-status"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", renderArchiveCases);
      el.addEventListener("change", renderArchiveCases);
    }
  });

  document.getElementById("reset-filters-btn")?.addEventListener("click", () => {
    const s = document.getElementById("archive-search");
    const c = document.getElementById("filter-class");
    const p = document.getElementById("filter-priority");
    const st = document.getElementById("filter-status");
    if (s) s.value = "";
    if (c) c.value = "ALL";
    if (p) p.value = "ALL";
    if (st) st.value = "ALL";
    renderArchiveCases();
  });

  // Agent Registry Filters
  ["agent-search", "agent-filter-division", "agent-filter-rank", "agent-filter-clearance", "agent-filter-status"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", renderAgentRegistry);
      el.addEventListener("change", renderAgentRegistry);
    }
  });

  document.getElementById("reset-agent-filters-btn")?.addEventListener("click", () => {
    ["agent-search", "agent-filter-division", "agent-filter-rank", "agent-filter-clearance", "agent-filter-status"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = id === "agent-search" ? "" : "ALL";
    });
    renderAgentRegistry();
  });

  // Evidence Room Filters
  ["evidence-search", "evidence-filter-case", "evidence-filter-cat", "evidence-filter-ver", "evidence-sort-date"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", renderEvidenceRoom);
      el.addEventListener("change", renderEvidenceRoom);
    }
  });

  document.getElementById("reset-evidence-filters-btn")?.addEventListener("click", () => {
    const s = document.getElementById("evidence-search");
    const c = document.getElementById("evidence-filter-case");
    const cat = document.getElementById("evidence-filter-cat");
    const v = document.getElementById("evidence-filter-ver");
    const d = document.getElementById("evidence-sort-date");
    if (s) s.value = "";
    if (c) c.value = "ALL";
    if (cat) cat.value = "ALL";
    if (v) v.value = "ALL";
    if (d) d.value = "DESC";
    renderEvidenceRoom();
  });

  // Official Case Document Controls
  document.getElementById("doc-case-selector")?.addEventListener("change", e => {
    openOfficialCaseDocument(e.target.value);
  });

  document.getElementById("doc-print-btn")?.addEventListener("click", () => {
    window.print();
  });

  document.getElementById("doc-download-html-btn")?.addEventListener("click", () => {
    downloadOfficialCaseReport("html");
  });

  document.getElementById("doc-download-txt-btn")?.addEventListener("click", () => {
    downloadOfficialCaseReport("txt");
  });

  // Multiverse View Switcher (Visual Map vs Accessible Table)
  document.getElementById("mv-toggle-table-btn")?.addEventListener("click", () => {
    const tbl = document.getElementById("multiverse-table-wrap");
    if (tbl) tbl.hidden = !tbl.hidden;
  });

  // Case Solution Form
  const solForm = document.getElementById("solution-form");
  if (solForm) {
    solForm.addEventListener("submit", e => {
      e.preventDefault();
      const input = document.getElementById("solution-code-input");
      evaluateSolutionCode(input ? input.value : "");
    });
  }

  const homeSolForm = document.getElementById("home-solution-form");
  if (homeSolForm) {
    homeSolForm.addEventListener("submit", e => {
      e.preventDefault();
      const homeInput = document.getElementById("home-solution-input");
      const mainInput = document.getElementById("solution-code-input");
      const val = homeInput ? homeInput.value : "AV-164-MV-GPT";
      if (mainInput) mainInput.value = val;
      switchView("solutions");
      evaluateSolutionCode(val);
    });
  }

  // Contact Form (Live Supabase Database Submission + Email Relay Fallback)
  const contactForm = document.getElementById("anomaly-report-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async e => {
      e.preventDefault();
      const feedback = document.getElementById("contact-feedback");
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const nameVal = (document.getElementById("report-name")?.value || "Observer").trim();
      const emailVal = (document.getElementById("report-email")?.value || "").trim();
      const typeVal = (document.getElementById("report-type")?.value || "General Feedback").trim();
      const msgVal = (document.getElementById("report-message")?.value || "").trim();
      const mailtoHref = `mailto:anveshdirectorate@proton.me?subject=${encodeURIComponent("[ANVESH Directorate] " + typeVal + " — " + nameVal)}&body=${encodeURIComponent(msgVal)}`;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "TRANSMITTING TO ARCHIVE...";
      }
      if (feedback) {
        feedback.hidden = false;
        feedback.innerHTML = `<span class="mono" style="color:var(--cyan)"><i class="fa-solid fa-rotate fa-spin" aria-hidden="true"></i> LOGGING DISPATCH TO ANVESH DATABASE...</span>`;
      }

      try {
        await submitContactDispatch({ name: nameVal, email: emailVal, category: typeVal, message: msgVal });
        if (feedback) {
          feedback.innerHTML = `
            <span class="badge badge-emerald">● STATUS: OPEN — DISPATCH RECORDED</span>
            <p style="margin:8px 0 10px;color:var(--text-secondary)">Thank you, <strong>${escapeHtml(nameVal)}</strong>. Your post (<em>${escapeHtml(typeVal)}</em>) is now live on the Directorate Dispatch Board as <strong>OPEN</strong>. Your email stays private in our database.</p>
            <a href="${mailtoHref}" class="btn btn-ghost" style="padding:6px 12px;font-size:0.68rem">ALSO SEND DIRECT EMAIL ↗</a>
          `;
        }
        contactForm.reset();
        fetchPublicDispatches();
      } catch (err) {
        console.error("[ANVESH] Contact DB submit failed:", err);
        if (feedback) {
          feedback.innerHTML = `
            <span class="badge badge-red">DATABASE RELAY OFFLINE</span>
            <p style="margin:8px 0 10px;color:var(--text-secondary)">Could not reach the live database right now. Send your dispatch directly to <strong>anveshdirectorate@proton.me</strong> instead:</p>
            <a href="${mailtoHref}" class="btn btn-cyan" style="padding:7px 14px;font-size:0.72rem">OPEN EMAIL CLIENT TO SEND ↗</a>
          `;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "TRANSMIT DISPATCH ↗";
        }
      }
    });
  }

  // Dispatch Board Filter & Refresh Controls
  document.getElementById("refresh-dispatches-btn")?.addEventListener("click", fetchPublicDispatches);
  document.querySelectorAll("[data-dispatch-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeDispatchFilter = btn.getAttribute("data-dispatch-filter") || "ALL";
      document.querySelectorAll("[data-dispatch-filter]").forEach(b => b.classList.toggle("active-filter", b === btn));
      renderPublicDispatches();
    });
  });
  try { fetchPublicDispatches(); } catch (err) {}

  // Easter Eggs & Audio Triggers
  document.getElementById("freq-trigger")?.addEventListener("click", () => {
    freqClickCount += 1;
    triggerSignalTone();
    if (freqClickCount >= 3) {
      freqClickCount = 0;
      showEasterEggModal(
        "INTERCEPTED MULTIVERSE RELAY // 09.71 MHz",
        "TIMELINE VARIANT: IND-01-PRIME",
        `<p style="color:var(--text-secondary)">Three consecutive frequency calibrations locked onto a cross-timeline carrier wave:</p>
         <blockquote style="border-left:3px solid var(--cyan);padding-left:14px;margin:14px 0;font-family:var(--mono);color:var(--text)">"DISPATCH 00-BETA: Do not seal Sub-Level 02 before verifying the third photograph. Clearance key: <strong>ALPHA-00</strong>."</blockquote>
         <button type="button" class="btn btn-cyan" data-prefill-code="ALPHA-00">DECRYPT ALPHA-00 IN SOLUTION TERMINAL ↗</button>`
      );
    }
  });

  document.getElementById("origin-stamp-btn")?.addEventListener("click", () => {
    unlockAlphaZeroEasterEgg("ARCHIVE ENTRY 000 SEAL");
  });

  document.getElementById("play-signal-btn")?.addEventListener("click", triggerSignalTone);

  document.getElementById("case-note-close")?.addEventListener("click", () => {
    const box = document.getElementById("case-note");
    if (box) box.hidden = true;
  });

  document.getElementById("egg-modal-close")?.addEventListener("click", () => {
    const modal = document.getElementById("easter-egg-modal");
    if (modal) modal.hidden = true;
  });

  // Global Event Delegation for Connected Ecosystem Navigation
  document.querySelectorAll("button, a").forEach(() => {});
  document.addEventListener("click", e => {
    const target = e.target.closest("button, a, [data-nav], [data-open-dossier], [data-open-doc], [data-open-agent], [data-open-reality], [data-open-evidence], [data-prefill-code], [data-preview-case]");
    if (!target) return;

    const navTarget = target.getAttribute("data-nav");
    if (navTarget) {
      e.preventDefault();
      switchView(navTarget);
      return;
    }

    const previewKey = target.getAttribute("data-preview-case");
    if (previewKey) {
      const c = findCase(previewKey);
      const box = document.getElementById("case-note");
      if (c && box) {
        document.getElementById("note-title").textContent = `${c.id} — ${c.title}`;
        document.getElementById("note-copy").textContent = c.summary;
        document.getElementById("note-ref").textContent = `${c.id} // ${c.className.toUpperCase()} // LEAD: ${c.leadAgentId}`;
        const fullBtn = document.getElementById("note-open-full");
        if (fullBtn) fullBtn.setAttribute("data-open-dossier", c.id);
        box.hidden = false;
        box.scrollIntoView({ behavior: safeExitEnabled ? "auto" : "smooth", block: "center" });
      }
      return;
    }

    const dossierId = target.getAttribute("data-open-dossier");
    if (dossierId) {
      e.preventDefault();
      const modal = document.getElementById("easter-egg-modal");
      if (modal) modal.hidden = true;
      openCaseDossier(dossierId);
      return;
    }

    const docCaseId = target.getAttribute("data-open-doc");
    if (docCaseId) {
      e.preventDefault();
      const modal = document.getElementById("easter-egg-modal");
      if (modal) modal.hidden = true;
      openOfficialCaseDocument(docCaseId);
      return;
    }

    const agentId = target.getAttribute("data-open-agent");
    if (agentId) {
      e.preventDefault();
      const modal = document.getElementById("easter-egg-modal");
      if (modal) modal.hidden = true;
      openAgentDetail(agentId);
      return;
    }

    const realityId = target.getAttribute("data-open-reality");
    if (realityId) {
      e.preventDefault();
      openRealityDetail(realityId);
      return;
    }

    const evidenceId = target.getAttribute("data-open-evidence");
    if (evidenceId) {
      e.preventDefault();
      openEvidenceDetail(evidenceId);
      return;
    }

    const prefillCode = target.getAttribute("data-prefill-code");
    if (prefillCode) {
      e.preventDefault();
      const modal = document.getElementById("easter-egg-modal");
      if (modal) modal.hidden = true;
      const input = document.getElementById("solution-code-input");
      if (input) input.value = prefillCode;
      switchView("solutions");
      evaluateSolutionCode(prefillCode);
      return;
    }

    if (target.id === "egg-close-inline-btn") {
      const modal = document.getElementById("easter-egg-modal");
      if (modal) modal.hidden = true;
    }
  });

  // Keyboard Accessibility for SVG Multiverse Map Nodes + Easter Egg Sequence
  window.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      const focusedReality = document.activeElement?.getAttribute("data-open-reality");
      if (focusedReality) {
        e.preventDefault();
        openRealityDetail(focusedReality);
        return;
      }
    }
    if (e.key === "Escape") {
      const modal = document.getElementById("easter-egg-modal");
      if (modal && !modal.hidden) modal.hidden = true;
      return;
    }
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    if (e.key && e.key.length === 1) {
      keyBuffer = (keyBuffer + e.key.toUpperCase()).slice(-10);
      if (keyBuffer.endsWith("ALPHA") || keyBuffer.endsWith("ANVESH")) {
        keyBuffer = "";
        unlockAlphaZeroEasterEgg("KEYBOARD SEQUENCE OVERRIDE");
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnveshApp);
} else {
  initAnveshApp();
}


// 19. LIVE SUPABASE CONTACT DISPATCH DATABASE (Safe Publishable Key ONLY — Never Secret Key)
const SUPABASE_CONFIG = {
  url: "https://smmbakfommufgtbpsvlm.supabase.co",
  publishableKey: "sb_publishable_fa_bTCnb0a5OiLrXlFt0cQ_3xFK4qlI"
};
let cachedDispatches = [];
let activeDispatchFilter = "ALL";

function escapeHtml(str) {
  return String(str || "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function renderPublicDispatches() {
  const listEl = document.getElementById("public-dispatches-list");
  if (!listEl) return;
  const rows = activeDispatchFilter === "ALL"
    ? cachedDispatches
    : cachedDispatches.filter(r => String(r.status || "OPEN").toUpperCase() === activeDispatchFilter);

  if (!rows.length) {
    listEl.innerHTML = `<p class="mono muted" style="margin:8px 0">NO ${activeDispatchFilter === "ALL" ? "" : activeDispatchFilter + " "}DISPATCHES LOGGED YET. SUBMIT ONE ABOVE TO OPEN A NEW ENTRY.</p>`;
    return;
  }

  listEl.innerHTML = rows.map(row => {
    const isClosed = String(row.status || "OPEN").toUpperCase() === "CLOSED";
    const badgeCls = isClosed ? "badge-red" : "badge-emerald";
    const statusTxt = isClosed ? "● CLOSED" : "● OPEN";
    const dt = row.created_at ? new Date(row.created_at).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "";
    return `
      <article class="dispatch-item ${isClosed ? "is-closed" : "is-open"}">
        <div class="dispatch-item-head">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span class="badge ${badgeCls}">${statusTxt}</span>
            <span class="mono" style="color:var(--cyan);font-size:0.7rem">#${escapeHtml(row.id)} // ${escapeHtml(row.category)}</span>
          </div>
          <span class="mono muted" style="font-size:0.66rem">${escapeHtml(dt)}</span>
        </div>
        <div class="dispatch-item-sender">FROM: <strong>${escapeHtml(row.name)}</strong></div>
        <p class="dispatch-item-msg">${escapeHtml(row.message)}</p>
      </article>
    `;
  }).join("");
}

async function fetchPublicDispatches() {
  const listEl = document.getElementById("public-dispatches-list");
  if (!listEl || typeof fetch !== "function") return;
  listEl.innerHTML = `<p class="mono muted" style="margin:8px 0"><i class="fa-solid fa-rotate fa-spin" aria-hidden="true"></i> SYNCING DISPATCH LOG...</p>`;
  try {
    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/public_dispatches?select=id,name,category,message,status,created_at&order=created_at.desc&limit=30`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_CONFIG.publishableKey,
        "Accept": "application/json"
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    cachedDispatches = Array.isArray(data) ? data : [];
    renderPublicDispatches();
  } catch (err) {
    console.error("[ANVESH] Dispatch fetch error:", err);
    listEl.innerHTML = `<p class="mono" style="color:#ff8090;margin:8px 0">UNABLE TO REACH DISPATCH DATABASE RIGHT NOW. YOU CAN STILL EMAIL <a href="mailto:anveshdirectorate@proton.me" style="color:var(--cyan)">anveshdirectorate@proton.me</a>.</p>`;
  }
}

async function submitContactDispatch(payload) {
  const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/contact_dispatches`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_CONFIG.publishableKey,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      category: payload.category,
      message: payload.message,
      status: "OPEN"
    })
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${txt}`);
  }
  return true;
}


// ==========================================================================
// 20. TEXT-GLITCH SCRAMBLER, NEXT-USER RANDOMIZER (SECRET "YOU — NEXT") &
//     LIVE SUPABASE CASE CONTROLS (TIME LOCK, UNLOCK KEY & BARRIER REMOVAL)
// ==========================================================================
function glitchDecodeText(el, finalText, durationMs = 420) {
  if (!el) return;
  if (safeExitEnabled) {
    el.textContent = finalText;
    return;
  }
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/_-";
  const start = performance.now();
  function step(now) {
    const prog = Math.min(1, (now - start) / durationMs);
    const fixedCount = Math.floor(finalText.length * prog);
    let out = "";
    for (let i = 0; i < finalText.length; i++) {
      if (i < fixedCount || finalText[i] === " ") out += finalText[i];
      else out += chars[Math.floor(Math.random() * chars.length)];
    }
    el.textContent = out;
    if (prog < 1) requestAnimationFrame(step);
    else el.textContent = finalText;
  }
  requestAnimationFrame(step);
}

const RANDOM_SUSPECT_POOL = [
  { name: "ARJUN K.", age: 19, sector: "SECTOR IND-04", rule: 'RULE 1 & 2 (OPENED "HI!" AT 03:19 AM)', status: "ACTIVE" },
  { name: "MAYA LIN", age: 22, sector: "NODE SGP-02", rule: 'RULE 3 (REPLIED "NO" TO PROMPT)', status: "MONITORING" },
  { name: "DANIEL R.", age: 17, sector: "SECTOR UK-07", rule: 'RULE 2 (READ HIDDEN SIDEBAR TITLE)', status: "ACTIVE" },
  { name: "SOFIA M.", age: 24, sector: "NODE EU-09", rule: 'RULE 5 (LEFT THREAD OPEN OVERNIGHT)', status: "PENDING" },
  { name: "KABIR S.", age: 18, sector: "SECTOR IND-01", rule: 'RULE 6 (CLICKED EXTERNAL PROMPT LINK)', status: "ACTIVE" },
  { name: "ELENA V.", age: 21, sector: "NODE ARC-04", rule: 'RULE 7 (SEARCHED SIGNAL KEY PUBLICLY)', status: "ACTIVE" },
  { name: "LUCAS T.", age: 16, sector: "SECTOR NA-03", rule: 'RULE 1 & 3 (ANSWERED 4 FOLLOW-UPS)', status: "MONITORING" },
  { name: "RIYA D.", age: 20, sector: "SECTOR IND-02", rule: 'RULE 2 & 3 (REPLIED "WHO IS THIS?")', status: "ACTIVE" }
];
let nextUserScanCount = 0;

function formatRandomInterceptDate() {
  const now = new Date();
  const offsetDays = Math.floor(Math.random() * 18) - 6;
  const d = new Date(now.getTime() + offsetDays * 86400000);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const min = String(Math.floor(Math.random() * 48) + 10).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} // 03:${min} AM`;
}

function renderSuspectRecord(rec, isYouSecret = false) {
  const panel = document.getElementById("next-user-terminal");
  const idEl = document.getElementById("nu-id");
  const nameEl = document.getElementById("nu-name");
  const metaEl = document.getElementById("nu-meta");
  const dateEl = document.getElementById("nu-date");
  const ruleEl = document.getElementById("nu-rule");
  const statusEl = document.getElementById("nu-status");
  const noteEl = document.getElementById("nu-note");
  if (!panel || !idEl) return;

  panel.classList.toggle("is-you-next", isYouSecret);
  if (window.AnveshAudio) {
    window.AnveshAudio.playSfx(isYouSecret ? "glitch" : "type", isYouSecret ? 0.65 : 0.40);
  }
  glitchDecodeText(idEl, rec.id, 380);
  glitchDecodeText(nameEl, rec.name, 460);
  glitchDecodeText(metaEl, rec.meta, 500);
  glitchDecodeText(dateEl, rec.date, 520);
  glitchDecodeText(ruleEl, rec.rule, 560);
  if (statusEl) {
    statusEl.textContent = isYouSecret ? "● YOU ARE NEXT" : `● ${rec.status}`;
    statusEl.className = isYouSecret ? "badge badge-red" : (rec.status === "ACTIVE" ? "badge badge-red" : "badge badge-amber");
  }
  if (noteEl) {
    noteEl.style.color = isYouSecret ? "#ff5c72" : "";
    noteEl.textContent = isYouSecret
      ? 'SIGNAL LOCKED ON CURRENT VIEWER SESSION // STAY OFFLINE. DO NOT REPLY IF YOUR PHONE LIGHTS UP AT 03:14 AM.'
      : (rec.note || 'LOG NOTE: "It wasn\'t meant to unlock a door. It was meant to identify the next user."');
  }
}

function runNextUserScan() {
  nextUserScanCount += 1;
  const triggerYou = (nextUserScanCount % 4 === 0) || (nextUserScanCount > 2 && Math.random() < 0.18);
  if (triggerYou) {
    const today = new Date();
    const dStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")} // TONIGHT 03:14 AM`;
    renderSuspectRecord({
      id: "SUSPECT-LOCAL // ACTIVE NODE",
      name: "YOU (NEXT)",
      meta: "DEVICE DETECTED // BROWSER SESSION",
      date: dStr,
      rule: "PENDING — DO NOT OPEN THE NEXT NOTIFICATION",
      status: "NEXT"
    }, true);
    return;
  }
  const pick = RANDOM_SUSPECT_POOL[Math.floor(Math.random() * RANDOM_SUSPECT_POOL.length)];
  const randId = 165 + Math.floor(Math.random() * 134);
  renderSuspectRecord({
    id: `SUSPECT-${randId}`,
    name: pick.name,
    meta: `${pick.age} // ${pick.sector}`,
    date: formatRandomInterceptDate(),
    rule: pick.rule,
    status: pick.status
  }, false);
}

// Live Supabase Case Controls: Override isPrivate, unlock_key, and timed unlock_at from DB!
async function syncCaseControlsFromSupabase() {
  if (typeof fetch !== "function") return;
  try {
    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/case_controls?select=case_id,is_private,unlock_key,unlock_at,status_override`, {
      method: "GET",
      headers: { "apikey": SUPABASE_CONFIG.publishableKey, "Accept": "application/json" }
    });
    if (!res.ok) return;
    const rows = await res.json();
    if (!Array.isArray(rows) || !rows.length) return;
    const nowMs = Date.now();
    rows.forEach(row => {
      const c = findCase(row.case_id);
      if (!c) return;
      if (row.unlock_at) {
        c.unlockAt = row.unlock_at;
        const targetMs = new Date(row.unlock_at).getTime();
        if (!Number.isNaN(targetMs) && nowMs >= targetMs) {
          c.isPrivate = false;
        } else if (typeof row.is_private === "boolean") {
          c.isPrivate = row.is_private;
        }
      } else if (typeof row.is_private === "boolean") {
        c.isPrivate = row.is_private;
      }
      if (row.status_override) c.status = row.status_override;
      if (row.unlock_key) {
        const k = String(row.unlock_key).trim().toUpperCase();
        c.solutionCode = k;
        SOLUTION_CODES[k] = {
          code: k,
          isPrivate: Boolean(c.isPrivate),
          status: `VERIFIED — ${c.id} CLEARANCE GRANTED`,
          linkedCaseId: c.id,
          caseTitle: `${c.id} — ${c.title}`,
          channelNote: "Live Database Clearance Key // ANVESH Directorate",
          videoTitle: c.youtubeTitle || c.title,
          videoUrl: c.youtubeUrl || "https://youtu.be/wKXK__x7PQg",
          explanation: c.summary,
          resolution: c.resolution
        };
      }
    });
    renderFeaturedCases();
    renderArchiveCases();
    updateCaseCountdowns();
  } catch (err) {}
}

function updateCaseCountdowns() {
  const els = document.querySelectorAll(".case-countdown[data-unlock-at]");
  if (!els.length) return;
  const now = Date.now();
  let unlockedAny = false;
  els.forEach(el => {
    const ts = new Date(el.getAttribute("data-unlock-at")).getTime();
    if (Number.isNaN(ts)) return;
    const diff = ts - now;
    if (diff <= 0) {
      el.textContent = "UNLOCKED — REFRESHING...";
      unlockedAny = true;
    } else {
      const d = Math.floor(diff / 86400000);
      const h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
      el.textContent = d > 0 ? `${d}d ${h}:${m}:${s}` : `${h}:${m}:${s}`;
    }
  });
  if (unlockedAny) {
    syncCaseControlsFromSupabase();
  }
}

function initV10Features() {
  document.getElementById("scan-next-user-btn")?.addEventListener("click", runNextUserScan);
  document.getElementById("reset-tom-user-btn")?.addEventListener("click", () => {
    renderSuspectRecord({
      id: "SUSPECT-164",
      name: "TOM",
      meta: "16 // SECTOR IND-01",
      date: "2026-11-18 // 03:14 AM",
      rule: 'RULES 1, 2 & 3 (REPLIED "YES")',
      status: "ACTIVE"
    }, false);
  });
  syncCaseControlsFromSupabase();
  window.setInterval(updateCaseCountdowns, 1000);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initV10Features);
} else {
  initV10Features();
}

// KEY-LOCKED SPECIAL TOOL CONTROLLERS (v15)
window.runKeyNextUserScan = function () {
  const out = document.getElementById("key-next-user-readout");
  if (!out) return;
  if (window.AnveshAudio) window.AnveshAudio.playSprite("calibrate");
  const steps = [
    "SCANNING ENDPOINT RELAYS // 03:14 AM...",
    "MATCH FOUND: SUSPECT 164 (TOM, AGE 16) — STATUS: ACTIVE",
    "TRACING ACTIVE VIEWER SESSION...",
    "⚠ TARGET LOCKED: YOU (NEXT) — DO NOT REPLY IF CHATGPT SAYS 'HI!'"
  ];
  let idx = 0;
  out.style.color = "#22d3ee";
  out.textContent = steps[0];
  const iv = window.setInterval(() => {
    idx += 1;
    if (idx >= steps.length) {
      window.clearInterval(iv);
      return;
    }
    out.textContent = steps[idx];
    if (idx === steps.length - 1) {
      out.style.color = "#ff3856";
      if (window.AnveshAudio) window.AnveshAudio.playSprite("error");
    }
  }, 550);
};

// GLOBAL AUDIO & VIDEO LOOP CONTROLLER (v18 — Zero-Lag, No MutationObserver Loop!)
(function initGlobalMediaLoop() {
  let mediaLoopEnabled = true;
  try {
    const saved = window.localStorage.getItem("anvesh_media_loop");
    if (saved === "false") mediaLoopEnabled = false;
  } catch (e) {}

  window.applyAnveshLoopState = function () {
    document.querySelectorAll("audio, video").forEach(el => {
      el.loop = mediaLoopEnabled;
      if (mediaLoopEnabled) {
        if (!el.hasAttribute("loop")) el.setAttribute("loop", "");
      } else {
        if (el.hasAttribute("loop")) el.removeAttribute("loop");
      }
    });
    const label = mediaLoopEnabled
      ? '<i class="fa-solid fa-repeat" aria-hidden="true"></i> LOOP: ON'
      : '<i class="fa-solid fa-repeat" aria-hidden="true"></i> LOOP: OFF';
    document.querySelectorAll("[data-toggle-loop]").forEach(btn => {
      btn.setAttribute("aria-pressed", String(mediaLoopEnabled));
      btn.classList.toggle("loop-off", !mediaLoopEnabled);
      if (btn.innerHTML !== label) btn.innerHTML = label;
    });
  };

  window.toggleAnveshMediaLoop = function () {
    mediaLoopEnabled = !mediaLoopEnabled;
    try {
      window.localStorage.setItem("anvesh_media_loop", String(mediaLoopEnabled));
    } catch (e) {}
    window.applyAnveshLoopState();
  };

  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-toggle-loop]");
    if (!btn) return;
    e.preventDefault();
    window.toggleAnveshMediaLoop();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.applyAnveshLoopState);
  } else {
    window.applyAnveshLoopState();
  }
})();

export type ProductContent = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  accent: string;
  visual: string;
  metric: { value: string; label: string }[];
  capabilities: { title: string; description: string; detail: string }[];
  workflow: { step: string; title: string; description: string }[];
  deployment: { title: string; description: string }[];
  code: string;
  related: string[];
};

export const products: Record<string, ProductContent> = {
  verify: {
    slug: "verify",
    name: "Verify",
    eyebrow: "Identity and document verification",
    headline: "Read local identity documents with confidence.",
    summary: "Capture, classify, extract, and validate identity documents across the formats your customers actually use.",
    accent: "#007BE5",
    visual: "/illustrations/image.png",
    metric: [
      { value: "99%+", label: "Target extraction accuracy" },
      { value: "< 1s", label: "Typical document decision" },
      { value: "20+", label: "Local document variants" },
    ],
    capabilities: [
      { title: "Document classification", description: "Identify the submitted document and page before extraction begins.", detail: "Citizenship, passport, national ID, PAN, licence, voter ID" },
      { title: "Structured OCR", description: "Return normalized identity fields from multilingual and inconsistent layouts.", detail: "Names, dates, addresses, document numbers, issue data" },
      { title: "Quality and validity checks", description: "Catch blur, glare, missing edges, mismatched pages, and unsupported submissions.", detail: "Actionable rejection reasons for every failed capture" },
      { title: "Face extraction", description: "Locate and extract the portrait embedded in an identity document.", detail: "Ready for downstream face comparison" },
    ],
    workflow: [
      { step: "01", title: "Capture", description: "Collect a document through SDK, web component, API, or assisted branch flow." },
      { step: "02", title: "Understand", description: "Classify the page, crop the document, and extract structured fields." },
      { step: "03", title: "Decide", description: "Return validity, confidence, and review signals to your policy layer." },
    ],
    deployment: [
      { title: "API first", description: "Send Base64 images and receive structured JSON decisions." },
      { title: "Embedded capture", description: "Use branded web and mobile capture experiences with guided quality checks." },
      { title: "Sovereign", description: "Run document processing inside your cloud, VPC, or on-premise environment." },
    ],
    code: `const result = await thirdfactor.documents.analyze({
  image: base64Document,
  documentType: "citizenship",
  extractFace: true
});

console.log(result.data, result.confidence);`,
    related: ["shield", "lens", "charter"],
  },
  shield: {
    slug: "shield",
    name: "Shield",
    eyebrow: "Fraud prevention and liveness",
    headline: "Stop synthetic identities before they become accounts.",
    summary: "Combine passive liveness, injection defence, face comparison, and device signals in one fraud decision.",
    accent: "#D24B35",
    visual: "/illustrations/image2.png",
    metric: [
      { value: "3D", label: "Passive liveness analysis" },
      { value: "1:1", label: "Document-to-selfie matching" },
      { value: "Live", label: "Session risk signals" },
    ],
    capabilities: [
      { title: "Passive liveness", description: "Verify presence without forcing users through gestures or head turns.", detail: "Low-friction capture for web and mobile" },
      { title: "Presentation attack defence", description: "Detect printed photos, replayed screens, masks, and camera injection.", detail: "Layered anti-spoofing analysis" },
      { title: "Face comparison", description: "Compare a live user against document or enrolled reference imagery.", detail: "Configurable thresholds and confidence output" },
      { title: "Device intelligence", description: "Add emulator, rooted-device, velocity, and network context to decisions.", detail: "Risk signals available through policy rules" },
    ],
    workflow: [
      { step: "01", title: "Observe", description: "Collect a short passive capture and device session signals." },
      { step: "02", title: "Challenge", description: "Step up only uncertain sessions with an active gesture or recapture." },
      { step: "03", title: "Protect", description: "Approve, reject, or route the session to review with explainable evidence." },
    ],
    deployment: [
      { title: "Passive by default", description: "Keep genuine users moving without visible challenge steps." },
      { title: "Adaptive", description: "Use stronger checks only when session risk crosses your threshold." },
      { title: "Auditable", description: "Retain the signals, scores, and policy decision behind every outcome." },
    ],
    code: `const session = await thirdfactor.liveness.analyze({
  video,
  compareWith: documentPortrait,
  threshold: 0.82
});

console.log(session.isLive, session.faceMatch);`,
    related: ["verify", "access", "lens"],
  },
  comply: {
    slug: "comply",
    name: "Comply",
    eyebrow: "AML and compliance monitoring",
    headline: "Turn regulatory obligations into continuous controls.",
    summary: "Screen customers and businesses, manage exceptions, and maintain a defensible audit history from onboarding onward.",
    accent: "#21835A",
    visual: "/illustrations/image3.png",
    metric: [
      { value: "24/7", label: "Ongoing monitoring" },
      { value: "1", label: "Unified customer risk file" },
      { value: "Full", label: "Decision audit history" },
    ],
    capabilities: [
      { title: "Watchlist screening", description: "Screen people and organizations against sanctions, PEP, and adverse data.", detail: "Configurable local and global sources" },
      { title: "Ongoing monitoring", description: "Re-screen active customers when source data or risk profiles change.", detail: "Event-driven alerts and review queues" },
      { title: "Case management", description: "Investigate potential matches with evidence, ownership, and resolution history.", detail: "Role-based operations workflows" },
      { title: "Regulatory reporting", description: "Export structured records for internal audit and regulator requests.", detail: "Complete screening and decision lineage" },
    ],
    workflow: [
      { step: "01", title: "Screen", description: "Check identity and business data during onboarding." },
      { step: "02", title: "Resolve", description: "Route uncertain matches to the right analyst with supporting context." },
      { step: "03", title: "Monitor", description: "Keep customer risk current throughout the relationship." },
    ],
    deployment: [
      { title: "Local policy", description: "Tune matching, sources, and escalation to your jurisdiction." },
      { title: "Unified evidence", description: "Keep KYC, KYB, screening, and review decisions together." },
      { title: "Controlled access", description: "Restrict sensitive cases and actions through granular roles." },
    ],
    code: `const screening = await thirdfactor.compliance.screen({
  subject: customer,
  sources: ["sanctions", "pep", "adverse_media"],
  ongoingMonitoring: true
});

console.log(screening.risk, screening.matches);`,
    related: ["verify", "charter", "lens"],
  },
  access: {
    slug: "access",
    name: "Access",
    eyebrow: "Authentication and account recovery",
    headline: "Re-verify the person behind every sensitive action.",
    summary: "Protect account recovery, high-risk transactions, profile changes, and privileged access with adaptive identity checks.",
    accent: "#7A56A5",
    visual: "/illustrations/phone.png",
    metric: [
      { value: "Step-up", label: "Risk-based authentication" },
      { value: "No OTP", label: "Identity-led recovery option" },
      { value: "One", label: "Reusable trust profile" },
    ],
    capabilities: [
      { title: "Identity step-up", description: "Trigger face, liveness, document, or combined checks for risky actions.", detail: "Policy-driven assurance levels" },
      { title: "Account recovery", description: "Restore access through verified identity instead of support-heavy questions.", detail: "Reduced social engineering exposure" },
      { title: "Reusable enrollment", description: "Use trusted reference data without repeatedly collecting full documents.", detail: "Privacy-conscious returning-user flows" },
      { title: "Session assurance", description: "Bind authentication outcomes to device and session context.", detail: "Clear evidence for high-value actions" },
    ],
    workflow: [
      { step: "01", title: "Assess", description: "Evaluate the action, user history, device, and session risk." },
      { step: "02", title: "Verify", description: "Present the minimum identity challenge needed for the risk level." },
      { step: "03", title: "Authorize", description: "Return an assurance result your application can enforce." },
    ],
    deployment: [
      { title: "Web and mobile", description: "Use consistent branded verification across every customer channel." },
      { title: "Policy based", description: "Choose assurance requirements by action, amount, account, and risk." },
      { title: "Privacy aware", description: "Minimize repeated collection with reusable identity references." },
    ],
    code: `const assurance = await thirdfactor.access.verify({
  userId: "usr_123",
  action: "change_payout_account",
  requiredLevel: "high"
});

window.location.assign(assurance.url);`,
    related: ["shield", "verify", "charter"],
  },
  lens: {
    slug: "lens",
    name: "Lens",
    eyebrow: "Risk intelligence and operations",
    headline: "See why identity decisions happen.",
    summary: "Give fraud, compliance, and operations teams one clear view of performance, review demand, and customer risk.",
    accent: "#C27A15",
    visual: "/illustrations/apis.png",
    metric: [
      { value: "Live", label: "Operational visibility" },
      { value: "Explainable", label: "Decision signals" },
      { value: "One", label: "Cross-product risk view" },
    ],
    capabilities: [
      { title: "Operations dashboard", description: "Track volume, completion, approval, rejection, and review performance.", detail: "Slice by channel, product, region, and policy" },
      { title: "Risk explorer", description: "Investigate the signals and sequence behind unusual identities or sessions.", detail: "Document, face, device, and policy context" },
      { title: "Queue intelligence", description: "Understand what drives manual review and where analysts lose time.", detail: "Reason codes and reviewer performance" },
      { title: "Threshold analysis", description: "Test how policy and score changes affect conversion and fraud exposure.", detail: "Evidence before production changes" },
    ],
    workflow: [
      { step: "01", title: "Collect", description: "Unify signals and decisions from every ThirdFactor product." },
      { step: "02", title: "Explain", description: "Trace outcomes back to models, rules, and user behaviour." },
      { step: "03", title: "Improve", description: "Tune workflows with a measured view of risk and conversion." },
    ],
    deployment: [
      { title: "Role specific", description: "Tailor views for operations, fraud, compliance, and leadership." },
      { title: "Exportable", description: "Send metrics and events to your warehouse or BI environment." },
      { title: "Privacy controlled", description: "Separate operational metrics from sensitive identity evidence." },
    ],
    code: `const report = await thirdfactor.analytics.query({
  metric: "approval_rate",
  groupBy: ["policy", "document_type"],
  range: "30d"
});

console.log(report.series);`,
    related: ["charter", "verify", "shield"],
  },
  charter: {
    slug: "charter",
    name: "Charter",
    eyebrow: "Policy and workflow orchestration",
    headline: "Change identity policy without rebuilding your product.",
    summary: "Compose verification, fraud, compliance, and manual review steps into governed workflows your teams can own.",
    accent: "#335F9E",
    visual: "/illustrations/vspage.png",
    metric: [
      { value: "No-code", label: "Policy configuration" },
      { value: "Versioned", label: "Change history" },
      { value: "Reusable", label: "Workflow components" },
    ],
    capabilities: [
      { title: "Visual policy builder", description: "Combine identity services, conditions, fallbacks, and review steps.", detail: "Reusable flows for customer segments and regions" },
      { title: "Version control", description: "Publish, compare, roll back, and audit policy changes.", detail: "Clear ownership and approval history" },
      { title: "Decision routing", description: "Send sessions to approval, rejection, recapture, or specialist review.", detail: "Rules based on risk, confidence, and context" },
      { title: "Experimentation", description: "Measure workflow changes before applying them to every customer.", detail: "Controlled rollout and performance comparison" },
    ],
    workflow: [
      { step: "01", title: "Compose", description: "Choose services and arrange them into an identity journey." },
      { step: "02", title: "Govern", description: "Set thresholds, ownership, approvals, and exception handling." },
      { step: "03", title: "Publish", description: "Release a versioned policy to the channels that need it." },
    ],
    deployment: [
      { title: "Business owned", description: "Let authorized risk teams adjust policy without release cycles." },
      { title: "Engineering safe", description: "Keep integrations stable while workflow versions change behind them." },
      { title: "Audit ready", description: "Know which policy handled every verification session." },
    ],
    code: `const session = await thirdfactor.workflows.start({
  workflow: "retail_onboarding_nepal",
  version: "active",
  subject: { id: "usr_123" }
});

console.log(session.nextStep);`,
    related: ["lens", "comply", "bedrock"],
  },
  bedrock: {
    slug: "bedrock",
    name: "Bedrock",
    eyebrow: "Sovereign identity infrastructure",
    headline: "Run identity services where your data must remain.",
    summary: "Deploy the ThirdFactor stack inside your controlled environment with enterprise resilience, observability, and data sovereignty.",
    accent: "#253B4E",
    visual: "/illustrations/herosection.png",
    metric: [
      { value: "On-prem", label: "Deployment option" },
      { value: "99.99%", label: "Target availability" },
      { value: "Zero", label: "External data retention" },
    ],
    capabilities: [
      { title: "Sovereign deployment", description: "Run in your VPC, private cloud, or physical data centre.", detail: "Keep biometric and identity data under your control" },
      { title: "Modular services", description: "Deploy only the identity capabilities and capacity you require.", detail: "Independent scaling for OCR, face, fraud, and workflow" },
      { title: "Operational resilience", description: "Build for redundancy, failover, queue durability, and controlled upgrades.", detail: "Enterprise support and deployment runbooks" },
      { title: "Platform observability", description: "Monitor service health, throughput, errors, and model performance.", detail: "Integrate with your existing operational tooling" },
    ],
    workflow: [
      { step: "01", title: "Design", description: "Map data boundaries, throughput, availability, and integration requirements." },
      { step: "02", title: "Deploy", description: "Install the selected services into your controlled infrastructure." },
      { step: "03", title: "Operate", description: "Monitor, scale, upgrade, and govern the platform with your team." },
    ],
    deployment: [
      { title: "Private cloud", description: "Isolate services and data inside a dedicated cloud account or VPC." },
      { title: "On-premise", description: "Run the full identity stack inside your data centre." },
      { title: "Hybrid", description: "Keep sensitive processing local while centrally managing approved configuration." },
    ],
    code: `services:
  document-ocr:
    replicas: 4
    retention: none
  face-verification:
    replicas: 3
    gpu: enabled
  policy-engine:
    replicas: 2`,
    related: ["charter", "lens", "verify"],
  },
};

export const productSlugs = Object.keys(products);

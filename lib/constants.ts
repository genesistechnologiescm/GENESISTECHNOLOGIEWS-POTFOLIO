export const BRAND = {
  email: "officialkaisy@gmail.com",
  phone: "653158701",
  tagline: "The Origin and direction of Your Digital Evolution.",
  company: "Flint",
} as const;

export const SERVICES = [
  {
    id: "build",
    number: "01",
    slug: "Flint Build",
    name: "Custom Software Development",
    description:
      "Full-stack web applications, business platforms, client portals, and API systems — built from scratch to your exact specification. No templates. No compromises.",
    deliverables: [
      "Business websites & web applications",
      "Client portals & dashboards",
      "REST APIs & backend systems",
      "E-commerce & booking platforms",
      "Custom CMS & admin interfaces",
    ],
    tiers: ["Starter", "Growth", "Enterprise"],
    accent: "#00E5FF",
  },
  {
    id: "intelligence",
    number: "02",
    slug: "Flint Intelligence",
    name: "Data Science & Analytics",
    description:
      "Transform raw data into operational intelligence. We build pipelines, dashboards, and predictive models that give leadership real-time visibility into what matters.",
    deliverables: [
      "Business intelligence dashboards",
      "Data pipelines & ETL systems",
      "Predictive analytics & ML models",
      "KPI reporting & data visualisation",
      "Database design & optimisation",
    ],
    tiers: ["Starter", "Growth", "Enterprise"],
    accent: "#00E5FF",
  },
  {
    id: "automate",
    number: "03",
    slug: "Flint Automate",
    name: "AI & Workflow Automation",
    description:
      "Eliminate manual processes, reduce human error, and build workflows that run 24/7. From AI integrations to end-to-end business process automation.",
    deliverables: [
      "AI agent & LLM integrations",
      "Business process automation",
      "CRM & sales workflow automation",
      "Document & reporting automation",
      "n8n / Make workflow architecture",
    ],
    tiers: ["Starter", "Growth", "Enterprise"],
    accent: "#00E5FF",
  },
  {
    id: "consult",
    number: "04",
    slug: "Flint Consult",
    name: "Strategic Tech Advisory",
    description:
      "Not sure what to build or where to start? We map your technical landscape, identify the highest-leverage opportunities, and hand you a roadmap that makes decisions easy.",
    deliverables: [
      "Technology strategy & roadmapping",
      "CTO-as-a-Service (fractional)",
      "Tech stack assessment & selection",
      "Digital transformation planning",
      "Architecture review & risk audit",
    ],
    tiers: ["Discovery", "Advisory", "Embedded"],
    accent: "#1A6BFF",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "A focused 60-minute call to map your goals, constraints, and success criteria. We listen before we build.",
  },
  {
    num: "02",
    title: "Scope & Proposal",
    desc: "A detailed written proposal with three pricing tiers, a clear timeline, and defined deliverables. No vague estimates.",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Phased development with regular check-ins. You see progress at every stage — feedback loops are built into the timeline.",
  },
  {
    num: "04",
    title: "Deploy & Support",
    desc: "Production deployment, handover documentation, and structured post-launch support. We don't disappear after go-live.",
  },
] as const;

export const CAPABILITIES = [
  {
    serviceSlug: "Flint Build",
    label: "Software Engineering",
    items: [
      { title: "Full-Stack Development", desc: "React, Next.js, Node.js, Python. MVP to enterprise-grade production system." },
      { title: "API Architecture", desc: "RESTful and GraphQL APIs. Third-party integrations. Webhooks and real-time systems." },
      { title: "Cloud Infrastructure", desc: "Vercel, AWS, GCP deployment. CI/CD pipelines. Scalable, secure, monitored." },
    ],
  },
  {
    serviceSlug: "Flint Intelligence",
    label: "Data Engineering",
    items: [
      { title: "Data Pipelines", desc: "ETL design, cleaning, transformation. Real-time and batch processing at scale." },
      { title: "Predictive Models", desc: "ML models trained on your data. Forecasting, segmentation, anomaly detection." },
      { title: "Live Dashboards", desc: "Executive and operational dashboards. Connected to live data. Exportable, shareable." },
    ],
  },
  {
    serviceSlug: "Flint Automate",
    label: "AI & Automation",
    items: [
      { title: "AI Agents", desc: "Custom LLM-powered agents. GPT-4o, Claude, Gemini integrations built for your workflow." },
      { title: "Process Automation", desc: "n8n, Make, and custom code. End-to-end automation that runs without you." },
      { title: "System Integration", desc: "Connect CRM, ERP, email, database, and external tools into one coherent system." },
    ],
  },
  {
    serviceSlug: "Flint Consult",
    label: "Strategic Advisory",
    items: [
      { title: "Technology Audit", desc: "We map your full technical landscape — what's working, what's costing you, what needs replacing." },
      { title: "Roadmap Design", desc: "A prioritised, phased plan with clear ROI at each step. Built to be actioned, not filed." },
      { title: "Fractional CTO", desc: "Senior technical leadership embedded in your team — strategy, hiring advice, and vendor oversight." },
    ],
  },
] as const;

export const WHY_POINTS = [
  {
    title: "Senior-level execution on every project",
    desc: "No junior handoffs. The same expertise that scoped your project builds it — start to finish.",
  },
  {
    title: "Fixed-scope proposals, 3-tier pricing",
    desc: "Every proposal is contract-ready. You know exactly what you get at every price point before you commit.",
  },
  {
    title: "Max 3 active clients at any time",
    desc: "Scarcity by design. Every client gets our full bandwidth — not a fraction of it.",
  },
  {
    title: "No generic solutions, ever",
    desc: "We don't install themes and call it a product. Every system is purpose-built for your specific context.",
  },
] as const;

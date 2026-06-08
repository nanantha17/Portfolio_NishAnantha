import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Nishanth Anantha — Staff Technical Program Manager",
  author: "Nishanth Anantha",
  description:
    "I ship AI systems and drive the programs that bring them to production. Staff TPM with 14 years across cloud platforms, AI/ML systems, and HW/SW integration.",
  lang: "en",
  siteLogo: "/Nish-big.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nishanthanantha17" },
    { text: "Github", href: "https://github.com/nanantha17" },
   ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};
export const RESUME = "/Nishanth_Anantha_AI_TPM.pdf"

export const certifications = [
  {
    name: "Building with Claude API",
    issuer: "Anthropic",
    date: "Apr 2026",
  },
  {
    name: "Machine Learning in Production (MLOps)",
    issuer: "DeepLearning.ai",
    date: "Jun 2026",
  },
  {
    name: "W&B LLM Evaluation",
    issuer: "Weights & Biases",
    date: "Apr 2026",
  },
  {
    name: "IBM GenAI & LLMs",
    issuer: "IBM",
    date: "Feb 2026",
  },
  {
    name: "Deep Learning with TensorFlow",
    issuer: "Kaggle",
    date: "Apr 2026",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "Oct 2024",
  },
  {
    name: "PMI-PMP",
    issuer: "PMI",
    date: "2020, Active",
  },
]
export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nishanth Anantha",
    specialty: "Staff TPM · AI Systems Builder · Platform Programs",
    summary:
      "I ship AI systems and drive the programs that bring them to production. 14 years leading cross-functional technical programs across cloud APIs, AI/ML pipelines, and HW/SW platforms — and I build production agentic systems and RAG agents, not just manage people who do.",
    email: "nishanth.anantha87@gmail.com",
  },
  experience: [
    {
      company: "ASML",
      position: "Staff Technical Program Manager — Cloud Platform & AI/ML",
      startDate: "Jan 2024",
      endDate: "Present",
      summary: [
        "Built and deployed production agentic AI workflow system (Claude API + MCP + PyTorch + FastAPI) — multi-step agentic loop synthesizes 13 live signals from GitHub CI, JIRA, and Smartsheet into real-time Go/NoGo risk scores with SHAP explainability. Adopted by Director/VP as standard release infrastructure.",
        "Shipped production RAG Conversational AI Agent (HuggingFace + ChromaDB + TF Serving + W&B LLM Evals) — 82% CSAT, 65% query deflection, 1.1s p50 latency. Full eval pipeline with continuous feedback loop from day one.",
        "Owned end-to-end delivery of complex, cross-functional platform programs across cloud API, web, and mobile initiatives — coordinating product, engineering, and QA across 20+ concurrent workstreams. Built durable delivery systems (Go/NoGo frameworks, risk registers, phase gate criteria) that became organizational standards.",
      ],
    },
    {
      company: "ASML",
      position: "Sr. Technical Program Manager — SW/HW Platform & Release",
      startDate: "Mar 2019",
      endDate: "Dec 2023",
      summary: [
        "Built full program execution framework from scratch — release success from 29% to 94% in 18 months across 30+ programs. Go/NoGo operating model and phase gate criteria became organizational standard.",
        "Drove CI/CD transformation org-wide (Jenkins, GitHub Actions, Docker) — 65% faster software delivery. Built ensemble ML release risk predictor (PyTorch + GBM + DistilBERT, 13 signals, SHAP) — 35% reduction in last-minute integration failures.",
        "Reduced customer-facing defects 50%; resolved $3M+ in customer escalations. Chaired Change Control Board across US, Europe, and Asia. Managed $2M+ validation infrastructure program with 70% field defect reduction.",
      ],
    },
    {
      company: "ASML",
      position: "Sr. Software Engineer / Team Lead / Scrum Master",
      startDate: "Nov 2016",
      endDate: "Mar 2019",
      summary: [
        "Engineer-to-TPM arc: shipped Python automation to production while owning SAFe Agile planning, backlog management, and release governance. Moved team from waterfall to SAFe Agile — built sprint discipline, JIRA hygiene, and cross-functional coordination cadences from scratch.",
        "Lifted release success from 29% to 94% in 18 months; resolved $3M+ customer escalation. Awarded for Leadership and Ownership.",
      ],
    },
    {
      company: "Caterpillar · Volvo Group · Abbott · SDP Engineering",
      position: "Sr. Electrical / Embedded SW / HW Engineer",
      startDate: "Jan 2009",
      endDate: "Oct 2016",
      summary:
        "Python/C automation, HIL testbenches, CAN protocols (J1939/J1587), FPGA-based real-time systems across automotive, industrial, and medical domains. $500K+ field escalation resolution. Volvo Patent Idea of the Year — Global Patent Council (2012).",
    },
  ],
  projects: [
    {
      name: "Agentic Program Health System",
      summary:
        "Production agentic loop — 13 live signals from GitHub CI, JIRA, Smartsheet → Go/NoGo risk scores with SHAP explainability. 40% release risk reduction. Adopted by Director/VP.",
      linkPreview: "https://github.com/nanantha17/AI-release-risk-predictor/blob/main/Readme_%20AgenticRelease%20Risk%20Predictor.pdf",
      linkSource: "https://github.com/nanantha17/AI-release-risk-predictor",
      image: "/Agentic_Risk_predictor.jpg",
    },
    {
    name: "Edge CV Inference System ",
    summary:
      "YOLOv3 person/vehicle detector as versioned FastAPI service — p50/p95 latency tracking, cold-start benchmarking, confidence threshold analysis.",
    linkPreview: "https://github.com/nanantha17/CV_Person_Street_Detector/blob/main/README.md",
    linkSource: "https://github.com/nanantha17/CV_Person_Street_Detector",
    image: "/StreetDetector_EdgeInference.jpg",
    },
    {
      name: "RAG Conversational AI Agent",
      summary:
        "End-to-end RAG with voice (STT/TTS) pipeline — 82% CSAT, 65% deflection, 1.1s p50. BLEU/ROUGE offline eval through W&B LLM Evals online",
      linkPreview: "https://github.com/nanantha17/RAG-based-chatbotEval-STT-TTS/blob/main/README.md",
      linkSource: "https://github.com/nanantha17/RAG-based-chatbotEval-STT-TTS/tree/main",
      image: "/RAG_STT_TTS_Evals.png",
    },
    {
      name: "FNN N-gram Language Model",
      summary:
        "FNN language model from scratch in PyTorch — 2/4/8-gram comparison, t-SNE embedding visualization, failure mode analysis tracked in W&B.",
      linkPreview: "https://github.com/nanantha17/FFN_Language_Modeling_NGram/blob/main/WnB_FFN_N_GRAM_COMPARISON.pdf",
      linkSource: "https://github.com/nanantha17/FFN_Language_Modeling_NGram/tree/main",
      image: "/FNN_song_generator.png",
    },
  ],
  about: {
    description: `
     I'm Nishanth Anantha, a Staff TPM based in San Marcos, CA — I build AI systems and run the programs that bring them to production.

    Builder. Connector. Translator. I create execution infrastructure that didn't exist before I arrived, connect HW/FW/SW/AI teams around a shared reality, and translate business commitments into engineering capacity plans — surfacing tradeoffs before they become misses.

    My background spans 14 years across hardware NPI, embedded systems, AI/ML, and cloud platform programs. At ASML I shipped a production agentic AI system (Claude API + MCP + ensemble ML) adopted by Director/VP stakeholders, a RAG conversational agent (82% CSAT, 1.1s p50), and an edge CV inference system benchmarked against real deployment constraints. I own everything from architecture through production.

    On the program side, I built execution frameworks from scratch that lifted release success from 29% to 94% across 30+ programs, chaired a cross-ocean Change Control Board across US, Europe, and Asia, and drove a CI/CD transformation delivering 65% faster software delivery.

    PMI-PMP · AWS · Anthropic Claude API · Claude on Vertex AI · MLOps (DeepLearning.AI) · W&B LLM Evals · IBM GenAI · M.S. EE, USC

    Open to Staff TPM and AI program roles at AI-native, hardware-forward, or edge AI companies
    `,
    image: "/Nish-big.png",
  },
};

// #5755ff

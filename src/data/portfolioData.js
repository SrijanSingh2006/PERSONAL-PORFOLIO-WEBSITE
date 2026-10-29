export const PROJECTS = [
  {
    id: "tripmacha",
    title: "TRIPMACHA",
    badge: "Agentic AI Workflows",
    subtitle: "Multi-Step Agentic Workflow, Tool Calling & QC Pipeline",
    date: "Jun 2026",
    githubLink: "https://github.com/SrijanSingh2006/tripmacha-ai-travel",
    github: "https://github.com/SrijanSingh2006/tripmacha-ai-travel",
    liveDemo: "#",
    technologies: ["Python", "JavaScript", "React.js", "FastAPI", "Google GenAI SDK", "Playwright", "Docker", "PostgreSQL"],
    domain: "Governed AI Workflows | Prompt & Context Engineering | Tool Calling | Automated Evals",
    shortDescription: "A multi-step agentic workflow with tool calling, structured outputs, and automated quality checks before results reach users.",
    description: "Engineered a governed AI workflow with Python, FastAPI, and Google GenAI SDK, enforcing phase sequencing and structured JSON outputs. Added Playwright-driven test sets to check accuracy, completeness, and schema compliance before rendering.",
    bullets: [
      "Engineered a multi-step agentic workflow using Python, FastAPI, and Google GenAI SDK with strict phase sequencing, tool calling, and structured JSON output enforcement.",
      "Built automated quality control and evaluation with Playwright and Python test sets to verify accuracy, completeness, and schema compliance before rendering.",
      "Versioned prompt templates, context files, and JSON schemas in GitHub while standardizing interactive React card layouts and UI components."
    ],
    resultsHighlight: "Phase-gated generation with schema validation and pre-render quality checks",
    problem: "Multi-step AI generation can produce incomplete or malformed results when prompts, context, and output requirements are not managed consistently.",
    solution: "Built a phase-sequenced agent workflow with tool calling, constrained JSON output, versioned prompt assets, and automated quality checks.",
    architectureDiagram: "User Concept Prompt -> React Frontend -> FastAPI Gateway -> Playwright Scraper + Google GenAI SDK -> PostgreSQL DB -> Interactive Itinerary UI",
    pipelineSteps: [
      "Multi-source information scraping and normalization using headless Playwright",
      "Asynchronous prompt augmentation and synthesis via Google GenAI SDK",
      "Structured JSON schema validation and relational storage in PostgreSQL",
      "Interactive client visualization with real-time progress polling in React.js",
      "Containerized microservice packaging with Docker for zero-friction deployment"
    ],
    keyFeatures: [
      "LLM-driven prompt workflows via Google GenAI SDK",
      "Headless browser collection scripts with Playwright",
      "Asynchronous background task processing",
      "Containerized deployment architecture using Docker"
    ],
    mlModelDetails: {
      algorithm: "Google Gemini Large Language Model via GenAI SDK",
      hyperparameters: "Temperature: 0.4, Top-P: 0.9, Structured JSON Output",
      evaluationMetrics: "Context relevance, response latency, schema validation rate",
      optimization: "Prompt engineering, response caching, asynchronous task dispatching"
    },
    results: "Reduced research time by 85% with automated synthesis and 100% structured JSON compliance.",
    whatILearned: "Designing resilient LLM integration pipelines, managing long-running background tasks with Celery/Redis, and containerizing full-stack microservices."
  },
  {
    id: "agricomply",
    title: "AGRICOMPLY",
    badge: "RAG & AI Quality Control",
    subtitle: "RAG, Vector Database & AI-Led Quality Verification System",
    date: "Jan 2026",
    githubLink: "https://github.com/SrijanSingh2006/AgriComply-AI",
    github: "https://github.com/SrijanSingh2006/AgriComply-AI",
    liveDemo: "#",
    technologies: ["Python", "JavaScript", "React.js", "Flask", "OpenCV", "AWS S3", "RAG", "Vector Database"],
    domain: "RAG & Vector Databases | AI-Led QC | Human Review Gates | Context Engineering",
    shortDescription: "A RAG and vector search system that grounds AI responses in verified documents, with human review gates and feedback loops.",
    description: "Architected a Retrieval-Augmented Generation pipeline with vector search to ground LLM responses in verified domain documents. Added human review gates for completeness and factual accuracy, then fed corrections back into context and prompt assets.",
    bullets: [
      "Architected a Retrieval-Augmented Generation and vector database pipeline in Python and React that grounds LLM responses against verified domain documents.",
      "Enforced phase sequencing and human review gates to validate document completeness, rubric criteria, and factual accuracy before final approval.",
      "Logged review corrections and edge-case failures back into context files and prompt templates to continuously improve retrieval precision."
    ],
    resultsHighlight: "Grounded responses in verified sources with review gates and correction feedback",
    problem: "Manual verification of identity documents and complex policy guidelines creates immense friction, delays, and human error in approval workflows.",
    solution: "Engineered an intelligent pipeline combining OpenCV pre-processing, OCR extraction, vector retrieval (RAG), and Gemini LLM reasoning for instant document validation.",
    architectureDiagram: "Document Upload -> OpenCV Image Enhancement -> Tesseract OCR -> Vector DB Semantic Search -> Google Gemini RAG -> Verification Report",
    pipelineSteps: [
      "Image pre-processing (deskewing, adaptive thresholding) with OpenCV",
      "Text extraction and string matching for automated verification",
      "Document embedding and similarity search in vector database",
      "Contextual prompt synthesis and evaluation using Google Gemini API",
      "Secure cloud storage of verified records in AWS S3 with MySQL metadata tracking"
    ],
    keyFeatures: [
      "Retrieval Augmented Generation (RAG) for accurate policy lookup",
      "Computer Vision based automated KYC extraction with OpenCV",
      "Algorithmic eligibility ranking based on multi-factor data modeling",
      "Cloud integration with AWS S3 and relational MySQL storage"
    ],
    mlModelDetails: {
      algorithm: "RAG Vector Retrieval + Levenshtein Distance + Supervised Ranking",
      hyperparameters: "k=4 nearest neighbors, Similarity threshold: 0.82",
      evaluationMetrics: "OCR character error rate (CER), retrieval precision, response accuracy",
      optimization: "Adaptive thresholding in OpenCV, vector index caching"
    },
    results: "Achieved 95%+ field extraction accuracy across noisy document scans and sub-2s query response time.",
    whatILearned: "Bridging computer vision with Generative AI, handling unstructured document data, and architecting secure cloud-native REST APIs."
  },
  {
    id: "reachinbox",
    title: "ReachInbox",
    badge: "Governed Workflow Orchestration",
    subtitle: "Phase-Sequenced Execution & Feedback Loop Engine",
    date: "Oct 2026",
    githubLink: "https://github.com/SrijanSingh2006/ReachInboxAI",
    github: "https://github.com/SrijanSingh2006/ReachInboxAI",
    liveDemo: "#",
    technologies: ["JavaScript", "TypeScript", "Next.js", "Node.js", "Express.js", "BullMQ", "Redis", "PostgreSQL"],
    domain: "Phase Sequencing Gates | Internal Full-Stack Tooling | Schema Validation | GitHub Workflows",
    shortDescription: "A governed execution and feedback engine with phase gates, review states, and versioned workflow data.",
    description: "Developed a TypeScript workflow orchestration engine using Next.js, Node.js, BullMQ, and Redis to enforce step-by-step execution and review gates. Designed PostgreSQL and JSON schemas for workflow states, reversible changes, and automated checks.",
    bullets: [
      "Developed a governed workflow orchestration engine in TypeScript, Node.js, and Next.js with BullMQ and Redis to enforce sequential execution and review gates.",
      "Designed PostgreSQL and JSON schemas to track workflow transitions, reversible changes, and automated quality checks.",
      "Built a standardized dashboard for internal users to inspect outputs, resolve flagged errors, and feed corrections back into source templates."
    ],
    resultsHighlight: "Traceable workflow state, review gates, and automated quality checks",
    problem: "High-volume asynchronous operations and recurring job batches often suffer from execution collisions, unbounded memory leaks, and job loss during server restarts.",
    solution: "Architected a multi-worker distributed queuing system backed by Redis and BullMQ with exponential backoff retries, persistent job checkpointing in PostgreSQL, and rate-limiting safeguards.",
    architectureDiagram: "Trigger -> Express/Next.js API -> BullMQ Priority Queue -> Redis In-Memory Broker -> Distributed Worker Pool -> PostgreSQL State Audit",
    pipelineSteps: [
      "Payload validation and priority assignment via REST endpoints",
      "Enqueueing tasks with rate-limiting and deduplication keys into Redis",
      "Distributed worker pool processing jobs asynchronously with concurrency control",
      "Automatic retry with exponential backoff on transient network failures",
      "Persistent audit logging and state recovery in PostgreSQL with TypeORM"
    ],
    keyFeatures: [
      "Priority queue scheduling with concurrency boundaries",
      "Persistent state recovery ensuring zero job loss",
      "Dynamic rate limiting and worker pool auto-scaling",
      "Visual progress dashboard for operational transparency"
    ],
    mlModelDetails: null,
    results: "Maintained 99.99% scheduling reliability under high concurrent workloads with sub-millisecond dispatch times.",
    whatILearned: "Deepened understanding of distributed lock management, message queue semantics, fault-tolerance in Unix/Linux environments, and backend scalability."
  },
  {
    id: "datalens",
    title: "DataLens",
    badge: "Schema Validation & Assessment",
    subtitle: "Platform-Ready Schema Validator, Assessment & Rubric Engine",
    date: "Mar 2025",
    githubLink: "https://github.com/SrijanSingh2006/Excel-analytical-platform-main",
    github: "https://github.com/SrijanSingh2006/Excel-analytical-platform-main",
    liveDemo: "#",
    technologies: ["JavaScript", "TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    domain: "JSON Schemas & Validation | Multi-Format Uploads | Standardized UI | Automated Checks",
    shortDescription: "A full-stack validation tool for multi-file submissions, JSON creation specs, rubrics, and content quality checks.",
    description: "Built a TypeScript, React, and Node.js validation tool to ingest multi-file uploads and verify them against JSON creation specs and rubric templates. Standardized the interface and visual diagnostics so authors can spot schema and formatting errors before publishing.",
    bullets: [
      "Built a full-stack validation tool in TypeScript, React, and Node.js to parse and verify multi-file uploads against JSON creation specs and rubric templates.",
      "Automated quality checks for data completeness, schema validity, and formatting consistency before publishing to the platform database.",
      "Standardized UI colors, interactive cards, and visual diagnostics so authors and reviewers can spot and fix content errors quickly."
    ],
    resultsHighlight: "Automated completeness, schema, and formatting checks before publishing",
    problem: "Content authors need consistent ways to check submissions against detailed creation specifications and rubrics before they reach a platform.",
    solution: "Created multi-format ingestion and automated validation against JSON specs, completeness rules, and rubric criteria, with diagnostics that make fixes clear.",
    architectureDiagram: "Spreadsheet Upload -> SheetJS Parser -> Statistical Engine -> Chart.js / Three.js Renderer -> Express API -> Visual Dashboard",
    pipelineSteps: [
      "Client-side spreadsheet extraction and type inference with SheetJS",
      "Automated summary statistics calculation (distributions, percentiles, correlation)",
      "Interactive 2D Chart.js and 3D WebGL visualization rendering",
      "Secure cloud persistence of workspaces via Express.js and MongoDB",
      "JWT-based authentication and role-based workspace management"
    ],
    keyFeatures: [
      "Zero-server spreadsheet parsing for instant client preview",
      "Interactive visual charts powered by Chart.js and Three.js",
      "Designer friendly UI/UX with zero setup friction",
      "Exportable analytical dashboards and automated insight summaries"
    ],
    mlModelDetails: null,
    results: "Processed 100,000+ data cells in under 200ms with zero memory leaks and smooth 60fps chart interaction.",
    whatILearned: "Advanced TypeScript patterns, WebGL and 3D rendering concepts, and handling large tabular files smoothly in browser environments."
  },
  {
    id: "emotionai",
    title: "EmotionAI",
    badge: "Automated Evals & Test Sets",
    subtitle: "LLM/NLP Output Evaluation & Test-Set Benchmarking Suite",
    date: "Jun 2026",
    githubLink: "https://github.com/SrijanSingh2006/Emotion_Predictor",
    github: "https://github.com/SrijanSingh2006/Emotion_Predictor",
    liveDemo: "#",
    technologies: ["Python", "TensorFlow", "Keras", "NLP", "RNN", "LSTM", "BiGRU", "Custom Scripting"],
    domain: "LLM & NLP Output Evals | Test Case Verification | Automated QC | Benchmark Datasets",
    shortDescription: "An NLP benchmarking suite with curated test sets, deterministic checks, and CI validation for model iterations.",
    description: "Engineered a Python evaluation pipeline to benchmark NLP sequence models against curated gold-standard test sets, achieving 92.1% verified accuracy. Added deterministic PyTest checks and GitHub Actions runs so model and prompt updates are validated before merging.",
    bullets: [
      "Engineered an automated Python evaluation and benchmarking pipeline for NLP sequence models against curated gold-standard test sets, achieving 92.1% verified accuracy.",
      "Wrote deterministic PyTest cases and quality checks for answer coverage, edge-case handling, and output consistency across model iterations.",
      "Integrated automated test execution into GitHub Actions so every prompt or model update was validated before merging."
    ],
    resultsHighlight: "92.1% verified accuracy with automated tests and CI checks",
    problem: "Understanding nuanced human feedback, sentiment, and emotional tone across user inputs is difficult with traditional rule-based classifiers.",
    solution: "Built a comparative sequence modeling pipeline benchmarking recurrent neural architectures to accurately classify fine-grained emotional patterns.",
    architectureDiagram: "Raw Feedback -> Tokenization & Padding -> Embedding Layer -> Bidirectional GRU -> Dense Softmax -> Actionable Insights",
    pipelineSteps: [
      "Text cleaning, regex normalization, stop-word filtering, and sub-word tokenization",
      "Sequence padding and embedding matrix construction",
      "Model architecture comparison (RNN vs. LSTM vs. GRU vs. BiGRU)",
      "Hyperparameter tuning with dropout regularization and EarlyStopping",
      "Deploying the best-performing model behind a high-speed FastAPI microservice"
    ],
    keyFeatures: [
      "Comparative benchmarking across 4 deep neural network architectures",
      "High-accuracy Bidirectional GRU layer capturing bidirectional context",
      "FastAPI inference microservice with probability distribution output",
      "Class-weight balancing for handling imbalanced category distributions"
    ],
    mlModelDetails: {
      algorithm: "Bidirectional Gated Recurrent Unit (BiGRU)",
      hyperparameters: "Embedding Dim: 128, Units: 64, Dropout: 0.3, Batch Size: 32, Epochs: 20",
      evaluationMetrics: "92.1% Test Accuracy, Macro F1-Score: 0.91, Confusion Matrix",
      optimization: "Adam optimizer with learning rate decay and EarlyStopping"
    },
    results: "Outperformed standard LSTM by 4.2% while reducing parameter count and inference latency.",
    whatILearned: "Sequence modeling nuances, overcoming vanishing gradients in RNNs, and deploying low-latency deep learning models to production APIs."
  },
  {
    id: "mentalytics",
    title: "Mentalytics",
    badge: "Structured Outputs & Validation",
    subtitle: "Structured Schema API & Automated Validation Pipeline",
    date: "Feb 2026",
    githubLink: "https://github.com/SrijanSingh2006/Mansick_StithiMentalytics",
    github: "https://github.com/SrijanSingh2006/Mansick_StithiMentalytics",
    liveDemo: "#",
    technologies: ["Python", "FastAPI", "Pandas", "NumPy", "Scikit-learn", "REST APIs"],
    domain: "Structured Outputs | API & Schema Design | Code Correctness | Documentation",
    shortDescription: "A schema-first FastAPI service with Pydantic validation, deterministic outputs, and unit-tested edge cases.",
    description: "Built a Python and FastAPI service enforcing Pydantic JSON schemas, input validation, and structured outputs. Added unit tests for algorithmic correctness, boundary conditions, and consistent response formatting, with clear schema documentation for consumers.",
    bullets: [
      "Built a Python and FastAPI service enforcing strict Pydantic JSON schemas, input validation, and structured outputs for downstream platform use.",
      "Wrote unit tests for algorithmic correctness, boundary conditions, and deterministic response formatting.",
      "Authored technical documentation and schema specifications for engineering and design teams."
    ],
    resultsHighlight: "0.878 R² and 0.347 MAE with lightweight FastAPI query interface",
    problem: "Downstream tools need predictable API responses, while loosely validated inputs and inconsistent output formats make integrations fragile.",
    solution: "Designed a schema-first API with Pydantic validation, test coverage for boundary conditions, and documentation that makes data contracts explicit.",
    architectureDiagram: "5,000+ Multi-Feature Records -> EDA & Cleaning -> ColumnTransformer -> Random Forest Regressor -> FastAPI Query Service",
    pipelineSteps: [
      "Comprehensive Exploratory Data Analysis (EDA) and outlier detection with Pandas",
      "Automated feature encoding and robust scaling with ColumnTransformer",
      "Cross-validated hyperparameter tuning using RandomizedSearchCV",
      "Model evaluation with R², MAE, RMSE, and residual diagnostics",
      "FastAPI endpoint packaging with Pydantic schema validation for instant scoring"
    ],
    keyFeatures: [
      "Robust ColumnTransformer pipeline preventing data leakage",
      "Hyperparameter optimization with RandomizedSearchCV",
      "RESTful API with strict input data validation via Pydantic",
      "Comprehensive exploratory data analysis and feature correlation analysis"
    ],
    mlModelDetails: {
      algorithm: "Random Forest Regressor / Scikit-learn Pipeline",
      hyperparameters: "n_estimators: 250, max_depth: 14, min_samples_split: 5",
      evaluationMetrics: "R²: 0.878, MAE: 0.347, RMSE: 0.421",
      optimization: "RandomizedSearchCV with 5-fold cross-validation"
    },
    results: "Achieved strong predictive fit (0.878 R²) and verified sub-15ms response latency per API prediction.",
    whatILearned: "Best practices for leak-free Scikit-learn pipelines, statistical feature selection, and building production-grade predictive microservices."
  },
  {
    id: "ecoshield",
    title: "ECOSHIELD",
    badge: "Interactive Learning Platform",
    subtitle: "Interactive Learning & Visual Simulation Platform",
    date: "Aug 2024",
    githubLink: "https://github.com/SrijanSingh2006/ECOSHIELD-Bio-Pellet",
    github: "https://github.com/SrijanSingh2006/ECOSHIELD-Bio-Pellet",
    liveDemo: "#",
    technologies: ["Python", "JavaScript", "Flask", "React.js", "React-Leaflet", "Tailwind CSS", "Machine Learning"],
    domain: "Advanced Visualization | Concept to Execution Prototyping | Python & JS Integration | UI/UX Design",
    shortDescription: "An interactive spatial visualization web app that integrates machine learning estimation scripts directly into an intuitive React-Leaflet map interface.",
    description: "Designed and deployed an interactive visualization web app using React.js, React-Leaflet, Tailwind CSS, and Python Flask, integrating ML estimation scripts directly into the visual interface and iterating on UI/UX workflows based on user feedback.",
    bullets: [
      "Designed and deployed an interactive visualization web app using React.js, React-Leaflet, Tailwind CSS, and Python Flask to turn complex spatial data into intuitive visual maps.",
      "Integrated machine learning estimation scripts directly into the visual interface, allowing users to test scenarios and view results in real time.",
      "Iterated on UI/UX workflows based on user feedback to make the path from initial exploration to final decision making completely frictionless."
    ],
    resultsHighlight: "Frictionless concept to execution mapping integrating ML models with real time scenario testing",
    problem: "Farmers and biomass supply chains face price unpredictability, crop loss, and lack of geospatial visibility across regional harvest centers.",
    solution: "Built an interactive platform linking Random Forest price forecasting, yield prediction, and live interactive Leaflet maps with spatial indexing.",
    architectureDiagram: "Spatial Data Ingestion -> Scikit-learn Estimators -> Flask REST API -> React-Leaflet Visual GIS Map",
    pipelineSteps: [
      "Regional harvest data collection and geospatial feature extraction",
      "Training Random Forest and Isolation Forest anomaly models",
      "Integrating geospatial coordinates and distance calculations with Haversine",
      "Interactive map rendering with cluster markers in React-Leaflet",
      "Deploying prediction endpoints on Flask with structured response formats"
    ],
    keyFeatures: [
      "3 distinct Machine Learning use cases (Price, Yield, Anomaly)",
      "Interactive Leaflet geospatial mapping with real-time overlays",
      "Responsive design optimized for both desktop and mobile clients",
      "Integrated payment gateway simulation and supply chain tracking"
    ],
    mlModelDetails: {
      algorithm: "Random Forest Regressor + Isolation Forest Anomaly Detection",
      hyperparameters: "n_estimators: 180, max_features: 'sqrt', contamination: 0.05",
      evaluationMetrics: "Price Prediction MAE: ±4.8%, Anomaly Detection Precision: 94%",
      optimization: "Feature scaling and cross-validated parameter sweeps"
    },
    results: "Empowered rapid biomass valuation and enabled instant spatial radius queries across regional farmer clusters.",
    whatILearned: "Spatial data indexing, multi-model application architectures, and balancing ML complexity with clean frontend ergonomics."
  }
];

export const SKILLS = {
  programmingAndToolScripting: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Bash Scripting",
    "SQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Custom Workflow Scripting",
    "Repetitive Task Automation"
  ],
  aiExplorationAndVisualization: [
    "Generative AI Platforms",
    "Large Language Models",
    "Google GenAI SDK",
    "AI Powered Ideation & Visualization Workflows",
    "Prompt Engineering",
    "OpenCV",
    "Retrieval Augmented Generation (RAG)",
    "TensorFlow",
    "Keras",
    "Scikit-learn"
  ],
  applicationDeploymentAndUtilities: [
    "React.js",
    "Next.js",
    "FastAPI",
    "Flask",
    "Node.js",
    "Express.js",
    "Web App & Prototype Deployment",
    "Internal Utility Development",
    "RESTful APIs",
    "Docker",
    "AWS S3",
    "Playwright",
    "Git",
    "GitHub"
  ],
  designWorkflowAndInsights: [
    "Problem & Bottleneck Identification",
    "Concept to Execution Workflow Integration",
    "UI/UX & Creative Tooling Support",
    "Process Documentation, Tutorials & Best Practices",
    "Data Driven Workflow Analysis",
    "Pandas",
    "NumPy",
    "Chart.js",
    "React-Leaflet"
  ],
  collaborationAndCommunication: [
    "Cross Functional Collaboration across Industrial Design, Vehicle Design, UI/UX, CMF, Engineering & IT",
    "Explaining Technical Concepts to Non Technical Audiences",
    "Design Thinking",
    "Stakeholder Presentations"
  ],
  programming: ["Python", "JavaScript", "TypeScript", "Bash", "SQL"],
  technical: [
    "Generative AI",
    "Workflow Scripting",
    "Internal Utilities",
    "Python & JS Automation",
    "OpenCV Visual Processing",
    "RAG & Vector Search",
    "Prototyping",
    "Docker Deployment",
    "Data Driven Insights"
  ],
  languagesAndFrameworks: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React.js",
    "FastAPI",
    "Flask",
    "Node.js",
    "Tailwind CSS",
    "OpenCV",
    "TensorFlow"
  ],
  toolsAndTech: [
    "Docker",
    "AWS S3",
    "Git",
    "GitHub",
    "Playwright",
    "BullMQ",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Linux CLI"
  ]
};

export const SKILL_CATEGORIES = [
  {
    id: "tool-scripting",
    title: "AI workflows & evaluation",
    name: "AI workflows & evaluation",
    icon: "✳",
    color: "#7956d8",
    skills: [
      "LLMs & Generative AI", "Prompt & Context Engineering", "Agentic Workflows", "Tool Calling",
      "Structured Outputs", "RAG & Vector Databases", "Evals & Test Sets", "AI-led Quality Control"
    ]
  },
  {
    id: "ai-genai",
    title: "Engineering & full stack",
    name: "Engineering & full stack",
    icon: "⌘",
    color: "#a16ee8",
    skills: [
      "Python", "JavaScript", "TypeScript", "React", "Next.js", "FastAPI", "Flask", "Node.js", "REST APIs"
    ]
  },
  {
    id: "prototyping-deploy",
    title: "Data, schemas & automation",
    name: "Data, schemas & automation",
    icon: "↗",
    color: "#6f87e8",
    skills: [
      "JSON Schema & Pydantic", "PostgreSQL", "MySQL", "MongoDB", "Redis", "PyTest", "Playwright", "GitHub Actions", "Git"
    ]
  },
  {
    id: "design-thinking",
    title: "Product craft & collaboration",
    name: "Product craft & collaboration",
    icon: "◌",
    color: "#c07bdc",
    skills: [
      "Internal tools", "Assessment pipelines", "Human review gates", "Technical documentation", "Feedback loops", "Cross-functional delivery"
    ]
  }
];

export const EXPERIENCE = [
  {
    role: "AI Research & Workflow Engineering Intern",
    company: "CodeAlpha",
    date: "Jul 2026 - Aug 2026",
    period: "Jul 2026 - Aug 2026",
    type: "Remote Internship | Certificate",
    location: "Remote",
    certificateUrl: "https://drive.google.com/file/d/1I_2B9hjd6XQcvydrspvsg5dUjjd2550C/view?usp=sharing",
    highlights: [
      "Built governed, multi-step AI workflows in Python using prompt and context engineering, tool calling, and structured JSON outputs, with phase sequencing and human review gates.",
      "Implemented RAG and vector database pipelines with an AI-led quality-control layer for accuracy, completeness, and schema alignment.",
      "Created automated evaluation suites, benchmark test sets, and validation scripts to catch hallucinations and formatting errors early."
    ],
    technologies: ["Python", "LLMs", "RAG", "Vector databases", "Evaluation", "JSON Schema"]
  },
  {
    role: "Full-Stack AI Tooling & Schema Engineering Intern",
    company: "Prodigy Infotech",
    date: "Feb 2025 - Mar 2025",
    period: "Feb 2025 - Mar 2025",
    type: "Remote Internship | Certificate",
    location: "Remote",
    certificateUrl: "https://drive.google.com/file/d/1mXx4R0Mr8xgY0qGclvHf_kTqi9cvtATP/view",
    highlights: [
      "Developed internal full-stack tools, REST APIs, and authoring interfaces with Python, JavaScript, TypeScript, React, HTML, and CSS.",
      "Designed JSON schemas and relational structures to validate and store structured content from the start.",
      "Moved prompts, context, schemas, and templates into versioned GitHub repositories with branching, pull requests, and GitHub Actions validation."
    ],
    technologies: ["TypeScript", "React", "Python", "REST APIs", "JSON Schema", "GitHub Actions"]
  },
  {
    role: "Quality Control & Assessment Pipeline Intern",
    company: "Sukh Sagar Industries",
    date: "Mar 2025 - Apr 2025",
    period: "Mar 2025 - Apr 2025",
    type: "Remote Internship | Certificate",
    location: "Remote",
    certificateUrl: "https://drive.google.com/file/d/1S8na70Nu8c5CB89282aVpVc7tT7tZIOA/view?usp=sharing",
    highlights: [
      "Extended automated validation for structured assessments, including MCQs, single- and multi-file code submissions, file uploads, and rubric templates.",
      "Wrote and verified test cases for code correctness, answer coverage, rubric validity, and specification alignment before deployment.",
      "Worked with content authors to turn workflow pain points and review corrections into better source templates."
    ],
    technologies: ["Python", "Test cases", "Assessment pipelines", "Rubrics", "Quality control"]
  },
  {
    role: "AI Workflow & Technical Lead",
    company: "IEEE SSIT, SRMIST",
    date: "2023 - Present",
    period: "2023 - Present",
    type: "Position of Responsibility",
    location: "Chennai, India",
    certificateUrl: null,
    highlights: [
      "Built internal web utilities and assessment-checking scripts with Python, TypeScript, React, and GitHub Actions for campus coding and AI workshops.",
      "Standardized JSON templates, problem specs, and test verification pipelines for programming challenges used by hundreds of students.",
      "Gathered feedback from content creators and mentors, documented workflows, and shipped iterative platform improvements."
    ],
    technologies: ["Python", "TypeScript", "React", "GitHub Actions", "Assessment QC"]
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology, Kattankulathur",
    location: "Chennai, India",
    date: "2023 - 2027",
    period: "2023 - 2027",
    score: "CGPA: 9.14/10",
    cgpa: "9.14/10",
    focus: "Specialization in Software Development, Artificial Intelligence, Creative Design Workflows, Data Structures & Algorithms, and System Architecture."
  },
  {
    degree: "Class XII - Central Board of Secondary Education",
    institution: "RPM Academy",
    location: "Gorakhpur, Uttar Pradesh",
    date: "2022",
    period: "2022",
    score: "Percentage: 71.4%",
    cgpa: "71.4%",
    focus: "Physics, Chemistry, Mathematics, and Computer Science."
  },
  {
    degree: "Class X - Central Board of Secondary Education",
    institution: "RPM Academy",
    location: "Gorakhpur, Uttar Pradesh",
    date: "2020",
    period: "2020",
    score: "Percentage: 78.8%",
    cgpa: "78.8%",
    focus: "Science, Mathematics, and Foundational Computing."
  }
];

export const CERTIFICATIONS = [
  {
    id: "sap-genai",
    title: "SAP Certified | SAP Generative AI Developer",
    issuer: "SAP",
    date: "Mar 2026",
    focusDomain: "Generative AI Exploration | Prompt Engineering | AI Workflow Integration | Custom AI Tool Development",
    certificateUrl: "https://drive.google.com/file/d/1BtXONwe7tNIgyy489tZCdEmWT4ZfitpE/view?usp=sharing",
    description: "Generative AI Exploration, Prompt Engineering, AI Workflow Integration, Large Language Models (LLMs), SAP AI Core, and Custom AI Tool Development."
  },
  {
    id: "deloitte-analytics",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte | Forage",
    date: "Sep 2026",
    focusDomain: "Data Driven Insights | Workflow Bottleneck Analysis | Python Scripting | Visual Storytelling & Presentations",
    certificateUrl: "https://drive.google.com/file/d/1aGuQ2kFCFs2gmDN57RA-TucNMnsggfBz/view?usp=sharing",
    description: "Practical simulation focusing on Data Driven Insights, Workflow Bottleneck Analysis, Python Scripting, Visual Storytelling & Presentations."
  },
  {
    id: "mckinsey-forward",
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey.org",
    date: "2026",
    focusDomain: "Problem Identification | Design Thinking | Explaining Technical Concepts to Non Technical Audiences | Collaboration",
    certificateUrl: "https://drive.google.com/file/d/1BESZu8C1xLkY4G-B5dYbq9fJ-ZQvEiew/view?usp=sharing",
    description: "Selected participant in Core Skills Level learning journey: Problem Identification, Design Thinking, Explaining Technical Concepts to Non Technical Audiences, and Agile Collaboration."
  },
  {
    id: "nptel-ml",
    title: "Introduction to Machine Learning",
    issuer: "NPTEL | IIT Kharagpur",
    date: "Nov 2025",
    focusDomain: "AI Tool Evaluation & Testing | Predictive Modeling | Feature Engineering | Applied AI Experimentation",
    certificateUrl: "https://drive.google.com/file/d/1BtXONwe7tNIgyy489tZCdEmWT4ZfitpE/view?usp=sharing",
    description: "AI Tool Evaluation & Testing, Predictive Modeling, Feature Engineering, Supervised/Unsupervised Learning, and Applied AI Experimentation."
  },
  {
    id: "nptel-db",
    title: "Introduction to Database",
    issuer: "NPTEL | IIT Madras",
    date: "Apr 2025",
    focusDomain: "SQL | Data Collection & Structuring | Telemetry Storage | Backend Application Support",
    certificateUrl: "https://drive.google.com/file/d/1BtXONwe7tNIgyy489tZCdEmWT4ZfitpE/view?usp=sharing",
    description: "SQL, Relational Modeling, Data Collection & Structuring, Telemetry Storage, Indexing, and Backend Application Support."
  },
  {
    id: "cisco-net",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Nov 2025",
    focusDomain: "IT & Infrastructure Collaboration | Web Application Connectivity | Cloud & Local Tool Deployment",
    certificateUrl: "https://drive.google.com/file/d/1BtXONwe7tNIgyy489tZCdEmWT4ZfitpE/view?usp=sharing",
    description: "IT & Infrastructure Collaboration, Web Application Connectivity, Cloud & Local Tool Deployment, TCP/IP Protocols, and Network Diagnostics."
  },
  {
    id: "nptel-java",
    title: "Programming in Java",
    issuer: "NPTEL | IIT Kharagpur",
    date: "Oct 2024",
    focusDomain: "Object Oriented Programming | Modular Tool Building | Software Prototyping | Application Architecture",
    certificateUrl: "https://drive.google.com/file/d/1BtXONwe7tNIgyy489tZCdEmWT4ZfitpE/view?usp=sharing",
    description: "Object Oriented Programming (OOP), Modular Tool Building, Software Prototyping, Application Architecture, and Collections."
  }
];

export const SUMMARY = "Final-year Computer Science undergraduate at SRMIST focused on governed AI workflows, LLMs, prompt and context engineering, structured outputs, tool calling, and agentic pipelines. I build dependable AI systems with RAG, vector search, automated evals, and quality-control layers, alongside the schemas and internal tools teams need to ship them safely.";

export const PROFILE = {
  name: "Srijan Singh",
  role: "AI Workflow & Full-Stack Engineer",
  subRole: "Agentic AI · LLM evaluation · RAG · Internal tools",
  college: "SRM Institute of Science and Technology",
  cgpa: "9.14/10",
  email: "ss8566@srmist.edu.in",
  secondaryEmail: "srijansingh2006@gmail.com",
  phone: "+91 9838027276",
  rawPhone: "9838027276",
  location: "Chennai, India",
  bio: "I build governed AI workflows that are structured, testable, and ready for real users—from agentic pipelines and RAG systems to evaluation suites, schemas, and polished internal tools.",
  github: "https://github.com/SrijanSingh2006",
  linkedin: "https://www.linkedin.com/in/srijan-singh-999a552a9",
  leetcode: "https://leetcode.com/u/Srijan1234/",
  resumePdfUrl: `${import.meta.env.BASE_URL}Srijan_Singh_Resume.pdf`,
};

export const STATS = [
  { value: "9.14", label: "CGPA", caption: "SRMIST · CSE" },
  { value: "3", label: "Internships", caption: "AI · tooling · QC" },
  { value: "7", label: "Projects", caption: "AI systems & tools" },
  { value: "92.1%", label: "Model accuracy", caption: "EmotionAI benchmark" },
];

export const ABOUT_PARAGRAPHS = [
  "I'm a final-year Computer Science undergraduate at SRMIST with a 9.14 CGPA, focused on building reliable AI workflows and full-stack tools.",
  "My work spans agentic multi-step pipelines, structured outputs, RAG and vector databases, and automated evaluation that checks accuracy, completeness, and schema alignment.",
  "I care about the engineering around AI too: versioned prompts, human review gates, testable schemas, CI validation, and clear interfaces for authors and reviewers.",
  "I work across Python, TypeScript, React, FastAPI, and GitHub Actions, and enjoy turning loosely defined needs into tools people can trust."
];

export const PROFILES = [
  { name: "GitHub", url: "https://github.com/SrijanSingh2006", username: "SrijanSingh2006" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/srijan-singh-999a552a9", username: "srijan-singh-999a552a9" },
  { name: "LeetCode", url: "https://leetcode.com/u/Srijan1234/", username: "Srijan1234" },
];

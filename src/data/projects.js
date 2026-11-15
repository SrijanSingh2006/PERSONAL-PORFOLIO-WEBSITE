export const PROJECTS = [
  {
    id: "agricomply",
    title: "AgriComply AI",
    badge: "Applied AI · AgriTech",
    displayLabel: "RAG · CREDIT INTELLIGENCE",
    categories: ["AI & ML", "Full stack", "Data & product"],
    githubLink: "https://github.com/SrijanSingh2006/AgriComply-AI",
    liveDemo: null,
    technologies: ["Python", "Flask", "React", "Gemini", "XGBoost", "Vector search", "PostgreSQL"],
    shortDescription: "An agricultural compliance and credit platform combining document intelligence, a grounded legal assistant, and alternative credit scoring.",
    problem: "Farmers, producer organisations, and agri businesses face fragmented compliance rules and limited access to clear credit and subsidy information.",
    solution: "AgriComply brings document readiness, legal guidance, scheme discovery, and alternative credit signals into one role-aware workspace.",
    bullets: [
      "Built compliance gap analysis and document-readiness flows for individual farmers, FPOs, and agri-MSMEs.",
      "Added a Gemini-powered legal assistant grounded in agricultural documents with retrieval-augmented generation.",
      "Created an alternative AgriScore model with a feature-contribution view, plus document integrity checks using error-level analysis."
    ],
    buildSteps: [
      "Users upload agricultural and financial records to a role-specific workspace.",
      "The platform checks document readiness and highlights missing requirements.",
      "A Python service powers scoring and image-analysis workflows.",
      "Gemini and vector retrieval support grounded legal guidance and discovery."
    ],
    mlModelDetails: {
      algorithm: "XGBoost regression for AgriScore, with a Gemini-backed vector RAG assistant.",
      evaluationMetrics: "The README reports an R² score of 0.945 for the credit-score regressor; the feature view is described as SHAP-style."
    },
    resultsHighlight: "Compliance, legal guidance, and alternative credit insights in one workflow."
  },
  {
    id: "moodline",
    title: "Moodline",
    badge: "Machine Learning · NLP",
    displayLabel: "TEXT CLASSIFICATION",
    categories: ["AI & ML", "Full stack"],
    githubLink: "https://github.com/SrijanSingh2006/Emotion_Predictor",
    liveDemo: null,
    technologies: ["Python", "TensorFlow", "Keras", "BiGRU", "FastAPI", "Scikit-learn"],
    shortDescription: "A deep-learning text classifier that predicts six emotion categories and returns confidence scores through a FastAPI service.",
    problem: "Short text can carry nuanced emotional signals that simple keyword rules miss, making the output hard to interpret consistently.",
    solution: "Moodline cleans and tokenizes text, then uses a stacked bidirectional GRU to predict an emotion and return the full class-probability breakdown.",
    bullets: [
      "Classifies text into joy, sadness, anger, fear, love, and surprise.",
      "Compared recurrent architectures and selected a stacked BiGRU with class weighting.",
      "Serves predictions through typed FastAPI endpoints with a responsive interface and probability visualisation."
    ],
    buildSteps: [
      "Normalize and tokenize the input text.",
      "Pad the token sequence for the model input.",
      "Run a stacked bidirectional GRU with a six-class softmax output.",
      "Return the predicted label, confidence, and class probabilities through FastAPI."
    ],
    mlModelDetails: {
      algorithm: "Stacked Bidirectional Gated Recurrent Unit (BiGRU) with 300-dimensional embeddings.",
      evaluationMetrics: "92.10% test accuracy on the documented benchmark."
    },
    resultsHighlight: "92.10% test accuracy across six emotion classes."
  },
  {
    id: "skyline",
    title: "Skyline Stays",
    badge: "Machine Learning · Classification",
    displayLabel: "NYC AIRBNB PREDICTOR",
    categories: ["AI & ML", "Data & product"],
    githubLink: "https://github.com/SrijanSingh2006/nyc-airbnb-ml-predictor",
    liveDemo: "https://nyc-airbnb-ml-predictor.onrender.com",
    technologies: ["Python", "Scikit-learn", "FastAPI", "Pandas", "HTML", "CSS"],
    shortDescription: "An end-to-end model that predicts Airbnb room type from New York listing, location, price, and review features.",
    problem: "Airbnb room categories are imbalanced, and listing attributes need consistent preprocessing before they can be used for prediction.",
    solution: "A Scikit-learn pipeline imputes and transforms mixed data, then a class-balanced Random Forest predicts one of three room types behind a FastAPI endpoint.",
    bullets: [
      "Built preprocessing for numerical and neighbourhood features with imputation, scaling, and one-hot encoding.",
      "Compared several classifiers using stratified cross-validation and macro F1 to account for class imbalance.",
      "Deployed a validated prediction API and a responsive interface with per-class probabilities."
    ],
    buildSteps: [
      "Validate the ten listing inputs with Pydantic.",
      "Impute missing values and transform numeric and neighbourhood features.",
      "Predict with a class-balanced Random Forest pipeline.",
      "Return the room-type prediction and class probabilities to the web interface."
    ],
    mlModelDetails: {
      algorithm: "Class-balanced Random Forest classifier with a Scikit-learn ColumnTransformer pipeline.",
      evaluationMetrics: "85.59% test accuracy and 74.10% test macro F1, as reported in the repository README."
    },
    resultsHighlight: "85.59% test accuracy · 74.10% macro F1"
  },
  {
    id: "tripmacha",
    title: "TripMacha",
    badge: "Agentic AI · Travel",
    displayLabel: "WEB · MOBILE · API",
    categories: ["AI & ML", "Full stack"],
    githubLink: "https://github.com/SrijanSingh2006/tripmacha-ai-travel",
    liveDemo: null,
    technologies: ["React", "React Native", "Python", "FastAPI", "Gemini", "Playwright", "PostgreSQL"],
    shortDescription: "An India-focused trip planner with web and mobile clients and an optional AI-enabled travel API.",
    problem: "Planning a trip means coordinating destinations, dates, budget, travel options, and activities across separate tools.",
    solution: "TripMacha brings trip inputs and itinerary planning into web and mobile experiences, with optional Gemini-backed planning and travel searches through FastAPI.",
    bullets: [
      "Built separate React web and React Native mobile clients for trip planning.",
      "Supports route, dates, duration, group size, budget, and sample flight, stay, and experience options.",
      "Keeps the mobile demo usable with local fallback data when the API services are unavailable."
    ],
    buildSteps: [
      "Collect trip route, dates, group size, and budget from the client.",
      "Use the optional FastAPI backend for AI planning and travel-search workflows.",
      "Run background tasks and browser-based collection with Celery, Redis, and Playwright.",
      "Present the itinerary in the web or mobile app, with demo fallback data when needed."
    ],
    mlModelDetails: {
      algorithm: "Optional Gemini-backed itinerary planning through the FastAPI service.",
      evaluationMetrics: "No model benchmark is reported in the repository README."
    },
    resultsHighlight: "A shared travel-planning experience across web, mobile, and an optional AI API."
  },
  {
    id: "ecoshield",
    title: "EcoShield",
    badge: "Applied ML · AgriTech",
    displayLabel: "EDGE AI · GEOSPATIAL",
    categories: ["AI & ML", "Full stack", "Data & product"],
    githubLink: "https://github.com/SrijanSingh2006/ECOSHIELD-Bio-Pellet",
    liveDemo: null,
    technologies: ["React", "TensorFlow.js", "Python", "Flask", "Scikit-learn", "Leaflet"],
    shortDescription: "An agri-tech platform for biomass matching, farm insights, geospatial exploration, and predictive maintenance.",
    problem: "Farmers and biomass processors need clearer ways to assess crop residue, find nearby plants, and plan supply-chain decisions.",
    solution: "EcoShield combines browser-based analysis, Python ML services, and a map-based command centre for biomass and plant discovery.",
    bullets: [
      "Includes an in-browser biomass quality analyser and spoilage-risk workflow.",
      "Uses a Flask and Scikit-learn service for yield estimation, predictive maintenance, and market-price forecasting.",
      "Connects plant discovery and geospatial views with a carbon-offset ledger concept."
    ],
    buildSteps: [
      "Run selected quality-analysis interactions in the browser with TensorFlow.js.",
      "Send forecasting and anomaly-analysis tasks to the Python Flask service.",
      "Explore plants and agricultural context in a React-Leaflet map interface.",
      "Bring results into a shared workspace for biomass supply-chain decisions."
    ],
    mlModelDetails: {
      algorithm: "TensorFlow.js browser analysis and Scikit-learn models including Random Forest yield estimation and Isolation Forest anomaly detection.",
      evaluationMetrics: "The repository describes the inputs as simulated satellite NDVI data; it does not report model accuracy."
    },
    resultsHighlight: "Edge analysis, predictive services, and geospatial tools for biomass workflows."
  },
  {
    id: "threadiq",
    title: "ThreadIQ",
    badge: "AI Product · Commerce",
    displayLabel: "PRODUCT INTELLIGENCE",
    categories: ["AI & ML", "Full stack", "Data & product"],
    githubLink: "https://github.com/SrijanSingh2006/threadiq",
    liveDemo: "https://frontend-chi-two-80.vercel.app",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Gemini", "Pytest", "Vitest"],
    shortDescription: "A commerce product platform connecting customer research, storefront signals, analytics, experimentation, and operations.",
    problem: "Customer feedback, shopping behaviour, product experiments, and delivery operations often sit in disconnected tools.",
    solution: "ThreadIQ brings research, storefront, analytics, experimentation, and operations into a connected workspace, with a database-grounded AI copilot.",
    bullets: [
      "Connects customer research, a fashion storefront, product analytics, experimentation, and operations workflows.",
      "Includes funnel and retention analysis, RFM segmentation, feature flags, and experiment statistics.",
      "Adds Gemini-powered product workflows with a deterministic fallback when an API key is unavailable."
    ],
    buildSteps: [
      "Capture research, storefront interactions, and operational records in shared product workflows.",
      "Use PostgreSQL-backed data to power analytics and experimentation views.",
      "Run domain-grounded copilot actions through the FastAPI service.",
      "Fall back to deterministic behaviour for supported workflows when AI credentials are not configured."
    ],
    mlModelDetails: {
      algorithm: "Gemini-powered generative workflows grounded in application data, with deterministic fallback.",
      evaluationMetrics: "The repository documents Pytest and Vitest suites; no model-quality benchmark is stated here."
    },
    resultsHighlight: "One connected workspace for discovery, experimentation, analytics, and operations."
  },
  {
    id: "reachinbox",
    title: "ReachInbox AI",
    badge: "Distributed Systems · Workflow",
    displayLabel: "QUEUES · RATE LIMITS",
    categories: ["Full stack", "Data & product"],
    githubLink: "https://github.com/SrijanSingh2006/ReachInboxAI",
    liveDemo: null,
    technologies: ["Next.js", "TypeScript", "Node.js", "BullMQ", "Upstash Redis", "PostgreSQL"],
    shortDescription: "A queued email-scheduling system with sender limits, delayed jobs, retries, and persistent delivery state.",
    problem: "Sending email synchronously can lead to rate-limit breaches, lost work after restarts, and duplicate dispatch after retries.",
    solution: "ReachInbox moves email jobs through a Redis-backed queue with per-sender limits, cadence locks, retry rules, and database-backed status.",
    bullets: [
      "Applies a configurable limit of 200 messages per sender each hour and a 2-second minimum interval between sends.",
      "Uses BullMQ retries with exponential backoff and deterministic job identifiers to make work traceable.",
      "Persists delivery state in Supabase PostgreSQL and exposes queue activity through Bull-Board."
    ],
    buildSteps: [
      "Validate requests and store each job with a deterministic identifier.",
      "Schedule delayed work in BullMQ backed by Upstash Redis.",
      "Check sender limits and acquire the cadence lock before delivery.",
      "Record outcomes in PostgreSQL and retry transient failures with backoff."
    ],
    mlModelDetails: null,
    resultsHighlight: "Traceable asynchronous delivery with explicit rate and retry controls."
  },
  {
    id: "paypulse",
    title: "PayPulse AI",
    badge: "FinTech · Cross-platform",
    displayLabel: "MOBILE · WEB · API",
    categories: ["Full stack", "Data & product"],
    githubLink: "https://github.com/SrijanSingh2006/paypulse-ai",
    liveDemo: "https://dist-three-kappa-22.vercel.app",
    technologies: ["React Native", "Expo", "Flutter", "TypeScript", "Node.js", "Express"],
    shortDescription: "An employee financial-wellbeing demo with separate React Native and Flutter clients backed by one REST API.",
    problem: "Employees and HR teams often use separate interfaces to review pay information, benefits, wage advances, and expense claims.",
    solution: "PayPulse combines employee and HR demo workflows across mobile and web clients with a shared Node and Express API.",
    bullets: [
      "Includes payroll and payslip summaries, simulated earned-wage access, and expense claims with review states.",
      "Provides separate React Native and Flutter mobile applications plus an installable web experience.",
      "Connects employee and HR flows through a shared REST API and demo authentication."
    ],
    buildSteps: [
      "Sign in to the employee or HR demo workspace.",
      "Submit and review simulated wage-advance or expense activity.",
      "Share API workflows across the Expo/React Native and Flutter clients.",
      "Render the Expo experience in a browser through React Native Web."
    ],
    mlModelDetails: null,
    resultsHighlight: "A cross-platform employee and HR experience with a shared API. Demo financial data is simulated."
  },
  {
    id: "excel-analytics",
    title: "Excel Analytics Platform",
    badge: "Data Tools · Full stack",
    displayLabel: "SPREADSHEETS · VISUALS",
    categories: ["Full stack", "Data & product"],
    githubLink: "https://github.com/SrijanSingh2006/Excel-analytical-platform-main",
    liveDemo: null,
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Chart.js", "Three.js"],
    shortDescription: "A spreadsheet analysis app for uploads, interactive 2D and 3D charts, saved work, and account administration.",
    problem: "Spreadsheet data is difficult to explore quickly when users need to build charts and keep useful results organised.",
    solution: "The platform parses Excel files and lets users select fields for interactive visualisations, with chart history and saved outputs.",
    bullets: [
      "Parses .xls and .xlsx files with SheetJS and supports multiple chart types.",
      "Renders 2D charts with Chart.js and 3D bar charts with Three.js.",
      "Includes authenticated workspaces, upload history, saved charts, and an admin panel."
    ],
    buildSteps: [
      "Upload a spreadsheet and parse its columns in the browser.",
      "Choose chart fields and a visualisation type.",
      "Render 2D or 3D charts and export the result.",
      "Store upload history and saved charts for the signed-in user."
    ],
    mlModelDetails: null,
    resultsHighlight: "An interactive path from spreadsheet upload to shareable visual analysis."
  }
];

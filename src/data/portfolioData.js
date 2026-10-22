export const PROJECTS = [
  {
    id: "tripmacha",
    title: "TRIPMACHA",
    badge: "AI Powered Ideation & Workflows",
    subtitle: "AI Powered Ideation, Prompt Workflow & Prototype Platform",
    date: "Jun 2026",
    githubLink: "https://github.com/SrijanSingh2006/tripmacha-ai-travel",
    github: "https://github.com/SrijanSingh2006/tripmacha-ai-travel",
    liveDemo: "#",
    technologies: ["Python", "JavaScript", "React.js", "FastAPI", "Google GenAI SDK", "Playwright", "Docker", "PostgreSQL"],
    domain: "AI Tool Integration | Frictionless Workflows | Prototype Deployment | Automated Ideation",
    shortDescription: "An accessible web application and prompt orchestration platform that turns early concepts and user prompts into structured, interactive itineraries.",
    description: "Designed and deployed an accessible web application using React.js, FastAPI, and Google GenAI SDK to turn early concepts and user inputs into structured visual itineraries with automated Playwright data pipelines and Docker deployment.",
    bullets: [
      "Designed and deployed an accessible web application using React.js, FastAPI, and Google GenAI SDK to turn early concepts and user inputs into structured visual itineraries.",
      "Built streamlined prompt workflows and Python automation scripts with Playwright to eliminate repetitive research tasks and accelerate concept to execution speed.",
      "Containerized and deployed the application with Docker so internal teams and end users could access the tool seamlessly without setup friction."
    ],
    resultsHighlight: "Eliminated repetitive research overhead and accelerated concept to execution speed",
    problem: "Designers and users spend hours manually searching and synthesizing fragmented data across disparate platforms, causing information overload and friction in creative planning.",
    solution: "Engineered an automated crawler with Playwright combined with Google GenAI SDK to synthesize unstructured data into structured, personalized interactive plans asynchronously.",
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
    badge: "Visual Processing & Generative AI",
    subtitle: "Visual Processing, Generative AI & Workflow Utility Platform",
    date: "Jan 2026",
    githubLink: "https://github.com/SrijanSingh2006/AgriComply-AI",
    github: "https://github.com/SrijanSingh2006/AgriComply-AI",
    liveDemo: "#",
    technologies: ["Python", "JavaScript", "React.js", "Flask", "OpenCV", "AWS S3", "RAG", "Vector Database"],
    domain: "Visual & Image Pipelines | AI Powered Utilities | Workflow Integration | Cloud Deployment",
    shortDescription: "A full stack workflow utility combining OpenCV visual document enhancement, OCR extraction, and RAG based AI assistants into a unified interface.",
    description: "Built and deployed a full stack web application using Python, Flask, and React.js that integrates OpenCV visual processing and RAG based AI assistants into a unified interface, replacing manual verification with automated cloud deployed scripts.",
    bullets: [
      "Built and deployed a full stack web application using Python, Flask, and React.js that integrates OpenCV visual processing and RAG based AI assistants into a unified interface.",
      "Replaced repetitive manual inspection and lookup tasks with automated image enhancement scripts and natural language query workflows.",
      "Authored clear usage documentation and deployed the utility on AWS S3 and cloud infrastructure for frictionless access by non technical users."
    ],
    resultsHighlight: "Replaced repetitive manual verification with automated OpenCV scripts and sub-2s RAG queries",
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
    badge: "Task Automation & Queue Engine",
    subtitle: "Automated Task Execution & Workflow Bottleneck Eliminator",
    date: "Oct 2026",
    githubLink: "https://github.com/SrijanSingh2006/ReachInboxAI",
    github: "https://github.com/SrijanSingh2006/ReachInboxAI",
    liveDemo: "#",
    technologies: ["JavaScript", "TypeScript", "Next.js", "Node.js", "Express.js", "BullMQ", "Redis", "PostgreSQL"],
    domain: "Repetitive Task Automation | Internal Web Utilities | Process Optimization | Scalable Scripting",
    shortDescription: "A high performance web utility and queue engine built with BullMQ and Redis to eliminate high friction, repetitive task bottlenecks automatically.",
    description: "Identified high friction, repetitive scheduling bottlenecks and engineered an automated web utility using JavaScript, TypeScript, Next.js, BullMQ, and Redis to execute batch background operations with visual progress monitoring.",
    bullets: [
      "Identified high friction, repetitive scheduling bottlenecks and engineered a simple, automated web utility using JavaScript, TypeScript, Next.js, and Node.js.",
      "Built background scripting pipelines with BullMQ and Redis to handle batch execution automatically while keeping the user interface clean and intuitive.",
      "Designed visual progress dashboards to collect operational data and present workflow efficiency gains to stakeholders."
    ],
    resultsHighlight: "Zero task loss under heavy concurrent loads with automated batch scripting",
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
    badge: "Interactive Visualization & UI/UX",
    subtitle: "Interactive Data Visualization & Workflow Insights Platform",
    date: "Mar 2025",
    githubLink: "https://github.com/SrijanSingh2006/Excel-analytical-platform-main",
    github: "https://github.com/SrijanSingh2006/Excel-analytical-platform-main",
    liveDemo: "#",
    technologies: ["JavaScript", "TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    domain: "Data Driven Insights | Interactive Visualization | UI/UX Prototyping | Web App Deployment",
    shortDescription: "A designer friendly web utility that parses spreadsheet files in browser and generates interactive visual dashboards in seconds with zero configuration.",
    description: "Developed and deployed a frictionless web utility using React.js, Tailwind CSS, and Chart.js that transforms raw spreadsheet files into interactive visual dashboards in seconds, assisting teams in collecting operational data and uncovering workflow bottlenecks.",
    bullets: [
      "Developed and deployed a frictionless web utility using React.js, Tailwind CSS, and Chart.js that transforms raw spreadsheet files into interactive visual dashboards in seconds.",
      "Assisted teams in collecting and analyzing operational data to uncover workflow bottlenecks and inform which process problems to solve next.",
      "Designed an intuitive, designer friendly UI/UX with zero configuration overhead, enabling non technical stakeholders to generate presentation ready visuals."
    ],
    resultsHighlight: "Parsed 100,000+ cells in under 200ms with zero configuration and instant presentation ready visuals",
    problem: "Non-technical users and designers struggle to extract instant visual patterns and trends from complex, multi-tab tabular spreadsheet datasets.",
    solution: "Built a web-based data visualization platform that parses spreadsheet files in-browser, calculates statistics instantly, and renders interactive 2D and 3D charts.",
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
    badge: "Creative Sentiment & Feedback AI",
    subtitle: "AI Powered Creative Sentiment & User Feedback Analyzer",
    date: "Jun 2026",
    githubLink: "https://github.com/SrijanSingh2006/Emotion_Predictor",
    github: "https://github.com/SrijanSingh2006/Emotion_Predictor",
    liveDemo: "#",
    technologies: ["Python", "TensorFlow", "Keras", "NLP", "RNN", "LSTM", "BiGRU", "Custom Scripting"],
    domain: "AI Exploration & Testing | User Experience Insights | Python Scripting | Model Evaluation",
    shortDescription: "A deep learning NLP system and Python scripting pipeline benchmarking neural architectures to classify qualitative user feedback with 92.1% accuracy.",
    description: "Explored and tested multiple deep learning architectures in Python to classify user sentiment and qualitative feedback with 92.1% accuracy, creating lightweight scripts to automate text preprocessing and document best practices for product teams.",
    bullets: [
      "Explored and rigorously tested multiple deep learning architectures in Python to classify user sentiment and qualitative feedback with 92.1% accuracy.",
      "Built lightweight Python scripts to automate text preprocessing and summarize user reactions into clear, actionable insights for product and design teams.",
      "Documented model capabilities, limitations, and best practices to help stakeholders integrate sentiment insights into their ideation process."
    ],
    resultsHighlight: "92.1% test accuracy achieved through Bidirectional GRU experimentation and lightweight Python scripting",
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
    badge: "Behavioral Analytics & Fast API",
    subtitle: "Behavioral Data Insights & FastAPI Prototype Tool",
    date: "Feb 2026",
    githubLink: "https://github.com/SrijanSingh2006/Mansick_StithiMentalytics",
    github: "https://github.com/SrijanSingh2006/Mansick_StithiMentalytics",
    liveDemo: "#",
    technologies: ["Python", "FastAPI", "Pandas", "NumPy", "Scikit-learn", "REST APIs"],
    domain: "Data Driven Problem Identification | FastAPI Deployment | Python Utilities | Workflow Analytics",
    shortDescription: "A data analytics pipeline and lightweight FastAPI web service trained on 5,000+ multivariate records to uncover user behavioral patterns and pain points.",
    description: "Collected and analyzed multivariate behavioral datasets using Python, Pandas, and Scikit-learn to uncover underlying patterns, wrapping models into a lightweight FastAPI web service with clear API documentation.",
    bullets: [
      "Collected and analyzed multivariate behavioral datasets using Python, Pandas, and Scikit-learn to uncover underlying patterns and user pain points.",
      "Wrapped predictive models into a lightweight FastAPI web service so insights could be queried effortlessly via simple web interfaces.",
      "Created clear API documentation and visual summaries to present analytical findings and recommendations to non technical audiences."
    ],
    resultsHighlight: "0.878 R² and 0.347 MAE with lightweight FastAPI query interface",
    problem: "Behavioral health assessments often rely on subjective impressions without quantified predictive modeling over multivariate lifestyle patterns.",
    solution: "Developed an automated regression pipeline using Scikit-learn Pipelines, ColumnTransformer, and RandomizedSearchCV deployed as a FastAPI web service.",
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
    badge: "Spatial Visualization & Prototyping",
    subtitle: "Interactive Spatial Visualization & Concept Prototyping App",
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
    title: "Programming & Tool Scripting",
    name: "Programming & Tool Scripting",
    icon: "💻",
    color: "#6366f1",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Bash Scripting",
      "SQL",
      "HTML5 / Tailwind CSS",
      "Repetitive Task Automation"
    ]
  },
  {
    id: "ai-genai",
    title: "AI Exploration & Visualization",
    name: "AI Exploration & Visualization",
    icon: "🧠",
    color: "#8b5cf6",
    skills: [
      "Generative AI Platforms",
      "Google GenAI SDK",
      "Prompt Engineering",
      "OpenCV Image Processing",
      "RAG & Vector Databases",
      "AI Powered Ideation"
    ]
  },
  {
    id: "prototyping-deploy",
    title: "Deployment & Internal Utilities",
    name: "Deployment & Internal Utilities",
    icon: "🚀",
    color: "#22d3ee",
    skills: [
      "React.js & Next.js",
      "FastAPI & Flask",
      "Node.js & Express.js",
      "Web App & Prototype Deployment",
      "Docker Containers",
      "AWS S3 & Cloud Storage",
      "Playwright Automation"
    ]
  },
  {
    id: "design-thinking",
    title: "Design Workflows & Insights",
    name: "Design Workflows & Insights",
    icon: "🎨",
    color: "#10b981",
    skills: [
      "Problem & Bottleneck Identification",
      "Concept to Execution Workflows",
      "UI/UX & Creative Tooling Support",
      "Process Documentation & Tutorials",
      "Data Driven Workflow Analysis",
      "Cross Functional Collaboration"
    ]
  }
];

export const EXPERIENCE = [
  {
    role: "AI Tool Exploration & Scripting Intern",
    company: "CodeAlpha",
    date: "Jul 2026 - Aug 2026",
    period: "Jul 2026 - Aug 2026",
    type: "Remote Internship | Certificate",
    location: "Remote",
    certificateUrl: "https://drive.google.com/file/d/1I_2B9hjd6XQcvydrspvsg5dUjjd2550C/view?usp=sharing",
    overview: "Researched emerging AI models and built Python automation scripts to eliminate workflow bottlenecks and accelerate concept to execution cycles.",
    highlights: [
      "Researched, evaluated, and rigorously tested emerging AI models, generative platforms, and automated ideation tools to solve workflow bottlenecks and accelerate concept to execution cycles.",
      "Designed and built simple, frictionless Python scripts and AI powered automation utilities that eliminated repetitive manual tasks across creative and data processing pipelines.",
      "Collected and analyzed workflow performance data using Python and Pandas to uncover data driven insights and inform which process bottlenecks to solve next."
    ],
    technologies: ["Python", "Pandas", "AI Models", "Automation Scripts", "Workflow Analysis"]
  },
  {
    role: "Application Deployment & Workflow Integration Intern",
    company: "Prodigy Infotech",
    date: "Feb 2025 - Mar 2025",
    period: "Feb 2025 - Mar 2025",
    type: "Remote Internship | Certificate",
    location: "Remote",
    certificateUrl: "https://drive.google.com/file/d/1mXx4R0Mr8xgY0qGclvHf_kTqi9cvtATP/view",
    overview: "Built, customized, and deployed accessible internal web applications and interactive prototypes using JavaScript and React.js for immediate adoption by UI/UX teams.",
    highlights: [
      "Built, customized, and deployed accessible internal web applications, interactive prototypes, and lightweight utilities using JavaScript and React.js so tools were immediately usable by UI/UX designers.",
      "Developed and proposed streamlined workflows for integrating AI APIs and visualization components into existing design processes, from early ideation to final execution.",
      "Collaborated closely with UI/UX designers, engineers, and IT teams to understand their day to day technical challenges and ensure deployed tools were practical and genuinely adopted."
    ],
    technologies: ["JavaScript", "React.js", "AI APIs", "Internal Utilities", "Cross Functional Collaboration"]
  },
  {
    role: "Workflow Optimization & Process Documentation Intern",
    company: "Sukh Sagar Industries",
    date: "Mar 2025 - Apr 2025",
    period: "Mar 2025 - Apr 2025",
    type: "Remote Internship | Certificate",
    location: "Remote",
    certificateUrl: "https://drive.google.com/file/d/1S8na70Nu8c5CB89282aVpVc7tT7tZIOA/view?usp=sharing",
    overview: "Observed and interviewed team members to uncover friction points, created step by step documentation, and presented updates to stakeholders.",
    highlights: [
      "Observed and interviewed team members across UI/UX, visual content, and operations to uncover day to day friction points, bottlenecks, and repetitive manual tasks.",
      "Created clear, comprehensive process documentation, step by step tutorials, and best-practice guides so non technical and creative teams could adopt new tools effortlessly.",
      "Regularly presented workflow findings, progress updates, and tool recommendations to stakeholders, articulating design thinking and technical concepts to non technical audiences."
    ],
    technologies: ["Process Documentation", "Friction Mapping", "Step by Step Tutorials", "Stakeholder Presentations", "Design Thinking"]
  },
  {
    role: "Technical & Design Workflow Member",
    company: "IEEE SSIT, SRMIST",
    date: "2023 - Present",
    period: "2023 - Present",
    type: "Position of Responsibility",
    location: "Chennai, India",
    certificateUrl: null,
    overview: "Partnered with student designers to identify creative bottlenecks, deploy web utilities, and test generative AI workflows.",
    highlights: [
      "Partnered with student designers, UI/UX teams, and developers to identify bottlenecks in creative event workflows and deploy simple web utilities using JavaScript and Python.",
      "Explored and tested new generative AI and visualization tools, creating onboarding tutorials and best practices for rapid team adoption.",
      "Bridged communication between technical engineering teams and creative design members during collaborative workshops and product showcases."
    ],
    technologies: ["JavaScript", "Python", "Generative AI", "Tutorials", "Cross Team Communication"]
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

export const SUMMARY = "Engineering undergraduate at SRMIST with a strong software development focus and an acute interest in creative design and AI driven workflow optimization. Experienced in identifying workflow friction points, bottlenecks, and repetitive tasks across creative and technical teams, rigorously testing emerging AI platforms, and building simple, frictionless scripts and internal web applications using Python and JavaScript. Adept at integrating generative AI and visualization tools from initial ideation to final execution, authoring clear process documentation and tutorials, and explaining technical concepts to non technical stakeholders.";

export const PROFILE = {
  name: "Srijan Singh",
  role: "AI Generalist & Workflow Tools Developer",
  subRole: "AI Tool Building • Python & JavaScript • Frictionless Workflows",
  college: "SRM Institute of Science and Technology",
  cgpa: "9.14/10",
  email: "ss8566@srmist.edu.in",
  secondaryEmail: "srijansingh2006@gmail.com",
  phone: "+91 9838027276",
  rawPhone: "9838027276",
  location: "Bangalore / Chennai, India",
  bio: "Engineering undergraduate specializing in creative design and AI driven workflow optimization. I identify friction points across creative teams and build simple, frictionless scripts, internal utilities, and web applications in Python and JavaScript to accelerate execution from concept to final product.",
  github: "https://github.com/SrijanSingh2006",
  linkedin: "https://www.linkedin.com/in/srijan-singh-999a552a9",
  leetcode: "https://leetcode.com/u/Srijan1234/",
  resumePdfUrl: "https://drive.google.com/file/d/192eVKh2W3c9Ox8injM8KTWnIeb65oGRT/view?usp=sharing",
};

export const STATS = [
  { value: "7", label: "Interactive Platforms", caption: "AI & Workflow Tools" },
  { value: "92.1%", label: "Model Accuracy", caption: "Deep learning & NLP" },
  { value: "9.14", label: "CGPA", caption: "SRM University" },
  { value: "3", label: "Internships", caption: "AI, Web & Scripting" },
];

export const ABOUT_PARAGRAPHS = [
  "I'm an engineering undergraduate at SRM Institute of Science and Technology (9.14 CGPA) with a strong software development focus and an acute interest in creative design and AI driven workflow optimization.",
  "I specialize in identifying workflow friction points, bottlenecks, and repetitive tasks across creative and technical teams, rigorously testing emerging AI platforms, and building simple, frictionless scripts and internal web applications using Python and JavaScript.",
  "From building automated prompt orchestration utilities and multi-source collection tools (Google GenAI SDK, Playwright) to computer vision document workflows (OpenCV) and distributed queue engines (BullMQ, Redis), I build tools that are immediately accessible and usable.",
  "Adept at integrating generative AI and visualization tools from initial ideation to final execution, authoring clear process documentation and tutorials, and explaining technical concepts to non technical stakeholders."
];

export const PROFILES = [
  { name: "GitHub", url: "https://github.com/SrijanSingh2006", username: "SrijanSingh2006" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/srijan-singh-999a552a9", username: "srijan-singh-999a552a9" },
  { name: "LeetCode", url: "https://leetcode.com/u/Srijan1234/", username: "Srijan1234" },
];

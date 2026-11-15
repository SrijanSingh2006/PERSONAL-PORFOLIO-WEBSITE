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

export const SUMMARY = "Final-year Computer Science undergraduate at SRMIST working across AI/ML, applied AI, and full-stack software. I build models, data-backed products, and dependable applications with careful evaluation, clear interfaces, and reliable APIs.";

export const PROFILE = {
  name: "Srijan Singh",
  role: "AI/ML & Full-Stack Engineer",
  subRole: "Applied AI · Machine learning · Product engineering",
  college: "SRM Institute of Science and Technology",
  cgpa: "9.14/10",
  email: "ss8566@srmist.edu.in",
  secondaryEmail: "srijansingh2006@gmail.com",
  phone: "+91 9838027276",
  rawPhone: "9838027276",
  location: "Chennai, India",
  bio: "I build useful software across AI/ML and full-stack engineering—from tested models and agentic workflows to polished product interfaces and dependable APIs.",
  github: "https://github.com/SrijanSingh2006",
  linkedin: "https://www.linkedin.com/in/srijan-singh-999a552a9",
  leetcode: "https://leetcode.com/u/Srijan1234/",
  resumePdfUrl: `${import.meta.env.BASE_URL}Srijan_Singh_Resume.pdf`,
};

export const STATS = [
  { value: "9.14", label: "CGPA", caption: "SRMIST · CSE" },
  { value: "3", label: "Internships", caption: "AI · tooling · QC" },
  { value: "9", label: "Projects", caption: "AI · product · software" },
  { value: "92.10%", label: "Test accuracy", caption: "Moodline · NLP" },
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

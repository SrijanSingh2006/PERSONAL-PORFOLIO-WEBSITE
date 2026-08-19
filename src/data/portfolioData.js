export const PROJECTS = [
  {
    id: "agricomply",
    title: "AGRICOMPLY",
    badge: "AI-Driven Fintech & AgriTech",
    shortDescription: "Full-stack AI-powered fintech and AgriTech platform using Python, Flask, React.js, MySQL, and AWS S3.",
    description: "Developed a full-stack AI-powered fintech and AgriTech platform using Python, Flask, React.js, MySQL, and AWS S3, integrating a Machine Learning-based loan ranking model for predictive assessment and Generative AI-powered government scheme discovery using the Google Gemini API. Implemented a Computer Vision and OCR pipeline using OpenCV and Levenshtein distance for automated KYC document verification and document processing. Engineered RESTful APIs, data processing workflows, secure data handling, cloud storage integration, database management, and end-to-end AI application integration.",
    technologies: ["Python", "OpenCV", "OCR", "MySQL", "AWS S3", "Google Gemini API", "React.js", "Flask"],
    date: "Jan 2026",
    githubLink: "https://github.com/SrijanSingh2006/AgriComply-AI"
  },
  {
    id: "emotionai",
    title: "EmotionAI",
    badge: "Natural Language Processing",
    shortDescription: "End-to-end NLP and Deep Learning system for multi-class text emotion classification.",
    description: "Developed an end-to-end Natural Language Processing and Deep Learning system for multi-class text emotion classification using Python, TensorFlow, and Keras. Performed text preprocessing, tokenization, sequence padding, feature representation, class distribution analysis, and model evaluation. Implemented and compared RNN, LSTM, GRU, and Bidirectional GRU (BiGRU) architectures, achieving 92.1% test accuracy. Applied class weighting, confusion matrix analysis, and performance evaluation to improve model reliability, and deployed the trained deep learning model through a FastAPI REST API for real-time inference with confidence scores and probability outputs.",
    technologies: ["TensorFlow", "Keras", "NLP", "Deep Learning", "RNN", "LSTM", "GRU", "BiGRU", "FastAPI"],
    date: "Jun 2026",
    githubLink: "https://github.com/SrijanSingh2006/Emotion_Predictor"
  },
  {
    id: "mentalytics",
    title: "Mentalytics",
    badge: "Healthcare AI & Predictive Analytics",
    shortDescription: "Machine Learning predictive analytics system for mental health score prediction using 5000+ records.",
    description: "Developed an end-to-end Machine Learning predictive analytics system using more than 5,000 records containing behavioral, lifestyle, social-media, and demographic features. Performed Exploratory Data Analysis, data preprocessing, feature engineering, categorical encoding, feature scaling, and model evaluation using Scikit-learn Pipelines and ColumnTransformer. Implemented and compared Linear Regression and Random Forest Regression models and applied RandomizedSearchCV for hyperparameter tuning, achieving 0.878 R² and 0.347 MAE. Deployed the trained predictive model through a FastAPI REST API with structured input validation.",
    technologies: ["Pandas", "EDA", "Feature Engineering", "ColumnTransformer", "RandomizedSearchCV", "Regression", "Scikit-learn", "FastAPI"],
    date: "Feb 2026",
    githubLink: "https://github.com/SrijanSingh2006/Mansick_Stithi"
  },
  {
    id: "ecoshield",
    title: "ECOSHIELD",
    badge: "Full-Stack Web Development",
    shortDescription: "Agro Based E-Commerce Platform with ML price prediction and CV quality classification.",
    description: "Developed a full-stack AI-powered agricultural platform using React.js, Flask, and RESTful APIs, connecting farmers with bio-pellet industries. Implemented Scikit-learn Random Forest Regression models for biomass price prediction and crop yield estimation and used Isolation Forest for predictive maintenance anomaly detection. Developed a Computer Vision-based crop quality classification solution using a pre-trained image classification model and integrated GIS-based visualization, NASA fire data, Razorpay payments, and Haversine-based geolocation for real-world agricultural applications.",
    technologies: ["Scikit-learn", "Random Forest", "Isolation Forest", "Computer Vision", "React-Leaflet", "GIS", "Razorpay", "Haversine"],
    date: "Aug 2024",
    githubLink: "https://github.com/SrijanSingh2006?tab=repositories"
  },
  {
    id: "tripmacha",
    title: "TRIPMACHA",
    badge: "AI & Travel Technology",
    shortDescription: "AI Powered Travel Planning & Aggregation Platform using Google GenAI SDK.",
    description: "Developed a full-stack AI-powered travel planning and aggregation platform using React.js, FastAPI, PostgreSQL, and Docker. Integrated the Google GenAI SDK for intelligent itinerary generation and Playwright for automated multi-source travel data extraction. Engineered RESTful APIs using FastAPI and Uvicorn, implemented asynchronous background processing using Celery and Redis, integrated Google OAuth authentication, and developed a scalable containerized backend with a production-oriented deployment architecture.",
    technologies: ["React.js", "FastAPI", "Docker", "PostgreSQL", "Google GenAI SDK", "Playwright", "Celery", "Redis", "Google OAuth"],
    date: "Jun 2026",
    githubLink: "https://github.com/SrijanSingh2006?tab=repositories"
  },
  {
    id: "datalens",
    title: "DataLens",
    badge: "Web Development & Data Visualization",
    shortDescription: "Full Stack Excel Data Analytics Platform with automated statistical metrics and 3D WebGL visualization.",
    description: "Developed an end-to-end MERN data visualization platform for dynamic spreadsheet analysis. Leveraged React, TypeScript, and SheetJS to parse Excel files client-side, enabling automated statistical metrics calculation and interactive 2D/3D WebGL data visualization using Three.js and Chart.js. Built secure Express.js REST APIs backed by MongoDB Atlas with JWT token authentication, Multer file management, and an admin management dashboard.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Three.js", "Chart.js", "JWT"],
    date: "Mar 2025",
    githubLink: "https://github.com/SrijanSingh2006?tab=repositories"
  }
];

export const SKILLS = {
  technical: ["Machine Learning", "Deep Learning", "Data Preprocessing", "Data Analysis", "Feature Engineering", "Model Training", "Model Evaluation", "Model Optimization", "Hyperparameter Tuning", "Predictive Analytics", "Data Pipelines", "Model Deployment", "REST APIs", "EDA"],
  languagesAndFrameworks: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "FastAPI", "Flask", "OpenCV"],
  domainKnowledge: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Computer Vision", "Generative AI", "Predictive Modeling", "Data Analytics", "Data Visualization", "Classification", "Regression", "Clustering", "CNN", "RNN", "LSTM", "GRU"],
  toolsAndTech: ["Git", "GitHub", "Docker", "AWS", "AWS S3", "Google Cloud Platform (GCP)", "Microsoft Azure", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Celery", "Playwright", "Google Gemini API", "Google GenAI SDK"],
  programming: ["Python", "C++", "Java", "SQL", "JavaScript", "TypeScript"]
};

export const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    date: "Jul 2026 - Aug 2026",
    type: "Internship",
    location: "Remote",
    description: "Currently working as a Machine Learning Intern, gaining hands-on experience in machine learning model development using Python. Applying data preprocessing, feature engineering, supervised learning, unsupervised learning, and model evaluation techniques while developing real-world machine learning projects using Scikit-learn and TensorFlow. The experience involves working with machine learning workflows, preparing data for model development, applying appropriate algorithms, and evaluating model performance."
  },
  {
    role: "Developer Intern",
    company: "Prodigy Infotech",
    date: "Feb 2025",
    type: "Internship",
    location: "Remote",
    description: "Developed and deployed full-stack web applications using HTML, CSS, JavaScript, and React.js, with a focus on reliable and secure application behavior. Worked with cross-functional teams to analyze application workflows, dependencies, and potential failure points, while optimizing backend logic and RESTful API performance to improve data handling and system response efficiency. Gained practical exposure to Git version control, application deployment, and Agile development practices."
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY KATTANKULATHUR",
    location: "Chennai",
    date: "2027",
    score: "CGPA - 9.14/10"
  },
  {
    degree: "Class XII - CBSE (Mpc)",
    institution: "RPM ACADEMY",
    location: "Gorakhpur, Uttar Pradesh",
    date: "2022",
    score: "Percentage - 71.4%"
  },
  {
    degree: "Class X - CBSE (Mpc)",
    institution: "RPM ACADEMY",
    location: "Gorakhpur, Uttar Pradesh",
    date: "2020",
    score: "Percentage - 78.8%"
  }
];

export const CERTIFICATIONS = [
  {
    title: "SAP Certified-SAP Generative AI Developer",
    issuer: "SAP",
    date: "Mar 2026",
    description: "Earned the SAP Certified – SAP Generative AI Developer certification, validating knowledge of SAP Business AI capabilities, extending SAP Business Technology Platform (SAP BTP) applications using Large Language Models (LLMs), SAP AI Core, SAP AI Launchpad, and SAP Generative AI Hub."
  },
  {
    title: "PROGRAMMING IN JAVA",
    issuer: "NPTEL",
    date: "Oct 2024",
    description: "Successfully completed the NPTEL Programming in Java certification offered by IIT Kharagpur, covering object-oriented programming (OOP), Java programming fundamentals, classes and objects, inheritance, polymorphism, exception handling, multithreading, collections, and file handling."
  },
  {
    title: "INTRODUCTION TO DATABASE",
    issuer: "NPTEL",
    date: "Apr 2025",
    description: "Successfully completed the NPTEL Introduction to Database certification offered by IIT Madras, covering relational database concepts, SQL, ER modeling, relational algebra, normalization, transactions, indexing, and database design fundamentals."
  },
  {
    title: "INTRODUCTION TO MACHINE LEARNING",
    issuer: "NPTEL",
    date: "Nov 2025",
    description: "Successfully completed the NPTEL Introduction to Machine Learning certification, covering supervised and unsupervised learning, classification, regression, clustering, feature engineering, model evaluation, and machine learning fundamentals."
  }
];

export const SUMMARY = "Computer Science undergraduate with hands-on experience in Machine Learning, Deep Learning, Predictive Analytics, Natural Language Processing, Computer Vision, and Generative AI. Proficient in Python, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, OpenCV, and FastAPI, with practical experience in data preprocessing, data analysis, exploratory data analysis, feature engineering, machine learning model development, model training, model evaluation, performance analysis, and model deployment. Developed and deployed AI-driven solutions for predictive analytics, NLP, computer vision, document verification, and real-world data-driven applications, with experience integrating machine learning models into REST APIs and cloud-based environments using AWS S3. Strong foundation in Data Structures and Algorithms, DBMS, Operating Systems, Object-Oriented Programming, and software development.";

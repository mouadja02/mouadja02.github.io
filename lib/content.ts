// All copy and data for the site lives here, so the layout files stay about layout.

export const identity = {
  name: 'Mouad Jaouhari',
  part: 'MJ02',
  role: 'Data & AI Engineer',
  tagline: 'Signal-to-system converter',
  location: 'Pessac, France',
  docId: 'MJ02-DS',
  resume: '/resume.pdf',
  emails: [
    { label: 'Academic', address: 'mouad.jaouhari@bordeaux-inp.fr' },
    { label: 'Work', address: 'mouad.jaouhari@atos.net' },
  ],
  links: [
    { label: 'LinkedIn', handle: 'in/j-mouad', url: 'https://www.linkedin.com/in/j-mouad/' },
    { label: 'GitHub', handle: 'mouadja02', url: 'https://github.com/mouadja02' },
    { label: 'Kaggle', handle: 'mouadjaouhari', url: 'https://www.kaggle.com/mouadjaouhari' },
  ],
}

export const features = [
  'End-to-end data pipelines on AWS and Snowflake: Glue, Lambda, Step Functions, Airflow, Spark, Kafka',
  'Infrastructure as code with Terraform, HashiCorp certified',
  'AWS Solutions Architect Associate and SnowPro Core certified',
  'Machine learning from research to production: TensorFlow, deep Q-networks, custom CUDA kernels',
  'AI automation: n8n workflows, LLM agents, local-first tooling',
  'Builds open-source developer tools: Arkitect, dacli, and Veritable in Rust',
  'Published IEEE research on satellite IoT routing',
  'Maintains open Bitcoin datasets, refreshed daily by CI',
]

export const applications = [
  'Cloud data platforms and warehouse migrations',
  'Cost monitoring and FinOps tooling',
  'Market-data analytics and trading models',
  'AI agents and workflow automation',
]

export const description = [
  'Mouad Jaouhari (MJ02) is a data and AI engineer who trained in signal and image processing and now builds the systems that carry data from raw source to decision: cloud pipelines, warehouses, machine-learning models and AI agents.',
  'He works at Atos in Pessac, building AWS monitoring and cost-optimisation tooling for Sanofi projects. Before that: a Hadoop-to-Snowflake migration at Stellantis, reinforcement-learning trading research at Eviden, and satellite IoT routing research at ÉTS Montréal, published by IEEE.',
]

export const signalChain = [
  { name: 'Ingest', parts: 'Kafka · Glue · Lambda' },
  { name: 'Transform', parts: 'Spark · dbt · Airflow' },
  { name: 'Model', parts: 'TensorFlow · DQN · LLMs' },
  { name: 'Serve', parts: 'Snowflake · Streamlit' },
]

export const specs: { parameter: string; conditions: string; min: string; typ: string; max: string; unit: string }[] = [
  { parameter: 'Projects documented', conditions: 'See section 4', min: '10', typ: '13', max: '', unit: 'projects' },
  { parameter: 'Technologies in use', conditions: 'Across cloud, data, ML, DevOps', min: '25', typ: '', max: '', unit: 'tools' },
  { parameter: 'Certifications', conditions: 'MAX includes 2 in progress', min: '', typ: '10', max: '12', unit: 'certs' },
  { parameter: 'Peer-reviewed publications', conditions: 'IEEE, satellite IoT routing', min: '', typ: '1', max: '', unit: 'paper' },
  { parameter: 'Open-dataset GitHub stars', conditions: 'Two Bitcoin datasets', min: '', typ: '41', max: '', unit: 'stars' },
  { parameter: 'Countries studied or worked in', conditions: 'Morocco, France, Canada', min: '', typ: '3', max: '', unit: 'countries' },
  { parameter: 'Learning rate', conditions: 'No shutdown mode', min: '', typ: 'continuous', max: '', unit: '' },
]

const gh = (repo: string) => `https://github.com/mouadja02/${repo}`

export type Pin = {
  pin: number
  short: string
  name: string
  type: string
  description: string
  /** How it shows up in real work. Shown when the row is active. */
  detail: string
  /** A public repository where the technology is in use. */
  repo: { name: string; url: string; note: string }
}

export const pins: Pin[] = [
  {
    pin: 1, short: 'GCP', name: 'Google Cloud Platform', type: 'Cloud',
    description: 'Cloud infrastructure, BigQuery, and ML services for scalable data solutions.',
    detail: 'BigQuery warehouse modeling with a medallion architecture, plus Google Cloud Skills Boost certificates in ML for trading and computer vision.',
    repo: { name: 'Basic-DataWarehouse-Project', url: gh('Basic-DataWarehouse-Project'), note: 'warehouse build with ETL, data modeling and analytics' },
  },
  {
    pin: 2, short: 'AWS', name: 'Amazon Web Services', type: 'Cloud',
    description: 'Enterprise cloud computing, Lambda, S3, and data pipeline orchestration.',
    detail: 'The day-to-day platform at Atos and Stellantis: Glue, Lambda, Step Functions, S3 and CloudWatch. Solutions Architect Associate certified.',
    repo: { name: 'end2end-datawarehouse-project', url: gh('end2end-datawarehouse-project'), note: 'Glue, S3 and Athena in a streaming data platform' },
  },
  {
    pin: 3, short: 'CFLARE', name: 'Cloudflare', type: 'Cloud',
    description: 'Edge computing, CDN, and serverless deployments for global performance.',
    detail: 'Sits in front of self-hosted services and is part of the deployment pipeline for a home-lab Airflow.',
    repo: { name: 'airflow-self-hosted', url: gh('airflow-self-hosted'), note: 'used in the automated deploy workflow' },
  },
  {
    pin: 4, short: 'SNOW', name: 'Snowflake', type: 'Data',
    description: 'Cloud data warehouse with zero-copy cloning and elastic compute.',
    detail: 'Target warehouse of the Stellantis Hadoop migration and the Eviden Bitcoin analytics platform. SnowPro Core certified.',
    repo: { name: 'dacli', url: gh('dacli'), note: 'ships a Snowflake extension for the data-engineering agent' },
  },
  {
    pin: 5, short: 'SPARK', name: 'Apache Spark', type: 'Data',
    description: 'Distributed processing engine for large-scale analytics and ETL.',
    detail: 'Batch and streaming transforms over Kafka topics, written to Apache Iceberg tables.',
    repo: { name: 'end2end-datawarehouse-project', url: gh('end2end-datawarehouse-project'), note: 'Spark jobs over Kafka streams and Iceberg tables' },
  },
  {
    pin: 6, short: 'PGSQL', name: 'PostgreSQL', type: 'Data',
    description: 'Relational database for transactional and analytical workloads.',
    detail: 'A first-class engine in my data-diff tool, where comparisons are pushed down into the database as SQL.',
    repo: { name: 'veritable', url: gh('veritable'), note: 'PostgreSQL adapter built on tokio-postgres' },
  },
  {
    pin: 7, short: 'NEO4J', name: 'Neo4j', type: 'Data',
    description: 'Graph database for multi-hop questions that tables and vector stores answer badly.',
    detail: 'Graph modeling for dependency and vulnerability provenance: why a repository is exposed, and which single upgrade removes the most risk.',
    repo: { name: 'chokepoint', url: gh('chokepoint'), note: 'knowledge graph over Python dependencies and OSV advisories, in progress' },
  },
  {
    pin: 8, short: 'AIRFLOW', name: 'Airflow', type: 'Data',
    description: 'Workflow orchestration for scheduling and monitoring data pipelines.',
    detail: 'Orchestrated pipelines at Stellantis and Eviden. I also run my own instance on a Raspberry Pi with CI/CD.',
    repo: { name: 'airflow-self-hosted', url: gh('airflow-self-hosted'), note: 'production-style deployment for self-hosted environments' },
  },
  {
    pin: 9, short: 'PY', name: 'Python', type: 'Language',
    description: 'Primary language for data engineering, ML model development, and scripting.',
    detail: 'Everything from pipelines and models to a full agent harness with its own governance layer and test suite.',
    repo: { name: 'dacli', url: gh('dacli'), note: 'terminal data-engineering agent, four packages' },
  },
  {
    pin: 10, short: 'RUST', name: 'Rust', type: 'Language',
    description: 'Systems language for fast, single-binary data tooling.',
    detail: 'Used where correctness and speed both matter: a multi-crate workspace with one crate per database engine and a pure-logic core.',
    repo: { name: 'veritable', url: gh('veritable'), note: 'cross-database result-set comparison engine' },
  },
  {
    pin: 11, short: 'TF', name: 'TensorFlow', type: 'ML / AI',
    description: 'Deep learning framework for building and deploying neural networks.',
    detail: 'Built the deep Q-network trading model at Eviden, and small MLP and CNN models that run on a Raspberry Pi.',
    repo: { name: 'liteAI-RaspberryPi', url: gh('liteAI-RaspberryPi'), note: 'digit-recognition models for Raspberry Pi 3' },
  },
  {
    pin: 12, short: 'PINECONE', name: 'Pinecone', type: 'ML / AI',
    description: 'Vector database for RAG, semantic search, and recommendation systems.',
    detail: 'Retrieval backend in a benchmark comparing cache-augmented generation against RAG.',
    repo: { name: 'CAG-Lab', url: gh('CAG-Lab'), note: 'Pinecone retriever in a CAG vs RAG benchmark' },
  },
  {
    pin: 13, short: 'CUDA', name: 'CUDA', type: 'ML / AI',
    description: 'NVIDIA parallel computing platform for GPU-accelerated ML training.',
    detail: 'Wrote a neural network four times over, Python to NumPy to C to CUDA, to see where the speed comes from.',
    repo: { name: 'neural-network-cuda', url: gh('neural-network-cuda'), note: 'network from scratch with GPU kernels' },
  },
  {
    pin: 14, short: 'DOCKER', name: 'Docker', type: 'DevOps',
    description: 'Containerization for reproducible environments and scalable deployments.',
    detail: 'Every service I ship locally or self-host runs in a container, from Airflow to test databases.',
    repo: { name: 'airflow-self-hosted', url: gh('airflow-self-hosted'), note: 'containerized Airflow stack' },
  },
  {
    pin: 15, short: 'TFORM', name: 'Terraform', type: 'DevOps',
    description: 'Infrastructure as code for managing cloud resources declaratively.',
    detail: 'Provisioning for the AWS monitoring tooling at Atos and for my own projects. HashiCorp Terraform Associate certified.',
    repo: { name: 'chokepoint', url: gh('chokepoint'), note: 'project infrastructure defined in HCL' },
  },
  {
    pin: 16, short: 'GITHUB', name: 'GitHub', type: 'DevOps',
    description: 'Version control, CI/CD workflows, and collaborative code management.',
    detail: 'GitHub Actions as a scheduler: a dataset that rebuilds and republishes itself every day.',
    repo: { name: 'bitcoin-technical-indicators-dataset', url: gh('bitcoin-technical-indicators-dataset'), note: 'daily automated refresh through Actions' },
  },
  {
    pin: 17, short: 'BASH', name: 'Bash', type: 'DevOps',
    description: 'Shell scripting for automation, system administration, and data workflows.',
    detail: 'Installers, deploy scripts and the glue between tools.',
    repo: { name: 'skills', url: gh('skills'), note: 'install scripts for the skills collection' },
  },
  {
    pin: 18, short: 'N8N', name: 'n8n', type: 'Automation',
    description: 'Workflow automation for connecting APIs and building AI agents.',
    detail: 'Agent workflows that connect data sources to an LLM and deliver the result to a chat app.',
    repo: { name: 'Hevy-Coach', url: gh('Hevy-Coach'), note: 'workout analysis delivered through Telegram' },
  },
  {
    pin: 19, short: 'CLAUDE', name: 'Claude Code', type: 'Tools',
    description: 'AI coding assistant for rapid development and code review.',
    detail: 'I build for it as well as with it: plugins and skills that give coding agents new abilities.',
    repo: { name: 'arkitect', url: gh('arkitect'), note: 'Claude Code plugin with six skills' },
  },
  {
    pin: 20, short: 'CURSOR', name: 'Cursor AI', type: 'Tools',
    description: 'AI-first code editor with intelligent autocomplete and refactoring.',
    detail: 'Daily editor, fed by a shared library of agent skills.',
    repo: { name: 'skills', url: gh('skills'), note: 'skills that Cursor and other agents discover' },
  },
]

export type Project = {
  title: string
  category: string
  description: string
  technologies: string[]
  /** Screenshot, or a quick-start command when there is no picture worth showing. */
  image?: string
  command?: string
  github?: string
  live?: string
  liveLabel?: string
  stars?: number
  features?: string[]
}

export const projects: Project[] = [
  {
    title: 'Arkitect',
    category: 'AI / Agent tooling',
    description: 'Your coding agent draws the architecture: editable Draw.io and Excalidraw diagrams built from a small JSON spec, with real product icons.',
    technologies: ['JavaScript', 'Node.js', 'Draw.io', 'Excalidraw', 'Claude Code plugin', 'MCP'],
    command: 'npx arkitect excalidraw icon "postgres"',
    github: gh('arkitect'),
    live: 'https://www.npmjs.com/package/arkitect',
    liveLabel: 'npm package',
    stars: 10,
    features: [
      'Two engines, one workflow: Draw.io for formal architecture, Excalidraw for sketches and READMEs.',
      '6,012 icons bundled and searched offline by product name.',
      'Layout the builder works out: every edge connected, nothing routed through anything.',
      'Works with Claude Code, Codex, Cursor, Copilot and other agents. Zero dependencies.',
    ],
  },
  {
    title: 'dacli',
    category: 'AI / Data engineering',
    description: 'A data-engineering agent for the terminal that builds warehouses on your data platform and writes its own tools, behind a governance gate.',
    technologies: ['Python', 'Snowflake', 'LLM APIs', 'Rich', 'prompt-toolkit', 'Docker'],
    command: 'pipx install dacli',
    github: gh('dacli'),
    stars: 1,
    features: [
      'Every tool call declares a blast-radius tier, from safe to irreversible, and passes one governed dispatch path.',
      'A result counts as done only when the platform confirms it, never on the model\'s say-so.',
      'Extensions are validated in a child process and hot-reloaded with no restart.',
      'Secrets are encrypted and never reach generated code. 704 tests.',
    ],
  },
  {
    title: 'Veritable',
    category: 'Data engineering / Rust',
    description: 'A local, single-binary engine written in Rust that proves whether two tables hold the same data, within one database or across different ones.',
    technologies: ['Rust', 'DuckDB', 'PostgreSQL', 'tokio-postgres', 'SQL'],
    command: 'cargo run -p veritable',
    github: gh('veritable'),
    stars: 1,
    features: [
      'Joindiff: a full outer join on the key, with a cheap checksum precheck so identical tables exit fast.',
      'Computation is pushed into the databases. Row values never reach stdout.',
      'One crate per engine around a pure-logic core that tests without a database.',
      'Local-first: no SaaS, no telemetry, no daemon. Version 0.1 in progress.',
    ],
  },
  {
    title: 'Murmur',
    category: 'AI / Desktop app',
    description: 'A desktop overlay that listens to your voice, transcribes locally, runs it through a local LLM with prompt-engineering skills, and pastes the refined output anywhere.',
    technologies: ['TypeScript', 'Electron', 'Whisper', 'Ollama', 'Local LLM'],
    image: '/images/murmur.png',
    github: gh('murmur'),
    stars: 3,
    features: [
      'Voice-to-text transcription using a local Whisper model.',
      'Prompt-engineering "skills" for different output formats.',
      'Works with any app: Cursor, Claude, ChatGPT, VS Code, terminal.',
      'Fully local, no cloud dependencies, for privacy.',
    ],
  },
  {
    title: 'Agent Skills',
    category: 'AI / Agent tooling',
    description: 'A curated collection of 801 agent skills across 36 categories for Claude Code, Cursor and other clients: engineering craft, prompt engineering, design and more.',
    technologies: ['SKILL.md', 'Claude Code', 'Cursor', 'Python', 'Bash'],
    image: '/images/skills.jpg',
    github: gh('skills'),
    live: 'https://mouadja02.github.io/skills/',
    liveLabel: 'Browse the site',
    stars: 13,
    features: [
      'Each skill is a reusable instruction package with frontmatter and an agent-readable body.',
      'Searchable site and generated indexes per category.',
      'Install a single skill with one script.',
    ],
  },
  {
    title: 'Bitcoin Technical Indicators Dataset',
    category: 'Open source / Data',
    description: 'Bitcoin hourly OHLCV with 70+ technical indicators. A daily-updated dataset for ML and trading analysis.',
    technologies: ['Python', 'Pandas', 'TA-Lib', 'CCXT', 'GitHub Actions'],
    image: '/images/bitcoin-dataset.jpg',
    github: gh('bitcoin-technical-indicators-dataset'),
    stars: 31,
    features: [
      '70+ technical indicators computed hourly (RSI, MACD, Bollinger Bands, and more).',
      'Daily automated updates via GitHub Actions.',
      'Clean CSV format ready for ML model training.',
      'Covers multiple timeframes and exchange data.',
    ],
  },
  {
    title: 'AWS Cost Optimization & Monitoring Tool',
    category: 'Data engineering',
    description: 'Enterprise monitoring solution for Sanofi projects that optimizes costs and gives visibility into AWS resource usage and service performance.',
    technologies: ['AWS', 'Terraform', 'Python', 'CloudWatch', 'Lambda', 'Step Functions'],
    image: '/images/aws-monitoring.png',
    features: [
      'Automated cost tracking and optimization recommendations for AWS resources.',
      'Real-time performance monitoring using CloudWatch and custom metrics.',
      'Infrastructure as code with Terraform for consistent deployments.',
    ],
  },
  {
    title: 'Modern Data Engineering Platform',
    category: 'Data engineering',
    description: 'End-to-end data engineering project demonstrating modern practices with cloud-native technologies and open-source tools.',
    technologies: ['Apache Spark', 'Apache Kafka', 'AWS Glue', 'S3', 'Athena', 'Snowflake', 'Apache Iceberg', 'Docker'],
    image: '/images/data-platform.png',
    github: gh('end2end-datawarehouse-project'),
    stars: 4,
    features: [
      'Medallion architecture for structured data processing.',
      'Apache Iceberg for ACID transactions, schema evolution, and time travel.',
      'Hybrid cloud architecture combining AWS services with Snowflake.',
      'Real-time streaming with Apache Kafka and distributed processing with Spark.',
    ],
  },
  {
    title: 'AWS Certifications Coach',
    category: 'AI / Education',
    description: 'AI-powered learning platform that helps students prepare for AWS certification exams with instant answers, progress tracking, and practice tests.',
    technologies: ['n8n', 'Snowflake', 'Streamlit', 'Python', 'AWS'],
    image: '/images/aws-coach.png',
    live: 'https://aws-certifications-coach.streamlit.app/',
    liveLabel: 'Live app',
    features: [
      'AI chat via n8n workflows for instant answers to certification questions.',
      'Progress tracking with Snowflake analytics.',
      'Curated study resources for all AWS certification paths.',
      'Practice tests with realistic exam questions.',
    ],
  },
  {
    title: 'Bitcoin Trading Platform',
    category: 'Machine learning',
    description: 'A market analysis platform combining blockchain data with reinforcement learning for trading strategy optimization.',
    technologies: ['Snowflake', 'Python', 'TensorFlow', 'Airflow', 'Streamlit'],
    image: '/images/bitcoin-trading.png',
    features: [
      'Real-time blockchain data pipeline for up-to-the-minute analysis.',
      'DQN-based algorithmic trading model to identify optimal strategies.',
      'Interactive dashboard for market data and model performance.',
    ],
  },
  {
    title: 'Neural Network CUDA',
    category: 'Machine learning',
    description: 'A complete neural network from scratch, four times: Python, NumPy, C, then CUDA for GPU-accelerated training and inference.',
    technologies: ['CUDA', 'C', 'Python', 'NumPy', 'PyCUDA'],
    image: '/images/cuda.jpg',
    github: gh('neural-network-cuda'),
    stars: 1,
    features: [
      'Custom CUDA kernels for forward and backward propagation.',
      'GPU-optimized matrix operations for deep learning workloads.',
      'Benchmarks comparing CPU and GPU performance.',
    ],
  },
  {
    title: 'Cloud Data Migration',
    category: 'Data engineering',
    description: 'Enterprise-scale data migration from legacy Hadoop to a modern AWS and Snowflake architecture, designed for scalability and efficiency.',
    technologies: ['AWS', 'Snowflake', 'dbt', 'Airflow', 'Python'],
    image: '/images/data-migration.png',
  },
  {
    title: 'Bitcoin News & Sentiment Dataset',
    category: 'Open source / Data',
    description: 'Dataset of Bitcoin news articles and Fear & Greed Index data collected hourly from major cryptocurrency publications.',
    technologies: ['Python', 'Web scraping', 'NLP', 'Sentiment analysis', 'Dataset'],
    image: '/images/bitcoin-trading.png',
    github: gh('bitcoin-news-data'),
    stars: 10,
    features: [
      'Hourly collection of Bitcoin news from major crypto publications.',
      'Fear & Greed Index tracked alongside news sentiment.',
      'Structured CSV format for ML training and backtesting.',
    ],
  },
]

// Months are 1-based. `end: null` means the signal is still high.
export type Signal = {
  id: string
  label: string
  start: [number, number]
  end: [number, number] | null
  kind: 'work' | 'edu'
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
  link?: { label: string; url: string }
}

export const signals: Signal[] = [
  {
    id: 'atos',
    label: 'ATOS',
    start: [2025, 10],
    end: null,
    kind: 'work',
    company: 'Atos',
    role: 'Data Engineer',
    period: 'Oct 2025 to present',
    location: 'Pessac, France',
    description: [
      'Developed AWS monitoring and cost optimization tools for Sanofi enterprise projects.',
      'Implemented automated resource tracking and performance monitoring with AWS CloudWatch and Lambda.',
      'Designed infrastructure as code with Terraform for consistent, scalable deployments.',
    ],
    technologies: ['AWS', 'Terraform', 'Python', 'CloudWatch', 'Lambda', 'Cost optimization'],
  },
  {
    id: 'stellantis',
    label: 'STLA',
    start: [2025, 5],
    end: [2025, 7],
    kind: 'work',
    company: 'Stellantis',
    role: 'Data Engineer (Apprenticeship)',
    period: 'May 2025 to Jul 2025',
    location: 'Pessac, France',
    description: [
      'Architected and implemented EL data pipelines migrating from Hadoop to a modern AWS and Snowflake stack.',
      'Designed and orchestrated data processing workflows with AWS Glue, Lambda, and Step Functions.',
      'Optimized data flows, reducing processing times and improving data quality across legacy and modern systems.',
    ],
    technologies: ['AWS', 'Snowflake', 'Python', 'SQL', 'Airflow', 'Hadoop'],
  },
  {
    id: 'eviden',
    label: 'EVIDEN',
    start: [2025, 2],
    end: [2025, 7],
    kind: 'work',
    company: 'Eviden',
    role: 'Data Science Intern',
    period: 'Feb 2025 to Jul 2025',
    location: 'Pessac, France',
    description: [
      'Developed a Bitcoin market analysis solution using Snowflake and machine learning.',
      'Engineered a real-time blockchain data pipeline to ingest and process on-chain indicators for predictive modeling.',
      'Built a DQN (deep Q-network) model for developing and testing algorithmic trading strategies.',
    ],
    technologies: ['Snowflake', 'Python', 'TensorFlow', 'Airflow', 'Streamlit'],
  },
  {
    id: 'ets',
    label: 'ÉTS',
    start: [2024, 5],
    end: [2024, 9],
    kind: 'work',
    company: 'École de technologie supérieure',
    role: 'Research Intern',
    period: 'May 2024 to Sep 2024',
    location: 'Montréal, Canada',
    description: [
      'Researched routing algorithm optimization for satellite communications in non-terrestrial networks.',
      'Developed and simulated multi-hop routing strategies, improving data latency and network efficiency.',
      'Published the findings in an IEEE research paper on satellite IoT communication.',
    ],
    technologies: ['MATLAB', 'C++', 'Algorithm design', 'Network simulation'],
    link: { label: 'Read the IEEE paper', url: 'https://ieeexplore.ieee.org/document/10667193/' },
  },
]

export const eduSignal = { id: 'meng', label: 'M.ENG', start: [2023, 9] as [number, number], end: [2025, 9] as [number, number] }

export const education = [
  { rev: 'C', period: '2023 to Sep 2025', degree: "Master's in Signal & Image Processing", school: 'ENSEIRB-MATMECA, Bordeaux INP' },
  { rev: 'B', period: '2022 to 2023', degree: "Bachelor's in Electrical & Communications", school: 'ENSEIRB-MATMECA, Bordeaux INP' },
  { rev: 'A', period: '2020 to 2022', degree: 'Preparatory Classes MPSI/MP', school: 'Lycée OBA, Oujda, Morocco' },
]

export type Cert = { name: string; issuer: string; issued: boolean; credentialId?: string; validUntil?: string }

// Newest first. The first three are dated by their validity window; the
// rest carry no date on record and keep their original relative order.
export const certifications: Cert[] = [
  { name: 'AWS Certified Data Engineer - Associate', issuer: 'AWS', issued: false },
  { name: 'SnowPro Advanced: Data Engineer', issuer: 'Snowflake', issued: false },
  { name: 'AWS Certified Solutions Architect - Associate', issuer: 'AWS', issued: true, credentialId: '7a080c61-81d7-4f33-9607-4835b1fd534f', validUntil: 'Feb 13, 2029' },
  { name: 'SnowPro Core Certification', issuer: 'Snowflake', issued: true, credentialId: 'S102284-260201-COF', validUntil: 'Feb 01, 2028' },
  { name: 'Terraform Associate (003)', issuer: 'HashiCorp', issued: true, credentialId: '9c4a4945-0844-4927-80d7-6fd871ee305a', validUntil: 'Nov 01, 2027' },
  { name: 'Machine Learning for Trading', issuer: 'Google Cloud Skills Boost', issued: true, credentialId: 'NC1D4D6YB39E' },
  { name: 'Modern Data Engineering with Snowflake', issuer: 'Snowflake', issued: true, credentialId: 'Z1LFG4VV1KY1' },
  { name: 'Google IT Support Specialization', issuer: 'Google', issued: true, credentialId: '4NKNVNGX01MA' },
  { name: 'AI on Microsoft Azure', issuer: 'Microsoft', issued: true, credentialId: 'Z1LFG4VV1KY1' },
  { name: 'Machine Learning with Python', issuer: 'IBM', issued: true, credentialId: 'R7ED6GHYCRJH' },
  { name: 'Computer Vision Fundamentals with Google Cloud', issuer: 'Google Cloud Skills Boost', issued: true, credentialId: 'EP4BBWKU4XH1' },
  { name: 'Python Reinforcement Learning, Deep Q-Learning and TRFL', issuer: 'Udemy', issued: true, credentialId: 'UC-5392b2f8-caf1-4eb5-9f34-e066b06028b4' },
]

export const nav = [
  { id: 'overview', num: '1', label: 'Overview' },
  { id: 'specs', num: '2', label: 'Specs' },
  { id: 'skills', num: '3', label: 'Skills' },
  { id: 'projects', num: '4', label: 'Projects' },
  { id: 'experience', num: '5', label: 'Experience' },
  { id: 'credentials', num: '6', label: 'Credentials' },
  { id: 'contact', num: '7', label: 'Contact' },
]

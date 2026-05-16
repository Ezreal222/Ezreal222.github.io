export const personalInfo = {
  name: 'Yang Zheng',
  email: 'yz7906@nyu.edu',
  phone: '917-704-7977',
  github: 'https://github.com/Ezreal222',
  linkedin: 'https://www.linkedin.com/in/yang-zheng-nyu/',
  resumeUrl: '/resume.pdf',
  profilePhoto: '/profile.jpg',
  titles: [
    'Software Engineer',
    'Full-Stack Developer',
    'CS Master\'s @ NYU Tandon',
    'Cloud & Systems Builder',
  ],
  bio: `I'm a Computer Science graduate student at NYU Tandon School of Engineering with a
    Double Major in CS and Mathematics from NYU Courant. I enjoy building end-to-end systems — from
    serverless cloud pipelines to graphics engines — and I'm actively looking for software
    engineering opportunities where I can make an impact.`,
}

export const education = [
  {
    school: 'New York University — Tandon School of Engineering',
    degree: 'M.S. in Computer Science',
    dates: '2025 – May 2027',
    courses: [
      'Cloud Computing',
      'Big Data',
      'Software Engineering',
      'Computer Networking',
      'Applied Cryptography',
      'Blockchain & DLT',
    ],
  },
  {
    school: 'New York University — College of Arts & Science, Courant Institute of Mathematical Sciences',
    degree: 'B.A. in Computer Science & Mathematics',
    dates: '2021 – 2025',
    courses: [],
  },
]

export const experience = [
  {
    role: 'Teaching Assistant — Algorithms',
    company: 'NYU Courant Institute of Mathematical Sciences',
    dates: 'May – Aug 2025',
    bullets: [
      'Held weekly office hours and review sessions for CSCI-UA 310 undergraduates, fielding questions on mathematical proofs of algorithm correctness, LeetCode-style problem solving, and final exam preparation.',
      'Guided students through divide-and-conquer, greedy algorithms, dynamic programming, graph algorithms, and NP-completeness; reinforced rigorous proof techniques (induction, exchange arguments, reductions).',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Robotics and Automation Laboratory, Tsinghua University',
    dates: 'June – Aug 2023',
    bullets: [
      'Developed a data-driven method to estimate 3-D states of deformable linear objects from single-frame occluded point clouds, addressing real-world occlusion challenges in robotic perception.',
      'Trained a two-branch neural network exploiting global and local point cloud information; designed a fusion module combining both approaches for improved 3-D state estimation accuracy.',
    ],
  },
]

export type Project = {
  name: string
  description: string
  tech: string[]
  date: string
  github?: string
  liveDemo?: string
}

export const projects: Project[] = [
  {
    name: 'MiniVault — Crypto-Collateralized Stablecoin',
    description:
      'Three Etherscan-verified contracts (MiniUSD, OracleAdapter, Vault) on Ethereum Sepolia supporting deposit, mint, repay, withdraw, and liquidation against a live Chainlink ETH/USD feed at 150% collateralization. Engineered a same-block oracle circuit breaker halting minting on >5% intra-block price divergence (cf. Mango Markets, 2022); validated with a 33-case Hardhat test suite and a React + ethers.js frontend.',
    tech: ['Solidity', 'Hardhat', 'Chainlink', 'OpenZeppelin', 'ethers.js', 'TypeChain', 'React', 'Vite', 'TypeScript', 'Tailwind'],
    date: 'Spring 2026',
    github: 'https://github.com/Ezreal222/minivault',
    liveDemo: 'https://ezreal222.github.io/minivault/',
  },
  {
    name: 'Research Paper Summarizer',
    description:
      'Owned the Search Lambda on a 4-person team — an arXiv API client with parallel querying, paging, retry, and Cognito-authorized API Gateway routing, deduplicated with Semantic Scholar and tested in vitest. Also built the ops layer (CloudWatch dashboard, SNS alarms, X-Ray tracing across the Step Functions pipeline); helped land a v1.0 release at ~30s per summary, ~$0.20 per paper, $0 idle.',
    tech: ['TypeScript', 'Next.js', 'AWS Lambda', 'API Gateway', 'Step Functions', 'SQS', 'DynamoDB', 'S3', 'CloudFront', 'Cognito', 'Bedrock', 'CloudWatch', 'X-Ray', 'CDK'],
    date: 'Spring 2026',
    github: 'https://github.com/pmxlr8/research-summarizer',
    liveDemo: 'https://d24irdkbe9jj2b.cloudfront.net/',
  },
  {
    name: 'AI Photo Album',
    description:
      'Serverless photo album with natural-language search. Uploads are auto-labeled by AWS Rekognition and indexed in OpenSearch; search queries are parsed by Amazon Lex into keywords. Two Lambdas (index-photos on S3 PUT, search-photos on GET /search), CloudFormation for IaC, and CodePipeline + CodeBuild for backend / frontend CI/CD.',
    tech: ['Python', 'JavaScript', 'AWS Lambda', 'API Gateway', 'S3', 'Rekognition', 'Lex', 'OpenSearch', 'CloudFormation', 'CodePipeline', 'CodeBuild'],
    date: 'Spring 2026',
    github: 'https://github.com/Ezreal222/photo-album-submission',
  },
  {
    name: 'Dining Concierge Chatbot',
    description:
      'Architected a serverless pipeline across 9 AWS services delivering personalized restaurant recommendations from 1,300+ Manhattan restaurants, with DynamoDB-backed state persistence across 5 conversational intents so returning users could retrieve previous dining preferences.',
    tech: ['Python', 'JavaScript', 'AWS Lambda', 'API Gateway', 'AWS Lex', 'DynamoDB', 'OpenSearch', 'SQS', 'S3', 'SES', 'Yelp Fusion API'],
    date: 'Spring 2026',
    github: 'https://github.com/Ezreal222/Dining-Concierge-chatbot',
  },
  {
    name: 'Post-Quantum Secure Channel',
    description:
      'Two quantum-resistant secure channels between client and server with a swappable KEM — Kyber768 (lattice, ML-KEM-768) vs. BIKE-L3 (code-based) — and an AES-256-GCM record layer. HKDF-derived per-connection keys salted by a transcript hash, per-sender monotonic counters for replay protection, and a benchmark suite quantifying the lattice-vs-code trade-off (Kyber wins keygen and decap by ~1000x; AES-GCM record layer is KEM-independent).',
    tech: ['Python', 'liboqs', 'Kyber768', 'BIKE-L3', 'AES-256-GCM', 'HKDF-SHA256', 'pytest'],
    date: 'Spring 2026',
    github: 'https://github.com/Ezreal222/pq-secure-channel',
  },
  {
    name: 'Cipher Mode Selector',
    description:
      'Interactive CLI that recommends the right AES mode of operation (ECB, CBC, OFB, CTR, CFB, GCM) for non-experts. Built an implementation-usage table comparing the six modes across nine feature dimensions, then derived an ID3 decision tree by maximizing information gain — a 3-question tree disambiguates all six modes. 1,000-trial evaluation: 100% under full knowledge, 67% top-1 / 96% top-3 with 30% "I don\'t know" answers, vs. 16.1% random baseline.',
    tech: ['Python', 'ID3 / Decision Trees', 'Information Theory'],
    date: 'Spring 2026',
    github: 'https://github.com/Ezreal222/crypto-mode-selector',
  },
  {
    name: 'Productivity Tools & Weekly Planner',
    description:
      'Full-stack web application implementing productivity workflows inspired by "The 7 Habits of Highly Effective People," featuring weekly planning, task prioritization, and habit tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
    date: 'Spring 2023',
  },
  {
    name: 'Programming Language Interpreter',
    description:
      'Full interpreter for a JavaScript subset built in Scala — includes lexing, parsing, and evaluation with support for closures, higher-order functions, and recursive data structures.',
    tech: ['Scala'],
    date: 'Spring 2025',
  },
  {
    name: 'Graphics Animations & Programs',
    description:
      'Ray tracing and rasterization renderers with real-time animations of human motion, ocean waves, clouds, texture mapping, and a solar system simulation.',
    tech: ['JavaScript', 'WebGL', 'OpenGL'],
    date: 'Fall 2024',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Scala', 'Solidity', 'SQL', 'R', 'C', 'HTML/CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'WebGL', 'OpenGL', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend & DB',
    items: ['Node.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'AI / ML',
    items: ['PyTorch', 'Neural Networks', 'Point Cloud Processing'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS Lambda', 'API Gateway', 'Step Functions', 'SQS', 'S3', 'DynamoDB', 'OpenSearch', 'CloudFront', 'Cognito', 'Bedrock', 'CloudWatch', 'X-Ray', 'Lex', 'SES', 'AWS CDK', 'Serverless'],
  },
  {
    category: 'Blockchain',
    items: ['Hardhat', 'ethers.js', 'Chainlink', 'OpenZeppelin', 'TypeChain'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Unix/Linux'],
  },
]

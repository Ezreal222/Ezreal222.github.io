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
  github: string
  liveDemo?: string
}

export const projects: Project[] = [
  {
    name: 'Research Paper Summarizer',
    description:
      'Team-built serverless AWS platform that searches arXiv and Semantic Scholar, fetches PDFs, and produces structured five-section summaries with RAG chat and an auto-extracted knowledge graph. ~30s end-to-end, ~$0.20 per paper, $0 idle. My ownership: Search Lambda, arXiv client, and integration tests.',
    tech: ['TypeScript', 'Next.js', 'AWS Lambda', 'Step Functions', 'DynamoDB', 'S3', 'CloudFront', 'API Gateway', 'Cognito', 'Bedrock', 'CDK'],
    date: 'Spring 2026',
    github: 'https://github.com/pmxlr8/research-summarizer',
    liveDemo: 'https://d24irdkbe9jj2b.cloudfront.net/',
  },
  {
    name: 'MiniVault',
    description:
      'Crypto-collateralized stablecoin system on Ethereum Sepolia. Lock ETH, mint a USD-pegged mUSD up to 150% collateralization, repay, withdraw, and liquidate underwater positions. Backed by a live Chainlink ETH/USD feed and guarded by a custom same-block oracle circuit breaker that pauses minting on >5% intra-block moves.',
    tech: ['Solidity', 'Hardhat', 'Chainlink', 'ethers v6', 'React', 'Vite', 'TypeScript', 'Tailwind'],
    date: 'Spring 2026',
    github: 'https://github.com/Ezreal222/minivault',
    liveDemo: 'https://ezreal222.github.io/minivault/',
  },
  {
    name: 'Dining Concierge Chatbot',
    description:
      'Serverless restaurant recommendation pipeline serving 1,300+ Manhattan restaurants. Architected across 9 AWS services with DynamoDB-backed state persistence for returning users.',
    tech: ['Python', 'JavaScript', 'AWS Lambda', 'AWS Lex', 'DynamoDB', 'OpenSearch', 'SQS', 'S3', 'SES'],
    date: 'Spring 2026',
    github: 'https://github.com/Ezreal222',
  },
  {
    name: 'Productivity Tools & Weekly Planner',
    description:
      'Full-stack web application implementing productivity workflows inspired by "The 7 Habits of Highly Effective People," featuring weekly planning, task prioritization, and habit tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
    date: 'Spring 2023',
    github: 'https://github.com/Ezreal222',
  },
  {
    name: 'Programming Language Interpreter',
    description:
      'Full interpreter for a JavaScript subset built in Scala — includes lexing, parsing, and evaluation with support for closures, higher-order functions, and recursive data structures.',
    tech: ['Scala'],
    date: 'Spring 2025',
    github: 'https://github.com/Ezreal222',
  },
  {
    name: 'Graphics Animations & Programs',
    description:
      'Ray tracing and rasterization renderers with real-time animations of human motion, ocean waves, clouds, texture mapping, and a solar system simulation.',
    tech: ['JavaScript', 'WebGL', 'OpenGL'],
    date: 'Fall 2024',
    github: 'https://github.com/Ezreal222',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Scala', 'SQL', 'R', 'C', 'HTML/CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'WebGL', 'OpenGL', 'Bootstrap', 'Tailwind CSS'],
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
    items: ['AWS Lambda', 'AWS S3', 'API Gateway', 'DynamoDB', 'OpenSearch', 'SQS', 'SES', 'Serverless'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Unix/Linux'],
  },
]

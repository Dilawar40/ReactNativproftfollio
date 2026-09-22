export type Platform = 'Android' | 'iOS';

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  platforms: Platform[];
  category: 'Live' | 'AI' | 'Education' | 'Travel' | 'Music' | 'Social' | 'Health' | 'Commerce' | 'Productivity';
  accent: string;
  featured?: boolean;
  storeUrl?: string;
  extraUrl?: string;
  extraLabel?: string;
  highlights: string[];
  stack: string[];
};

export const profile = {
  name: 'Muhammad Dilawar Qayoum',
  shortName: 'Dilawar',
  initials: 'DQ',
  title: 'React Native Developer',
  subtitle: 'Android · iOS · Cross-platform apps',
  location: 'Lahore, Pakistan',
  phone: '03156822958',
  phoneHref: 'tel:+923156822958',
  email: 'dilawarqayoum40@gmail.com',
  years: '2.5+',
  summary:
    'Results-driven React Native developer with 2.5 years of hands-on experience building production apps for iOS and Android. I specialize in clean architecture, high-performance UI, and full-cycle delivery from design to App Store and Play Store.',
  about: [
    'I build intuitive, high-performance mobile products with TypeScript, React Navigation, Redux Toolkit, and modern native modules.',
    'Backend work includes REST, GraphQL, WebSockets, Firebase, Supabase, MongoDB, plus OAuth, JWT, biometrics, and role-based access.',
    'I care about performance, security, testing with Jest, analytics, and shipping stable builds that clients can trust.',
  ],
};

export const stats = [
  { label: 'Years', value: '2.5+' },
  { label: 'Shipped apps', value: '18+' },
  { label: 'Platforms', value: 'iOS + Android' },
  { label: 'Stores', value: 'Play + App Store' },
];

export const skills = {
  'Mobile Development': ['React Native', 'Expo', 'iOS', 'Android', 'Native Modules (Java/Kotlin)'],
  Languages: ['TypeScript', 'JavaScript'],
  'State & Navigation': ['Redux Toolkit', 'Redux Saga', 'Zustand', 'Context API', 'React Navigation', 'Deep Linking'],
  Backend: ['REST APIs', 'GraphQL', 'WebSockets', 'Node.js', 'Express.js'],
  'Cloud & Data': ['Firebase', 'Firestore', 'Realtime Database', 'Cloud Functions', 'Supabase', 'MongoDB'],
  Security: ['OAuth', 'JWT', 'Secure Storage', 'Biometric Auth', 'RBAC'],
  Quality: ['Jest', 'React Native Testing Library', 'Sentry', 'Firebase Analytics'],
  Performance: ['Code Splitting', 'Lazy Loading', 'Memory Management', 'Bundle Optimization'],
  Delivery: ['App Store Connect', 'Google Play Console', 'Git / GitHub', 'Jira', 'Slack'],
  'UI / UX': ['Responsive Design', 'Reanimated', 'Lottie'],
};

export const experience = [
  {
    id: 'freelance',
    company: 'Freelance / Independent Software Engineer',
    role: 'React Native Developer',
    period: 'Jun 2025 — Present',
    location: 'Remote',
    bullets: [
      'Deliver production-ready React Native apps for real-world clients with a focus on frontend architecture, performance, and UX.',
      'Lead frontend for Rico Live (2026), a large-scale live streaming app on Google Play, including complex screens, live interactions, and Redux Toolkit + Saga.',
      'Ship 2026 live products: PrimeLive, WaveLive, MaxLive (Android) and ZevoLive plus KindnessHub on Android and iOS.',
      'Build Quba Foundation (React Native + Node/Express) with PDF certificates, REST APIs, and secure data handling.',
      'Ship KindnessHub, a blood-donation Expo app with a modular Next.js-inspired structure and Node REST APIs.',
    ],
  },
  {
    id: 'ztech',
    company: 'Z Tech',
    role: 'React Native Developer',
    period: 'May 2024 — Jun 2025',
    location: 'Gujrat, India · Remote',
    bullets: [
      'Designed and shipped scalable cross-platform apps with a strong focus on performance, usability, and production stability.',
      'Frontend for AI Hybrid (AI Mentor) on Google Play — clean UI, smooth navigation, and efficient study workflows.',
      'End-to-end frontend for Axcel SMS school management: responsive UI, student/teacher/admin roles, and REST API integration.',
      'Architected secure REST and third-party integrations for reliable auth and data flow.',
    ],
  },
  {
    id: 'westcombe',
    company: 'Westcombe Technologies Ltd',
    role: 'React Native Developer',
    period: 'Apr 2023 — Apr 2024',
    location: 'United Kingdom · Remote',
    bullets: [
      'Developed and maintained BanoLive, a production live-streaming app on Google Play for Android and iOS.',
      'Built Bysim, a travel eSIM and mobile data iOS product for 2024, focused on global connectivity and a clear purchase flow.',
      'Shipped Jom Guitar (Android + iOS) for connecting to guitar hardware, and contributed to Varsik.',
      'Collaborated with designers and backend engineers, debugged performance issues, and delivered in Agile sprints.',
    ],
  },
  {
    id: 'lime',
    company: 'Lime Technologies',
    role: 'React Native Developer',
    period: 'Dec 2022 — Mar 2023',
    location: 'On-site / Team',
    bullets: [
      'Contributed features and enhancements across BanoLive, CBMart, MedTracker, Lawsuit, and Interior Suvvy.',
      'Integrated REST APIs and third-party services; used Redux for state; assisted with code reviews and scalable patterns.',
    ],
  },
  {
    id: 'hwt',
    company: 'Hello World Technologies',
    role: 'React Native Developer (Internship)',
    period: 'Aug 2022 — Nov 2022',
    location: 'Internship',
    bullets: [
      'Assisted with new features and bug fixes on cross-platform React Native apps.',
      'Implemented UI for iOS and Android, including IT Centre on Google Play.',
    ],
  },
];

export const education = {
  school: 'Khwaja Fareed University of Engineering and Information Technology',
  degree: 'Bachelor of Science in Information Technology',
  period: '2021 — 2025',
};

export const projects: Project[] = [
  {
    id: 'rico',
    name: 'Rico Live',
    tagline: 'Large-scale live streaming',
    description:
      'Production live-streaming app with complex interactive UI, real-time features, and scalable Redux Toolkit + Saga architecture.',
    role: 'Frontend · React Native',
    year: '2026',
    platforms: ['Android'],
    category: 'Live',
    accent: '#FF6B9A',
    featured: true,
    storeUrl: 'https://play.google.com/store/apps/details?id=com.ricolive',
    highlights: [
      'Interactive live rooms and smooth navigation',
      'Redux Toolkit + Redux Saga for scale',
      'Firebase auth, notifications, and real-time sync',
    ],
    stack: ['React Native', 'Redux Toolkit', 'Redux Saga', 'Firebase'],
  },
  {
    id: 'zevo',
    name: 'ZevoLive',
    tagline: 'Live streaming on both stores',
    description:
      'Cross-platform live streaming product with rich rooms, gifts, and real-time engagement for Android and iOS.',
    role: 'React Native Developer',
    year: '2026',
    platforms: ['Android', 'iOS'],
    category: 'Live',
    accent: '#A78BFA',
    featured: true,
    highlights: [
      'Shipped on both Android and iOS',
      'Live rooms, gifts, and audience interaction',
      'Store-ready builds and performance tuning',
    ],
    stack: ['React Native', 'Firebase', 'WebSockets', 'React Navigation'],
  },
  {
    id: 'prime',
    name: 'PrimeLive',
    tagline: 'Premium live entertainment',
    description:
      'Android live streaming app focused on host tools, viewer engagement, and a polished entertainment experience.',
    role: 'React Native Developer',
    year: '2026',
    platforms: ['Android'],
    category: 'Live',
    accent: '#F5C16C',
    featured: true,
    highlights: ['Host and viewer workflows', 'Real-time messaging', 'Play Store production build'],
    stack: ['React Native', 'Redux', 'Firebase'],
  },
  {
    id: 'wave',
    name: 'WaveLive',
    tagline: 'Social live rooms',
    description:
      'Android live social app with rooms, discovery, and real-time audience features.',
    role: 'React Native Developer',
    year: '2026',
    platforms: ['Android'],
    category: 'Live',
    accent: '#38BDF8',
    highlights: ['Discovery and live rooms', 'Push notifications', 'Stable live session UX'],
    stack: ['React Native', 'Firebase', 'REST'],
  },
  {
    id: 'max',
    name: 'MaxLive',
    tagline: 'High-energy live platform',
    description:
      'Android live streaming product with performance-first UI and scalable state for concurrent live sessions.',
    role: 'React Native Developer',
    year: '2026',
    platforms: ['Android'],
    category: 'Live',
    accent: '#FB7185',
    highlights: ['Concurrent live sessions', 'Optimized lists and video shells', 'Auth and wallet-style flows'],
    stack: ['React Native', 'Redux Toolkit', 'Firebase'],
  },
  {
    id: 'bysim',
    name: 'Bysim',
    tagline: 'Travel eSIM & mobile data',
    description:
      'iOS 2024 travel product for buying and managing eSIMs and data plans while abroad — clear catalogs, checkout, and activation.',
    role: 'iOS React Native',
    year: '2024',
    platforms: ['iOS'],
    category: 'Travel',
    accent: '#3EE0C5',
    featured: true,
    highlights: [
      'eSIM catalog, country packs, and data plans',
      'Purchase, activation, and usage-friendly UX',
      'Built for travelers who need reliable connectivity',
    ],
    stack: ['React Native', 'TypeScript', 'REST APIs', 'Secure Storage'],
  },
  {
    id: 'jom',
    name: 'Jom Guitar',
    tagline: 'Connect your guitar',
    description:
      'Cross-platform guitar companion for connecting instruments, practicing, and a hardware-aware mobile experience on Android and iOS.',
    role: 'React Native Developer',
    year: '2024',
    platforms: ['Android', 'iOS'],
    category: 'Music',
    accent: '#FF8A4C',
    featured: true,
    highlights: [
      'Guitar connection and device pairing UX',
      'Practice-oriented screens and audio-aware flows',
      'Shipped for both Android and iOS',
    ],
    stack: ['React Native', 'Native modules', 'TypeScript'],
  },
  {
    id: 'varsik',
    name: 'Varsik',
    tagline: 'Production mobile product',
    description:
      'Cross-platform product work covering structured screens, API-driven flows, and a maintainable React Native codebase.',
    role: 'React Native Developer',
    year: '2024',
    platforms: ['Android', 'iOS'],
    category: 'Productivity',
    accent: '#7C9CFF',
    highlights: ['Modular UI architecture', 'REST integration', 'Stable release builds'],
    stack: ['React Native', 'Redux', 'REST'],
  },
  {
    id: 'aihybrid',
    name: 'AI Hybrid',
    tagline: 'AI mentor for students',
    description:
      'AI-powered student learning app with clean UI architecture, study workflows, and efficient state management.',
    role: 'Frontend · React Native',
    year: '2024–2025',
    platforms: ['Android'],
    category: 'AI',
    accent: '#818CF8',
    featured: true,
    storeUrl: 'https://play.google.com/store/apps/details?id=com.aihybrid',
    highlights: ['AI mentoring flows', 'Smooth navigation for study sessions', 'Production Play Store release'],
    stack: ['React Native', 'REST', 'State management'],
  },
  {
    id: 'axcel',
    name: 'Axcel SMS',
    tagline: 'School management system',
    description:
      'End-to-end school management frontend with role-based flows for students, teachers, and admins.',
    role: 'Frontend · React Native',
    year: '2024–2025',
    platforms: ['Android'],
    category: 'Education',
    accent: '#34D399',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.axcel.axcelsms',
    highlights: ['Student, teacher, and admin roles', 'Responsive school workflows', 'REST API integration'],
    stack: ['React Native', 'REST', 'RBAC'],
  },
  {
    id: 'bano',
    name: 'BanoLive',
    tagline: 'Live streaming at scale',
    description:
      'Maintained and developed a cross-platform live streaming app with responsive UI and third-party integrations.',
    role: 'React Native Developer',
    year: '2023–2024',
    platforms: ['Android'],
    category: 'Live',
    accent: '#F472B6',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.bano.live',
    highlights: ['Production live app on Google Play', 'Performance across devices', 'Agile delivery with design & backend'],
    stack: ['React Native', 'REST', 'Third-party SDKs'],
  },
  {
    id: 'quba',
    name: 'Quba Foundation',
    tagline: 'Certificates & secure APIs',
    description:
      'Foundation app with React Native frontend and Node.js/Express support, including PDF certificates and secure data handling.',
    role: 'Frontend + Node.js',
    year: '2025–2026',
    platforms: ['Android'],
    category: 'Education',
    accent: '#22D3EE',
    extraUrl: 'https://drive.google.com/file/d/1YiNaJSZmiRAktpvY4-Q_47-b6nI9dxXk/view?usp=drive_link',
    extraLabel: 'App preview',
    highlights: ['PDF certificate generation', 'REST APIs with Express', 'Secure data handling'],
    stack: ['React Native', 'Node.js', 'Express', 'PDF'],
  },
  {
    id: 'kindness',
    name: 'KindnessHub',
    tagline: 'Blood donation network',
    description:
      'Expo React Native blood-donation app with a modular Next.js-inspired structure and Node REST APIs for donor workflows.',
    role: 'Frontend + API integration',
    year: '2026',
    platforms: ['Android', 'iOS'],
    category: 'Health',
    accent: '#FB7185',
    highlights: ['Donor and request workflows', 'Modular reusable architecture', 'Node.js REST backend'],
    stack: ['Expo', 'React Native', 'Node.js', 'REST'],
  },
  {
    id: 'cbmart',
    name: 'CBMart',
    tagline: 'Commerce on mobile',
    description: 'Feature work and API-driven commerce flows as part of a multi-app delivery team.',
    role: 'React Native Developer',
    year: '2022–2023',
    platforms: ['Android', 'iOS'],
    category: 'Commerce',
    accent: '#FBBF24',
    highlights: ['Catalog and checkout-style flows', 'REST integration', 'Shared component patterns'],
    stack: ['React Native', 'Redux', 'REST'],
  },
  {
    id: 'medtracker',
    name: 'MedTracker',
    tagline: 'Medication tracking',
    description: 'Health-focused mobile features for tracking and reminders in a React Native codebase.',
    role: 'React Native Developer',
    year: '2022–2023',
    platforms: ['Android', 'iOS'],
    category: 'Health',
    accent: '#4ADE80',
    highlights: ['Reminder-oriented UI', 'Reliable local + API state', 'Accessibility-minded screens'],
    stack: ['React Native', 'Redux'],
  },
  {
    id: 'lawsuit',
    name: 'Lawsuit',
    tagline: 'Legal case workflows',
    description: 'Mobile UI and API work for legal/case-management style flows.',
    role: 'React Native Developer',
    year: '2022–2023',
    platforms: ['Android', 'iOS'],
    category: 'Productivity',
    accent: '#94A3B8',
    highlights: ['Structured case screens', 'API-backed lists', 'Clean form UX'],
    stack: ['React Native', 'REST'],
  },
  {
    id: 'interior',
    name: 'Interior Suvvy',
    tagline: 'Interior discovery',
    description: 'Visual, design-forward screens for interior-related browsing and product discovery.',
    role: 'React Native Developer',
    year: '2022–2023',
    platforms: ['Android', 'iOS'],
    category: 'Commerce',
    accent: '#C4B5FD',
    highlights: ['Gallery-style UI', 'Responsive layouts', 'Feature enhancements'],
    stack: ['React Native', 'UI kits'],
  },
  {
    id: 'itcentre',
    name: 'IT Centre',
    tagline: 'Learning centre app',
    description: 'Internship contribution to a published education/IT centre app on Google Play.',
    role: 'Intern · React Native',
    year: '2022',
    platforms: ['Android'],
    category: 'Education',
    accent: '#60A5FA',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.itcentre',
    highlights: ['Published Play Store app', 'Responsive iOS/Android UI', 'API + third-party libraries'],
    stack: ['React Native', 'REST'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))] as const;

export const resumePlainText = `${profile.name}
${profile.title} — Android & iOS
${profile.phone} · ${profile.email} · ${profile.location}

SUMMARY
${profile.summary}

SELECTED APPS
Rico Live, ZevoLive, PrimeLive, WaveLive, MaxLive, Bysim (travel eSIM), Jom Guitar, Varsik, AI Hybrid, Axcel SMS, BanoLive, Quba Foundation, KindnessHub, and more.

EXPERIENCE
${experience.map((job) => `${job.role} — ${job.company} (${job.period})\n${job.bullets.map((b) => `• ${b}`).join('\n')}`).join('\n\n')}

EDUCATION
${education.degree}, ${education.school} (${education.period})
`;

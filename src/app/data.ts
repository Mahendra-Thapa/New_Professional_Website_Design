import { Clock, HeartHandshake, Users, Trophy, Code2, Cloud, Globe, Server, Smartphone, Database, Shield, Zap, TrendingUp, Lightbulb } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Resources", path: "/resources" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export const STATS = [
  { value: "4+", label: "Years of Establishment", icon: Clock },
  { value: "275+", label: "Happy Clients", icon: HeartHandshake },
  { value: "22+", label: "Employees", icon: Users },
  { value: "30+", label: "Solutions Delivered", icon: Trophy },
];

export const SERVICES = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom software solutions built with modern development practices and cutting-edge technologies tailored to your business needs.",
    longDesc: "From enterprise platforms to mobile-first apps, our software development team crafts reliable, scalable, and beautifully designed solutions. We use agile methodology, modern stacks, and thorough QA to ensure every release is production-ready.",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    desc: "Enterprise-grade cloud computing solutions and seamless cloud integration for scalable, secure, and efficient operations.",
    longDesc: "We architect and migrate your workloads to AWS, Azure, or GCP — with full DevOps pipelines, auto-scaling infrastructure, and cost-optimized cloud environments designed for reliability and speed.",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom website development and modern web applications with exceptional user experiences and stunning responsive design.",
    longDesc: "Our web development team combines business insight, design sensibility, and technical excellence to build websites and web apps that convert visitors into customers and support your growth.",
    gradient: "from-blue-700 to-indigo-800",
  },
  {
    icon: Smartphone,
    title: "Digital Marketing",
    desc: "Data-driven digital marketing strategies — SEO, social media, email campaigns — that amplify your brand and reach.",
    longDesc: "We craft and execute full-funnel digital marketing strategies: SEO, PPC, social media management, email automation, and analytics — all aligned to measurable business outcomes.",
    gradient: "from-orange-600 to-red-600",
  },
  {
    icon: Server,
    title: "Networking Services",
    desc: "Robust networking infrastructure design, deployment, and management to keep your business always connected and secure.",
    longDesc: "From LAN/WAN setup to SD-WAN and network security hardening, our engineers design, deploy, and manage enterprise-grade networking infrastructure that keeps your operations connected 24/7.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Database,
    title: "Email Services",
    desc: "Professional business email solutions with enterprise-level security, spam protection, and seamless collaboration tools.",
    longDesc: "We set up and manage professional business email environments — Microsoft 365, Google Workspace, and custom SMTP — with spam filtering, email archiving, and security policies for your team.",
    gradient: "from-orange-400 to-yellow-500",
  },
];

export const TECH_TABS = ["ALL", "Web Development", "App Development", "Backend", "Hosting"];

export const TECHNOLOGIES = [
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",                tabs: ["ALL", "Web Development"] },
  { name: "Next.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",              tabs: ["ALL", "Web Development"] },
  { name: "Node.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",              tabs: ["ALL", "Backend"] },
  { name: "Java",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",                  tabs: ["ALL", "Backend", "App Development"] },
  { name: "PostgreSQL",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",      tabs: ["ALL", "Backend"] },
  { name: "GraphQL",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",               tabs: ["ALL", "Backend"] },
  { name: "AWS",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", tabs: ["ALL", "Hosting"] },
  { name: "Docker",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",              tabs: ["ALL", "Hosting", "Backend"] },
  { name: "Linux",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",                tabs: ["ALL", "Hosting"] },
  { name: "TypeScript",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",      tabs: ["ALL", "Web Development"] },
  { name: "Flutter",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",            tabs: ["ALL", "App Development"] },
  { name: "MongoDB",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",            tabs: ["ALL", "Backend"] },
];

export const TEAM = [
  { name: "Roshan Bhusal", role: "Founder / Chairman", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { name: "Susan Shrestha", role: "Co-Founder / CFO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { name: "Gyanendra Saud", role: "Executive Director / COO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { name: "Kshitij Bishokarma", role: "CTO / ShofyDrop Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
];

export const TESTIMONIALS = [
  { name: "Bishnu Maharjan", role: "Business Owner", review: "MSP Solution transformed our digital presence completely. Their team is highly professional and delivered beyond our expectations.", stars: 5 },
  { name: "Subash Katel", role: "IT Manager", review: "Outstanding cloud integration services. The transition was seamless and our operations are now more efficient than ever.", stars: 5 },
  { name: "Govinda Bhusal", role: "CEO, TechNepal", review: "Their software development team is world-class. They understood our requirements perfectly and built an amazing product.", stars: 5 },
  { name: "Dr. Suman Thapaliya", role: "Healthcare Director", review: "Reliable, professional, and results-driven. MSP Solution is our go-to IT partner for all digital needs.", stars: 5 },
  { name: "Dr. Pawan Kumar Sharma", role: "Entrepreneur", review: "The web development service exceeded all expectations. Modern, fast, and beautifully designed.", stars: 5 },
];

export const FAQS = [
  { q: "Why should I choose your company?", a: "MSP Solution brings 4+ years of experience, 275+ satisfied clients, and a dedicated team of 22+ IT professionals committed to delivering exceptional results with our unique MSP approach." },
  { q: "How do you ensure data security?", a: "We implement enterprise-grade security protocols, end-to-end encryption, regular security audits, and follow international standards to ensure your data is always protected." },
  { q: "Do you handle large-scale projects?", a: "Absolutely. Our team has successfully delivered 30+ large-scale solutions for enterprises across Nepal and beyond, from complex software platforms to cloud migrations." },
  { q: "What services do you offer?", a: "We offer Software Development, Cloud Integration, Web Development, Digital Marketing, Networking Services, and Email Solutions — everything your business needs to thrive digitally." },
  { q: "How do I get started?", a: "Simply reach out via our contact form or email us at info@mspsolution.com.np. Our team will respond within 24 hours to schedule a free consultation." },
];

export const BLOGS = [
  {
    title: "Local Government Apps Gaining Popularity — Innovation in Public Service",
    date: "June 28, 2024",
    tag: "Innovation",
    img: "https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    title: "Cloud Migration: How Nepal Businesses Are Going Digital",
    date: "May 15, 2024",
    tag: "Cloud",
    img: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    title: "Modern Web Development Trends Transforming Businesses in 2024",
    date: "April 10, 2024",
    tag: "Web Dev",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
];

export const CLIENT_NAMES = [
  "TechNepal", "CloudBase", "InnovateCo", "DataSync", "WebForge",
  "NetBridge", "PixelCraft", "CodeLabs", "SkyHost", "AppWorks",
  "DevStream", "InfoTech", "CyberEdge", "SmartIT", "DigiFlow",
];

export const WHY_US = [
  { icon: Shield, title: "Trusted & Secure", desc: "Enterprise-level security in every solution we build." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology ensures rapid, quality delivery." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Built to grow with your business from day one." },
  { icon: HeartHandshake, title: "Client-Centric", desc: "Your success is our priority — always." },
];

export const VMP = [
  {
    icon: Lightbulb,
    label: "Vision",
    heading: "Empowering Innovation Through Technology",
    body: "Empowering innovation through seamless IT solutions, driving efficiency, and transforming businesses into digital leaders.",
    bg: "bg-[#0D47A1]",
    text: "text-white",
    sub: "text-blue-200",
    iconBg: "bg-white/15",
    iconColor: "text-white",
  },
  {
    icon: TrendingUp,
    label: "Mission",
    heading: "Building Smarter Digital Futures",
    body: "Empowering businesses with innovative IT solutions for a smarter and more connected future through cutting-edge technology and exceptional service.",
    bg: "bg-[#FF6F00]",
    text: "text-white",
    sub: "text-orange-100",
    iconBg: "bg-white/15",
    iconColor: "text-white",
  },
  {
    icon: HeartHandshake,
    label: "Philosophy",
    heading: "Ethical Innovation & Excellence",
    body: "MSP Solution approaches every technological challenge through ethical, customer-focused, and innovative solutions that create lasting value.",
    bg: "bg-white",
    text: "text-[#0A1628]",
    sub: "text-[#5A7098]",
    iconBg: "bg-[#0D47A1]/10",
    iconColor: "text-[#0D47A1]",
  },
];

export const CONTACT_INFO = [
  { label: "Address", val: "Subidhanagar, Tinkune, Kathmandu, Nepal" },
  { label: "Email", val: "info@mspsolution.com.np" },
  { label: "Nepal", val: "9867143463 / 9865837534 / 9861848861" },
  { label: "USA", val: "+1 (214) 499-3889" },
];

export const HERO_SLIDES = [
  {
    tag: "Welcome To MSP Solution",
    heading: "Driving Digital Success with Innovative IT Solutions",
    sub: "We offer expert IT services to businesses looking to prosper and expand in all areas of their IT infrastructure — from cloud to custom software.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    tag: "Welcome To MSP Solution",
    heading: "Achieve the Best Tech & Digital Experiences",
    sub: "Empowering businesses across Nepal with cutting-edge cloud solutions, web development, and digital marketing strategies that drive real growth.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
];

// ─── Service Detail Pages ────────────────────────────────────────────────────

export const SERVICE_PAGES = [
  {
    slug: "cloud",
    label: "Cloud Services",
    shortLabel: "Cloud",
    hero: { title: "Cloud Software Solution", subtitle: "Enterprise cloud consulting and cloud transformation solutions.", img: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" },
    overview: "MSP Solution offers enterprise cloud consulting services to help businesses implement cloud technology and improve scalability, accessibility, and operational efficiency. We partner with AWS, Azure, Google Cloud, and Huawei Cloud to deliver tailored cloud solutions.",
    subServices: [
      { title: "AWS Cloud Service Provider", icon: "Cloud", points: ["Cloud deployment", "Infrastructure setup", "Resource management"] },
      { title: "AWS Cloud Consultation", icon: "Lightbulb", points: ["Architecture planning", "Cost optimization", "Migration strategy"] },
      { title: "AWS Cloud Hosting", icon: "Server", points: ["Managed hosting", "High availability setup", "Backup solutions"] },
      { title: "Training & Certification", icon: "Trophy", points: ["AWS training programs", "Cloud skills development", "Certification prep"] },
      { title: "Multi-Cloud Consulting", icon: "Globe", points: ["Huawei Cloud", "Microsoft Azure", "Google Cloud Platform"] },
    ],
    benefits: ["High-level cloud security", "No hardware purchase required", "No manual software fixes", "Access from anywhere", "Pay-as-you-go pricing model"],
    benefitsHeading: "Enhance the Growth of Your Company",
    process: ["Assessment & Planning", "Architecture Design", "Migration & Deployment", "Testing & Validation", "Monitoring & Support"],
    gradient: "from-blue-600 to-blue-800",
  },
  {
    slug: "networking",
    label: "Networking Services",
    shortLabel: "Networking",
    hero: { title: "Networking Services", subtitle: "Secure, reliable enterprise networking and infrastructure management.", img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" },
    overview: "Our networking services focus on secure communication, enterprise connectivity, infrastructure management, and network security solutions. We design and deploy robust networks that keep your business always connected.",
    subServices: [
      { title: "Network Design & Setup", icon: "Server", points: ["LAN / WAN architecture", "SD-WAN deployment", "Structured cabling"] },
      { title: "Network Security", icon: "Shield", points: ["Firewall configuration", "Intrusion detection", "VPN setup"] },
      { title: "Enterprise Connectivity", icon: "Globe", points: ["Secure communication", "Remote access solutions", "Leased line setup"] },
      { title: "Performance Monitoring", icon: "TrendingUp", points: ["24/7 network monitoring", "Bandwidth management", "Latency optimization"] },
      { title: "Technical Support", icon: "HeartHandshake", points: ["On-site support", "Remote troubleshooting", "SLA-backed response"] },
    ],
    benefits: ["Improved security & data protection", "Better inter-office communication", "Reliable infrastructure uptime", "Higher team productivity", "Scalable as your business grows"],
    benefitsHeading: "Why Choose Our Networking Services",
    process: ["Network Audit", "Design & Planning", "Hardware Procurement", "Deployment", "Monitoring & Maintenance"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    slug: "software",
    label: "Software Development",
    shortLabel: "Software",
    hero: { title: "Software Development", subtitle: "Reliable, aesthetically pleasing software built with modern practices.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" },
    overview: "MSP Solution develops reliable and aesthetically pleasing software products using modern coding practices and advanced collaboration platforms. From ERP to SaaS, we build products that scale.",
    subServices: [
      { title: "Custom Software Development", icon: "Code2", points: ["ERP Systems", "CRM Solutions", "Business Automation", "Enterprise Applications"] },
      { title: "Technology Solutions", icon: "Database", points: ["Web Applications", "SaaS Platforms", "API Development", "Database Design"] },
      { title: "Mobile Applications", icon: "Smartphone", points: ["iOS & Android apps", "Cross-platform (Flutter)", "App maintenance"] },
      { title: "QA & Testing", icon: "CheckCircle", points: ["Automated testing", "Performance testing", "Security audits"] },
    ],
    benefits: ["Fully custom to your requirements", "Scalable and maintainable codebase", "Agile delivery methodology", "Post-launch support included", "Modern tech stack"],
    benefitsHeading: "What You Get with Our Software",
    process: ["Requirement Analysis", "UI/UX Design", "Development", "Testing", "Deployment", "Maintenance"],
    gradient: "from-blue-600 to-blue-800",
  },
  {
    slug: "web",
    label: "Web Development",
    shortLabel: "Web Dev",
    hero: { title: "Web Development", subtitle: "Custom websites and web applications focused on performance, UX, and modern tech.", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" },
    overview: "Custom website development solutions focused on performance, scalability, user experience, and modern technology implementation. We build everything from landing pages to complex web platforms.",
    subServices: [
      { title: "Corporate Websites", icon: "Globe", points: ["Company websites", "Portfolio websites", "Landing pages"] },
      { title: "Web Applications", icon: "Code2", points: ["Custom dashboards", "SaaS products", "Business portals"] },
      { title: "E-Commerce Development", icon: "Database", points: ["Online stores", "Payment integration", "Inventory management"] },
      { title: "CMS & Blogs", icon: "Lightbulb", points: ["WordPress", "Headless CMS", "Content management"] },
    ],
    benefits: ["Responsive on all devices", "SEO-optimized architecture", "Fast loading performance", "Secure & reliable hosting-ready", "Easy content management"],
    benefitsHeading: "Why Our Websites Perform",
    process: ["Discovery & Wireframe", "UI/UX Design", "Frontend Development", "Backend Integration", "Testing & Launch", "Support"],
    gradient: "from-blue-700 to-indigo-800",
  },
  {
    slug: "digital-marketing",
    label: "Digital Marketing",
    shortLabel: "Marketing",
    hero: { title: "Digital Marketing Services", subtitle: "Data-driven strategies that amplify your brand and generate real leads.", img: "https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" },
    overview: "We craft and execute full-funnel digital marketing strategies aligned to measurable business outcomes — increasing brand visibility, generating qualified leads, and driving revenue growth.",
    subServices: [
      { title: "SEO Optimization", icon: "TrendingUp", points: ["On-page SEO", "Technical SEO", "Keyword research & strategy"] },
      { title: "Social Media Marketing", icon: "Globe", points: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing"] },
      { title: "Paid Advertising", icon: "Zap", points: ["Google Ads", "Facebook Ads", "Lead Generation Campaigns"] },
      { title: "Content Marketing", icon: "Lightbulb", points: ["Blog writing", "Content strategy", "Brand storytelling"] },
    ],
    benefits: ["Increased brand visibility", "Qualified lead generation", "Website traffic growth", "Conversion rate optimization", "Measurable ROI reporting"],
    benefitsHeading: "Marketing Results You Can Measure",
    process: ["Audit & Research", "Strategy Planning", "Content Creation", "Campaign Launch", "Monitoring & Reporting", "Optimization"],
    gradient: "from-orange-500 to-orange-700",
  },
  {
    slug: "ecommerce",
    label: "Ecommerce Development",
    shortLabel: "Ecommerce",
    hero: { title: "Ecommerce Development", subtitle: "Powerful online stores built to sell, scale, and convert.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" },
    overview: "We build high-converting ecommerce stores and marketplace platforms tailored to your products and customers. From Shopify to fully custom solutions, we handle everything end-to-end.",
    subServices: [
      { title: "Ecommerce Store Development", icon: "Globe", points: ["Shopify stores", "WooCommerce", "Custom Ecommerce platforms"] },
      { title: "Marketplace Development", icon: "Server", points: ["Multi-vendor platforms", "Order management", "Vendor management"] },
      { title: "Payment Integration", icon: "Zap", points: ["Khalti & eSewa (Nepal)", "Stripe & PayPal", "Secure checkout"] },
      { title: "Ecommerce Features", icon: "Database", points: ["Product & inventory management", "Cart & checkout system", "Customer management panel"] },
    ],
    benefits: ["Mobile-first shopping experience", "Secure payment processing", "Easy product management", "Nepal & international payments", "SEO-ready store structure"],
    benefitsHeading: "Your Store, Built to Sell",
    process: ["Business Analysis", "Platform Selection", "Design & Development", "Product Setup", "Payment Integration", "Launch & Support"],
    gradient: "from-orange-600 to-red-600",
  },
];

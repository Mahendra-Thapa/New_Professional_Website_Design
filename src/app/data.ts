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
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", tabs: ["ALL", "Web Development"] },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", tabs: ["ALL", "Web Development"] },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", tabs: ["ALL", "Backend"] },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", tabs: ["ALL", "Backend", "App Development"] },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", tabs: ["ALL", "Backend"] },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", tabs: ["ALL", "Backend"] },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", tabs: ["ALL", "Hosting"] },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", tabs: ["ALL", "Hosting", "Backend"] },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", tabs: ["ALL", "Hosting"] },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", tabs: ["ALL", "Web Development"] },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", tabs: ["ALL", "App Development"] },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", tabs: ["ALL", "Backend"] },
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

export interface BlogDescSection {
  heading?: string;
  body: string;
}

export interface BlogEntry {
  slug: string;
  title: string;
  name: string;
  time: string;
  date: string;
  tag: string;
  img: string;
  likes: string;
  link: string;
  author: string;
  excerpt: string;
  description: BlogDescSection[];
}

export const BLOGS: BlogEntry[] = [
  {
    slug: "shofydrop",
    title: "डिजिटल कमर्समा नयाँ युग: ShofyDrop को उदय",
    name: "ShofyDrop",
    time: "२०८१ असार २८",
    date: "June 28, 2024",
    tag: "E-Commerce",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    likes: "",
    link: "https://shofydrop.com/",
    author: "MSP Solution Team",
    excerpt: "ShofyDrop is a modern dropshipping and digital commerce platform developed by MSP Solution, empowering entrepreneurs across Nepal to start and scale their online businesses without upfront inventory costs.",
    description: [
      {
        heading: "A New Era in Digital Commerce",
        body: "The rise of e-commerce in Nepal has opened tremendous opportunities for entrepreneurs and small businesses. ShofyDrop, developed by MSP Solution, is a cutting-edge dropshipping platform that bridges the gap between suppliers and sellers — enabling anyone to start an online business without the need for inventory or upfront capital.",
      },
      {
        heading: "What is ShofyDrop?",
        body: "ShofyDrop is a comprehensive digital commerce solution that automates the entire dropshipping workflow. From product listing and order management to supplier coordination and delivery tracking, ShofyDrop handles every aspect of the business — so sellers can focus on growing their customer base rather than managing logistics.",
      },
      {
        heading: "Key Features & Capabilities",
        body: "The platform boasts a rich set of features including a curated product catalog, automated order fulfillment, real-time inventory sync, integrated payment gateways (including Khalti and eSewa), and a powerful seller dashboard with analytics. Sellers can manage multiple product categories, run promotions, and track their earnings — all from a single intuitive interface.",
      },
      {
        heading: "Technology Behind the Platform",
        body: "MSP Solution built ShofyDrop using a modern technology stack — React.js for the frontend, Node.js for the backend API, PostgreSQL for reliable data storage, and AWS for scalable cloud hosting. The architecture was designed with scalability in mind, ensuring the platform can handle thousands of concurrent users and transactions without performance degradation.",
      },
      {
        heading: "Impact on Nepal's E-Commerce Ecosystem",
        body: "Since its launch, ShofyDrop has empowered hundreds of Nepali entrepreneurs to enter the digital marketplace with minimal risk. By removing traditional barriers to entry — warehouse costs, bulk purchasing, and complex logistics — the platform has democratized e-commerce and contributed to the growth of Nepal's digital economy.",
      },
    ],
  },
  {
    slug: "karyantra",
    title: "स्थानीय सेवा डिजिटलाइज गर्दै Karyantra प्लेटफर्म",
    name: "Karyantra",
    time: "२०८१ असार २८",
    date: "June 28, 2024",
    tag: "Technology",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    likes: "",
    link: "https://karyantra.com/",
    author: "MSP Solution Team",
    excerpt: "Karyantra is a modern Nepali digital platform connecting users with verified service providers, freelancers, and small businesses — acting as a local service search engine and marketplace.",
    description: [
      {
        heading: "Introduction",
        body: "In today's fast-paced digital world, finding trusted service providers quickly and efficiently has become a major need. From household repairs to professional services, people often struggle to connect with reliable freelancers and businesses. Karyantra is a modern Nepali digital platform designed to solve this problem by connecting users with verified service providers, freelancers, and small businesses in one place. It acts as a local service search engine and marketplace, making everyday tasks simpler, faster, and more organized.",
      },
      {
        heading: "What is Karyantra?",
        body: "Karyantra is an online service discovery and business listing platform developed to digitize Nepal's local service ecosystem. It allows users to search, compare, and connect with service providers across multiple categories. Whether you need an electrician, designer, tutor, plumber, or digital marketer, Karyantra helps you find the right professional quickly and efficiently.",
      },
      {
        heading: "How Karyantra Works",
        body: "The platform is built to be simple and user-friendly for both customers and service providers. Customers can search for services based on category and location, compare providers using profiles and details, view listings, reviews, and service information, and directly contact or hire service providers. Service providers can create a verified profile, list services and pricing, reach more customers across Nepal, and build trust through reviews and ratings.",
      },
      {
        heading: "Key Features of Karyantra",
        body: "Karyantra includes multiple categories such as home services, education, healthcare, travel, business, IT, and more. Service providers go through verification to ensure reliability and trustworthiness. Users can easily filter and find services based on their needs and location. The platform supports both small businesses and independent freelancers, helping them grow digitally, while customers can directly connect with service providers without unnecessary complexity.",
      },
      {
        heading: "Services Available on Karyantra",
        body: "Karyantra covers a wide variety of service sectors, including e-commerce and retail services, finance and banking support, healthcare and medical services, education and tutoring, real estate services, technology and software solutions, travel and hospitality, food and beverage services, entertainment and media, and automotive services. This wide coverage makes it a one-stop solution for almost all daily needs.",
      },
      {
        heading: "Mission and Vision",
        body: "Karyantra's mission is to bridge the gap between service seekers and providers by creating a trusted, digital-first service ecosystem in Nepal. Its vision is to become Nepal's leading platform for discovering, hiring, and managing local services — empowering individuals, freelancers, and small businesses nationwide. Karyantra plays an important role in digital transformation by reducing dependency on offline references, improving access to verified professionals, supporting local entrepreneurs, and promoting a digital economy in Nepal.",
      },
      {
        heading: "Conclusion",
        body: "Karyantra is revolutionizing the way people in Nepal find and offer services. By combining technology, trust, and accessibility, it simplifies everyday tasks and empowers service providers to grow. As Nepal continues to adopt digital solutions, platforms like Karyantra will play a key role in shaping the future of local services. It truly lives up to its tagline: \"अब सम्पूर्ण कार्यको लागि एउटै यन्त्र – कार्यन्त्र।\"",
      },
    ],
  },
  {
    slug: "etech-international",
    title: "नेपालमा टेक र ई–कमर्स विस्तार गर्दै Etech International",
    name: "Etech International",
    time: "२०८१ असार २८",
    date: "June 28, 2024",
    tag: "Innovation",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    likes: "",
    link: "https://shop.etechintl.com.np/homepage",
    author: "MSP Solution Team",
    excerpt: "Etech International expands tech and e-commerce services in Nepal through a modern online store built to deliver quality gadgets and products nationwide.",
    description: [
      {
        heading: "Building the E-Commerce Platform",
        body: "MSP Solution developed a feature-rich e-commerce platform that includes a clean, intuitive product catalog with advanced filtering, a secure checkout process with multiple payment options including Khalti, eSewa, and bank transfers, real-time inventory management, and an order tracking system. The platform was built with performance and mobile-first design as core priorities.",
      },
      {
        heading: "Key Technical Highlights",
        body: "The platform leverages modern web technologies including Next.js for server-side rendering and SEO optimization, a headless CMS for easy product management, and a robust API backend that connects the online store with their inventory management system. The result is a fast, reliable, and feature-complete e-commerce experience that works seamlessly on both desktop and mobile devices.",
      },
      {
        heading: "Results & Business Impact",
        body: "Since the launch of their digital store, Etech International has seen a significant expansion in their customer base, reaching buyers from across Nepal who previously had no access to quality technology products. Online sales now represent a growing percentage of their overall revenue, positioning them as one of Nepal's leading technology retailers in the digital space.",
      },
    ],
  },
  {
    slug: "kaligandaki-rural-municipality",
    title: "गुल्मी कालिगण्डकीको डिजिटल प्रशासन र विकास यात्रा",
    name: "Kaligandaki Rural Municipality",
    time: "२०८१ असार २८",
    date: "June 28, 2024",
    tag: "Governance",
    img: "https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    likes: "",
    link: "https://gulmikaligandaki.gunasho.com/",
    author: "MSP Solution Team",
    excerpt: "Gulmi Kaligandaki Rural Municipality transforms local governance through a digital administration platform — enabling citizens to access government services online, reducing travel and wait times significantly.",
    description: [
      {
        heading: "Digital Governance Comes to Gulmi",
        body: "Gulmi Kaligandaki Rural Municipality represents a landmark in Nepal's journey toward digital governance. Located in the hilly terrain of Gulmi district, the municipality has partnered with MSP Solution to develop a comprehensive digital administration platform that brings government services closer to its citizens — regardless of their geographic location.",
      },
      {
        heading: "The Challenge of Rural Administration",
        body: "Traditional government administration in rural Nepal often requires citizens to travel long distances to access basic services — from obtaining birth certificates and citizenship documents to accessing land records and social welfare programs. This creates significant hardship, particularly for elderly citizens, people with disabilities, and those living in remote villages. The digital platform was designed to address these challenges head-on.",
      },
      {
        heading: "Platform Features & Services",
        body: "The digital administration platform enables citizens to access a wide range of government services online. This includes document requests (birth, death, and marriage certificates), land record inquiries, social welfare applications, budget and development project transparency reports, online complaint registration, and news and notices from the municipality. All services are available 24/7 with status tracking via SMS and email.",
      },
      {
        heading: "Technology Implementation",
        body: "The platform was built with a focus on reliability and ease of use, recognizing that many citizens may have limited digital literacy. The interface is designed in Nepali and is fully responsive, working on low-end smartphones over slow internet connections. The backend uses a secure architecture with role-based access control, audit logging, and data encryption to protect citizen information.",
      },
      {
        heading: "Impact on Citizens & Governance",
        body: "Since implementation, Gulmi Kaligandaki Rural Municipality has seen a dramatic improvement in service delivery efficiency. Processing times for common documents have been reduced significantly, and citizen satisfaction has improved measurably. The transparency features — including public access to budget allocation and development project status — have increased accountability and public trust in local government.",
      },
    ],
  },
  {
    slug: "batika-news",
    title: "डिजिटल पत्रकारितामा नयाँ मोड: Batika News को विकास",
    name: "Batika News",
    time: "२०८१ असार २८",
    date: "June 28, 2024",
    tag: "News & Media",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    likes: "",
    link: "https://batikanews.com.np/",
    author: "MSP Solution Team",
    excerpt: "Batika News represents the growing shift toward digital journalism in Nepal, providing instant and accessible news coverage across multiple categories to keep the public informed.",
    description: [
      {
        heading: "Introduction",
        body: "Digital journalism has changed the way people stay informed. With fast-paced lifestyles and the rise of smartphones, readers look for instant, reliable, and accessible news platforms. Batika News represents this growing shift toward digital journalism in Nepal, providing fast and accessible news coverage across multiple categories to keep the public informed in a rapidly changing world.",
      },
      {
        heading: "What is Batika News?",
        body: "Batika News is a modern digital news platform designed to deliver timely, accurate, and engaging news and information to readers across Nepal. Developed to bridge the gap in digital journalism, Batika News provides coverage of current affairs, technology, business, entertainment, and local stories in a user-friendly online format.",
      },
      {
        heading: "Content Coverage",
        body: "The platform covers a wide array of topics to cater to diverse reader interests. From breaking national news and political updates to tech reviews, business analyses, lifestyle tips, and sports coverage, Batika News ensures that readers have access to comprehensive information on one platform.",
      },
      {
        heading: "Role in Digital Journalism",
        body: "Batika News is committed to high journalistic standards. By leveraging modern digital tools, the platform publishes verified news quickly, helping combat the spread of misinformation while keeping the public informed. It features rich media integrations, clear layouts, and easy sharing options to enhance user engagement.",
      },
      {
        heading: "Importance for Readers",
        body: "In a fast-paced world, readers value instant updates. Batika News delivers real-time notifications, mobile-responsive layouts, and clean article designs that make news consumption effortless on the go, whether on smartphones or desktop devices.",
      },
      {
        heading: "Challenges and Opportunities",
        body: "Like many digital media platforms, Batika News operates in a competitive environment. Key challenges include ensuring news accuracy and credibility, competing with established national media outlets, and managing misinformation. However, opportunities like the growth of online readership, increasing internet penetration, and expansion into multimedia content present strong growth potential.",
      },
      {
        heading: "Future Outlook",
        body: "The future of Batika News depends on its ability to maintain credibility, improve content quality, and expand its digital presence. Potential improvements include introducing stronger investigative journalism, multimedia news content (video/audio), mobile app development, and personalized news delivery feeds.",
      },
      {
        heading: "Conclusion",
        body: "Batika News represents the growing shift toward digital journalism in Nepal. By providing fast and accessible news coverage across multiple categories, it contributes to keeping the public informed in a rapidly changing world. As online media continues to expand, platforms like Batika News will play an increasingly important role in shaping how people consume news in Nepal.",
      },
    ],
  },
];

export const CLIENT_NAMES = [
  "/client/clientCompany1.png",
  "/client/clientCompany2.png",
  "/client/clientCompany3.png",
  "/client/clientCompany4.png",
  "/client/clientCompany5.png",
  "/client/clientCompany6.png",
  "/client/clientCompany7.png",
  "/client/clientCompany8.png",
  "/client/clientCompany9.png",
  "/client/clientCompany10.jpeg",
  "/client/clientCompany11.png",
  "/client/clientCompany12.png",
  "/client/clientCompany13.png",
  "/client/clientCompany14.png",
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

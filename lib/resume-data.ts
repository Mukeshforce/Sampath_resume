export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    location?: string;
    email: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
     trailhead?: string;
     lightningChampions?: string;
  };
  about: {
    description: string[];
    skills: string[];
  };
  experience: Experience[];
  skills: SkillCategory[];
  education: Education[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Sampath Arjunan",
    title: "Technical Architect (Lightning Champion)",
    subtitle: "Salesforce Technical Architect with 15+ years of hands-on implementation experience.",
    description:
      "Salesforce Certified Professional and Technical Architect (Lightning Champion) with over 15 years of hardcore development and implementation experience across 50+ projects in the Middle East, India, US, and UK. Deep expertise in architecting, developing, and deploying end-to-end Salesforce solutions, with strong focus on integrations with leading ERPs and databases.",
    email: "sampatharjunan@hotmail.com",
    linkedin: "https://www.linkedin.com/in/sampatharjunan/",
    trailhead: "https://www.salesforce.com/trailblazer/sampatharjunan",
    lightningChampions:
      "https://www.salesforce.com/campaign/lightning-champions/trailblazers/#!page=1",
  },
  about: {
    description: [
      "I am a <strong>Salesforce Technical Architect</strong> and <strong>Lightning Champion</strong> with over <strong>15+ years</strong> of hardcore development and implementation experience across more than 50 projects in the Middle East, India, US, and UK. My work spans diverse domains including Nonprofit, Free Zone, Oil & Gas, Telecom, Financial Services, Shipping, Hospitality, and Revenue Cloud.",
      "I specialise in <strong>capturing business requirements end-to-end</strong>, architecting scalable Salesforce solutions, and leading implementations from design through deployment. I hold <strong>26+ Salesforce certifications</strong>, demonstrating deep platform mastery across Sales, Service, Experience, Revenue Cloud, and more.",
      "I have led <strong>dozens of complex integration projects</strong> connecting Salesforce with top-tier ERPs, AWS databases, CTI systems, and external applications using REST/SOAP APIs, middleware (Jitterbit, Informatica, MuleSoft) and event-driven patterns. I am known for quickly understanding customer issues and delivering pragmatic, high‑impact solutions.",
      "Security Clearance Status: <strong>Active</strong> (reference can be provided on request).",
    ],
    skills: [
      "Salesforce Technical Architecture & Solution Design",
      "End‑to‑end Salesforce implementation across 50+ projects",
      "Multi‑cloud experience (Sales, Service, Experience, Revenue, Nonprofit, Education, Health, Data Cloud)",
      "Complex integrations with ERPs, AWS databases, CTI and external systems",
      "Design and delivery of AppExchange products and managed packages",
      "Hands‑on development with Apex, Visualforce, Aura and Lightning Web Components (LWC)",
      "Strong client‑facing skills and rapid issue analysis / resolution",
      "Leading technical teams, reviews, and best‑practice governance",
    ],
  },
  experience: [
    {
      title: "Salesforce Technical Architect",
      company: "Various Enterprise Clients (via IBM / Partners)",
      duration: "2010 - Present",
      description: [
        "Led Salesforce solution design and implementation for 50+ projects across the Middle East, India, US and UK.",
        "Architected and delivered end‑to‑end Sales Cloud, Service Cloud, Experience Cloud, Revenue Cloud and Nonprofit solutions.",
        "Owned requirements capture, architecture, development, integration and deployment activities.",
        "Provided rapid troubleshooting and production support, consistently delivering instant, pragmatic solutions.",
      ],
    },
    {
      title: "Lead Salesforce Consultant / Architect",
      company: "Enterprise & Public Sector Clients",
      duration: "Selected Projects",
      description: [
        "IBM ISC Sales Cloud implementation (Sales Cloud & Partner Community).",
        "Gangmasters and Labour Abuse Authority (GLAA) and Department for Transport Salesforce solutions.",
        "Rhodes Trust, Oxford University – solutioning, integration and implementation for 150 internal users and 20,000+ community users using LWC.",
        "Ajman Free Zone – solutioning, integration and implementation for 170 internal users and 4,000 community users.",
        "Al‑Futtaim – SAP integration for 700 internal users and 3,000 community users.",
        "USAA and other large enterprises – solutioning, development, integration and deployment for 800+ users.",
      ],
    },
    {
      title: "Salesforce Product & AppExchange Experience",
      company: "Multiple Customers / Internal Products",
      duration: "Ongoing",
      description: [
        "Developed and published AppExchange products such as Coveredge and Apto.",
        "Implemented and customised key AppExchange apps including FormAssembly, Conga Composer, DocuSign, Remedyforce, PM Tool, Survey Force, GeoPoint, SMS tools and more.",
        "Worked extensively with Salesforce Labs products and a wide range of ecosystem applications.",
      ],
    },
  ],
  skills: [
    {
      name: "Salesforce Platform & Cloud Products",
      icon: "⚡",
      skills: [
        "Sales Cloud",
        "Service Cloud",
        "Marketing Cloud",
        "App Cloud",
        "Analytics Cloud (CRMA)",
        "Account Engagement (Pardot)",
        "Experience / Community Cloud",
        "CPQ & Revenue Cloud",
        "Health Cloud",
        "Education Cloud",
        "Nonprofit Cloud",
        "Data Cloud",
        "Agentforce",
        "MuleSoft",
      ],
    },
    {
      name: "Programming & Web Technologies",
      icon: "💻",
      skills: [
        "Apex",
        "Visualforce",
        "Aura Components",
        "Lightning Web Components (LWC)",
        "JavaScript",
        "HTML5",
        "CSS",
        "XML",
        "PHP",
        "jQuery",
        ".NET",
        "Python",
      ],
    },
    {
      name: "Databases & Integration",
      icon: "🔗",
      skills: [
        "MySQL",
        "Oracle",
        "MS SQL Server",
        "MS Access",
        "DB2",
        "REST, SOAP, Bulk, Streaming, Metadata & Tooling APIs",
        "Platform Events & Change Data Capture (CDC)",
        "Jitterbit",
        "Informatica",
        "MuleSoft",
        "Zapier",
        "Outbound Messaging",
        "CTI integrations (e.g. Avaya with Open CTI)",
        "CMS, Dropbox, GeoPoint and other third‑party integrations",
      ],
    },
    {
      name: "DevOps, Tools & Quality",
      icon: "🛠️",
      skills: [
        "VS Code, Salesforce CLI, Scratch Orgs & Sandboxes",
        "ANT, SFDX, Metadata API, Unlocked Packages, Change Sets, DevOps Center",
        "Gearset, Copado, Jenkins, Azure DevOps, GitHub, GitLab, Bitbucket, Subversion, CumulusCI",
        "Lucidchart, Figma, Mural, JIRA, Confluence, Trello, Marvel, Monday.com, Visio, Draw.io",
        "Salesforce Code Analyzer, Apex PMD, SonarQube, Checkmarx, Clayton",
        "Test automation with Selenium, Cucumber, Provar, Cypress, Katalon Studio",
      ],
    },
  ],
  education: [
    {
      institution: "Salesforce Certified Professional",
      degree: "26+ Salesforce Certifications (including core and specialist certs)",
      year: "",
      description:
        "Extensive Salesforce certification portfolio covering core clouds, architecture, development, and specialist areas.",
    },
  ],
};


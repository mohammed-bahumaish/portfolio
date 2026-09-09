import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";
import Script from "next/script";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Buildpilot.ai",
      period: "Jan 2024 - Present",
      location: "Linz, Upper Austria, Austria · Remote",
      positions: [
        {
          title: "Product Engineer",
          description: [
            "Led a team of developers, assigning tasks based on strengths to boost productivity and hit project deadlines.",
            "Oversaw weekly releases, managed urgent bug fixes, and wrote reports for stakeholders.",
            "Worked with product managers and designers to launch new features and keep code quality high.",
          ],
        },
      ],
    },
    {
      company: "SentiVue.com",
      period: "Jun 2025 - Dec 2025 · 7 mos",
      location: "Lisbon, Portugal · Remote",
      positions: [
        {
          title: "Senior Software Engineer · Part-time",
          description: [
            "Developed a real-time speech translation app and AI-powered voice support agents for multilingual communication and automated customer assistance.",
            "Optimized real-time audio processing pipelines to minimize latency.",
            "Deployed and managed AI/ML models in production environments.",
          ],
        },
      ],
    },
    {
      company: "ClickApps",
      period: "Jan 2023 - Dec 2023",
      location: "Riyadh, Saudi Arabia · Remote",
      positions: [
        {
          title: "Front-End Developer",
          description: [
            "Developed responsive, high-performance web applications using React, Next.js, and TypeScript.",
            "Worked closely with backend and DevOps teams to boost app performance and streamline deployments.",
            "Built reusable component libraries and improved design system consistency.",
          ],
        },
      ],
    },
    {
      company: "Prisma Editor",
      period: "Jan 2023 - Present",
      positions: [
        {
          title: "Open Source Maintainer",
          description: [
            "Developed and maintained Prisma Editor, an open-source tool for real-time Prisma schema visualization and editing, with AI-powered code generation.",
            "Grew the project to 900+ GitHub stars and earned recognition in top developer communities.",
            "Engaged with users, incorporated feedback, and ensured high code quality.",
            "Featured in Awesome tRPC Collection, T3 Collection and Awesome Prisma.",
          ],
        },
      ],
    },
    {
      company: "Freelance Software Developer",
      period: "Jan 2021 - Dec 2022",
      positions: [
        {
          title: "Full-Stack Developer",
          description: [
            "Built full-stack solutions for clients in education, e-commerce, and hospitality, including admin dashboards, customer portals, and automated workflows.",
            "Integrated third-party APIs (payments, video, authentication) and delivered secure, scalable backend services.",
            "Enhanced user experience and business outcomes through fast, intuitive web apps.",
            "Notable projects include: infinity.edu.sa, mazajasly.com, coffeeclubsa.com",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/mohammed-bahumaish.webp",
  // Adding detailed skills and education from the about me section for SEO
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Styled Components",
      "SCSS",
      "CSS",
      "HTML",
      "Context API",
      "Zustand",
      "Redux Toolkit",
      "Responsive design",
      "Accessibility",
      "Cross-browser compatibility",
      "Component libraries",
      "Design systems",
    ],
    backend: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "GraphQL",
      "tRPC",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Redis",
      "Secure and scalable backend services",
    ],
    ai: [
      "OpenAI API",
      "Vector databases",
      "RAG applications",
      "AI-powered systems",
      "LangChain",
    ],
    devops: [
      "Docker",
      "Kubernetes",
      "Traefik",
      "Nginx",
      "GitHub Actions",
      "CI/CD pipelines",
      "AWS",
      "Google Cloud",
      "Hetzner",
      "Vercel",
    ],
    testing: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "Code reviews",
      "Documentation",
      "Mentoring",
    ],
    leadership: [
      "Entrepreneurial mindset",
      "Independent work",
      "Effective prioritization",
      "Cross-functional teamwork",
      "Mentoring",
      "Onboarding engineers",
      "Technical planning",
      "Architecture discussions",
      "Written and verbal communication",
    ],
  },
  education: {
    degree: "Bachelor's in Computer Science Engineering",
    institution: "Ramaiah Institute of Technology",
    location: "Bangalore, India",
    graduationDate: "July 2023",
  },
  openSourceContributions: [
    {
      project: "Cal.com",
      contribution:
        "Improved scheduling reliability by optimizing backend job management",
      pr: "#10946",
    },
    {
      project: "Amplication",
      contribution:
        "Enhanced data modeling with an interactive Entity Relationship Diagram (ERD) view",
      pr: "#6595",
    },
  ],
  contact: {
    location: "Cairo, Egypt",
    phone: "+201023509686",
    email: "mohammed.bahumaish@gmail.com",
    linkedin: "https://linkedin.com/in/mohammed-ba-humaish",
    github: "https://github.com/mohammed-bahumaish",
    portfolio: "https://bahumaish.com",
  },
  funFacts: [
    "Built my school's website from scratch at age 15, sparking my passion for web development",
    "Worked as a freelancer during college (2021-2022), balancing real-world projects with studies",
    "Avid chess player who loves the strategic thinking it brings to both chess and software engineering",
  ],
  // Arabic translations for SEO
  arabic: {
    title: "محمد باحميش - السيرة الذاتية لمهندس البرمجيات",
    summary:
      "مهندس برمجيات ذو خبرة تزيد عن 4 سنوات في بناء تطبيقات الويب باستخدام React وNext.js وTypeScript وNode.js. مطور Prisma Editor بأكثر من 900 نجمة على GitHub.",
    location: "القاهرة، مصر",
    skills: {
      frontend:
        "React، Next.js، TypeScript، JavaScript، Tailwind CSS، تصميمات متجاوبة، واجهة مستخدم",
      backend:
        "Node.js، Express، واجهات برمجة التطبيقات، GraphQL، tRPC، قواعد البيانات",
      ai: "واجهة برمجة تطبيقات OpenAI، تطبيقات الذكاء الاصطناعي، قواعد بيانات متجهية",
      devops: "Docker، Kubernetes، AWS، Google Cloud، Vercel، CI/CD",
      leadership:
        "العمل الجماعي، التخطيط التقني، مناقشات هندسة البرمجيات، التوجيه والإرشاد",
    },
    positions: {
      engineer: "مهندس برمجيات",
      frontend: "مطور واجهة أمامية",
      opensource: "مطور مفتوح المصدر",
      freelance: "مطور برمجيات مستقل",
    },
    education:
      "بكالوريوس في هندسة علوم الكمبيوتر - معهد راماياه للتكنولوجيا، بنغالور، الهند",
  },
};

export function Resume() {
  return (
    <div>
      {/* Hidden SEO content for search engines - English */}
      <div className="sr-only">
        <h1>Mohammed Bahumaish - Software Engineer Resume</h1>
        <p>
          Software engineer with 4+ years of experience building web
          applications using React, Next.js, TypeScript, and Node.js. Creator of
          Prisma Editor with 900+ GitHub stars.
        </p>
        <section>
          <h2>Contact Information</h2>
          <p>Location: {resumeData.contact?.location}</p>
          <p>Email: {resumeData.contact?.email}</p>
          <p>Phone: {resumeData.contact?.phone}</p>
        </section>
        <section>
          <h2>Skills</h2>
          <h3>Frontend Development</h3>
          <p>{resumeData.skills?.frontend.join(", ")}</p>
          <h3>Backend Development</h3>
          <p>{resumeData.skills?.backend.join(", ")}</p>
          <h3>AI & Automation</h3>
          <p>{resumeData.skills?.ai.join(", ")}</p>
          <h3>DevOps & Cloud</h3>
          <p>{resumeData.skills?.devops.join(", ")}</p>
          <h3>Testing & Quality</h3>
          <p>{resumeData.skills?.testing.join(", ")}</p>
          <h3>Leadership & Collaboration</h3>
          <p>{resumeData.skills?.leadership.join(", ")}</p>
        </section>
        <section>
          <h2>Education</h2>
          <p>
            {resumeData.education?.degree} - {resumeData.education?.institution}
            , {resumeData.education?.location}
          </p>
          <p>Graduated: {resumeData.education?.graduationDate}</p>
        </section>
      </div>

      {/* Arabic SEO content for better discoverability in Arabic search engines */}
      <div className="sr-only" lang="ar" dir="rtl">
        <h1>{resumeData.arabic?.title}</h1>
        <p>{resumeData.arabic?.summary}</p>
        <section>
          <h2>معلومات الاتصال</h2>
          <p>الموقع: {resumeData.arabic?.location}</p>
          <p>البريد الإلكتروني: {resumeData.contact?.email}</p>
          <p>الهاتف: {resumeData.contact?.phone}</p>
        </section>
        <section>
          <h2>المهارات</h2>
          <h3>تطوير الواجهة الأمامية</h3>
          <p>{resumeData.arabic?.skills?.frontend}</p>
          <h3>تطوير الخلفية</h3>
          <p>{resumeData.arabic?.skills?.backend}</p>
          <h3>الذكاء الاصطناعي والأتمتة</h3>
          <p>{resumeData.arabic?.skills?.ai}</p>
          <h3>تقنيات DevOps والسحابة</h3>
          <p>{resumeData.arabic?.skills?.devops}</p>
          <h3>القيادة والتعاون</h3>
          <p>{resumeData.arabic?.skills?.leadership}</p>
        </section>
        <section>
          <h2>التعليم</h2>
          <p>{resumeData.arabic?.education}</p>
        </section>
        <section>
          <h2>الخبرات</h2>
          <h3>Buildpilot.ai | {resumeData.arabic?.positions?.engineer}</h3>
          <p>Jan 2024 - Present</p>
          <h3>SentiVue.com | مهندس برمجيات أول · دوام جزئي</h3>
          <p>Jun 2025 - Dec 2025 · 7 mos</p>
          <p>لشبونة، البرتغال · عن بُعد</p>
          <h3>ClickApps | {resumeData.arabic?.positions?.frontend}</h3>
          <p>Jan 2023 - Dec 2023</p>
          <h3>Prisma Editor | {resumeData.arabic?.positions?.opensource}</h3>
          <p>Jan 2023 - Present</p>
          <h3>{resumeData.arabic?.positions?.freelance}</h3>
          <p>Jan 2021 - Dec 2022</p>
        </section>
      </div>

      {/* Structured data for search engines with English and Arabic support */}
      <Script id="resume-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohammed Bahumaish",
          url: "https://bahumaish.com",
          jobTitle: "Software Engineer",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cairo",
            addressCountry: "Egypt",
          },
          email: "mohammed.bahumaish@gmail.com",
          telephone: "+201023509686",
          sameAs: [
            "https://github.com/mohammed-bahumaish",
            "https://linkedin.com/in/mohammed-ba-humaish",
          ],
          worksFor: [
            {
              "@type": "Organization",
              name: "Buildpilot.ai",
              startDate: "2024-01",
            },
          ],
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Ramaiah Institute of Technology",
            location: "Bangalore, India",
          },
          knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Web Development",
            "Frontend Development",
            "Backend Development",
            "AI Integration",
            "Open Source",
          ],
          // Multiple language support in structured data
          additionalName: {
            "@language": "ar",
            "@value": "محمد باحميش",
          },
          description: [
            {
              "@language": "en",
              "@value":
                "Software engineer with 4+ years of experience building web applications using React, Next.js, TypeScript, and Node.js. Creator of Prisma Editor with 900+ GitHub stars.",
            },
            {
              "@language": "ar",
              "@value":
                "مهندس برمجيات ذو خبرة تزيد عن 4 سنوات في بناء تطبيقات الويب باستخدام React وNext.js وTypeScript وNode.js. مطور Prisma Editor بأكثر من 900 نجمة على GitHub.",
            },
          ],
        })}
      </Script>

      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                  {experience.location && (
                    <p className="text-sm text-gray-600">{experience.location}</p>
                  )}
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        <span className="md:hidden">
                          {position.title} at {experience.company}
                        </span>
                        <span className="hidden md:inline">
                          {position.title}
                        </span>
                      </h4>
                      <p className="!mt-0 text-sm text-gray-600 md:hidden">
                        {experience.period}
                      </p>
                      {experience.location && (
                        <p className="!mt-0 text-sm text-gray-600 md:hidden">
                          {experience.location}
                        </p>
                      )}
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

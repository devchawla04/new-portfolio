type Job = {
  id: number
  title: string
  company: string
  location: string
  period: string
  link?: string
  description: string[]
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Freelance Frontend Engineer",
    company: "Stealth Startup",
    location: "Remote",
    period: "April 2025 - Present",
    description: [
    ]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "The Software Practice",
    location: "Singapore, (Remote)",
    period: "Oct 2023 - June 2025",
    link: "https://www.hsa.gov.sg/",
    description: [
    ]
  },
]
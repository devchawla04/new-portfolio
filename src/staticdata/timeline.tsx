type TimelineItem = {
  date: string;
  title: string;
  description: string[];
};

export const timelineItems: TimelineItem[] = [
  {
    date: "October 2023 - June 2025",
    title: "Software Engineer Intern - The Software Practice (Singapore,Remote)",
    description: [
      "Maintained high code quality standards via regular SonarQube scans, extensive refactoring to eliminate 1500+ code smells, and wrote XUnit tests for over 500 backend endpoints within a Microservices Architecture. Achieved 80%+ code coverage across a 350k+ line codebase.",
      "Developed secure RESTful APIs with proper input validation, request sanitization, and error handling to guard against common web vulnerabilities such as XSS, SQL injection, and over-posting attacks"
    ],
  },
  {
    date: "June 2022 - July 2025",
    title: "Bachelor in Computer Application, Institute of Technology and Science, Ghaziabad",
    description: [
      "Developed a strong foundation in programming, algorithms, and software development."
    ]
  },
  {
    date: "July 2020 - March 2022",
    title: "Higher Secondary Education, NIOS, Noida",
    description: [],
  },
  {
    date: "July 2007 - June 2020",
    title:
      "Primary Education and Secondary Education Dav Public School, Ghaziabad",
    description: [],
  },
  {
    date: "2004",
    title: "Birth",
    description: [],
  },
];

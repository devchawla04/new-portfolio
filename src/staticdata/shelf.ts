export type ShelfBook = {
  title: string;
  author: string;
  description: string;
  link: string;
  tags: string[];
};

export type ShelfResource = {
  title: string;
  description: string;
  url: string;
  category: "article" | "tool" | "video" | "newsletter" | "podcast";
};

export type ShelfJournalEntry = {
  title: string;
  publishedOn: string;
  excerpt: string;
  slug: string;
  url?: string;
};

export type ShelfGearItem = {
  name: string;
  category: string;
  description: string;
  link?: string;
};

export const shelfBooks: ShelfBook[] = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A timeless parable about chasing personal legends, trusting intuition, and finding meaning in the journey itself.",
    link: "https://amzn.in/d/iLnZ16y",
    tags: ["fiction", "inspiration", "story"],
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    description:
      "Curated wisdom from Naval on compounding, leverage, and designing a life that optimizes for freedom and happiness.",
    link: "https://amzn.in/d/hqwy9Lm",
    tags: ["wealth", "mindset", "naval"],
  },
  {
    title: "System Design Interview",
    author: "Alex Xu & Sahn Lam",
    description:
      "Step-by-step breakdowns for large-scale systems—deep dives, diagrams, and mental models that level up your architecture chops.",
    link: "https://amzn.in/d/0yXshXj",
    tags: ["system-design", "technical", "interview"],
  },
  {
    title: "The Founders",
    author: "Jimmy Soni",
    description:
      "Inside story of PayPal’s chaotic early days and the builders who shaped the Silicon Valley playbook we still copy today.",
    link: "https://amzn.in/d/1eZgP53",
    tags: ["startups", "history", "paypal"],
  },
];

export const shelfResources: ShelfResource[] = [];

export const shelfJournalEntries: ShelfJournalEntry[] = [];

export const shelfGear: ShelfGearItem[] = [
  {
    name: "MacBook Pro (16\" M4 Pro, Space Black)",
    category: "Laptop",
    description:
      "Ultra portable powerhouse with the Apple M4 Pro chip, and battery that easily clears a full day of coding and editing on the go.",
  },
  
];



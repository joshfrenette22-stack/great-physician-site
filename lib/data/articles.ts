export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "is-regenerative-medicine-right-for-me",
    title: "Is regenerative medicine right for me?",
    excerpt:
      "A straightforward walkthrough of who these treatments tend to help, who they don't, and how to think about the decision without the hype.",
    category: "Guide",
    readTime: "8 min read",
    image: "/images/stock/photo-1607990281513-2c110a25bd8c.jpg",
    featured: true,
  },
  {
    slug: "what-prp-actually-does-and-doesnt",
    title: "What PRP actually does, and doesn't",
    excerpt:
      "How platelet-rich plasma works, what the evidence supports, and realistic timelines.",
    category: "Treatments",
    readTime: "6 min read",
    image: "/images/stock/photo-1609220136736-443140cffec6.jpg",
  },
  {
    slug: "low-back-pain-when-ligaments-are-the-cause",
    title: "Low back pain: when ligaments are the cause",
    excerpt:
      "Why some back pain comes from instability, and how prolotherapy can help.",
    category: "Conditions",
    readTime: "5 min read",
    image: "/images/stock/photo-1573497019940-1c28c88b4f3e.jpg",
  },
  {
    slug: "what-to-expect-after-shockwave-therapy",
    title: "What to expect after shockwave therapy",
    excerpt:
      "A week-by-week look at recovery and how to get the most from your sessions.",
    category: "Recovery",
    readTime: "4 min read",
    image: "/images/stock/photo-1530549387789-4c1017266635.jpg",
  },
  {
    slug: "questions-to-ask-before-any-injection",
    title: "Questions to ask before any injection",
    excerpt:
      "A short checklist to help you evaluate any regenerative medicine offer honestly.",
    category: "Deciding",
    readTime: "3 min read",
    image: "/images/stock/photo-1521119989659-a83eee488004.jpg",
  },
  {
    slug: "surgery-vs-regenerative-care",
    title: "Surgery vs. regenerative care",
    excerpt:
      "How to weigh a conservative option against an operation, and when surgery wins.",
    category: "Treatments",
    readTime: "7 min read",
    image: "/images/stock/photo-1547425260-76bcadfb4f2c.jpg",
  },
  {
    slug: "living-with-arthritis-beyond-pain-pills",
    title: "Living with arthritis: beyond pain pills",
    excerpt:
      "Conservative strategies that can ease joint arthritis and keep you moving.",
    category: "Conditions",
    readTime: "5 min read",
    image: "/images/stock/photo-1576765608866-5b51046452be.jpg",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        question: "What is regenerative medicine?",
        answer:
          "Regenerative medicine uses your body's own healing systems — and targeted, evidence-based therapies — to address the root cause of pain rather than just masking symptoms. It's a conservative option that sits between doing nothing and undergoing surgery.",
      },
      {
        question: "How do I know if I'm a candidate?",
        answer:
          "The honest answer: a consultation. Dr. Hric reviews your history, imaging, and goals, then tells you plainly whether regenerative care can realistically help — or whether another path (including surgery, or simply more time) would serve you better.",
      },
      {
        question: "What happens at my first visit?",
        answer:
          "We listen first. You'll walk through your history and what you're hoping to get back to, we'll examine the area and review any imaging, and you'll leave with a clear, honest picture of your options and what each would involve.",
      },
    ],
  },
  {
    id: "treatments",
    title: "Treatments & safety",
    items: [
      {
        question: "Are these treatments safe?",
        answer:
          "The therapies we offer have established safety profiles and are performed by Dr. Hric personally. We only recommend treatments with real evidence behind them, and we'll always tell you what we do — and don't yet — know about your specific situation.",
      },
      {
        question: "Who performs the procedure?",
        answer:
          "Dr. Hric does — every time. The same physician who diagnoses you performs your treatment. We don't hand regenerative procedures off to technicians or rotating staff.",
      },
      {
        question: "How long is recovery?",
        answer:
          "Most regenerative treatments are minimally invasive with little to no downtime, though this varies by procedure and by person. We'll give you a realistic recovery timeline specific to your treatment before you decide anything.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "It depends on the condition and your response. Some patients need a single treatment; others benefit from a short series. We'll never recommend more sessions than the evidence and your progress support.",
      },
    ],
  },
  {
    id: "cost",
    title: "Cost & insurance",
    items: [
      {
        question: "Do you take insurance?",
        answer:
          "Most regenerative treatments are not covered by insurance, and we're upfront about that. We'll give you clear, itemized pricing before any treatment so there are no surprises.",
      },
      {
        question: "What does it cost?",
        answer:
          "Cost depends on the treatment and the area being addressed. We'll walk you through exact pricing at your consultation — and if a less expensive conservative option makes more sense for you, we'll tell you.",
      },
      {
        question: "Do you offer payment options?",
        answer:
          "Yes. We can discuss payment arrangements during your consultation so cost is never the reason you can't explore whether we can help.",
      },
    ],
  },
  {
    id: "faith-cat",
    title: "Our approach",
    items: [
      {
        question: "Why is the practice called \"Great Physician\"?",
        answer:
          "Our name refers to Jesus Christ, the Great Physician. It reflects how we practice: caring for the whole person — body and spirit — as faithful stewards of the health each patient has been given.",
      },
      {
        question: "Will faith be pushed on me?",
        answer:
          "No. Our faith shapes how we treat people — with honesty, patience, and genuine care — not what we require of you. Patients of every background are welcomed and cared for the same way.",
      },
      {
        question: "What makes your approach different?",
        answer:
          "Three things: we recommend the most conservative option first, Dr. Hric performs the treatments himself, and we tell you the truth even when it means less business for us. No hype, no overselling.",
      },
    ],
  },
];

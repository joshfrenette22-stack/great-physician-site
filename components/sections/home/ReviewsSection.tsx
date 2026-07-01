import Image from 'next/image';
import { ScrollReveal } from '@/components/sections/shared/ScrollReveal';

const reviews = [
  {
    name: 'Marcus R.',
    date: '2 weeks ago',
    avatar: '/images/stock/photo-1560250097-0b93528c311a.jpg',
    text: 'I came in bracing for a hard sell on the priciest option. Instead we started simple.',
    highlight: 'My knee feels better than it has in years, and I avoided surgery.',
    after: 'He explained every step.',
  },
  {
    name: 'Susan T.',
    date: '1 month ago',
    avatar: '/images/stock/photo-1559839734-2b71ea197ec2.jpg',
    text: "He actually talked me out of a treatment I'd read about because the evidence wasn't there.",
    highlight: "I've never had a doctor be that honest with me.",
    after: 'Shockwave therapy got my plantar fasciitis under control.',
  },
  {
    name: 'Dave K.',
    date: '1 month ago',
    avatar: '/images/stock/photo-1607990281513-2c110a25bd8c.jpg',
    text: "Golfer's elbow had me sidelined for months and I was sure I needed surgery.",
    highlight: "Three PRP sessions later, I'm back on the course.",
    after: 'He performed every step himself.',
  },
];

function Stars() {
  return (
    <div className="flex gap-[3px]">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--green-500)">
          <polygon points="12 2 15 9 22 9.5 17 14 18.5 21 12 17 5.5 21 7 14 2 9.5 9 9" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 pt-24 md:pt-[96px] pb-0">
      <ScrollReveal>
      <div
        className="rounded-[28px] border p-6 md:p-14"
        style={{ background: 'var(--gray-50)', borderColor: 'var(--border-subtle)' }}
      >
        {/* Heading */}
        <div data-reveal>
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--color-accent-strong)' }}>What patients say</span>
        <h2
          className="text-[32px] md:text-[38px] font-extrabold tracking-tight mb-[14px] max-w-[720px]"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}
        >
          Real stories, told by real patients.
        </h2>
        <p className="text-[17px] leading-[1.6] max-w-[640px] m-0" style={{ color: 'var(--text-muted)' }}>
          We&apos;re a brand-new practice — the cards below are <strong style={{ color: 'var(--text-body)' }}>placeholders</strong> showing how patient stories will appear. We&apos;ll replace them with verified reviews as they come in.
        </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-9">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="flex flex-col min-h-[300px] shadow-sm"
              style={{ background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: '20px', padding: '26px' }}
              data-reveal
              data-reveal-delay={i + 1}
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="text-[15px] font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-strong)' }}>{review.name}</div>
                  <div className="text-[13px]" style={{ color: 'var(--text-muted)' }}>{review.date}</div>
                </div>
              </div>

              {/* Review text with highlight */}
              <p className="text-[15px] leading-[1.6] mt-5 flex-1 m-0" style={{ color: 'var(--text-body)' }}>
                {review.text}{' '}
                <span style={{ background: 'var(--green-100)', color: 'var(--green-900)', padding: '1px 4px', borderRadius: '4px' }}>
                  {review.highlight}
                </span>
                {' '}{review.after}
              </p>

              {/* Stars + Sample badge at bottom */}
              <div className="flex items-center gap-[10px] mt-[18px]">
                <Stars />
                <span className="text-[11px] rounded-full" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)', background: 'var(--gray-100)', padding: '3px 9px' }}>
                  Sample
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="flex items-center gap-[9px] mt-7 text-sm" style={{ color: 'var(--text-muted)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
          Placeholder reviews shown for layout, we&apos;ll swap in verified patient reviews as they come in.
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}

import Image from 'next/image';
import { ScrollReveal } from '@/components/sections/shared/ScrollReveal';

const cards = [
  {
    image: '/images/stock/photo-1576765608866-5b51046452be.jpg',
    titleTeal: 'Whole-person',
    titleGray: 'lasting results',
    body: 'We pair treatment with real guidance on movement, nutrition, sleep and weight, so the results actually last.',
    objectPosition: 'center 20%',
  },
  {
    image: '/images/stock/photo-1486218119243-13883505764c.jpg',
    titleTeal: 'Conservative care,',
    titleGray: 'first',
    body: "We start with the least invasive, least expensive option that can realistically help, and tell you honestly when surgery is the better path.",
    objectPosition: 'center 30%',
  },
];

export function WhyUsGrid() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 md:px-10 pt-24 md:pt-[96px] pb-0">
      <ScrollReveal>
      {/* Doctor avatar chip — centered */}
      <div className="flex items-center justify-center gap-[14px] mb-12" data-reveal>
        <div className="relative w-14 h-14 flex-shrink-0">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/hric-headshot.jpg"
              alt="Dr. Jerry Hric"
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <span className="absolute right-0 w-[13px] h-[13px] rounded-full bg-green-500 border-2 border-white" style={{ bottom: 2 }} />
        </div>
        <div>
          <p
            className="font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text-strong)' }}
          >
            Dr. Jerry Hric
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Founder &amp; Regenerative Physician</p>
        </div>
      </div>

      {/* 2-col card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <div
            key={card.titleTeal}
            className="bg-gray-50 border border-gray-100 rounded-[24px] overflow-hidden min-h-[360px] flex flex-col"
            data-reveal
            data-reveal-delay={i + 1}
          >
            {/* Image with fade */}
            <div
              className="relative h-[230px] flex-shrink-0"
              style={{
                maskImage: 'linear-gradient(to bottom, black 58%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 58%, transparent 100%)',
              }}
            >
              <Image
                src={card.image}
                alt={card.titleTeal}
                fill
                className="object-cover"
                style={{ objectPosition: card.objectPosition }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="px-9 pb-9 -mt-1.5 flex-1">
              <h3 className="text-[28px] font-extrabold leading-[1.14] mb-0" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-teal-500">{card.titleTeal} </span>
                <br />
                <span className="text-gray-900">{card.titleGray}</span>
              </h3>
              <p className="text-gray-700 leading-[1.6] mt-3">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
}

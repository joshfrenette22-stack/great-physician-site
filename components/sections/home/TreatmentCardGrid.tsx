import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const cards = [
  {
    eyebrow: 'Knee · Hip · Shoulder',
    title: 'Move freely',
    image: '/images/Elderly.png',
    gradient: 'linear-gradient(90deg, #123247, #1D5053)',
  },
  {
    eyebrow: 'Tendon & ligament',
    title: 'Heal the injury',
    image: '/images/Flex.png',
    gradient: 'linear-gradient(90deg, #1D5053, #276D5F)',
  },
  {
    eyebrow: 'Sports & overuse',
    title: 'Back in the game',
    image: '/images/Fit.png',
    gradient: 'linear-gradient(90deg, #276D5F, #318B6B)',
  },
  {
    eyebrow: 'Arthritis & joints',
    title: 'Ease the ache',
    image: '/images/EaseAche.png',
    gradient: 'linear-gradient(90deg, #318B6B, #3CA877)',
  },
];

export function TreatmentCardGrid() {
  return (
    <section id="treat" className="w-full max-w-[1240px] mx-auto px-5 md:px-10 pt-[44px] pb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {cards.map((card) => (
          <a
            key={card.title}
            href="/services"
            className="group relative flex flex-col justify-between min-h-[400px] rounded-[22px] overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-pointer shadow-md"
            style={{ background: card.gradient }}
          >
            {/* Top row */}
            <div className="flex items-center justify-between p-6 pb-0">
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                {card.eyebrow}
              </span>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.16)' }}
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="px-6 pt-[14px]">
              <h3 className="text-[27px] font-extrabold text-white leading-[1.08] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                {card.title}
              </h3>
            </div>

            {/* Masked figure image */}
            <div
              className="relative mt-4 flex-1 min-h-[180px]"
              style={{
                maskImage: 'linear-gradient(to top, transparent 0%, black 28%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 28%)',
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

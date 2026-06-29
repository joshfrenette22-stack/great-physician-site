import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const cards = [
  {
    eyebrow: 'Knee · Hip · Shoulder',
    title: 'Move freely',
    image: '/images/Elderly.png',
    gradient: 'linear-gradient(135deg, #123247 0%, #1D5053 100%)',
  },
  {
    eyebrow: 'Tendon & ligament',
    title: 'Heal the injury',
    image: '/images/Flex.png',
    gradient: 'linear-gradient(135deg, #1D5053 0%, #276D5F 100%)',
  },
  {
    eyebrow: 'Sports & overuse',
    title: 'Back in the game',
    image: '/images/Fit.png',
    gradient: 'linear-gradient(135deg, #276D5F 0%, #318B6B 100%)',
  },
  {
    eyebrow: 'Arthritis & joints',
    title: 'Ease the ache',
    image: '/images/EaseAche.png',
    gradient: 'linear-gradient(135deg, #318B6B 0%, #3CA877 100%)',
  },
];

export function TreatmentCardGrid() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {cards.map((card) => (
          <a
            key={card.title}
            href="/services"
            className="group relative flex flex-col justify-between min-h-[400px] rounded-[22px] overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
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
            <div className="px-6 pt-4">
              <h3 className="text-[27px] font-black text-white leading-tight tracking-tight">
                {card.title}
              </h3>
            </div>

            {/* Masked figure image */}
            <div
              className="relative mt-4 flex-1 min-h-[180px]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
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

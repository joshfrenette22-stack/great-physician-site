import Image from 'next/image';

const cards = [
  {
    image: '/images/stock/photo-1576765608866-5b51046452be.jpg',
    titleTeal: 'Whole-person',
    titleGray: 'lasting results',
    body: 'We pair treatment with real guidance — because getting better means understanding why you hurt and what will actually keep you moving.',
  },
  {
    image: '/images/stock/photo-1486218119243-13883505764c.jpg',
    titleTeal: 'Conservative care,',
    titleGray: 'first',
    body: 'We start with the least invasive option that still has the evidence behind it. Surgery and pharmaceuticals aren\'t the first call here — they\'re the last resort.',
  },
];

export function WhyUsGrid() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-16">
      {/* Doctor avatar chip */}
      <div className="flex items-center gap-3 mb-10">
        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/hric-headshot.jpg"
            alt="Dr. Jerry Hric"
            fill
            className="object-cover"
            sizes="56px"
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight">Dr. Jerry Hric</p>
          <p className="text-xs text-gray-500">Founder & Regenerative Physician</p>
        </div>
      </div>

      {/* 2-col card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card) => (
          <div
            key={card.titleTeal}
            className="bg-gray-50 border border-gray-100 rounded-[24px] overflow-hidden min-h-[360px] flex flex-col"
          >
            {/* Image with fade */}
            <div
              className="relative h-[230px] flex-shrink-0"
              style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              }}
            >
              <Image
                src={card.image}
                alt={card.titleTeal}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="px-9 pb-9 pt-0 flex-1">
              <h3 className="text-[22px] font-bold leading-snug mb-3">
                <span className="text-teal-500">{card.titleTeal} </span>
                <span className="text-gray-900">{card.titleGray}</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

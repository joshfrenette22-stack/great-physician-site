import Image from 'next/image';
import { Clock } from 'lucide-react';

const reviews = [
  {
    name: 'Marcus R.',
    date: 'Sample review',
    avatar: '/images/stock/photo-1560250097-0b93528c311a.jpg',
    text: 'I came in bracing for a hard sell on the most expensive treatment. Instead, Dr. Hric spent twenty minutes explaining why a simpler option might work first. That honesty alone made me trust everything else he said.',
    highlight: 'hard sell',
  },
  {
    name: 'Susan T.',
    date: 'Sample review',
    avatar: '/images/stock/photo-1559839734-2b71ea197ec2.jpg',
    text: 'He actually talked me out of a treatment I thought I needed. Said the evidence wasn\'t strong enough for my situation. I left without a procedure — and without feeling like I wasted my time. That\'s a first.',
    highlight: 'talked me out of a treatment',
  },
  {
    name: 'Dave K.',
    date: 'Sample review',
    avatar: '/images/stock/photo-1607990281513-2c110a25bd8c.jpg',
    text: "Golfer's elbow had me sidelined for eight months. Two rounds of shockwave therapy and I'm back to full practice. Dr. Hric was clear about what to expect and realistic about the timeline. No surprises.",
    highlight: "back to full practice",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1L8.545 5.09H13L9.545 7.637L10.91 12L7 9.273L3.09 12L4.455 7.637L1 5.09H5.455L7 1Z"
            fill="#2EA84E"
          />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-10 py-16">
      <div
        className="rounded-[28px] border border-gray-100 p-14"
        style={{ background: '#F6F8FA' }}
      >
        {/* Heading */}
        <div className="mb-10">
          <p className="gp-eyebrow mb-3">What patients say</p>
          <h2 className="text-[38px] font-black tracking-tight text-gray-900 mb-4">
            Honest medicine earns honest reviews.
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-[460px]">
            These are placeholder reviews shown for layout purposes. Real patient testimonials will be added as we collect verified reviews.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-100 rounded-[20px] p-6 flex flex-col gap-4"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 uppercase tracking-wide">
                    Sample
                  </span>
                </div>
              </div>

              {/* Stars */}
              <StarRating />

              {/* Review text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {review.text.split(review.highlight).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <mark className="bg-green-100 text-green-800 rounded-sm px-0.5 not-italic">
                        {review.highlight}
                      </mark>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Clock className="w-3.5 h-3.5" />
          <span>Placeholder reviews shown for layout. Real patient reviews coming soon.</span>
        </div>
      </div>
    </section>
  );
}

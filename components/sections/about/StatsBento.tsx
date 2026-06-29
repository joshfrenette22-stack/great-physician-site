import Image from 'next/image';
import { Avatar } from '@/components/ui/Avatar';

const teamChips = [
  { name: 'Dr. Hric', image: '/images/hric-headshot.jpg' },
  { name: 'Hope RN', image: undefined },
  { name: 'Maria', image: undefined },
  { name: 'Caleb', image: undefined },
];

const treatmentBadges = ['PRP', 'Prolotherapy', 'Shockwave'];

export function StatsBento() {
  return (
    <section className="bg-white w-full">
      <div
        className="max-w-[1240px] mx-auto"
        style={{ padding: '104px 40px 40px' }}
      >
        {/* Section heading */}
        <h2
          className="font-display font-bold text-gray-900 text-center mx-auto mb-14"
          style={{ fontSize: 46, letterSpacing: '-0.02em', maxWidth: 680 }}
        >
          Great Physician sets the standard for conservative regenerative care
        </h2>

        {/* 2x2 bento grid */}
        <div
          className="grid gap-[22px]"
          style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto' }}
        >
          {/* Card A — patients */}
          <div
            className="rounded-[22px] border border-gray-100 bg-gray-50 flex flex-col justify-between"
            style={{ padding: 36, minHeight: 320 }}
          >
            {/* SVG dot arc smiley */}
            <div className="flex justify-center mb-6" aria-hidden="true">
              <svg width="120" height="72" viewBox="0 0 120 72" fill="none">
                {/* Arc of 13 green dots */}
                {Array.from({ length: 13 }).map((_, i) => {
                  const angle = Math.PI + (i / 12) * Math.PI;
                  const cx = 60 + 48 * Math.cos(angle);
                  const cy = 60 + 48 * Math.sin(angle);
                  return (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r={4}
                      fill="#1C7A39"
                      opacity={0.4 + (i / 12) * 0.6}
                    />
                  );
                })}
                {/* Center smiley circle */}
                <circle cx="60" cy="60" r="18" fill="#EFF9F1" />
                <circle cx="54" cy="56" r="2.5" fill="#1C7A39" />
                <circle cx="66" cy="56" r="2.5" fill="#1C7A39" />
                <path
                  d="M52 64 Q60 70 68 64"
                  stroke="#1C7A39"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            <div>
              <p
                className="font-display font-black text-green-700"
                style={{ fontSize: 38, lineHeight: 1, marginBottom: 4 }}
              >
                1,000+
              </p>
              <p
                className="font-display font-bold text-gray-900 mb-3"
                style={{ fontSize: 24 }}
              >
                patients guided
              </p>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ margin: 0 }}>
                Over a thousand patients have chosen Dr. Hric for conservative, physician-led regenerative care in Northern Colorado.
              </p>
            </div>
          </div>

          {/* Card B — consultations, doctor photo */}
          <div
            className="rounded-[22px] overflow-hidden relative flex flex-col justify-end"
            style={{
              minHeight: 320,
              padding: 36,
              background: 'linear-gradient(135deg, #F6F8FA 0%, #e7f4ea 100%)',
            }}
          >
            {/* Doctor photo — absolute positioned right-bottom */}
            <div
              className="absolute bottom-0 right-0"
              style={{
                width: 200,
                height: 260,
                maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 50%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 50%)',
              }}
              aria-hidden="true"
            >
              <Image
                src="/images/hric-light.jpg"
                alt=""
                fill
                className="object-cover object-right-bottom"
                sizes="200px"
              />
            </div>

            <div className="relative z-10">
              <p
                className="font-display font-black text-teal-600"
                style={{ fontSize: 38, lineHeight: 1, marginBottom: 4 }}
              >
                3,500+
              </p>
              <p
                className="font-display font-bold text-gray-900 mb-3"
                style={{ fontSize: 24 }}
              >
                consultations
              </p>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ margin: 0, maxWidth: 260 }}>
                Thousands of conversations about pain, function, and what&apos;s actually possible — without the oversell.
              </p>
            </div>
          </div>

          {/* Card C — physician-performed, treatment badges */}
          <div
            className="rounded-[22px] bg-gray-50 border border-gray-100 relative flex flex-col justify-end"
            style={{ padding: 36, minHeight: 320 }}
          >
            {/* Treatment badge pills — staggered top-right */}
            <div
              className="absolute top-8 right-8 flex flex-col items-end gap-2"
              aria-hidden="true"
            >
              {treatmentBadges.map((label, i) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full text-sm font-semibold border"
                  style={{
                    padding: '6px 14px',
                    background: '#EFF9F1',
                    borderColor: '#B4E4C0',
                    color: '#1C7A39',
                    transform: `translateX(${i * 6}px)`,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div>
              <p
                className="font-display font-black text-green-700"
                style={{ fontSize: 38, lineHeight: 1, marginBottom: 4 }}
              >
                100%
              </p>
              <p
                className="font-display font-bold text-gray-900 mb-3"
                style={{ fontSize: 24 }}
              >
                physician-performed
              </p>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ margin: 0 }}>
                Every regenerative treatment — PRP, prolotherapy, shockwave — is performed by Dr. Hric himself. Not a tech. Not a PA.
              </p>
            </div>
          </div>

          {/* Card D — small team, avatar chips */}
          <div
            className="rounded-[22px] bg-gray-50 border border-gray-100 flex flex-col justify-between"
            style={{ padding: 36, minHeight: 320 }}
          >
            {/* Avatar chips row */}
            <div className="flex items-center gap-3 flex-wrap">
              {teamChips.map((member) => (
                <div key={member.name} className="flex items-center gap-2 rounded-full bg-white border border-gray-200 pr-4 pl-1 py-1">
                  <Avatar
                    src={member.image}
                    name={member.name}
                    size="sm"
                  />
                  <span className="text-sm font-medium text-gray-700">{member.name}</span>
                </div>
              ))}
            </div>

            <div>
              <p
                className="font-display font-black text-teal-600"
                style={{ fontSize: 38, lineHeight: 1, marginBottom: 4 }}
              >
                A small team
              </p>
              <p
                className="font-display font-bold text-gray-900 mb-3"
                style={{ fontSize: 24 }}
              >
                who actually listens
              </p>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ margin: 0 }}>
                We keep our practice small by design. You&apos;ll know your team by name — and they&apos;ll know yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

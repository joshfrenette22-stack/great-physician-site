import Image from 'next/image';
import { Avatar } from '@/components/ui/Avatar';
import { ScrollReveal } from '@/components/sections/shared/ScrollReveal';

const teamChips = [
  { name: 'Dr. Hric', image: '/images/hric-headshot.jpg' },
  { name: 'Hope, RN', image: undefined },
  { name: 'Maria', image: undefined },
  { name: 'Caleb', image: undefined },
];

// Treatment badges: staggered vertically per design (first and third at top, second offset down)
const treatmentBadges = [
  { label: 'PRP', offsetTop: 0 },
  { label: 'Prolotherapy', offsetTop: 28 },
  { label: 'Shockwave', offsetTop: 0 },
];

export function StatsBento() {
  return (
    <section className="bg-white w-full">
      <ScrollReveal className="max-w-[1240px] mx-auto px-5 pt-14 pb-10 md:px-10 md:pt-[104px] md:pb-10">
        {/* Section heading */}
        <h2
          data-reveal="fade"
          className="font-display font-extrabold text-gray-900 text-center mx-auto text-[28px] md:text-[38px] lg:text-[46px]"
          style={{
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            maxWidth: 760,
            marginBottom: 40,
          }}
        >
          Great Physician sets the standard for conservative regenerative care
        </h2>

        {/* 2x2 bento grid */}
        <div className="grid gap-[22px] grid-cols-1 md:grid-cols-2">

          {/* Card A — patients guided */}
          <div
            data-reveal
            data-reveal-delay="1"
            className="rounded-[22px] border border-gray-100 bg-gray-50 flex flex-col justify-between"
            style={{ padding: 'clamp(20px, 4vw, 36px)', minHeight: 280, position: 'relative', overflow: 'hidden' }}
          >
            {/* SVG dot arc + smiley — matches design exactly */}
            <div className="flex justify-center" style={{ padding: '12px 0 24px' }} aria-hidden="true">
              <svg width="190" height="120" viewBox="0 0 180 120" fill="none">
                <g fill="var(--green-500, #22c55e)">
                  <circle cx="18" cy="95" r="5.5" opacity="0.30" />
                  <circle cx="20.4" cy="76.4" r="5.5" opacity="0.40" />
                  <circle cx="27.6" cy="59" r="5.5" opacity="0.50" />
                  <circle cx="39.1" cy="44.1" r="5.5" opacity="0.62" />
                  <circle cx="54" cy="32.6" r="5.5" opacity="0.74" />
                  <circle cx="71.4" cy="25.4" r="5.5" opacity="0.86" />
                  <circle cx="90" cy="23" r="5.5" />
                  <circle cx="108.6" cy="25.4" r="5.5" opacity="0.86" />
                  <circle cx="126" cy="32.6" r="5.5" opacity="0.74" />
                  <circle cx="140.9" cy="44.1" r="5.5" opacity="0.62" />
                  <circle cx="152.4" cy="59" r="5.5" opacity="0.50" />
                  <circle cx="159.6" cy="76.4" r="5.5" opacity="0.40" />
                  <circle cx="162" cy="95" r="5.5" opacity="0.30" />
                </g>
                {/* Smiley face circle */}
                <circle cx="90" cy="95" r="20" fill="var(--green-500, #22c55e)" />
                <circle cx="83" cy="91" r="2.4" fill="#fff" />
                <circle cx="97" cy="91" r="2.4" fill="#fff" />
                <path d="M82 99 Q90 106 98 99" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <div>
              <div
                className="font-display font-extrabold text-green-700 text-[28px] md:text-[38px]"
                style={{ lineHeight: 1 }}
              >
                1,000+
              </div>
              <div
                className="font-display font-bold text-gray-900 text-[18px] md:text-[22px] lg:text-[24px]"
                style={{ marginTop: 4 }}
              >
                patients guided
              </div>
              <p style={{ fontSize: 15, color: 'var(--text-muted, #6B7280)', margin: '10px 0 0' }}>
                Neighbors across Northern Colorado finding real, lasting relief.
              </p>
            </div>
          </div>

          {/* Card B — consultations + doctor photo */}
          <div
            data-reveal
            data-reveal-delay="2"
            className="rounded-[22px] relative flex flex-col justify-end overflow-hidden"
            style={{
              minHeight: 280,
              padding: 'clamp(20px, 4vw, 36px)',
              background: 'linear-gradient(135deg, var(--gray-50, #F9FAFB) 38%, #e7f4ea 100%)',
              border: '1px solid var(--border-subtle, #E5E7EB)',
            }}
          >
            {/* Doctor photo — absolute, right, masked */}
            <img
              src="/images/hric-light.jpg"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: -18,
                bottom: 0,
                height: 230,
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, #000 34%), linear-gradient(to top, #000 62%, transparent 96%)',
                WebkitMaskComposite: 'source-in',
                maskImage:
                  'linear-gradient(to right, transparent 0%, #000 34%), linear-gradient(to top, #000 62%, transparent 96%)',
                maskComposite: 'intersect',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                className="font-display font-extrabold text-[28px] md:text-[38px]"
                style={{ lineHeight: 1, color: 'var(--color-primary, #235A7C)' }}
              >
                3,500+
              </div>
              <div
                className="font-display font-bold text-gray-900 text-[18px] md:text-[22px] lg:text-[24px]"
                style={{ marginTop: 4 }}
              >
                consultations
              </div>
              <p style={{ fontSize: 15, color: 'var(--text-muted, #6B7280)', margin: '10px 0 0', maxWidth: 230 }}>
                Unhurried visits with real listening and complete discretion.
              </p>
            </div>
          </div>

          {/* Card C — physician-performed + treatment badge pills */}
          <div
            data-reveal
            data-reveal-delay="3"
            className="rounded-[22px] bg-gray-50 border border-gray-100 relative flex flex-col justify-end"
            style={{ padding: 'clamp(20px, 4vw, 36px)', minHeight: 280, overflow: 'hidden' }}
          >
            {/* Treatment badge pills — staggered per design */}
            <div
              style={{ position: 'absolute', right: 30, top: 28, display: 'flex', gap: 10, alignItems: 'flex-start' }}
              aria-hidden="true"
            >
              {treatmentBadges.map(({ label, offsetTop }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full font-semibold text-gray-900"
                  style={{
                    padding: '8px 14px',
                    fontSize: 14,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    marginTop: offsetTop,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div>
              <div
                className="font-display font-extrabold text-green-700 text-[28px] md:text-[38px]"
                style={{ lineHeight: 1 }}
              >
                100%
              </div>
              <div
                className="font-display font-bold text-gray-900 text-[18px] md:text-[22px] lg:text-[24px]"
                style={{ marginTop: 4 }}
              >
                physician-performed
              </div>
              <p style={{ fontSize: 15, color: 'var(--text-muted, #6B7280)', margin: '10px 0 0' }}>
                Every injection and procedure is done by Dr. Hric, never handed off.
              </p>
            </div>
          </div>

          {/* Card D — small team + avatar chips */}
          <div
            data-reveal
            data-reveal-delay="4"
            className="rounded-[22px] bg-gray-50 border border-gray-100 flex flex-col justify-end relative overflow-hidden"
            style={{ padding: 'clamp(20px, 4vw, 36px)', minHeight: 280 }}
          >
            {/* Avatar chips — absolute top area */}
            <div
              style={{
                position: 'absolute',
                right: 24,
                top: 30,
                left: 24,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                justifyContent: 'flex-end',
              }}
            >
              {teamChips.map((member) => (
                <span
                  key={member.name}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full font-semibold text-gray-900"
                  style={{
                    padding: '5px 14px 5px 5px',
                    fontSize: 14,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  }}
                >
                  <Avatar
                    src={member.image}
                    name={member.name}
                    size="sm"
                  />
                  {member.name}
                </span>
              ))}
            </div>

            <div>
              <div
                className="font-display font-extrabold text-[28px] md:text-[38px]"
                style={{ lineHeight: 1, color: 'var(--color-primary, #235A7C)' }}
              >
                A small team
              </div>
              <div
                className="font-display font-bold text-gray-900 text-[18px] md:text-[22px] lg:text-[24px]"
                style={{ marginTop: 4 }}
              >
                who actually listens
              </div>
              <p style={{ fontSize: 15, color: 'var(--text-muted, #6B7280)', margin: '10px 0 0' }}>
                A dedicated circle of clinicians and staff who know you by name.
              </p>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

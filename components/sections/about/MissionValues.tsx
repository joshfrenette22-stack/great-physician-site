import { Shield, MessageSquare, User, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ValueCard {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  body: string;
}

const valueCards: ValueCard[] = [
  {
    icon: Shield,
    iconBg: 'var(--green-50, #F0FDF4)',
    iconColor: 'var(--green-700, #15803D)',
    title: 'Conservative first',
    body: 'The least invasive path that can realistically help, always our starting point.',
  },
  {
    icon: MessageSquare,
    iconBg: 'var(--teal-50, #F0FDFA)',
    iconColor: 'var(--color-primary, #235A7C)',
    title: 'Honest guidance',
    body: 'Clear information and fair expectations, even when the answer is \u201cnot yet.\u201d',
  },
  {
    icon: User,
    iconBg: 'var(--green-50, #F0FDF4)',
    iconColor: 'var(--green-700, #15803D)',
    title: 'Physician-performed',
    body: 'Dr. Hric performs every treatment himself, your care is never handed off.',
  },
  {
    icon: Heart,
    iconBg: 'var(--teal-50, #F0FDFA)',
    iconColor: 'var(--color-primary, #235A7C)',
    title: 'Whole-person care',
    body: 'Body and spirit, we treat you as a person, not a diagnosis on a chart.',
  },
];

export function MissionValues() {
  return (
    <section className="bg-gray-50 w-full px-5 py-16 md:px-10 md:py-[104px]">
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <h2
          className="font-display font-extrabold text-gray-900 text-center mx-auto text-[32px] md:text-[40px] lg:text-[46px]"
          style={{ letterSpacing: '-0.025em', marginBottom: 40 }}
        >
          A different approach to care
        </h2>

        {/* Bento: single col mobile → 2 col md → 3 col lg */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] md:gap-[22px]"
          style={{
            gridTemplateRows: 'auto',
          }}
        >
          {/* Mission card — spans 2 rows only in the 3-col desktop layout */}
          <div
            className="rounded-[24px] text-white flex flex-col justify-between lg:[grid-row:span_2]"
            style={{
              background: 'var(--gradient-brand, linear-gradient(135deg, #1C7A39 0%, #235A7C 100%))',
              padding: 36,
              minHeight: 360,
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.82)' }}>
              Our mission is simple
            </div>

            <div>
              <div
                className="font-display font-extrabold"
                style={{ fontSize: 32, lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: 0, color: '#fff' }}
              >
                Restore function. Renew hope. Encourage stewardship.
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.88)', margin: '18px 0 0' }}>
                We&apos;re here to help our neighbors in Northern Colorado heal well, move freely, and live fully, caring for the whole person along the way.
              </p>
            </div>
          </div>

          {/* Value cards — 2 per column */}
          {valueCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-[24px] border border-gray-100 flex flex-col"
                style={{ padding: 28 }}
              >
                {/* Icon chip */}
                <span
                  className="inline-flex items-center justify-center rounded-[12px] flex-shrink-0"
                  style={{
                    width: 46,
                    height: 46,
                    background: card.iconBg,
                    marginBottom: 32,
                  }}
                >
                  <Icon size={22} color={card.iconColor} />
                </span>

                {/* Text pushed to bottom */}
                <div style={{ marginTop: 'auto' }}>
                  <div
                    className="font-display font-bold text-gray-900 text-[20px] md:text-[22px] lg:text-[24px]"
                  >
                    {card.title}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--text-muted, #6B7280)', margin: '8px 0 0' }}>
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

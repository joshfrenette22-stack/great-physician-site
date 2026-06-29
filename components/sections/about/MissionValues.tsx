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
    iconBg: '#EFF9F1',
    iconColor: '#1C7A39',
    title: 'Conservative first',
    body: 'We lead with the least invasive, most evidence-backed option every time — not the most profitable one.',
  },
  {
    icon: MessageSquare,
    iconBg: '#EDF2F4',
    iconColor: '#235A7C',
    title: 'Honest guidance',
    body: 'We explain the evidence and its limits before you spend a dollar. No bait-and-switch, no overselling.',
  },
  {
    icon: User,
    iconBg: '#EFF9F1',
    iconColor: '#1C7A39',
    title: 'Physician-performed',
    body: 'Dr. Hric performs every regenerative treatment himself. Not a tech. Not a PA. Every visit.',
  },
  {
    icon: Heart,
    iconBg: '#EDF2F4',
    iconColor: '#235A7C',
    title: 'Whole-person care',
    body: 'Pain is rarely just physical. We look at your full picture — movement, lifestyle, goals — and build a lasting plan.',
  },
];

export function MissionValues() {
  return (
    <section className="bg-gray-50 w-full" style={{ padding: '104px 40px' }}>
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <h2
          className="font-display font-bold text-gray-900 text-center mx-auto mb-14"
          style={{ fontSize: 46, letterSpacing: '-0.02em', maxWidth: 600 }}
        >
          A different approach to care
        </h2>

        {/* 3-col bento */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: 22,
          }}
        >
          {/* Mission card — spans 2 rows in col 1 */}
          <div
            className="rounded-[24px] text-white flex flex-col justify-between"
            style={{
              background: 'linear-gradient(100deg, #16384C 0%, #235A7C 42%, #2EA84E 100%)',
              padding: 40,
              minHeight: 520,
              gridRow: 'span 2',
            }}
          >
            <p
              className="font-semibold uppercase"
              style={{ fontSize: 15, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.60)' }}
            >
              Our mission is simple
            </p>

            <div>
              <p
                className="font-display font-black mb-6"
                style={{ fontSize: 32, lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Restore function. Renew hope. Encourage stewardship.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', margin: 0 }}>
                We believe your body was made to heal and your health is a gift worth stewarding. Our practice exists to give you an honest, conservative path back to doing what matters — guided by a physician who actually performs your care.
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
                style={{ padding: 34, minHeight: 250 }}
              >
                {/* Icon chip */}
                <div
                  className="flex items-center justify-center rounded-[12px] flex-shrink-0"
                  style={{
                    width: 46,
                    height: 46,
                    background: card.iconBg,
                  }}
                >
                  <Icon size={20} color={card.iconColor} />
                </div>

                {/* Text pushed to bottom */}
                <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                  <h3
                    className="font-display font-bold text-gray-900 mb-2"
                    style={{ fontSize: 24, lineHeight: 1.2, letterSpacing: '-0.01em' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ margin: 0 }}>
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
